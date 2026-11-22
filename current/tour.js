"use strict";
const tourSteps=[
  ["home","tab:plan","이달 일정표 펴기","도련님, ‘일정표’를 펴 주시겠습니까? 이번 달 첫 수업을 적어 두겠습니다."],
  ["plan","activity:0:study","상순에 수업 넣기","달을 셋으로 나눠 쓰지요. 첫 열흘은 ‘서재 수업’으로 시작하시겠습니까?"],
  ["plan","pick:1","중순 펼치기","상순은 정해졌습니다. 그 옆의 ‘중순’을 짚어 보십시오."],
  ["plan","activity:1:study","중순 수업 고르기","‘서재 수업’을 한 번 더 넣어 보시지요. 수업료는 £ 옆에 적혀 있습니다."],
  ["plan","pick:2","하순 펼치기","이제 마지막 열흘입니다. ‘하순’을 열어 주십시오."],
  ["plan","activity:2:etiquette","하순 수업 고르기","마지막은 ‘귀족 예법’이 어떻습니까? 찻잔은 제가 준비하겠습니다."],
  ["plan","pick-visit","방문 일정 잡기","수업 세 칸이 찼군요. ‘자유행동’에선 한 달에 한 곳을 방문하실 수 있습니다."],
  ["plan","visit:library","서재 방문 예약하기","오늘은 ‘서재’로 모시겠습니다. 누구와 무슨 얘기를 나눌지는 도착해서 정하시지요."],
  ["plan","execute","예상 지출 보기","‘이달 일정 실행’을 여시지요. 결재하시기 전에 수업료를 먼저 보여 드리겠습니다."],
  ["confirm","close","지출 확인하고 돌아가기","예상 지출은 확인하셨습니까? 연습 중이니 ‘취소’를 눌러도 일정은 그대로입니다."],
  ["plan","system-back","저택으로 돌아가기","이달 일정은 준비됐습니다. ‘뒤로’를 누르시면 저택으로 모시겠습니다."],
  ["home","tab:estate","저택 지도 펼치기","이번엔 집 안을 보시지요. ‘관리 · 경영’에 저택 지도를 펴 두었습니다."],
  ["estate","station:kitchen","주방 살펴보기","지도에서 ‘주방’을 짚어 보십시오. 설비와 개수 비용을 함께 보실 수 있습니다."],
  ["estate","tab:staffing","근무표 펼치기","주방을 맡길 사람이 필요하군요. ‘사용인 배치’에 명단을 준비했습니다."],
  ["staffing","back","사용인 근무지 살피기","이름을 방으로 옮기면 근무지가 바뀝니다. 오늘은 명단만 보시고 ‘뒤로’ 가시지요."],
  ["estate","tab:company","회사 장부 펼치기","저택 살림도 회사 수입에서 나옵니다. ‘팬텀 사(社)’의 장부를 보시겠습니까?"],
  ["company","station:works","원가 확인하기","‘제작실’에서 완구 하나의 원가를 보십시오. 몇 개를 만들지는 그 뒤에 정하시지요."],
  ["company","system-back","저택으로 돌아가기","원가는 확인했습니다. ‘뒤로’를 누르시면 저택에서 차를 올리겠습니다."],
  ["home","tab:market","상점 둘러보기","도련님, 차에 곁들일 것을 고르시겠습니까? ‘상점’에 오늘 들어온 간식이 있습니다."],
  ["market","system-back","물건의 효과 살피기","물건을 고르면 드시기 전후의 수치가 보입니다. 오늘은 ‘뒤로’ 돌아가시지요."],
  ["home","tab:chat","세바스찬 부르기","제게 하실 말씀이 있으시면 ‘대화’로 불러 주십시오."],
  ["chat","back","화제 살펴보기","부르셨습니까, 도련님? 화제는 가운데 있습니다. 급한 용건이 아니시면 ‘다음에’를 눌러 주십시오."],
  ["home","tab:status","시엘의 상태 보기","‘상태’에서 건강과 스트레스를 함께 보십시오. 다음 열흘을 비워 둘지 가늠하실 수 있습니다."],
  ["status","tab:record","가문 장부 펼치기","지난 사건을 찾으십니까? 달력 위 ‘가문 장부’에 날짜순으로 정리해 두었습니다."],
  ["record","tab:save","저장 수첩 펼치기","작위 심의 기록까지 보셨군요. 이번에는 ‘수첩 · 저장’을 열어 주시겠습니까?"],
  ["save",null,"안내 마치기","회차를 남길 칸과 음량은 이곳에 있습니다. ‘마치기’를 누르시면 도련님의 일정으로 돌아갑니다."]
];
const tourChapters=[{label:"일정표",start:0},{label:"저택·팬텀사",start:11},{label:"생활·기록",start:18}];
function showTourHint(hint){
  const line=$("tour-hint");
  line.replaceChildren();
  for(const part of hint.split(/(‘[^’]+’)/)){
    if(part.startsWith("‘")){
      const strong=document.createElement("strong");
      strong.textContent=part.slice(1,-1);
      line.append(strong);
    }else line.append(part);
  }
}
// Practice uses the game's renderer with a temporary state. Keep the live run by
// reference so that replaying or leaving the guide cannot edit a save slot.
let tourSession=null;
let tourPage=0, tourTarget=null, tourAnchor=null, positionFrame=0;
let tourLocks=[];
function beginGuide(){
  const panel=$("panel");
  tourSession={
    state,saves,tab,selectedSlot,editingVisit,lessonPage,selectedRoom,selectedDepartment,
    selectedEmployee,pendingConfirmation,playbackElapsed,dialogueHidden,focus:document.activeElement,
    panelTop:panel.scrollTop,calendarTop:$("calendar").scrollTop,
    pageX:window.scrollX,pageY:window.scrollY,
    sections:[...panel.querySelectorAll("details")].map(section=>section.open)
  };
  saves={};
  document.body.classList.add("guiding");
  $("guide-replay").hidden=false;
  window.addEventListener("resize",scheduleGuidePosition);
  document.addEventListener("scroll",scheduleGuidePosition,true);
  guideResize.observe($("guide-replay"));
}
function unlockPractice(){
  for(const el of tourLocks)el.inert=false;
  tourLocks=[];
  tourTarget?.classList.remove("tour-target");
  if(tourAnchor)guideResize.unobserve(tourAnchor);
  tourTarget=tourAnchor=null;
  if($("picker").open)$("picker").close();
  pendingConfirmation=null;
}
function endGuide(){
  if(!tourSession)return;
  unlockPractice();
  const origin=tourSession;
  ({state,saves,tab,selectedSlot,editingVisit,lessonPage,selectedRoom,selectedDepartment,
    selectedEmployee,pendingConfirmation,dialogueHidden}=origin);
  tourSession=null;
  guideResize.disconnect();
  cancelAnimationFrame(positionFrame);positionFrame=0;
  window.removeEventListener("resize",scheduleGuidePosition);
  document.removeEventListener("scroll",scheduleGuidePosition,true);
  document.body.classList.remove("guiding");
  $("guide-replay").hidden=$("tour-ring").hidden=true;
  if(state.phase==="guide"&&tab==="plan"){
    state.phase="plan";tab="home";persist();render(true);
    return;
  }
  render(false,origin.playbackElapsed);
  $("panel").querySelectorAll("details").forEach((el,i)=>{el.open=Boolean(origin.sections[i]);});
  $("panel").scrollTop=origin.panelTop;
  $("calendar").scrollTop=origin.calendarTop;
  window.scrollTo(origin.pageX,origin.pageY);
  const opener=origin.focus.isConnected?origin.focus:
    [...document.querySelectorAll('[data-action="open-guide"]')].find(el=>el.getClientRects().length);
  opener?.focus({preventScroll:true});
}
function showGuidePage(page){
  if(!tourSession)beginGuide();
  unlockPractice();
  tourPage=page;
  const [view,action,title,hint]=tourSteps[page];
  state=initial();state.month=tourSession.state.month;state.planMonth=state.month;state.phase="plan";state.people.mey={toward:2};state.jobs.mey="parlor";
  tab=view==="confirm"?"plan":view;
  selectedSlot=page>=5?2:page>=3?1:0; lessonPage=0; editingVisit=page===7;
  if(page>=2)state.plan[0]="study";
  if(page>=4)state.plan[1]="study";
  if(page>=6)state.plan[2]="etiquette";
  if(page>=8)state.visit="library";
  selectedRoom=page>=13?"kitchen":"library";
  selectedDepartment=page===16?"design":"works";
  selectedEmployee=null;
  render();
  if(view==="confirm")handleAction("execute");
  const guide=$("guide-replay");
  $("guide-replay-title").textContent=title;
  showTourHint(hint);
  const section=tourChapters.filter(chapter=>page>=chapter.start).length-1;
  const start=tourChapters[section].start,end=tourChapters[section+1]?.start??tourSteps.length;
  $("tour-count").textContent=(page-start+1)+" / "+(end-start);
  $("tour-count").setAttribute("aria-label",tourChapters[section].label+" "+(page-start+1)+"번째 안내, 총 "+(end-start)+"개");
  guide.querySelectorAll("[data-tour-chapter]").forEach((button,i)=>{
    if(i===section)button.setAttribute("aria-current","step");
    else button.removeAttribute("aria-current");
  });
  guide.querySelector('[data-action="guide-prev"]').disabled=page===0;
  const next=guide.querySelector('[data-action="guide-forward"]');
  next.textContent=action?"다음":"마치기";
  const scope=view==="confirm"?$("picker"):document;
  if(action)tourTarget=[...scope.querySelectorAll('[data-action="'+action+'"]')].find(el=>
    el.getClientRects().length && (view!=="confirm"||el.textContent==="취소"));
  tourTarget?.classList.add("tour-target");
  tourAnchor=tourTarget||document.querySelector(".notebook-slots h3");
  for(const control of document.querySelectorAll(".game-frame :is(button,input,summary),#picker button")){
    if(control!==tourTarget&&!control.inert){control.inert=true;tourLocks.push(control);}
  }
  if(tourAnchor){
    tourAnchor.scrollIntoView({block:"nearest",inline:"nearest",behavior:"instant"});
    guideResize.observe(tourAnchor);
  }
  (tourTarget||next).focus({preventScroll:true});
  positionGuide();
}
function scheduleGuidePosition(){
  if(!positionFrame)positionFrame=requestAnimationFrame(()=>{positionFrame=0;positionGuide();});
}
const guideResize=new ResizeObserver(scheduleGuidePosition);
function positionGuide(){
  if(!tourSession)return;
  const guide=$("guide-replay"),ring=$("tour-ring");
  const gap=12, margin=10, w=document.documentElement.clientWidth, h=window.innerHeight;
  const box=guide.getBoundingClientRect(),r=tourAnchor?.getBoundingClientRect();
  const limit=(v,min,max)=>Math.max(min,Math.min(v,max));
  let x=(w-box.width)/2,y=h-margin-box.height;
  ring.hidden=!r||r.bottom<=0||r.top>=h;
  if(r&&!ring.hidden){
    Object.assign(ring.style,{left:r.left-3+"px",top:r.top-3+"px",width:r.width+6+"px",height:r.height+6+"px"});
    const centeredX=limit(r.left+(r.width-box.width)/2,margin,w-margin-box.width);
    const centeredY=limit(r.top+(r.height-box.height)/2,margin,h-margin-box.height);
    const candidates=[
      [r.right+gap,centeredY],[r.left-gap-box.width,centeredY],
      [centeredX,r.bottom+gap],[centeredX,r.top-gap-box.height]
    ];
    const fit=candidates.find(([cx,cy])=>cx>=margin && cy>=margin && cx+box.width<=w-margin && cy+box.height<=h-margin);
    if(fit)[x,y]=fit;
    else {x=centeredX;y=r.top>h-r.bottom?margin:h-margin-box.height;}
  }
  guide.style.left=Math.round(x)+"px";
  guide.style.top=Math.round(Math.max(margin,y))+"px";
}
// Only the highlighted control and the guide navigation can act on a practice step.
document.addEventListener("click",event=>{
  if(!tourSession)return;
  event.preventDefault();event.stopImmediatePropagation();
  const button=event.target.closest("button");
  if(!button||button.disabled)return;
  if(button===tourTarget){showGuidePage(tourPage+1);return;}
  if(!$("guide-replay").contains(button))return;
  if(button.hasAttribute("data-tour-chapter")){
    showGuidePage(tourChapters[Number(button.dataset.tourChapter)].start);
    return;
  }
  switch(button.dataset.action){
    case "guide-close":endGuide();break;
    case "guide-prev":if(tourPage>0)showGuidePage(tourPage-1);break;
    case "guide-forward":if(tourPage===tourSteps.length-1)endGuide();else showGuidePage(tourPage+1);break;
  }
},true);
document.addEventListener("keydown",event=>{
  if(tourSession&&event.key==="Escape"){
    event.preventDefault();event.stopImmediatePropagation();endGuide();
  }
},true);
document.addEventListener("contextmenu",event=>{
  if(tourSession){event.preventDefault();event.stopImmediatePropagation();}
},true);
