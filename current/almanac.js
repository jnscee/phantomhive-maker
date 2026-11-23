"use strict";

for(const card of visitEncounterCards){
  for(const [label,response,stat,amount] of authoredOptions[card.id]??[])
    card.choices.push({label,reply:[card.npc,response],stat,amount});
}

function visitorEvents(){
  return visitEncounterCards.map(card=>({
    id:card.id, title:card.title, speaker:card.npc, text:card.lines[0][1], visitPlace:card.place,
    visitOnly:true, source:"저택과 런던의 방문 기록",
    sees:run=>run.visit===card.place && card.condition(run) &&
      (card.place!=="quarters" || visitName(visitPerson("quarters"))===card.npc),
    choices:card.choices.map(answer=>({
      label:answer.label, result:answer.reply[1],
      effect(){
        if(answer.trust)talkTrust(answer.trust);
        if(answer.stat)shift(answer.stat,answer.amount);
      }
    }))
  }));
}
function encounterPage(seq,room){
  const card=visitEncounterCards.find(item=>item.id===seq.visitEvent);
  if(!card)return "";
  const page=Math.min(seq.encounterPage||0,card.lines.length-1);
  const [who,line]=card.lines[page];
  const controls=page===card.lines.length-1
    ?card.choices.map((answer,index)=>btn(answer.label,"visit-choice:"+index)).join("")
    :btn("다음 대사","encounter-next:"+page);
  return staged(who,card.title,line,controls,"자유행동",room,card.npc);
}
function encounterAction(action,argument){
  if(action!=="encounter-next")return false;
  const seq=state.sequence;
  const card=visitEncounterCards.find(item=>item.id===seq?.visitEvent);
  if(state.phase==="visit" && card && Number(argument)===(seq.encounterPage||0) && Number(argument)<card.lines.length-1){
    seq.encounterPage=Number(argument)+1;
    persist();render(true);
  }
  return true;
}

function festivalAtPlanning(run){
  return londonFestivals.find(f=>run.duration===35 && (run.month===f.month-1 || run.month===f.month));
}
function festivalNotice(){
  const fair=festivalAtPlanning(state);
  if(!fair||state.phase!=="plan")return "";
  const ticket=state.fairTickets?.[fair.id];
  const selected=ticket?fair.options[ticket.index]:null;
  const buttons=fair.options.map((o,index)=>option(o.label,"fair-entry:"+index,ticket?.index===index,false,"option")).join("");
  return '<details class="fair-notice"><summary><b>'+fair.title+'</b><span>'+(selected?"신청 내용 보기":state.month===fair.month?"이달 행사 · 참가 신청":"다음 달 행사 · 참가 신청")+'</span></summary><div>'+
    '<small>'+fair.date+'</small><p>'+fair.historical+'</p><p><b>팬텀사 행사</b>　'+fair.invitation+'</p><div class="fair-options">'+buttons+'</div>'+
    (selected?'<p><b>준비 과목</b>　'+actions[selected.prep].name+' · 신청 후 한 번 수료하거나 '+selected.stat+' '+fairTarget(fair)+' 이상이면 호평을 받습니다.</p>'+btn("참가 취소","fair-entry:cancel"):'<p>종목을 고르면 준비 과목을 확인할 수 있습니다.</p>')+'</div></details>';
}
function fairTarget(fair){return fair.month===5?32:fair.month===18?90:140;}
function selectFestival(value){
  const fair=festivalAtPlanning(state);
  if(!fair||state.phase!=="plan")return;
  state.fairTickets??={};
  if(value==="cancel")delete state.fairTickets[fair.id];
  else{
    const index=Number(value),o=fair.options[index];
    if(!o||state.fairTickets[fair.id]?.index===index)return;
    state.fairTickets[fair.id]={index,start:state.counts[o.prep]||0};
  }
  persist();render();
  const notice=document.querySelector(".fair-notice");
  if(notice){notice.open=true;notice.querySelector("summary")?.focus();}
}
function settleFestival(run){
  const fair=londonFestivals.find(f=>run.duration===35&&f.month===run.month);
  const ticket=fair&&run.fairTickets?.[fair.id];
  if(!ticket||run.fairBook?.[fair.id])return;
  const o=fair.options[ticket.index];
  if(!o)return;
  const absent=Boolean(run.ill||run.illness);
  const prepared=(run.counts[o.prep]||0)>ticket.start || run.stats[o.stat]>=fairTarget(fair);
  const outcome=absent?"absent":prepared?"success":"practice";
  const result=absent?"공방에서 시엘에게 프로그램과 손님들의 서명지를 보냈다. 빈칸으로 남은 마지막 줄에는 집으로 돌아온 세바스찬이 날짜를 적었다.":o[outcome];
  run.fairBook??={};
  run.fairBook[fair.id]={index:ticket.index,outcome,result};
  if(!absent){run.renown+=prepared?2:1;}
  run.log.push(fair.title+" · "+(absent?"요양으로 불참":prepared?"호평 · 가문 명성 상승":"참가 · 가문 명성 소폭 상승"));
}
function fairDemand(run,product){
  const fair=londonFestivals.find(f=>f.month+1===run.month);
  const result=fair&&run.fairBook?.[fair.id];
  return result && result.outcome!=="absent" && fair.options[result.index]?.product===product ? (result.outcome==="success"?4:2) : 0;
}
function fairReport(fair){
  const entry=state.fairBook?.[fair.id];
  if(!entry)return "";
  const o=fair.options[entry.index],absent=entry.outcome==="absent";
  const label=absent?"요양으로 불참":entry.outcome==="success"?"호평":"참가";
  return '<article class="fair-report"><small>'+fair.date+' · '+label+'</small><h4>'+fair.title+'</h4>'+
    (!absent?'<p>'+o.line+'</p>':'')+'<p>'+entry.result+'</p>'+
    (!absent?'<b>다음 달 '+products[o.product].name+' 수요 +'+(entry.outcome==="success"?4:2)+'개</b>':'')+'</article>';
}
function thisMonthFairReport(){
  const fair=londonFestivals.find(f=>f.month===state.month);
  return fair?fairReport(fair):"";
}
function filedSection(title,body,count){
  return '<details class="file-section"><summary><span>'+title+'</span><small>'+count+'</small></summary><div>'+body+'</div></details>';
}
function courtFolio(rows){
  const stages=["관심 밖","가문에 주목","왕실 검토","재가 가능"];
  const complete=rows.filter(row=>row[1]).length;
  const approved=["title","vowTitle","releaseTitle"].includes(state.ending);
  const held=["business","defer","vowNoTitle","releaseNoTitle"].includes(state.ending);
  const stage=approved||complete===rows.length?3:state.royal>0&&complete>=rows.length*0.7?2:state.royal>0||state.renown>0||complete>=rows.length*.4?1:0;
  const wording=["왕실 서신에 가문의 이름이 아직 오르지 않았습니다.","궁정에서 팬텀하이브의 근황을 묻기 시작했습니다.","왕실 서기관이 가문의 평판과 살림을 함께 검토하고 있습니다.","작위 회복에 필요한 조건을 모두 갖췄습니다."];
  const pending=rows.find(row=>!row[1]);
  const title=approved?"작위 회복":held?"이번 심의 유보":stages[stage];
  const description=approved?"왕실이 백작 작위를 승인했습니다.":held?"이번 회차의 작위 승인이 유보되었습니다.":wording[stage];
  const steps=stages.map((label,index)=>
    '<li'+(index<=stage?' class="reached"':'')+(index===stage?' aria-current="step"':'')+'><i aria-hidden="true"></i>'+label+'</li>').join("");
  const checks=rows.map(([label,ok,hint])=>
    '<li><div><b>'+label+'</b><small>'+hint+'</small></div><span class="court-status'+(ok?' met':'')+'">'+(ok?'✓ 충족':'미충족')+'</span></li>').join("");
  return '<section class="court-folio"><div class="court-ruling"><header><span>왕실 작위 심의</span><small>'+monthText(state.month)+'</small></header>'+
    '<h3>'+title+'</h3><p>'+description+'</p><ol class="court-stages" aria-label="왕실 평가 단계">'+steps+'</ol></div>'+
    '<details class="court-register" open><summary><b>작위 회복 요건</b></summary>'+
    (pending&&!state.ending?'<p class="court-next"><b>다음 준비</b> '+pending[2]+'</p>':'')+
    '<ul class="court-checks">'+checks+'</ul></details></section>';
}
function familyFolio(rows,history,album,extra=""){
  const allies=peopleInHouse();
  const relations=allies.length?allies.map(id=>'<div class="trust-entry"><b>'+servants[id].name+'</b><span>'+rank(state.people[id].toward)+'</span></div>').join(""):"아직 기록된 인물이 없습니다.";
  const fairHistory=londonFestivals.map(fairReport).filter(Boolean);
  return '<div class="family-folio">'+courtFolio(rows)+'<aside class="folio-files"><dl class="folio-finance"><div><dt>가문 자금</dt><dd>'+money(state.fund)+'</dd></div><div><dt>남은 채무</dt><dd>'+money(state.debt)+'</dd></div></dl>'+
    filedSection("인물 관계",'<p>각 인물이 시엘에게 보내는 신뢰입니다.</p>'+relations,allies.length+"명")+
    filedSection("사건 기록",history||"첫 사건을 마치면 선택이 기록됩니다.",state.events.length+"건")+
    filedSection("런던 행사",fairHistory.join("")||"참가한 행사의 결과가 기록됩니다.",fairHistory.length+"건")+
    filedSection("엔딩 도감",album,Object.keys(endingScenes).filter(hasEndingRecord).length+"개 기록")+extra+'</aside></div>';
}
function healthNotice(run){
  if(run.ill||run.illness)return "병중 · 수업은 요양으로 바뀌며 예약한 수업료는 전액 지불합니다.";
  if(run.hp<=42||run.stress>=70)return "병환 주의 · 다음 일정에 휴식이나 요양을 넣을 수 있습니다.";
  return "";
}
