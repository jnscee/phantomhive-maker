"use strict";

const $ = id => document.getElementById(id);
const sections = {story:"스토리", events:"이벤트", dialogue:"기타 대사", audio:"BGM · SE", assets:"CG · 이미지", fx:"화면 효과"};
let data;
let section = "story";
let selected = null;
let changes = {};
let uploads = {};
let newEvent = null;
let deleteEvent = null;
let busy = false;
const assetUrls = new Map();
const isWeb = document.body.hasAttribute("data-web-editor");
const web = isWeb ? import("./web.mjs") : null;
void web?.catch(()=>{});

function node(tag, text, className) {
  const element=document.createElement(tag);
  if(text!==undefined) element.textContent=text;
  if(className) element.className=className;
  return element;
}

function button(text, action, className) {
  const control=node("button",text,className);
  control.type="button";
  control.addEventListener("click",action);
  return control;
}

function status(text, error=false) {
  $("status").textContent=text;
  $("status").dataset.error=error;
}

function draftCount() {
  return Object.keys(changes).length+Object.keys(uploads).length+Number(Boolean(newEvent))+Number(Boolean(deleteEvent));
}

function updateToolbar() {
  $("pending").textContent="변경 "+draftCount()+"건";
  $("save").disabled=busy||!draftCount();
  $("discard").disabled=busy||!draftCount();
  $("undo").disabled=busy||!data?.canUndo||Boolean(draftCount());
  $("preview").disabled=busy||!data||Boolean(deleteEvent);
  $("publish").disabled=busy||!data?.publishCount||Boolean(draftCount());
}

function value(field) {
  return Object.hasOwn(changes,field.id)?changes[field.id]:field.value;
}

function modify(field,input) {
  if(JSON.stringify(input)===JSON.stringify(field.value)) delete changes[field.id];
  else changes[field.id]=input;
  updateToolbar();
}

function clearDraft() {
  changes={};
  uploads={};
  newEvent=null;
  deleteEvent=null;
  for (const url of assetUrls.values()) URL.revokeObjectURL(url);
  assetUrls.clear();
}

async function api(path, body) {
  if(web) return (await web).api(path,body);
  const reply=await fetch(path,body===undefined?{}:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
  const payload=await reply.json();
  if(!reply.ok) throw new Error(payload.error || "편집기와 연결할 수 없습니다.");
  return payload;
}

function currentGroup() {
  return data.groups.find(group=>group.key===selected);
}

function getAsset(field, input) {
  if(field.type==="prologue") return "assets/prologue/"+input+".webp";
  if(field.type==="ending") return "assets/endings/"+input+".webp";
  if(["audio","image"].includes(field.type)) return input;
  if(field.media==="track"||field.type==="cue") {
    const track=data.groups.find(group=>group.key==="music-"+input);
    return track?value(track.fields.find(row=>row.type==="audio")):null;
  }
  if(field.media==="recruitArt") {
    const art=data.groups.find(group=>group.key==="recruit-art-"+input);
    return art?value(art.fields[0]):null;
  }
  if(field.media==="room") {
    const room=data.groups.find(group=>group.key==="sceneArt-"+input);
    return room?value(room.fields[0]):null;
  }
  return data.inventory[field.media]?.[input];
}

function assetPreview(filename, target) {
  target.replaceChildren();
  if (!filename) return;
  const ext=filename.split(".").pop().toLowerCase();
  const audio=["mp3","ogg","wav"].includes(ext);
  const media=node(audio?"audio":"img");
  if(audio){media.controls=true;media.preload="none";}
  else {media.alt="리소스 미리보기";media.loading="lazy";}
  const localUrl=assetUrls.get(filename);
  if(localUrl)media.src=localUrl;
  else if(web)void web.then(adapter=>{media.src=adapter.assetUrl(filename);}).catch(error=>status(error.message,true));
  else media.src="/media/"+filename.split("/").map(encodeURIComponent).join("/")+"?v="+data.version;
  const upload=node("input");
  upload.type="file";
  upload.accept="."+ext;
  upload.hidden=true;
  upload.addEventListener("change",async()=>{
    const file=upload.files[0];
    if(!file) return;
    if(file.size>20*1024*1024){status("파일당 20 MB까지 올릴 수 있습니다.",true);return;}
    if(!file.name.toLowerCase().endsWith("."+ext) && !(ext==="jpg"&&/\.jpeg$/i.test(file.name))){
      status("같은 형식의 ."+ext+" 파일을 선택해 주세요.",true);
      return;
    }
    const reader=new FileReader();
    reader.addEventListener("load",()=>{
      if(assetUrls.has(filename)) URL.revokeObjectURL(assetUrls.get(filename));
      uploads[filename]=reader.result.split(",")[1];
      assetUrls.set(filename,URL.createObjectURL(file));
      assetPreview(filename,target);
      status(filename.split("/").at(-1)+" 교체 대기");
      updateToolbar();
    });
    reader.addEventListener("error",()=>status("파일을 읽지 못했습니다.",true));
    reader.readAsDataURL(file);
  });
  const actions=node("div",undefined,"file-pick");
  actions.append(button("파일 교체 · "+ext.toUpperCase(),()=>upload.click()));
  if(uploads[filename]) actions.append(button("파일 교체 취소",()=>{
    delete uploads[filename];
    URL.revokeObjectURL(assetUrls.get(filename));
    assetUrls.delete(filename);
    assetPreview(filename,target);
    updateToolbar();
  }));
  target.append(media,node("small",filename),actions,upload);
}

function linesEditor(parent,initial,onChange,field={}) {
  let list=structuredClone(initial);
  const body=node("div");
  const add=button("＋ 대사 추가",()=>{
    list.push(["",""]);
    draw();
    body.lastElementChild.querySelector("input").focus();
    onChange(list);
  },"add-line");
  function draw() {
    body.replaceChildren();
    list.forEach(([who,text,metadata],index)=>{
      const row=node("div",undefined,"line");
      const speaker=node("input");
      speaker.value=who;
      speaker.placeholder="화자 없음";
      speaker.setAttribute("aria-label",(index+1)+"번 화자");
      speaker.addEventListener("input",()=>{list[index][0]=speaker.value;onChange(list);});
      const line=node("textarea");
      line.value=text;
      line.rows=2;
      line.setAttribute("aria-label",(index+1)+"번 대사");
      line.addEventListener("input",()=>{list[index][1]=line.value;onChange(list);});
      const actions=node("div",undefined,"line-actions");
      function move(offset) {
        const next=index+offset;
        [list[index],list[next]]=[list[next],list[index]];
        onChange(list);draw();
        body.children[next].querySelector("input").focus();
      }
      const up=button("↑",()=>move(-1));
      up.disabled=index===0;
      up.setAttribute("aria-label",(index+1)+"번 대사 위로");
      const down=button("↓",()=>move(1));
      down.disabled=index===list.length-1;
      down.setAttribute("aria-label",(index+1)+"번 대사 아래로");
      const remove=button("삭제",()=>{
        list.splice(index,1);
        onChange(list);draw();
        body.children[Math.min(index,list.length-1)].querySelector("input").focus();
      });
      remove.disabled=list.length===1;
      remove.setAttribute("aria-label",(index+1)+"번 대사 삭제");
      actions.append(up,down,remove);
      row.append(node("span",String(index+1),"line-num"),speaker,line,actions);
      if(field.metadata==="illustration") {
        const image=select([["","대표 CG"],...field.artOptions],metadata??"");
        image.setAttribute("aria-label",(index+1)+"번 대사의 CG");
        image.addEventListener("input",()=>{
          if(image.value) list[index][2]=image.value;
          else list[index].length=2;
          onChange(list);
        });
        const media=node("div",undefined,"asset-preview line-media");
        function drawCG(){assetPreview(data.inventory.ending[image.value||field.defaultArt],media);}
        image.addEventListener("input",drawCG);
        drawCG();
        const details=node("details",undefined,"line-options");
        details.append(node("summary","CG · "+(field.artOptions.find(([id])=>id===metadata)?.[1]??"대표 CG")),image,media);
        image.addEventListener("input",()=>{details.firstChild.textContent="CG · "+image.selectedOptions[0].textContent;});
        row.append(details);
      }
      if(field.metadata==="tanaka" && (metadata!==undefined || field.hasTanaka)) {
        const option=node("label","타나카가 있을 때만 표시","line-options");
        const toggle=node("input");
        toggle.type="checkbox";
        toggle.checked=Boolean(metadata);
        toggle.addEventListener("input",()=>{
          if(toggle.checked) list[index][2]=true;
          else list[index].length=2;
          onChange(list);
        });
        option.prepend(toggle);
        row.append(option);
      }
      body.append(row);
    });
  }
  parent.append(body,add);
  draw();
}

function select(options,current) {
  const control=node("select");
  for(const [id,label] of options) {
    const option=node("option",label);
    option.value=id;
    control.append(option);
  }
  control.value=current;
  return control;
}

function fieldEditor(field) {
  const current=value(field);
  if(field.type==="lines") {
    const block=node("fieldset",undefined,"field");
    block.append(node("legend",field.label));
    linesEditor(block,current,input=>modify(field,structuredClone(input)),field);
    return block;
  }
  const block=node("div",undefined,"field");
  const label=node("label",field.label);
  const media=node("div",undefined,"asset-preview");
  let control;
  if (field.options || field.paths) {
    const options=field.options??field.paths.map(path=>[path,path]);
    control=select(options,current);
  } else if (!field.fixed) {
    control=node(field.type==="number"?"input":"textarea");
    if(field.type==="number"){
      control.type="number";control.min=field.min;control.max=field.max;
    } else control.rows=current.length>75?3:1;
    control.value=current;
  }
  if(control) {
    control.id="field-"+field.id;
    label.htmlFor=control.id;
    control.addEventListener("input",()=>{
      const input=field.type==="number"?control.valueAsNumber:control.value;
      modify(field,input);
      if(field.type==="cue") assetPreview(input?getAsset(field,input):null,media);
      else if(field.media||field.paths) assetPreview(getAsset(field,input),media);
    });
  }
  block.append(label);
  if(control) block.append(control);
  if(field.media||field.paths||field.fixed||field.type==="cue") {
    assetPreview(getAsset(field,current),media);
    block.append(media);
  }
  return block;
}

function filtered() {
  const q=$("search").value.trim().toLocaleLowerCase();
  if(q) {
    const matches=data.groups.filter(group=>[group.title,group.detail,group.key,...group.fields.flatMap(field=>[field.label,JSON.stringify(value(field))])]
      .some(term=>term.toLocaleLowerCase().includes(q)));
    return matches;
  }
  return data.groups.filter(group=>group.section===section);
}

function drawList() {
  if(!data) return;
  const oldScroll=$("list").scrollTop;
  const options=filtered();
  $("list-title").textContent=$("search").value.trim()?"검색 결과 "+options.length:sections[section];
  $("new-event").hidden=section!=="events";
  $("list").replaceChildren();
  const buttons=options.map(group=>{
    const b=button(group.title,()=>{
      if(newEvent) {status("새 이벤트를 적용하거나 취소한 뒤 이동해 주세요.",true);return;}
      selected=group.key;
      drawList();
      drawDesk();
      $("list").querySelector('[aria-current="true"]')?.focus({preventScroll:true});
    });
    if(group.detail) b.append(node("small",group.detail));
    if(group.key===selected&&!newEvent) b.setAttribute("aria-current","true");
    return b;
  });
  $("list").append(...buttons);
  $("list").scrollTop=oldScroll;
  if(!options.length) $("list").append(node("p","검색 결과가 없습니다.","muted"));
  for(const b of $("sections").children) b.setAttribute("aria-pressed",String(b.dataset.section===section));
}

function drawDesk() {
  const panel=$("fields");
  panel.replaceChildren();
  if(newEvent){drawNewEvent(panel);return;}
  const group=currentGroup();
  $("entry-title").textContent=group?.title??"콘텐츠를 선택해 주세요";
  $("entry-detail").textContent=group?sections[group.section]+(group.detail?" / "+group.detail:""):"";
  $("preview").textContent=group?.preview?"게임에서 미리보기 ↗":"게임 시작하기 ↗";
  if(!group) return;
  panel.append(...group.fields.map(fieldEditor));
  if(group.asset) {
    const media=node("div",undefined,"asset-preview");
    assetPreview(group.asset,media);
    panel.append(media);
  }
  if(group.removable) {
    const queued=deleteEvent===group.preview.id;
    const remove=button(queued?"삭제 예약 취소":"이 이벤트 삭제",()=>{
      deleteEvent=queued?null:group.preview.id;
      drawDesk();
    },"danger");
    remove.disabled=Boolean(deleteEvent&&!queued);
    const row=node("div");
    row.append(remove);
    panel.append(row);
  }
  updateToolbar();
}

function drawNewEvent(panel) {
  $("entry-title").textContent="새 월말 이벤트";
  $("entry-detail").textContent="이벤트 / 35개월 본편";
  $("preview").textContent="게임에서 미리보기 ↗";
  for(const [key,label] of [["id","이벤트 ID · 영문 소문자, 숫자, 하이픈"],["title","제목"],["month","발생 월 · 1~35"],["room","배경"],["track","BGM"],["result","마지막 대사"],["label","마무리 버튼"]]) {
    const field=node("div",undefined,"field");
    const title=node("label",label);
    const control=key==="room"?select(data.roomOptions,newEvent.room):key==="track"?select(data.trackOptions,newEvent.track):node("input");
    if(key==="month"){control.type="number";control.min=1;control.max=35;}
    control.value=newEvent[key];
    control.id="new-"+key;
    title.htmlFor=control.id;
    control.addEventListener("input",()=>{newEvent[key]=key==="month"?control.valueAsNumber:control.value;});
    field.append(title,control);
    panel.append(field);
  }
  const lines=node("fieldset",undefined,"field");
  lines.append(node("legend","대사 순서"));
  linesEditor(lines,newEvent.lines,input=>{newEvent.lines=structuredClone(input);});
  panel.append(lines);
  updateToolbar();
}

function payload() {
  return {version:data.version,changes,uploads,newEvent,deleteEvent};
}

async function refresh() {
  data=await api("/api/catalog");
  if(isWeb) $("export-older").hidden=!data.hasOlder;
  if(!currentGroup()) selected=data.groups.find(group=>group.section===section)?.key;
  drawList();
  drawDesk();
  updateToolbar();
}

$("search").addEventListener("input",drawList);
for(const [id,label] of Object.entries(sections)) {
  const b=button(label,()=>{
    if(!data) return;
    if(newEvent){status("새 이벤트를 적용하거나 취소한 뒤 이동해 주세요.",true);return;}
    section=id;
    $("search").value="";
    selected=filtered()[0]?.key;
    drawList();
    drawDesk();
  });
  b.dataset.section=id;
  $("sections").append(b);
}
$("new-event").addEventListener("click",()=>{
  if(newEvent) return;
  if(deleteEvent){status("이벤트 삭제를 적용하거나 취소한 뒤 추가해 주세요.",true);return;}
  newEvent={id:"",title:"",month:1,room:"ballroom",track:"daily",lines:[["세바스찬",""]],label:"기록을 덮는다",result:""};
  drawList();
  drawDesk();
  $("new-id").focus();
});
$("preview").addEventListener("click",async()=>{
  busy=true;updateToolbar();status("게임 미리보기를 준비하고 있습니다.");
  try {
    const spec=newEvent?{kind:"event",id:"custom-"+newEvent.id}:currentGroup()?.preview??null;
    const result=await api("/api/preview",{...payload(),preview:spec});
    const dialog=$("game-dialog");
    dialog.querySelector("iframe").src=result.url;
    dialog.showModal();
    status("게임 미리보기를 열었습니다.");
  } catch(error){status(error.message,true);}
  finally{busy=false;updateToolbar();}
});
$("game-dialog").addEventListener("close",()=>{
  $("game-dialog").querySelector("iframe").removeAttribute("src");
  if(web)void web.then(adapter=>adapter.closePreview()).catch(()=>{});
});
$("save").addEventListener("click",async()=>{
  busy=true;updateToolbar();status("변경 내용을 확인하고 있습니다.");
  try {
    const result=await api("/api/save",payload());
    if(newEvent) selected="event-custom-"+newEvent.id;
    clearDraft();
    await refresh();
    status(result.files.length?(isWeb?"이 브라우저에 저장했습니다.":result.files.length+"개 파일에 적용했습니다."):"파일에 반영할 차이가 없습니다.");
  } catch(error){status(error.message,true);}
  finally{busy=false;updateToolbar();}
});
$("undo").addEventListener("click",async()=>{
  busy=true;updateToolbar();
  try {
    const result=await api("/api/undo",{});
    await refresh();
    status(isWeb?"마지막 저장을 되돌렸습니다.":result.files.length+"개 파일을 되돌렸습니다.");
  } catch(error){status(error.message,true);}
  finally{busy=false;updateToolbar();}
});
$("discard").addEventListener("click",()=>{
  clearDraft();drawList();drawDesk();status("적용 대기 중인 수정을 취소했습니다.");
});
async function download(kind){
  if(busy||draftCount()){status("편집 내용을 저장한 뒤 ZIP을 받아 주세요.",true);return;}
  busy=true;updateToolbar();status("ZIP을 만드는 중입니다.");
  try{await (await web).exportZip(kind);status("ZIP 다운로드를 시작했습니다.");}
  catch(error){status(error.message,true);}
  finally{busy=false;updateToolbar();}
}

$("export").addEventListener("click",event=>{
  if(web){event.preventDefault();void download("game");}
  else if(draftCount()||busy){event.preventDefault();status("게임 파일에 적용한 뒤 ZIP을 받아 주세요.",true);}
  else status("게임 ZIP을 만들고 있습니다. 완료되면 다운로드가 시작됩니다.");
});

if(isWeb){
  $("save").textContent="브라우저에 저장";
  $("undo").textContent="마지막 저장 되돌리기";
  $("export-edits").hidden=false;
  $("publish").hidden=false;
  const publishDialog=$("publish-dialog");
  const tokenField=$("github-token");
  const progress=$("publish-progress");
  $("publish").addEventListener("click",()=>{
    $("publish-summary").textContent=data.publishCount+"개 파일을 main에 올립니다. GitHub 검사 후 공개 게임이 갱신됩니다.";
    progress.textContent="";
    publishDialog.showModal();
  });
  $("publish-close").addEventListener("click",()=>publishDialog.close());
  publishDialog.addEventListener("cancel",event=>{if(busy)event.preventDefault();});
  publishDialog.addEventListener("close",()=>{tokenField.value="";});
  $("publish-form").addEventListener("submit",async event=>{
    event.preventDefault();
    if(busy||draftCount()||!data.publishCount)return;
    const token=tokenField.value.trim();
    tokenField.value="";
    busy=true;
    $("publish-close").disabled=$("publish-submit").disabled=true;
    updateToolbar();
    try{
      const result=await (await web).uploadToGitHub(token,message=>{progress.textContent=message;});
      publishDialog.close();
      status(result.count?"GitHub에 업로드했습니다. 공개 게임 배포 상태는 Actions에서 확인할 수 있습니다. ":"이미 GitHub에 같은 내용이 있습니다. ");
      const link=node("a","GitHub 커밋");
      link.href="https://github.com/jnscee/phantomhive-maker/commit/"+result.sha;
      link.target="_blank";
      link.rel="noopener noreferrer";
      $("status").append(link);
      $("status").append(document.createTextNode(" · "));
      const actions=node("a","배포 확인");
      actions.href="https://github.com/jnscee/phantomhive-maker/actions";
      actions.target="_blank";
      actions.rel="noopener noreferrer";
      $("status").append(actions);
    }catch(error){
      progress.textContent=error.message;
      tokenField.focus();
    }finally{
      busy=false;
      $("publish-close").disabled=$("publish-submit").disabled=false;
      updateToolbar();
    }
  });
  $("editor-note").hidden=false;
  $("export-edits").addEventListener("click",()=>void download("changes"));
  $("export-older").addEventListener("click",()=>void download("older"));
}
window.addEventListener("beforeunload",event=>{
  if(draftCount()) event.preventDefault();
});
refresh().then(()=>status("콘텐츠를 선택해 편집하거나 게임에서 미리 보세요.")).catch(error=>status(error.message,true));
