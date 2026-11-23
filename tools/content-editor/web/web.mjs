import {catalog,applyEdits,additionPath,inspectRoutes} from "./catalog.mjs";
import {zip,strToU8} from "./fflate.mjs";
import {read,write} from "./storage.mjs";

export {additionPath,inspectRoutes};

const scope=new URL("./",import.meta.url);
const gameRoot=new URL("../",scope);
const urlFor=(name,root=gameRoot)=>new URL(name.split("/").map(encodeURIComponent).join("/"),root);

async function load(url,format,options){
  const response=await fetch(url,options);
  if(!response.ok)throw new Error("게임 파일을 불러오지 못했습니다. "+url.pathname);
  return response[format]();
}
const manifest=await load(new URL("manifest.json",scope),"json",{cache:"no-cache"});
const {release,sourceCommit,files}=manifest;
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
  return catalog({...original,...saved.sources},[...new Set([...assetNames,...Object.keys(saved.media)])],release+":"+saved.revision);
}

function mediaType(filename){
  return {webp:"image/webp",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",avif:"image/avif",
    mp3:"audio/mpeg",ogg:"audio/ogg",wav:"audio/wav"}[filename.split(".").at(-1).toLowerCase()];
}

function assetBlob(filename,encoded){
  const max=20*1024*1024;
  const type=mediaType(filename);
  if(!type||typeof encoded!=="string"||encoded.length>Math.ceil(max/3)*4)
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
  const newPath=body.addition&&!["scene","opening","fx"].includes(body.addition.kind)?additionPath(body.addition):null;
  const uploads=Object.fromEntries(Object.entries(body.uploads??{}).map(([name,data])=>{
    if(!current.assetSet.has(name)&&name!==newPath)throw new Error("이 파일은 등록할 수 없습니다.");
    return [name,assetBlob(name,data)];
  }));
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
  registration??=navigator.serviceWorker.register(new URL("service-worker.js",scope));
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

// Compare the distributable contents with the original release, including earlier browser saves.
export async function review(body){
  const update=edits(model(),body);
  const proposed=catalog({...original,...update.sources},[...new Set([...assetNames,...Object.keys(update.media)])]);
  const issues=new Set();
  function resource(path,location){
    if(path&&!proposed.assetSet.has(path))issues.add(location+" · 리소스 없음 · "+path);
  }
  for(const group of proposed.groups){
    resource(group.asset,group.title);
    for(const field of group.fields){
      const v=field.value;
      if(field.paths||field.type==="image"||field.type==="audio")resource(v,group.title);
      if(field.type==="prologue")resource("assets/prologue/"+v+".webp",group.title);
      if(field.type==="cast"){
        for(const actor of v){
          const path=proposed.inventory.standing[actor];
          if(path)resource(path,group.title);else issues.add(group.title+" · 등장인물 참조 없음 · "+actor);
        }
      }
      const map=proposed.inventory[field.type==="cue"?"track":field.media];
      if(map&&v){
        if(!Object.hasOwn(map,v))issues.add(group.title+" · "+field.label+" 참조 없음 · "+v);
        else resource(map[v],group.title);
      }
      if(field.type==="lines"||field.type==="choices"){
        const lists=field.type==="lines"?[v]:v.map(choice=>choice[4]??[]);
        for(const lines of lists)lines.forEach(([,,art,cue],index)=>{
          const where=group.title+" · "+(index+1)+"번 대사";
          const refs=cue??{};
          for(const [key,id] of [["ending",refs.cg||(field.metadata==="illustration"&&art)],["track",refs.bgm],
            ["standing",refs.left||refs.standing],["standing",refs.right]]){
            if(!id)continue;
            const path=proposed.inventory[key]?.[id];
            if(path)resource(path,where);else issues.add(where+" · 참조 없음 · "+id);
          }
          for(const side of ["left","right"]){
            const id=refs[side+"Expression"];if(!id)continue;
            const exp=proposed.cueFields.expressions[id];
            if(!exp||exp.actor!==refs[side])issues.add(where+" · 표정 참조 확인 · "+id);
            else resource(exp.file,where);
          }
          resource(refs.se,where);
        });
      }
    }
  }
  const scenes=proposed.groups.filter(g=>["event","visit"].includes(g.preview?.kind)).map(g=>({
    id:g.preview.id,linked:g.fields.some(f=>f.trigger&&f.value===0),choices:g.fields.find(f=>f.type==="choices")?.value??[]
  }));
  for(const issue of inspectRoutes(scenes))issues.add(issue.id+" · "+issue.message);
  const {structuredPatch}=await import("./jsdiff/patch/create.js");
  const changes=Object.entries(update.sources).map(([name,source])=>{
    const path="current/"+name;
    return {path,hunks:structuredPatch(path,path,original[name],source,undefined,undefined,{context:2}).hunks};
  });
  for(const [path,blob] of Object.entries(update.media))changes.push({path:"current/"+path,bytes:blob.size});
  return {issues:[...issues],changes};
}

export async function api(path,body){
  const current=model();
  if(path==="/api/catalog"){
    const {groups,inventory,version,trackOptions,roomOptions,artOptions,recruitCastOptions,recruitArtOptions,recruitTargets,cueFields}=current;
    const recruits=[...recruitTargets.keys()].map(id=>[id,groups.find(group=>group.key==="recruit-"+id)?.title??id]);
    return {groups,inventory,version,trackOptions,roomOptions,artOptions,recruitCastOptions,recruitArtOptions,recruits,cueFields,canUndo:Boolean(saved.previous),hasOlder:hasFiles(older),publishCount:sourceCommit?Object.keys(saved.sources).length+Object.keys(saved.media).length:0};
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
    const allFiles=[...new Set([...files,...Object.keys(saved.media)])];
    for(let i=0;i<allFiles.length;i+=8)await Promise.all(allFiles.slice(i,i+8).map(async name=>{
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


export async function uploadToGitHub(token,onProgress){
  const {publishChanges}=await import("./github.mjs");
  const changes=Object.entries(saved.sources).map(([name,value])=>({path:"current/"+name,bytes:strToU8(value)}));
  for(const [name,blob] of Object.entries(saved.media)){
    changes.push({path:"current/"+name,bytes:new Uint8Array(await blob.arrayBuffer())});
  }
  return publishChanges({token,sourceCommit,changes,onProgress});
}

export const tokenKey="phantomhive-editor:github-token:v1";
const utf8=new TextEncoder();

export function hasSavedToken(){
  return localStorage.getItem(tokenKey)!==null;
}

async function tokenCipher(password,salt){
  const material=await crypto.subtle.importKey("raw",utf8.encode(password),"PBKDF2",false,["deriveKey"]);
  return crypto.subtle.deriveKey(
    {name:"PBKDF2",salt,iterations:600000,hash:"SHA-256"},material,
    {name:"AES-GCM",length:256},false,["encrypt","decrypt"]
  );
}

export async function saveToken(token,password){
  if(!/^github_pat_[A-Za-z0-9_]+$/.test(token))throw new Error("GitHub에서 발급한 Fine-grained 토큰을 입력해 주세요.");
  if(password.length<12)throw new Error("잠금 비밀번호를 12자 이상 입력해 주세요.");
  const salt=crypto.getRandomValues(new Uint8Array(16));
  const iv=crypto.getRandomValues(new Uint8Array(12));
  const key=await tokenCipher(password,salt);
  const encrypted=await crypto.subtle.encrypt({name:"AES-GCM",iv},key,utf8.encode(token));
  const encode=bytes=>btoa(String.fromCharCode(...bytes));
  const record=JSON.stringify({salt:encode(salt),iv:encode(iv),encrypted:encode(new Uint8Array(encrypted))});
  try{
    localStorage.setItem(tokenKey,record);
    if(localStorage.getItem(tokenKey)!==record)throw new Error("storage unavailable");
  }catch{
    throw new Error("이 브라우저가 사이트 데이터 저장을 막고 있습니다. 사이트 데이터 저장을 허용한 뒤 다시 시도해 주세요.");
  }
}

export async function unlockToken(password){
  const saved=localStorage.getItem(tokenKey);
  if(saved===null)throw new Error("이 브라우저에 저장한 토큰이 없습니다.");
  try{
    const {salt,iv,encrypted}=JSON.parse(saved);
    const decode=value=>Uint8Array.from(atob(value),character=>character.charCodeAt(0));
    const key=await tokenCipher(password,decode(salt));
    const token=await crypto.subtle.decrypt({name:"AES-GCM",iv:decode(iv)},key,decode(encrypted));
    return new TextDecoder().decode(token);
  }catch{
    throw new Error("잠금 비밀번호가 맞는지 확인해 주세요. 잊어버렸다면 저장한 토큰을 삭제한 뒤 다시 등록할 수 있습니다.");
  }
}

export function forgetToken(){
  localStorage.removeItem(tokenKey);
}
