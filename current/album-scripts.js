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
  "인물별 회상":["Character memories","人物別回想"],"대화록":["Dialogue","会話録"],"장면 재생":["Play scene","シーン再生"],
  "인물 목록으로":["Back to characters","人物一覧へ"],"이벤트 목록으로":["Back to events","イベント一覧へ"],
  "다음 방문":["Return visit","再訪"],"이전에 고른 선택":["Previously chosen","選択済み"],
  "읽는 중":["Reading","閲覧中"],"선택지":["Choices","選択肢"],"엔딩":["Endings","エンディング"],
  "자유행동에서 만난 인물의 이벤트가 여기에 기록됩니다.":["Events with characters you meet on outings appear here.","自由行動で出会った人物のイベントがここに記録されます。"],
  "이 저장에는 어떤 답을 골랐는지 기록되어 있지 않습니다.":["This save does not record which answer you chose.","このセーブには選んだ答えの記録がありません。"],
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
function visitChoiceButtons(event){
  const previous=previousVisitChoices(event);
  return event.choices.map((choice,i)=>{
    const locked=choice.when&&!choice.when(state),seen=previous.has(i);
    const label=escapeHTML(choice.label)+(locked?" · "+escapeHTML(choice.hint):"");
    return btn((seen?choiceMark():"")+label,"visit-choice:"+i,locked,seen?"visit-chosen":"");
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
  return {groups:ordered,person:null,entry:null,choice:null};
}
function visitScript(group){
  const {event,card,echo}=group,index=scriptShelf.choice,record=group.versions.get(index);
  const choice=event.choices[index];
  const opening=echo?[]:card?card.lines:[[event.narration?"":castName(event),event.lines?.[0]?.[1]??event.text]];
  let reply=[];
  if(echo)reply=[[group.person,visitRecollections[event.id].lines[index]]];
  else if(choice?.responseLines)reply=choice.responseLines;
  else if(card&&choice)reply=[card.choices[index].reply];
  else if(choice){
    const line=choice.response||event.responses?.[index];
    if(line)reply=[[castName(event),line]];
  }
  const rows=[...opening,...(choice?[["선택",choice.label]]:[]),...reply];
  return {event,opening,reply,rows,age:record?.age||10,person:group.person,place:echo?visitRecollections[event.id].place:event.visitPlace};
}
function scriptIndex(){
  const {groups,person}=scriptShelf;
  if(person===null){
    const cards=Object.entries(scriptCharacters).filter(([name])=>groups.some(g=>g.person===name)).map(([name,img])=>
      btn('<img src="'+img+'" alt=""><strong>'+name+'</strong>',"script-person:"+name,false,"script-person")).join("");
    return cards?'<div class="script-people">'+cards+'</div>':'<p class="cover-empty">'+scriptText("자유행동에서 만난 인물의 이벤트가 여기에 기록됩니다.")+'</p>';
  }
  const items=groups.map((g,i)=>g.person===person?btn('<span>'+escapeHTML(g.event.title)+'</span>'+
    (g.echo?'<small>'+scriptText("다음 방문")+'</small>':"")+'<i aria-hidden="true">›</i>',"script-entry:"+i,false,"script-item"):"").join("");
  return '<div class="script-items">'+items+'</div>';
}
function transcriptLines(rows){
  return rows.map(([who,line])=>'<li>'+(who?'<b>'+escapeHTML(who)+'</b>':'')+'<p>'+escapeHTML(line)+'</p></li>').join("");
}
function scriptDialoguePage(){
  const group=scriptShelf.groups[scriptShelf.entry],v=visitScript(group);
  const options=group.event.choices.map((c,i)=>{
    const earned=group.versions.has(i),active=scriptShelf.choice===i;
    const label='<span>'+escapeHTML(c.label)+'</span>';
    if(!earned)return '<li class="choice-unseen">'+label+'</li>';
    return '<li><button type="button" class="choice-earned" data-action="script-version:'+i+'" aria-pressed="'+active+'">'+
      choiceMark()+label+(active?'<small>'+scriptText("읽는 중")+'</small>':'')+'</button></li>';
  }).join("");
  return '<article class="cover-leaf album-dialogue-page">'+albumHeader(group.event.title,"이벤트 목록으로")+
    '<div class="dialogue-tools"><p>'+group.person+' · '+scriptText(group.echo?"다음 방문":"대화록")+'</p>'+
    btn(scriptText("장면 재생"),"script-play",!v.rows.length)+'</div>'+
    '<ol class="script-lines">'+transcriptLines(v.opening)+'</ol>'+
    '<section class="script-choices"><h3>'+scriptText("선택지")+'</h3>'+
    (scriptShelf.choice===null?'<p class="script-note">'+scriptText("이 저장에는 어떤 답을 골랐는지 기록되어 있지 않습니다.")+'</p>':"")+
    '<ul>'+options+'</ul></section><ol class="script-lines script-reply" aria-live="polite">'+transcriptLines(v.reply)+'</ol></article>';
}
function closeScriptReplay(){
  stopRecruitAuto();scriptReplay=null;tab="albumDialogue";render();focusAction("script-play");
}
function showScriptReplay(host){
  const r=scriptReplay,v=r.version,event=v.event,[who,line,,cue]=v.rows[r.at],end=v.rows.length-1,last=r.at===end;
  host.hidden=false;host.dataset.review="false";
  clearTimeout(recruitTimer);if(last)stopRecruitAuto();
  const room=event.room||visitsVN[v.place]?.[0]||"library";
  const art=cue?.cg?"assets/endings/"+cue.cg+".webp":sceneArt[room]||sceneArt.library;
  const cast=novelCast(cue,recruitArtwork(r.age))??(sceneStanding(v.person,"left",v.person==="엘리자베스"?elizabethPortrait(r.age):portraits[v.person],v.person==="엘리자베스"?elizabethAge(r.age):undefined)+sceneStanding("시엘","right",cielArt(r.age)));
  const next='<button type="button" class="line-next" data-read="'+(last?"finish":"next")+'" aria-label="'+(last?"회상 마치기":"다음 대사")+'">▼</button>';
  const chosen=who==="선택";
  host.innerHTML='<div class="review-room" style="background-image:url(&quot;'+escapeHTML(art)+'&quot;)"></div>'+cast+
    sceneLine(chosen?choiceMark():escapeHTML(who),escapeHTML(line),next,'data-book="album-script"'+(chosen?' data-chosen="true"':'')+' aria-live="polite"')+readerControls(r.at,last,recruitAuto);
  playNovelCue(host,"album-script:"+event.id+":"+r.at,cue);
  bindSceneReader(host,r.at,end,line,to=>{r.at=to;render(true);},closeScriptReplay,cue?.wait);
}
function scriptAction(action,id){
  const back=action==="back"||action==="system-back";
  if(tab==="scriptMemory"&&back){closeScriptReplay();return true;}
  if(tab==="albumDialogue"){
    const group=scriptShelf.groups[scriptShelf.entry];
    if(back){
      const entry=scriptShelf.entry;scriptShelf.entry=null;tab="album";render();focusAction("script-entry:"+entry);
    }else if(action==="script-version"&&group.versions.has(Number(id))){
      scriptShelf.choice=Number(id);
      const scroll=$("panel").scrollTop;render();$("panel").scrollTop=scroll;focusAction("script-version:"+id);
    }else if(action==="script-play"){
      const v=visitScript(group);
      if(v.rows.length){stopRecruitAuto();scriptReplay={version:v,age:v.age,at:0};tab="scriptMemory";render(true);}
    }else return false;
    return true;
  }
  if(tab!=="album"||albumPicture!==null)return false;
  if(action==="album-section"&&["cg","endings","people"].includes(id)){
    albumSection=id;scriptShelf=id==="people"?makeScriptShelf():null;
    render();focusAction("album-section:"+id);return true;
  }
  if(!scriptShelf)return false;
  if(action==="script-person"&&scriptShelf.groups.some(g=>g.person===id))scriptShelf.person=id;
  else if(action==="script-entry"&&scriptShelf.groups[id]?.person===scriptShelf.person){
    scriptShelf.entry=Number(id);
    const group=scriptShelf.groups[id];
    const current=saves.auto?.events?.find(e=>e.id===group.event.id)?.index;
    scriptShelf.choice=group.versions.has(current)?current:group.versions.keys().next().value;
    tab="albumDialogue";
  }else if(back&&scriptShelf.person){
    const person=scriptShelf.person;scriptShelf.person=null;render();focusAction("script-person:"+person);return true;
  }else return false;
  render(true);return true;
}
