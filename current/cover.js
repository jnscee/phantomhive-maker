"use strict";

const coverPages = ["continue","album","settings","exit"];
const coverSaveSlots = ["auto","1","2","3"];
function hasCoverSave(id) {
  return saves[id]?.v===1;
}
function titlePanel() {
  const canContinue = coverSaveSlots.some(hasCoverSave);
  const actions = btn(gameString("start"),"reset") +
    btn(gameString("continue")+(canContinue?"":'<small>'+gameString("noSave")+'</small>'),"cover:continue",!canContinue) +
    btn(gameString("album"),"cover:album") + btn(gameString("settings"),"cover:settings") +
    btn(gameString("exit"),"cover:exit");
  return '<div><article class="book-cover"><header class="cover-name"><small>1886 — 1888</small>'+
    '<h2 lang="en" aria-label="Earl Phantomhive Maker"><span>Earl</span> <span>Phantomhive</span> <span>Maker</span></h2><p>'+gameString("title")+'</p>'+
    '<aside class="cover-notice" aria-labelledby="fan-game-notice"><strong id="fan-game-notice">'+gameString("fanGame")+'</strong>'+
    '<span>'+gameString("alternateStory")+'</span><span>'+gameString("fictionNotice")+'</span></aside></header>'+
    '<nav class="cover-actions" aria-label="'+gameString("menu")+'">'+actions+languageControls(true)+'</nav></article>'+
    '<footer class="cover-notice cover-ai-notice">'+gameString("aiNotice")+'</footer></div>';
}
function coverPanel() {
  let body;
  if (tab==="continue") {
    body='<div class="cover-slots">'+coverSaveSlots.filter(hasCoverSave).map(id=>{
      const run=saves[id];
      const name=id==="auto"?gameString("autoSave"):gameString("notebook",{number:id});
      const info=[monthText(run.month),phaseNames[run.phase]].filter(Boolean).join(" · ");
      return btn('<i class="slot-book" aria-hidden="true"></i><strong>'+name+'</strong><small>'+info+'</small>',
        id==="auto"?"resume":"load:"+id,false,"cover-slot");
    }).join("")+'</div>';
  } else if (tab==="album") {
    return cgAlbum();
  } else if (tab==="settings") {
    body='<div class="cover-settings">'+languageControls()+audioControls()+motionControls()+'</div>';
  } else {
    body='<p class="cover-exit-note">'+gameString(!storageOk&&hasCoverSave("auto")?"temporaryExit":"exitHint")+'</p>';
  }
  return '<article class="cover-leaf"><header><h2 tabindex="-1">'+gameString(tab==="exit"?"exitTitle":tab)+'</h2>'+
    btn(gameString("backToCover"),"back")+'</header>'+body+'</article>';
}

const cgTitles={
  seal:"계약의 인장",fire:"불타는 저택",ring:"가문의 반지",hillside:"동트기 전",manor:"겨울 아침",lesson:"첫 수업",
  "royal-letter":"여왕의 봉서","royal-dress":"알현복","royal-gates":"버킹엄궁 정문","royal-investiture":"서훈식",
  "royal-doorway":"식장의 문턱","royal-gallery":"햇살이 드는 회랑","royal-reply":"창가의 대답",
  "royal-monologue":"집사의 독백","royal-oath":"마지막 명령"
};
let albumPicture=null,albumScroll=0;
function rememberCG(source){
  if(previewFair||storyDemo||tourSession||!/^assets\/(prologue|endings)\/[\w-]+\.webp$/.test(source)||source.endsWith("/black.webp"))return;
  if(saves.cgSeen?.[source])return;
  saves.cgSeen??={};
  saves.cgSeen[source]=true;
  // A replay from the cover must never replace the player's automatic save.
  try{localStorage.setItem(storageKey,JSON.stringify(saves));}catch{storageOk=false;}
}
function cgAlbumEntries(){
  const entries=new Map();
  function add(group,id){
    if(!id||id==="black")return;
    const path="assets/"+group+"/"+id+".webp";
    entries.set(path,cgTitles[id]||endingLabels[id]?.[0]||id);
  }
  for(const id of ["seal","fire","ring","hillside","manor","lesson"])add("prologue",id);
  for(const [id,scene] of Object.entries(endingScenes)){
    for(const line of scene.lines)add("endings",line[3]?.cg||line[2]||id);
    add("endings",id);
  }
  for(const path of Object.keys(saves.cgSeen||{})){
    if(!entries.has(path)&&/^assets\/(prologue|endings)\/[\w-]+\.webp$/.test(path))entries.set(path,path.split("/").pop().slice(0,-5));
  }
  return [...entries].map(([src,title])=>({src,title,seen:!!saves.cgSeen?.[src]}));
}
function restoreCGRecords(){
  if(previewFair||storyDemo||saves.cgSeen)return;
  for(const id of Object.keys(endingScenes)){
    if(!hasEndingRecord(id))continue;
    rememberCG("assets/endings/"+id+".webp");
    const runs=coverSaveSlots.map(slot=>saves[slot]).filter(r=>r?.phase==="ending"&&r.ending===id);
    const scene=endingScenes[id];
    const last=runs.length?Math.max(...runs.map(r=>r.endingBeat??(scene.lines.length-1))):0;
    scene.lines.slice(0,last+1).forEach((line,i)=>{
      const route=saves.londonCareer;
      if(id==="vowNoTitle"&&londonEndingScenes[route]&&i>=scene.lines.length-londonEndingScenes[route].length)return;
      rememberCG("assets/endings/"+(line[3]?.cg||line[2]||id)+".webp");
    });
  }
  for(const slot of coverSaveSlots){
    const r=saves[slot];
    if(!r?.v)continue;
    if(r.contractFiled||r.openingLine===openingLines.length)rememberCG("assets/prologue/lesson.webp");
    else if(r.openingEdition===2&&r.phase==="contract"){
      openingLines.slice(0,r.openingLine+1).forEach(e=>{
        if(!e.cue?.cg&&e.scene.art!=="cell")rememberCG(e.scene.art==="ring"&&e.beat>=5?"assets/prologue/hillside.webp":openingImage(e.scene));
      });
    }
  }
}
function cgAlbum(){
  const entries=cgAlbumEntries(),seen=entries.filter(e=>e.seen).length;
  if(albumPicture!==null&&entries[albumPicture]?.seen){
    const e=entries[albumPicture];
    return '<article class="cg-reader"><header><h2 tabindex="-1">'+escapeHTML(e.title)+'</h2>'+btn("앨범으로","back")+'</header><img src="'+e.src+'" alt="'+escapeHTML(e.title)+'"></article>';
  }
  const cells=entries.map((e,i)=>e.seen?
