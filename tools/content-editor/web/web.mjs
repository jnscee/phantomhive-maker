import {catalog,applyEdits} from "./catalog.mjs";
import {zip,strToU8} from "./fflate.mjs";
import {read,write} from "./storage.mjs";

const scope=new URL("./",import.meta.url);
const gameRoot=new URL("../",scope);
const urlFor=(name,root=gameRoot)=>new URL(name.split("/").map(encodeURIComponent).join("/"),root);

async function load(url,format){
  const response=await fetch(url);
  if(!response.ok)throw new Error("게임 파일을 불러오지 못했습니다. "+url.pathname);
  return response[format]();
}
const manifest=await load(new URL("manifest.json",scope),"json");
const {release,files}=manifest;
const assetNames=files.filter(name=>name.startsWith("assets/"));
const updatedUrl=name=>new URL("?v="+release,urlFor(name));
const scripts=files.filter(name=>name.startsWith("js/"));
const [original,gameHTML,previewScript]=await Promise.all([
  Promise.all(scripts.map(async name=>[name.slice(3),await load(updatedUrl(name),"text")])).then(Object.fromEntries),
  load(updatedUrl("index.html"),"text"),
  load(new URL("preview.js?v="+release,scope),"text")
]);
const key="release:"+release;
let saved=await read(key)??{revision:"initial",sources:{},media:{},previous:null};
const recent=await read("last-release");
const older=recent&&recent!==release?await read("release:"+recent):null;
const hasFiles=workspace=>Boolean(workspace&&(Object.keys(workspace.sources).length||Object.keys(workspace.media).length));

function model(){
  return catalog({...original,...saved.sources},assetNames,release+":"+saved.revision);
}

function mediaType(filename){
  return {webp:"image/webp",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",avif:"image/avif",
    mp3:"audio/mpeg",ogg:"audio/ogg",wav:"audio/wav"}[filename.split(".").at(-1).toLowerCase()];
}

function assetBlob(filename,encoded){
  const max=20*1024*1024;
  const type=mediaType(filename);
  if(!type||!assetNames.includes(filename)||typeof encoded!=="string"||encoded.length>Math.ceil(max/3)*4)
    throw new Error("교체할 리소스 또는 파일 크기를 확인해 주세요. 파일당 20 MB까지 가능합니다.");
  const binary=atob(encoded);
  const data=Uint8Array.from(binary,c=>c.charCodeAt(0));
  const starts=(value,offset=0)=>binary.startsWith(value,offset);
  const riff=starts("RIFF");
  const signatures={
    "image/webp":()=>riff&&starts("WEBP",8),
    "image/png":()=>starts("\x89PNG\r\n\x1a\n"),
    "image/jpeg":()=>starts("\xff\xd8\xff"),
    "image/gif":()=>starts("GIF87a")||starts("GIF89a"),
    "image/avif":()=>starts("ftyp",4)&&(starts("avif",8)||starts("avis",8)),
    "audio/mpeg":()=>starts("ID3")||data[0]===255&&(data[1]&224)===224,
    "audio/ogg":()=>starts("OggS"),
    "audio/wav":()=>riff&&starts("WAVE",8)
  };
  if(data.length<12||data.length>max||!signatures[type]())
    throw new Error("기존 리소스와 같은 형식의 파일을 선택해 주세요. "+filename);
  return new Blob([data],{type});
}

function edits(current,body){
  const changes=applyEdits(current,body);
  const sources={...saved.sources,...changes};
  for(const name of Object.keys(changes))if(sources[name]===original[name])delete sources[name];
  const uploads=Object.fromEntries(Object.entries(body.uploads??{}).map(([name,data])=>[name,assetBlob(name,data)]));
  return {sources,media:{...saved.media,...uploads},files:[...Object.keys(changes),...Object.keys(uploads)]};
}

const mediaUrls=new Map();

async function commit(update,previous){
  const next={revision:crypto.randomUUID(),sources:update.sources,media:update.media,previous};
  await write(key,next,saved.revision);
  for(const [filename,url] of mediaUrls){
    if(saved.media[filename]!==next.media[filename]){
      URL.revokeObjectURL(url);
      mediaUrls.delete(filename);
    }
  }
  saved=next;
  if(hasFiles(next))await write("last-release",release);
}

const scriptBlob=source=>new Blob([source],{type:"text/javascript; charset=utf-8"});
const htmlBlob=source=>new Blob([source],{type:"text/html; charset=utf-8"});
let activeToken;
let registration;

async function preview(current,body){
  const update=edits(current,body);
  if(body.preview && !current.groups.some(group=>JSON.stringify(group.preview)===JSON.stringify(body.preview))
    && body.preview.id!=="custom-"+body.newEvent?.id)throw new Error("테스트할 장면을 찾지 못했습니다.");
  if(!navigator.serviceWorker)throw new Error("이 브라우저에서는 게임 미리보기를 열 수 없습니다.");
  registration??=navigator.serviceWorker.register(new URL("service-worker.mjs",scope),{type:"module"});
  await registration;
  await navigator.serviceWorker.ready;
  const token=crypto.randomUUID();
  const memoryStorage=`const localStorage=(()=>{const data=new Map();return {
    getItem:key=>data.has(key)?data.get(key):null,setItem:(key,value)=>data.set(key,String(value)),
    removeItem:key=>data.delete(key),clear:()=>data.clear()
  };})();`;
  const overrides={
    ...update.media,
    ...Object.fromEntries(Object.entries({...original,...update.sources}).map(([name,source])=>["js/"+name,scriptBlob(source)])),
    "editor-storage.js":scriptBlob(memoryStorage),
    "editor-preview.js":scriptBlob("const editorPreview="+JSON.stringify(body.preview??null)+";\n"+previewScript),
    "index.html":htmlBlob(gameHTML
      .replace("<head>",'<head><script src="editor-storage.js"></script>')
      .replace("</body>",'<script src="editor-preview.js"></script></body>'))
  };
  await write("preview",{token,expires:Date.now()+30*60*1000,overrides});
  activeToken=token;
  return {url:new URL("preview/"+token+"/index.html",scope).href};
}

export async function closePreview(){
  const session=await read("preview");
  if(session?.token===activeToken)await write("preview",undefined);
  activeToken=undefined;
}

export function assetUrl(filename){
  if(!saved.media[filename])return updatedUrl(filename).href;
  if(!mediaUrls.has(filename))mediaUrls.set(filename,URL.createObjectURL(saved.media[filename]));
  return mediaUrls.get(filename);
}

export async function api(path,body){
  const current=model();
  if(path==="/api/catalog"){
    const {groups,inventory,version,trackOptions,roomOptions}=current;
    return {groups,inventory,version,trackOptions,roomOptions,canUndo:Boolean(saved.previous),hasOlder:hasFiles(older)};
  }
  if(path==="/api/preview")return preview(current,body);
  if(path==="/api/save"){
    const update=edits(current,body);
    if(update.files.length)await commit(update,{sources:saved.sources,media:saved.media});
    return {files:update.files};
  }
  if(path==="/api/undo"&&saved.previous){
    await commit(saved.previous,null);
    return {files:[]};
  }
  throw new Error("처리할 수 없는 요청입니다.");
}

async function archive(entries,filename){
  const zipped=await new Promise((resolve,reject)=>zip(entries,{level:0},(error,data)=>error?reject(error):resolve(data)));
  const url=URL.createObjectURL(new Blob([zipped],{type:"application/zip"}));
  const link=document.createElement("a");
  link.href=url;
  link.download=filename;
  link.click();
  setTimeout(()=>URL.revokeObjectURL(url),60000);
}

export async function exportZip(kind){
  if(kind==="game"){
    const entries={};
    for(let i=0;i<files.length;i+=8)await Promise.all(files.slice(i,i+8).map(async name=>{
      const source=name.startsWith("js/")?saved.sources[name.slice(3)]:undefined;
      entries[name]=source!==undefined?strToU8(source)
        :new Uint8Array(await (saved.media[name]?.arrayBuffer()??load(updatedUrl(name),"arrayBuffer")));
    }));
    return archive(entries,"phantomhive-game.zip");
  }
  const workspace=kind==="older"?older:saved;
  if(!hasFiles(workspace))throw new Error("먼저 편집 내용을 저장해 주세요.");
  const entries=Object.fromEntries(Object.entries(workspace.sources).map(([name,source])=>["current/"+name,strToU8(source)]));
  for(const [name,blob] of Object.entries(workspace.media))entries["current/"+name]=new Uint8Array(await blob.arrayBuffer());
  return archive(entries,kind==="older"?"phantomhive-previous-changes.zip":"phantomhive-changes.zip");
}
