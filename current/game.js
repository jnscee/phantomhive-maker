"use strict";

const commands = [
  ["tab:plan","일정표"],["run","실행"],["tab:estate","관리 · 경영"],["tab:market","상점"],["tab:chat","대화"],["tab:status","상태"]
];
const cap=(value,max=100)=>Math.min(max,Math.max(0,value));
const money=value=>"£"+value.toLocaleString("en-GB");
const signed=value=>value>0?"+"+value:String(value);
function emptyPlan(){return [null,null,null];}
function scheduledActivities(run,contest=reservedContest(run)){
  return contest?run.plan.slice(0,contestSlot):run.plan;
}
function planReady(){
  return state.plan.length===3&&scheduledActivities(state).every(id=>Object.hasOwn(actions,id))&&canVisit(state.visit);
}
function courseTuition(run,id){
  if(!actions[id])return 0;
  const base=actions[id].cost;
  if(advancedCourse(run,id))return Math.ceil(base*1.15);
  return trainingTradeoffs[id]?Math.floor(base*.85):base;
}
function plannedTuition(){
  return scheduledActivities(state).reduce((sum,id)=>sum+courseTuition(state,id),0);
}
function careActivity(run,planned){return run.ill && planned!=="rest" && planned!=="recovery"?"recovery":planned;}
function initial(){
  return startAccounts({owlSeed:Math.floor(Math.random()*0x100000000),v:1,unifiedAbilityCaps:true,abilityScale:abilityMax,duration:35,people:{},jobs:{},annex:{bedroom:1,garden:1,guard:1,quarters:1},month:1,phase:"contract",openingLine:0,openingEdition:3,storyPageEdition:2,fund:500,hp:76,stress:20,motivation:70,
    stats:{지성:18,기품:14,매력:8,경영:5,통찰:30,의지:125,체력:50},
    planMonth:1,plan:emptyPlan(),visit:null,level:{library:1,parlor:1,kitchen:1},staff:null,
    shop:{design:1,works:1,store:1},salesBook:[],productHistory:{},fineStock:{},order:null,
    product:"toys",unlocked:["toys"],quality:"standard",price:14,qty:15,stock:Object.fromEntries(Object.keys(products).map(id=>[id,0])),
    trust:1,royal:0,renown:0,flags:{},events:[],past:[],log:[],pending:null,ending:null,
    debt:0,unwell:0,relapseStage:0,arrears:0,poverty:false,usedLoan:false,counts:{},advancedStudy:{},foundation:0,linkFrom:null,linkMonth:0});
}
const previewQuery=new URL(document.baseURI).searchParams;
const previewFair=previewQuery.has("fair-preview")?(contests.find(f=>f.id===(previewQuery.get("fair-preview")==="newYear-1886"?"newYear-1887":previewQuery.get("fair-preview")))||contests[0]):null;
const previewStory=previewQuery.get("story-preview");
const previewSetback=monthlySetbacks.find(item=>item.id===previewStory);
const previewCompanyCase=companyCases.find(item=>item.id===previewStory);
const storyDemo=Boolean(previewSetback||previewCompanyCase)||Object.hasOwn(middleObservations,previewStory);
const storageKey="earl-phantomhive-maker-v1";
let saves, storageOk=true;
try{ saves=previewFair||storyDemo?{}:JSON.parse(localStorage.getItem(storageKey)||"{}"); }catch{ storageOk=false; }
if(!saves || typeof saves!=="object")saves={};
let state=saves.auto?.v===1?saves.auto:initial();
state=structuredClone(state);
let tab="title";
let selectedSlot=0;
let editingVisit=false;
const $=id=>document.getElementById(id);
observePortraitStage($("scene"));
function illnessLimits(run){
  const stamina=Math.round(65+25*run.stats.체력/statMax("체력")+10*run.hp/100);
  const spirit=Math.round(65+35*run.motivation/100);
  return {stamina,spirit,onset:Math.min(stamina,spirit)};
}
function overworkLoss(stress,activity){
  return activity.stress>0?Math.ceil(Math.max(0,stress-70)/3):0;
}
// Ciel feels the household's finances after the books close. Recovery has its own threshold.
function povertyAfterClosing(run,balance=run.fund){
  if(run.poverty)return balance<150;
  const willLimit=150+60*(campaignAge(run)-10);
  return balance<=50 && run.stats.의지<willLimit;
}
function worriedAboutMoney(run){return Boolean(run.poverty && !run.ill);}
function cielCondition(run){return run.ill?"병중":run.poverty?"가난":"";}
function updateIllness(run){
  if(run.hp<=35 && run.stress>=illnessLimits(run).onset)run.ill=true;
  else if(run.hp>=50 && run.stress<=60)run.ill=false;
}
function persist(){
  if(tourSession||previewFair||storyDemo)return;
  updateIllness(state);
  saves.auto=structuredClone(state);
  writeSaveBook(saves);
}
function writeSaveBook(book){
  try{localStorage.setItem(storageKey,JSON.stringify(book));}catch{storageOk=false;}
}
function flash(message){ $("flash").textContent=message; }
function btn(label,action,disabled=false,style=""){
  return '<button type="button" class="'+style+'" data-action="'+action+'" '+(disabled?"disabled":"")+'>'+label+'</button>';
}
const masteryThreshold=485;
const masteryFinish=497;
function ordinaryAbilityGain(current,gain){
  return Math.min(gain,Math.max(0,masteryFinish-current));
}
function lessonGain(key,current,base,month,flags=state.flags,primarySuccess=false,foundation=state.foundation||0){
  const rate=1.1+Math.min(month-1,12)*0.065;
  const max=statMax(key);
  const mastery=Math.max(.14,1-Math.max(0,current-280)/235);
  const polish=1-.45*cap((current-450)/50,1);
  const foundationRate=.24+.90*Math.min(1,foundation/24);
  const advancedRate=1-(1-foundationRate)*cap((current-460)/30,1);
  const raw=base*rate*mastery*polish*max/abilityMax;
  const gain=Math.max(primarySuccess?1:0,Math.round(raw*advancedRate));
  const remaining=max-current;
  if(flags.lateDispatch&&primarySuccess){
    return Math.min(remaining,gain,Math.max(0,masteryFinish-current)+2);
  }
  const ordinary=ordinaryAbilityGain(current,gain);
  if(flags.lateDispatch)return ordinary;
  const beforeMastery=Math.max(0,masteryThreshold-current);
  return Math.min(ordinary,beforeMastery+1);
}
function deltaTone(name,delta){
  if(!delta)return "steady";
  const burden=name==="스트레스"||name==="채무";
  return (burden?delta<0:delta>0)?"gain":"loss";
}
function previewDelta(delta){
  if(!delta)return "–";
  const size=Math.abs(delta);
  const count=size<=5?1:size<=12?2:3;
  const arrows=(delta>0?"▲":"▼").repeat(count);
  const label=["","소폭","중간","대폭"][count]+(delta>0?" 상승":" 하락");
  return '<span role="img" aria-label="'+label+'">'+arrows+'</span>';
}
function scheduleNote(id){
  const a=actions[id];
  const projection=projectTraining(selectedSlot);
  updateIllness(projection);
  const actual=careActivity(projection,id);
  const hp=projection.hp,stress=projection.stress,prior={...projection.stats};
  applyActivity(projection,actual,"steady",id);
  if(actual!==id)return "병환 · "+actions[actual].name+" 예정";
  const keys=Object.keys(a.gains);
  if(trainingTradeoffs[id]&&!advancedCourse(projection,id))keys.push(trainingTradeoffs[id]);
  const effects=keys.map(k=>[k,projection.stats[k]-prior[k]]);
  if(projection.hp!==hp)effects.push(["건강",projection.hp-hp]);
  effects.push(["스트레스",projection.stress-stress]);
  const markers=effects.filter(([,delta])=>delta!==0).map(([name,delta])=>
    '<span class="plan-effect">'+escapeHTML(statLabel(name))+' <b class="'+deltaTone(name,delta)+'">'+previewDelta(delta)+'</b></span>');
  return '<span class="plan-effects">'+markers.join(" ")+'</span>';
}
function forecast(shop=state.shop){
  const p=products[state.product];
  const quality=state.quality==="fine";
  const season=(state.month-1)%12;
  const baseline=p.demand[season%6]+(season>=9?3:0)+(state.month>6?2:0);
  const terms=businessTerms(state,state.product);
  const market=marketShifts[state.marketShift];
  const shift=market?.products.includes(state.product)?market:null;
  const baseUnit=Math.max(Math.ceil(p.unit*.65),p.unit+terms.cost+(quality?3:0)-(shop.works-1)-terms.skill-Math.min(2,Math.floor(state.stats.경영/100)));
  const unit=Math.max(1,baseUnit+(shift?.cost||0));
  const design=state.productNotes?.[state.product];
  const appeal=design?((design.brief==="gift"&&season>=9)?3:1)+(design.reworked?1:0):0;
  const reputation=Math.floor(productHistory(state,state.product).reputation/5);
  const premium=terms.premium+(quality?2:0);
  const demand=Math.max(0,baseline+(shift?.demand||0)+appeal+londonPlan(state).power.salon+terms.reach+reputation-terms.pressure+fairDemand(state,state.product)+businessTailwind(state.product).bonus
    +(historicalTradeEvents[state.month]?.demand[state.product]||0)+(state.month===31&&state.product==="toys"?-3:0)
    +(shop.store-1)*2+Math.min(3,Math.floor(state.stats.경영/80))+(state.visit==="town"?2:0)
    -Math.round((state.price-p.price-premium)*1.9));
  const receipt=state.price+(shop.design-1)+(shop.store-1);
  return supplyPlan(state,shop,demand,unit,receipt);
}
function investmentEffect(order){
  const base=forecast({design:1,works:1,store:1});
  // Decompose the gain without counting a sale or production saving twice.
  const production=(base.unit-order.unit)*state.qty;
  const extraSales=(order.sold-base.sold)*state.price;
  const wrapping=(state.shop.store-1)*order.sold;
  const design=(order.receipt-state.price)*order.sold-wrapping;
  const overheadChange=order.expenses-base.expenses;
  return {production,extraSales,design,wrapping,overheadChange,total:order.margin-base.margin};
}
function overhead(){
  return (weatherFor(state)?.fee||0)+36+Object.values(state.annex||{}).reduce((v,l)=>v+Math.max(0,l-1)*2,0)-(state.annex.guard-1)*8-(Object.entries(state.jobs).filter(([,r])=>r==="guard").length*2)-(shiftAssigned("guard")?1:0)+Object.values(state.level).reduce((sum,l)=>sum+l*4,0)+Math.min(24,state.debt)-(state.houseCare==="defer"?8:0);
}
function cashNeeded(){
  return plannedTuition()+state.qty*forecast().unit;
}
function businessTailwind(id){
  const season=(state.month-1)%12;
  const audience={toys:"가족",plush:"어린이",game:"가족",sweets:"다과회",candy:"어린이",hamper:"선물"};
  const trend=["가족","어린이","다과회","어린이","가족","다과회","어린이","가족","다과회","가족","선물","선물"][season];
  return {audience:audience[id],trend,bonus:state.month===1?0:(audience[id]===trend?3:0)+(id==="hamper"&&season>=10?2:0)};
}
function changeStat(name,value){state.stats[name]=cap(state.stats[name]+ordinaryAbilityGain(state.stats[name],value),statMax(name));}
function flagEvent(id,effect){
  state.flags[id]=true;
  effect();
}
const events=foundationEvents().concat(initialEvents(),examEvents(),scriptedEvents(),calendarEvents(),finalYearDecisions(),followupEvents(),appliedExams(),portfolioEvents(),visitorEvents(),setbackEvents(),companyCaseEvents(),authoredStoryEvents(),contestArchive.map(contestEvent)).map(appendAuthoredOptions);

function pendingEvent(){
  return events.find(event=>event.id===state.pending);
}
function execute(){
  if(state.phase!=="plan"||!planReady())return;
  state.log=[];
  const contest=reservedContest(state);
  if(contest)state.plan[contestSlot]=null;
  state.past.push({month:state.month,plan:[...state.plan],...(contest?{contest:contest.id}:{})});
  const order=forecast();
  state.sequence={index:0,contest:contest?.id,bookedFees:state.plan.map(id=>courseTuition(state,id)),trainingPaid:0,unit:order.unit,demand:order.demand,receipt:order.receipt,trade:order.trade,retailSold:order.sold,investment:investmentEffect(order),opening:{fund:state.fund,hp:state.hp,stress:state.stress,motivation:state.motivation,stats:{...state.stats}}};
  enterSlot();
}
// A stable per-campaign draw for each eligible month, including after loading a save.
const owlMonthlyChance=0.25;
function monthlyDraw(run, salt=0){
  let h=((run.owlSeed^salt)+Math.imul(run.month,0x9e3779b9))>>>0;
  h=Math.imul(h^(h>>>16),0x85ebca6b);
  h=Math.imul(h^(h>>>13),0xc2b2ae35);
  return ((h^(h>>>16))>>>0)/0x100000000;
}
function owlAppears(run){
  if(run.duration!==35||!run.people.finny||run.people.mey||run.flags.maid)return false;
  return run.month>=22 || monthlyDraw(run)<owlMonthlyChance;
}
const lastTanakaMonth=24; // December 1887
function canTanakaReturn(run){
  return run.duration===35 && !run.flags.homecoming &&
    !run.people.tanaka && !!(run.people.finny&&run.people.mey&&run.people.bard);
}
function tanakaReturns(run){
  // Equal chance for each remaining month, including the month Bard moves in.
  return canTanakaReturn(run)&&(run.month>=lastTanakaMonth || monthlyDraw(run,0x54414e41)<1/(lastTanakaMonth-run.month+1));
}
function canReceiveSnake(run){
  return run.duration===35 && run.flags.townhouse && run.people.soma && run.people.agni && !run.people.snake;
}
function scheduleSnakeVisit(run){
  if(!canReceiveSnake(run)||Number.isInteger(run.snakeArrivalMonth))return;
  const monthsLeft=Math.min(3,run.duration-run.month+1);
  run.snakeArrivalMonth=run.month+Math.floor(monthsLeft*monthlyDraw(run,0x534e414b));
}
function dueSnakeVisit(run){
  if(!canReceiveSnake(run)||!Number.isInteger(run.snakeArrivalMonth)||run.month<run.snakeArrivalMonth)return null;
  return run.flags.circus||run.flags.snakeSafe?"snakeReturn":"circus";
}
// Also serves unfinished older saves that have already passed a deadline.
function overdueArrival(run){
  if(run.duration!==35)return null;
  if(run.month>=13&&finnyMissing(run))return "gardener";
  if(run.month>=22&&owlAppears(run))return "maid";
  if(run.month>=23&&run.people.finny&&run.people.mey&&!run.people.bard&&!run.flags.cook)return "cook";
  if(run.month>=24&&canTanakaReturn(run))return "homecoming";
  return dueSnakeVisit(run);
}
function settleMonth(){
  if(prepareContest(state))return;
  const duel=state.sequence.duel;
  const {unit,demand,receipt=state.price,investment,opening:before,sickAbsence,strainedRide}=state.sequence;
  const trainingPaid=state.sequence.trainingPaid??state.plan.reduce((sum,id)=>sum+(actions[id]?.cost||0),0);
  const visitAdvance=state.sequence.visitAdvance||0;
  const trade=state.sequence.trade,retailSold=state.sequence.retailSold??state.sequence.sold;
  delete state.sequence;
  state.neglect=state.houseCare==="defer"?(state.neglect||0)+1:Math.max(0,(state.neglect||0)-1);
  if(state.neglect>=2){state.renown=Math.max(0,state.renown-1);state.log.push("관리 지연 · 가문 명성 하락");}
  settleLondon(state);
  trainHousehold(state);
  applyEstateTraining(state);
  const contest=settleFestival(state,duel);
  const festivalIncome=contest?state.fairBook[contest.id].purse:0;
  const assessment=houseValues();
  if(state.houseCare==="clean"&&assessment.청결>=70)state.hp=cap(state.hp+2);
  if(state.houseCare==="repair")state.neglect=Math.max(0,state.neglect-1);
  if(state.houseCare==="guard"&&assessment.보안>=65)state.renown+=state.month%4===0?1:0;
  if((state.staff==="parlor"||shiftAssigned("parlor"))&&state.plan.includes("etiquette"))state.renown+=1;
  const care=plannedCareLevel(state);
  const stillFrail=state.relapseStage>0 && state.hp<50;
  const vulnerable=care===0 ? state.hp<=65 || state.relapseStage>0 : state.hp<50;
  if(care<2 && (stillFrail || (sickAbsence && vulnerable))){
    state.relapseStage=Math.min(2,(state.relapseStage||0)+1);
  }else state.relapseStage=0;
  const product=state.product;
  const sold=trade?retailSold:Math.min(demand,state.stock[product]+state.qty);
  if(trade)recordTrading(state,product,sold,trade);
  else{
    // A turn already in progress in an older save keeps its signed estimate.
    state.stock[product]+=state.qty-sold;
    state.fineStock[product]=state.quality==="fine"?state.stock[product]:Math.min(state.stock[product],state.fineStock[product]||0);
    const line=productHistory(state,product);
    state.productHistory[product]={...line,units:line.units+sold,reputation:Math.min(20,line.reputation+(sold>=6?1:0))};
  }
  const expenses=trade?trade.holding+trade.penalty+trade.operation+(trade.freight||0):0;
  const income=sold*receipt+(trade?.wholesale||0);
  const cost=unit*state.qty;
  const debtPayment=Math.min(24,state.debt),bills=overhead();
  if(state.debt>0)state.debt=Math.max(0,state.debt-24);
  state.fund+=income-cost-bills-expenses;
  // Paid sales and supply contracts belong to Funtom. Scheduled work only trains Ciel.
  state.salesBook.push({month:state.month,product,sold,revenue:income,cost,advance:visitAdvance,investment,expenses,wholesale:trade?.wholesale||0,delivery:trade?.order?{...(trade.order.tradeMonth?{tradeMonth:trade.order.tradeMonth}:{}),id:trade.order.id,shipped:trade.shipped,qty:trade.order.qty}:null});
  state.report={weather:state.weather,income,festivalIncome,cost,expenses,storage:trade?.holding||0,freight:trade?.freight||0,operating:trade?.operation||0,guaranteeFee:trade?.guaranteeFee||0,penalty:trade?.penalty||0,wholesale:trade?.wholesale||0,advance:visitAdvance,bills,debtPayment,sold,before,investment,training:trainingPaid};
  if(sold>=14&&income>cost+expenses+25)state.renown+=1;
  if(tradeNews(state))state.log.push(tradeNews(state));
  state.log.push(products[product].name+" "+sold+"개 소매 · 매출 "+money(sold*receipt)+" / 생산비 "+money(cost)+" / 재고 "+state.stock[product]+"개");
  state.log.push("저택 유지·채무 상환 "+money(bills));
  if(trade?.order)state.log.push(tradeBuyer(trade.order)+" 납품 "+trade.shipped+"/"+trade.order.qty+"개 · "+money(trade.wholesale)+(trade.short?" · 미납 부담금 "+money(trade.penalty):""));
  if(state.flags.market&&state.marketMonth!==state.month){state.flags.market=false;state.renown+=1;}
  scheduleSnakeVisit(state);
  const candidates=events.filter(e=>!e.companyCase&&!e.authored&&!e.slot&&!e.examSubjects&&!e.season&&!e.household&&!e.visitOnly&&!(e.visitPlace===state.visit&&state.visitTurn===state.month)&&!state.flags[e.id]&&e.sees(state));
  const event=state.duration===35?(candidates.find(e=>birthdayDialogue[e.id]&&[12,24].includes(state.month))||candidates.find(e=>e.chapter)||candidates[0]):candidates.find(e=>!e.chapter);
  const seasonal=state.duration===35?events.find(e=>e.season&&e.sees(state)&&!state.flags[e.id]):null;
  const queue=[contest&&"contest-"+contest.id,event?.id,seasonal?.id].filter(Boolean);
  for(const e of events){
    if(e.household&&(state.duration===35||e.id==="visitPrince")&&!state.flags[e.id]&&e.sees(state))queue.push(e.id);
  }
  if(owlAppears(state))queue.push("maid");
  const overdue=overdueArrival(state);
  if(overdue&&!queue.includes(overdue))queue.push(overdue);
  queue.push(...events.filter(e=>e.authored&&!state.flags[e.id]&&e.sees(state)).map(e=>e.id));
  const inquiry=dueCompanyCase(state);
  if(inquiry)queue.push(inquiry.id);
  const setback=drawMonthlySetback(state,Boolean(strainedRide));
  if(setback)queue.push(setback);
  state.pending=queue.shift()||null;
  state.eventQueue=queue;
  state.phase=state.pending?"event":"result";
  persist();render(true);
}
function recordContractAdvance(amount){
  if(state.phase==="visit"&&state.sequence){
    state.sequence.visitAdvance=(state.sequence.visitAdvance||0)+amount;
    state.fund+=amount;
    return;
  }
  // A pending negotiation can also be resumed from an older save.
  const report=state.report;
  let row=state.salesBook.find(entry=>entry.month===state.month);
  if(!row){
    row={month:state.month,product:state.product,sold:report.sold,revenue:report.income,cost:report.cost,advance:0};
    state.salesBook.push(row);
  }
  row.advance+=amount;
  report.advance=(report.advance||0)+amount;
  state.fund+=amount;
}
const choiceMilestones={
  keys:"서재 관리 권한 인수",deed:"가문 증빙 확보",market:"시장 거래 기록",audit:"회계 감사 기록",
  lateDispatch:"두 번째 종합 실기 완료 · 주력 과목의 심화 수련 해금",
  lookout:"망보기 기록",postmark:"소인 기록",agniLesson:"아그니와의 집사 교류 기록",agniTea:"아그니와의 다과 기록",
  carrierSpace:"정기 운송 4자리 확보",checkedReceipt:"영수증 확인",sharedReceipt:"영수증 공유",teaBlend:"차 배합 기록",morningGloves:"아침 장갑 기록"
};
function choiceSnapshot(){
  const values={...snapStats(state),"가문 자금":state.fund,"가문 명성":state.renown,"왕실 평가":state.royal,"신뢰":state.trust,"채무":state.debt};
  const milestones=new Set();
  for(const [id,person] of Object.entries(servants)){
    values[person.name+"의 신뢰"]=state.people[id]?.toward||0;
    if(state.people[id])milestones.add(person.name+" 합류");
  }
  for(const [id,label] of Object.entries(choiceMilestones))if(state.flags[id])milestones.add(label);
  for(const [id,name] of Object.entries(visits))if(canVisit(id))milestones.add(name+" 방문 가능");
  for(const id of state.unlocked)milestones.add(products[id].name+" 판매 가능");
  return {values,milestones};
}
function showChoiceImpact(label,before){
  const after=choiceSnapshot();
  const rows=Object.entries(after.values).filter(([name,value])=>value!==before.values[name])
    .map(([name,value])=>({name,before:before.values[name],value}));
  const notes=[...after.milestones].filter(note=>!before.milestones.has(note));
  if(!rows.length&&!notes.length)return;
  const owner=tab==="chat"?"chat":"plan";
  if(state.choiceImpact?.owner!==owner||state.choiceImpact.month!==state.month)
    state.choiceImpact={owner,month:state.month,items:[]};
  state.choiceImpact.items.push({label,rows,notes});
}
function openChoiceImpact(next){
  const impact=state.choiceImpact;
  if(!impact||impact.owner!==tab||impact.month!==state.month)return false;
  impact.next=next;persist();render(true);return true;
}
function impactMarkup(impact){
  const changes=new Map(),notes=new Set();
  for(const item of impact.items){
    for(const row of item.rows){
      changes.set(row.name,{...row,before:changes.get(row.name)?.before??row.before});
    }
    for(const note of item.notes)notes.add(note);
  }
  const lines=[...changes.values()].filter(row=>row.before!==row.value).map(({name,before,value})=>{
    const delta=value-before;
    const cash=name==="가문 자금"||name==="채무";
    const limit=stats.includes(name)?abilityMax:Math.max(100,Math.abs(before),Math.abs(value));
    const low=Math.max(0,Math.min(before,value))/limit*100;
    const high=Math.max(0,Math.max(before,value))/limit*100;
    const unit=cash?"£":"";
    return '<li class="'+deltaTone(name,delta)+'"><span>'+escapeHTML(statLabel(name))+'</span><small>'+unit+before+' → '+unit+value+'</small><strong>'+signed(delta)+'</strong><i class="impact-track" aria-hidden="true" style="--low:'+low+'%;--high:'+high+'%"></i></li>';
  }).join("");
  const blocks='<ul>'+lines+'</ul>'+[...notes].map(n=>'<p>'+escapeHTML(n)+'</p>').join("")+(!lines&&!notes.size?'<p>능력치 변화 없음</p>':'');
  const heading=impact.setback?"사건 결과":"선택 결과";
  return '<article id="impact-summary" class="dialogue" aria-label="'+heading+'"><header>'+heading+'</header><div class="impact-scroll">'+blocks+'</div>'+btn("확인","impact-close",false,"primary")+'</article>';
}
function choose(index){
  const event=pendingEvent();
  const choice=event?.choices[index];
  if(!["event","slotEvent"].includes(state.phase)||!choice||(choice.when&&!choice.when(state)))return;
  const isRecruit=Object.hasOwn(recruitScenes,event.id);
  if(isRecruit&&recruitPage(event.id)!==recruitReadingOrder(event.id,Boolean(state.people.tanaka)).at(-1))return;
  const pages=termPages(event);
  if((event.setback&&state.flags[event.id])||state.termOutcome||(pages&&(state.termPage||0)<pages.length-1))return;
  const scriptedOutcome=pages&&(event.authored||!event.lines||observedLines(event));
  const examBefore=event.exam||scriptedOutcome?snapStats(state):null;
  const before=choiceSnapshot();
  flagEvent(event.id,choice.effect);
  showChoiceImpact(choice.label,before);
  if(event.setback&&state.choiceImpact)state.choiceImpact.setback=true;
  let examNote="";
  if(examBefore){
    const after=snapStats(state);
    const changes=Object.keys(after).filter(k=>examBefore[k]!==after[k])
      .map(k=>statLabel(k)+" "+signed(after[k]-examBefore[k]));
    examNote=choice.result+" · "+(changes.join(" / ")||"이미 상한에 도달했습니다.");
    if(state.sequence)state.sequence.examNote=examNote;
  }
  if(isRecruit)delete state.recruitPage;
  state.events.push({id:event.id,index,month:state.month,...(examNote?{examNote}:{}),...(isRecruit?{edition:"canonical",age:currentCielAge()}:{}),...(event.id==="visitPrince"?{hadTanaka:Boolean(state.people.tanaka)}:{})});
  state.log.push(examNote||choice.result);
  if(scriptedOutcome||choice.response){
    state.termOutcome={id:event.id,index,note:choice.response?"":examNote,response:choice.response,responseLines:choice.responseLines,nextScene:choice.nextScene};
    state.termPage=0;persist();render(true);return;
  }
  if(!openChoiceImpact("event"))finishEventChoice(event);
}
function finishEventChoice(event){
  if(storyDemo){location.reload();return;}
  delete state.termPage;delete state.termOutcome;
  state.pending=null;
  if(state.sequence?.readingVisitOutcome){
    delete state.sequence.readingVisitOutcome;
    state.phase="visit";finishVisit();return;
  }
  if(event.id==="visitPrince"&&state.recruitReturn==="estate"){
    delete state.recruitReturn;state.phase="plan";tab="estate";persist();render(true);return;
  }
  if(event.id==="gardener"&&state.recruitReturn==="plan"){
    delete state.recruitReturn;state.phase="plan";tab="home";persist();render(true);return;
  }
  if(state.phase==="slotEvent"){
    nextSlotEvent(state);persist();render(true);
    return;
  }
  state.pending=state.eventQueue?.shift()||null;
  if(!state.pending)state.pending=overdueArrival(state);
  if(!state.pending&&tanakaReturns(state))state.pending="homecoming";
  if(!state.pending&&townhouseGuestsDue(state))state.pending="visitPrince";
  state.phase=state.pending?"event":state.recruitReturn==="vow"?"vow":"result";
  if(!state.pending)delete state.recruitReturn;
  persist();render(true);
}
function qualifies(){
  return titleRequirements().every(Boolean);
}
function finish(id){
  state.ending=id;state.endingBeat=0;state.phase="ending";
  saves.gallery??={};
  saves.gallery[id]=endingLabels[id][0];
  rememberCG("assets/endings/"+id+".webp");
  saves.farewellGallery??={};
  saves.farewellGallery[id]=endingFarewellRecord(state);
  if(id==="vowNoTitle")saves.londonCareer=londonCareer(state);
  saves.growthGallery??={};
  saves.growthGallery[id]=growthRecord(state);
  persist();render(true);
}
function isApprovedEnding(id){return id==="vowTitle"||id==="releaseTitle";}
// Above the title review's own will minimum so both approved endings are reachable.
const vengeanceWill=460;
function cielEndingId(will,approved){
  if(will>=vengeanceWill)return approved?"vowTitle":"vowNoTitle";
  return approved?"releaseTitle":"releaseNoTitle";
}
function beginFinale(id){
  if(!isApprovedEnding(id)){finish(id);return;}
  state.ending=id;state.phase="investiture";persist();render(true);
}
function finnyMissing(run){
  return run.duration===35&&!run.people.finny&&!run.flags.gardener;
}
function startFinnyAtTurn(run){
  if(run.phase!=="plan"||!finnyMissing(run))return;
  // Completed schedules in an older save can establish the same chronology.
  const previouslyEligible=run.past.some(e=>e.month<run.month&&e.plan?.includes("casework"));
  if(run.month<13&&!previouslyEligible)return;
  run.pending="gardener";run.recruitReturn="plan";run.phase="event";
}
function criticalHealth(run){
  return run.hp<25||(run.month>3&&run.hp<69&&run.stress>=70);
}
function advance(){
  if(state.phase!=="result")return;
  const late=overdueArrival(state);
  if(late){state.pending=late;state.phase="event";tab="plan";persist();render(true);return;}
  if(sampleReview())return;
  state.unwell=criticalHealth(state)?state.unwell+1:0;
  state.poverty=povertyAfterClosing(state);
  const creditExhausted=state.fund<=-144;
  state.arrears=state.fund<0?state.arrears+1:0;
  if(state.unwell>=2){finish("ill");return;}
  if(creditExhausted||state.arrears>=2){finish("broke");return;}
  if(state.month===state.duration){beginFinale(cielEndingId(state.stats.의지,qualifies()));return;}
  if(state.prototype?.approved){
    const p=state.prototype;if(!state.unlocked.includes(p.product))state.unlocked.push(p.product);state.productNotes??={};state.productNotes[p.product]=p;delete state.prototype;
  }
  state.month++;state.marketShift=rollMarketShift(state);state.weather=rollSeasonWeather(state.month);state.planMonth=state.month;state.plan=emptyPlan();editingVisit=false;lessonPage=0;startAccounts(state);state.phase="plan";state.visit=null;selectedSlot=0;
  if(state.weather)state.phase="weatherBriefing";
  startFinnyAtTurn(state);
  tab=state.phase==="plan"?"home":"plan";persist();render(true);
}
function fatigueThreshold(stamina){
  return 65+Math.floor(cap(stamina,abilityMax)*10/abilityMax);
}
const lessonGrades={
  great:{label:"대성공",factor:1.65,loss:1}, steady:{label:"그럭저럭",factor:1,loss:2}, poor:{label:"별로",factor:.55,loss:4}
};
function lessonResult(run,id,slot){
  if(actions[id].stress<=0)return null;
  const practice=Math.min(3,run.counts[id]||0);
  const previous=slot>0?run.plan[slot-1]:run.past.findLast(row=>row.month<run.month)?.plan[2];
  const preparation=actions[previous]?.stress<0?8:previous===id?-9:0;
  const room=trainingRooms[id];
  const salt=(Object.keys(actions).indexOf(id)+1)*101+(slot+1)*7907;
  const luck=monthlyDraw(run,salt)*26-13;
  const score=53+(run.hp-60)*.27+(run.motivation-55)*.33-(run.stress-28)*.42
    +practice*3+preparation+(room?(run.level[room]-1)*3:0)+luck;
  return score>=65?"great":score>=38?"steady":"poor";
}
function plannedCareLevel(run){
  if(run.flags["doctor"+run.month] || run.plan.includes("recovery"))return 2;
  return Math.min(2,run.plan.filter(id=>actions[id]?.stress<0).length);
}
function linkedSubject(first,second){
  if(!(actions[first]?.stress>0&&actions[second]?.stress>0))return null;
  const primary=Object.keys(actions[second].gains)[0];
  return Object.keys(actions[first].gains).slice(1).includes(primary)?primary:null;
}
function recordStudyLink(run,id){
  if(id==="rest")return null;
  const linked=run.linkMonth===run.month&&linkedSubject(run.linkFrom,id);
  run.linkMonth=run.month;run.linkFrom=id;
  return linked;
}
function applyActivity(run,id,grade=lessonResult(run,id,run.sequence?.index??0),planned=id){
  const a=actions[id];
  const tolerance=fatigueThreshold(run.stats.체력);
  const tired=(run.hp<40||run.stress>=tolerance||run.motivation<35)&&a.stress>0;
  const room=trainingRooms[id];
  const fieldPenalty=(categories[2][1].includes(id)&&run.stress>=55)?3:0;
  const weather=weatherWorkout(id)?weatherFor(run):null;
  if(weather&&run.month<=12)run.foundation=Math.min(24,(run.foundation||0)+6);
  const stress=run.stress;
  const hp=run.hp;
  const worried=worriedAboutMoney(run);
  run.stress=cap(run.stress+(worried&&id==="rest"?3:a.stress)+(weather?.stress||0));
  const restBonus=(id==="rest"||id==="recovery")?(run.annex.bedroom-1)*5:0;
  let healthGain=a.health||0;
  const relapse=plannedCareLevel(run)<2 ? run.relapseStage||0 : 0;
  if(id!==planned && relapse)healthGain=relapse===1?8:-6;
  const strain=a.stress>=10 ? 3*relapse : 0;
  run.hp=cap(run.hp+healthGain-(weather?.strain||0)-strain-fieldPenalty+restBonus-overworkLoss(run.stress,a));
  if(id==="walk")run.stress=cap(run.stress-(run.annex.garden-1)*5-(shiftAssigned("garden")?2:0));
  run.motivation=cap(run.motivation+(a.stress<0?8:tired?-7:-2)-(worried&&["music","dance"].includes(id)?3:0));
  const primary=Object.keys(a.gains)[0];
  const advanced=advancedCourse(run,id);
  const linked=recordStudyLink(run,id);
  const changes=Object.entries(a.gains).map(([name,value])=>{
    const before=run.stats[name];
    const secondary=name!==primary;
    const gain=grade==="poor"&&secondary&&!advanced&&!trainingTradeoffs[id]?-1:lessonGain(name,before,(value+(linked===name?3:0)+(advanced?3:0)+(room?(run.level[room]-1)*4:0))*(grade?lessonGrades[grade].factor:1)*(weather?1.5:1)*(run.neglect>=2?.85:1),run.month,run.flags,!secondary&&a.stress>0&&grade!=="poor",run.foundation);
    run.stats[name]=cap(before+gain,statMax(name));
    return statLabel(name)+" "+signed(run.stats[name]-before);
  });
  const tradeoff=trainingTradeoffs[id];
  if(tradeoff&&!advanced&&grade){
    const loss=Math.min(run.stats[tradeoff],lessonGrades[grade].loss);
    run.stats[tradeoff]-=loss;
    changes.push(statLabel(tradeoff)+" "+signed(-loss));
  }
  if(linked)changes.push(statLabel(linked)+" · 앞 수업 응용");
  changes.push("스트레스 "+signed(run.stress-stress));
  if(run.hp!==hp)changes.push("컨디션 "+signed(run.hp-hp));
  updateIllness(run);
  return changes;
}
function applyEstateTraining(run){
  const cooperation=Object.entries(run.jobs).some(([p,room])=>servants[p]?.job===room&&run.people[p]?.toward>=5);
  if(cooperation)run.motivation=cap(run.motivation+2);
  run.hp=cap(run.hp+(shiftAssigned("kitchen")?3:0)+(run.level.kitchen-1)*6+(run.staff==="kitchen"?3:0));
  if(run.staff==="library"&&run.plan.some(id=>id==="study"||id==="inquiry")){
    run.stats.지성+=ordinaryAbilityGain(run.stats.지성,run.trust>=3?4:2);
  }
}
function projectTraining(beforeSlot=null){
  const run={...state,plan:scheduledActivities(state),stats:{...state.stats},counts:{...state.counts}};
  for(const [slot,id] of run.plan.entries()){
    if(slot===beforeSlot)break;
    if(!actions[id])continue;
    updateIllness(run);
    const actual=careActivity(run,id);
    applyActivity(run,actual,lessonResult(run,actual,slot),id);
    run.counts[actual]=(run.counts[actual]||0)+1;
  }
  if(beforeSlot===null)applyEstateTraining(run);
  return run;
}
const courtCourses=[
  ["학술",["study","inquiry","language"]],
  ["사교",["etiquette","social","music","dance"]],
  ["경영",["accounts","negotiate"]]
];
function educationRecord(run){
  return courtCourses.map(([field,subjects])=>{
    const best=Math.max(...subjects.map(id=>run.advancedStudy?.[id]||0));
    return {field,done:best>=2,note:field+" "+Math.min(2,best)+"/2"};
  });
}
const courtEducation={
  지성:[485,"서재 수업"],기품:[495,"귀족 예법"],매력:[470,"사교 수업"],
  통찰:[480,"가문 기록 조사"],경영:[480,"팬텀사 회계"],의지:[400,"사건 조사"],체력:[420,"승마"]
};
function courtEducationPriority(keys=Object.keys(courtEducation)){
  return keys.filter(k=>state.stats[k]<courtEducation[k][0])
    .sort((a,b)=>state.stats[a]/courtEducation[a][0]-state.stats[b]/courtEducation[b][0])[0];
}
function courtRows(){
  const rooms=Object.values(state.level).filter(level=>level>=2).length;
  const profitableMonths=state.salesBook.filter(row=>row.revenue>row.cost+(row.expenses||0)).length;
  function statRow(label,...keys){
    const next=courtEducationPriority(keys);
    const progress=keys.map(k=>statLabel(k)+" "+state.stats[k]+"/"+courtEducation[k][0]).join(" · ");
    return [label,!next,progress+(next?" · 추천 수업: "+courtEducation[next][1]:"")];
  }
  const courses=educationRecord(state);
  return [
    ["고급 과정 이수",courses.every(row=>row.done),courses.map(r=>r.note).join(" · ")+" · 각 분야 한 과목의 실기 합격 뒤 같은 과목 2회 수강"],
    statRow("귀족 교육","지성","기품"),
    statRow("사교와 조사","매력","통찰"),
    statRow("사업과 결단","경영","의지"),
    statRow("현장 수행","체력"),
    ["저택 재건",rooms>=2,"서재와 응접실, 주방을 개수하세요."],
    ["회사 기반",profitableMonths>=8,"판매·납품 흑자 "+profitableMonths+"/8개월 (상금 제외)"],
    ["왕실 신임",state.royal>=6,"왕실 서신에 답하거나 납품 인증으로 신임을 얻으세요."],
    ["가문 명성",state.renown>=32,"접객과 팬텀사 판매로 명성 쌓기"],
    ["재정 안정",state.fund>=1200 && state.debt===0,"채무를 상환하고 가문 자금을 비축하세요."]
  ];
}
function titleRequirements(){return courtRows().map(row=>row[1]);}
function courtImpression(){
  if(isApprovedEnding(state.ending))return "왕실에서 작위를 승인했다.";
  if(["vowNoTitle","releaseNoTitle"].includes(state.ending))return "왕실에서 이번 심의를 유보했다.";
  const conditions=titleRequirements();
  const standing=conditions.filter(Boolean).length/conditions.length;
  if(standing>=0.7&&state.royal>0)return "궁정에서 작위 이야기가 오가는 모양이다.";
  if(state.royal>0)return "왕실이 팬텀하이브가를 눈여겨보고 있다.";
  if(standing>=0.4||state.renown>0)return "사교계에서 가문의 이름이 다시 들리기 시작했다.";
  return "지금으로선 작위를 되찾을 가망이 희박해 보인다.";
}
const endingLabels = {
  vowTitle:["여왕의 번견",""],
  vowNoTitle:["문장 없는 마차","왕실의 승인은 기약 없이 미뤄졌습니다. 시엘은 작위 대신 스스로 선택한 이름으로 집요한 추적을 이어 갑니다."],
  releaseTitle:["마지막 명령 · 백작","작위를 돌려받은 날 시엘은 복수를 포기했습니다. 세바스찬은 그 자리에서 주인의 영혼을 거뒀습니다."],
  releaseNoTitle:["마지막 명령 · 무관의 주인","가문의 문장은 끝내 돌아오지 않았습니다. 스스로 복수를 내려놓은 밤, 악마는 계약대로 시엘의 영혼을 삼켰습니다."],
  ill:["건강 악화로 종료","어린 시절부터 숨겨 온 지병이 악화되어, 시엘은 결국 동트기 전 숨을 거뒀습니다."],
  broke:["자금 부족으로 종료","가문의 열쇠를 넘긴 뒤에도, 주인과 집사는 마지막 영수증 한 장을 놓고 한참이나 다퉜습니다."]
};
const slotNames=["상순","중순","하순"];
const phaseNames={contract:"계약",guide:"첫 안내",visit:"자유행동",review:"세바스찬의 강평",scene:"일정 진행",slotEvent:"일정 사건",vow:"마지막 심의",investiture:"왕실 서신",plan:"편성 중",event:"월말 사건",result:"월간 결산",ending:"회차 종료"};
const escapeHTML=value=>String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
function frame(title,body,tag=""){
  return '<div class="panel-head"><h2 tabindex="-1">'+title+'</h2>'+(tag?'<span class="small">'+tag+'</span>':"")+
    '</div><div class="panel-body">'+body+'</div>';
}
function option(label,action,on,disabled=false,style="option"){
  return '<button type="button" class="'+style+'" data-action="'+action+'" aria-pressed="'+on+'" '+(disabled?"disabled":"")+'>'+label+'</button>';
}
function tile(label,value,id=""){
  return '<div class="tile"><span class="small muted">'+label+'</span><strong '+(id?'id="'+id+'"':"")+'>'+value+'</strong></div>';
}
function ledger(entries){
  return '<ul class="ledger">'+entries.map(entry=>"<li>"+escapeHTML(entry)+"</li>").join("")+"</ul>";
}
function calendarSlot(label, value, action, selected, reserved=false) {
  return option('<span>'+label+'</span><b>'+value+'</b>', action, selected, reserved, reserved?"period contest-period":"period");
}

function plannerCosts(estimate){
  const costs=[
    ["저택", overhead()-Math.min(24,state.debt)],
    ["팬텀사", estimate.unit*state.qty+estimate.expenses],
    ["교육·활동", plannedTuition()]
  ];
  const total=costs.reduce((sum,[,cost])=>sum+cost,0);
  const bar=costs.map(([,cost])=>'<i style="width:'+(total?100*cost/total:0)+'%"></i>').join("");
  const labels=costs.map(([label,cost])=>'<div><dt>'+label+'</dt><dd>'+money(cost)+'</dd></div>').join("");
  return '<section class="plan-spending" aria-label="예상 지출"><div class="spending-bar" aria-hidden="true">'+bar+'</div><dl class="plan-costs">'+labels+'</dl></section>';
}

function plannerIcon(id){
  return '<img class="planner-icon" src="assets/planner-icons/'+id+'.png" alt="">';
}

function plannerNote(id){
  if(!editingVisit&&!actions[id])return slotNames[selectedSlot]+" 활동을 선택하세요.";
  return editingVisit?escapeHTML(visitPreview(id)):escapeHTML(courseName(id))+' · '+scheduleNote(id);
}

function previewPlannerCard(event){
  const calendar=event.currentTarget,note=calendar.querySelector(".calendar-note");
  if(!note||note.contains(event.target)||(event.relatedTarget instanceof Element&&note.contains(event.relatedTarget)))return;
  const leaving=event.type==="pointerout"||event.type==="focusout";
  const target=leaving?event.relatedTarget:event.target;
  const card=target instanceof Element?target.closest(".lesson[data-action]"):null;
  const id=card&&calendar.contains(card)?card.dataset.action.split(":").pop():editingVisit?state.visit:state.plan[selectedSlot];
  note.innerHTML=plannerNote(id);
}
for(const type of ["pointerover","pointerout","focusin","focusout"]){
  $("calendar").addEventListener(type,previewPlannerCard);
}



function plannerContents() {
  const contest=reservedContest(state);
  if(contest&&selectedSlot===contestSlot)selectedSlot=0;
  const chosen = state.plan[selectedSlot];
  const cards = editingVisit
    ? Object.entries(visits).filter(([id])=>canVisit(id)).map(([id, name]) =>
        option(plannerIcon(id)+'<b>'+name+'</b>', 'visit:'+id, state.visit===id, false, 'lesson visit-card'))
    : categories[lessonPage][1].map(id => {
        const activity=actions[id];
        return option(plannerIcon(id)+'<b>'+activity.name+'</b><small>'+money(courseTuition(state,id))+'</small>',
          'activity:'+selectedSlot+':'+id, id===chosen, false, 'lesson');
      });
  const half = Math.ceil(cards.length / 2);
  const periods = state.plan.map((id,index) =>
    contest&&index===contestSlot
      ?calendarSlot("하순 · 경연",contest.title,"pick:"+index,false,true)
      :calendarSlot(slotNames[index],actions[id]?.name??"","pick:"+index,!editingVisit&&selectedSlot===index));
  periods.push(calendarSlot("자유행동", visits[state.visit]??"", "pick-visit", editingVisit));
  const estimate = marketStats();
  const invitations=openContests(state);
  const note = plannerNote(editingVisit?state.visit:chosen);
  const weather=weatherFor(state);
  const date=monthText(state.month)+(weather?' <button type="button" class="season-weather" data-weather="'+state.weather+'" popovertarget="season-bulletin" aria-label="'+weather.name+' 소식">'+weather.name+'</button>':"");
  const bulletin=weather?'<aside popover id="season-bulletin" aria-labelledby="season-title"><header><strong id="season-title">'+weather.name+'</strong><button type="button" popovertarget="season-bulletin" popovertargetaction="hide">닫기</button></header><p>'+weather.scene+'</p>'+
    '<dl><div><dt>승마 · 체력 단련</dt><dd>성장 기본량 ×1.5<br>컨디션 −'+weather.strain+' · 스트레스 +'+weather.stress+'</dd></div><div><dt>실내 공부</dt><dd>평소와 같음</dd></div><div><dt>'+weather.charge+'</dt><dd>이달 저택 지출 +£'+weather.fee+'</dd></div></dl></aside>':"";
  return (editingVisit?'<div class="lesson-index visit-index"><span class="index-tab">자유행동 · 월 1회</span></div>':'<div class="lesson-index">'+categories.map(([name],i)=>option(name,"category:"+i,i===lessonPage,false,"index-tab")).join("")+'</div>')+
    '<div class="card-field" role="group" aria-label="'+(editingVisit?'자유행동':slotNames[selectedSlot]+' 활동 목록')+'">'+
      '<div class="card-bank">'+cards.slice(0,half).join('')+'</div>'+
      '<div class="card-bank">'+cards.slice(half).join('')+'</div></div>'+
    '<div class="calendar-foot"><div class="calendar-summary">'+(invitations.length?'<div class="invite-date"><strong>'+date+'</strong>'+btn('<i aria-hidden="true"></i>이달의 초대장',"fair-notices",false,"fair-invite")+'</div>':'<strong>'+date+'</strong>')+
      '<span class="calendar-note">'+note+'</span></div>'+
      '<div class="calendar-periods" role="group" aria-label="편집할 기간">'+periods.join('')+'</div>'+
      '<div class="calendar-settle">'+plannerCosts(estimate)+
      '<div class="plan-balance"><span>예상 월말 자금</span><strong>'+money(estimate.balance)+'</strong></div>'+
      btn('이달 일정 실행','execute',!planReady(),'calendar-run')+'</div>'+(healthNotice(state)?'<p class="calendar-warning">'+healthNotice(state)+'</p>':'')+
      (state.unwell>0?'<p class="calendar-warning">시엘이 위독합니다. 당분간 곁에서 돌봐야겠습니다.</p>':'')+
      (state.arrears>0?'<p class="calendar-warning">미지급금 경고 · 이번 월말까지 잔액을 £0 이상으로 회복하세요.</p>':'')+
      (estimate.shortfall?'<p class="calendar-warning">준비비 부족 · '+money(estimate.shortfall)+'　외상으로 진행할 수 있습니다.</p>':'')+'</div>'+bulletin;
}

function planPanel(){
  if(state.phase==="event"){
    const event=pendingEvent();
    return frame(castName(event),'<p class="muted">'+storyLine(event)+'</p><div class="report-grid">'+event.choices.map((choice,index)=>{
      const locked=choice.when&&!choice.when(state);
      return btn(choice.label+'<br><span class="small '+(locked?"muted":"good")+'">'+(locked?"필요 조건 · "+choice.hint:event.companyCase?"":choice.result)+'</span>',
        "choose:"+index,Boolean(locked),"option");
    }).join("")+'</div>');
  }
  if(state.phase==="result")return monthlyResults();
  if(state.phase==="ending"){
    const [title,description]=endingLabels[state.ending];
    return frame(title,endingThumb(state.ending)+(description?'<p class="muted">'+description+'</p>':'')+'<div class="summary-grid">'+tile("보유 자금",money(state.fund))+
      tile("경영",state.stats.경영)+tile("완료 사건",state.events.length)+'</div>'+
      (state.ending==="vowTitle"?'':'<p>'+epilogue()+'</p>')+'<div class="inline">'+btn("장부 보기","tab:record")+btn("새 회차","reset",false,"primary")+'</div>','회차 종료');
  }
  return "";
}
function marketStats(){
  const order=forecast(), needed=cashNeeded();
  return {...order,balance:state.fund+order.revenue-needed-overhead()-order.expenses,shortfall:Math.max(0,needed-Math.max(0,state.fund))};
}
function stepper(key,label,min){
  return '<div class="tile"><label class="small muted" for="'+key+'">'+label+'</label><div class="stepper">'+
    '<button type="button" id="'+key+'down" data-action="step:'+key+':-1" aria-label="'+label+' 감소" '+(state[key]===min?"disabled":"")+
    '>−</button><input id="'+key+'" type="number" min="'+min+'" max="40" value="'+state[key]+'"><button type="button" id="'+key+'up" data-action="step:'+key+
    ':1" aria-label="'+label+' 증가" '+(state[key]===40?"disabled":"")+'>+</button></div></div>';
}
const legacyEventIds={"비어 있는 천막":"circus","타운하우스의 손님":"visitPrince","돌아온 집사":"homecoming","불을 지키는 사람":"cook","서재의 열쇠":"return","새벽의 일정표":"discipline","비어 있는 장부":"proof","여왕의 초청장":"audience","상점 진열장":"trade","손님이 돌아간 뒤":"room"};
function updateMoney(){
  $("money").innerHTML='<div class="nameplate"><small>CIEL</small><b>PHANTOMHIVE</b></div><div class="id-details"><span>'+currentCielAge()+'세</span><span>'+(cielCondition(state)||"12.14")+'</span><span class="sign-mark" aria-label="사수자리"></span></div><strong class="wealth">'+money(state.fund)+'</strong>';
}
function relationBook(){
  return '<h3>인물 관계</h3>'+peopleInHouse().map(id=>{const r=state.people[id];return '<div class="work-ledger"><b>'+servants[id].name+'</b><span>상대 → 시엘 신뢰　'+rank(r.toward)+'</span></div>';}).join("");
}
function londonCareer(run){
  if(run.stats.경영>=140&&run.fund>=260)return "merchant";
  if(run.stats.통찰>=140)return "broker";
  return "pursuit";
}
function epilogue(){
  const allies=peopleInHouse().filter(k=>state.people[k].toward>=5).map(k=>servants[k].name);
  const top=Object.keys(state.stats).sort((a,b)=>state.stats[b]/statMax(b)-state.stats[a]/statMax(a))[0];
  const route=state.ending==="vowNoTitle"?(londonCareer(state)==="merchant"?"런던의 사업가로 자리 잡았습니다. ":londonCareer(state)==="broker"?"정보상의 연락망을 얻었습니다. ":"마차를 타고 옛 흔적을 좇습니다. "):"";
  return route+(allies.length&&!["releaseTitle","releaseNoTitle","ill","broke"].includes(state.ending)?allies.join("·")+"은 다음 겨울에도 도련님의 지시를 따르겠다고 전했습니다. ":"")+"가장 단련된 능력은 "+statLabel(top)+"이었습니다. 팬텀사의 개발품은 "+state.unlocked.length+"종, 저택에 합류한 고용인은 "+peopleInHouse().filter(id=>servants[id].job).length+"명입니다.";
}
function canBuyTownhouse(){return state.phase==="plan" && !state.flags.townhouse && state.fund>=250;}
function startTownhouseGuests(run){
  if(run.pending||!["plan","result"].includes(run.phase)||!townhouseGuestsDue(run))return false;
  if(run.phase==="plan")run.recruitReturn="estate";
  run.pending="visitPrince";run.phase="event";return true;
}
function annexDesk(){
  const locked=state.phase!=="plan";
  const rooms=Object.entries(annex).filter(([id])=>!Object.hasOwn(dutyPins,id)).map(([id,r])=>'<div class="annex-line"><div><b>'+r.name+' · Lv.'+state.annex[id]+'</b><small>'+r.desc+'</small></div>'+btn(state.annex[id]===3?"완료":money(r.cost*state.annex[id]),"annex:"+id,locked||state.annex[id]>=3||state.fund<r.cost*state.annex[id])+'</div>').join("");
  return '<section class="estate-annex"><h3>부속 시설</h3>'+rooms+'</section>'+
    (state.flags.townhouse
      ?btn('<span>런던 타운하우스 <small>보유 중</small></span><strong>관리 열기</strong>',"tab:townhouse",false,"townhouse-entry")
      :btn('<span>런던 타운하우스</span><strong>취득 · £250</strong>',"townhouse",!canBuyTownhouse(),"townhouse-entry"));

}
// Page numbers from the previous scripts, used only when opening an existing save.
const previousRecruitPages={
  gardener:[0,1,2,3,4,5,6,7,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
  maid:[0,1,2,3,6,7,8,9,10,11,14,15,16,18,19,21,22,23,24,25,26,27,28,29,30,32,33,34,35,36,37,38,39,40,41,42,43,44,45,47],
  circus:[0,1,3,4,5,6,7,9,10,11,12,13,14,14,15,16,17,18,19,20,21,22,24,23,26,27,28,29,30,31,33,34,35,36,37,38,39,41,42,44,45,46],
  visitPrince:[0,2,3,4,6,8,9,10,12,13,14,16,18,19,20,21,22,23,24,25,26,27,28,29,29,30,32,33,34,35,39,40,45,46,48,51]
};
function normalizeSave(run){
  const copy=structuredClone(run);
  delete copy.lessonKit;
  // Sites used these names for the same save slot and 500-point scale.
  if(copy.uniformAbilityCaps&&!copy.unifiedAbilityCaps){
    copy.unifiedAbilityCaps=true;
    delete copy.mixedAbilityCaps;
    if(copy.ill===undefined&&copy.illness!==undefined)copy.ill=copy.illness;
    if(copy.phase==="ending"&&!copy.endingSeen&&Number.isInteger(copy.endingPage))
      copy.endingBeat=copy.endingPage;
    if(copy.princeFromPlan&&copy.pending==="visitPrince")copy.recruitReturn="estate";
    const eventId=id=>id==="snakeArrival"?"circus":id;
    if(copy.pending)copy.pending=eventId(copy.pending);
    if(copy.eventQueue)copy.eventQueue=copy.eventQueue.map(eventId);
    copy.events=copy.events.map(entry=>entry.id==="snakeArrival"?{...entry,id:"circus"}:entry);
    if(copy.flags.snakeArrival&&copy.people.snake)copy.flags.circus=true;
    if(copy.eventResponse&&["event","slotEvent"].includes(copy.phase)){
      const result=copy.events.findLast(entry=>entry.id===copy.pending);
      const birthday=birthdayDialogue[copy.pending];
      if(birthday&&birthday.replies[result?.index]){
        copy.termOutcome={id:copy.pending,index:result.index,note:copy.eventResponse.summary||""};
        copy.termPage=0;
      }
    }else if(Number.isInteger(copy.eventPage)&&birthdayDialogue[copy.pending]){
      copy.termPage=Math.min(copy.eventPage,birthdayDialogue[copy.pending].lines.length-1);
    }
  }
  if(copy.planMonth!==copy.month){
    if(["contract","guide","plan"].includes(copy.phase)||["plan","estate"].includes(copy.recruitReturn)){
      copy.plan=emptyPlan();
      copy.visit=null;
    }
    copy.planMonth=copy.month;
  }
  if(!copy.unifiedAbilityCaps){
    const oldMax=copy.abilityScale||999;
    const snapshots=new Set([copy.stats,copy.accounts?.stats,copy.sequence?.before,
      copy.sequence?.after,copy.sequence?.opening?.stats,copy.report?.before?.stats]);
    for(const values of snapshots){
      if(!values)continue;
      for(const key of stats){
        const previousMax=copy.mixedAbilityCaps&&(key==="의지"||key==="체력")?100:oldMax;
        if(Number.isFinite(values[key]))values[key]=cap(Math.round(values[key]*abilityMax/previousMax),abilityMax);
      }
    }
    delete copy.mixedAbilityCaps;
    copy.unifiedAbilityCaps=true;
    copy.abilityScale=abilityMax;
  }
  const defaults=initial();
  copy.duration=defaults.duration;
  // Resume old demo saves at their last settlement when their ending was retired.
  if(["title","business","defer"].includes(copy.ending)){
    copy.ending=null;
    delete copy.endingBeat;
    copy.phase="result";
  }
  // Old checkpoints have no campaign seed. The same checkpoint always receives the same one.
  if(!Number.isInteger(copy.owlSeed))copy.owlSeed=(Math.imul(copy.month,0x45d9f3b)^(copy.fund||0)^0x7f4a7c15)>>>0;
  if(copy.phase==="contract"){
    if(!Number.isInteger(copy.openingLine)){
      const first=art=>openingLines.findIndex(entry=>entry.scene.art===art);
      const legacyPages=[0,first("seal"),first("ring"),openingSigningLine,first("manor"),first("lesson")];
      copy.openingLine=legacyPages[copy.introPage]??0;
      copy.contractFiled=(copy.introPage||0)>=4;
    }
    else if(copy.openingEdition!==2&&copy.openingEdition!==3)copy.openingLine=previousOpeningPages[cap(copy.openingLine,previousOpeningPages.length-1)];
    copy.openingEdition=3;
    copy.openingLine=cap(copy.openingLine,copy.contractFiled?openingLines.length-1:openingSigningLine);
  }
  copy.annex={...defaults.annex,...copy.annex};
  copy.people={...defaults.people,...copy.people};
  // The original townhouse event recorded Soma and only sometimes set a flag for Agni.
  if(copy.flags.townhouse&&copy.people.soma&&(copy.flags.visitPrince||copy.events.some(e=>e.id==="visitPrince"))){
    copy.people.agni??={toward:2};copy.flags.agni=true;copy.flags.visitPrince=true;
  }
  copy.jobs={...copy.jobs};if(copy.people.tanaka&&copy.staff)copy.jobs.tanaka=copy.staff;
  for(const rel of Object.values(copy.people))delete rel.from;
  copy.shop={...defaults.shop,...copy.shop};
  copy.stock={...defaults.stock,...copy.stock};
  copy.salesBook=copy.salesBook||[];
  restoreTrading(copy);
  const oldResults=new Map();
  copy.events=copy.events.map(entry=>{
    if(entry.id)return entry;
    const id=legacyEventIds[entry.title];
    const definition=events.find(e=>e.id===id);
    if(entry.result)oldResults.set(entry.result,(definition?.title||"사건")+" · 처리 완료");
    return {id,index:null};
  });
  if(copy.events.some(e=>e.id==="unasked"&&e.index===0)){
    copy.flags.morningGloves=true;
    if(!copy.events.some(e=>e.id==="gloves"))delete copy.flags.gloves;
  }
  copy.log=copy.log.map(line=>oldResults.get(line)||line);
  if(copy.accounts?.month!==copy.month){
    const closed=["result","event","vow","investiture","ending"].includes(copy.phase);
    const opening=copy.sequence?.opening||(closed&&copy.report?.before)||copy;
    startAccounts(copy,opening,true);
  }
  if(copy.pending==="gardener"&&copy.phase==="event"&&!copy.recruitReturn&&!copy.recruitPage&&copy.month<13){
    const eligible=copy.past.some(e=>e.month<=copy.month&&e.plan?.includes("casework"));
    if(!eligible){copy.pending=copy.eventQueue?.shift()||null;copy.phase=copy.pending?"event":"result";}
  }
  if(copy.phase==="slotEvent"&&copy.sequence){
    const seq=copy.sequence,activity=seq.activity||copy.plan[seq.index];
    const fits=id=>{
      const event=events.find(e=>e.id===id);
      return !event?.examSubjects||(!seq.onSickLeave&&!copy.ill&&matchesSlot(event,activity));
    };
    if(seq.slotQueue)seq.slotQueue=seq.slotQueue.filter(fits);
    if(!fits(copy.pending)&&!copy.flags[copy.pending]&&!copy.termOutcome&&!copy.choiceImpact?.next){
      delete copy.termPage;
      nextSlotEvent(copy);
    }
  }
  // Older releases could queue a staff event before the new prerequisites.
  scheduleSnakeVisit(copy);
  const allowed=id=>{
    if(typeof id==="string"&&id.startsWith("custom-"))return events.some(event=>event.id===id);
    if(id==="circus"||id==="snakeReturn")return id===dueSnakeVisit(copy);
    if(id==="homecoming"&&copy.phase==="event"&&copy.pending===id)return canTanakaReturn(copy);
    if(id==="maid")return copy.people.finny&&!copy.people.mey&&!copy.flags.maid;
    const arrival=events.find(e=>e.id===id&&e.household);
    return !arrival||(!copy.flags[id]&&arrival.sees(copy));
  };
  if(copy.eventQueue)copy.eventQueue=copy.eventQueue.filter(allowed);
  if(copy.phase==="event"&&copy.pending&&!allowed(copy.pending)){
    delete copy.recruitPage;delete copy.termPage;delete copy.termOutcome;
    copy.pending=copy.eventQueue?.shift()||null;copy.phase=copy.pending?"event":copy.recruitReturn==="vow"?"vow":copy.recruitReturn==="estate"?"plan":"result";
    if(!copy.pending)delete copy.recruitReturn;
  }
  if(copy.recruitPage?.id==="circus"&&copy.recruitPage.version===3){
    // Readers past the old promise of a visit resume at the revised conversation.
    const meeting=14;
    copy.recruitPage.at=Math.min(pageAt("circus",copy.recruitPage.at),meeting);
    copy.recruitPage.version=4;
  }
  if(copy.recruitPage?.id==="circus"&&copy.recruitPage.version!==4)delete copy.recruitPage;
  if(copy.recruitPage?.id==="visitPrince"&&copy.recruitPage.version!==3)delete copy.recruitPage;
  if(copy.recruitPage?.id==="maid"&&copy.recruitPage.version===2){
    const arrival=15;
    const at=copy.recruitPage.at;
    copy.recruitPage.at=pageAt("maid",at>=arrival?at+1:at);
    copy.recruitPage.version=3;
  }
  if(copy.recruitPage?.id==="maid"&&copy.recruitPage.version!==3)delete copy.recruitPage;
  if(copy.recruitPage?.id==="cook"&&copy.recruitPage.version==null){
    // The original cut had five pages before Ciel's first question.
    copy.recruitPage.at=pageAt("cook",copy.recruitPage.at-5);
    copy.recruitPage.version=2;
  }
  if(copy.storyPageEdition!==2){
    const bookmark=copy.recruitPage;
    const pages=bookmark&&previousRecruitPages[bookmark.id];
    if(Array.isArray(pages)&&Number.isInteger(bookmark.at)){
      bookmark.at=pages[Math.min(pages.length-1,Math.max(0,bookmark.at))];
    }
    if(copy.ending==="broke"&&Number.isInteger(copy.endingBeat)&&copy.endingBeat>=19){
      copy.endingBeat=Math.max(19,copy.endingBeat-2);
    }
    copy.storyPageEdition=2;
  }
  if(["result","vow"].includes(copy.phase)&&!copy.pending){
    const arrival=overdueArrival(copy)||(tanakaReturns(copy)?"homecoming":null)||(townhouseGuestsDue(copy)?"visitPrince":null);
    if(arrival){
      if(copy.phase==="vow")copy.recruitReturn="vow";
      copy.pending=arrival;copy.phase="event";
    }
  }
  startFinnyAtTurn(copy);
  startTownhouseGuests(copy);
  for(const [slot] of exams){
    const id="exam-"+slot;
    if(copy.flags[id] && copy.events?.findLast(e=>e.id===id)?.index===1) delete copy.flags[id];
  }
  if(typeof copy.poverty!=="boolean"){
    const opening=copy.accounts?.opening??copy.sequence?.opening?.fund??copy.fund;
    copy.poverty=povertyAfterClosing(copy,opening);
  }
  if(!Number.isFinite(copy.foundation))copy.foundation=0;
  // An older mid-month save recorded rest as the last subject.
  if(copy.linkFrom==="rest"&&copy.linkMonth===copy.month&&copy.sequence?.index===1&&copy.plan[1]==="rest"){
    const first=copy.plan[0],prefix="상순 · ";
    const attended=copy.log.find(line=>line.startsWith(prefix))?.slice(prefix.length).replace(/^고급 · /,"").split(" · ")[0];
    if(actions[first]?.name===attended)copy.linkFrom=first;
  }
  if(!copy.advancedStudy){
    copy.advancedStudy={};
    for(const [id] of exams){
      const exam=copy.events.find(e=>e.id==="exam-"+id&&e.index===0);
      if(!exam||!copy.flags["exam-"+id])continue;
      const after=copy.past.filter(row=>row.month>exam.month).flatMap(row=>row.plan||[]).filter(key=>key===id).length;
      copy.advancedStudy[id]=Math.min(2,after,Math.max(0,(copy.counts[id]||0)-2));
    }
  }
  return copy;
}
function recordPanel(){
  const history=state.events.slice().reverse().map(record=>{
    const event=events.find(e=>e.id===record.id);
    if(!event)return "";
    if(Object.hasOwn(recruitScenes,event.id)){
      const old=record.edition!=="canonical";
      const past={gardener:["온실 열쇠를 건넨다","가벼운 일부터 가르친다"],maid:["저택의 시야를 맡긴다","타나카에게 교육을 맡긴다"],cook:["조리대를 맡긴다","화구 수리부터 함께한다"],circus:["저택에 자리를 마련한다","우리의 행선지를 확인한다"],visitPrince:["함께 차를 든다","다음 방문을 약속한다"]};
      const selected=event.choices[record.index];
      const oldLabel=past[event.id]?.[record.index]||selected?.label||"영입 완료";
      const note=old?"이전 회차의 선택 · "+oldLabel:recruitScenes[event.id].result+
        (event.choices.length>1&&selected?" · "+selected.label:"");
      return '<details><summary>'+monthText(record.month||state.month)+' · '+event.title+'</summary><p>'+note+'</p>'+btn('영입 장면 다시 보기','recruit-memory:'+event.id)+'</details>';
    }
    const choice=event.choices[record.index];
    return '<details><summary>'+(record.month?monthText(record.month)+' · ':'')+escapeHTML(event.title)+'</summary>'+(sourceNote(event)?'<small>'+sourceNote(event)+'</small>':'')+'<p>'+storyLine(event)+'</p><p class="small muted">'+(choice?choice.label+" · "+statResultText(record.examNote||choice.result):"처리 완료")+'</p></details>';
  }).join("");
  const album='<div class="ending-album">'+(Object.keys(endingScenes).filter(hasEndingRecord).map(endingThumb).join("")||"아직 기록된 엔딩이 없습니다.")+'</div>';
  return frame("가문 장부",familyFolio(courtRows(),history,album));
}
const motionLabels={auto:"기기 설정 따르기",full:"항상 재생",reduced:"동작 줄이기"};
const motionKey="earl-phantomhive-motion";
let motionMode="auto";
try{
  const stored=localStorage.getItem(motionKey);
  if(Object.hasOwn(motionLabels,stored))motionMode=stored;
}catch{}
function motionReduced(){
  return motionMode==="reduced"||(motionMode==="auto"&&matchMedia("(prefers-reduced-motion: reduce)").matches);
}
function syncMotion(){
  document.documentElement.dataset.gameMotion=motionMode==="reduced"?"reduced":motionReduced()?"gentle":"full";
}
function motionControls(){
  return '<section class="mixer"><h3>동작 설정</h3><p>시엘의 인사와 일정 애니메이션</p><div class="opts motion-options">'+
    Object.entries(motionLabels).map(([key,name])=>option(name,"motion:"+key,motionMode===key,false)).join("")+'</div></section>';
}
function savePanel(){
  const rows=["auto","1","2","3"].map((id,index)=>{
    const record=saves[id];
    const label=index?"저장 칸 "+index:"자동 저장";
    const phase=record && (phaseNames[record.phase] || "");
    return '<div class="slot-save" role="group" aria-label="'+label+'" data-filled="'+Boolean(record)+'">'+
      '<div class="slot-info"><i class="slot-book" aria-hidden="true"></i><strong>'+label+'</strong><span>'+
      (record?monthText(record.month)+(phase?" · "+phase:""):"빈 슬롯")+'</span></div><div class="opts">'+
      (index?btn("저장","store:"+id,false,"slot-write"):"")+btn("불러오기","load:"+id,!record,"slot-read")+'</div></div>';
  }).join("");
  return frame("저장 · 설정",'<section class="notebook-slots" aria-labelledby="save-slots-title"><h3 id="save-slots-title">저장 기록</h3>'+rows+'</section>'+(!storageOk?'<p class="small danger">브라우저 저장소를 사용할 수 없습니다. 이 탭을 닫으면 진행 내용이 사라집니다.</p>':"")+
    '<div class="notebook-settings">'+languageControls()+audioControls()+motionControls()+'</div>'+instructionBook()+
    '<div class="notebook-actions">'+(state.phase!=="contract"?btn("프롤로그 다시 보기","recollect"):"")+btn("새 회차","reset")+btn("표지로","tab:title")+'</div>'+
    '<details class="annexes game-references"><summary>제작 참고</summary><ul><li>프린세스 메이커 3</li><li>카모카테 시리즈</li><li>카이로소프트 ‘○○○ 스토리’ 시리즈</li></ul></details>');
}
function statusPanel(){
  const planning=state.phase==="plan";
  const predicted=planning?projectTraining():state.report?.before;
  const formatChange=delta=>planning?previewDelta(delta):delta?signed(delta):"–";
  const current=[state.hp,state.stress,state.motivation];
  const properties=["hp","stress","motivation"];
  const conditions=["컨디션","스트레스","의욕"];
  const styles=["health","stress","drive"];
  const meters=current.map((value,i)=>{
    const forecast=predicted?.[properties[i]];
    const delta=Number.isFinite(forecast)?(planning?forecast-value:value-forecast):0;
    return '<div class="meter '+styles[i]+'"><span>'+conditions[i]+'</span><span class="track" aria-hidden="true"><i class="fill" style="width:'+
      value+'%"></i></span><b>'+value+'</b><em class="'+((i===1?delta>0:delta<0)?"danger":"good")+'">'+formatChange(delta)+'</em></div>';
  }).join("");
  return frame(["시엘 상태",cielCondition(state)].filter(Boolean).join(" · "),'<div class="inline"><b>시엘 팬텀하이브</b><span class="small muted">'+
    (planning?"편성한 일정의 예상 변동":"이번 달 변동")+'</span></div><div class="hud-group">'+meters+
    '</div><div class="hud-group"><div class="attributes"><div class="attribute attr-label muted"><span>능력치</span><b>현재</b><em>변동</em></div>'+
    stats.map(name=>{
      const delta=predicted?.stats?(planning?predicted.stats[name]-state.stats[name]:state.stats[name]-predicted.stats[name]):0;
      return '<div class="attribute"><span>'+statLabel(name)+'</span><span class="gauge"><i style="width:'+(state.stats[name]/statMax(name)*100)+'%"></i></span><b>'+state.stats[name]+'</b><em>'+formatChange(delta)+'</em></div>';
    }).join("")+'</div></div>');
}
const businessArt={"estate": "assets/map-estate.png", "design2": "assets/map-design2.png", "library2": "assets/map-library2.png", "parlor2": "assets/map-parlor2.png", "designer": "assets/map-designer.png", "cart-candy": "assets/map-cart-candy.png", "kitchen3": "assets/map-kitchen3.png", "store2": "assets/map-store2.png", "maker": "assets/map-maker.png", "cart-sweets": "assets/map-cart-sweets.png", "cart-hamper": "assets/map-cart-hamper.png", "parlor3": "assets/map-parlor3.png", "cart-toys": "assets/map-cart-toys.png", "clerk": "assets/map-clerk.png", "works2": "assets/map-works2.png", "store3": "assets/map-store3.png", "kitchen2": "assets/map-kitchen2.png", "library3": "assets/map-library3.png", "cart-plush": "assets/map-cart-plush.png", "design3": "assets/map-design3.png", "works3": "assets/map-works3.png", "company": "assets/map-company.png", "steward": "assets/map-steward.png", "cart-game": "assets/map-cart-game.png"};
const departments = {
  design:{name:"개발실",cost:65,benefit:"단계마다 도안 수익 +£1 · 개발비 할인"},
  works:{name:"제작실",cost:75,benefit:"단계마다 개당 원가 최대 £1 절감"},
  store:{name:"판매점",cost:80,benefit:"단계마다 수요 +2개 · 판매품당 포장 수익 +£1"}
};
const mapPositions = {
  library:[51,30], parlor:[72,69], kitchen:[22,68],
  design:[49,32], works:[73,65], store:[22,70]
};
// Button positions are separate from furniture anchors so labels can clear the staff.
const companyPinPositions = {design:[52,20],works:[76,48],store:[23,55]};
const companyStaffFeet = {designer:[32,36.5],maker:[67,72.2],clerk:[22,77]};
const estateRooms = {...facilities,garden:annex.garden,guard:annex.guard};
let selectedRoom="library";
let selectedDepartment="works";

const researchDiscount=[0,0,25,45];
function canDesign(id){
  return !state.unlocked.includes(id) || (productHistory(state,id).reputation>=4&&!state.productNotes?.[id]?.revised);
}
function researchFee(id,level=state.shop.design){
  const base=state.unlocked.includes(id)?Math.max(40,Math.ceil(products[id].research*.65)):products[id].research;
  return Math.ceil(base*(100-researchDiscount[level])/100);
}
function workerSprite(role,position){
  return '<span aria-hidden="true" class="company-worker '+role+'" style="left:'+position[0]+'%;top:'+position[1]+'%"><img alt="" src="assets/staff/'+role+'.png"></span>';
}
function propertyMap(company){
  const rooms=company?departments:estateRooms;
  const visibleFittings=new Set(["design3","works3","store2","store3"]);
  const levels=company?state.shop:{...state.level,...state.annex};
  let additions="",pins="";
  for(const [id,room] of Object.entries(rooms)){
    const [x,y]=mapPositions[id]||dutyPins[id];
    if(levels[id]>1){
      for(let tier=2;tier<=levels[id];tier++){
        const offset=tier===2?-10:11;
        if(visibleFittings.has(id+tier))additions+='<img alt="" class="map-fitting" src="'+businessArt[id+tier]+'" style="left:'+(x+offset)+'%;top:'+(y-5)+'%">';
      }
      additions+='<i class="map-award award-'+levels[id]+'" aria-hidden="true" style="left:'+x+'%;top:'+y+'%"></i>';
    }
    const selected=id===(company?selectedDepartment:selectedRoom);
    const [pinX,pinY]=company?companyPinPositions[id]:dutyPins[id];
    pins+='<button type="button" data-action="station:'+id+'" aria-pressed="'+selected+'" class="map-pin" style="left:'+pinX+'%;top:'+pinY+'%">'+
      room.name+' <small>Lv.'+levels[id]+'</small></button>';
  }
  const people=company
    ? Object.entries(companyStaffFeet).map(([sprite,feet])=>workerSprite(sprite,feet)).join("")
    : estateWalkers();
  return '<div class="property-map '+(company?'company-map':'estate-map')+'" role="group" aria-label="시설 선택"><img alt="" class="map-base" src="'+businessArt[company?"company":"estate"]+'">'+
    additions+people+(company&&state.qty>0?'<img alt="" class="delivery-cart" src="'+businessArt["cart-"+state.product]+'">':"")+pins+'</div>';
}
function roomDetail(){
  const id=selectedRoom, room=estateRooms[id], auxiliary=Object.hasOwn(annex,id), level=(auxiliary?state.annex:state.level)[id], active=state.phase==="plan";
  const steps=[1,2,3].map(n=>'<i class="'+(n<=level?'filled':'')+'"></i>').join('');
  return '<div class="work-title"><h3>'+room.name+'</h3><b>'+level+' / 3단계</b></div>'+
    '<div class="facility-steps" aria-hidden="true">'+steps+'</div>'+
    '<dl class="facility-data"><dt>시설 효과</dt><dd>'+room.desc+'</dd><dt>월 유지비</dt><dd>'+money(auxiliary?(level-1)*2:level*4)+(level<3?' → '+money(auxiliary?level*2:(level+1)*4):'')+'</dd></dl>'+
    btn(level===3?"개수 완료":"시설 개수 · "+money(room.cost*level),(auxiliary?"annex:":"upgrade:")+id,!active||level===3||state.fund<room.cost*level,"work-order")+
    '<h4>저택 지원</h4><div class="work-actions">'+btn("왕진 · £55","doctor",!active||state.fund<55||state.flags["doctor"+state.month])+
    btn("대출 · £144","loan",!active||state.usedLoan)+'</div><small>왕진 시 컨디션 +24 · 대출은 월 £24씩 상환</small>';
}
function inventoryRows(){
  return state.unlocked.map(id=>{
    const line=productHistory(state,id),stock=state.stock[id],fine=state.fineStock[id]||0;
    const pressure=businessTerms(state,id).pressure;
    return '<div class="sale-row"><b>'+products[id].name+' · 평판 '+line.reputation+'/20</b><span>표준품 '+(stock-fine)+'개 · 고급품 '+fine+'개 · 누적 판매 '+line.units+'개 · 완납 '+line.orders+'회</span>'+
      (state.royalWarrants?.[id]?'<small>로열 워런트 · 왕실 납품 인증 · 월 수요 +2개</small>':'')+
      (pressure?'<small>최근 판매로 이번 달 소매 수요 −'+pressure+'개</small>':'')+'</div>';
  }).join("");
}
function orderDesk(){
  const active=state.order;
  if(active)return '<h4>받은 발주서</h4><p>'+tradeBuyer(active)+' · '+products[active.id].name+' '+active.qty+'개 · 개당 '+money(active.rate)+'<br>'+monthText(active.due)+' 월말 자동 납품 · 부족분 개당 '+money(active.shortFee??2)+' 부담</p>';
  const offers=state.unlocked.map(id=>customerOffer(state,id)).filter(Boolean);
  return '<h4>'+(historicalTradeEvents[state.month]?'이달의 발주서':'거래처 재주문')+'</h4>'+(offers.length?offers.map(o=>'<div class="sale-row"><b>'+tradeBuyer(o)+'</b><span>'+products[o.id].name+' '+o.qty+'개 · 개당 '+money(o.rate)+' · '+monthText(o.due)+' 납기 · 미납 개당 '+money(o.shortFee)+' 부담</span>'+btn('발주 수락','order:'+o.id,state.phase!=="plan")+'</div>').join("")+'<small>한 번에 한 건을 수락할 수 있습니다. 납기에는 해당 품목의 표준품부터 출고합니다.</small>':state.month===state.duration?'<p>이번 달이 마지막 영업입니다.</p>':'<p>한 품목의 평판이 3에 이르면 거래처가 다음 달 납품을 제안합니다.</p>');
}
function companyDetail(){
  const id=selectedDepartment, room=departments[id], level=state.shop[id], active=state.phase==="plan";
  let controls="";
  if(id==="design"){
    controls=productPlanning()+'<h4>상품 개발　'+state.unlocked.length+' / '+Object.keys(products).length+'</h4>'+
      Object.entries(products).map(([key,p])=>{
        const done=state.unlocked.includes(key),fee=researchFee(key);
        return '<div class="work-ledger"><span>'+p.name+'</span>'+
          (done&&!canDesign(key)?'<b>'+(state.productNotes?.[key]?.revised?'개량 완료':'평판 4부터 개량')+'</b>':btn((done?'개량 · ':'개발 · ')+money(fee),'develop:'+key,!active||!!state.prototype||state.month===state.duration||state.fund-fee<cashNeeded()))+'</div>';
      }).join("");
  }else if(id==="works"){
    controls='<h4>이달 생산품</h4><div class="work-actions">'+state.unlocked.map(key=>option(products[key].name,"product:"+key,state.product===key,!active)).join("")+'</div>'+
      '<h4>생산·소매 등급</h4><div class="work-actions">'+[["standard","표준품"],["fine","고급품"]].map(([key,label])=>option(label,"quality:"+key,state.quality===key,!active)).join("")+'</div>'+
      (active?stepper("qty","생산량 (개)",0):'<p>생산량 '+state.qty+'개</p>')+
      '<div class="work-cost" id="work-cost">'+productionCost(forecast().unit)+'</div>';
  }else{
    controls='<h4>'+products[state.product].name+'</h4><p>주요 고객 · '+businessTailwind(state.product).audience+'　이달의 수요 · '+businessTailwind(state.product).trend+'</p>'+
      (active?stepper("price","판매가 (£)",4):'<p>판매가 '+money(state.price)+'</p>')+
      (active?'<div class="work-ledger"><span>이 가격의 예상 수요</span><b id="shop-demand">'+forecast().demand+'개</b></div>':'')+
      '<h4>상품 장부</h4>'+inventoryRows()+orderDesk();
  }
  return '<div class="work-title"><h3>'+room.name+'</h3><b>Lv. '+level+' / 3</b></div>'+(tradeNews(state)?'<p class="work-ledger">'+tradeNews(state)+'</p>':'')+controls+
    '<section class="expansion-quote"><h4>사업 확장</h4><p class="facility-benefit"><b>'+room.benefit+'</b><small>월 운영비　Lv.2 £5 · Lv.3 £16</small></p><div id="investment-quote">'+expansionQuote(id)+'</div></section><div class="facility-actions">'+btn(level===3?"최대 규모":"증설 · "+money(room.cost*level),"expand:"+id,!active||level===3||state.fund<room.cost*level,"work-order")+(level>1?btn("설비 매각 · "+money(Math.floor(room.cost*(level-1)*.5)),"liquidate:"+id,!active):"")+"</div>";
}
function expansionQuote(id){
  const level=state.shop[id], next=Math.min(3,level+1);
  const now=forecast(), after=forecast({...state.shop,[id]:next});
  function compare(label,before,after,format,lowerIsBetter=false){
    const change=after-before;
    const tone=change===0?"":(lowerIsBetter?change<0:change>0)?"gain":"loss";
    const result=next>level?' → <strong class="'+tone+'">'+format(after)+'</strong>':'';
    return '<div class="quote-row"><span>'+label+'</span><b>'+format(before)+result+'</b></div>';
  }
  const units=n=>n+"개",percent=n=>n+"%";
  let rows="";
  if(id==="works")rows+=compare("개당 생산 원가",now.unit,after.unit,money,true);
  if(id==="store")rows+=compare("구매 수요",now.demand,after.demand,units)+compare("현재 물량으로 판매",now.sold,after.sold,units);
  if(id==="design")rows+=compare("개당 도안 웃돈",level-1,next-1,money)+compare("신상품 개발비 할인",researchDiscount[level],researchDiscount[next],percent);
  if(state.phase!=="plan")return rows;
  rows+=compare("이달 영업이익",now.margin,after.margin,money);
  if(next===level)return rows;
  const gain=after.margin-now.margin, cost=departments[id].cost*level;
  let detail=gain<0?'현재 물량에서는 증설 뒤 비용이 더 큽니다.':gain>0?'같은 물량·가격·수요라면 '+Math.ceil(cost/gain)+'개월에 증설비 회수':id==="store"?"팔 수 있는 물량이 부족해 이달 추가 매출은 £0입니다.":"현재 생산·판매 조건에서는 이달 추가 이익이 없습니다.";
  if(id==="design")detail+=' · 개발비 할인 별도';
  rows+='<p class="quote-summary">증설비 '+money(cost)+' · 이달 영업이익 <strong class="'+(gain>0?"gain":gain<0?"loss":"")+'">'+(gain>0?"+":gain<0?"−":"")+money(Math.abs(gain))+'</strong></p><small>'+detail+'</small>';
  const neededAfter=cashNeeded()+(after.unit-now.unit)*state.qty;
  if(state.fund>=cost&&state.fund-cost<neededAfter)rows+='<p class="danger">증설하면 이번 달 준비비가 '+money(neededAfter-(state.fund-cost))+' 부족합니다.</p>';
  return rows;
}
function productionCost(unit){
  return '<span>총생산비</span><strong>'+money(unit*state.qty)+'</strong><small>개당 '+money(unit)+' × '+state.qty+'개</small>';
}
function salesGauge(sold){
  const available=forecast().available;
  return '<span>판매 가능 '+available+'개 중 예상 판매 <b>'+sold+'개</b> · '+(available?Math.round(sold/available*100):0)+'%</span>'+
    '<progress aria-label="예상 판매 비중" value="'+sold+'" max="'+Math.max(1,available)+'"></progress>';
}
function businessForecast(){
  const est=marketStats();
  return '<div class="work-figures">'+tile("예상 판매량",est.sold+"개","market-estimate")+tile("예상 매출",money(est.revenue),"market-revenue")+
    tile("생산비",money(est.unit*state.qty),"market-cost")+tile("예상 월말 자금",money(est.balance),"market-balance")+'</div><div class="sales-gauge" id="sales-gauge">'+salesGauge(est.sold)+'</div>';
}
function salesBooks(){
  const entries=state.salesBook.slice().reverse();
  const cap=Math.max(1,...entries.flatMap(r=>[r.revenue-(r.wholesale||0),r.wholesale||0,r.advance||0,r.cost||0]));
  function line(label,value,tone){
    return '<div class="sale-metric '+tone+'"><dt>'+label+'</dt><dd>'+money(value)+'</dd><i aria-hidden="true" style="--amount:'+100*value/cap+'%"></i></div>';
  }
  const rows=entries.map((r,i)=>{
    const retail=r.revenue-(r.wholesale||0),gain=r.investment?.total;
    return '<details class="sale-month"'+(i===0?' open':'')+'><summary><span>'+monthText(r.month)+'</span><b>'+products[r.product].name+'</b></summary>'+
      '<dl>'+line("소매 판매 · "+r.sold+"개",retail,"receipt")+
      (r.delivery?line(products[r.delivery.id].name+" 납품 "+r.delivery.shipped+"/"+r.delivery.qty+"개",r.wholesale||0,"receipt"):"")+
      line("납품 선금",r.advance||0,"receipt")+line("생산비",r.cost||0,"outlay")+'</dl>'+
      (gain!=null?'<p class="sale-gain"><span>시설 기여 이익</span><b>'+(gain>0?"+":gain<0?"−":"")+money(Math.abs(gain))+'</b></p>':'')+'</details>';
  }).join("");
  return '<details class="sales-books"><summary>월별 영업 장부</summary><p>판매 대금과 납품 선금은 가문 자금에 합산됩니다.</p>'+
    (rows||'<p>첫 월간 결산 후 판매 내역이 기록됩니다.</p>')+'</details>';
}
function managementPanel(){
  const company=tab==="company",active=state.phase==="plan";
  const nav='<div class="property-nav">'+option("저택","tab:estate",tab==="estate"||tab==="staffing")+(state.flags.townhouse?option("타운하우스","tab:townhouse",tab==="townhouse"):"")+option("팬텀 사(社)","tab:company",company)+'</div>';
  const header='<div class="property-head">'+nav+'<div><span>'+monthText(state.month)+'</span><b>'+money(state.fund)+'</b></div></div>';
  if(tab==="townhouse"&&state.flags.townhouse)return header+londonBoard();
  if(tab==="staffing")return header+staffBoard();
  const actual=state.salesBook.at(-1);
  const settled=["event","result","vow","investiture","ending"].includes(state.phase);
  const remaining=state.sequence?(state.sequence.bookedFees||state.plan.map(id=>actions[id]?.cost||0)).slice(state.sequence.index+1).reduce((sum,fee)=>sum+fee,0):0;
  const live=state.sequence?'<section class="budget-book"><h3>확정된 이달 예산</h3>'+amountRow("남은 교육·활동비",remaining)+amountRow("저택 운영",overhead()-Math.min(24,state.debt))+amountRow("팬텀사 운영",state.qty*state.sequence.unit+(state.sequence.trade?.holding||0)+(state.sequence.trade?.operation||0)+(state.sequence.trade?.penalty||0))+(state.debt?amountRow("채무 상환",Math.min(24,state.debt)):"")+'</section>':"";
  const budget=active?'<div id="live-budget">'+budgetTable()+'</div>':settled&&state.report?actualBudget():live;
  const bottom=company?(active?businessForecast():settled&&actual?'<div class="work-ledger"><span>'+monthText(actual.month)+' 영업 수입</span><b>'+money(actual.revenue+actual.advance)+'</b></div>':'')+budget+salesBooks():budget;
  return header+
    '<div class="property-grid"><div class="property-grounds">'+propertyMap(company)+bottom+'</div>'+
    '<section class="property-desk" aria-label="선택 시설">'+(company?companyDetail():roomDetail()+btn('<span class="staff-menu-icon" aria-hidden="true"></span><b>사용인 배치</b><span class="staff-menu-arrow" aria-hidden="true">›</span>',"tab:staffing",false,"staff-entry")+houseDesk()+annexDesk()+facilityLedger())+'</section></div>';
}

const marketGoods={
  cocoa:{name:"핫초콜릿",cost:22,stat:"motivation",amount:12,label:"의욕",line:"카카오를 진하게 풀었어. 숟가락을 세워 볼 생각이라면 조금 더 식혀야겠지만."},
  broth:{name:"따뜻한 콘소메",cost:24,stat:"hp",amount:13,label:"컨디션",line:"기름은 걷어 냈어. 입맛이 없는 날에는 한 컵만 마셔도 괜찮지."},
  lavender:{name:"라벤더 향주머니",cost:20,stat:"stress",amount:-12,label:"스트레스",line:"서랍에 넣어 두면 장부를 펼칠 때마다 향이 날 거야."},
  tart:{name:"체리 타르트",cost:14,stat:"motivation",amount:6,label:"의욕",line:"가장자리가 조금 깨진 건 내가 먹었어. 이건 마차로 가져가도 멀쩡할걸."},
  ginger:{name:"생강 당과",cost:10,stat:"hp",amount:4,label:"컨디션",line:"설탕을 두 번 입혔지. 그래도 마지막엔 생강 맛이 남아."},
  biscuit:{name:"버터 비스킷 한 봉",cost:8,stat:"stress",amount:-3,label:"스트레스",line:"깨지기 전에 하나 집어. 봉투는 책갈피로 써도 돼."},
  novel:{name:"주머니판 모험소설",icon:"reading",cost:17,stat:"motivation",amount:8,label:"의욕",line:"책갈피가 붙어 있네. 집사가 부르면 거기까지만 읽으면 되겠지."},
  tea:{name:"홍차 한 잔",cost:12,stat:"stress",amount:-5,label:"스트레스",line:"마침 차가 잘 우러났어. 한 잔 하겠어?"},
  scone:{name:"버터 스콘",cost:15,stat:"hp",amount:6,label:"컨디션",line:"스콘은 따뜻할 때 반으로 갈라야 버터가 스며들지."},
  birds:{name:"새소리 악보집",cost:44,icon:"music",raise:"매력",lower:"의지",line:"이 곡은 끝까지 밀어붙이면 새가 날아가 버려. 한 소절쯤은 쉬어도 좋아, 백작."},
  puzzles:{name:"상아색 칠교판",cost:44,icon:"study",raise:"의지",lower:"매력",line:"일곱 조각이면 학 한 마리가 돼. 손님이 와도 자리를 뜨기 싫어질걸."},
  samples:{name:"비단 견본장",cost:44,icon:"supplier",raise:"경영",lower:"기품",line:"소매를 걷고 천 끝을 비벼 봐. 장갑 낀 손으로는 올이 풀리는지 모르거든."},
  letters:{name:"외교 서한집",cost:44,icon:"letters",raise:"기품",lower:"통찰",line:"마음에 들지 않는 선물에도 답례는 써야지. 첫 장에 아주 좋은 문안이 있어."},
  maps:{name:"항로 측량 노트",cost:44,icon:"inquiry",raise:"지성",lower:"체력",line:"이 배가 언제 항구에 닿을까? 내 계산으론 저녁 산책을 한 번 걸러야 풀릴걸."},
  trails:{name:"발자국 수첩",cost:44,icon:"walk",raise:"통찰",lower:"지성",line:"정원에 가져가 봐. 책에 그린 여우 발자국과 진짜가 얼마나 닮았는지."},
  rope:{name:"선원의 매듭줄",cost:44,icon:"exercise",raise:"체력",lower:"경영",line:"짐꾼이 묶은 매듭을 직접 풀어 보겠어? 오늘 장부는 내가 봐 줄까?"}
};
let selectedGood="tea";
const exchangeAmount=6;
function exchangeQuote(g){
  const current=state.stats[g.raise];
  const limit=state.flags.lateDispatch?exchangeAmount:Math.max(0,masteryThreshold-current)+1;
  const gain=ordinaryAbilityGain(current,Math.min(exchangeAmount,limit));
  const reason=state.flags.lauExchangeMonth===state.month?"이달의 교본은 이미 사용했습니다.":
    gain<=0?"교본으로 기를 수 있는 "+statLabel(g.raise)+"의 한도에 도달했습니다.":
    state.stats[g.lower]<exchangeAmount?statLabel(g.lower)+" 수치가 "+exchangeAmount+" 이상 필요합니다.":"";
  return {gain,reason};
}
function marketPanel(){
  const cards=Object.entries(marketGoods).map(([id,g])=>
    '<button type="button" class="goods-ticket" data-action="goods:'+id+'" aria-pressed="'+(selectedGood===id)+'">'+
    '<b>'+g.name+'</b><img src="'+(g.icon?"assets/planner-icons/"+g.icon+".png":"assets/goods-"+id+".webp")+'" alt=""><strong>'+money(g.cost)+'</strong></button>').join("");
  const g=marketGoods[selectedGood],before=state[g.stat],after=g.raise?null:cap(before+g.amount);
  const exchange=g.raise?exchangeQuote(g):null;
  const reason=state.phase!=="plan"?"일정 편성 중에 구매할 수 있습니다.":state.fund<g.cost?"보유금이 부족합니다.":
    exchange?exchange.reason:after===before?g.label+" 수치가 이미 한도에 도달했습니다.":"";
  const preview=exchange?'<div class="stat-preview"><b>'+statLabel(g.raise)+' '+state.stats[g.raise]+' → '+(state.stats[g.raise]+exchange.gain)+'</b><br>'+statLabel(g.lower)+' '+state.stats[g.lower]+' → '+Math.max(0,state.stats[g.lower]-exchangeAmount)+'<br><small>교본 전체 중 매월 1개 · 즉시 사용</small></div>':
    '<div class="stat-preview"><div class="stat-values"><span>'+g.label+'</span><b>'+before+' → '+after+'</b><strong>'+signed(after-before)+'</strong></div>'+
    '<div class="stat-track" aria-hidden="true"><i style="width:'+Math.min(before,after)+'%"></i><i class="stat-change" style="width:'+Math.abs(after-before)+'%"></i></div></div>';
  return '<div class="lau-counter">'+framedStanding("라우","assets/npc-lau.webp","lau-standing")+
    '<div class="shop-stock"><div class="shop-purse"><span>보유금</span><strong>'+money(state.fund)+'</strong></div>'+
    '<div class="goods-list" role="group" aria-label="판매 상품">'+cards+'</div></div>'+
    '<section class="shop-talk" aria-label="상품 설명"><h3>라우</h3><p>'+g.line+'</p>'+
    '<div class="shop-trade">'+preview+
    btn(money(g.cost)+" 구매","buy:"+selectedGood,Boolean(reason),"shop-buy")+'</div>'+
    (reason?'<small>'+reason+'</small>':'')+'</section></div>';
}
const panels={market:marketPanel,title:titlePanel,continue:coverPanel,album:coverPanel,settings:coverPanel,exit:coverPanel,plan:planPanel,status:statusPanel,estate:managementPanel,townhouse:managementPanel,staffing:managementPanel,company:managementPanel,record:recordPanel,save:savePanel};
state=normalizeSave(state);
// Keep a recoverable old ending before its autosave or manual slot is reused.
for(const run of [saves.auto,saves[1],saves[2],saves[3]]){
  if(run?.phase!=="ending" || !Object.hasOwn(endingScenes,run.ending) || saves.growthGallery?.[run.ending]?.length)continue;
  if(!run.past?.length && !run.events?.length)continue;
  saves.growthGallery??={};
  saves.growthGallery[run.ending]=growthRecord(run);
}

restoreCGRecords();

function sheetTitle(){
  if(coverPages.includes(tab))return gameString(tab==="exit"?"exitTitle":tab);
  if(tab==="plan"){
    if(state.phase==="vow")return "마지막 명령";
    if(state.phase==="event")return castName(pendingEvent());
    if(state.phase==="result")return "월간 결산";
    if(state.phase==="ending")return endingLabels[state.ending][0];
    return "월간 일정";
  }
  return {market:"라우의 상점",title:"Earl Phantomhive Maker",status:"상태",estate:"저택 관리",townhouse:"런던 타운하우스",staffing:"사용인 배치",company:"팬텀 사 경영",record:"가문 장부",save:"저장 · 설정"}[tab];
}
const povertyRemarks=["이번 달 석탄값은 얼마지? 지난달 영수증도 가져와.","새 장갑은 됐어. 단추만 다시 달면 쓸 수 있어.","그 찻잎, 아직 한 번은 더 우릴 수 있어."];
const homeRemarks=["무슨 일이지?","차가 식기 전에 마저 마시겠어.","오늘 일정은 확인했나?","잠깐이라면 들어주지."];
let remarkIndex=0;
let remarkTimeout;

function greetCiel(){
  if(tab!=="home")return;
  const bubble=$("ciel-aside");
  clearTimeout(remarkTimeout);
  const sprite=$("home-standing");
  sprite.classList.remove("greeting-hop");
  void sprite.offsetWidth;
  sprite.classList.add("greeting-hop");
  const remarks=worriedAboutMoney(state)?povertyRemarks:homeRemarks;
  bubble.textContent=remarks[remarkIndex%remarks.length];
  remarkIndex=(remarkIndex+1)%remarks.length;
  remarkTimeout=setTimeout(()=>{bubble.textContent="";},3000);
}
function render(focus=false,playbackOffset=0){
  if(tab==="plan"&&state.phase==="guide"&&!tourSession){showGuidePage(savedGuideStep(state));return;}
  if(state.phase==="vow"&&tab==="plan"){beginFinale(cielEndingId(state.stats.의지,qualifies()));return;}
  if($("scene").dataset.artOnly==="true")setArtOnly($("scene"),false);
  if(tab!=="home"){
    clearTimeout(remarkTimeout);
    $("ciel-aside").textContent="";
    $("home-standing").classList.remove("greeting-hop");
  }
  const panel=$("panel");
  $("scene").dataset.cover=String(tab==="title"||coverPages.includes(tab));
  $("scene").dataset.albumReplay=String(tab==="endingMemory"&&endingReplay?.origin==="album");
  const sameDesk=(tab==="estate"||tab==="company"||tab==="townhouse"||tab==="staffing") && $("scene").dataset.mode===tab && !$("sheet").hidden;
  const deskScroll=sameDesk?panel.scrollTop:0;
  const openSections=new Set(sameDesk
    ? Array.from(panel.querySelectorAll("details[open] > summary"),summary=>summary.textContent)
    : []);
  const standing=$("home-standing"),greetButton=$("ciel-greet");
  if(tab==="home"&&standing.parentElement!==greetButton)greetButton.append(standing);
  if(tab!=="home"&&standing.parentElement===greetButton)greetButton.after(standing);
  if(standing.getAttribute("src")!==portraits.시엘)standing.src=portraits.시엘;
  const visibleAge=tab==="staffMemory"&&recruitMemory?recruitMemory.age:currentCielAge();
  setPortraitAge($("scene"),visibleAge);
  greetButton.style.aspectRatio=["403 / 1000","1024 / 1530","910 / 1530"][visibleAge-10];
  updateIllness(state);
  musicPlayer.sync(trackForView());
  stopPlayback();
  $("system-back").disabled=tab==="home"||tab==="title";
  $("system-status").setAttribute("aria-pressed",String(tab==="status"));
  $("system-book").setAttribute("aria-pressed",String(tab==="record"));
  $("system-save").setAttribute("aria-pressed",String(tab==="save"));
  const opening=inOpening();
  $("scene").dataset.prologue=String(opening);
  $("overture").hidden=!opening;
  if(opening){
    for(const id of ["calendar","sheet","nav","home-standing","conversation","playback"])$(id).hidden=true;
    Object.assign($("scene").dataset,{mode:"prologue",calendar:"false",business:"false",story:"true",sheet:"false",settled:"false"});
    drawOpening(focus);
    return;
  }
  stopOpeningAuto();openingSession=false;
  playNovelCue($("overture"),null);
  $("scene").dataset.settled=String(tab==="plan"&&state.phase==="result");
  const stage=state.phase==="scene"&&tab==="plan";
  $("scene").dataset.mode=stage?"play":tab;
  $("playback").hidden=!stage;
  $("playback").innerHTML=stage?playMarkup():"";
  const vn=faceDialogue();
  if(vn&&state.choiceImpact?.owner===tab&&state.choiceImpact.next){
    const con=$("conversation");
    con.querySelectorAll(".dialogue,.answers,.review-slip").forEach(el=>el.remove());
    con.insertAdjacentHTML("beforeend",impactMarkup(state.choiceImpact));
  }
  if(!vn)playNovelCue($("conversation"),null);
  if(vn){
    const conversation=$("conversation");
    const choices=conversation.querySelector(".dialogue .answers");
    if(choices && choices.childElementCount>1){
      choices.setAttribute("role","group");
      choices.setAttribute("aria-label","대화 선택지");
      conversation.append(choices);
    }
  }
  $("scene").dataset.story=String(vn);
  if(stage||vn){
    $("calendar").hidden=true;$("sheet").hidden=true;$("nav").hidden=true;
    $("home-standing").hidden=stage||vn;
    $("scene").dataset.business="false";$("scene").dataset.calendar="false";
    const reviewDay=state.phase==="visit"&&state.sequence?.index===2?calendarDate(state.month+1,0).getUTCDate():state.phase==="review"&&tab==="plan"?(state.sequence.index<2?(state.sequence.index+1)*10:calendarDate(state.month+1,0).getUTCDate()):1;
    $("date").innerHTML=dayPlate(state.month,reviewDay);updateMoney();
    if(stage)startPlayback(playbackOffset);
    if(focus)(vn?$("conversation"):$("playback")).querySelector("button:not(:disabled)")?.focus({preventScroll:true});
    return;
  }
  const home=tab==="home";
  const calendar=tab==="plan" && state.phase==="plan";
  if(!calendar)editingVisit=false;
  $("home-standing").hidden=!(home||calendar||tab==="status");
  $("calendar").hidden=!calendar;
  $("scene").dataset.calendar=String(calendar);
  $("scene").dataset.business=String(tab==="company"||tab==="estate"||tab==="townhouse"||tab==="staffing");
  $("nav").hidden=!home;
  $("sheet").hidden=home||calendar;
  $("scene").dataset.sheet=String(!home);
  $("date").innerHTML=dayPlate(state.month,1);updateMoney();
  if(calendar){
    $("panel").innerHTML="";
    $("calendar").innerHTML=plannerContents();
    if(focus)$("calendar").focus({preventScroll:true});
    return;
  }
  $("calendar").innerHTML="";
  if(home){
    const runLabel={contract:"계약 계속",guide:"안내 계속",visit:"방문 계속",review:"강평 보기",plan:"실행",scene:"일정 재개",slotEvent:"사건 확인",vow:"심의 확인",investiture:"왕실 서신",event:"사건 확인",result:"결산 확인",ending:"결과 확인"}[state.phase];
    const opening=["contract","guide"].includes(state.phase);
    const menu=opening?[["run",runLabel],["tab:save","저장 · 설정"]]:commands;
    $("nav").innerHTML='<div class="command-grid">'+menu.map(([action,label],index)=>
      btn(action==="run"?runLabel:label,action,false,(index<2?"hero-action ":"")+(index===1?"primary":""))
        .replace("data-action=", 'aria-keyshortcuts="'+(index+1)+'" data-action=')).join("")+'</div>';
    $("panel").innerHTML="";
    if(focus)focusAction("tab:plan");
    return;
  }
  const title=$("sheet-title");
  title.textContent=sheetTitle();
  panel.innerHTML=panels[tab]();
  if(openSections.size){
    for(const summary of panel.querySelectorAll("details > summary")){
      if(openSections.has(summary.textContent))summary.parentElement.open=true;
    }
  }
  panel.scrollTop=deskScroll;
  if(focus){
    const target=tab==="title"?panel.querySelector(".cover-actions button"):
      coverPages.includes(tab)?panel.querySelector(".cover-leaf h2"):title;
    target.focus({preventScroll:true});
  }
}
let flashTimer;
function announce(message){
  flash(message);
  clearTimeout(flashTimer);
  if(message)flashTimer=setTimeout(()=>flash(""),2400);
}
let pointerGesture=null, popoverTimer, lastDialogOpen=false;
function respond(kind,rect,target){
  if(target){
    const element=document.querySelector(target);
    if(element){
      element.classList.remove("feedback-highlight");
      void element.offsetWidth;
      element.classList.add("feedback-highlight");
    }
  }
  if(pointerGesture){pointerGesture.kind=kind;return;}
  emitPress(kind,rect);
}
function emitPress(kind,rect){
  if(tab!=="exit")playSound();
  if(matchMedia("(prefers-reduced-motion: reduce)").matches||!rect||rect.width<=0||rect.height<=0)return;
  const x=rect.xPoint??rect.left+rect.width/2,y=rect.yPoint??rect.top+rect.height/2;
  const mark=document.createElement("i");
  mark.className="press-mark mark-"+kind;
  mark.style.left=x+"px";mark.style.top=y+"px";
  const layer=$("fx-layer");
  if(typeof layer.showPopover==="function"){
    const dialogOpen=Boolean($("picker").open);
    if(dialogOpen!==lastDialogOpen&&layer.matches(":popover-open"))layer.hidePopover();
    lastDialogOpen=dialogOpen;
    if(!layer.matches(":popover-open"))layer.showPopover();
    clearTimeout(popoverTimer);
    popoverTimer=setTimeout(()=>{if(layer.matches(":popover-open"))layer.hidePopover();},750);
  }
  layer.append(mark);
  setTimeout(()=>mark.remove(),390);
}
function emphasize(node){
  node.classList.remove("pulse");
  void node.offsetWidth;
  node.classList.add("pulse");
}
function popMoney(diff){
  if(!diff)return;
  emphasize($("money"));
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const badge=$("money");
  let rect=badge.getBoundingClientRect();
  if(!rect.width||!rect.height){
    const balance=document.querySelector(".property-head b, .plan-balance strong");
    if(!balance)return;
    rect=balance.getBoundingClientRect();if(!rect.width||!rect.height)return;
    emphasize(balance);
  }
  const chip=document.createElement("span");
  chip.className="number-pop"+(diff<0?" loss":"");
  chip.textContent=(diff<0?"−":"+")+money(Math.abs(diff));
  chip.style.left=Math.min(rect.left,innerWidth-78)+"px";
  chip.style.top=rect.bottom+25+"px";
  $("fx-layer").append(chip);
  setTimeout(()=>chip.remove(),930);
}
function setNumber(key,value){
  if(state.phase!=="plan"||!["qty","price"].includes(key)||!Number.isFinite(value))return;
  state[key]=Math.min(40,Math.max(key==="price"?4:0,Math.round(value)));
  const field=$(key);
  field.value=state[key];
  $(key+"down").disabled=state[key]===(key==="price"?4:0);
  $(key+"up").disabled=state[key]===40;
  const estimate=marketStats();
  $("market-estimate").textContent=estimate.sold+"개";
  $("market-revenue").textContent=money(estimate.revenue);
  if(selectedDepartment==="store")$("shop-demand").textContent=forecast().demand+"개";
  const cart=document.querySelector(".delivery-cart");
  if(key==="qty"&&((state.qty===0&&cart)||(state.qty>0&&!cart))) {
    const map=document.querySelector(".property-map");
    if(map)map.outerHTML=propertyMap(true);
  }
  $("market-cost").textContent=money(estimate.unit*state.qty);
  $("market-balance").textContent=money(estimate.balance);
  $("sales-gauge").innerHTML=salesGauge(estimate.sold);
  if(selectedDepartment==="works")$("work-cost").innerHTML=productionCost(estimate.unit);
  $("investment-quote").innerHTML=expansionQuote(selectedDepartment);
  $("live-budget").innerHTML=budgetTable();
  emphasize(field);
  persist();
}
function focusAction(action){
  document.querySelector('button[data-action="'+action+'"]:not(:disabled)')?.focus({preventScroll:true});
}
document.addEventListener("change",event=>{
  if(state.phase!=="plan")return;
  const field=event.target;
  if(field.id!=="price"&&field.id!=="qty")return;
  setNumber(field.id,Number.isFinite(field.valueAsNumber)?field.valueAsNumber:state[field.id]);
});
function goBack(rect){
  if($("picker").open){
    handleAction("close",rect);
    return true;
  }
  if(editingVisit&&tab==="plan"&&state.phase==="plan"){
    editingVisit=false;
    render();
    focusAction("pick-visit");respond("back",rect);
    return true;
  }
  if(tab==="home"||tab==="title")return false;
  handleAction("back",rect);
  return true;
}
document.addEventListener("contextmenu",event=>{
  if(event.target.closest("#scene, #picker")&&goBack())event.preventDefault();
});
document.addEventListener("keydown",event=>{
  if(event.altKey||event.ctrlKey||event.metaKey||event.repeat)return;
  if(tourSession)return;
  if(event.key==="Escape"){
    if(goBack())event.preventDefault();
    return;
  }
  if($("picker").open||event.target.matches("input,textarea,[contenteditable]"))return;
  if(inOpening()&&["ArrowRight","ArrowLeft"].includes(event.key)){
    event.preventDefault();stopOpeningAuto();stepOpening(event.key==="ArrowRight"?1:-1);return;
  }
  if(tab==="home"&&/^[1-6]$/.test(event.key)){
    event.preventDefault();
    const action=commands[Number(event.key)-1][0];
    handleAction(action,document.querySelector('[data-action="'+action+'"]')?.getBoundingClientRect());
  }
});
let pendingConfirmation=null;
let lastMenu="tab:plan";
const utilityTabs=["status","record","save"];
let utilityOrigin=null;
function askConfirmation(key,title,description,label,rect,extra=""){
  pendingConfirmation=key;
  const modal=$("picker");
  modal.dataset.confirmation=key;
  modal.innerHTML='<div class="panel-head"><h2 id="picker-title">'+title+'</h2>'+
    '<button type="button" class="close" data-action="close" aria-label="닫기">×</button></div><div class="panel-body">'+
    (description?'<p class="muted">'+description+'</p>':'')+extra+'<div class="inline">'+btn("취소","close")+btn(label,"confirm",false,"primary")+'</div></div>';
  if(tourSession)modal.show();
  else modal.showModal();
  modal.querySelector('.panel-body [data-action="close"]').focus();
  respond("tap",rect);
}
function handleAction(key,rect,confirmed=false){
  const [action,id,value]=key.split(":");
  if(action==="weather-close"&&state.phase==="weatherBriefing"){
    state.phase="plan";
    startFinnyAtTurn(state);
    tab=state.phase==="plan"?"home":"plan";
    persist();render(true);return;
  }
  const impact=state.choiceImpact;
  if(impact?.next && (tab===impact.owner||action==="impact-close")){
    if(action!=="impact-close")return;
    const next=impact.next;
    delete state.choiceImpact;
    if(next==="event")finishEventChoice(pendingEvent());
    else if(next==="visit")finishVisit();
    else handleAction(next,rect);
    return;
  }
  if(tab==="chat"&&["back","system-back"].includes(action)&&openChoiceImpact("back"))return;
  if(storyDemo&&!["choose","term-next","term-close","music"].includes(action))return;
  if(previewFair){
    if(action==="fair-close"){location.reload();return;}
    if(action!=="fair-next" && action!=="music")return;
  }
  if(action==="fair-notices"&&tab==="plan"&&state.phase==="plan"){openFairNotices();return;}
  if(action==="fair-entry"){selectFestival(id,value);return;}
  if(festivalAction(action,id))return;
  if(encounterAction(action,id))return;
  if(tab==="plan"&&["slotEvent","event"].includes(state.phase)&&["term-close","term-next"].includes(action)){
    const event=pendingEvent();
    if(!event||(!termPages(event)&&!state.termOutcome?.response))return;
    if(action==="term-close"&&state.termOutcome?.id===event.id){
      if(openChoiceImpact("term-close"))return;
      const next=state.termOutcome.nextScene;
      if(next&&events.some(scene=>scene.id===next&&scene.linkedOnly)){
        state.pending=next;
        delete state.termOutcome;
        state.termPage=0;
        persist();render(true);
      }else finishEventChoice(event);
    }
    else if(action==="term-next"&&Number(id)===(state.termPage||0)){
      state.termPage=Number(id)+1;persist();render(true);
    }
    return;
  }
  if(action==="ending-art"&&(tab==="record"||tab==="album"||(tab==="plan"&&state.phase==="ending"))&&hasEndingRecord(id)){
    stopRecruitAuto();endingReplay={id,at:0,origin:tab};tab="endingMemory";render(true);return;
  }
  if(tab==="endingMemory"&&["back","system-back"].includes(action)){
    stopRecruitAuto();tab=endingReplay?.origin||"record";endingReplay=null;render(true);return;
  }
  if(action==="recruit-memory"&&tab==="record"&&state.events.some(e=>e.id===id)){openRecruitMemory(id);return;}
  if(tab==="staffMemory"&&["system-back","back"].includes(action)){closeRecruitMemory();return;}
  const fund=state.fund;
  if(openingAction(action,id,confirmed,rect))return;
  if(tab==="recollection"&&["system-back","back"].includes(action)){finishOpening();return;}
  if(tab==="album"&&action==="cg"&&cgAlbumEntries()[Number(id)]?.seen){
    albumScroll=$("panel").scrollTop;albumPicture=Number(id);render();$("panel").scrollTop=0;
    $("panel").querySelector("h2")?.focus({preventScroll:true});return;
  }
  if(tab==="album"&&albumPicture!==null&&["back","system-back"].includes(action)){
    const index=albumPicture;albumPicture=null;render();$("panel").scrollTop=albumScroll;focusAction("cg:"+index);return;
  }
  if(tab==="title"&&action==="cover"&&coverPages.includes(id)){
    if(id==="continue"){
      if(!coverSaveSlots.some(hasCoverSave))return;
      if(hasCoverSave("auto")&&!coverSaveSlots.slice(1).some(hasCoverSave)){handleAction("resume",rect);return;}
    }
    tab=id;render(true);
    if(id==="exit"&&(storageOk||!hasCoverSave("auto"))&&window.opener&&window.parent===window)window.close();
    return;
  }
  if((tab==="title"||tab==="continue")&&action==="resume"&&hasCoverSave("auto")){
    utilityOrigin=null;
    tab=state.phase==="plan"?"home":"plan";render(true);
    return;
  }
  if(action==="open-guide"){showGuidePage(0);return;}
  if(action==="goods"&&tab==="market"&&Object.hasOwn(marketGoods,id)){
    selectedGood=id;
    const panel=$("panel"),scroll=panel.scrollTop,itemsScroll=panel.querySelector(".goods-list").scrollTop;
    panel.innerHTML=marketPanel();
    panel.querySelector(".goods-list").scrollTop=itemsScroll;
    panel.scrollTop=scroll;
    focusAction(key);respond("choose",rect);return;
  }
  if(action==="motion"&&(tab==="save"||tab==="settings")&&Object.hasOwn(motionLabels,id)){
    motionMode=id;try{localStorage.setItem(motionKey,id);}catch{}
    syncMotion();render();focusAction("motion:"+id);return;
  }
  if(action==="greet-ciel"){greetCiel();return;}
  if(action==="open-menu"){
    editingVisit=false;
    utilityOrigin=null;
    tab="home";
    render(true);
    return;
  }
  if(["material","lead"].includes(action)&&state.phase==="plan"&&!state.prototype){
    const options=action==="material"?["common","select"]:["maker","sales"];
    if(!options.includes(id))return;
    state[action]=id;persist();render();return;
  }
  if(action==="order"&&state.phase==="plan"&&tab==="company"){
    const offer=customerOffer(state,id);
    if(!offer)return;
    state.order=offer;persist();render();announce(tradeBuyer(offer)+"의 발주서를 접수했습니다.");return;
  }
  if(action==="liquidate"&&state.phase==="plan"&&tab==="company"&&Object.hasOwn(departments,id)){
    const level=state.shop[id];if(level<2)return;
    const proceeds=Math.floor(departments[id].cost*(level-1)*.5);
    if(!confirmed){askConfirmation(key,"설비를 매각할까요?",departments[id].name+" Lv. "+level+" → "+(level-1)+" · 매각 대금 "+money(proceeds),"매각",rect);return;}
    state.shop[id]--;state.fund+=proceeds;state.accounts.divest=(state.accounts.divest||0)+proceeds;
    persist();render();announce("설비 매각 대금 "+money(proceeds)+" 입금");return;
  }
  if(action==="brief"&&state.phase==="plan"&&!state.prototype&&["family","gift"].includes(id)){state.brief=id;persist();render();respond("choose",rect);return;}
  if(action==="sample"&&state.phase==="result"&&sampleReview()){
    const p=state.prototype;
    if(id==="approve")p.approved=true;
    else if(id==="redo"&&state.fund>=12&&state.month<state.duration-1&&!p.reworked){state.fund-=12;state.accounts.company+=12;p.reworked=true;p.review=state.month+1;}
    else return;
    state.log.push(products[p.product].name+(p.approved?" 출시 승인":" 재작업 예약 · £12"));persist();render();respond("decision",rect);return;
  }
  if(chapterAction(action,id,confirmed,rect)){respond("decision",rect);return;}
  if(action==="care"&&state.phase==="plan"&&["clean","guard","routine","repair","defer"].includes(id)){state.houseCare=id;persist();render();focusAction(key);respond("choose",rect);return;}
  if(action==="inspect"&&$("picker").open){pendingConfirmation=null;$("picker").close();tab=id==="estate"?"estate":"company";state.managementTab=tab;persist();render(true);return;}

  if(action==="system-back"){goBack(rect);return;}
  if(action==="next-turn"){
    if(state.phase!=="review"||Number(id)!==state.month||Number(value)!==state.sequence.index)return;
    continueSequence();respond("decision",rect);return;
  }
  if(action==="skip"){finishScene();respond("step",rect);return;}
  if(action==="speed"){speed=speed===1?3:1;const b=$("playback").querySelector('[data-action="speed"]');if(b)b.textContent="재생 ×"+speed;respond("step",rect);return;}
  if(action==="category"){lessonPage=Number(id);render();focusAction(key);respond("tap",rect,".lesson-index");return;}
  if(action==="chat-follow"){
    const spoken=state.spoken;
    const follow=chatFollowups[spoken?.topic]?.[Number(id)];
    if(tab==="chat"&&spoken?.turn===state.month&&spoken.replyRead&&spoken.followIndex==null&&follow){
      spoken.followIndex=Number(id);persist();render(true);
    }
    return;
  }
  if(action==="chat-reply"){
    if(tab==="chat"&&state.spoken?.turn===state.month&&state.spoken.reply){
      state.spoken.replyRead=true;persist();render(true);
    }
    return;
  }
  if(action==="chatline"){speak(id);respond("decision",rect,".dialogue");return;}
  if(action==="read-verdict"&&state.phase==="investiture"){
    tab="plan";finish(state.ending);return;
  }
  if(action==="annex"||action==="townhouse"){
    if(action==="annex"&&state.phase!=="plan")return;
    if(action==="townhouse"){
      if(!canBuyTownhouse())return;
      state.fund-=250;state.flags.townhouse=true;
    }else{
      const cost=annex[id].cost*state.annex[id];if(state.annex[id]>=3||state.fund<cost)return;
      state.fund-=cost;state.annex[id]++;
    }
    postPurchase(action,fund);
    if(action==="townhouse"&&startTownhouseGuests(state)){
      tab="plan";persist();render(true);return;
    }
    const panelScroll=$("panel").scrollTop;
    persist();render();
    $("panel").scrollTop=panelScroll;
    respond("build",rect,".property-desk");
    popMoney(state.fund-fund);return;
  }
  if(action==="station"){
    if(tab==="estate" && Object.hasOwn(estateRooms,id))selectedRoom=id;
    else if(tab==="company" && Object.hasOwn(departments,id))selectedDepartment=id;
    else return;
    const scroll=$("panel").scrollTop;
    render();
    $("panel").scrollTop=scroll;
    focusAction(key);
    if(matchMedia("(max-width:960px) and (orientation:portrait), (max-width:540px)").matches){
      const heading=document.querySelector(".property-desk h3");
      if(heading){
        heading.tabIndex=-1;
        heading.focus({preventScroll:true});
        heading.scrollIntoView({block:"start"});
      }
    }
    respond("tap",rect,".work-title");
    return;
  }
  if(action==="sound"||action==="music"){
    toggleChannel(action==="sound"?"sfx":"bgm");
    respond("choose",rect);
    return;
  }
  if(action==="tab"){
    if(id==="townhouse"&&!state.flags.townhouse)return;
    if(id==="townhouse")selectedEmployee=null;
    if(["contract","guide"].includes(state.phase)&&!["save","plan","title"].includes(id)){tab="plan";render(true);return;}
    if(id==="chat"&&state.phase!=="plan"){announce("진행 중인 일정과 결산을 먼저 마쳐 주세요.");return;}
    if(id==="plan")lessonPage=Math.max(0,categories.findIndex(([,list])=>list.includes(state.plan[selectedSlot])));
    if(utilityTabs.includes(id)){
      if(!utilityTabs.includes(tab))utilityOrigin=tab;
    }else utilityOrigin=null;
    if(id==="staffing"){selectedEmployee=null;estateReturnScroll=$("panel").scrollTop;}
    const openManagement=tab==="home"&&id==="estate";
    lastMenu=(["company","staffing","townhouse"].includes(id))?"tab:estate":key;
    const lastDesk=state.managementTab;
    tab=openManagement&&(lastDesk==="company"||(lastDesk==="townhouse"&&state.flags.townhouse))?lastDesk:id;
    if(["estate","company","townhouse"].includes(tab)&&state.managementTab!==tab){
      state.managementTab=tab;persist();
    }
    render(true);respond("tap",rect);return;
  }
  if(action==="back"){
    if(tab==="title")return;
    if(coverPages.includes(tab)){
      const from=tab;
      tab="title";render();focusAction("cover:"+from);return;
    }
    if(tab==="save"&&utilityOrigin==="title"){utilityOrigin=null;tab="title";render(true);return;}
    if(tab==="staffing"){tab="estate";render();$("panel").scrollTop=estateReturnScroll;focusAction("tab:staffing");return;}
    if(["contract","guide"].includes(state.phase)){tab="plan";render(true);return;}
    if(utilityTabs.includes(tab)&&utilityOrigin){
      tab=utilityOrigin;utilityOrigin=null;render(true);respond("back",rect);return;
    }
    editingVisit=false;
    tab="home";render();focusAction(commands.find(([action])=>action===lastMenu)?.[0]||"tab:plan");respond("back",rect);return;
  }
  if(action==="run"){
    if(state.phase==="plan"&&planReady())handleAction("execute",rect);
    else{tab="plan";render(true);respond("tap",rect);}
    return;
  }
  if(action==="pick-visit"){
    editingVisit=true;
    render();
    if(state.visit)focusAction("visit:"+state.visit);
    else focusAction("pick-visit");
    respond("tap",rect);return;
  }
  if(action==="pick"){
    if(Number(id)===contestSlot&&reservedContest(state))return;
    editingVisit=false;
    selectedSlot=Number(id);
    const scroll=$("panel").scrollTop;
    render();
    $("panel").scrollTop=scroll;
    focusAction(key);respond("tap",rect);return;
  }
  if(action==="close"){
    pendingConfirmation=null;
    const fairDialog=$("picker").querySelector(".fair-dialog");
    $("picker").close();
    if(fairDialog)focusAction("fair-notices");
    respond("back",rect);return;
  }
  if(action==="confirm"){
    const operation=pendingConfirmation;
    pendingConfirmation=null;
    $("picker").close();
    if(operation)handleAction(operation,rect,true);
    return;
  }
  if(action==="step"&&state.phase==="plan"){
    setNumber(id,state[id]+Number(value));respond("step",rect,"#market-balance");return;
  }
  if(action==="execute"&&state.phase==="plan"&&!planReady()){
    const vacant=scheduledActivities(state).findIndex(id=>!actions[id]);
    tab="plan";editingVisit=vacant===-1;selectedSlot=editingVisit?0:vacant;
    render(true);return;
  }
  if(action==="execute"&&!confirmed&&state.phase==="plan"){
    const contest=reservedContest(state);
    const periods=state.plan.map((id,index)=>contest&&index===contestSlot
      ?'<li class="contest-period"><small>하순 · 경연</small><b>'+contest.title+'</b></li>'
      :'<li><small>'+slotNames[index]+'</small>'+plannerIcon(id)+'<b>'+courseName(id)+'</b></li>').join("");
    const shortage=marketStats().shortfall;
    const instructions=(shortage?'<p class="calendar-warning">준비비 중 '+money(shortage)+'는 외상으로 진행합니다.</p>':'')+'<details class="desk-review"><summary>이달 운영 지시 확인·변경</summary>'+
      '<div><p><b>저택</b><br>'+(state.people.tanaka?"타나카 · "+dutyName(state.jobs.tanaka)+" · ":"")+'시설 상태 '+houseValues().시설상태+'</p>'+btn("저택 지시 변경","inspect:estate")+'</div>'+
      '<div><p><b>팬텀사</b><br>'+products[state.product].name+' '+state.qty+'개 · 판매가 '+money(state.price)+'</p>'+btn("팬텀사 지시 변경","inspect:company")+'</div></details>';
    askConfirmation(key,"이번 달 일정을 시작할까요?","","일정 시작",rect,
      '<ol class="confirm-periods">'+periods+'</ol><div class="confirm-funds"><span>준비비</span><strong>'+money(cashNeeded())+'</strong></div>'+budgetTable(true)+instructions);
    return;
  }
  if(action==="execute"||action==="advance"||action==="choose"){
    const transition={execute,advance,choose}[action];
    tab="plan";
    transition(Number(id));
    respond(action==="choose"?"decision":"execute",rect,action==="advance"?"#date":".stage-top, .dialogue, .sheet-head");
    popMoney(state.fund-fund);
    return;
  }
  let message="";
  let pattern="choose";
  if(action==="reset"){
    if(tab!=="title"){utilityOrigin=null;tab="title";render(true);return;}
    if(saves.auto?.v===1&&!confirmed){askConfirmation(key,"새 회차","현재 진행이 초기화됩니다.<br>수동 저장은 유지됩니다.","새 회차 시작",rect);return;}
    utilityOrigin=null;state=initial();state.weather=rollSeasonWeather(state.month);selectedSlot=0;editingVisit=false;lessonPage=0;tab="plan";message="새 회차 시작";
  }else if(action==="store"){
    if(saves[id]&&!confirmed){askConfirmation(key,"슬롯 "+id+" 저장","기존 슬롯의 저장 내용을 교체합니다.","덮어쓰기",rect);return;}
    pattern="save";saves[id]=structuredClone(state);message="슬롯 "+id+" 저장 완료";
  }else if(action==="load"){
    if(!saves[id])return;
    if(!confirmed){askConfirmation(key,"불러오기","현재 진행을 선택한 저장 상태로 바꿉니다.","불러오기",rect);return;}
    utilityOrigin=null;state=normalizeSave(saves[id]);selectedSlot=0;tab=state.phase==="plan"?"home":"plan";
    if(state.phase==="guide"){state.guideSlot=id;render(true);return;}
    message="불러오기 완료";
  }else{
    if(state.phase!=="plan")return;
    if(action==="buy"){
      const g=marketGoods[id];
      if(tab!=="market"||!Object.hasOwn(marketGoods,id)||state.fund<g.cost)return;
      if(g.raise){
        const quote=exchangeQuote(g);
        if(quote.reason)return;
        state.stats[g.raise]+=quote.gain;
        state.stats[g.lower]-=exchangeAmount;
        state.flags.lauExchangeMonth=state.month;
        message=g.name+" · "+statLabel(g.raise)+" "+signed(quote.gain)+" / "+statLabel(g.lower)+" −"+exchangeAmount;
      }else{
        const after=cap(state[g.stat]+g.amount);
        if(after===state[g.stat])return;
        message=g.name+" · "+g.label+" "+signed(after-state[g.stat]);
        state[g.stat]=after;
      }
      state.fund-=g.cost;
    }else if(action==="activity"){
      if(Number(id)===contestSlot&&reservedContest(state))return;
      pattern="schedule";state.plan[Number(id)]=value;
      message=slotNames[Number(id)]+" · "+actions[value].name;
    }else if(action==="visit"){
      state.visit=id;
      message="자유행동 · "+visits[id];
    }else if(action==="product"){
      if(!state.unlocked.includes(id))return;
      if(state.product!==id){state.product=id;state.price=products[id].price;}
    }else if(action==="quality"){
      state.quality=id;
    }else if(action==="upgrade"){
      const level=state.level[id],cost=facilities[id].cost*level;
      if(level===3||state.fund<cost)return;
      state.fund-=cost;state.level[id]++;
      if(id==="parlor"&&level===1)state.renown+=1;
      message=facilities[id].name+" Lv. "+(level+1);pattern="build";
    }else if(action==="doctor"){
      const marker="doctor"+state.month;
      if(state.fund<55||state.flags[marker])return;
      const before=state.hp;
      flagEvent(marker,()=>{state.fund-=55;state.hp=cap(state.hp+24);});
      message="왕진 완료 · 컨디션 +"+(state.hp-before);
    }else if(action==="loan"){
      if(state.usedLoan)return;
      state.usedLoan=true;state.debt=144;state.fund+=144;
      message="대출 실행 · £144 입금";
    }else if(action==="expand"){
      if(!Object.hasOwn(departments,id))return;
      const level=state.shop[id],cost=departments[id].cost*level;
      if(level>=3||state.fund<cost)return;
      const prior=forecast();
      state.fund-=cost;state.shop[id]=level+1;
      const current=forecast();
      message=departments[id].name+" Lv. "+(level+1)+" · 예상 영업이익 변화 "+money(current.margin-prior.margin);
      pattern="build";
    }else if(action==="develop"){
      if(!Object.hasOwn(products,id))return;
      const cost=researchFee(id);
      if(state.fund-cost<cashNeeded()||state.prototype||state.month===state.duration||!canDesign(id))return;
      state.accounts.researchSaved=(state.accounts.researchSaved||0)+researchFee(id,1)-cost;
      state.fund-=cost;state.prototype={product:id,revised:state.unlocked.includes(id),material:state.material||"common",lead:state.lead||"maker",brief:state.brief||"family",review:state.month,reworked:false,approved:false};
      message=products[id].name+" 시제품 착수";pattern="build";
    }
  }
  postPurchase(action,fund);
  persist();
  if(action==="store"&&!storageOk)message="현재 탭에 임시 저장";
  const scroll=$("panel").scrollTop;
  const keepScroll=action==="activity"||action==="visit"||tab==="company"||tab==="estate"||tab==="townhouse"||tab==="staffing";
  render(!keepScroll);
  if(keepScroll)$("panel").scrollTop=scroll;
  focusAction(key);
  announce(message);
  let highlight=null;
  if(action==="activity")highlight='[data-action="pick:'+id+'"]';
  else if(action==="visit")highlight='[data-action="visit:'+id+'"]';
  else if(action==="upgrade"||action==="expand")highlight='[data-action="station:'+id+'"]';
  else if(action==="develop")highlight=".work-title";
  else if(action==="store")highlight='[data-action="store:'+id+'"]';
  respond(pattern,rect,highlight);
  popMoney(state.fund-fund);
}
document.addEventListener("click",event=>{
  if(!event.target.closest(".game-frame, #picker, #guide-replay"))return;
  let button=event.target.closest("button[data-action]");
  if(!button && !event.target.closest("a,input,select,textarea,summary") && !window.getSelection()?.toString()){
    button=event.target.closest(".dialogue")?.querySelector(".line-next, .answers > button[data-action]:only-child");
  }
  if(button?.disabled)return;
  const rect=button?.getBoundingClientRect()||{left:event.clientX,top:event.clientY,width:1,height:1};
  if(event.detail>0){rect.xPoint=event.clientX;rect.yPoint=event.clientY;}
  const gesture={kind:"tap"};
  pointerGesture=gesture;
  try{
    if(button){
      const key=button.dataset.action;
      handleAction(key,rect);
      const pressed=button.isConnected?button:document.querySelector('button[data-action="'+key+'"]:not(:disabled)');
      if(key!=="greet-ciel"&&pressed?.animate&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
        pressed.animate([{scale:".98"},{scale:"1"}],{duration:140,easing:"ease-out"});
      }
    }
  }finally{pointerGesture=null;}
  emitPress(gesture.kind,rect);
  if(event.isTrusted)musicPlayer.unlock();
});
document.addEventListener("keydown",event=>{
  if(event.isTrusted&&!event.altKey&&!event.metaKey&&!event.ctrlKey&&!event.repeat)musicPlayer.unlock();
});
function openFairPreview(fair){
  tab="plan";
  state=normalizeSave(initial());
  state.month=state.planMonth=fair.month;
  state.owlSeed=482;
  state.quality="fine";
  state.productHistory.toys={reputation:9,units:36,orders:2};
  const index=previewQuery.get("entry")==="1"?1:0;
  if(!fair.company)state.stats[fair.options[index].stat]=contestRivalAbility(fair)-5;
  state.fairTickets={[fair.id]:fair.company?{product:"toys"}:{index,start:0}};
  state.sequence={contest:fair.id};
  document.documentElement.dataset.fairPreview="true";
  document.addEventListener("change",event=>{
    if(event.target.id==="preview-fair")location.search="?fair-preview="+encodeURIComponent(event.target.value);
  });
  prepareContest(state);
}
if(storyDemo){
  tab="plan";state=normalizeSave(initial());
  state.month=state.planMonth=previewSetback?.month??previewCompanyCase?.month??{"season-16":16,jubilee:18,birthday2:24}[previewStory];
  if(previewSetback?.renown)state.renown=5;
  if(!previewSetback&&!previewCompanyCase){
    const directions=Object.keys(middleObservations[previewStory]),selected=previewQuery.get("stat");
    state.stats[directions.includes(selected)?selected:directions[0]]=400;
  }
  state.phase="event";state.pending=previewStory;
  document.documentElement.dataset.storyPreview="true";
}else if(previewFair)openFairPreview(previewFair);
render();

document.documentElement.lang=gameLanguage;
syncMotion();
matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",syncMotion);
$("launch-help").hidden=true;
$("mobile-menu").hidden=false;
