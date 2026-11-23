const repository="jnscee/phantomhive-maker";
const endpoint="https://api.github.com/repos/"+repository+"/git/";
const branch="heads/main";
const shaPattern=/^[a-f0-9]{40}$/;

function base64(bytes){
  let characters="";
  for(let start=0;start<bytes.length;start+=16384)
    characters+=String.fromCharCode(...bytes.subarray(start,start+16384));
  return btoa(characters);
}

async function gitBlobHash(bytes){
  const header=new TextEncoder().encode("blob "+bytes.length+"\0");
  const object=new Uint8Array(header.length+bytes.length);
  object.set(header);
  object.set(bytes,header.length);
  const digest=await crypto.subtle.digest("SHA-1",object);
  return Array.from(new Uint8Array(digest),byte=>byte.toString(16).padStart(2,"0")).join("");
}

export async function publishChanges({token,sourceCommit,changes,onProgress=()=>{}}){
  if(!shaPattern.test(sourceCommit??""))throw new Error("공개된 게임 버전을 확인할 수 없습니다. 편집기를 새로고침해 주세요.");
  if(!/^github_pat_[A-Za-z0-9_]+$/.test(token))throw new Error("GitHub에서 발급한 Fine-grained 토큰을 입력해 주세요.");
  if(!changes.length)throw new Error("GitHub에 업로드할 변경 파일이 없습니다.");
  const headers={Accept:"application/vnd.github+json",Authorization:"Bearer "+token,"X-GitHub-Api-Version":"2022-11-28"};
  async function request(route,method="GET",body){
    const response=await fetch(endpoint+route,{
      method,cache:"no-store",redirect:"error",
      headers:body?{...headers,"Content-Type":"application/json"}:headers,
      body:body?JSON.stringify(body):undefined,
      signal:AbortSignal.timeout(90000)
    });
    if(response.ok)return response.json();
    if(response.status===401)throw new Error("토큰이 올바르지 않거나 만료되었습니다.");
    if([403,404].includes(response.status))throw new Error("토큰의 저장소 선택, Contents 쓰기 권한과 GitHub 요청 한도를 확인해 주세요.");
    if(method==="PATCH"&&[409,422].includes(response.status))
      throw new Error("업로드 중 main이 갱신됐거나 브랜치 규칙이 변경을 막았습니다. 최신 내용을 확인한 뒤 다시 시도해 주세요.");
    throw new Error("GitHub 요청을 완료하지 못했습니다. ("+response.status+")");
  }

  async function entries(commit){
    const {tree}=await request("commits/"+commit);
    const result=await request("trees/"+tree.sha+"?recursive=1");
    if(result.truncated)throw new Error("저장소의 전체 파일 목록을 확인하지 못했습니다.");
    return {sha:tree.sha,files:new Map(result.tree.map(entry=>[entry.path,entry]))};
  }

  onProgress("GitHub의 최신 파일을 확인하는 중입니다.");
  const head=(await request("ref/"+branch)).object.sha;
  const [baseline,current]=await Promise.all([entries(sourceCommit),head===sourceCommit?null:entries(head)]);
  const latest=current??baseline;
  const archivesChanged=[...new Set([...baseline.files.keys(),...latest.files.keys()])]
    .filter(path=>/^game-part-.*\.zip$/.test(path))
    .some(path=>baseline.files.get(path)?.sha!==latest.files.get(path)?.sha);
  const pending=[];
  const conflicts=[];
  for(const {path,bytes} of changes){
    if(!/^current\/(?:[\w-]+\.js|assets\/[\w./ -]+)$/.test(path)||path.split("/").some(part=>part===".."||part==="."))
      throw new Error("잘못된 게임 파일 경로입니다.");
    const original=baseline.files.get(path),live=latest.files.get(path);
    if(live?.type==="blob"&&live.sha===await gitBlobHash(bytes))continue;
    if(original?.sha!==live?.sha||live&&live.mode!=="100644"||!live&&path.startsWith("current/assets/")&&archivesChanged){
      conflicts.push(path);
    }else pending.push({path,bytes});
  }
  if(conflicts.length)throw new Error("GitHub에서 이미 바뀐 파일입니다. 변경 ZIP을 보관하고 최신 게임에서 다시 반영해 주세요. "+conflicts.join(", "));
  if(!pending.length)return {sha:head,count:0};

  const tree=[];
  for(const [index,{path,bytes}] of pending.entries()){
    onProgress("GitHub에 파일을 준비하는 중입니다. "+(index+1)+"/"+pending.length);
    const {sha}=await request("blobs","POST",{content:base64(bytes),encoding:"base64"});
    tree.push({path,mode:"100644",type:"blob",sha});
  }
  const updated=await request("trees","POST",{base_tree:latest.sha,tree});
  const commit=await request("commits","POST",{message:"Update game content from the web editor",tree:updated.sha,parents:[head]});
  onProgress("변경을 main에 반영하는 중입니다.");
  await request("refs/"+branch,"PATCH",{sha:commit.sha,force:false});
  return {sha:commit.sha,count:pending.length};
}
