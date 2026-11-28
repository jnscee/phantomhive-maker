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
    body='<div class="cover-settings">'+dialogueThemeControls()+languageControls()+audioControls()+motionControls()+'</div>';
  } else {
    body='<p class="cover-exit-note">'+gameString(!storageOk&&hasCoverSave("auto")?"temporaryExit":"exitHint")+'</p>';
  }
  return '<article class="cover-leaf"><header><h2 tabindex="-1">'+gameString(tab==="exit"?"exitTitle":tab)+'</h2>'+
    btn(gameString("backToCover"),"back")+'</header>'+body+'</article>';
}

const cgTitles={
  seal:"계약의 인장",fire:"불타는 저택",ring:"가문의 반지",hillside:"동트기 전",manor:"겨울 아침",lesson:"첫 수업",
  "royal-letter":"여왕의 봉서","royal-dress":"알현복","royal-investiture":"서훈식",
  "royal-doorway":"식장의 문턱","royal-gallery":"햇살이 드는 회랑","royal-reply":"창가의 대답",
  "royal-monologue":"집사의 독백","royal-oath":"마지막 명령"
};
let albumPicture=null,albumScroll=0;
function isAlbumCG(source){
  return /^assets\/(prologue|endings)\/[\w-]+\.webp$/.test(source)&&
    !source.endsWith("/black.webp")&&source!=="assets/endings/royal-gates.webp";
}
function rememberCG(source){
  if(tab==="endingMemory"||tab==="scriptMemory"||previewLesson||previewFair||storyDemo||typeof editorPreview!=="undefined"||
    !isAlbumCG(source))return;
  // The guided practice state is temporary, but viewed CGs belong to the player's album.
  const book=tourSession?.saves??saves;
  if(book.cgSeen?.[source])return;
  book.cgSeen??={};
  book.cgSeen[source]=true;
  writeSaveBook(book);
}
function cgAlbumEntries(endings=endingGalleryEntries()){
  const entries=new Map();
  function add(group,id){
    if(!id)return;
    const path="assets/"+group+"/"+id+".webp";
    if(isAlbumCG(path)&&!entries.has(path))entries.set(path,cgTitles[id]||endingLabels[id]?.[0]||id);
  }
  for(const id of ["seal","fire","ring","hillside","manor","lesson"])add("prologue",id);
  for(const [id,scene] of Object.entries(endingScenes)){
    for(const line of scene.lines)add("endings",line[3]?.cg||line[2]||id);
    add("endings",id);
  }
  for(const cg of Object.values(londonEndingCGs)){
    entries.set("assets/endings/"+cg.id+".webp",cg.title);
  }
  for(const {cue} of openingLines)add("endings",cue?.cg);
  for(const lines of Object.values(londonEndingScenes)){
    for(const line of lines)add("endings",line[3]?.cg||line[2]);
  }
  for(const book of Object.values(recruitScenes)){
    for(const {scene,cue} of book.lines)add("endings",cue?.cg||scene.picture);
  }
  for(const event of events){
    add("endings",event.picture);
    for(const line of event.lines||[])add("endings",line[3]?.cg);
    for(const choice of event.choices||[]){
      for(const line of choice.responseLines||[])add("endings",line[3]?.cg);
    }
  }
  // Some older albums have an ending record and only a partial list of viewed CGs.
  const covers=new Set(endings.map(([id,route])=>endingCoverPath(id,route)));
  return [...entries].map(([src,title])=>({src,title,seen:covers.has(src)||!!saves.cgSeen?.[src]}));
}
function restoreCGRecords(){
  if(previewFair||storyDemo)return;
  const endings=endingGalleryEntries();
  const hadCGRecords=Boolean(saves.cgSeen);
  for(const [id,route] of endings){
    const art=endingCareerArt(id,route);
    if(art||!hadCGRecords)rememberCG("assets/endings/"+(art?.id||id)+".webp");
    if(hadCGRecords)continue;
    const runs=endingRuns(id,route,coverSaveSlots.map(slot=>saves[slot]));
    const scene=endingScenes[id];
    const last=runs.length?Math.max(...runs.map(r=>r.endingBeat??(scene.lines.length-1))):0;
    scene.lines.slice(0,last+1).forEach((line,i)=>{
      if(id==="vowNoTitle"&&londonEndingScenes[route]&&i>=scene.lines.length-londonEndingScenes[route].length)return;
      rememberCG("assets/endings/"+(line[3]?.cg||line[2]||id)+".webp");
    });
  }
  if(hadCGRecords)return;
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
function albumHeader(title,back){
  return '<header class="album-head"><h2 tabindex="-1">'+escapeHTML(scriptText(title))+'</h2>'+btn('<span aria-hidden="true">‹</span> '+scriptText(back),"back",false,"album-back")+'</header>';
}
function albumNav(){
  const sections=[["cg","CG 앨범"],["endings","엔딩"],["people","인물별 회상"]];
  return '<nav class="album-sections" aria-label="'+gameString("album")+'">'+sections.map(([id,label])=>
    '<button type="button" data-action="album-section:'+id+'"'+(albumSection===id?' aria-current="page"':'')+'>'+scriptText(label)+'</button>').join("")+'</nav>';
}
function cgAlbum(){
  const person=scriptShelf?.person;
  const header=albumHeader(person||gameString("album"),person?"인물 목록으로":gameString("backToCover"));
  const opening='<article class="cover-leaf cg-album">'+header+(person?"":albumNav());
  if(albumSection==="people"&&scriptShelf)return opening+scriptIndex()+'</article>';
  const endings=endingGalleryEntries();
  if(albumSection==="endings")return opening+(endings.length?'<div class="cover-gallery">'+endings.map(([id,route])=>endingThumb(id,route)).join("")+'</div>':'<p class="cover-empty">아직 기록된 엔딩이 없습니다.</p>')+'</article>';
  const entries=cgAlbumEntries(endings),seen=entries.filter(e=>e.seen).length;
  if(albumPicture!==null&&entries[albumPicture]?.seen){
    const e=entries[albumPicture];
    const ending=endings.find(([id,route])=>e.src===endingCoverPath(id,route));
    const replay=ending?btn("엔딩 다시 보기",["ending-art",...ending.filter(Boolean)].join(":")):"";
    return '<article class="cover-leaf cg-reader">'+albumHeader(e.title,"앨범으로")+replay+'<img src="'+e.src+'" alt="'+escapeHTML(e.title)+'"></article>';
  }
  const cells=entries.map((e,i)=>e.seen?
    btn('<img loading="lazy" src="'+e.src+'" alt=""><span>'+escapeHTML(e.title)+'</span>',"cg:"+i,false,"cg-print"):
    '<div class="cg-print cg-blank"><i aria-hidden="true">◇</i><span>미수집</span></div>').join("");
  return opening+'<p class="cover-count">'+scriptText("수집한 CG")+' <b>'+seen+' / '+entries.length+'</b></p><div class="cg-grid">'+cells+'</div></article>';
}
