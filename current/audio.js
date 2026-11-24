"use strict";

const musicTracks = {
  companyFair:{title:"Sakura [CD Audio]",file:"assets/audio/company-fair-sakura.mp3"},
  "extra-bgm-23734dde":{"title":"자유행동","file":"assets/audio/extra-bgm-23734dde.mp3"},

  sakura:{title:"SAKURA",file:"assets/audio/sakura.mp3"},
  illness:{title:"Illness",file:"assets/audio/illness.mp3"},
  harvest:{title:"Harvest Festival",file:"assets/audio/harvest.mp3"},
  newYear:{title:"New Year’s Garden Party",file:"assets/audio/new-year.mp3"},
  titleApproval:{title:"작위 승인",file:"assets/audio/title-approval.mp3",once:true},
  goodEnding:{title:"굿엔딩",file:"assets/audio/good-ending.mp3"},
  dance:{title:"Studying of Dance",file:"assets/audio/dance.mp3"},
  violin:{title:"Studying of Music",file:"assets/audio/violin.mp3"},
  etiquette:{title:"Well Behaved",file:"assets/audio/etiquette.mp3"},
  romantic:{title:"Romantic",file:"assets/audio/romantic.mp3"},
  cheerful:{title:"Cheerful Event",file:"assets/audio/cheerful.mp3"},
  daily:{title:"Normal Event",file:"assets/audio/daily.mp3"},
  gloomy:{title:"Gloomy Event",file:"assets/audio/gloomy.mp3"},

  tutorial:{title:"Profile [CD Audio]",file:"assets/audio/tutorial.mp3"},
  prologue:{title:"Prologue [OPL3]",file:"assets/audio/prologue.mp3"},
  market:{title:"China Event [SC-88]",file:"assets/audio/lau-shop.mp3"},
  test:{title:"Test · 세바스찬의 시험",file:"assets/audio/test.mp3"},
  manor: {title:"ゆめみる妖精 · Main Theme", file:"assets/audio/manor.mp3"},
  study: {title:"Study", file:"assets/audio/study.mp3"},
  business: {title:"Part Time Job · アルバイト", file:"assets/audio/business.mp3"}
};
const soundPreferenceKey="earl-phantomhive-maker-v1-";
function readSoundPref(name, fallback){
  try{return localStorage.getItem(soundPreferenceKey+name)??fallback;}catch{return fallback;}
}
function saveSoundPref(name,value){
  if(tourSession)return;
  try{localStorage.setItem(soundPreferenceKey+name,String(value));}catch{}
}
function readVolume(name,defaultValue){
  const n=Number(readSoundPref(name,defaultValue));
  return Number.isFinite(n)?Math.max(0,Math.min(100,n)):defaultValue;
}
const mixer={
  bgm:readSoundPref("bgm","on")!=="off",bgmVolume:readVolume("bgm-volume",36),
  sfx:readSoundPref("sound","on")!=="off",sfxVolume:readVolume("sfx-volume",65)
};

const eventTracks={
  discipline:"gloomy",match:"gloomy",chapel:"gloomy",postalReply:"gloomy",birthday:"gloomy",
  audience:"etiquette",agniTray:"etiquette",room:"etiquette",bargainManners:"etiquette",
  gloves:"etiquette",salute:"etiquette",chair:"etiquette",
  jubilee:"cheerful",expo:"cheerful",birthday2:"cheerful",rose:"cheerful",finnyRoseLabel:"cheerful",
  greenhouseKey:"romantic",unasked:"romantic",teaPrivilege:"romantic",snakeReturn:"romantic",
  trade:"daily",linenMarks:"daily",bardSupper:"daily",supplierReply:"daily"
};
const bgmAssignments={
  "event:visitLibraryWax": "extra-bgm-23734dde",
  "event:visitLibraryCarbon": "extra-bgm-23734dde",
  "event:visitGardenMorning": "extra-bgm-23734dde",
  "event:visitGardenPace": "extra-bgm-23734dde",
  "event:visitLibrarySeal": "extra-bgm-23734dde",
  "event:visitGardenGraft": "extra-bgm-23734dde",
  "event:visitKitchenBowl": "extra-bgm-23734dde",
  "event:visitQuartersHem": "extra-bgm-23734dde",
  "event:visitQuartersLedge": "extra-bgm-23734dde",
  "event:visitParlorDance": "extra-bgm-23734dde",
  "event:visitCompanyBox": "extra-bgm-23734dde",
  "event:visitTownRain": "extra-bgm-23734dde",
  "event:visitTownhouseChess": "extra-bgm-23734dde",
  "event:visitTownhouseKnock": "extra-bgm-23734dde",
  "event:finnyRoseLabel": "extra-bgm-23734dde",
  "event:bardSupper": "extra-bgm-23734dde",
  "event:linenMarks": "extra-bgm-23734dde",
  "event:supplierReply": "extra-bgm-23734dde",
  "event:postalReply": "extra-bgm-23734dde",
  "event:snakeReturn": "extra-bgm-23734dde",
  "event:unasked": "extra-bgm-23734dde"
};
const activityTrackDefaults={etiquette:"etiquette",dance:"dance",music:"violin","현장 실습":"business","휴식":"manor"};
function activityTrack(id){
  const category=categories.find(([,ids])=>ids.includes(id))?.[0];
  return bgmAssignments["activity:"+id]||activityTrackDefaults[id]||activityTrackDefaults[category]||"study";
}
function eventTrack(id,fallback="daily"){
  if(bgmAssignments["event:"+id])return bgmAssignments["event:"+id];
  if(Object.hasOwn(eventTracks,id))return eventTracks[id];
  if(id?.startsWith("season-")){
    const month=(Number(id.slice(7))-1)%12+1;
    return month===1?"newYear":month===9?"harvest":"cheerful";
  }
  return fallback;
}

function recruitTrack(id,at){
  const {scene,cue}=recruitScenes[id].lines[at];
  return cue?.bgm||bgmAssignments["event:"+id]||scene.music || (Object.hasOwn(eventTracks,id)?eventTracks[id]:id==="maid"?"gloomy":"daily");
}

const endingTracks={
  vowTitle:"goodEnding",releaseTitle:"gloomy",releaseNoTitle:"gloomy",
  ill:"gloomy",broke:"gloomy",vowNoTitle:"goodEnding"
};
function trackForView(){
  if(tab==="exit")return null;
  if(tab==="title"||coverPages.includes(tab))return "manor";
  if(tourSession||(tab==="plan"&&state.phase==="guide"))return "tutorial";
  if(inOpening()){
    const line=openingNeedsSlot()?null:openingLines[openingIndex()];
    return line?.cue?.bgm||line?.scene.music||"prologue";
  }
  if(tab==="plan"&&state.phase==="investiture")return "titleApproval";
  if((tab==="plan"&&state.phase==="ending")||(tab==="endingMemory"&&endingReplay)){
    const id=tab==="endingMemory"?endingReplay.id:state.ending;
    const at=tab==="endingMemory"?endingReplay.at:state.endingBeat;
    return endingScenes[id]?.lines[at]?.[3]?.bgm||endingTracks[id]||"manor";
  }
  if(tab==="plan"&&state.phase==="event"&&pendingEvent()?.contest){
    const event=pendingEvent();
    return state.fairBook?.[event.contest.id]?.reason==="병중으로 불참"?"illness":event.track;
  }
  // Recovery can clear illness before the scene's first frame.
  if(tab==="plan"&&["scene","review"].includes(state.phase)&&state.sequence?.onSickLeave &&
    (state.sequence.activity||state.plan[state.sequence.index])==="recovery")return "illness";
  if(state.ill && !["staffMemory","recollection","endingMemory","title"].includes(tab))return "illness";
  if(tab==="staffMemory"&&recruitMemory)return recruitTrack(recruitMemory.id,recruitMemory.at);
  if(tab==="market")return "market";
  if(tab==="company"||tab==="estate"||tab==="staffing"||tab==="townhouse")return "business";
  if(tab==="chat")return "daily";
  if(tab==="plan"){
    if(state.phase==="visit")return eventTrack(state.sequence?.visitEvent);
    if(state.phase==="event"||state.phase==="slotEvent"){
      const event=pendingEvent();
      if(event && Object.hasOwn(recruitScenes,event.id))return recruitTrack(event.id,recruitPage(event.id));
      if(event?.id==="birthday"&&state.termOutcome?.id==="birthday")return "romantic";
      return (event&&termCue(event)?.bgm)||bgmAssignments["event:"+event?.id]||event?.track||(event?.exam&&!Object.hasOwn(eventTracks,event.id)?"test":eventTrack(event?.id));
    }
  }
  if(tab==="plan"&&["scene","slotEvent","review"].includes(state.phase)&&state.sequence){
    return activityTrack(state.sequence.activity||state.plan[state.sequence.index]);
  }
  if(tab==="save"||tab==="record"||tab==="status")return musicPlayer.backgroundTrack==="illness"?"manor":musicPlayer.backgroundTrack;
  return "manor";
}

// Each track retains a playback position. A new fade starts at the actual current levels.
const musicPlayer=(()=>{
  const tracks=new Map();
  let selected="manor",unlocked=false,active=null,fadeId=0,lastLevel=-1,failed=null;
  let backgroundTrack="manor";
  function canPlay(){return unlocked&&mixer.bgm&&mixer.bgmVolume>0;}
  function fadeTo(key){
    const level=mixer.bgmVolume/100;
    if(active===key&&lastLevel===level)return;
    cancelAnimationFrame(fadeId);
    active=key;lastLevel=level;
    const start=performance.now();
    const from=new Map([...tracks].map(([id,entry])=>[id,entry.el.volume]));
    function tick(now){
      const p=Math.min(1,(now-start)/420);
      for(const [id,{el}] of tracks){
        const first=from.get(id)??0;
        el.volume=Math.max(0,Math.min(1,first+((id===key?level:0)-first)*p));
        if(p===1&&id!==key&&!el.paused)el.pause();
      }
      if(p<1)fadeId=requestAnimationFrame(tick);
    }
    fadeId=requestAnimationFrame(tick);
  }
  function stop(){
    if(!tracks.size)return;
    cancelAnimationFrame(fadeId);
    active=null;lastLevel=-1;
    for(const {el} of tracks.values()){el.volume=0;if(!el.paused)el.pause();}
  }
  function sync(key=selected,retry=false){
    if(key&&key!=="tutorial")backgroundTrack=key==="prologue"?"manor":key;
    if(["prologue","tutorial","titleApproval","goodEnding"].includes(key)&&selected!==key&&tracks.has(key))tracks.get(key).el.currentTime=0;
    selected=key;
    if(!musicTracks[key]?.file){
      stop();
      return;
    }
    if(!canPlay()){stop();return;}
    if(failed===key&&!retry)return;
    let entry=tracks.get(key);
    if(!entry){
      const el=new Audio(musicTracks[key].file);el.loop=!musicTracks[key].once;el.volume=0;
      entry={el,pending:false};tracks.set(key,entry);
    }
    if(entry.pending||(musicTracks[key].once&&entry.el.ended))return;
    if(!entry.el.paused){fadeTo(key);return;}
    failed=null;entry.pending=true;
    entry.el.play().then(()=>{
      entry.pending=false;
      if(key!==selected||!canPlay()){
        entry.el.pause();
        return;
      }
      fadeTo(key);
    }).catch(error=>{
      entry.pending=false;
      if(selected!==key||!canPlay())return;
      if(error.name==="AbortError"){sync(key);return;}
      failed=key;fadeTo(null);
    });
  }
  return {
    get backgroundTrack(){return backgroundTrack;},
    sync,
    unlock(){unlocked=true;sync(selected,true);},
    suspend:stop
  };
})();
document.addEventListener("visibilitychange",()=>{if(!document.hidden)musicPlayer.sync();});
// Reuse a small voice pool so a fresh click starts immediately during a quick series.
const clickFile="assets/audio/click.mp3";
const clickVoices=[];
let nextVoice=0;
function playSound(){
  if(tourSession)return;
  if(!mixer.sfx||!mixer.sfxVolume||typeof Audio==="undefined")return;
  let player=clickVoices.find(voice=>voice.paused||voice.ended);
  if(!player&&clickVoices.length<4){
    player=new Audio(clickFile);
    player.preload="auto";clickVoices.push(player);
  }
  if(!player){player=clickVoices[nextVoice];nextVoice=(nextVoice+1)%clickVoices.length;}
  player.volume=mixer.sfxVolume/100;
  player.currentTime=0;
  player.play().catch(()=>{});
}
function syncClickVolume(){
  for(const voice of clickVoices){
    voice.volume=mixer.sfx?mixer.sfxVolume/100:0;
    if(!mixer.sfx||!mixer.sfxVolume)voice.pause();
  }
}
function audioControls(){
  function row(kind,label,action){
    const on=mixer[kind],v=mixer[kind+"Volume"];
    return '<div class="mixer-row"><label for="'+kind+'-volume">'+label+'</label>'+
      '<button class="mixer-toggle" type="button" id="toggle-'+kind+'" data-action="'+action+'" aria-label="'+label+' 켜기 또는 끄기" aria-pressed="'+on+'">'+(on?"켜짐":"꺼짐")+'</button>'+
      '<input class="volume-slider" type="range" style="--volume:'+v+'%" id="'+kind+'-volume" min="0" max="100" step="1" value="'+v+'" aria-label="'+label+' 음량">'+
      '<output for="'+kind+'-volume" id="'+kind+'-value">'+v+'%</output></div>';
  }
  return '<section class="mixer audio-mixer"><h3><i class="volume-emblem" aria-hidden="true"></i>음량 조절</h3>'+row("bgm","배경음악","music")+row("sfx","효과음","sound")+'</section>';
}
function updateRailMusic(){
  const button=document.getElementById("rail-music");
  button.textContent=mixer.bgm?"BGM 켜짐":"BGM 꺼짐";
  button.setAttribute("aria-pressed",String(mixer.bgm));
}
updateRailMusic();
function playNovelSound(path){
  if(!mixer.sfx||!mixer.sfxVolume)return;
  const sound=new Audio(path);
  sound.volume=mixer.sfxVolume/100;
  sound.play().catch(()=>{});
  return sound;
}
function toggleChannel(kind){
  mixer[kind]=!mixer[kind];saveSoundPref(kind==="sfx"?"sound":"bgm",mixer[kind]?"on":"off");
  const button=document.getElementById("toggle-"+kind);
  if(button){button.textContent=mixer[kind]?"켜짐":"꺼짐";button.setAttribute("aria-pressed",String(mixer[kind]));}
  updateRailMusic();syncClickVolume();musicPlayer.sync();
}
document.addEventListener("input",event=>{
  const el=event.target;
  if(el.id!=="bgm-volume"&&el.id!=="sfx-volume")return;
  const kind=el.id==="bgm-volume"?"bgm":"sfx";
  mixer[kind+"Volume"]=el.valueAsNumber;saveSoundPref(el.id,el.value);
  el.style.setProperty("--volume",el.value+"%");
  document.getElementById(kind+"-value").textContent=el.value+"%";
  if(kind==="bgm")musicPlayer.sync();else syncClickVolume();
});
document.addEventListener("keyup",event=>{if(event.target.id==="sfx-volume"&&event.key.startsWith("Arrow"))playSound();});
