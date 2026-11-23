"use strict";

const previousOpeningPages=[0, 2, 5, 6, 8, 10, 12, 14, 16, 18, 20, 21, 22, 24, 27, 29, 31, 34, 36, 38, 40, 42, 43, 44, 46, 49, 50];
const openingScenes=[
  {art:"cell", alt:"철창 앞 차가운 돌바닥에 시엘이 무릎을 꿇고 있다.", lines:[
    ["악마","너는 커다란 희생을 치렀다.",null,{"cg":"black"}],
    ["악마","값은 확실히 받았으니, 나와 계약할지는 네가 정해라.",null,{"cg":"black"}],
    ["시엘","나, 나는······.",null,{"cg":"black"}],
    ["시엘","힘을 원해.",null,{"cg":"black"}],
    ["시엘","우리를 이렇게 만든 놈들에게 복수할 힘을!",null,{"cg":"black"}],
    ["???","누가 저 녀석의 입을 막아!",null,{"cg":"black"}],
    ["시엘","악마!",null,{"cg":"black"}],
    ["시엘","너와 계약하겠어!!",null,{"cg":"black"}]
  ]},
  {art:"seal", alt:"시엘의 오른쪽 눈동자에 보랏빛 계약인이 맺힌다.", lines:[
    ["","······.",null,{"cg":"black"}],
    ["악마","빛을 버리고 나락으로 떨어지는 길을 선택하겠다······.",null,{"cg":"black"}],
    ["악마","좋습니다. 그러면 서로의 몸에 계약서를.",null,{"cg":"black"}],
    ["악마","눈에 띄는 곳에 새길수록 큰 힘을 쓸 수 있습니다.",null,{"cg":"black"}],
    ["악마","자, 어디에?",null,{"cg":"black"}],
    ["시엘","어디든 상관없어!",null,{"cg":"black"}],
    ["시엘","누구에게도 지지 않을 힘을 갖고 싶어!!",null,{"cg":"black"}],
    ["악마","작은 몸에 웬 욕심이 그리 많을까."],
    ["악마","그러면······ 그 커다란 눈동자에!"]
  ]},
  {art:"fire", alt:"언덕 위의 시엘과 세바스찬이 밤하늘 아래 불타는 건물을 바라본다.", lines:[
    ["독백","······."],
    ["독백","그가 내게 바란 것은 세 가지였다."],
    ["독백","그가 복수를 끝낼 때까지, 배신하지 않고 지켜낼 것."],
    ["독백","그의 명령에 절대복종할 것."],
    ["독백","그리고 절대로 거짓말을 하지 않을 것."],
    ["독백","복수가 끝나는 날, 그 영혼은 내 것이 된다."],
    ["독백","백작을 섬기는 집사로서는 하나같이 수고스러울 것 같은 요구들이다."]
  ]},
  {art:"ring", alt:"그을음이 묻은 시엘의 손바닥 위에 푸른 보석이 박힌 가문의 반지가 놓여 있다.", lines:[
    ["시엘","어딘가에 팬텀하이브 가를 파멸시키려는 자가 있어."],
    ["시엘","프란시스 고모님이 말씀하셨어. 반격할 기회는 상대가 공격해 왔을 때라고."],
    ["시엘","선대는 승부에서 졌어."],
    ["시엘","이번에는······. 나는 절대로 안 져."],
    ["시엘","팬텀하이브 가 당주, 시엘 팬텀하이브로서."],
    ["세바스찬","후훗."],
    ["시엘","······뭐가 웃기지?"],
    ["세바스찬","아닙니다. 저에게는 거짓말을 하지 말라고 하셨으면서······."],
    ["세바스찬","정작 도련님께서는 거짓말에 능하십니다."],
    ["독백","인간의 한평생도 내게는 눈 깜박할 사이다."],
    ["독백","잠깐 시간을 때우고 배를 채울 수 있다면, 그것으로 족하다."]
  ]},
  {art:"manor", alt:"겨울 아침의 빛이 팬텀하이브 저택의 창을 비춘다.", lines:[
    ["독백","······."],
    ["시엘","오늘부터 할 일이 아주 많아."],
    ["시엘","나는 이 집에 대해 모르는 게 너무 많아. 내가 배우기도 전에 선대가 돌아가셨으니까."]
  ]},
  {art:"lesson", alt:"세바스찬이 이발 가위를 들고 시엘의 머리를 다듬고 있다.", lines:[
    ["세바스찬","고개를 조금만 숙여 주십시오."],
    ["세바스찬","가주께서는 집안일은 물론, 어른들에게 뒤지지 않을 지식과 교양도 갖추셔야 합니다."],
    ["세바스찬","어학과 경제, 사격과 승마······."],
    ["세바스찬"," 배우셔야 할 것이 산더미처럼 쌓여 있습니다."],
    ["세바스찬","전에 계시던 가정교사에게 연락을 넣어도 되겠습니까?"],
    ["시엘","됐어."],
    ["시엘","지금은 저택에 아무도 들이고 싶지 않아."],
    ["세바스찬","하면, 제가 대신 가정교사 일을 맡아도 되겠습니까?"],
    ["시엘","네가?"],
    ["세바스찬","오래 살면서 허송세월한 건 아닙니다."],
    ["세바스찬","하지만 제 방식은 스파르타입니다."],
    ["시엘","그게 나아."],
    ["시엘","백작과 집사…… 너나 나나 아직 가짜야."],
    ["시엘","누구보다 빨리 진짜가 되어야지."],
    ["세바스찬","알겠습니다."]
  ]}
];
const openingLines=openingScenes.flatMap((scene,sceneIndex)=>scene.lines.map(([speaker,text,,cue],beat)=>({scene,sceneIndex,beat,speaker,text,cue})));
let recollectionLine=0, openingAuto=false, openingTimer=0, openingSession=false;

function openingHold(entry){
  const line=1500+entry.text.length*87;
  const breath=entry.speaker==="독백"?420:entry.beat===0?350:0;
  return Math.min(6100,line+breath);
}

function inOpening(){return tab==="recollection"||(state.phase==="contract"&&tab==="plan");}
function openingIndex(){return tab==="recollection"?recollectionLine:state.openingLine;}
function clearOpeningTimer(){clearTimeout(openingTimer);openingTimer=0;}
function stopOpeningAuto(){clearOpeningTimer();openingAuto=false;}
function openingImage(scene){return "assets/"+(scene.title?"endings":"prologue")+"/"+scene.art+".webp";}
function openingArt(scene,picture){
  const frame=$("opening-picture");
  const source=picture?"assets/endings/"+picture+".webp":openingImage(scene);
  if(frame.dataset.source===source)return;
  frame.dataset.source=source;
  frame.dataset.art=scene.art;
  const img=new Image();
  img.className="opening-cg"; img.alt=scene.alt;
  img.src=source;
  const old=frame.querySelector(".opening-cg:last-child");
  frame.replaceChildren(...(old?[old]:[]),img);
  if(old){
    old.alt="";
    const reveal=()=>{if(img.isConnected){img.classList.add("ready");old.remove();}};
    if(img.complete)reveal();
    else {
      img.addEventListener("load",reveal,{once:true});
      img.addEventListener("error",()=>img.remove(),{once:true});
    }
  }else img.classList.add("ready");
  const next=openingScenes[openingScenes.indexOf(scene)+1];
  if(next){
    const preload=new Image();
    preload.src=openingImage(next);
  }
}
function drawOpening(focus=false){
  clearOpeningTimer();
  delete $("overture").dataset.pause;
  const i=openingIndex(), signing=i===openingLines.length, replay=tab==="recollection";
  const entry=openingLines[signing?i-1:i];
  const scene=signing?openingScenes.findLast(page=>!page.title):entry.scene;
  const surface=$("overture");
  if(!openingSession){openingAuto=true;openingSession=true;}
  surface.dataset.art=scene.title?"custom":scene.art;
  surface.dataset.close=String(!signing&&!scene.title&&((scene.art==="seal"&&entry.beat>=5)||(scene.art==="cell"&&entry.beat>=6)||(scene.art==="ring"&&entry.beat>=3&&entry.beat<=6)));
  surface.dataset.establish=String(!signing&&!scene.title&&entry.beat===0&&["fire","manor"].includes(scene.art));
  surface.dataset.signing=String(signing);
  const cue=signing?null:entry.cue;
  const actors=novelCast(cue,recruitArtwork(currentCielAge()))??"";
  const cast=$("opening-cast");
  if(cast.innerHTML!==actors)cast.innerHTML=actors;
  const voiceOnly=!actors&&!cue?.cg&&!scene.title&&scene.art==="cell"&&entry.speaker==="악마";
  surface.dataset.voiceOnly=String(voiceOnly);
  $("opening-dialogue").classList.toggle("dialogue",!voiceOnly);
  const reader=$("opening-read");
  reader.tabIndex=voiceOnly?0:-1;
  reader.setAttribute("aria-hidden",String(!voiceOnly));
  reader.setAttribute("aria-label","다음 대사");
  if(voiceOnly){
    const picture=$("opening-picture");
    picture.replaceChildren();
    delete picture.dataset.art;
    delete picture.dataset.source;
  }else if(scene.art==="ring" && entry.beat>=5 && !cue?.cg){
    openingArt({art:"hillside",alt:"동트기 전 들판에서 반지를 움켜쥔 시엘이 세바스찬을 올려다본다."});
  }else openingArt(scene,cue?.cg);
  playNovelCue(surface,signing?null:"opening:"+i,cue);
  musicPlayer.sync(trackForView());
  const thought=!signing&&entry.speaker==="독백";
  surface.dataset.voice=thought?"thought":"speech";
  const speaker=signing?"세바스찬":thought?"":novelSpeakerName(entry.speaker);
  $("opening-speaker").hidden=!speaker;
  $("opening-speaker").textContent=speaker;
  $("opening-line").textContent=signing?"왕실은 작위 승인을 보류했습니다. 금고에 남은 돈은 "+money(state.fund)+". 도련님, 가문의 첫 장부는 어느 수첩에 보관하면 되겠습니까?":entry.text;
  $("opening-slots").hidden=!signing;
  if(signing)$("opening-slots").innerHTML=[1,2,3].map(n=>btn("수첩 "+n+" · "+(saves[n]?monthText(saves[n].month):"빈 슬롯"),"contract-slot:"+n)).join("");
  $("opening-prev").disabled=i===0;
  $("opening-read").disabled=signing;
  $("opening-next").hidden=signing;
  $("opening-next").setAttribute("aria-label",i===openingLines.length-1?(replay?"수첩으로":state.contractFiled?"조작 안내로":"수첩 선택"):"다음 대사");
  $("opening-skip").textContent=replay?"다시보기 종료":"건너뛰기";
  $("opening-skip").hidden=signing;
  $("opening-auto").hidden=signing;
  $("opening-auto").setAttribute("aria-pressed",String(openingAuto));
  $("opening-auto").textContent=openingAuto?"자동 멈춤":"자동 재생";
  if(openingAuto&&!signing&&!document.hidden&&!$("picker").open)
    openingTimer=setTimeout(()=>stepOpening(1),openingHold(entry)+(cue?.wait??0)+(surface.dataset.establish==="true"?900:0));
  if(focus)(voiceOnly?reader:signing?$("opening-slots").querySelector("button"):$("opening-next")).focus({preventScroll:true});
}
function finishOpening(){
  stopOpeningAuto();
  if(tab==="recollection"){tab="save";render(true);focusAction("recollect");return;}
  if(state.contractFiled){state.phase="guide";state.guidePage=0;persist();render();showGuidePage(0);return;}
  state.openingLine=openingLines.length;persist();drawOpening(true);
}
function stepOpening(step){
  if(!inOpening()||$("picker").open||$("scene").dataset.artOnly==="true")return;
  if($("overture").dataset.pause&&step>0){drawOpening(true);return;}
  const i=openingIndex();
  if(i+step>=openingLines.length){finishOpening();return;}
  const next=Math.max(0,i+step);
  if(tab==="recollection")recollectionLine=next;
  else {state.openingLine=next;persist();}
  const auto=openingAuto;
  const pause=step===1&&openingLines[i].scene!==openingLines[next].scene&&!openingLines[next].scene.title&&({fire:1100,manor:1450})[openingLines[next].scene.art];
  if(pause){
    clearOpeningTimer();
    $("overture").dataset.pause="true";
    openingTimer=setTimeout(()=>{if(inOpening())drawOpening(!auto);},pause);
  }else drawOpening(!auto);
}
function openingAction(action,id,confirmed,rect){
  if(action==="recollect"&&tab==="save"&&state.phase!=="contract"){
    recollectionLine=0;stopOpeningAuto();tab="recollection";render(true);return true;
  }
  if(!inOpening())return false;
  if(action==="opening-next"){stopOpeningAuto();stepOpening(1);return true;}
  if(action==="opening-prev"){stopOpeningAuto();stepOpening(-1);return true;}
  if(action==="opening-auto"){openingAuto=!openingAuto;drawOpening();return true;}
  if(action==="opening-skip"){finishOpening();return true;}
  if(action==="contract-slot"&&tab==="plan"&&openingIndex()===openingLines.length&&["1","2","3"].includes(id)){
    if(saves[id]&&!confirmed){askConfirmation("contract-slot:"+id,"수첩 "+id+" 덮어쓰기","이 수첩의 저장 기록을 새 회차로 교체할까요?","저장",rect);return true;}
    state.contractFiled=true;state.phase="guide";state.guidePage=0;
    saves[id]=structuredClone(state);persist();render();showGuidePage(0);return true;
  }
  return false;
}
document.addEventListener("visibilitychange",()=>{
  if(!inOpening())return;
  if(document.hidden)clearOpeningTimer();
  else if(openingAuto||$("overture").dataset.pause)drawOpening();
});
