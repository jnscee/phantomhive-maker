"use strict";

// Each earned version has its own key. A second tab can add a version without
// writing an older copy of the campaign or replacing another tab's collection.
const scriptPrefix="earl-phantomhive-script-v1/";
const scriptRecords=new Map();
let scriptShelf=null,scriptReplay=null;
const scriptCharacters={
  "시엘":"assets/ciel.png","세바스찬":"assets/portraits/sebastian-head.webp",
  "타나카":"assets/npc-tanaka.webp","피니안":"assets/npc-finny.webp",
  "메이린":"assets/npc-mey.webp","바르도":"assets/npc-bard.webp","스네이크":"assets/npc-snake.webp",
  "소마":"assets/portraits/soma.webp","아그니":"assets/portraits/agni.webp",
  "엘리자베스":"assets/portraits/elizabeth-garden-party.png","에드워드":"assets/portraits/edward-greeting.png",
  "라우":"assets/npc-lau.webp","마담 레드":"","빅토리아":""
};
const oldRecruitChoices={gardener:["온실 열쇠를 건넨다","가벼운 일부터 가르친다"],maid:["저택의 시야를 맡긴다","타나카에게 교육을 맡긴다"],cook:["조리대를 맡긴다","화구 수리부터 함께한다"],circus:["저택에 자리를 마련한다","우리의 행선지를 확인한다"],visitPrince:["함께 차를 든다","다음 방문을 약속한다"]};
const scriptLabels={
  "장면 재생":["Play scene","シーン再生"],"인물별 회상":["Character memories","人物別回想"],"인물 목록으로":["Back to characters","人物一覧へ"],
  "인물 기록으로":["Back to character","人物の記録へ"],"대본":["Script","台本"],
  "수집한 대본":["Collected scripts","収集した台本"],"이벤트":["Events","イベント"],
  "다음 방문":["Return visit","再訪"],"저택 대화":["Manor conversations","屋敷での会話"],
  "엔딩":["Endings","エンディング"],"선택":["Choice","選択"],"이전 회차의 선택":["Earlier choice","以前の周回での選択"],
  "이전 저장에 남아 있는 대사만 표시합니다.":["Only the lines preserved in this save are shown.","以前のセーブに残っている台詞のみ表示します。"],
  "이벤트나 엔딩을 감상하면 여기에 기록됩니다.":["Your events and endings will appear here.","体験したイベントやエンディングがここに記録されます。"]
};
function scriptText(label){
  return (gameLanguage!=="ko"&&scriptLabels[label]?.[gameLanguage==="ja"?1:0])||translatedLine(label);
}
function collectScript(record){
  if(!record||previewLesson||previewFair||storyDemo||typeof editorPreview!=="undefined"||
      (typeof tourSession!=="undefined"&&tourSession))return;
  const key=JSON.stringify(record);
  if(scriptRecords.has(key))return;
  scriptRecords.set(key,record);
  try{localStorage.setItem(scriptPrefix+key,"1");}catch{storageOk=false;}
}
function loadScriptRecords(){
  try{
    for(const key of Object.keys(localStorage)){
      if(!key.startsWith(scriptPrefix))continue;
      const json=key.slice(scriptPrefix.length);
      if(!scriptRecords.has(json)){
        try{const r=JSON.parse(json);if(r&&typeof r.id==="string")scriptRecords.set(json,r);}catch{}
      }
    }
  }catch{}
}
function eventScriptRecord(run,event,entry,priorTanaka){
  const record={kind:"event",id:event.id,index:Number.isInteger(entry.index)?entry.index:null};
  if(entry.age||entry.month)record.age=entry.age||recruitAge(event.id,entry.month);
  if(Object.hasOwn(recruitScenes,event.id)){
    if(entry.edition!=="canonical")record.old=true;
    if(event.id==="visitPrince")record.tanaka=entry.hadTanaka??priorTanaka;
  }
  if(entry.observation)record.observation=entry.observation;
  if(event.rememberedText){
    // The two historical callbacks depend on an earlier recorded decision.
    const required=event.id==="postalReply"?"chapel":"match";
    if(entry.remembered)record.remembered=entry.remembered;
    else if(run.events?.some(e=>e.id===required&&Number.isInteger(e.index))||run.flags?.[event.id==="postalReply"?"postmark":"audit"])
      record.remembered=event.rememberedText(run);
  }
  return record;
}
function rememberChatScript(spoken){
  if(!spoken||!Object.hasOwn(homeChatTopics,spoken.topic)||!spoken.line)return;
  const r={kind:"chat",id:spoken.topic,line:spoken.line};
  if(spoken.turn)r.age=ageAt(spoken.turn,1);
  if(spoken.greeting)r.greeting=spoken.greeting;
  if(spoken.replyRead&&spoken.reply)r.reply=spoken.reply;
  if(r.reply&&Number.isInteger(spoken.followIndex))r.follow=spoken.followIndex;
  collectScript(r);
}
function rememberFairScript(fair,entry){
  if(!fair||!entry)return;
  const rows=[];
  if(entry.duel&&Number.isInteger(entry.speechTier)){
    const rival=contestOpponent(fair),appearance=contestAppearance(fair);
    if(rival){
      rows.push([rival.name,rival.laterQuotes?.[appearance-1]??rival.quote]);
      if(rival.replies?.[appearance])rows.push([fair.entrant||"시엘",rival.replies[appearance]]);
      if(fair.options?.[entry.index]?.handoff)rows.push(["",fair.options[entry.index].handoff]);
      rows.push([fair.entrant||"시엘",contestSpeech(fair,entry,entry.speechTier)]);
    }
  }
  const scene=contestResultScene(fair,entry);
  const ending=contestClosingLines(fair,entry)??(scene?[["",scene.narration],...scene.lines]:[["",entry.reason||contestResultLine(fair,entry)]]);
  rows.push(...ending);
  collectScript({kind:"fair",id:fair.id,label:contestRank(entry),rows});
}
function rememberVisitEcho(run,id){
  const memory=visitRecollections[id],index=recordedChoice(run,id);
  if(memory?.lines[index])collectScript({kind:"echo",id,index});
}
function restoreScriptRecords(){
  loadScriptRecords();
  const byId=new Map(events.map(e=>[e.id,e]));
  for(const slot of coverSaveSlots){
    const run=saves[slot];
    if(run?.v!==1)continue;
    let tanaka=false;
    for(const entry of run.events||[]){
      const id=entry.id==="snakeArrival"?"circus":entry.id||legacyEventIds[entry.title];
      const event=byId.get(id);
      if(event&&!event.contest)collectScript(eventScriptRecord(run,event,entry,tanaka));
      if(id==="homecoming")tanaka=true;
    }
    for(const id of Object.keys(run.visitMemories||{}))if(run.visitMemories[id])rememberVisitEcho(run,id);
    for(const fair of contestArchive)if(run.fairBook?.[fair.id])rememberFairScript(fair,run.fairBook[fair.id]);
    rememberChatScript(run.spoken);
  }
  // Old ending recaps sometimes outlive all four slots. A unique event title
  // proves the encounter, but cannot identify its choice or its stat variant.
  const byTitle=new Map();
  for(const event of events)byTitle.set(event.title,byTitle.has(event.title)?null:event);
  for(const years of Object.values(saves.growthGallery||{})){
    if(!Array.isArray(years))continue;
    for(const year of years)for(const item of year.entries||[]){
      const event=byTitle.get(item.title);
      if(event&&!event.contest)collectScript({kind:"event",id:event.id,index:null});
    }
  }
}
function eventScript(event,r){
  const card=visitEncounterCards.find(c=>c.id===event.id),book=recruitScenes[event.id];
  let lines;
  if(book){
    lines=recruitReadingOrder(event.id,!!r.tanaka).filter(i=>event.id!=="visitPrince"||r.tanaka!==undefined||!book.lines[i].withTanaka).map(i=>{
      const {speaker,text,withTanaka}=book.lines[i];
      return [novelSpeakerName(speaker),r.tanaka&&typeof withTanaka==="string"?withTanaka:text];
    });
  }else if(card)lines=[...card.lines];
  else if(event.visitOnly||event.visitPlace){
    lines=[[event.narration?"":castName(event),r.remembered||event.text]];
  }else{
    lines=baseTermPages(event,r.remembered)??(event.rememberedText&&!r.remembered?[]:[[event.narration?"":castName(event),r.remembered||event.text]]);
    if(r.observation&&middleObservations[event.id]?.[r.observation])lines=observationPages(event,r.observation);
  }
  const choice=event.choices[r.index];
  let label="";
  const rows=[...lines];
  if(choice){
    label=r.old?(oldRecruitChoices[event.id]?.[r.index]||choice.label):choice.label;
    rows.push(["선택",label]);
    if(card&&!choice.responseLines)rows.push(card.choices[r.index].reply);
    else if(choice.responseLines)rows.push(...choice.responseLines);
    else if(choice.response)rows.push(["",choice.response]);
    else if(event.responses?.[r.index])rows.push([castName(event),event.responses[r.index]]);
    else if(event.authored&&event.response)rows.push(["",event.response]);
    else if(birthdayDialogue[event.id]?.replies[r.index])rows.push(...birthdayDialogue[event.id].replies[r.index]);
    else if(observationReplies[event.id]?.[r.index])rows.push(observationReplies[event.id][r.index]);
    else if(event.exam&&examDialogue[event.slot]?.[2+r.index])rows.push(["세바스찬",examDialogue[event.slot][2+r.index]]);
    else if(choice.result)rows.push(["선택 결과",r.old&&book?book.result:choice.result]);
  }else if(r.old&&book&&oldRecruitChoices[event.id]?.[r.index]){
    label=oldRecruitChoices[event.id][r.index];rows.push(["이전 회차의 선택",label]);
  }
  const partial=(r.old||r.index==null||!!(middleObservations[event.id]&&!r.observation)||!!(event.rememberedText&&!r.remembered));
  return {title:event.title,rows,label,partial,age:r.age,event,tanaka:r.tanaka,people:[book?.name,card?.npc,event.speaker,castByEvent[event.id]]};
}
function scriptFromRecord(r,byId){
  const event=byId.get(r.id);
  if(r.kind==="event"&&event)return eventScript(event,r);
  if(r.kind==="echo"&&event){
    const m=visitRecollections[r.id],name=servants[m?.person]?.name;
    if(name&&m.lines[r.index])return {title:event.title+" · "+scriptText("다음 방문"),people:[name],rows:[[name,m.lines[r.index]]],label:event.choices[r.index]?.label};
  }
  if(r.kind==="chat"&&Object.hasOwn(homeChatTopics,r.id)){
    const topic=homeChatTopics[r.id],follow=chatFollowups[r.id]?.[r.follow];
    const rows=r.greeting?[["세바스찬",r.greeting]]:[];
    rows.push(["시엘",r.line]);
    if(r.reply)rows.push(["세바스찬",r.reply]);
    if(follow)rows.push(["선택",follow[0]],["시엘",follow[1]]);
    return {title:topic.title||"팬텀사 이야기를 꺼낸다",rows,age:r.age,people:["시엘","세바스찬"],label:follow?.[0]||""};
  }
  if(r.kind==="fair"&&Array.isArray(r.rows)){
    const fair=contestArchive.find(f=>f.id===r.id);
    if(fair)return {title:fair.title,age:ageAt(fair.month,28),rows:r.rows,people:["시엘"],label:r.label};
  }
  return null;
}
function scriptPeople(names,rows){
  const result=new Set();
  for(const name of [...names,...rows.map(r=>r[0])]){
    if(typeof name!=="string")continue;
    const person=Object.keys(scriptCharacters).find(p=>p===name||name.startsWith(p+" "));
    if(person)result.add(person);
    if(name==="올빼미")result.add("메이린");
  }
  if(!result.size)result.add("시엘");
  return result;
}
function makeScriptShelf(){
  loadScriptRecords();
  const byId=new Map(events.map(e=>[e.id,e])),groups=new Map();
  function add(key,section,version){
    const people=scriptPeople(version.people,version.rows);
    if(!groups.has(key))groups.set(key,{section,title:version.title,versions:[],people:new Set()});
    const group=groups.get(key);
    people.forEach(p=>group.people.add(p));
    // A conversation's unread tail may later be earned in the same playthrough.
    const sameStart=(a,b)=>a.rows.length<=b.rows.length&&a.rows.every(([who,line],i)=>who===b.rows[i][0]&&line===b.rows[i][1]);
    if(group.versions.some(v=>sameStart(version,v)))return;
    if(section==="chat")group.versions=group.versions.filter(v=>!sameStart(v,version));
    group.versions.push(version);
  }
  const knownChoices=new Set([...scriptRecords.values()].filter(r=>r.kind==="event"&&r.index!==null).map(r=>r.id));
  for(const record of scriptRecords.values()){
    if(record.kind==="event"&&record.index===null&&knownChoices.has(record.id))continue;
    const v=scriptFromRecord(record,byId);
    if(v)add(record.kind+"/"+record.id,record.kind,v);
  }
  for(const [id,route] of endingGalleryEntries()){
    const replay={id,route},rows=endingScenes[id].lines.map((_,i)=>endingLineAt(id,i,replay).row);
    const farewell=savedEndingFarewells(id,replay),mode=["ill","releaseTitle","releaseNoTitle"].includes(id)?"mourning":"parting";
    for(const [person,tier] of farewell?.cast||[]){
      const name=farewellGuestNames[person]||servants[person]?.name,line=endingFarewells[person]?.[mode]?.[tier];
      if(name&&line)rows.push([name,line]);
    }
    add("ending/"+endingRecordKey(id,route),"ending",{title:endingName(id,route),rows,people:["시엘","세바스찬"],action:["ending-art",id,route].filter(Boolean).join(":")});
  }
  return {groups:[...groups.values()],person:null,entry:null,version:0};
}
const scriptSections={event:"이벤트",echo:"다음 방문",chat:"저택 대화",fair:"경연",ending:"엔딩"};
function scriptPage(){
  const {groups,person,entry,version}=scriptShelf,group=groups[entry];
  let title,body;
  if(group){
    title=group.title;
    const v=group.versions[version];
    const versions=group.versions.length>1?'<div class="script-versions" role="group" aria-label="'+scriptText("수집한 대본")+'">'+group.versions.map((item,i)=>
      '<button type="button" data-action="script-version:'+i+'" aria-pressed="'+(i===version)+'"><b>'+(i+1)+'</b> '+escapeHTML(item.label||scriptText("대본"))+'</button>').join("")+'</div>':"";
    const transcript=v.rows.filter(row=>typeof row[1]==="string"&&row[1].trim()).map(([who,line])=>
      '<li'+(who==="선택"?' class="script-choice"':'')+'>'+(who?'<b>'+escapeHTML(scriptText(who))+'</b>':'')+'<p>'+escapeHTML(line)+'</p></li>').join("");
    body=versions+(v.partial?'<p class="script-note">'+scriptText("이전 저장에 남아 있는 대사만 표시합니다.")+'</p>':'')+
      (v.action?btn("엔딩 다시 보기",v.action):btn(scriptText("장면 재생"),"script-play",!v.rows.length))+'<ol class="script-lines">'+transcript+'</ol>';
  }else if(person!==null){
    title=person;
    body=Object.entries(scriptSections).map(([key,label])=>{
      const rows=groups.map((g,i)=>g.section===key&&g.people.has(person)?btn(escapeHTML(g.title),"script-entry:"+i,false,"script-item"):"").join("");
      return rows?'<section><h3>'+scriptText(label)+'</h3><div class="script-items">'+rows+'</div></section>':"";
    }).join("");
  }else{
    title="인물별 회상";
    const people=Object.entries(scriptCharacters).filter(([name])=>groups.some(g=>g.people.has(name))).map(([name,img])=>
      btn((img?'<img src="'+img+'" alt="">':'')+'<strong>'+name+'</strong>',"script-person:"+name,false,"script-person")).join("");
    body=people?'<div class="script-people">'+people+'</div>':'<p>'+scriptText("이벤트나 엔딩을 감상하면 여기에 기록됩니다.")+'</p>';
  }
  const back=group?"인물 기록으로":person!==null?"인물 목록으로":"앨범으로";
  return '<article class="cover-leaf script-shelf"><header><h2 tabindex="-1">'+escapeHTML(scriptText(title))+'</h2>'+btn(scriptText(back),"back")+'</header>'+body+'</article>';
}
function closeScriptReplay(){
  stopRecruitAuto();scriptReplay=null;tab="album";render(true);focusAction("script-play");
}
function showScriptReplay(host){
  const r=scriptReplay,v=r.version,event=v.event,book=event&&recruitScenes[event.id];
  host.hidden=false;host.dataset.review="false";
  if(book&&!(event.id==="visitPrince"&&v.tanaka===undefined)){
    drawRecruitReader(host,event.id,r.at,recruitArtwork(r.age),true,to=>{
      r.at=to;render(true);
    },closeScriptReplay,"",!!v.tanaka);
    return;
  }
  const [who,line,,cue]=v.rows[r.at],end=v.rows.length-1,last=r.at===end;
  clearTimeout(recruitTimer);if(last)stopRecruitAuto();
  const room=event?.room||visitsVN[event?.visitPlace]?.[0]||birthdayDialogue[event?.id]?.room||
    choreography[event?.slot]?.[0]||"library";
  const cg=cue?.cg||event?.picture;
  const art=cg?"assets/endings/"+cg+".webp":sceneArt[room]||sceneArt.library;
  const file=recruitArtwork(r.age);
  const standing=cue?.standing||event?.standing;
  const speaker=Object.hasOwn(portraits,who)?who:event&&castName(event);
  const portrait=speaker==="시엘"?cielArt(r.age):speaker==="엘리자베스"?elizabethPortrait(r.age):portraits[speaker];
  const fallback=standing&&Object.hasOwn(recruitCast,standing)?sceneStanding(recruitNames[standing],"left",file(recruitCast[standing])):
    (!cg&&portrait?sceneStanding(speaker,speaker==="시엘"?"right":"left",portrait,speaker==="엘리자베스"?elizabethAge(r.age):undefined):"");
  const cast=novelCast(cue,file)??fallback;
  const next='<button type="button" class="line-next" data-read="'+(last?"finish":"next")+'" aria-label="'+(last?"회상 마치기":"다음 대사")+'">▼</button>';
  host.innerHTML='<div class="review-room" style="background-image:url(&quot;'+escapeHTML(art)+'&quot;)"></div>'+cast+
    sceneLine(escapeHTML(scriptText(who||"")),escapeHTML(line),next,'data-book="album-script" aria-live="polite"')+readerControls(r.at,last,recruitAuto);
  playNovelCue(host,"album-script:"+event?.id+":"+r.at,cue);
  bindSceneReader(host,r.at,end,line,to=>{r.at=to;render(true);},closeScriptReplay,cue?.wait);
}
function scriptAction(action,id){
  if(tab==="scriptMemory"&&(action==="back"||action==="system-back")){closeScriptReplay();return true;}
  if(tab!=="album")return false;
  if(action==="scripts")scriptShelf=makeScriptShelf();
  else if(!scriptShelf)return false;
  else if(action==="script-person"&&scriptShelf.groups.some(g=>g.people.has(id))){scriptShelf.person=id;scriptShelf.entry=null;}
  else if(action==="script-entry"&&scriptShelf.groups[id]?.people.has(scriptShelf.person)){scriptShelf.entry=Number(id);scriptShelf.version=0;}
  else if(action==="script-play"){
    const version=scriptShelf.groups[scriptShelf.entry]?.versions[scriptShelf.version];
    if(!version?.rows.length||version.action)return false;
    stopRecruitAuto();scriptReplay={version,age:version.age||10,at:0};tab="scriptMemory";
  }else if(action==="script-version"&&scriptShelf.groups[scriptShelf.entry]?.versions[id])scriptShelf.version=Number(id);
  else if(action==="back"||action==="system-back"){
    let returnTo="scripts";
    if(scriptShelf.entry!==null){returnTo="script-entry:"+scriptShelf.entry;scriptShelf.entry=null;}
    else if(scriptShelf.person!==null){returnTo="script-person:"+scriptShelf.person;scriptShelf.person=null;}
    else scriptShelf=null;
    render();focusAction(returnTo);return true;
  }else return false;
  render(true);
  return true;
}
