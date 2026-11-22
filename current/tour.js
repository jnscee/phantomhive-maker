"use strict";
const tourSteps=[
  ["home","tab:plan","저택 → 일정표","도련님, 이달 일정표를 가져왔습니다. 날짜는 위쪽 달력에, 잔금은 명패에 적어 두었습니다. 아래의 ‘일정표’를 여시면 제가 설명드리겠습니다."],
  ["plan","activity:0:study","일정표 → 상순","먼저 상순에 서재 수업을 적어 보겠습니다."],
  ["plan","pick:1","일정표 → 중순","이제 ‘중순’ 칸을 열어 보시겠습니까?"],
  ["plan","activity:1:study","중순 → 서재 수업","중순에는 ‘서재 수업’이 어떻습니까? 제가 맡은 수업입니다. £ 옆에 수업료도 적혀 있습니다."],
  ["plan","pick:2","일정표 → 하순","하순 일정도 도련님께서 정하십니다. ‘하순’을 열어 주십시오."],
  ["plan","activity:2:etiquette","하순 → 귀족 예법","하순에는 귀족 예법을 넣겠습니다."],
  ["plan","pick-visit","일정표 → 자유행동","세 칸을 모두 채우셨군요. 다음은 ‘자유행동’입니다."],
  ["plan","visit:library","자유행동 → 서재","평소에는 도련님께서 방문지를 정하십니다. 오늘은 연습이니 서재를 골라 보겠습니다. 방문은 하순 일정을 마친 뒤입니다."],
  ["plan","execute","일정표 → 실행 확인","서재로 적었습니다. ‘이달 일정 실행’을 열면 확정하기 전에 지출을 검토할 수 있습니다."],
  ["confirm","close","실행 전 확인","세 번의 일정에 이만큼 들겠군요. 오늘은 연습이니 ‘취소’로 일정표만 덮겠습니다."],
  ["plan","system-back","일정표 → 저택","저택도 한 바퀴 돌아보시겠습니까? 돌아가는 길은 화면 아래의 ‘뒤로’입니다."],
  ["home","tab:estate","저택 → 관리 · 경영","다음은 저택 관리입니다. ‘관리 · 경영’을 여시면 저택 지도를 펼쳐 드리겠습니다."],
  ["estate","station:kitchen","저택 지도 → 주방","주방부터 살펴보겠습니다. 지도에서 주방을 짚으면 현재 등급과 개수 비용이 함께 나옵니다."],
  ["estate","tab:staffing","주방 → 사용인 배치","주방을 맡길 사람이 필요하겠군요. 시설 정보 아래 ‘사용인 배치’에 명단을 준비했습니다."],
  ["staffing","back","사용인 배치 → 저택 관리","오늘 명단에는 메이린을 올려 두었습니다. 근무지를 정하실 때는 이름을 원하는 방으로 옮기시면 됩니다. 지금은 ‘뒤로’ 가겠습니다."],
  ["estate","tab:company","저택 관리 → 팬텀 사(社)","다음은 회사 장부입니다. 위쪽의 ‘팬텀 사(社)’를 열어 보시겠습니까?"],
  ["company","station:works","팬텀 사 → 제작실","제작실에서 먼저 보실 것은 한 개당 원가입니다. 품질도 이곳에 적혀 있으니, 둘을 살핀 뒤 생산량을 정하시는 편이 좋겠습니다."],
  ["company","system-back","제작실 → 저택 메뉴","생산에 쓸 돈은 확인하셨습니까? 아래의 ‘뒤로’를 누르시면 저택으로 돌아갑니다."],
  ["home","tab:market","저택 → 상점","잠시 차를 드시겠습니까, 도련님? ‘상점’을 여시면 오늘 나온 간식과 가격을 보실 수 있습니다."],
  ["market","system-back","상점 → 저택","간식을 하나 고르면 드시기 전후의 수치를 비교할 수 있습니다. 오늘은 값만 알아두고 ‘뒤로’ 돌아가겠습니다."],
  ["home","tab:chat","저택 → 대화","도련님께서 부르시면 언제든 대답하겠습니다. ‘대화’로 한번 불러 보시겠습니까?"],
  ["chat","back","대화 → 저택","부르셨습니까, 도련님? 가운데서 화제를 고르시면 됩니다. 급한 용건이 없으시다면 ‘다음에’ 듣겠습니다."],
  ["home","tab:status","저택 → 상태","이번에는 도련님의 차례입니다. ‘상태’를 여시면 건강과 그간의 성과를 보실 수 있습니다."],
  ["status","tab:record","상태 → 가문 장부","무리한 일정이었는지는 건강과 스트레스, 의욕에 드러납니다. 이제 아래의 ‘가문 장부’를 함께 보겠습니다."],
  ["record","tab:save","가문 장부 → 수첩","가문의 사건을 기록하는 장부입니다. 궁정에 어떤 소문이 도는지도 여기 적어 두겠습니다. 마지막으로 보여 드릴 것은 ‘수첩 · 저장’입니다."],
  ["save",null,"수첩 · 저장","기록을 남길 칸과 음악·효과음의 크기는 여기서 정하실 수 있습니다. ‘마치기’를 누르시면 연습은 끝입니다. 이달의 첫 명령을 기다리겠습니다, 도련님."]
];
// Practice uses the game's renderer with a temporary state. Keep the live run by
// reference so that replaying or leaving the guide cannot edit a save slot.
let tourSession=null;
let tourPage=0, tourTarget=null, tourAnchor=null, positionFrame=0;
let tourLocks=[];
function beginGuide(){
  const panel=$("panel");
  tourSession={
    age:campaignAge(state),state,saves,tab,selectedSlot,editingVisit,lessonPage,selectedRoom,selectedDepartment,
    selectedEmployee,pendingConfirmation,playbackElapsed,focus:document.activeElement,
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
    selectedEmployee,pendingConfirmation}=origin);
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
  state=initial();state.month=state.planMonth=tourSession.state.month;state.phase="plan";state.people.mey={toward:2};state.jobs.mey="parlor";
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
  $("tour-hint").textContent=hint;
  $("tour-count").textContent=(page+1)+" / "+tourSteps.length;
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
