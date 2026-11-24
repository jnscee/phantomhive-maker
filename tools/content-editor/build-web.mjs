import { createHash } from "node:crypto";
import { cp, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const source=path.dirname(fileURLToPath(import.meta.url));
const site=path.resolve(process.argv[2]);
const editor=path.join(site,"editor");

async function listFiles(folder) {
  const entries=await readdir(path.join(site,folder),{recursive:true,withFileTypes:true});
  return entries.filter(entry=>entry.isFile()).map(entry=>
    path.relative(site,path.join(entry.parentPath,entry.name)).split(path.sep).join("/")).sort();
}

const files=["index.html","recruit-preview.html",...await listFiles("js"),...await listFiles("css"),...await listFiles("assets")];
const hash=createHash("sha256");
for(const name of files) hash.update(name).update(await readFile(path.join(site,name)));
const release=hash.digest("hex").slice(0,16);
const uiHash=createHash("sha256");
for(const folder of ["public","web"]){
  for(const file of (await readdir(path.join(source,folder))).sort()){
    uiHash.update(file).update(await readFile(path.join(source,folder,file)));
  }
}
uiHash.update(await readFile(path.join(source,"catalog.mjs")));
uiHash.update(await readFile(path.join(source,"preview.js")));
const uiVersion=uiHash.digest("hex").slice(0,16);
await mkdir(editor,{recursive:true});
await cp(path.join(source,"public"),editor,{recursive:true});
await cp(path.join(source,"web"),editor,{recursive:true});
// The preview worker also runs in browsers which only register classic service workers.
const storeSource=await readFile(path.join(source,"web/storage.mjs"),"utf8");
const workerSource=await readFile(path.join(source,"web/service-worker.mjs"),"utf8");
await writeFile(path.join(editor,"service-worker.js"),workerSource.replace('import {read} from "./storage.mjs";',
  ()=>storeSource.replaceAll("export async function","async function")));
await cp(path.join(source,"preview.js"),path.join(editor,"preview.js"));
const dependencies=[
  ["acorn/dist/acorn.mjs","acorn.mjs"],
  ["acorn/LICENSE","acorn-LICENSE"],
  ["fflate/esm/browser.js","fflate.mjs"],
  ["fflate/LICENSE","fflate-LICENSE"],
  ["diff/LICENSE","jsdiff-LICENSE"]
];
for(const [file,target] of dependencies) await cp(path.join(source,"node_modules",file),path.join(editor,target));
await cp(path.join(source,"node_modules/diff/libesm"),path.join(editor,"jsdiff"),{recursive:true,filter:file=>!file.includes(".d.ts")});
const catalog=(await readFile(path.join(source,"catalog.mjs"),"utf8")).replace('from "acorn"','from "./acorn.mjs"')
  .replace('"./public/story-routes.mjs"','"./story-routes.mjs?v='+uiVersion+'"');
await writeFile(path.join(editor,"catalog.mjs"),catalog);
const adapter=await readFile(path.join(editor,"web.mjs"),"utf8");
await writeFile(path.join(editor,"web.mjs"),adapter.replace('"preview.js?v="+release',JSON.stringify("preview.js?v="+uiVersion)).replace('"./catalog.mjs"','"./catalog.mjs?v='+uiVersion+'"'));
const html=(await readFile(path.join(editor,"index.html"),"utf8"))
  .replace("<body>",'<body data-web-editor>')
  .replace('sandbox="allow-scripts"','sandbox="allow-scripts allow-same-origin"')
  .replace('href="/editor.css"',`href="./editor.css?v=${uiVersion}"`)
  .replace('src="/story-flow.js"',`src="./story-flow.js?v=${uiVersion}"`)
  .replace('src="/editor.js"',`src="./editor.js?v=${uiVersion}"`);
await writeFile(path.join(editor,"index.html"),html);
const app=(await readFile(path.join(editor,"editor.js"),"utf8")).replace('import("./web.mjs")',`import("./web.mjs?v=${uiVersion}")`);
await writeFile(path.join(editor,"editor.js"),app);
await writeFile(path.join(editor,"manifest.json"),JSON.stringify({release,sourceCommit:process.env.GITHUB_SHA??null,files}));
