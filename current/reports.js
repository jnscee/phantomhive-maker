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
  const company=est.unit*state.qty+est.expenses, estate=overhead()-debt;
  return {tuition,company,estate,debt,trade:est.trade,total:tuition+company+estate+debt,revenue:est.revenue,closing:est.balance};
}
function amountRow(name,value,cls=""){
  return '<div class="amount-row '+cls+'"><span>'+name+'</span><strong>'+money(value)+'</strong></div>';
}
function tradeCosts(trade){
  function fee(label,value,note=""){
    return '<div><dt>'+label+'</dt><dd>'+money(value)+'</dd>'+(note?'<dd class="fee-rule">'+note+'</dd>':'')+'</div>';
  }
  return '<dl class="trade-fees">'+fee("설비 운영",trade.operation-(trade.guaranteeFee||0))+(trade.guaranteeFee?fee("거래 보증료",trade.guaranteeFee):"")+
    fee("운송",trade.freight,"소매·납품 합계 <strong>"+trade.freightAllowance+"</strong>개까지 무료<br>초과 <strong>1</strong>개당 <strong>£3</strong>")+
    fee("월말 보관",trade.holding,"전 품목 합산 <strong>8</strong>개까지 무료<br>초과 <strong>1</strong>개당 <strong>£1</strong>")+
    (trade.order?fee("미납 부담",trade.penalty,"예상 납품 "+trade.shipped+" / "+trade.order.qty+"개"):"")+
    (trade.contribution?fee("수익 분담금",trade.contribution,"가용 자금 "+money(profitContributionFloor)+"를 넘겨 남는 순이익에 단계 적용"):"")+'</dl>';
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
    ('<details class="expense-details"><summary>지출 내역·시설 효과</summary>')+'<div class="cash-detail">'+amountRow("저택 운영 · 시설 유지",b.estate)+amountRow("팬텀사 운영 · 생산비",b.company)+
    tradeCosts(b.trade)+amountRow("교육·활동비",b.tuition)+
    (b.debt?amountRow("채무 상환",b.debt):"")+'</div>'+
    contributionNote(investmentEffect(forecast()),state.accounts.researchSaved)+ '</details></section>';
}
function contributionNote(investment,research){
  if(!(investment?.total||research))return "";
  const items=[
    ["생산비 절감",investment?.production],
    ["매대 추가 매출",investment?.extraSales],
    ["운영·물류비 변화",investment?.overheadChange,true],
    ["포장 수익",investment?.wrapping],
    ["도안 웃돈",investment?.design],
    ["개발비 할인",research]
  ];
  const rows=items.filter(([,value])=>value).map(([label,value,isCost])=>{
    const tone=(isCost?-value:value)>0?"gain":"loss";
    return '<div><dt>'+label+'</dt><dd class="'+tone+'">'+(value>0?"+":"−")+money(Math.abs(value))+'</dd></div>';
  }).join("");
  return '<aside class="investment-result"><b>기본 시설 대비 '+money((investment?.total||0)+(research||0))+'</b>'+
    (rows?'<dl>'+rows+'</dl>':'')+'</aside>';
}
function actualBudget(){
  const r=state.report,a=state.accounts;
  if(!r)return "";
  const incomeRows=[
    ["팬텀사 소매 매출",r.income-(r.wholesale||0)],["거래처 납품 대금",r.wholesale],
    ["라우 상점 재고 매각",a.lauSales],["라우 상점 중고 교본 매각",a.lauBookSales],["설비 매각 대금",a.divest],["납품 선금",r.advance],["경영 행운 수입",a.windfalls],["경연 상금",r.festivalIncome],["대출 입금",a.borrowed]
  ];
  const debt=r.debtPayment||0;
  const expenseRows=[
    [r.debtPayment==null?"저택 유지·채무 합산":"저택 유지",r.bills-debt],["돌발 사건 지출",a.setbacks],["저택 개수·지원",a.estate],
    ["생산비",r.cost],["투자·사업 지출",a.company],["설비 운영",r.operating-(r.guaranteeFee||0)],["거래 보증료",r.guaranteeFee||0],["운송",r.freight],
    ["보관",r.storage],["미납 부담",r.penalty],["수익 분담금",r.contribution],["교육·활동비",r.training],["채무 상환",debt]
  ];
  const otherFees=(r.expenses||0)-(r.operating||0)-(r.freight||0)-(r.storage||0)-(r.penalty||0)-(r.contribution||0);
  if(otherFees)expenseRows.push(["기타 운영비",otherFees]);
  const total=rows=>rows.reduce((sum,[,amount])=>sum+(amount||0),0);
  const income=total(incomeRows),expense=total(expenseRows),change=state.fund-a.opening;
  const limit=Math.max(1,income,expense);
  function flow(title,amount,kind){
    return '<div class="ledger-flow '+kind+'"><span>'+title+'</span><strong>'+money(amount)+'</strong>'+
      '<i aria-hidden="true"><i style="width:'+100*amount/limit+'%"></i></i></div>';
  }
  function ledgerRows(label,items,kind){
    const rows=items.filter(([,amount])=>amount);
    return rows.length?'<div class="ledger-entries '+kind+'"><h4>'+label+'</h4><dl>'+
      rows.map(([name,amount])=>'<div><dt>'+name+'</dt><dd>'+money(amount)+'</dd></div>').join("")+'</dl></div>':"";
  }
  const signedMoney=n=>(n>0?"+":n<0?"−":"")+money(Math.abs(n));
  const other=change-(income-expense);
  const effect=contributionNote(r.investment,a.researchSaved);
  return '<section class="budget-book settlement-ledger"><h3>가문 회계</h3>'+
    '<div class="ledger-close"><span>월말 잔액</span><strong>'+money(state.fund)+'</strong></div>'+
    '<div class="ledger-opening"><span>'+(a.partial?"기록 시작 잔액":"월초 잔액")+' '+money(a.opening)+'</span>'+
    '<b class="'+(change>0?'gain':change<0?'loss':'flat')+'">'+signedMoney(change)+'</b></div>'+
    '<div class="ledger-flows">'+flow("입금",income,"income")+flow("지출",expense,"expense")+'</div>'+
    (other?'<div class="ledger-other"><span>내역 외 잔액 변동</span><b>'+signedMoney(other)+'</b></div>':'')+
    '<div class="ledger-detail-grid"><details class="ledger-fold"><summary>입출금 내역</summary>'+
    ledgerRows("입금",incomeRows,"income")+ledgerRows("지출",expenseRows,"expense")+
    (!income&&!expense?'<p>이번 달 입출금이 없습니다.</p>':'')+'</details>'+
    '<details class="ledger-fold"'+(effect?' open':'')+'><summary>시설 효과'+
    (effect?' <b>'+signedMoney((r.investment?.total||0)+(a.researchSaved||0))+'</b>':'')+'</summary>'+
    (effect||'<p>이번 달에 집계된 시설 효과가 없습니다.</p>')+'</details></div>'+
    (a.partial?'<p>기록 시작 시점부터 집계했습니다.</p>':'')+'</section>';
}
function deltaRow(key,before,after){
  const scale=statMax(key);
  const change=after-before, direction=change>0?"▲":change<0?"▼":"—";
  const tone=change===0?"flat":(key==="스트레스"?change<0:change>0)?"gain":"loss";
  return '<div class="delta-row '+tone+'" aria-label="'+statLabel(key)+' '+before+'에서 '+after+'로, 변화 '+signed(change)+'">'+
    '<span>'+statLabel(key)+'</span><small>'+before+'</small><b>'+after+'</b>'+
    '<i class="delta-meter" aria-hidden="true" style="--from:'+before/scale*100+'%;--to:'+after/scale*100+'%"><i></i><b></b></i>'+
    '<strong>'+direction+' '+(change===0?'0':signed(change))+'</strong></div>';
}
function logEffect(text){
  const cash=/^(매출|생산비|저택 유지·채무 상환|수익 분담금) (£[\d,]+(?:\.\d+)?)$/.exec(text);
  if(cash){
    const tone=cash[1]==="매출"?"gain":"loss";
    return cash[1]+' <strong class="log-'+tone+'">'+cash[2]+'</strong>';
  }
  const match=/^(.*?) ([+−-]?\d+|상승|하락)$/.exec(text);
  if(!match)return escapeHTML(statResultText(text));
  const [,label,value]=match;
  if(![...stats,"지구력","컨디션","건강","의욕","스트레스","가문 명성"].includes(label))return escapeHTML(statResultText(text));
  const change=value==="상승"?1:value==="하락"?-1:Number(value.replace("−","-"));
  const benefit=label==="스트레스"?-change:change;
  if(!benefit)return escapeHTML(statResultText(text));
  return '<span class="log-'+(benefit>0?"gain":"loss")+'">'+escapeHTML(statResultText(text))+'</span>';
}
function monthlyTimeline(entries){
  const items=entries.map(entry=>String(entry).split(' · ').filter(part=>!/^타나카 (?:협력 상승|신뢰 [+-]\d+)$/.test(part)).join(' · ')).filter(Boolean).map(entry=>{
    const match=/^(상순|중순|하순) · (.+?)(?: · (.*))?$/.exec(entry);
    if(!match)return '<li class="log-event">'+entry.split(/( · | \/ )/).map(logEffect).join('')+'</li>';
    const effects=match[3]?match[3].split(/ · | \/ /).map(effect=>'<span>'+logEffect(effect)+'</span>').join(''):'';
    return '<li class="log-period"><header><small>'+match[1]+'</small><b>'+escapeHTML(match[2])+'</b></header>'+
      (effects?'<div class="log-effects">'+effects+'</div>':'')+'</li>';
  });
  return '<ol class="report-timeline">'+items.join('')+'</ol>';
}
function monthlyReportWords(best,previous,current,growth){
  const highlight=value=>'<strong class="report-key">'+value+'</strong>';
  const stat=highlight(escapeHTML(translatedLine(statLabel(best))));
  const fund=highlight(money(state.fund));
  const sold=state.report?.sold;
  if(gameLanguage==="en"){
    const progress=growth>0
      ? `Your greatest improvement this month was in ${stat}, from ${highlight(previous)} to ${highlight(current)}. `
      : "Your abilities held steady this month. ";
    const sales=sold==null?"":`Funtom sold ${highlight(sold+" "+(sold===1?"item":"items"))}. `;
    return progress+sales+`You have ${fund} at your disposal next month, my lord.`;
  }
  if(gameLanguage==="ja"){
    const progress=growth>0
      ? `今月最も伸びたのは${stat}でございます。${highlight(previous)}から${highlight(current)}までお上げになりましたね。`
      : "今月の能力に大きな変化はございませんでした。";
    const sales=sold==null?"":`ファントム社の販売数は${highlight(sold+"個")}でございました。`;
    return progress+sales+`来月お使いいただけるのは${fund}でございます、坊ちゃん。`;
  }
  const growthLine=growth>0
    ?"이번 달에는 "+stat+"에서 가장 진전이 컸습니다. "+highlight(previous)+"에서 "+highlight(current)+"까지 올리셨군요. "
    :"이번 달 능력에는 큰 변동이 없었습니다. ";
  const salesLine=state.report?"팬텀사에서는 "+highlight(state.report.sold+"개")+"를 판매했습니다. ":"";
  return growthLine+salesLine+"도련님께서 다음 달에 쓰실 수 있는 돈은 "+fund+"입니다.";
}
function monthlyResults(){
  const before=state.accounts.stats,after=snapStats(state);
  const group=(title,keys)=>'<h4>'+title+'</h4>'+keys.map(k=>deltaRow(k,before[k],after[k])).join('');
  const healthWarning=criticalHealth(state)
    ?(state.unwell?"시엘은 아직 병상에서 일어나지 못하고 있습니다.":"시엘이 위독합니다. 곁에서 돌볼 사람이 필요합니다.")
    :relapseNotice(state)||(state.hp<31?"컨디션이 좋지 않습니다. 다음 달에는 휴식이나 왕진을 고려하세요.":"");
  const financeWarning=state.fund<=-144?"신용 한도를 넘겨 채권단이 가문의 결산을 요구했습니다.":state.fund<0
    ?(state.arrears?"두 달 연속 월말 잔액이 음수입니다. 파산을 피할 수 없습니다.":"월말 잔액이 음수입니다. 다음 월말에도 음수면 파산합니다.")
    :(state.fund<60?"다음 달 교육비와 생산비를 확인하세요.":"");
  const povertyNext=povertyAfterClosing(state);
  const moneyRemark=state.ill||povertyNext===state.poverty?"":povertyNext
    ?"시엘은 다음 달 초청장에 답을 쓰기 전에 우편 요금부터 확인했습니다."
    :"시엘이 차 주문서에 줄을 긋고 한 통을 더 적어 넣었습니다.";
  const warnings=[healthWarning,financeWarning].filter(Boolean).map(note=>'<p class="danger">'+note+'</p>').join("");
  const best=stats.slice().sort((a,b)=>(after[b]-before[b])/statMax(b)-(after[a]-before[a])/statMax(a))[0];
  const growth=after[best]-before[best];
  const words=monthlyReportWords(best,before[best],after[best],growth);
  const heading=translatedLine("세바스찬의 월말 보고");
  return '<div class="month-report"><div class="butler-account"><img src="assets/sebastian.webp" alt="세바스찬"><p><b>'+heading+'</b><br>'+words+(moneyRemark?' '+moneyRemark:'')+'</p></div>'+warnings+'<div class="report-date">'+monthText(state.month)+' 결산</div><div class="report-columns">'+
    '<section class="stat-folio"><h3>시엘의 성장 기록</h3><div class="delta-head"><span>항목</span><span>이전</span><span>현재</span><span>변화 그래프</span><span>증감</span></div>'+
    group("능력 · 500점",stats)+group("현재 상태 · 100점",["건강","스트레스","의욕"])+'</section>'+actualBudget()+'</div>'+thisMonthFairReport()+sampleReview()+
    '<details class="month-log"><summary>이달 일정·사건 기록</summary>'+monthlyTimeline(state.log)+'</details>'+
    '<div class="report-end">'+btn(state.month===state.duration?"작위 심의 확인":"다음 달로","advance",Boolean(sampleReview()),"primary")+'</div></div>';
}
const reviewLines={
  study:"풀이의 세 번째 줄을 보십시오. 이제 제가 여백에 힌트를 남길 필요가 없겠습니다.",
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
  exercise:"처음부터 끝까지 같은 너비로 디디셨습니다. 마룻바닥의 표시를 지워도 되겠군요.",
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
function nextSlotEvent(run){
  const seq=run.sequence;
  run.pending=seq.slotQueue?.shift()||null;
  if(!run.pending&&finnyMissing(run)&&!seq.onSickLeave&&(seq.activity||run.plan[seq.index])==="casework")
    run.pending="gardener";
  run.phase=run.pending?"slotEvent":"review";
}
// On a successful lesson the same achievement draws a different response as Ciel grows.
const butlerLessonPraise={
 study:["맞았습니다. 그럼 밑줄을 긋고, 다음 문장도 같은 식으로 읽어 보십시오.","이 구절은 혼자 푸셨군요. 어디서 실마리를 잡으셨습니까?","원문의 농담까지 살리셨군요. 제가 적어 둔 풀이는 접어 두지요.","이 문장에는 저도 한참 걸렸습니다. 도련님의 번역을 한 부 가져도 되겠습니까?"],
 etiquette:["찻잔을 소리 없이 놓으셨군요. 다음 잔도 그렇게 부탁드립니다.","손님이 말하는 동안 잔을 채우셨군요. 당사자는 눈치도 못 챘겠습니다.","이번 다과에는 제가 접시를 낼 차례조차 짚어 드릴 일이 없었군요.","오늘은 제가 손님이었던 덕을 봤군요. 마지막 한 모금까지 대접을 잘 받았습니다, 도련님."],
 riding:["거기서 멈추십시오. 지금처럼 어깨를 내리시면 됩니다.","고삐를 늦출 때를 잡으셨군요. 이번에는 제가 옆에서 걷겠습니다.","오늘은 제가 먼저 돌아가도 되겠군요. 말이 도련님 손만 기다리고 있습니다.","마지막 굽이를 제가 잘못 짚었군요. 도련님이 고르신 길로 돌아가겠습니다."]
};
function reviewMarkup(){
  const seq=state.sequence,id=seq.activity||state.plan[seq.index],a=actions[id],after=snapStats(state);
  const changed=Object.keys(after).filter(k=>after[k]!==seq.before[k]);
  const preferred=Object.keys(a.gains).filter(k=>after[k]>seq.before[k]).sort((a,b)=>(after[b]-seq.before[b])-(after[a]-seq.before[a]));
  const tired=a.stress>0&&(seq.before.건강<40||seq.before.스트레스>=fatigueThreshold(seq.before.체력)||seq.before.의욕<35);
  let line=reviewLines[id];
  if(seq.grade)line=lessonFeedback(id,seq.grade,seq.remark);
  if(seq.grade==="great"&&seq.remark===1&&butlerLessonPraise[id])line=butlerLessonPraise[id][sebastianRegard(state.stats)];
  if(seq.linkedFrom&&seq.grade!=="poor"){
    const lesson=escapeHTML(translatedLine(actions[seq.linkedFrom].name));
    if(gameLanguage==="en")line=`I see you have applied what you learnt in your previous session, ‘${lesson}’. I need hardly explain it again.`;
    else if(gameLanguage==="ja")line=`先日の「${lesson}」でお学びになったことを、ここで生かされましたね。改めてご説明するまでもございません。`;
    else line="지난 "+lesson+"에서 익히신 것을 여기 쓰셨군요. 따로 설명드릴 필요가 없겠습니다.";
  }
  if(!seq.grade&&tired)line="끝까지 자리를 지키셨군요. 다음 순에는 차를 일찍 올리겠습니다. 오늘은 평소보다 피로가 짙으셨습니다.";
  const lead=preferred[0]||(["건강","스트레스","의욕"].find(k=>after[k]!==seq.before[k]));
  if(!changed.length&&!seq.grade)line="오늘 기록은 지난 순과 같군요. 다음에는 다른 과목을 편성해 보시겠습니까, 도련님?";
  if(worriedAboutMoney(state)&&id==="rest")line="쉬시라고 비워 둔 오후였는데요. 도련님께서 석탄 배달표를 세 번이나 검산하셨더군요.";
  if(seq.onSickLeave)line=state.ill?"체온계를 여기 두겠습니다. 오늘 남은 일은 제가 물리겠습니다.":"열이 내렸습니다. 다음 일정은 아침 식사 뒤에 시작하지요.";
  else if(state.ill)line="오늘 수업은 여기까지입니다. 다음 선생님께는 제가 편지를 보내지요.";
  const note=lead?statLabel(lead)+' '+seq.before[lead]+' → '+after[lead]+' ('+signed(after[lead]-seq.before[lead])+')':"이번 순에는 수치 변화가 없습니다.";
  const rows=changed.map(k=>deltaRow(k,seq.before[k],after[k])).join('');
  const lastLesson=seq.index===(seq.contest?contestSlot-1:2);
  const next=lastLesson?(hasPendingVisit()?"자유행동으로":seq.contest?"하순 경연으로":"월말로"):slotNames[seq.index+1]+"으로";
  return '<div class="review-room" style="background-image:url(&quot;'+sceneArt[choreography[id][0]]+'&quot;)"></div>'+
    framedStanding("세바스찬","assets/sebastian.webp","review-butler")+'<article class="review-bubble"><small>세바스찬</small><h2>'+a.name+' · '+(lessonGrades[seq.grade]?.label||'강평')+'</h2><p>'+line+'</p><b>'+note+'</b>'+(seq.examNote?'<p>'+escapeHTML(statResultText(seq.examNote))+'</p>':'')+'</article>'+
    '<section class="review-slip"><h3>'+slotNames[seq.index]+' 성과 <small>'+a.name+'</small></h3>'+rows+
    '<div>'+btn(next,'next-turn:'+state.month+':'+seq.index,false,'primary')+'</div></section>';
}

// Each subject has another excellent result, two ordinary attempts and two setbacks.
const lessonRemarks={
  study:["각주에서 제가 일부러 틀린 연도를 찾으셨군요.","답은 맞습니다. 어떤 구절이 근거인지 짚어 보시겠습니까?","오늘은 목차까지만 정리해 두지요. 다음 장은 이어집니다.","같은 줄을 세 번 읽으셨습니다. 제가 소리 내어 읽어 드리지요.","연도 두 개가 뒤바뀌었습니다. 연표에 표시해 두겠습니다."],
  etiquette:["손님이 장갑을 떨어뜨린 사이에도 소개가 끊기지 않았습니다.","먼저 오신 분의 성함부터 부르시면 됩니다.","인사 각도는 좋았습니다. 이번엔 문 쪽을 보십시오.","아직 손님이 앉기 전입니다. 의자를 다시 당기지요.","두 분께 같은 자리를 권하셨습니다. 좌석표를 다시 드릴까요?"],
  accounts:["반품 한 건까지 찾아내시다니. 경리에게도 보여 줘야겠습니다.","합계는 맞습니다. 외상 건은 다음 칸입니다.","영수증 한 장만 남았습니다. 내일 이 줄에서 시작하지요.","파운드와 실링이 한 칸에 들어갔습니다. 선을 다시 긋지요.","반품도 매출에 넣으셨군요. 이 영수증은 빼겠습니다."],
  inquiry:["도장보다 먼저 종이의 접힌 자리를 보셨군요.","봉인 둘은 갈라 두셨습니다. 발신인 칸은 비워 두지요.","같은 필체라는 데까지는 저도 동의합니다.","등잔을 돌리니 긁힌 자리가 보이는군요. 다시 보시겠습니까?","그건 어제 제가 붙인 표찰입니다. 단서는 그 아래입니다."],
  riding:["제가 손을 떼었는데도 말이 같은 걸음으로 돌아왔습니다.","한 바퀴면 충분합니다. 오늘은 평보로 끝내지요.","고삐는 좋습니다. 어깨만 조금 내리십시오.","말이 먼저 멈췄군요. 오늘은 제가 내려 드리겠습니다.","발이 등자에서 두 번 빠졌습니다. 안장부터 다시 보지요."],
  letters:["한 문장으로 승낙과 사양을 다 쓰셨군요. 그대로 봉하겠습니다.","봉하기 전에 날짜만 다시 적으시면 됩니다.","첫 문장을 덜어내면 훨씬 자연스럽겠습니다.","이 봉투에는 다른 댁의 문장이 찍혔습니다.","오늘이 목요일인데 수요일에 가시겠다고 쓰셨습니다."],
  language:["원문에 없는 농담까지 알아들으셨군요.","뜻은 통했습니다. 마지막 어미를 한 번 더 읽어 보시지요.","세 문장 중 두 번째만 사전을 펴면 되겠습니다.","그 어미라면 초대한 사람이 도련님이 됩니다.","동사가 빠졌습니다. 편지는 잠시 제게 주십시오."],
  music:["줄 하나가 풀렸는데도 끝 음을 잡으셨군요.","네 마디는 잘 이어졌습니다. 다음은 쉼표입니다.","박자는 맞습니다. 활 끝까지 쓰셔도 됩니다.","제가 피아노를 멈춰도 활은 계속 가는군요.","오늘은 활을 내려놓고 리듬만 짚어 보지요."],
  dance:["제가 박자를 바꿨는데도 발을 밟지 않으셨습니다.","회전은 좋습니다. 마지막 발만 모아 주십시오.","다음 곡도 같은 속도로 청하겠습니다.","제 구두는 괜찮습니다. 왼발부터 다시 하시지요.","음악보다 한 걸음 앞서셨습니다. 잠시 멈추지요."],
  social:["말없이 앉아 있던 손님까지 웃게 하셨군요.","날씨 이야기는 무사히 끝났습니다. 다음 화제는요?","성함을 모두 기억하셨습니다. 오늘은 그걸로 충분합니다.","그분은 아직 소개를 받지 못하셨습니다.","작별 인사를 건네기엔 손님의 찻잔이 가득합니다."],
  negotiate:["값을 그대로 두고 운임까지 받아 내셨군요.","가격은 정했습니다. 납기는 아직 빈칸입니다.","서로 서명할 수 있는 데까지는 왔습니다.","상대가 부른 값이 우리 원가보다 낮습니다.","그 조건대로라면 우리가 운임을 두 번 냅니다."],
  exercise:["창가까지 같은 걸음이었습니다. 제 시계를 보실 필요도 없군요.","체조실을 한 번 왕복하셨습니다. 다음엔 숨을 더 길게 내쉬십시오.","오늘은 창문 셋째 칸까지입니다. 거리가 조금씩 늘고 있군요.","걸음이 자꾸 짧아집니다. 의자는 제가 가져오겠습니다.","숨을 참으셨군요. 발판을 치우고 창가에서 쉬시지요."],
  practicum:["원장에 없는 영수증부터 골라내셨습니다.","날짜는 맞습니다. 거래처별로 한 번 더 나누지요.","미결 전표 한 장은 내일까지 두겠습니다.","합계에 같은 영수증이 두 번 들어갔습니다.","수금 전표가 지출 쪽에 있습니다. 색실을 끼워 둘까요?"],
  developToy:["수레가 턱을 넘었습니다. 이번 축은 견본으로 남기지요.","바퀴는 굴러갑니다. 손잡이는 조금 더 다듬지요.","첫 견본으로 충분합니다. 아이가 쥘 자리를 표시해 두겠습니다.","바퀴를 끼우니 뚜껑이 열리지 않는군요.","왼쪽으로만 도는 수레입니다. 자를 다시 대 보십시오."],
  supplier:["뒷면의 흠까지 보셨군요. 좋은 견본을 고르셨습니다.","견본은 받았습니다. 납품일은 서신으로 확인하지요.","두 집의 가격을 받아 적으셨군요. 돌아가서 대조하겠습니다.","문을 닫았군요. 다음번엔 영업시간부터 묻지요.","그 견본은 다른 상회의 것입니다. 표찰을 보십시오."],
  estateWork:["비가 오기 전에 지붕 수선이 끝나겠습니다.","서명이 한 장 남았습니다. 이쪽입니다.","오늘 올라온 요청은 날짜대로 묶어 두셨군요.","주방 요청서에 정원사의 이름이 적혀 있습니다.","같은 수선에 견적이 두 장 나갔군요. 하나는 회수하지요."],
  reception:["손님이 먼저 도련님 곁자리를 청하셨습니다.","첫 인사는 마쳤습니다. 창가에 한 분 더 계십니다.","오늘 들은 성함을 마차 안에서 적어 두시지요.","등 뒤에서 두 번이나 부르셨습니다. 이쪽입니다.","그 잔은 아까 인사를 나눈 분의 것입니다."],
  casework:["증언 한 줄로 약도의 빈자리가 메워졌군요.","골목의 길이는 쟀습니다. 시간은 더 확인해야겠습니다.","목격자를 한 사람 만났습니다. 원문대로 적어 두지요.","길모퉁이 둘이 같은 모양입니다. 방향을 다시 표시하지요.","방금 적으신 시각은 종소리보다 앞섭니다."]
};
function lessonFeedback(id,grade,variant=0){
  const lines=lessonRemarks[id];
  if(!lines)return reviewLines[id];
  if(grade==="great")return variant?lines[0]:reviewLines[id];
  return lines[(grade==="steady"?1:3)+Number(Boolean(variant))];
}
const pupilReplies={
  great:["“다음 것도 내놔. 아직 시간이 남았잖아.”","“방금 건 내 방식대로 했어. 그래도 맞지?”"],
  steady:["“여기까진 알겠어. 그다음은?”","“잠깐. 한 번만 더 해 보고.”"],
  poor:["“그 부분에서 또 걸렸군. 어디서부터 틀렸지?”","“……보고만 있지 말고, 처음 것부터 다시 줘.”"]
};
function lessonPlayback(id,grade,variant){
  return choreography[id][4]+" "+pupilReplies[grade][Number(Boolean(variant))];
}
