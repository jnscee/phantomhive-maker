"use strict";

const $ = id => document.getElementById(id);
const sections = {story:"스토리", events:"이벤트", eventScripts:"날씨 · 경영 · 경연", dialogue:"기타 대사", score:"BGM 배정", audio:"BGM · SE", assets:"CG · 이미지", fx:"화면 효과"};
let data;
let section = "story";
let selected = null;
let activePane = null;
let changes = {};
let uploads = {};
let newEvent = null;
let deleteEvent = null;
let busy = false;
let previewedDraft = false;
let inspectStoryRoutes;
let cancelLinkedScene=null;
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
  $("pending").textContent="저장 전 변경 "+draftCount()+"건";
  document.body.dataset.dirty=Boolean(draftCount());
  const workflow=Array.from(document.querySelectorAll(".workflow li"));
  const step=draftCount()?(previewedDraft?2:1):data?.publishCount?3:0;
  workflow.forEach((item,index)=>{
    if(index===step)item.setAttribute("aria-current","step");
    else item.removeAttribute("aria-current");
  });
  $("save").disabled=busy||!draftCount();
  $("discard").disabled=busy||!draftCount();
  $("review").disabled=busy||!data;
  $("undo").disabled=busy||!data?.canUndo||Boolean(draftCount());
  $("preview").disabled=busy||!data||Boolean(deleteEvent);
  $("add-content").disabled=busy||!data||Boolean(newEvent);
  $("add-story").disabled=busy||!data||Boolean(newEvent);
  $("publish").disabled=busy||!data?.publishCount||Boolean(draftCount());
}

function value(field) {
  return Object.hasOwn(changes,field.id)?changes[field.id]:field.value;
}

function modify(field,input) {
  previewedDraft=false;
  if(JSON.stringify(input)===JSON.stringify(field.value)) delete changes[field.id];
  else changes[field.id]=input;
  updateToolbar();
  updatePaneCounts();
}

function clearDraft() {
  previewedDraft=false;
  changes={};
  uploads={};
  newEvent=null;
  cancelLinkedScene=null;
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
    const track=data.groups.find(group=>group.key==="music-"+(input||field.defaultTrack));
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

function assetPreview(filename, target, listenOnly=false) {
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
  if(listenOnly){
    media.setAttribute("aria-label","배정할 BGM 미리 듣기");
    target.append(media);
    return;
  }
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

function lineDrop(body,row,grip,index,move) {
  let pointer=null,originX,originY,x,y,dragged=false,frame,marked=null,to=index;
  let scrollArea;
  function clearMark(){
    if(marked)delete marked.dataset.drop;
    marked=null;to=index;
  }
  function indicate(){
    clearMark();
    const bounds=body.getBoundingClientRect();
    if(x<bounds.left-12||x>bounds.right+12||y<bounds.top-18||y>bounds.bottom+18)return;
    const rows=body.children;
    let low=0,high=rows.length;
    while(low<high){
      const mid=(low+high)>>>1;
      const rect=rows[mid].getBoundingClientRect();
      if(y<rect.top+rect.height/2)high=mid;else low=mid+1;
    }
    const slot=low;
    to=slot>index?slot-1:slot;
    if(to===index)return;
    marked=rows[Math.min(slot,rows.length-1)];
    marked.dataset.drop=slot===rows.length?"after":"before";
  }
  function scroll(){
    const rect=scrollArea?.getBoundingClientRect();
    const top=Math.max(0,rect?.top??0),bottom=Math.min(innerHeight,rect?.bottom??innerHeight);
    const speed=y<top+56?-Math.ceil((top+56-y)/4):y>bottom-56?Math.ceil((y-bottom+56)/4):0;
    if(speed){
      (scrollArea??window).scrollBy(0,Math.max(-22,Math.min(22,speed)));
      indicate();
    }
    frame=requestAnimationFrame(scroll);
  }
  grip.addEventListener("pointerdown",event=>{
    if(!event.isPrimary||event.button!==0)return;
    pointer=event.pointerId;originX=x=event.clientX;originY=y=event.clientY;
    dragged=false;to=index;scrollArea=body.closest("dialog[open]");
    grip.setPointerCapture(pointer);
  });
  grip.addEventListener("pointermove",event=>{
    if(event.pointerId!==pointer)return;
    x=event.clientX;y=event.clientY;
    if(!dragged){
      if(Math.hypot(x-originX,y-originY)<6)return;
      dragged=true;row.classList.add("dragging");frame=requestAnimationFrame(scroll);
    }
    indicate();
  });
  function finish(event){
    if(event.pointerId!==pointer)return;
    pointer=null;cancelAnimationFrame(frame);
    const target=to;
    row.classList.remove("dragging");clearMark();
    if(event.type==="pointerup"&&dragged)move(index,target);
  }
  grip.addEventListener("pointerup",finish);
  grip.addEventListener("pointercancel",finish);
  grip.addEventListener("lostpointercapture",finish);
  grip.addEventListener("click",event=>{
    if(dragged&&event.detail){event.preventDefault();event.stopImmediatePropagation();}
    dragged=false;
  },true);
}

function chooseLinePosition(lines,index,move) {
  const dialog=node("dialog",undefined,"line-position");
  const form=node("form");
  const title=node("h2",(index+1)+"번 대사 이동");
  dialog.setAttribute("aria-label",title.textContent);
  const target=labeled(form,"옮길 위치",node("select"));
  const options=document.createDocumentFragment();
  lines.forEach(([who,line],i)=>{
    const option=node("option",(i+1)+"번째 · "+(who||"내레이션")+" · "+line.slice(0,32));
    option.value=String(i);
    options.append(option);
  });
  target.append(options);target.value=String(index);
  const actions=node("div",undefined,"publish-buttons");
  const submit=node("button","이 위치로 이동","primary");
  submit.type="submit";
  actions.append(button("취소",()=>dialog.close()),submit);
  form.prepend(title);form.append(actions);dialog.append(form);
  document.body.append(dialog);
  form.addEventListener("submit",event=>{
    event.preventDefault();
    const to=Number(target.value);
    dialog.close();move(index,to);
  });
  dialog.addEventListener("close",()=>dialog.remove(),{once:true});
  dialog.showModal();target.focus();
}

// A small stage for the assets assigned in the editor. The game preview still runs the scene logic.
function lineStage(group,field) {
  const panel=node("aside",undefined,"line-stage");
  const heading=node("h3");
  const frame=node("div",undefined,"stage-frame");
  const background=node("img",undefined,"stage-bg");
  const left=node("img",undefined,"stage-left"),right=node("img",undefined,"stage-right");
  const box=node("div",undefined,"stage-dialogue"),who=node("strong"),text=node("p");
  const sound=node("p",undefined,"stage-sound"),audio=node("audio");
  audio.controls=true;audio.preload="none";
  background.alt="장면 배경 또는 CG";left.alt="왼쪽 스탠딩";right.alt="오른쪽 스탠딩";
  box.append(who,text);frame.append(background,left,right,box);
  const direction=node("p",undefined,"stage-sound"),effectSound=node("audio");
  effectSound.controls=true;effectSound.preload="none";
  effectSound.setAttribute("aria-label","이 컷의 효과음");
  audio.setAttribute("aria-label","이 컷의 배경 음악");
  const actions=node("div",undefined,"stage-actions");
  panel.append(heading,frame,direction,actions,sound,audio,effectSound);
  function source(element,path){
    const cached=path||"";
    if(element.dataset.path===cached)return;
    element.dataset.path=cached;element.hidden=!path;
    if(!path){element.removeAttribute("src");return;}
    if(assetUrls.has(path))element.src=assetUrls.get(path);
    else if(isWeb)void web.then(adapter=>{
      if(element.dataset.path===cached)element.src=adapter.assetUrl(path);
    }).catch(error=>{if(element.dataset.path===cached)status(error.message,true);});
    else element.src="/media/"+path.split("/").map(encodeURIComponent).join("/")+"?v="+encodeURIComponent(data.version);
  }
  const find=(test)=>group.fields.find(test);
  const art=find(f=>f.media==="ending"||f.type==="prologue");
  const room=find(f=>["recruitArt","room"].includes(f.media));
  const music=find(f=>f.media==="track")??find(f=>f.type==="cue");
  const cast=find(f=>f.type==="cast"),single=find(f=>f.media==="standing");
  const scene=group.preview;
  const recruitCue=scene?.kind==="recruit"&&data.groups.find(g=>g.key==="recruit-"+scene.id)?.fields.find(f=>f.assignment);
  const fallbackTrack=scene?.kind==="opening"?"prologue":scene?.kind==="recruit"?(scene.id==="maid"?"gloomy":"daily"):null;
  const endingMusic=scene?.career&&data.groups.find(g=>g.key==="ending-"+scene.id)?.fields.find(f=>f.media==="track");
  let selectedCut=0,lastPlayback,animation;
  function playEffect(fx){
    animation?.cancel();
    const frames=field.cues?.animations?.[fx];
    if(frames&&!matchMedia("(prefers-reduced-motion: reduce)").matches)
      animation=frame.animate(frames,{duration:fx==="shake"?320:500,easing:"ease-out"});
  }
  if(["opening","ending","recruit"].includes(scene?.kind)){
    actions.append(button("이 컷부터 게임에서 재생",()=>openGamePreview(selectedCut)));
  }
  const replay=button("연출 다시 재생",()=>{
    playEffect(lastPlayback?.fx);
    if(lastPlayback?.se){effectSound.currentTime=0;void effectSound.play().catch(error=>status(error.message,true));}
  });
  actions.append(replay);
  function draw(row,index,total){
    const [name,line,legacy,cue={}]=row;
    heading.textContent="현재 컷 · "+(index+1)+" / "+total;
    who.textContent=name;who.hidden=!name||name==="장면"||(scene?.kind==="opening"&&name==="독백");text.textContent=line||"대사를 입력하세요.";
    const last=index===total-1;
    const storyRoom=!cue.cg&&!last&&field.careerRoom;
    const cg=cue.cg||(field.metadata==="illustration"&&!storyRoom&&((last&&field.finalArt)||legacy||field.defaultArt));
    const openingArt=art?.type==="prologue"?value(art):null;
    let bg=(cg&&data.inventory.ending[cg])||(storyRoom&&"assets/room-"+storyRoom+".webp")
      ||(art&&value(art)&&getAsset(art,value(art)))||(room&&getAsset(room,value(room)));
    if(!cue.cg&&openingArt==="cell")bg=data.inventory.ending.black;
    if(!cue.cg&&openingArt==="ring"&&index>=5)bg="assets/prologue/hillside.webp";
    const base=cast?value(cast):single?[value(single)].filter(Boolean):[];
    let actors=[cue.left||cue.standing,cue.right];
    if(scene?.handoff)actors=[cue.left||"tanaka",cue.right||"seb"];
    if(storyRoom&&!cue.left&&!cue.right)actors=[name==="세바스찬"?"seb":null,name==="시엘"?"ciel":null];
    if(!actors.some(Boolean)&&base.length){
      actors=[];
      base.forEach((id,i)=>actors[id==="ciel"?1:base.includes("ciel")||i===0?0:1]=id);
    }
    const voiceOnly=openingArt==="cell"&&name==="악마"&&!cue.cg&&(cue.hideCast||!actors.some(Boolean));
    frame.dataset.voiceOnly=String(voiceOnly);
    if(voiceOnly)who.hidden=true;
    source(background,voiceOnly?null:bg);
    [left,right].forEach((el,i)=>{
      const expr=field.cues?.expressions?.[cue[(i===0?"left":"right")+"Expression"]];
      const path=expr&&expr.actor===actors[i]?expr.file:data.inventory.standing[actors[i]];
      source(el,cue.hideCast?null:path);
    });
    const track=cue.bgm||(recruitCue&&value(recruitCue))||(music&&(value(music)||music.defaultTrack))||(endingMusic&&value(endingMusic))||fallbackTrack;
    sound.textContent="BGM · "+(data.trackOptions.find(([id])=>id===track)?.[1]||"게임 기본 음악");
    source(audio,track&&getAsset({media:"track"},track));
    source(effectSound,cue.se);
    const fxName=field.cues?.fx?.find(([id])=>id===cue.fx)?.[1];
    direction.textContent=[fxName,cue.wait&&"자동 재생 대기 "+cue.wait/1000+"초",
      cue.se&&"효과음 · "+cue.se.split("/").at(-1)].filter(Boolean).join(" · ");
    direction.hidden=!direction.textContent;
    replay.hidden=!cue.fx&&!cue.se;
    selectedCut=index;
    if(!lastPlayback||lastPlayback.index!==index||lastPlayback.fx!==cue.fx||lastPlayback.se!==cue.se){
      effectSound.pause();
      playEffect(cue.fx);
      lastPlayback={index,fx:cue.fx,se:cue.se};
    }
  }
  return {panel,draw};
}

function linesEditor(parent,initial,onChange,field={}) {
  const list=structuredClone(initial);
  const body=node("div",undefined,"dialogue-stack");
  const layout=node("div",undefined,"dialogue-layout");
  const toolbar=node("div",undefined,"dialogue-toolbar");
  const total=node("strong");
  const stage=field.id?lineStage(currentGroup(),field):null;
  let selectedIndex=0;
  const add=button("＋ 대사 추가",()=>insert(selectedIndex+1),"add-line");
  add.title="선택한 대사 다음에 추가 (Ctrl+Enter)";
  const names=node("datalist");
  names.id="speakers-"+crypto.randomUUID();
  for(const name of new Set([...data.recruitCastOptions.map(([,name])=>name),...list.map(line=>line[0])].filter(Boolean))){
    const option=node("option");option.value=name;names.append(option);
  }
  toolbar.append(total,add,names);
  layout.append(body);
  if(stage){layout.classList.add("has-stage");layout.append(stage.panel);}
  parent.append(toolbar,layout);
  const opened=new WeakSet();
  function selectLine(index){
    body.children[selectedIndex]?.classList.remove("is-selected");
    selectedIndex=index;
    body.children[index]?.classList.add("is-selected");
    if(list[index])stage?.draw(list[index],index,list.length);
  }
  function commit(index,message){
    onChange(list);draw(index);
    const target=body.children[index]?.querySelector("textarea");
    target?.focus({preventScroll:true});
    target?.scrollIntoView({block:"nearest",inline:"nearest"});
    status(message);
  }
  function insert(index){
    if(list.length>=250){status("한 장면에는 대사를 250줄까지 넣을 수 있습니다.",true);return;}
    list.splice(index,0,["",""]);
    commit(index,(index+1)+"번째에 대사를 추가했습니다.");
  }
  function move(from,to){
    if(to<0||to>=list.length||from===to)return;
    list.splice(to,0,list.splice(from,1)[0]);
    commit(to,(from+1)+"번 대사를 "+(to+1)+"번째로 옮겼습니다.");
  }
  function draw(indexToSelect=0) {
    body.replaceChildren();
    total.textContent="대사 "+list.length+"줄";
    add.disabled=list.length>=250;
    list.forEach(([who,text,metadata,cue],index)=>{
      const row=node("div",undefined,"line dialogue-card");
      const speaker=node("input");
      speaker.value=who;
      speaker.placeholder="화자 없음";
      speaker.setAttribute("list",names.id);
      speaker.setAttribute("aria-label",(index+1)+"번 화자");
      function update(){
        onChange(list);
        if(index===selectedIndex)stage?.draw(list[index],index,list.length);
      }
      speaker.addEventListener("input",()=>{list[index][0]=speaker.value;update();});
      const line=node("textarea");
      line.value=text;
      line.placeholder="대사 입력";
      line.rows=2;
      line.required=Boolean(field.required);
      line.setAttribute("aria-label",(index+1)+"번 대사");
      line.addEventListener("input",()=>{list[index][1]=line.value;update();});
      const head=node("div",undefined,"dialogue-card-head");
      const grip=button("⠿ 이동",()=>chooseLinePosition(list,index,move),"line-grip");
      grip.title="끌어서 옮기기 · 눌러서 위치 선택";
      grip.setAttribute("aria-label",(index+1)+"번 대사 위치 선택");
      lineDrop(body,row,grip,index,move);
      const order=node("span",String(index+1).padStart(2,"0"),"line-order");
      const actions=node("div",undefined,"line-actions");
      const up=button("↑",()=>move(index,index-1));
      up.disabled=index===0;
      up.setAttribute("aria-label",(index+1)+"번 대사 위로");
      const down=button("↓",()=>move(index,index+1));
      down.disabled=index===list.length-1;
      down.setAttribute("aria-label",(index+1)+"번 대사 아래로");
      const remove=button("삭제",()=>{
        list.splice(index,1);
        commit(Math.min(index,list.length-1),(index+1)+"번 대사를 삭제했습니다.");
      });
      remove.disabled=list.length===1;
      remove.setAttribute("aria-label",(index+1)+"번 대사 삭제");
      actions.append(up,down,remove);
      head.append(grip,order,speaker,actions);
      row.addEventListener("focusin",()=>selectLine(index));
      row.addEventListener("pointerdown",()=>selectLine(index));
      row.addEventListener("keydown",event=>{
        if(event.isComposing||event.keyCode===229)return;
        if((event.ctrlKey||event.metaKey)&&event.key==="Enter"){
          event.preventDefault();insert(index+1);
        }else if(event.altKey&&["ArrowUp","ArrowDown"].includes(event.key)){
          event.preventDefault();move(index,index+(event.key==="ArrowUp"?-1:1));
        }
      });
      const before=button("＋ 대사 삽입",()=>insert(index),"insert-between");
      before.setAttribute("aria-label",(index+1)+"번 대사 앞에 삽입");
      before.disabled=add.disabled;
      row.append(before,head,line);
      if(field.metadata==="illustration"&&!(field.careerRoom||(field.finalArt&&index===list.length-1))) {
        const image=select([["","대표 CG"],...field.artOptions],metadata??"");
        image.setAttribute("aria-label",(index+1)+"번 대사의 CG");
        image.addEventListener("input",()=>{
          if(image.value) list[index][2]=image.value;
          else if(list[index][3])list[index][2]=null;
          else list[index].length=2;
          update();
        });
        const media=node("div",undefined,"asset-preview line-media");
        function drawCG(){assetPreview(data.inventory.ending[image.value||field.defaultArt],media);}
        image.addEventListener("input",drawCG);
        // Load the CG only when its controls are opened.
        const details=node("details",undefined,"line-options");
        details.append(node("summary","기본 CG · "+(field.artOptions.find(([id])=>id===metadata)?.[1]??"대표 CG")),image,media);
        image.addEventListener("input",()=>{details.firstChild.textContent="기본 CG · "+image.selectedOptions[0].textContent;});
        details.addEventListener("toggle",()=>{if(details.open&&!media.childElementCount)drawCG();});
        row.append(details);
      }
      if(field.metadata==="tanaka" && typeof metadata==="string"){
        const label=node("label","타나카 동석 시 대사","line-options");
        const alternate=node("textarea");
        alternate.value=metadata;
        alternate.rows=2;
        alternate.addEventListener("input",()=>{list[index][2]=alternate.value;update();});
        label.append(alternate);
        row.append(label);
      }else if(field.metadata==="tanaka" && (metadata!==undefined || field.hasTanaka)) {
        const option=node("label","타나카가 있을 때만 표시","line-options");
        const toggle=node("input");
        toggle.type="checkbox";
        toggle.checked=Boolean(metadata);
        toggle.addEventListener("input",()=>{
          if(toggle.checked) list[index][2]=true;
          else if(list[index][3])list[index][2]=null;
          else list[index].length=2;
          update();
        });
        option.prepend(toggle);
        row.append(option);
      }
      if(isWeb&&field.cues){
        const settings=cueEditor(index,cue,field,updated=>{
          const line=list[index];
          const legacy=line[2];
          line.length=2;
          if(Object.keys(updated).length)line.push(legacy??null,updated);
          else if(legacy!=null)line.push(legacy);
          update();
        });
        const item=list[index];
        settings.open=opened.has(item);
        settings.addEventListener("toggle",()=>{if(settings.open)opened.add(item);else opened.delete(item);});
        row.append(settings);
      }
      if(index===list.length-1){
        const after=button("＋ 마지막에 대사 추가",()=>insert(list.length),"insert-last");
        after.disabled=add.disabled;row.append(after);
      }
      body.append(row);
    });
    selectLine(indexToSelect);
  }
  draw();
}

function cueEditor(index,initial,field,onChange){
  const cue={...initial};
  const panel=node("details",undefined,"line-options cue-editor");
  const summary=node("summary");
  panel.append(summary);
  const form=node("div",undefined,"cue-controls");
  panel.append(form);
  function updateSummary(){
    const count=Object.keys(cue).length;
    summary.textContent=(index+1)+"번 대사 연출"+(count?" · "+count+"개":"");
  }
  function set(key,value){
    if(value)cue[key]=value;
    else delete cue[key];
    updateSummary();
    onChange({...cue});
  }
  panel.addEventListener("toggle",()=>{
    if(!panel.open||form.childElementCount)return;
    for(const [key,label,empty] of [
      ["fx","화면 전환","기본"],["cg","CG 교체","장면 기본"],["bgm","배경 음악","장면 기본"],["se","효과음","없음"]
    ]){
      const control=labeled(form,label,select([["",empty],...field.cues[key]],cue[key]??""));
      control.addEventListener("input",()=>set(key,control.value));
    }
    if(!field.manual){
      const wait=labeled(form,"자동 재생 추가 대기 (초)",node("input"));
      wait.type="number";wait.min="0";wait.max="10";wait.step=".1";wait.value=(cue.wait??0)/1000;
      wait.addEventListener("change",()=>{
        const seconds=Math.min(10,Math.max(0,wait.valueAsNumber||0));
        wait.value=seconds;
        set("wait",Math.round(seconds*1000));
      });
    }
    for(const [side,label] of [["left","왼쪽 스탠딩"],["right","오른쪽 스탠딩"]]){
      const current=cue[side]??(side==="left"?cue.standing:"")??"";
      const standing=labeled(form,label,select([["","미지정"],...field.cues.standing],current));
      const expression=labeled(form,(side==="left"?"왼쪽":"오른쪽")+" 표정",node("select"));
      function showExpressions(){
        const options=[["","기본 표정"],...Object.entries(field.cues.expressions??{})
          .filter(([,item])=>item.actor===standing.value).map(([id,item])=>[id,item.name])];
        expression.replaceChildren(...Array.from(select(options,cue[side+"Expression"]??"").options));
        expression.value=cue[side+"Expression"]??"";
        expression.disabled=options.length===1;
      }
      showExpressions();
      expression.addEventListener("input",()=>set(side+"Expression",expression.value));
      standing.addEventListener("input",()=>{
        delete cue[side+"Expression"];
        showExpressions();
        if(cue.standing){
          if(side==="right")cue.left=cue.standing;
          delete cue.standing;
        }
        set(side,standing.value);
      });
    }
    const hide=labeled(form,"스탠딩 숨기기",node("input"));
    hide.type="checkbox";hide.checked=Boolean(cue.hideCast);
    hide.addEventListener("change",()=>set("hideCast",hide.checked));
  });
  updateSummary();
  return panel;
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

function labeled(parent,text,control){
  const label=node("label",text);
  control.setAttribute("aria-label",text);
  label.append(control);
  parent.append(label);
  return control;
}

function storyTrigger(current){
  return select([["0","선택지에서 연결될 때"],...Array.from({length:35},(_,i)=>[String(i+1),(i+1)+"개월차 월말"])],String(current));
}

function choicesEditor(parent,field,initial){
  const choices=structuredClone(initial);
  const list=node("div",undefined,"choice-list");
  const add=button("＋ 선택지 추가",()=>{
    choices.push(["","","",0]);
    draw();
    list.lastElementChild.querySelector("input").focus();
    save();
  },"add-line");
  function save(){modify(field,structuredClone(choices));}
  function draw(){
    list.replaceChildren();
    add.disabled=choices.length>=20;
    choices.forEach((choice,index)=>{
      const row=node("fieldset",undefined,"choice-row");
      row.append(node("legend","선택지 "+(index+1)));
      const label=labeled(row,"버튼 문구",node("input"));
      label.value=choice[0];
      label.addEventListener("input",()=>{choice[0]=label.value;save();});
      const response=labeled(row,"선택 후 대사",node("textarea"));
      response.rows=2;
      response.value=choice[1];
      response.addEventListener("input",()=>{choice[1]=response.value;save();});
      const reward=node("div",undefined,"choice-reward");
      const stat=labeled(reward,"변화하는 수치",select(field.options,choice[2]));
      const amount=labeled(reward,"증감량",node("input"));
      amount.type="number";
      amount.min=-100;
      amount.max=100;
      amount.value=choice[3];
      amount.disabled=!stat.value;
      amount.addEventListener("input",()=>{choice[3]=amount.valueAsNumber;save();});
      stat.addEventListener("input",()=>{
        choice[2]=stat.value;
        amount.disabled=!stat.value;
        if(!stat.value)choice[3]=amount.value=0;
        save();
      });
      row.append(reward);
      if(isWeb&&field.cues){
        const route=choice[5]??{};
        function updateRoute(){
          if(Object.keys(route).length){
            choice[4]??=null;
            choice[5]={...route};
          }else choice.length=choice[4]?.length?5:4;
          save();
        }
        const routing=node("div",undefined,"choice-routing");
        const targets=storyRouteScenes().filter(scene=>scene.linked&&scene.id!==currentGroup()?.preview?.id);
        const options=[["","이벤트 마치기"],...targets.map(scene=>[scene.id,scene.title])];
        if(route.next&&!options.some(([id])=>id===route.next))options.push([route.next,"연결 확인 필요 · "+route.next]);
        const target=labeled(routing,"다음 장면",select(options,route.next??""));
        target.addEventListener("input",()=>{
          if(target.value)route.next=target.value;else delete route.next;
          updateRoute();
        });
        routing.append(button("새 장면을 만들어 연결",()=>{
          if(deleteEvent){status("삭제 예약을 먼저 적용하거나 취소해 주세요.",true);return;}
          const previous=route.next;
          openNewEvent(id=>{
            route.next=id;updateRoute();
            return ()=>{
              if(previous)route.next=previous;else delete route.next;
              updateRoute();
            };
          });
        }));
        const gate=labeled(routing,"선택 조건",select([["","항상 선택 가능"],...field.options.filter(([key])=>key&&!["hp","stress","motivation"].includes(key))],route.stat??""));
        const minimum=labeled(routing,"필요 수치 이상",node("input"));
        minimum.type="number";minimum.min=0;minimum.max=500;minimum.step=1;
        minimum.value=route.min??0;minimum.disabled=!route.stat;
        gate.addEventListener("input",()=>{
          minimum.disabled=!gate.value;
          if(gate.value){route.stat=gate.value;route.min=minimum.valueAsNumber;}
          else{delete route.stat;delete route.min;}
          updateRoute();
        });
        minimum.addEventListener("input",()=>{route.min=minimum.valueAsNumber;updateRoute();});
        row.append(routing);
        const branch=node("details",undefined,"cue-editor");
        branch.append(node("summary","선택지 후속 장면"));
        const body=node("div");
        const drawBranch=()=>{
          body.replaceChildren();
          if(choice[4]?.length){
            linesEditor(body,choice[4],lines=>{choice[4]=structuredClone(lines);save();},
              {cues:field.cues,manual:true});
            body.append(button("후속 장면 비우기",()=>{if(choice[5])choice[4]=null;else choice.length=4;save();drawBranch();}));
          }else body.append(button("＋ 후속 장면 대사 추가",()=>{
            choice[4]=[["",""]];save();drawBranch();body.querySelector("textarea")?.focus();
          }));
        };
        drawBranch();
        branch.append(body);
        row.append(branch);
      }
      row.append(button("선택지 삭제",()=>{
        choices.splice(index,1);
        draw();
        save();
        (list.children[Math.min(index,choices.length-1)]?.querySelector("input")??add).focus();
      }));
      list.append(row);
    });
  }
  parent.append(add,list);
  draw();
}

function fieldEditor(field) {
  const current=value(field);
  if(field.type==="lines") {
    const block=node("fieldset",undefined,"field");
    block.append(node("legend",field.label));
    linesEditor(block,current,input=>modify(field,structuredClone(input)),field);
    return block;
  }
  if(["choices","cast"].includes(field.type)){
    const block=node("fieldset",undefined,"field");
    block.append(node("legend",field.label));
    if(field.type==="choices")choicesEditor(block,field,current);
    else{
      const slots=[0,1].map(index=>labeled(block,"스탠딩 "+(index+1),
        select([["","없음"],...field.options],current[index]??"")));
      const media=slots.map(()=>node("div",undefined,"asset-preview"));
      function draw(){
        slots.forEach((slot,index)=>{
          for(const option of slot.options)option.disabled=Boolean(option.value&&option.value===slots[1-index].value);
          assetPreview(data.inventory.standing[slot.value],media[index]);
        });
      }
      slots.forEach((slot,index)=>{
        slot.parentElement.append(media[index]);
        slot.addEventListener("input",()=>{
          modify(field,slots.map(item=>item.value).filter(Boolean));
          draw();
        });
      });
      draw();
    }
    return block;
  }
  const block=node("div",undefined,"field");
  const label=node("label",field.label+(field.caseOutcome?" · "+field.caseOutcome:""));
  const media=node("div",undefined,"asset-preview");
  let control;
  if(field.trigger){control=storyTrigger(current);}
  else if (field.options || field.paths) {
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
      const input=field.trigger?Number(control.value):field.type==="number"?control.valueAsNumber:control.value;
      modify(field,input);
      if(field.assignment) assetPreview(getAsset(field,input),media,true);
      else if(field.media||field.paths) assetPreview(getAsset(field,input),media);
    });
  }
  block.append(label);
  if(control) block.append(control);
  if(field.media||field.paths||field.fixed||field.type==="cue") {
    assetPreview(getAsset(field,current),media,field.assignment);
    block.append(media);
  }
  return block;
}

function filtered() {
  const q=$("search").value.trim().toLocaleLowerCase();
  if(section==="score"){
    const activity=$("assignment-kind").value==="activity";
    return data.groups.filter(group=>(group.preview?.kind==="activity")===activity
      &&group.fields.some(field=>field.assignment)
      &&[group.title,group.detail,group.key].some(term=>term.toLocaleLowerCase().includes(q)));
  }
  if(q) {
    const matches=data.groups.filter(group=>[group.title,group.detail,group.key,...group.fields.flatMap(field=>[field.label,JSON.stringify(value(field))])]
      .some(term=>term.toLocaleLowerCase().includes(q)));
    return matches;
  }
  if(section==="eventScripts") {
    return data.groups.filter(group=>group.preview?.kind==="weather"
      ||group.fields.some(field=>field.label==="추리 질문")
      ||(group.preview?.kind==="fair"&&group.fields.some(field=>field.label==="상대 · 첫 인사")));
  }
  return data.groups.filter(group=>group.section===section);
}

function drawList() {
  if(!data) return;
  const oldScroll=$("list").scrollTop;
  $("assignment-filter").hidden=section!=="score";
  const options=filtered();
  const label=$("search").value.trim()?"검색 결과":sections[section];
  $("list-title").replaceChildren(document.createTextNode(label+" "),node("span",String(options.length),"count"));
  $("new-event").hidden=section!=="events";
  $("list").replaceChildren();
  const buttons=options.map(group=>{
    const b=button(group.title,()=>{
      if(newEvent) {status("새 이벤트를 적용하거나 취소한 뒤 이동해 주세요.",true);return;}
      selected=group.key;
      activePane=null;
      drawList();
      drawDesk();
      if(matchMedia("(max-width: 760px)").matches){
        setCatalogExpanded(false);
        $("entry-title").focus({preventScroll:true});
        $("entry-title").scrollIntoView({block:"start"});
      }else $("list").querySelector('[aria-current="true"]')?.focus({preventScroll:true});
    });
    if(group.detail) b.append(node("small",group.detail));
    if(group.key===selected&&!newEvent) b.setAttribute("aria-current","true");
    return b;
  });
  $("list").append(...buttons);
  $("list").scrollTop=oldScroll;
  if(!options.length) $("list").append(node("p","검색 결과가 없습니다.","muted"));
  for(const b of $("sections").children){
    b.disabled=false;
    b.setAttribute("aria-pressed",String(b.dataset.section===section));
  }
}

const paneLabels={flow:"장면 흐름도",dialogue:"대사",choices:"선택지",stage:"이미지 · 소리",details:"기본 정보"};

function paneFor(field){
  if(field.caseOutcome||field.caseReply)return "choices";
  if(field.type==="lines"||/^(날씨 지문$|상대 · 첫 인사$|상대 인사 ·|시엘의 답 ·|시엘 · 종목 |참여 지문 |입상 결과 |참가 결과 |추리 질문$|단서 \d+ ·|판단 \d+)/.test(field.label))return "dialogue";
  if(field.type==="choices"||/^(선택지|응답)\s*\d|마무리 버튼|^마지막 대사/.test(field.label))return "choices";
  if(field.media||field.paths||field.fixed||["cast","cue"].includes(field.type))return "stage";
  return "details";
}

function updatePaneCounts(){
  const group=currentGroup();
  if(!group)return;
  for(const tab of $("entry-nav").querySelectorAll("[data-pane]")){
    if(tab.dataset.pane==="flow")continue;
    const total=group.fields.filter(field=>paneFor(field)===tab.dataset.pane)
      .reduce((count,field)=>count+(["lines","choices"].includes(field.type)?value(field).length:1),0);
    tab.querySelector(".count").textContent=total;
  }
}

function drawDesk() {
  flowMapResize?.disconnect();
  const panel=$("fields");
  $("add-story").hidden=!isWeb||section!=="story"||Boolean(newEvent);
  const nav=$("entry-nav");
  nav.replaceChildren();
  nav.hidden=true;
  panel.replaceChildren();
  if(newEvent){drawNewEvent(panel);return;}
  const group=currentGroup();
  $("entry-title").textContent=group?.title??"콘텐츠를 선택해 주세요";
  $("entry-detail").textContent=group?sections[group.section]+(group.detail?" / "+group.detail:""):"";
  $("preview").textContent=group?.preview?"게임에서 미리보기 ↗":"게임 시작하기 ↗";
  if(!group) return;
  if(section==="score"){
    $("entry-detail").textContent="BGM 배정 / "+(group.detail||group.title);
    for(const field of group.fields.filter(field=>field.assignment))panel.append(fieldEditor(field));
    return;
  }
  const panes={dialogue:[],choices:[],stage:[],details:[]};
  for(const field of group.fields)panes[paneFor(field)].push(field);
  const visible=Object.keys(panes).filter(key=>panes[key].length||(key==="stage"&&group.asset));
  if(!visible.includes(activePane)&&activePane!=="flow")activePane=visible[0];
  if(isWeb&&["opening","ending","recruit","event","visit"].includes(group.preview?.kind))visible.unshift("flow");
  if(!visible.includes(activePane))activePane=visible[0];
  if(visible.length>1){
    nav.hidden=false;
    for(const key of visible){
      const tab=button(paneLabels[key],()=>{
        activePane=key;
        drawDesk();
        nav.querySelector('[aria-pressed="true"]')?.focus();
      });
      tab.setAttribute("aria-pressed",key===activePane);
      tab.dataset.pane=key;
      if(key!=="flow")tab.append(node("span",undefined,"count"));
      nav.append(tab);
    }
    updatePaneCounts();
  }
  if(activePane==="flow")drawStoryFlow(panel,group);
  for(const field of panes[activePane]??[]){
    const block=fieldEditor(field);
    block.dataset.field=field.id;
    panel.append(block);
  }
  if(group.asset&&activePane==="stage") {
    const media=node("div",undefined,"asset-preview");
    assetPreview(group.asset,media);
    panel.append(media);
  }
  if(group.removable&&activePane==="details") {
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
  $("entry-title").textContent=newEvent.month===0?"새 연결 장면":"새 월말 이벤트";
  if(cancelLinkedScene)panel.append(button("원래 선택지로 돌아가기",()=>{
    cancelLinkedScene();cancelLinkedScene=null;newEvent=null;
    section=currentGroup().section;activePane="choices";drawList();drawDesk();
  }));
  $("entry-detail").textContent="이벤트 / 35개월 본편";
  $("preview").textContent="게임에서 미리보기 ↗";
  for(const [key,label] of [["id","이벤트 ID · 영문 소문자, 숫자, 하이픈"],["title","제목"],["month","발생 방식"],["room","배경"],["track","BGM"],["picture","CG"],["standing","스탠딩"],["result","마지막 대사"],["label","마무리 버튼"]]) {
    const field=node("div",undefined,"field");
    const title=node("label",label);
    const options={room:data.roomOptions,track:data.trackOptions,
      picture:[["","없음"],...data.artOptions],standing:[["","없음"],...data.recruitCastOptions]};
    const control=key==="month"?storyTrigger(newEvent.month):options[key]?select(options[key],newEvent[key]):node("input");
    control.value=newEvent[key];
    if(cancelLinkedScene&&(key==="id"||key==="month"))control.disabled=true;
    control.id="new-"+key;
    title.htmlFor=control.id;
    control.addEventListener("input",()=>{newEvent[key]=key==="month"?Number(control.value):control.value;previewedDraft=false;updateToolbar();});
    field.append(title,control);
    panel.append(field);
  }
  const lines=node("fieldset",undefined,"field");
  lines.append(node("legend","대사 순서"));
  linesEditor(lines,newEvent.lines,input=>{newEvent.lines=structuredClone(input);previewedDraft=false;updateToolbar();},{cues:data.cueFields,manual:true});
  panel.append(lines);
  updateToolbar();
}

function payload() {
  return {version:data.version,changes,uploads,newEvent,deleteEvent};
}

async function refresh() {
  data=await api("/api/catalog");
  if(isWeb)inspectStoryRoutes=(await web).inspectRoutes;
  if(isWeb){
    $("release-info").textContent="배포 "+data.release+" · "+(data.sourceCommit||"").slice(0,7)+(data.hasDraft?" · 브라우저 편집본":" · 공개 원본");
    const past=$("past-release");
    past.replaceChildren(...data.past.map(id=>new Option(id.slice(8),id)));
    $("export-older").hidden=past.hidden=!data.past.length;
    $("export-backup").hidden=!data.hasDraft&&!data.past.length;
  }
  if(!currentGroup()) selected=filtered()[0]?.key;
  drawList();
  drawDesk();
  updateToolbar();
}

function setCatalogExpanded(expanded){
  $("catalog-body").classList.toggle("collapsed",!expanded);
  const toggle=$("toggle-catalog");
  toggle.setAttribute("aria-expanded",String(expanded));
  toggle.textContent=expanded?"콘텐츠 목록 접기 ⌃":"콘텐츠 목록 열기 ⌄";
}
$("toggle-catalog").addEventListener("click",()=>{
  setCatalogExpanded($("toggle-catalog").getAttribute("aria-expanded")==="false");
});
for(const action of document.querySelectorAll(".more-menu :is(button,a)")){
  action.addEventListener("click",()=>{action.closest("details").open=false;});
}
$("search").addEventListener("input",drawList);
$("assignment-kind").addEventListener("change",()=>{
  $("search").value="";
  selected=filtered()[0]?.key;
  drawList();
  drawDesk();
});
for(const [id,label] of Object.entries(sections)) {
  const b=button(label,()=>{
    if(!data) return;
    if(newEvent){status("새 이벤트를 적용하거나 취소한 뒤 이동해 주세요.",true);return;}
    section=id;
    activePane=null;
    $("search").value="";
    selected=filtered()[0]?.key;
    drawList();
    drawDesk();
  });
  b.dataset.section=id;
  b.disabled=!data;
  $("sections").append(b);
}
function openNewEvent(link){
  if(newEvent) return;
  if(deleteEvent){status("이벤트 삭제를 적용하거나 취소한 뒤 추가해 주세요.",true);return;}
  section="events";
  $("search").value="";
  previewedDraft=false;
  newEvent={id:"event-"+crypto.randomUUID().slice(0,8),title:"",month:1,room:"ballroom",track:"daily",picture:"",standing:"",lines:[["세바스찬",""]],label:"기록을 덮는다",result:""};
  if(typeof link==="function"){
    newEvent.month=0;
    cancelLinkedScene=link("custom-"+newEvent.id);
  }
  drawList();
  drawDesk();
  $("new-title").focus();
}
$("new-event").addEventListener("click",openNewEvent);
$("preview").addEventListener("click",()=>openGamePreview());
async function openGamePreview(cut){
  if(busy||deleteEvent)return;
  busy=true;updateToolbar();status("게임 미리보기를 준비하고 있습니다.");
  try {
    const spec=newEvent?{kind:"event",id:"custom-"+newEvent.id}:currentGroup()?.preview??null;
    const result=await api("/api/preview",{...payload(),preview:spec,cut});
    const dialog=$("game-dialog");
    dialog.querySelector("iframe").src=result.url;
    dialog.showModal();
    previewedDraft=Boolean(draftCount());
    status("게임 미리보기를 열었습니다.");
  } catch(error){status(error.message,true);}
  finally{busy=false;updateToolbar();}
}
$("game-dialog").addEventListener("close",()=>{
  $("game-dialog").querySelector("iframe").removeAttribute("src");
  if(web)void web.then(adapter=>adapter.closePreview()).catch(()=>{});
});
$("save").addEventListener("click",async()=>{
  busy=true;updateToolbar();status("변경 내용을 확인하고 있습니다.");
  try {
    const result=await api("/api/save",payload());
    if(newEvent){selected="event-custom-"+newEvent.id;activePane="choices";}
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
  const addDialog=$("add-dialog");
  const addKind=$("add-kind");
  let addition;
  const extensions={expression:".webp,.png,.jpg,.jpeg,.gif",standing:".webp,.png,.jpg,.jpeg",cg:".webp",bgm:".mp3,.ogg,.wav",background:".webp,.png,.jpg,.jpeg"};
  function drawAddition(){
    const kind=addKind.value;
    const fields=$("add-fields");
    fields.replaceChildren();
    $("add-error").textContent="";
    addition={kind};
    function input(key,label){
      const control=labeled(fields,label,node("input"));
      control.required=true;
      control.addEventListener("input",()=>{addition[key]=control.value.trim();});
      return control;
    }
    $("add-submit").textContent=kind==="event"?"이벤트 작성":draftCount()?"추가하고 변경 사항 저장":"추가하고 저장";
    if(kind==="event")return;
    if(!["scene","opening"].includes(kind)){
      const id=input("id","ID · 자동 생성, 수정 가능");
      id.pattern="[a-z][a-z0-9\\-]{0,39}";
      id.value=addition.id=kind+"-"+crypto.randomUUID().slice(0,8);
    }
    if(kind==="expression"){
      const actor=labeled(fields,"표정을 사용할 인물",select(data.recruitCastOptions,data.recruitCastOptions[0][0]));
      addition.actor=actor.value;
      actor.addEventListener("input",()=>{addition.actor=actor.value;});
    }
    if(kind!=="fx")input("name",kind==="expression"?"표정 이름":"이름").maxLength=120;
    if(kind==="fx")input("symbol","화면에 뿌릴 문자").maxLength=20;
    if(["scene","opening"].includes(kind)){
      fields.append(node("p",kind==="opening"?"프롤로그에서 수첩을 고르기 전에 이어집니다.":"고른 영입 이벤트의 마지막 장면 뒤에 이어집니다.","muted"));
      const optionsList=kind==="scene"?[["target","영입 이벤트",data.recruits],["art","배경",data.recruitArtOptions]]:[];
      optionsList.push(["music","BGM",[["","기본 음악"],...data.trackOptions]],["picture","CG",kind==="opening"?data.artOptions:[["","사용 안 함"],...data.artOptions]]);
      for(const [key,label,options] of optionsList){
        const preferred=key==="target"?currentGroup()?.preview?.id:null;
        const control=labeled(fields,label,select(options,options.some(([id])=>id===preferred)?preferred:options[0][0]));
        addition[key]=control.value;
        control.addEventListener("input",()=>{addition[key]=control.value;});
      }
      const cast=(kind==="scene"?[0,1]:[]).map(index=>labeled(fields,"스탠딩 "+(index+1),select([["","없음"],...data.recruitCastOptions],"")));
      for(const control of cast)control.addEventListener("input",()=>{
        addition.cast=cast.map(slot=>slot.value).filter(Boolean);
        cast.forEach((slot,index)=>{
          for(const option of slot.options)option.disabled=Boolean(option.value&&option.value===cast[1-index].value);
        });
      });
      addition.lines=[["세바스찬",""]];
      fields.append(node("p","대사를 한 줄 이상 입력해 주세요. 화자는 비워 둘 수 있습니다.","muted"));
      linesEditor(fields,addition.lines,lines=>{addition.lines=structuredClone(lines);},{required:true,cues:data.cueFields});
    }
    if(extensions[kind]){
      const control=labeled(fields,"파일 · "+extensions[kind].replaceAll(",",", "),node("input"));
      control.type="file";
      control.required=true;
      control.accept=extensions[kind];
      control.id="add-file";
    }
  }
  $("add-content").hidden=false;
  function openAddition(kind){
    addKind.value=kind;
    drawAddition();
    addDialog.showModal();
  }
  $("add-content").addEventListener("click",()=>openAddition("standing"));
  $("add-story").addEventListener("click",()=>openAddition(currentGroup()?.preview?.kind==="recruit"?"scene":"opening"));
  addKind.addEventListener("input",drawAddition);
  $("add-close").addEventListener("click",()=>addDialog.close());
  addDialog.addEventListener("cancel",event=>{if(busy)event.preventDefault();});
  addDialog.addEventListener("close",()=>{$("add-fields").replaceChildren();});
  $("add-form").addEventListener("submit",async event=>{
    event.preventDefault();
    if(busy||newEvent)return;
    if(addition.kind==="event"){
      addDialog.close();
      openNewEvent();
      return;
    }
    busy=true;
    $("add-close").disabled=$("add-submit").disabled=addKind.disabled=true;
    updateToolbar();
    try{
      const adapter=await web;
      const input={...addition};
      const incoming={};
      const file=$("add-file")?.files[0];
      if(file){
        if(file.size>20*1024*1024)throw new Error("파일당 20 MB까지 올릴 수 있습니다.");
        input.extension=file.name.split(".").at(-1).toLowerCase();
        const path=adapter.additionPath(input);
        incoming[path]=await new Promise((resolve,reject)=>{
          const reader=new FileReader();
          reader.onload=()=>resolve(reader.result.split(",")[1]);
          reader.onerror=()=>reject(new Error("파일을 읽지 못했습니다."));
          reader.readAsDataURL(file);
        });
      }
      await api("/api/save",{...payload(),addition:input,uploads:{...uploads,...incoming}});
      clearDraft();
      addDialog.close();
      if(["standing","expression","cg","background","bgm","fx"].includes(input.kind)){
        const destination={expression:["assets","expression"],standing:["assets","standing"],cg:["assets","cg"],background:["assets","sceneArt"],bgm:["audio","music"],fx:["fx","fx-symbols"]}[input.kind];
        [section,selected]=destination;
        if(input.kind!=="fx")selected+="-extra-"+input.id;
        activePane=null;
        $("search").value="";
      }
      if(input.kind==="opening"){
        section="story";
        selected="opening-"+data.groups.filter(group=>group.preview?.kind==="opening"&&!group.preview.handoff).length;
        activePane="dialogue";
        $("search").value="";
      }
      if(input.kind==="scene"){
        section="story";
        const prefix="recruit-"+input.target+"-";
        const previous=data.groups.filter(group=>group.key.startsWith(prefix)).length;
        selected=prefix+previous;
        activePane="dialogue";
        $("search").value="";
      }
      await refresh();
      status("새 콘텐츠를 브라우저에 저장했습니다.");
    }catch(error){$("add-error").textContent=error.message;}
    finally{
      busy=false;
      $("add-close").disabled=$("add-submit").disabled=addKind.disabled=false;
      updateToolbar();
    }
  });
  $("review").hidden=false;
  $("review").addEventListener("click",async()=>{
    const dialog=$("review-dialog"),body=$("review-content");
    body.replaceChildren(node("p","원본과 비교하고 있습니다."));
    dialog.showModal();
    try{
      const report=await (await web).review(payload());
      body.replaceChildren(node("h3","리소스 경로 · 이벤트 연결"));
      if(report.issues.length){
        const issues=node("ul");
        for(const issue of report.issues)issues.append(node("li",issue));
        body.append(issues);
      }else body.append(node("p","등록된 리소스와 이벤트 연결에서 문제를 찾지 못했습니다."));
      body.append(node("h3","원본과 다른 파일 "+report.changes.length+"개"));
      for(const file of report.changes){
        const block=node("details",undefined,"file-diff");block.open=report.changes.length===1;
        block.append(node("summary",file.path));
        if(file.hunks){
          for(const hunk of file.hunks){
            const pre=node("pre");
            pre.append(node("span","원본 "+hunk.oldStart+"행 · 수정 "+hunk.newStart+"행","diff-at"));
            for(const line of hunk.lines)pre.append(node("span",line,line.startsWith("+")?"diff-add":line.startsWith("-")?"diff-del":""));
            block.append(pre);
          }
        }else block.append(node("p","리소스 파일 · "+file.bytes.toLocaleString()+"바이트"));
        body.append(block);
      }
    }catch(error){body.replaceChildren(node("p","검사를 마치려면 다음 내용을 확인해 주세요."),node("p",error.message,"danger"));}
  });
  $("save").textContent="브라우저에 저장";
  $("undo").textContent="마지막 저장 되돌리기";
  $("export-edits").hidden=false;
  $("publish").hidden=false;
  const publishDialog=$("publish-dialog");
  const tokenField=$("github-token");
  const passwordField=$("token-password");
  const progress=$("publish-progress");
  const manage=$("token-manage");
  manage.hidden=false;
  let vaultAvailable=true;
  let tokenSaved=false;
  let unlockedToken="";
  let managing=false;

  function renderTokenControls(){
    $("token-entry").hidden=tokenSaved;
    $("token-help").hidden=tokenSaved;
    $("token-lock-entry").hidden=!vaultAvailable||Boolean(unlockedToken);
    $("token-store").hidden=!vaultAvailable||tokenSaved;
    $("token-unlock").hidden=!vaultAvailable||!tokenSaved||Boolean(unlockedToken);
    $("token-forget").hidden=!vaultAvailable||!tokenSaved;
    $("publish-submit").hidden=managing;
    $("token-store").textContent=managing?"이 브라우저에 저장":"저장하고 업로드";
    $("publish-submit").disabled=busy||tokenSaved&&!unlockedToken;
    passwordField.placeholder=tokenSaved?"저장할 때 정한 비밀번호":"저장할 때만 사용 · 12자 이상";
    $("token-state").textContent=!vaultAvailable?"이 브라우저에서는 토큰을 한 번씩 입력해 업로드할 수 있습니다."
      :unlockedToken?"토큰이 잠금 해제되었습니다. 페이지를 새로 열면 다시 잠깁니다."
      :tokenSaved?"암호화된 토큰이 이 브라우저에 저장되어 있습니다."
      :managing?"토큰과 12자 이상 잠금 비밀번호를 입력한 뒤 ‘이 브라우저에 저장’을 누르세요."
      :"토큰을 계속 쓰려면 잠금 비밀번호를 정하고 ‘저장하고 업로드’를 누르세요. ‘공개 게임에 반영’은 한 번만 사용합니다.";
  }
  async function openTokenDialog(isManaging){
    try{
      tokenSaved=(await web).hasSavedToken();
      vaultAvailable=true;
    }catch{
      tokenSaved=false;
      vaultAvailable=false;
    }
    if(!tokenSaved)unlockedToken="";
    managing=isManaging;
    $("publish-title").textContent=managing?"GitHub 토큰 관리":"GitHub에 업로드";
    $("publish-summary").textContent=managing||!data?"":data.publishCount+"개 파일을 main에 올립니다. GitHub 검사 후 공개 게임이 갱신됩니다.";
    progress.textContent="";
    renderTokenControls();
    publishDialog.showModal();
  }
  $("publish").addEventListener("click",()=>void openTokenDialog(false));
  manage.addEventListener("click",()=>void openTokenDialog(true));
  const tokenActions=["token-store","token-unlock","token-forget","publish-close"];
  for(const id of tokenActions.slice(0,3)){
    $(id).addEventListener("click",async()=>{
      if(busy)return;
      busy=true;
      for(const button of tokenActions)$(button).disabled=true;
      updateToolbar();
      renderTokenControls();
      progress.textContent="";
      let uploadAfterSave=false;
      try{
        const adapter=await web;
        if(id==="token-store"){
          const token=tokenField.value.trim();
          await adapter.saveToken(token,passwordField.value);
          tokenSaved=true;
          unlockedToken=token;
          uploadAfterSave=!managing;
          progress.textContent="토큰을 이 브라우저에 저장했습니다.";
        }else if(id==="token-unlock"){
          unlockedToken=await adapter.unlockToken(passwordField.value);
        }else{
          adapter.forgetToken();
          tokenSaved=false;
          unlockedToken="";
          progress.textContent="이 브라우저에서 저장한 토큰을 삭제했습니다.";
        }
        tokenField.value="";
      }catch(error){
        progress.textContent=error.message;
      }finally{
        passwordField.value="";
        busy=false;
        for(const button of tokenActions)$(button).disabled=false;
        updateToolbar();
        renderTokenControls();
      }
      if(uploadAfterSave)$("publish-form").requestSubmit();
    });
  }
  $("publish-close").addEventListener("click",()=>publishDialog.close());
  publishDialog.addEventListener("cancel",event=>{if(busy)event.preventDefault();});
  publishDialog.addEventListener("close",()=>{
    tokenField.value="";
    passwordField.value="";
  });
  window.addEventListener("pagehide",()=>{unlockedToken="";renderTokenControls();});
  window.addEventListener("storage",async event=>{
    const adapter=await web.catch(()=>null);
    if(!adapter||(event.key!==null&&event.key!==adapter.tokenKey))return;
    unlockedToken="";
    tokenSaved=adapter.hasSavedToken();
    renderTokenControls();
  });
  $("publish-form").addEventListener("submit",async event=>{
    event.preventDefault();
    if(managing||busy||draftCount()||!data.publishCount||tokenSaved&&!unlockedToken)return;
    const token=unlockedToken||tokenField.value.trim();
    tokenField.value="";
    busy=true;
    for(const button of tokenActions)$(button).disabled=true;
    renderTokenControls();
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
      (tokenSaved?$("token-forget"):tokenField).focus();
    }finally{
      busy=false;
      for(const button of tokenActions)$(button).disabled=false;
      renderTokenControls();
      updateToolbar();
    }
  });
  $("editor-note").hidden=false;
  $("export-edits").addEventListener("click",()=>void download("changes"));
  $("export-backup").addEventListener("click",()=>void download("backup"));
  const checkRelease=async()=>{
    try{if(await (await web).deploymentChanged())$("release-info").textContent="새 배포가 있습니다. 편집 내용을 저장하고 ZIP으로 백업한 뒤 새로고침하세요.";}catch{}
  };
  window.addEventListener("focus",checkRelease);
  setInterval(checkRelease,120000);
  $("export-older").addEventListener("click",()=>void download($("past-release").value));
}
window.addEventListener("beforeunload",event=>{
  if(draftCount()) event.preventDefault();
});
refresh().then(()=>status("콘텐츠를 선택해 편집하거나 게임에서 미리 보세요.")).catch(error=>status(error.message,true));
