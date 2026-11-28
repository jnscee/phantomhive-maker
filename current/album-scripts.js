"use strict";

const scriptPrefix="earl-phantomhive-script-v1/";
const scriptRecords=new Map();
let scriptShelf=null,scriptReplay=null,albumSection="cg";
const scriptCharacters={
  "세바스찬":"assets/portraits/sebastian-head.webp","타나카":"assets/npc-tanaka.webp","피니안":"assets/npc-finny.webp",
  "메이린":"assets/npc-mey.webp","바르도":"assets/npc-bard.webp","스네이크":"assets/npc-snake.webp",
  "소마":"assets/portraits/soma.webp","아그니":"assets/portraits/agni.webp","엘리자베스":"assets/portraits/elizabeth-garden-party.png","라우":"assets/npc-lau.webp"
};
const scriptLabels={
  "인물별 회상":["Character memories","人物別回想"],
  "인물 목록으로":["Back to characters","人物一覧へ"],
  "다음 방문":["Return visit","再訪"],"이전에 고른 선택":["Previously chosen","選択済み"],
  "지난 방문에서 한 말을 고르세요.":["Choose what you said on the previous visit.","前の訪問での返答を選んでください。"],"엔딩":["Endings","エンディング"],
  "자유행동에서 만난 인물의 이벤트가 여기에 기록됩니다.":["Events with characters you meet on outings appear here.","自由行動で出会った人物のイベントがここに記録されます。"],
  "수집한 CG":["Collected CGs","収集したCG"],"CG 앨범":["CG gallery","CGアルバム"]
};
function scriptText(label){
  return (gameLanguage!=="ko"&&scriptLabels[label]?.[gameLanguage==="ja"?1:0])||translatedLine(label);
}
function collectScript(record){
  if(previewLesson||previewFair||storyDemo||typeof editorPreview!=="undefined"||
      (typeof tourSession!=="undefined"&&tourSession))return;
  const key=JSON.stringify(record);
  if(scriptRecords.has(key))return;
  scriptRecords.set(key,record);
  try{localStorage.setItem(scriptPrefix+key,"1");}catch{storageOk=false;}
}
function loadScriptRecords(byId){
  try{
    for(const key of Object.keys(localStorage)){
      if(!key.startsWith(scriptPrefix))continue;
      const json=key.slice(scriptPrefix.length);
      if(scriptRecords.has(json))continue;
      let record;
      try{record=JSON.parse(json);}catch{continue;}
      const event=byId.get(record?.id);
      if(!event)continue;
      const visit=record.kind==="visit"&&event.visitPlace;
      const oldVisit=record.kind==="event"&&event.visitOnly;
      const echo=record.kind==="echo"&&Object.hasOwn(visitRecollections,event.id);
      if(visit||oldVisit||echo)scriptRecords.set(json,record);
    }
  }catch{}
}
function rememberVisitChoice(event,entry){
  const index=Number.isInteger(entry.index)&&event.choices[entry.index]?entry.index:null;
  const record={kind:"visit",id:event.id,index};
  if(entry.month)record.age=ageAt(entry.month,28);
  collectScript(record);
}
function rememberVisitEcho(run,id){
  const memory=visitRecollections[id],index=recordedChoice(run,id);
  if(memory?.lines[index])collectScript({kind:"echo",id,index});
}
function restoreScriptRecords(){
  const byId=new Map(events.map(e=>[e.id,e]));
  loadScriptRecords(byId);
  for(const slot of coverSaveSlots){
    const run=saves[slot];
    if(run?.v!==1)continue;
    for(const entry of run.events||[]){
      const event=byId.get(entry.id||legacyEventIds[entry.title]);
      if(!event?.visitPlace||entry.source==="schedule")continue;
      // Some early events were also available at month-end. The old visit log
      // pairs the interaction with its actual result, even before source was saved.
      const choice=event.choices[entry.index];
      const fromVisit=event.visitOnly||entry.source==="visit"||choice&&run.log?.some((line,i)=>
        line==="자유행동 · "+visits[event.visitPlace]+" · 교류"&&run.log[i+1]===choice.result);
      if(fromVisit)rememberVisitChoice(event,entry);
    }
    for(const id of Object.keys(run.visitMemories||{}))if(run.visitMemories[id])rememberVisitEcho(run,id);
  }
  const byTitle=new Map();
  for(const event of events)byTitle.set(event.title,byTitle.has(event.title)?null:event);
  for(const years of Object.values(saves.growthGallery||{})){
    if(!Array.isArray(years))continue;
    for(const year of years)for(const item of year.entries||[]){
      const event=byTitle.get(item.title);
      if(event?.visitOnly)rememberVisitChoice(event,{index:null,month:item.month});
    }
  }
}
function previousVisitChoices(event){
  const indices=new Set();
  for(const r of scriptRecords.values())if(r.id===event.id&&Number.isInteger(r.index)&&event.choices[r.index])indices.add(r.index);
  return indices;
}
function visitChoiceButtons(event,replay=false){
  const previous=previousVisitChoices(event);
  return event.choices.map((choice,i)=>{
    if(replay&&scriptReplay.group.echo&&!visitRecollections[event.id].lines[i])return "";
    const locked=!replay&&choice.when&&!choice.when(state),seen=previous.has(i);
    const label=escapeHTML(choice.label)+(locked?" · "+escapeHTML(choice.hint):"");
    return btn((seen?choiceMark():"")+label,(replay?"script-choice:":"visit-choice:")+i,locked,seen?"visit-chosen":"");
  }).join("");
}
function choiceMark(){
  return '<span class="choice-mark"><span aria-hidden="true">✓</span> '+scriptText("이전에 고른 선택")+'</span>';
}
function makeScriptShelf(){
  const byId=new Map(events.map(e=>[e.id,e])),groups=new Map();
  loadScriptRecords(byId);
  for(const r of scriptRecords.values()){
    const event=byId.get(r.id);
    if(!event)continue;
    const echo=r.kind==="echo",memory=visitRecollections[event.id];
    if(echo?!memory?.lines[r.index]:!event.visitPlace)continue;
    const key=(echo?"echo/":"visit/")+event.id;
    const card=visitEncounterCards.find(c=>c.id===event.id);
    const person=echo?servants[memory.person]?.name:card?.npc||castName(event);
    if(!Object.hasOwn(scriptCharacters,person))continue;
    if(!groups.has(key))groups.set(key,{event,card,person,echo,versions:new Map()});
    const group=groups.get(key);
    const index=Number.isInteger(r.index)&&event.choices[r.index]?r.index:null;
    if(!group.versions.has(index))group.versions.set(index,r);
  }
  for(const g of groups.values())if(g.versions.size>1)g.versions.delete(null);
  const ordered=events.flatMap(e=>[groups.get("visit/"+e.id),groups.get("echo/"+e.id)]).filter(Boolean);
  return {groups:ordered,person:null,entry:null};
}
function scriptIndex(){
  const {groups,person}=scriptShelf;
  if(person===null){
    const cards=Object.entries(scriptCharacters).filter(([name])=>groups.some(g=>g.person===name)).map(([name,img])=>
      btn('<img src="'+img+'" alt=""><strong>'+name+'</strong>',"script-person:"+name,false,"script-person")).join("");
    return cards?'<div class="script-people">'+cards+'</div>':'<p class="cover-empty">'+scriptText("자유행동에서 만난 인물의 이벤트가 여기에 기록됩니다.")+'</p>';
  }
  const items=groups.map((g,i)=>{
    if(g.person!==person)return "";
    const title=escapeHTML(scriptText(g.event.title)),suffix=g.echo?scriptText("다음 방문"):"";
    const label='<span>'+title+'</span>'+(suffix?'<small>'+suffix+'</small>':"")+'<i aria-hidden="true">▶</i>';
    return btn(label,"script-entry:"+i,false,"script-item");
  }).join("");
  return '<div class="script-items">'+items+'</div>';
}
function openScriptReplay(group){
  const {event,card,echo,versions}=group;
  const saved=saves.auto?.events?.find(e=>e.id===event.id)?.index;
  const record=versions.get(saved)??versions.values().next().value;
  const opening=echo?[["",scriptText("지난 방문에서 한 말을 고르세요.")]]:
    card?.lines??event.lines??[[event.narration?"":castName(event),event.text]];
  stopRecruitAuto();
  scriptReplay={group,opening,rows:opening,at:0,age:record?.age||10};
  tab="scriptMemory";render(true);
}
function chooseScriptBranch(index){
  const r=scriptReplay,{event,card,echo,person}=r.group,choice=event.choices[index];
  if(r.at!==r.opening.length-1||!choice)return;
  const echoLine=echo&&visitRecollections[event.id].lines[index];
  if(echo&&!echoLine)return;
  const line=choice.response||event.responses?.[index];
  let reply;
  if(echo)reply=[[person,echoLine]];
  else if(choice.responseLines?.length)reply=choice.responseLines;
  else if(card)reply=[card.choices[index].reply];
  else reply=line?[[castName(event),line]]:[["","방문을 마치고 마차로 돌아왔다."]];
  r.rows=r.opening.concat(reply);
  r.at=r.opening.length;
  render(true);
}
function closeScriptReplay(){
  stopRecruitAuto();scriptReplay=null;
  const entry=scriptShelf.entry;
  scriptShelf.entry=null;tab="album";render();
  $("panel").scrollTop=scriptShelf.listScroll;
  focusAction("script-entry:"+entry);
}
function showScriptReplay(host){
  const r=scriptReplay,{event,person,echo}=r.group,[who,line,,cue]=r.rows[r.at];
  const prompt=r.opening.length-1,asking=r.at===prompt;
  const end=r.at<=prompt?prompt:r.rows.length-1,last=r.at===end;
  host.hidden=false;host.dataset.review="false";
  clearTimeout(recruitTimer);if(last)stopRecruitAuto();
  const room=event.room||visitsVN[echo?visitRecollections[event.id].place:event.visitPlace]?.[0]||"library";
  const art=cue?.cg?"assets/endings/"+cue.cg+".webp":sceneArt[room]||sceneArt.library;
  const cast=novelCast(cue,recruitArtwork(r.age))??(sceneStanding(person,"left",person==="엘리자베스"?elizabethPortrait(r.age):portraits[person],person==="엘리자베스"?elizabethAge(r.age):undefined)+sceneStanding("시엘","right",cielArt(r.age)));
  const next=asking?"":'<button type="button" class="line-next" data-read="'+(last?"finish":"next")+'" aria-label="'+(last?"회상 마치기":"다음 대사")+'">▼</button>';
  const answers=asking?'<div class="answers" role="group" aria-label="대화 선택지">'+visitChoiceButtons(event,true)+'</div>':"";
  host.innerHTML='<div class="review-room" style="background-image:url(&quot;'+escapeHTML(art)+'&quot;)"></div>'+cast+
    sceneLine(escapeHTML(who),escapeHTML(line),next,'data-book="album-script" aria-live="polite"')+answers+readerControls(r.at,last,recruitAuto);
  playNovelCue(host,"album-script:"+event.id+":"+r.at,cue);
  bindSceneReader(host,r.at,end,line,to=>{r.at=to;render(true);},asking?null:closeScriptReplay,cue?.wait);
}
function scriptAction(action,id){
  const back=action==="back"||action==="system-back";
  if(tab==="scriptMemory"&&back){closeScriptReplay();return true;}
  if(tab==="scriptMemory"&&action==="script-choice"){
    chooseScriptBranch(Number(id));return true;
  }
  if(tab!=="album"||albumPicture!==null)return false;
  if(action==="album-section"&&["cg","endings","people"].includes(id)){
    albumSection=id;scriptShelf=id==="people"?makeScriptShelf():null;
    render();focusAction("album-section:"+id);return true;
  }
  if(!scriptShelf)return false;
  if(action==="script-person"&&scriptShelf.groups.some(g=>g.person===id))scriptShelf.person=id;
  else if(action==="script-entry"&&scriptShelf.groups[id]?.person===scriptShelf.person){
    scriptShelf.listScroll=$("panel").scrollTop;
    scriptShelf.entry=Number(id);
    openScriptReplay(scriptShelf.groups[id]);return true;
  }else if(back&&scriptShelf.person){
    const person=scriptShelf.person;scriptShelf.person=null;render();focusAction("script-person:"+person);return true;
  }else return false;
  render(true);return true;
}
