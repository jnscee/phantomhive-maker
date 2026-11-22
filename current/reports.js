"use strict";

// Take one opening balance before any optional purchases, visits or conversations.
function startAccounts(run, opening=run, partial=false){
  run.accounts={month:run.month, opening:opening.fund, stats:snapStats(opening),estate:0,company:0,borrowed:0,partial};
  return run;
}
function postPurchase(action, previous){
  const diff=state.fund-previous;
  if(!diff)return;
  if(action==="loan")state.accounts.borrowed+=diff;
  if(["doctor","upgrade","annex","townhouse","buy"].includes(action))state.accounts.estate-=diff;
  if(["expand","develop"].includes(action))state.accounts.company-=diff;
}
function monthlyBudget(){
  const est=marketStats(),debt=Math.min(24,state.debt);
  const tuition=plannedTuition();
  const company=est.unit*state.qty, estate=overhead()-debt;
  return {tuition,company,estate,debt,total:tuition+company+estate+debt,revenue:est.revenue,closing:est.balance};
}
function amountRow(name,value,cls=""){
  return '<div class="amount-row '+cls+'"><span>'+name+'</span><strong>'+money(value)+'</strong></div>';
}
function budgetTable(compact=false){
  const b=monthlyBudget();
  const change=b.closing-state.fund;
  const limit=Math.max(1,b.total,b.revenue);
  function flow(label,value,expense){
    const sign=value?(expense?"−":"+"):"";
    return '<div class="cash-flow '+(expense?'expense':'income')+'"><span>'+label+'</span><i aria-hidden="true"><i style="width:'+100*value/limit+'%"></i></i><strong>'+sign+money(value)+'</strong></div>';
  }
  return '<section class="budget-book forecast">'+(compact?'':'<h3>이달 자금 예상</h3>')+
    '<div class="cash-head"><span>예상 월말 잔액</span><strong>'+money(b.closing)+'</strong><b class="cash-change">'+(change>0?'▲ '+money(change)+' 증가':change<0?'▼ '+money(-change)+' 감소':'변동 없음')+'</b></div>'+
    amountRow("현재 가용 자금",state.fund)+flow("팬텀사 예상 매출",b.revenue,false)+flow("남은 지출 합계",b.total,true)+
    (compact?'<details class="expense-details"><summary>지출 내역·시설 효과</summary>':'')+'<div class="cash-detail">'+amountRow("저택 운영 · 시설 유지",b.estate)+amountRow("팬텀사 운영 · 생산비",b.company)+amountRow("교육·활동비",b.tuition)+
    (b.debt?amountRow("채무 상환",b.debt):"")+'</div>'+
    (state.accounts.estate||state.accounts.company?'<p>가용 자금에 이미 반영된 지출 · 저택 '+money(state.accounts.estate)+' / 팬텀사 '+money(state.accounts.company)+'</p>':'')+contributionNote(investmentEffect(forecast()),state.accounts.researchSaved)+(compact?'</details>':'')+'</section>';
}
function contributionNote(investment,research){
  if(!(investment?.total||research))return "";
  const items=[];
  if(investment?.production)items.push("생산비 절감 "+money(investment.production));
  if(investment?.extraSales)items.push("매대 추가 매출 "+money(investment.extraSales));
  if(investment?.wrapping)items.push("포장 수익 "+money(investment.wrapping));
  if(investment?.design)items.push("도안 웃돈 "+money(investment.design));
  if(research)items.push("개발비 할인 "+money(research));
  return '<aside class="investment-result"><b>기본 시설 대비 +'+money((investment?.total||0)+(research||0))+'</b><p>'+items.join(" · ")+'</p><small>같은 달·가격·물량에서의 차이로, 위 수입과 지출에 반영되어 있습니다.</small></aside>';
}
function actualBudget(){
  const r=state.report,a=state.accounts;
  if(!r)return "";
  const legacy=r.debtPayment==null;
  const expenses=a.estate+a.company+r.training+r.cost+r.bills;
  return '<section class="budget-book"><h3>가문 회계</h3>'+
    amountRow(a.partial?"기록 시작 잔액":"월초 잔액",a.opening)+
    amountRow("팬텀사 판매 매출",r.income)+(r.advance?amountRow("납품 선금",r.advance):"")+
    (a.borrowed?amountRow("대출 입금",a.borrowed):"")+
    amountRow(legacy?"저택 유지·채무 합산":"저택 운영",r.bills-(r.debtPayment||0)+a.estate)+
    (a.estate?'<p>유지 '+money(r.bills-(r.debtPayment||0))+' · 개수·지원 등 '+money(a.estate)+'</p>':'')+
    amountRow("팬텀사 운영",r.cost+a.company)+
    (a.company?'<p>생산 '+money(r.cost)+' · 증설·개발 '+money(a.company)+'</p>':'')+
    amountRow("교육·활동비",r.training)+(r.debtPayment?amountRow("채무 상환",r.debtPayment):"")+
    amountRow("지출 합계",expenses,"subtotal")+amountRow("월말 잔액",state.fund,"balance")+
    '<p>기간 중 자금 변동　'+signed(state.fund-a.opening)+' £</p>'+
    contributionNote(r.investment,a.researchSaved)+(a.partial?'<p>이전 저장본은 복원 가능한 시점부터 집계합니다.</p>':'')+'</section>';
}
function deltaRow(key,before,after){
  const scale=statMax(key);
  const change=after-before, direction=change>0?"▲":change<0?"▼":"—";
  const tone=change===0?"flat":(key==="스트레스"?change<0:change>0)?"gain":"loss";
  return '<div class="delta-row '+tone+'" aria-label="'+key+' '+before+'에서 '+after+'로, 변화 '+signed(change)+'">'+
    '<span>'+key+'</span><small>'+before+'</small><b>'+after+'</b>'+
    '<i class="delta-meter" aria-hidden="true" style="--from:'+before/scale*100+'%;--to:'+after/scale*100+'%"><i></i><b></b></i>'+
    '<strong>'+direction+' '+(change===0?'0':signed(change))+'</strong></div>';
}
function logEffect(text){
  const cash=/^(매출|생산비|저택 유지·채무 상환) (£[\d,]+(?:\.\d+)?)$/.exec(text);
  if(cash){
    const tone=cash[1]==="매출"?"gain":"loss";
    return cash[1]+' <strong class="log-'+tone+'">'+cash[2]+'</strong>';
  }
  const match=/^(.*?) ([+−-]?\d+|상승|하락)$/.exec(text);
  if(!match)return escapeHTML(text);
  const [,label,value]=match;
  if(![...stats,"건강","의욕","스트레스","가문 명성"].includes(label))return escapeHTML(text);
  const change=value==="상승"?1:value==="하락"?-1:Number(value.replace("−","-"));
  const benefit=label==="스트레스"?-change:change;
  if(!benefit)return escapeHTML(text);
  return '<span class="log-'+(benefit>0?"gain":"loss")+'">'+escapeHTML(text)+'</span>';
}
function monthlyTimeline(entries){
  const items=entries.map(entry=>String(entry).split(' · ').filter(part=>!/^타나카 (?:협력 상승|신뢰 [+-]\d+)$/.test(part)).join(' · ')).filter(Boolean).map(entry=>{
    const match=/^(상순|중순|하순) · (.+?)(?: · (.*))?$/.exec(entry);
    if(!match)return '<li>'+String(entry).split(/( · | \/ )/).map(logEffect).join('')+'</li>';
    const effects=match[3]?match[3].split(' / ').map(effect=>'<span>'+logEffect(effect)+'</span>').join(''):'';
    return '<li><header><small>'+match[1]+'</small><b>'+escapeHTML(match[2])+'</b></header>'+
      (effects?'<div class="log-effects">'+effects+'</div>':'')+'</li>';
  });
  return '<ol class="report-timeline">'+items.join('')+'</ol>';
}
function monthlyResults(){
  const before=state.accounts.stats,after=snapStats(state);
  const group=(title,keys)=>'<h4>'+title+'</h4>'+keys.map(k=>deltaRow(k,before[k],after[k])).join('');
  const warning=conditionWarning(state)||(state.hp<31?"건강이 낮습니다. 다음 달에는 휴식이나 왕진을 고려하세요.":state.fund<60?"다음 달 교육비와 생산비를 확인하세요.":"");
  const best=stats.slice().sort((a,b)=>(after[b]-before[b])/statMax(b)-(after[a]-before[a])/statMax(a))[0];
  const growth=after[best]-before[best];
  const words=(growth>0?"이번 달에는 "+best+"에서 가장 진전이 컸습니다. "+before[best]+"에서 "+after[best]+"까지 올리셨군요. ":"이번 달 능력에는 큰 변동이 없었습니다. ")+(state.report?"팬텀사에서는 "+state.report.sold+"개를 판매했습니다. ":"")+"도련님께서 다음 달에 쓰실 수 있는 돈은 "+money(state.fund)+"입니다.";
  return '<div class="month-report"><div class="butler-account"><img src="assets/sebastian.webp" alt="세바스찬"><p><b>세바스찬의 월말 보고</b><br>'+words+'</p></div><div class="report-date">'+monthText(state.month)+' 결산</div><div class="report-columns">'+
    '<section class="stat-folio"><h3>시엘의 성장 기록</h3><div class="delta-head"><span>항목</span><span>이전</span><span>현재</span><span>변화 그래프</span><span>증감</span></div>'+
    group("능력 · 500점",stats)+group("컨디션 · 100점",["건강","스트레스","의욕"])+'</section>'+actualBudget()+'</div>'+thisMonthFairReport()+sampleReview()+
    (warning?'<p class="danger">'+warning+'</p>':'')+
    '<details class="month-log"><summary>이달 일정·사건 기록</summary>'+monthlyTimeline(state.log)+'</details>'+
    '<div class="report-end">'+btn(state.month===state.duration?"작위 심의 확인":"다음 달로","advance",Boolean(sampleReview()),"primary")+'</div></div>';
}
const reviewLines={
  study:"풀이의 세 번째 줄을 보십시오. 이제 제가 여백에 힌트를 남길 필요가 없겠군요.",
  etiquette:"오른손의 장갑을 벗는 동안에도 손님을 기다리게 하지 않으셨습니다.",
  accounts:"원장의 합계와 금고의 잔돈이 맞습니다. 이대로 서명하시겠습니까?",
  inquiry:"잉크가 다른 줄에만 표식을 남기셨군요. 원본은 제가 따로 보관하겠습니다.",
  riding:"마지막 바퀴에는 제가 고삐를 잡을 일이 없었습니다.",
  letters:"두 분께서 같은 날 초대하셨는데, 어느 쪽도 거절당했다고 생각하지 않겠군요.",
  rest:"홍차를 한 번 더 우렸습니다. 오늘은 충분히 쉬셨습니까, 도련님?",
  walk:"온실까지 걸으셨군요. 돌아오시는 동안 보폭이 한결 고르셨습니다.",
  language:"방금 읽으신 답신은 통역을 거치지 않고 그대로 부쳐도 되겠습니다.",
  music:"마지막 네 마디가 한 호흡에 이어졌습니다. 그 부분에 책갈피를 꽂아 두지요.",
  dance:"이번에는 악사 쪽을 보지 않고도 박자를 맞추셨군요.",
  social:"손님이 먼저 다음 약속을 청하시더군요. 초대장은 제가 준비하겠습니다.",
  negotiate:"상대가 먼저 납기를 앞당겼습니다. 그 조건을 계약서에 옮겨 두지요.",
  exercise:"오늘 달리신 거리를 기록해 두었습니다. 물부터 한 잔 드시지요.",
  practicum:"마지막 영수증까지 제자리에 있습니다. 내일은 이 원장부터 펴겠습니다.",
  developToy:"도련님이 표시하신 축을 고치니 바퀴가 끝까지 돌아갑니다.",
  supplier:"견본과 납품표에 같은 표시를 남기셨군요. 다음 주문 때 대조하기 좋겠습니다.",
  estateWork:"먼저 결재하신 지붕 수선 건부터 장인에게 전하겠습니다.",
  reception:"손님들 성함을 적은 쪽지가 그대로군요. 오늘은 꺼내실 일이 없으셨나 봅니다.",
  casework:"현장 약도에 빈칸을 남겨 두셨군요. 아직 확인하지 못한 증언은 제가 따로 묶겠습니다.",
  reading:"범인을 짐작하신 쪽에 책갈피가 꽂혀 있더군요. 결말은 마음에 드셨습니까?",
  recovery:"오늘 들어온 서류는 서재에 두었습니다. 차는 침실로 올리지요.",
  outing:"길 건너 완구점에서 한참을 머무셨군요. 다음 외출 때도 들르시겠습니까?"
};
function openReview(){
  state.phase="review";persist();render(true);
}
function reviewMarkup(){
  const seq=state.sequence,id=sequenceActivity(),a=actions[id],after=snapStats(state);
  const changed=Object.keys(after).filter(k=>after[k]!==seq.before[k]);
  const preferred=Object.keys(a.gains).filter(k=>after[k]>seq.before[k]).sort((a,b)=>(after[b]-seq.before[b])-(after[a]-seq.before[a]));
  let line=lessonReview(id,seq);
  const lead=preferred[0]||(["건강","스트레스","의욕"].find(k=>after[k]!==seq.before[k]));
  if(seq.fallenIll)line="오늘은 여기까지입니다. 체온이 내려갈 때까지 다음 일정은 제가 물려 두겠습니다.";
  if(seq.bedridden)line=state.illness?"일정은 비워 두었습니다. 침대에서 일어나시려면 먼저 열이 내려야 합니다.":"오늘은 열이 내렸습니다. 다음 일정부터 다시 시작하셔도 됩니다.";
  if(!changed.length)line="오늘 기록은 지난 순과 같군요. 다음에는 다른 과목을 편성해 보시겠습니까, 도련님?";
  const note=lead?lead+' '+seq.before[lead]+' → '+after[lead]+' ('+signed(after[lead]-seq.before[lead])+')':"이번 순에는 수치 변화가 없습니다.";
  const rows=changed.map(k=>deltaRow(k,seq.before[k],after[k])).join('');
  const next=seq.index===2?(hasPendingVisit()?"자유행동으로":"월말로"):slotNames[seq.index+1]+"으로";
  return '<div class="review-room" style="background-image:url(&quot;'+sceneArt[choreography[id][0]]+'&quot;)"></div>'+
    '<img class="review-butler" src="assets/sebastian.webp" alt="세바스찬"><article class="review-bubble"><small>세바스찬</small><h2>'+a.name+(seq.grade==null?' · 강평':' · '+lessonGrades[seq.grade])+'</h2><p>'+line+'</p><b>'+note+'</b></article>'+
    '<section class="review-slip"><h3>'+slotNames[seq.index]+' 성과 <small>'+a.name+'</small></h3>'+rows+
    '<div>'+btn(next+'　›','next-turn:'+state.month+':'+seq.index,false,'primary')+'</div></section>';
}
