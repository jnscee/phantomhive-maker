import {read} from "./storage.mjs";

self.addEventListener("install",event=>event.waitUntil(self.skipWaiting()));
self.addEventListener("activate",event=>event.waitUntil(self.clients.claim()));

self.addEventListener("fetch",event=>{
  const url=new URL(event.request.url);
  const scope=new URL(self.registration.scope);
  const prefix=scope.pathname+"preview/";
  if(url.origin!==scope.origin||!url.pathname.startsWith(prefix))return;
  const relative=url.pathname.slice(prefix.length);
  const match=/^([a-f0-9-]{36})\/(.+)$/.exec(relative);
  if(match&&event.request.method==="GET")
    event.respondWith(preview(event.request,scope,match[1],decodeURIComponent(match[2])));
});

let recent;
async function preview(request, scope, token, filename) {
  if(recent?.token!==token)recent={token,snapshot:read("preview")};
  const session=await recent.snapshot;
  if(!session||session.token!==token||session.expires<Date.now())return new Response("편집기에서 미리보기를 다시 열어 주세요.",{status:404});
  if(Object.hasOwn(session.overrides,filename)){
    const blob=session.overrides[filename];
    const range=/^bytes=(\d+)-(\d*)$/.exec(request.headers.get("range")??"");
    if(range && blob.type.startsWith("audio/")){
      const start=Number(range[1]);
      const end=Math.min(range[2]?Number(range[2]):blob.size-1,blob.size-1);
      if(start>end)return new Response(null,{status:416,headers:{"Content-Range":"bytes */"+blob.size}});
      return new Response(blob.slice(start,end+1,blob.type),{status:206,
        headers:{"Content-Range":`bytes ${start}-${end}/${blob.size}`,"Accept-Ranges":"bytes"}});
    }
    return new Response(blob,{headers:{"Cache-Control":"no-store"}});
  }
  if(!/^(?:css|assets)\/[\w./ -]+$/.test(filename)||filename.split("/").includes(".."))
    return new Response(null,{status:404});
  return fetch(new URL("../"+filename,scope),{headers:request.headers.has("range")?{"Range":request.headers.get("range")}:{}});
}
