import http from "node:http";
import {
  createReadStream, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync,
  renameSync, rmSync, statSync, writeFileSync
} from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";
import { createHash, randomUUID } from "node:crypto";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { applyEdits, catalog } from "./catalog.mjs";

const editor = path.dirname(fileURLToPath(import.meta.url));
const source = path.resolve(editor,"../../current");
const temporary = mkdtempSync(path.join(tmpdir(),"phantomhive-editor-"));
const base = path.join(temporary,"game");
const command = process.platform==="win32" ? ["py","-3"] : ["python3"];
const port = Number(process.env.EPM_EDITOR_PORT || 4179);
const origin = "http://127.0.0.1:"+port;
const maxMedia = 20*1024*1024;
const maxRequest = 60*1024*1024;
const types = {
  ".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",
  ".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg",".jpeg":"image/jpeg",".gif":"image/gif",
  ".avif":"image/avif",".svg":"image/svg+xml",".mp3":"audio/mpeg",".ogg":"audio/ogg",".wav":"audio/wav",
  ".woff":"font/woff",".woff2":"font/woff2",".zip":"application/zip"
};
const previews = new Map();
let revision = 0;
let lastSave = null;
let exporting = false;
const revisions = path.join(editor,".editor-backups");

process.on("exit",()=>rmSync(temporary,{recursive:true,force:true}));
function runPython(args) {
  const result=spawnSync(command[0],[...command.slice(1),...args],{encoding:"utf8",windowsHide:true});
  if(result.error || result.status!==0)
    throw new Error("게임 빌드를 열 수 없습니다. Python 3 설치와 저장소 ZIP 파일을 확인해 주세요.\n"+(result.stderr||result.error?.message||""));
}
try { runPython([path.join(source,"build.py"),base]); }
catch(error) { console.error(error.message); process.exit(1); }

const assets = readdirSync(path.join(base,"assets"),{recursive:true,withFileTypes:true})
  .filter(entry=>entry.isFile())
  .map(entry=>path.relative(base,path.join(entry.parentPath,entry.name)).split(path.sep).join("/"))
  .sort();

function currentModel() {
  const files=Object.fromEntries(readdirSync(source).filter(file=>file.endsWith(".js")).sort()
    .map(file=>[file,readFileSync(path.join(source,file),"utf8")]));
  const version=createHash("sha256").update(JSON.stringify(files)).digest("hex")+":"+revision;
  return catalog(files,assets,version);
}

function assetBytes(filename, encoded) {
  if(!assets.includes(filename)||typeof encoded!=="string"||encoded.length>Math.ceil(maxMedia/3)*4||!/^[\w+/]+={0,2}$/.test(encoded))
    throw new Error("교체할 리소스 또는 파일 크기를 확인해 주세요. 파일당 20 MB까지 가능합니다.");
  const data=Buffer.from(encoded,"base64");
  const extension=path.extname(filename).toLowerCase();
  const ascii=(from,to)=>data.toString("ascii",from,to);
  const riff = ascii(0,4)==="RIFF";
  const signatures={
    ".webp":()=>riff&&ascii(8,12)==="WEBP",
    ".png":()=>data.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])),
    ".jpg":()=>data[0]===255&&data[1]===216&&data[2]===255,
    ".gif":()=>["GIF87a","GIF89a"].includes(ascii(0,6)),
    ".avif":()=>ascii(4,8)==="ftyp"&&["avif","avis"].includes(ascii(8,12)),
    ".mp3":()=>ascii(0,3)==="ID3"||(data[0]===255&&(data[1]&224)===224),
    ".ogg":()=>ascii(0,4)==="OggS",
    ".wav":()=>riff&&ascii(8,12)==="WAVE"
  };
  if (data.length<12 || data.length>maxMedia || !signatures[extension===".jpeg"?".jpg":extension]?.())
    throw new Error("기존 리소스와 같은 형식의 파일을 선택해 주세요. "+filename);
  return data;
}

function snapshot(body) {
  const model=currentModel();
  const files=applyEdits(model,body);
  const uploads=Object.fromEntries(Object.entries(body.uploads??{}).map(([filename,base64])=>[filename,assetBytes(filename,base64)]));
  return {model,files,uploads};
}

function readOptional(filename) {
  return existsSync(filename)?readFileSync(filename):null;
}

function replaceFile(filename,data) {
  if(data===null) {
    rmSync(filename,{force:true});
    return;
  }
  mkdirSync(path.dirname(filename),{recursive:true});
  const staged=filename+"."+randomUUID()+".tmp";
  try {
    writeFileSync(staged,data);
    renameSync(staged,filename);
  } finally { rmSync(staged,{force:true}); }
}

function updateFiles(changes) {
  const applied=[];
  try {
    for (const file of changes) {
      replaceFile(path.join(source,file.name),file.after);
      applied.push(file);
    }
  } catch(error) {
    for(const file of applied.reverse()) replaceFile(path.join(source,file.name),file.before);
    throw error;
  }
}

function save({files,uploads}) {
  const changes=Object.entries({...files,...uploads}).map(([name,data])=>({
    name,before:readOptional(path.join(source,name)),after:Buffer.from(data)
  })).filter(({before,after})=>!before?.equals(after));
  if (!changes.length) return [];
  const folder=path.join(revisions,new Date().toISOString().replace(/[:.]/g,"-")+"-"+randomUUID().slice(0,8));
  mkdirSync(folder,{recursive:true});
  for(const f of changes) {
    if(f.before===null) continue;
    const target=path.join(folder,f.name);
    mkdirSync(path.dirname(target),{recursive:true});
    writeFileSync(target,f.before);
  }
  writeFileSync(path.join(folder,"changes.json"),JSON.stringify(changes.map(f=>({file:f.name,existed:f.before!==null})),null,2));
  updateFiles(changes);
  lastSave=changes;
  revision++;
  return changes.map(f=>f.name);
}

function undo() {
  if(!lastSave) throw new Error("이 세션에서 되돌릴 저장이 없습니다.");
  if(lastSave.some(f=>!readOptional(path.join(source,f.name))?.equals(f.after)))
    throw new Error("저장 후 파일이 다른 곳에서 변경되었습니다. 백업 폴더에서 원본을 확인해 주세요.");
  updateFiles(lastSave.map(f=>({...f,before:f.after,after:f.before})));
  const names=lastSave.map(f=>f.name);
  lastSave=null;
  revision++;
  return names;
}

async function readJson(req) {
  const chunks=[];
  let total=0;
  for await(const chunk of req) {
    total+=chunk.length;
    if(total>maxRequest) throw new Error("한 번에 올릴 수 있는 파일 용량을 넘었습니다.");
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function json(res,body,status=200) {
  res.writeHead(status,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"});
  res.end(JSON.stringify(body));
}

function media(res, data, ext, range) {
  const type=types[ext]??"application/octet-stream";
  // The game iframe has an opaque origin, so fonts need explicit CORS.
  if(type.startsWith("font/")) res.setHeader("Access-Control-Allow-Origin","*");
  if(range && type.startsWith("audio/")) {
    const [,first,last]=/^bytes=(\d+)-(\d*)$/.exec(range)??[];
    const start=Number(first),end=Math.min(last?Number(last):data.length-1,data.length-1);
    if(!first || start>end || start>=data.length) {
      res.writeHead(416,{"Content-Range":"bytes */"+data.length});
      return res.end();
    }
    res.writeHead(206,{"Content-Type":type,"Content-Range":`bytes ${start}-${end}/${data.length}`,"Content-Length":end-start+1,"Accept-Ranges":"bytes"});
    return res.end(data.subarray(start,end+1));
  }
  res.writeHead(200,{"Content-Type":type,"Content-Length":data.length,"Cache-Control":"no-store"});
  res.end(data);
}

function validPreview(spec,model,newEvent) {
  if(!spec) return null;
  if(newEvent && spec.kind==="event" && spec.id==="custom-"+newEvent.id) return spec;
  if(!model.groups.some(g=>JSON.stringify(g.preview)===JSON.stringify(spec)))
    throw new Error("테스트할 장면을 찾지 못했습니다.");
  return spec;
}

function previewAsset(filename, session) {
  if(!assets.includes(filename)) return null;
  return session?.uploads[filename]??readOptional(path.join(source,filename))??readOptional(path.join(base,filename));
}

function serveGame(req,res,urlPath) {
  const [, , token, ...rest]=urlPath.split("/");
  const session=previews.get(token);
  if(!session) return res.writeHead(404).end("미리보기를 다시 열어 주세요.");
  const filename=rest.join("/")||"index.html";
  if (filename==="editor-preview.js") {
    const spec=session.spec;
    const preview=readFileSync(path.join(editor,"preview.js"),"utf8");
    return media(res,Buffer.from("const editorPreview = "+JSON.stringify(spec)+";\n"+preview),".js");
  }
  if (filename==="index.html") {
    const html=readFileSync(path.join(source,filename),"utf8").replace("</body>",'<script src="editor-preview.js"></script></body>');
    return media(res,Buffer.from(html),".html");
  }
  const js=/^js\/([\w-]+\.js)$/.exec(filename);
  const css=/^css\/([\w-]+\.css)$/.exec(filename);
  let content;
  if (js) {
    const text=session.files[js[1]]??session.model.files[js[1]];
    content=text===undefined?null:Buffer.from(text);
  } else if (css) content=readOptional(path.join(source,css[1]));
  else content=previewAsset(filename,session);
  if (!content) return res.writeHead(404).end();
  media(res,content,path.extname(filename),req.headers.range);
}

function exportGame(res) {
  if(exporting) return json(res,{error:"게임 ZIP을 이미 만드는 중입니다."},409);
  exporting=true;
  const folder=mkdtempSync(path.join(temporary,"export-"));
  try {
    const game=path.join(folder,"game");
    const filename=path.join(folder,"phantomhive-game.zip");
    runPython([path.join(source,"build.py"),game]);
    runPython(["-c","import shutil,sys; shutil.make_archive(sys.argv[1], 'zip', sys.argv[2])",filename.slice(0,-4),game]);
    res.writeHead(200,{"Content-Type":"application/zip","Content-Length":statSync(filename).size,
      "Content-Disposition":'attachment; filename="phantomhive-game.zip"'});
    const stream=createReadStream(filename);
    stream.on("close",()=>{
      rmSync(folder,{recursive:true,force:true});
      exporting=false;
    });
    stream.on("error",()=>res.destroy());
    res.on("close",()=>stream.destroy());
    stream.pipe(res);
  } catch(error) {
    rmSync(folder,{recursive:true,force:true});
    exporting=false;
    throw error;
  }
}

const server=http.createServer(async (req,res)=>{
  try {
    const urlPath=decodeURIComponent(new URL(req.url,origin).pathname);
    const get=req.method==="GET";
    if(req.headers.host!=="127.0.0.1:"+port) return res.writeHead(403).end();
    res.setHeader("X-Content-Type-Options","nosniff");
    res.setHeader("Referrer-Policy","same-origin");
    res.setHeader("X-Frame-Options","SAMEORIGIN");
    if (get && urlPath==="/api/catalog") {
      const {groups,inventory,version,trackOptions,roomOptions,artOptions,recruitCastOptions}=currentModel();
      return json(res,{groups,inventory,version,trackOptions,roomOptions,artOptions,recruitCastOptions,canUndo:Boolean(lastSave)});
    }
    if (get && urlPath==="/export.zip") return exportGame(res);
    if (get && urlPath.startsWith("/game/")) return serveGame(req,res,urlPath);
    if (get && urlPath.startsWith("/media/")) {
      const filename=urlPath.slice(7);
      const data=previewAsset(filename);
      if (!data) return res.writeHead(404).end();
      return media(res,data,path.extname(filename),req.headers.range);
    }
    if(req.method==="POST" && urlPath.startsWith("/api/")) {
      if(req.headers.origin!==origin || req.headers["content-type"]!=="application/json")
        return json(res,{error:"열려 있는 편집기에서 다시 시도해 주세요."},403);
      if(urlPath==="/api/undo") return json(res,{files:undo()});
      if(["/api/save","/api/preview"].includes(urlPath)) {
        const body=await readJson(req);
        const changes=snapshot(body);
        if(urlPath==="/api/save") {
          if(exporting) return json(res,{error:"ZIP 만들기가 끝나면 적용해 주세요."},409);
          return json(res,{files:save(changes)});
        }
        const token=randomUUID();
        const spec=validPreview(body.preview,changes.model,body.newEvent);
        previews.set(token,{...changes,spec:spec?{...spec,cut:Number.isInteger(body.cut)?body.cut:0}:null});
        if(previews.size>8) previews.delete(previews.keys().next().value);
        return json(res,{url:"/game/"+token+"/index.html"});
      }
    }
    const staticFiles={"/":"index.html","/story-flow.js":"story-flow.js","/editor.js":"editor.js","/editor.css":"editor.css"};
    if(get && Object.hasOwn(staticFiles,urlPath)) {
      const file=staticFiles[urlPath];
      res.setHeader("Content-Security-Policy","default-src 'self'; img-src 'self' blob:; media-src 'self' blob:; object-src 'none'; base-uri 'none'");
      return media(res,readFileSync(path.join(editor,"public",file)),path.extname(file));
    }
    res.writeHead(404).end();
  } catch(error) {
    if(!res.headersSent) json(res,{error:error.message},400);
    else res.destroy();
  }
});
server.on("error",error=>{console.error(error.message);process.exit(1);});
server.listen(port,"127.0.0.1",()=>{
  console.log("팬텀하이브 콘텐츠 편집기  "+origin);
  if(process.argv.includes("--open") && process.platform==="win32")
    spawn("rundll32.exe",["url.dll,FileProtocolHandler",origin],{detached:true,stdio:"ignore"}).unref();
});
