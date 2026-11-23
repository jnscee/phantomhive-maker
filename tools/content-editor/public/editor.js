"use strict";

const $ = id => document.getElementById(id);
const sections = {story:"스토리", events:"이벤트", dialogue:"기타 대사", audio:"BGM · SE", assets:"CG · 이미지", fx:"화면 효과"};
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
    list.forEach(([who,text,metadata,cue],index)=>{
      const row=node("div",undefined,"line");
      const speaker=node("input");
      speaker.value=who;
      speaker.placeholder="화자 없음";
      speaker.setAttribute("aria-label",(index+1)+"번 화자");
      speaker.addEventListener("input",()=>{list[index][0]=speaker.value;onChange(list);});
      const line=node("textarea");
      line.value=text;
      line.rows=2;
      line.required=Boolean(field.required);
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
          else if(list[index][3])list[index][2]=null;
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
          else if(list[index][3])list[index][2]=null;
          else list[index].length=2;
          onChange(list);
        });
        option.prepend(toggle);
        row.append(option);
      }
      if(isWeb&&field.cues)row.append(cueEditor(index,cue,field,updated=>{
        const line=list[index];
        const legacy=line[2];
        line.length=2;
        if(Object.keys(updated).length)line.push(legacy??null,updated);
        else if(legacy!=null)line.push(legacy);
        onChange(list);
      }));
      body.append(row);
    });
  }
  parent.append(add,body);
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
  for(const [key,label,empty] of [
    ["fx","화면 전환","기본"],["cg","CG 교체","장면 기본"],["bgm","배경 음악","장면 기본"],["se","효과음","없음"]
  ]){
    if(key==="cg"&&field.metadata==="illustration")continue;
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
  if(field.castCue){
    const standing=labeled(form,"스탠딩 교체",select([["","장면 기본"],...field.cues.standing],cue.standing??""));
    standing.addEventListener("input",()=>set("standing",standing.value));
    const hide=labeled(form,"스탠딩 숨기기",node("input"));
    hide.type="checkbox";hide.checked=Boolean(cue.hideCast);
    hide.addEventListener("change",()=>set("hideCast",hide.checked));
  }
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
        const branch=node("details",undefined,"cue-editor");
        branch.append(node("summary","선택지 후속 장면"));
        const body=node("div");
        const drawBranch=()=>{
          body.replaceChildren();
          if(choice[4]?.length){
            linesEditor(body,choice[4],lines=>{choice[4]=structuredClone(lines);save();},
              {cues:field.cues,manual:true,castCue:true});
            body.append(button("후속 장면 비우기",()=>{choice.length=4;save();drawBranch();}));
          }else body.append(button("＋ 후속 장면 대사 추가",()=>{choice[4]=[["",""]];save();drawBranch();}));
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
  for(const b of $("sections").children) b.setAttribute("aria-pressed",String(b.dataset.section===section));
}

const paneLabels={dialogue:"대사",choices:"선택지",stage:"이미지 · 소리",details:"기본 정보"};

function paneFor(field){
  if(field.type==="lines")return "dialogue";
  if(field.type==="choices"||/^(선택지|응답)\s*\d|마무리 버튼|^마지막 대사/.test(field.label))return "choices";
  if(field.media||field.paths||field.fixed||["cast","cue"].includes(field.type))return "stage";
  return "details";
}

function updatePaneCounts(){
  const group=currentGroup();
  if(!group)return;
  for(const tab of $("entry-nav").querySelectorAll("[data-pane]")){
    const total=group.fields.filter(field=>paneFor(field)===tab.dataset.pane)
      .reduce((count,field)=>count+(["lines","choices"].includes(field.type)?value(field).length:1),0);
    tab.querySelector(".count").textContent=total;
  }
}

function drawDesk() {
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
  const panes={dialogue:[],choices:[],stage:[],details:[]};
  for(const field of group.fields)panes[paneFor(field)].push(field);
  const visible=Object.keys(panes).filter(key=>panes[key].length||(key==="stage"&&group.asset));
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
      tab.append(node("span",undefined,"count"));
      nav.append(tab);
    }
    updatePaneCounts();
  }
  panel.append(...(panes[activePane]??[]).map(fieldEditor));
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
  $("entry-title").textContent="새 월말 이벤트";
  $("entry-detail").textContent="이벤트 / 35개월 본편";
  $("preview").textContent="게임에서 미리보기 ↗";
  for(const [key,label] of [["id","이벤트 ID · 영문 소문자, 숫자, 하이픈"],["title","제목"],["month","발생 월 · 1~35"],["room","배경"],["track","BGM"],["picture","CG"],["standing","스탠딩"],["result","마지막 대사"],["label","마무리 버튼"]]) {
    const field=node("div",undefined,"field");
    const title=node("label",label);
    const options={room:data.roomOptions,track:data.trackOptions,
      picture:[["","없음"],...data.artOptions],standing:[["","없음"],...data.recruitCastOptions]};
    const control=options[key]?select(options[key],newEvent[key]):node("input");
    if(key==="month"){control.type="number";control.min=1;control.max=35;}
    control.value=newEvent[key];
    control.id="new-"+key;
    title.htmlFor=control.id;
    control.addEventListener("input",()=>{newEvent[key]=key==="month"?control.valueAsNumber:control.value;previewedDraft=false;updateToolbar();});
    field.append(title,control);
    panel.append(field);
  }
  const lines=node("fieldset",undefined,"field");
  lines.append(node("legend","대사 순서"));
  linesEditor(lines,newEvent.lines,input=>{newEvent.lines=structuredClone(input);previewedDraft=false;updateToolbar();},{cues:data.cueFields,manual:true,castCue:true});
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
  $("sections").append(b);
}
function openNewEvent(){
  if(newEvent) return;
  if(deleteEvent){status("이벤트 삭제를 적용하거나 취소한 뒤 추가해 주세요.",true);return;}
  section="events";
  $("search").value="";
  previewedDraft=false;
  newEvent={id:"event-"+crypto.randomUUID().slice(0,8),title:"",month:1,room:"ballroom",track:"daily",picture:"",standing:"",lines:[["세바스찬",""]],label:"기록을 덮는다",result:""};
  drawList();
  drawDesk();
  $("new-title").focus();
}
$("new-event").addEventListener("click",openNewEvent);
$("preview").addEventListener("click",async()=>{
  busy=true;updateToolbar();status("게임 미리보기를 준비하고 있습니다.");
  try {
    const spec=newEvent?{kind:"event",id:"custom-"+newEvent.id}:currentGroup()?.preview??null;
    const result=await api("/api/preview",{...payload(),preview:spec});
    const dialog=$("game-dialog");
    dialog.querySelector("iframe").src=result.url;
    dialog.showModal();
    previewedDraft=Boolean(draftCount());
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
  const extensions={standing:".webp,.png,.jpg,.jpeg",cg:".webp",bgm:".mp3,.ogg,.wav",background:".webp,.png,.jpg,.jpeg"};
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
    if(kind!=="fx")input("name","이름").maxLength=120;
    if(kind==="fx")input("symbol","화면에 뿌릴 문자").maxLength=20;
    if(["scene","opening"].includes(kind)){
      fields.append(node("p",kind==="opening"?"프롤로그 마지막에 이어집니다.":"고른 영입 이벤트의 마지막 장면 뒤에 이어집니다.","muted"));
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
      linesEditor(fields,addition.lines,lines=>{addition.lines=structuredClone(lines);},{required:true,cues:data.cueFields,castCue:kind==="scene"});
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
      if(["standing","cg","background","bgm","fx"].includes(input.kind)){
        const destination={standing:["assets","standing"],cg:["assets","cg"],background:["assets","sceneArt"],bgm:["audio","music"],fx:["fx","fx-symbols"]}[input.kind];
        [section,selected]=destination;
        if(input.kind!=="fx")selected+="-extra-"+input.id;
        activePane=null;
        $("search").value="";
      }
      if(input.kind==="opening"){
        section="story";
        selected="opening-"+data.groups.filter(group=>group.preview?.kind==="opening").length;
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
  $("export-older").addEventListener("click",()=>void download("older"));
}
window.addEventListener("beforeunload",event=>{
  if(draftCount()) event.preventDefault();
});
refresh().then(()=>status("콘텐츠를 선택해 편집하거나 게임에서 미리 보세요.")).catch(error=>status(error.message,true));
