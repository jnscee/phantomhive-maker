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
await mkdir(editor,{recursive:true});
await cp(path.join(source,"public"),editor,{recursive:true});
await cp(path.join(source,"web"),editor,{recursive:true});
await cp(path.join(source,"preview.js"),path.join(editor,"preview.js"));
const dependencies=[
  ["acorn/dist/acorn.mjs","acorn.mjs"],
  ["acorn/LICENSE","acorn-LICENSE"],
  ["fflate/esm/browser.js","fflate.mjs"],
  ["fflate/LICENSE","fflate-LICENSE"]
];
for(const [file,target] of dependencies) await cp(path.join(source,"node_modules",file),path.join(editor,target));
const catalog=(await readFile(path.join(source,"catalog.mjs"),"utf8")).replace('from "acorn"','from "./acorn.mjs"');
await writeFile(path.join(editor,"catalog.mjs"),catalog);
const html=(await readFile(path.join(editor,"index.html"),"utf8"))
  .replace("<body>",'<body data-web-editor>')
  .replace('sandbox="allow-scripts"','sandbox="allow-scripts allow-same-origin"')
  .replace('href="/editor.css"',`href="./editor.css?v=${release}"`)
  .replace('src="/editor.js"',`src="./editor.js?v=${release}"`);
await writeFile(path.join(editor,"index.html"),html);
await writeFile(path.join(editor,"manifest.json"),JSON.stringify({release,files}));
