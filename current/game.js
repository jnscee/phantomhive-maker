"use strict";

const commands = [
  ["tab:plan","일정표"],["run","실행"],["tab:estate","관리 · 경영"],["tab:market","상점"],["tab:chat","대화"],["tab:status","상태"]
];
const cap=(value,max=100)=>Math.min(max,Math.max(0,value));
const money=value=>"£"+value.toLocaleString("en-GB");
const signed=value=>value>0?"+"+value:String(value);
function emptyPlan(){return [null,null,null];}
function planReady(){return state.plan.length===3 && state.plan.every(id=>Object.hasOwn(actions,id));}
function plannedTuition(){
  const trial={...state,stats:{...state.stats}};
  return state.plan.reduce((sum,id)=>{
    if(!actions[id])return sum;
    return sum+applyActivity(trial,id).cost;
  },0);
}
function initial(){
  return startAccounts({v:1,mixedAbilityCaps:true,uniformAbilityCaps:true,abilityScale:abilityMax,duration:35,people:{},jobs:{},annex:{bedroom:1,garden:1,guard:1,quarters:1},month:1,phase:"contract",openingLine:0,openingEdition:2,fund:500,hp:76,stress:20,motivation:70,
    stats:{지성:15,기품:12,매력:11,경영:8,통찰:12,의지:15,체력:5},
    planMonth:1,plan:emptyPlan(),visit:null,level:{library:1,parlor:1,kitchen:1},staff:null,
    shop:{design:1,works:1,store:1},salesBook:[],
    product:"toys",unlocked:["toys"],quality:"standard",price:14,qty:15,stock:Object.fromEntries(Object.keys(products).map(id=>[id,0])),
    trust:1,royal:0,renown:0,flags:{},events:[],past:[],log:[],pending:null,ending:null,
    debt:0,unwell:0,arrears:0,usedLoan:false,counts:{}});
}
const storageKey="earl-phantomhive-maker-v1";
let saves, storageOk=true;
try{ saves=JSON.parse(localStorage.getItem(storageKey)||"{}"); }catch{ storageOk=false; }
if(!saves || typeof saves!=="object")saves={};
let state=saves.auto?.v===1?saves.auto:initial();
state=structuredClone(state);
let tab=state.phase==="plan"?"home":"plan";
let selectedSlot=0;
let editingVisit=false;
const $=id=>document.getElementById(id);
const portraitScene=$("scene");
new ResizeObserver(([entry])=>{
  portraitScene.style.setProperty("--portrait-scene-height",entry.contentRect.height+"px");
  portraitScene.style.setProperty("--portrait-scene-width",entry.contentRect.width+"px");
}).observe(portraitScene);
function persist(){
  if(state.hp<=30||state.stress>=illnessThreshold(state))state.illness=true;
  tryRecover(state);
  if(tourSession)return;
  saves.auto=structuredClone(state);
  try{localStorage.setItem(storageKey,JSON.stringify(saves));}catch{storageOk=false;}
}
function flash(message){ $("flash").textContent=message; }
function btn(label,action,disabled=false,style=""){
  return '<button type="button" class="'+style+'" data-action="'+action+'" '+(disabled?"disabled":"")+'>'+label+'</button>';
}
function lessonGain(key,current,base,month){
  const rate=1.1+(month-1)*0.056;
  const max=statMax(key);
  return Math.min(max-current,Math.round(base*rate*max/abilityMax));
}
function scheduleNote(id){
  const a=actions[id];
  const trial={...state,stats:{...state.stats}};
  const outcome=applyActivity(trial,id);
  const effects=Object.keys(a.gains).map(k=>k+" "+signed(trial.stats[k]-state.stats[k]));
  if(outcome.bedridden)return (outcome.id!==id?"요양으로 대체 · 교육비 없음":"요양 중")+" · 능력치 각 −4 · 스트레스 "+signed(trial.stress-state.stress);
  if(outcome.fallenIll)effects.unshift("이 활동 후 발병 예상");
  if(outcome.grade!==null)effects.unshift("현재 컨디션 · "+lessonGrades[outcome.grade]);
  if(trial.hp!==state.hp)effects.push("건강 "+signed(trial.hp-state.hp));
  if(trial.motivation!==state.motivation)effects.push("의욕 "+signed(trial.motivation-state.motivation));
  effects.push("스트레스 "+signed(trial.stress-state.stress));
  return effects.join(" · ");
}
function forecast(shop=state.shop){
  const p=products[state.product];
  const quality=state.quality==="fine";
  const season=(state.month-1)%12;
  const baseline=p.demand[season%6]+(season>=9?3:0)+(state.month>6?2:0);
  const unit=Math.max(2,p.unit+(quality?3:0)-(shop.works-1)*2-Math.floor(state.stats.경영/19));
  const design=state.productNotes?.[state.product];
  const appeal=design?((design.brief==="gift"&&season>=9)?4:1)+(design.reworked?2:0):0;
  const demand=Math.max(0,baseline+appeal+londonPlan(state).power.salon+fairDemand(state,state.product)+businessTailwind(state.product).bonus+(state.month===5?1:0)+(state.month===18?3:0)+(state.month===31&&state.product==="toys"?-3:0)+(shop.store-1)*3+Math.floor(state.stats.경영/9)
     +(state.visit==="town"?3:0)+(quality?5:0)-Math.round((state.price-p.price)*1.65));
  const receipt=state.price+(shop.design-1)*(quality?2:1)+(shop.store-1);
  const sold=Math.min(demand,state.stock[state.product]+state.qty);
  const revenue=sold*receipt, cost=state.qty*unit;
  return {unit,demand,receipt,sold,revenue,cost,margin:revenue-cost};
}
function investmentEffect(order){
  const base=forecast({design:1,works:1,store:1});
  // Decompose the gain without counting a sale or production saving twice.
  const production=(base.unit-order.unit)*state.qty;
  const extraSales=(order.sold-base.sold)*state.price;
  const wrapping=(state.shop.store-1)*order.sold;
  const design=(order.receipt-state.price)*order.sold-wrapping;
  return {production,extraSales,design,wrapping,total:production+extraSales+design+wrapping};
}
function overhead(){
  return 36+Object.values(state.annex||{}).reduce((v,l)=>v+Math.max(0,l-1)*2,0)-(state.annex.guard-1)*8-(Object.entries(state.jobs).filter(([,r])=>r==="guard").length*2)-(shiftAssigned("guard")?1:0)+Object.values(state.level).reduce((sum,l)=>sum+l*4,0)+Math.min(24,state.debt)-(state.houseCare==="defer"?8:0);
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
function changeStat(name,value){state.stats[name]=cap(state.stats[name]+value,statMax(name));}
function flagEvent(id,effect){
  state.flags[id]=true;
  effect();
}
const events=foundationEvents().concat(initialEvents(),examEvents(),scriptedEvents(),calendarEvents(),masteryEvents(),visitorEvents());

function pendingEvent(){
  return events.find(event=>event.id===state.pending);
}
function execute(){
  if(state.phase!=="plan"||!planReady())return;
  if(cashNeeded()>Math.max(0,state.fund)){flash("일정 비용과 생산비를 마련해 주세요.");return;}
  state.log=[];
  const order=forecast();
  state.sequence={index:0,trainingPaid:0,unit:order.unit,demand:order.demand,receipt:order.receipt,investment:investmentEffect(order),opening:{fund:state.fund,hp:state.hp,stress:state.stress,motivation:state.motivation,stats:{...state.stats}}};
  enterSlot();
}
function settleMonth(){
  const {unit,demand,receipt=state.price,investment,opening:before,trainingPaid=plannedTuition()}=state.sequence;
  const visitAdvance=state.sequence.visitAdvance||0;
  delete state.sequence;
  state.neglect=state.houseCare==="defer"?(state.neglect||0)+1:Math.max(0,(state.neglect||0)-1);
  if(state.neglect>=2){state.renown=Math.max(0,state.renown-1);state.log.push("관리 지연 · 가문 명성 하락");}
  settleLondon(state);
  trainHousehold(state);
  applyEstateTraining(state);
  settleFestival(state);
  const assessment=houseValues();
  if(state.houseCare==="clean"&&assessment.청결>=70)state.hp=cap(state.hp+2);
  if(state.houseCare==="repair")state.neglect=Math.max(0,state.neglect-1);
  if(state.houseCare==="guard"&&assessment.보안>=65)state.renown+=state.month%4===0?1:0;
  if((state.staff==="parlor"||shiftAssigned("parlor"))&&state.plan.includes("etiquette"))state.renown+=1;
  const product=state.product;
  const sold=Math.min(demand,state.stock[product]+state.qty);
  state.stock[product]+=state.qty-sold;
  const income=sold*receipt;
  const cost=unit*state.qty;
  const debtPayment=Math.min(24,state.debt),bills=overhead();
  if(state.debt>0)state.debt=Math.max(0,state.debt-24);
  state.fund+=income-cost-bills;
  // Paid sales and supply contracts belong to Funtom. Scheduled work only trains Ciel.
  state.salesBook.push({month:state.month,product,sold,revenue:income,cost,advance:visitAdvance,investment});
  state.report={income,cost,advance:visitAdvance,bills,debtPayment,sold,before,investment,training:trainingPaid};
  if(sold>=14&&income>cost+25)state.renown+=1;
  state.log.push(products[product].name+" "+sold+"개 판매 · 매출 "+money(income)+" / 생산비 "+money(cost)+" / 재고 "+state.stock[product]+"개");
  state.log.push("저택 유지·채무 상환 "+money(bills));
  if(state.flags.market&&state.marketMonth!==state.month){state.flags.market=false;state.renown+=1;}
  const candidates=events.filter(e=>!e.visitOnly&&!e.scheduled&&!e.slot&&!e.activitySet&&!e.season&&!(e.visitPlace===state.visit&&state.visitTurn===state.month)&&!state.flags[e.id]&&e.sees(state));
  const event=state.duration===35?(candidates.find(e=>birthdayScenes[e.id]&&[12,24].includes(state.month))||candidates.find(e=>e.chapter)||candidates[0]):candidates.find(e=>!e.chapter);
  const seasonal=state.duration===35?events.find(e=>e.season&&e.sees(state)&&!state.flags[e.id]):null;
  state.eventQueue=[event,seasonal].filter(Boolean).map(e=>e.id);
  if(townhouseGuestsDue(state))state.eventQueue.push("visitPrince");
  queueSnakeArrival(state);
  state.pending=state.eventQueue.shift()||null;
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
function choose(index){
  const event=pendingEvent();
  const choice=event?.choices[index];
  if(!["event","slotEvent"].includes(state.phase)||!choice||state.eventResponse||(state.eventPage||0)<eventLines(event).length||(choice.when&&!choice.when(state)))return;
  const summary=event.examSummary?.(state,index)??choice.result;
  const beat=event.examAnswer?.(state,index)??birthdayScenes[event.id]?.answers[index];
  flagEvent(event.id,choice.effect);
  if(event.id==="visitPrince")queueSnakeArrival(state,state.month+1);
  state.events.push({id:event.id,index,month:state.month,result:summary});
  state.log.push(summary);
  if(beat){state.eventResponse={beat,summary};persist();render(true);}
  else closePendingEvent();
}
function qualifies(){
  return (state.duration===6||(state.stats.지성>=270&&state.stats.기품>=340&&Math.max(...Object.values(state.level))>=2))&&state.flags.deed&&state.royal>=2&&state.renown>=3&&state.fund>=120&&state.debt===0&&state.hp>=30;
}
function finish(id){
  state.ending=id;state.phase="ending";state.endingPage=0;state.endingSeen=false;
  endingAuto=false;dialogueHidden=false;tab="plan";
  saves.gallery??={};
  saves.gallery[id]=endingLabels[id][0];
  persist();render(true);
}
function advance(){
  if(state.phase!=="result")return;
  if(sampleReview())return;
  state.unwell=state.hp<18?state.unwell+1:0;
  state.arrears=state.fund<0?state.arrears+1:0;
  if(state.unwell>=2){finish("ill");return;}
  if(state.arrears>=2){finish("broke");return;}
  if(state.month===35&&state.duration===35){finish(verdict(state,qualifies()));return;}
  if(state.month===6&&state.duration===6){finish(qualifies()?"title":state.fund>=260&&state.stats.경영>=31?"business":"defer");return;}
  if(state.prototype?.approved){
    const p=state.prototype;state.unlocked.push(p.product);state.productNotes??={};state.productNotes[p.product]=p;delete state.prototype;
  }
  state.month++;state.planMonth=state.month;state.plan=emptyPlan();editingVisit=false;lessonPage=0;startAccounts(state);state.phase="plan";state.visit=null;selectedSlot=0;tab="home";persist();render(true);
}
function illnessThreshold(run){
  return 68+Math.round(22*Math.max(run.stats.체력/abilityMax,run.motivation/100));
}
function conditionWarning(run){
  const threshold=illnessThreshold(run);
  if(run.illness||run.hp<=30||run.stress>=threshold)return "병환으로 요양 중입니다. 건강 40 이상, 스트레스 20 이하에서 복귀합니다.";
  if(run.hp<=42||run.stress>=threshold-16)return "과로 주의 · 수업 성과 감소, 활동 시 건강 손실";
  return "";
}
function tryRecover(run){
  if(run.illness&&run.stress<=20&&run.hp>=40)run.illness=false;
}
function applyActivity(run,planned){
  const stress=run.stress,hp=run.hp,motivation=run.motivation;
  if(run.hp<=30||run.stress>=illnessThreshold(run))run.illness=true;
  const bedridden=Boolean(run.illness);
  const forced=bedridden&&planned!=="rest"&&planned!=="recovery";
  const id=forced?"recovery":planned;
  const a=actions[id];
  const overworked=run.stress>=illnessThreshold(run)-16;
  const tired=(run.hp<40||overworked||run.motivation<35)&&a.stress>0;
  const grade=courseIds.includes(id)?(tired?0:run.hp>=60&&run.stress<=46&&run.motivation>=55?2:1):null;
  const room=trainingRooms[id];
  const fieldPenalty=(categories[2][1].includes(id)&&run.stress>=55)?3:0;
  run.stress=cap(run.stress+a.stress+(grade===0?4:0));
  const restBonus=(id==="rest"||id==="recovery")?(run.annex.bedroom-1)*5:0;
  run.hp=cap(run.hp+(a.health||0)-fieldPenalty+restBonus-(tired&&overworked?8:0));
  if(id==="walk")run.stress=cap(run.stress-(run.annex.garden-1)*5-(shiftAssigned("garden")?2:0));
  run.motivation=cap(run.motivation+(a.stress<0?8:tired?-7:grade===2?0:-2));
  const gains=bedridden?Object.fromEntries(stats.map(name=>[name,-4])):a.gains;
  const changes=Object.entries(gains).map(([name,value])=>{
    const before=run.stats[name];
    const gain=bedridden?value:lessonGain(name,before,(value+(room?(run.level[room]-1)*4:0))*(grade===2?1.36:tired?.47:1)*(run.neglect>=2?.85:1),run.month);
    run.stats[name]=cap(before+gain,statMax(name));
    return name+" "+signed(run.stats[name]-before);
  });
  const fallenIll=!bedridden&&(run.hp<=30||run.stress>=illnessThreshold(run));
  if(fallenIll){run.illness=true;run.hp=cap(run.hp-10);run.motivation=cap(run.motivation-8);}
  tryRecover(run);
  changes.push("스트레스 "+signed(run.stress-stress));
  if(run.hp!==hp)changes.push("건강 "+signed(run.hp-hp));
  if(run.motivation!==motivation)changes.push("의욕 "+signed(run.motivation-motivation));
  if(fallenIll)changes.push("과로로 쓰러져 다음 일정을 요양으로 전환");
  if(bedridden&&!run.illness)changes.push("요양 종료");
  return {changes,grade,id,bedridden,fallenIll,cost:forced?0:a.cost};
}
function applyEstateTraining(run){
  const cooperation=Object.entries(run.jobs).some(([p,room])=>servants[p]?.job===room&&run.people[p]?.toward>=5);
  if(cooperation)run.motivation=cap(run.motivation+2);
  run.hp=cap(run.hp+(shiftAssigned("kitchen")?3:0)+(run.level.kitchen-1)*6+(run.staff==="kitchen"?3:0));
  if(run.staff==="library"&&run.plan.some(id=>id==="study"||id==="inquiry")){
    run.stats.지성=cap(run.stats.지성+(run.trust>=3?4:2),abilityMax);
  }
}
function projectTraining(){
  const run={...state,stats:{...state.stats}};
  for(const id of run.plan)if(actions[id])applyActivity(run,id);
  applyEstateTraining(run);
  return run;
}
function inspectTitle(){
  return [
    ...(state.duration===35?[["귀족 교육",state.stats.지성>=270&&state.stats.기품>=340,"지성 270 · 기품 340"],["저택 재건",Math.max(...Object.values(state.level))>=2,"서재·응접실·주방 중 한 곳을 2단계로 개수"]]:[]),
    ["가문 증빙",Boolean(state.flags.deed),"서재 방문 또는 장부 확보"],
    ["왕실 평가",state.royal>=2,"왕실 요청 처리"],
    ["가문 명성",state.renown>=3,"접객 또는 상품 판매 성과"],
    ["재정 상태",state.fund>=120&&state.debt===0,"자금 £120 이상 · 채무 없음"],
    ["건강",state.hp>=30,"건강 30 이상"]
  ];
}
const endingLabels = {
  vowTitle:["엔딩 1 · 여왕의 번견","작위가 돌아왔습니다. 시엘은 엷은 봉랍을 깨고 다음 의뢰를 펼칩니다. 계약은 계속됩니다."],
  vowNoTitle:["문장 없는 마차","왕실의 승인은 미뤄졌습니다. 시엘은 스스로 선택한 이름으로 조사를 이어 갑니다."],
  releaseTitle:["마지막 명령 · 백작","작위를 돌려받은 날 시엘은 복수를 내려놓았습니다. 마지막 명령을 받은 악마가 장갑을 벗습니다."],
  releaseNoTitle:["마지막 명령 · 무관의 주인","가문의 문장은 끝내 돌아오지 않았습니다. 복수를 포기한 도련님 앞에서 집사가 계약을 거둡니다."],
  title:["작위 승인","왕실 심의 기준을 충족했습니다."],
  business:["팬텀사 경영 지속","작위 심의는 유보되었으며, 사업 유지 기준을 충족했습니다."],
  defer:["작위 심의 유보","이번 회차에서 작위 심의 기준을 충족하지 못했습니다."],
  ill:["건강 악화로 종료","건강 18 미만이 두 달 연속 발생했습니다."],
  broke:["자금 부족으로 종료","월말 자금 부족이 두 달 연속 발생했습니다."]
};
const slotNames=["상순","중순","하순"];
const phaseNames={contract:"계약",guide:"첫 안내",visit:"자유행동",review:"세바스찬의 강평",scene:"일정 진행",slotEvent:"일정 사건",vow:"최종 판정",plan:"편성 중",event:"월말 사건",result:"월간 결산",ending:"회차 종료"};
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
function calendarSlot(label, value, action, selected) {
  return option('<span>'+label+'</span><b>'+value+'</b>', action, selected, false, "period");
}

function plannerCosts(estimate){
  const costs=[
    ["저택", overhead()-Math.min(24,state.debt)],
    ["팬텀사", estimate.unit*state.qty],
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
  return editingVisit?visitPreview(id):actions[id].name+' · '+scheduleNote(id);
}

function previewPlannerCard(event){
  const calendar=event.currentTarget,note=calendar.querySelector(".calendar-note");
  if(!note)return;
  const leaving=event.type==="pointerout"||event.type==="focusout";
  const target=leaving?event.relatedTarget:event.target;
  const card=target instanceof Element?target.closest(".lesson[data-action]"):null;
  const id=card&&calendar.contains(card)?card.dataset.action.split(":").pop():editingVisit?state.visit:state.plan[selectedSlot];
  note.textContent=plannerNote(id);
}
for(const type of ["pointerover","pointerout","focusin","focusout"]){
  $("calendar").addEventListener(type,previewPlannerCard);
}

function plannerContents() {
  const chosen = state.plan[selectedSlot];
  const cards = editingVisit
    ? Object.entries(visits).filter(([id])=>canVisit(id)).map(([id, name]) =>
        option(plannerIcon(id)+'<b>'+name+'</b>', 'visit:'+id, state.visit===id, false, 'lesson visit-card'))
    : categories[lessonPage][1].map(id => {
        const activity=actions[id];
        return option(plannerIcon(id)+'<b>'+activity.name+'</b><small>'+money(activity.cost)+'</small>',
          'activity:'+selectedSlot+':'+id, id===chosen, false, 'lesson');
      });
  const half = Math.ceil(cards.length / 2);
  const periods = state.plan.map((id,index) =>
    calendarSlot(slotNames[index], actions[id]?.name??'', 'pick:'+index, !editingVisit && selectedSlot===index));
  periods.push(calendarSlot("자유행동", visits[state.visit]??"", "pick-visit", editingVisit));
  const estimate = marketStats();
  const note = plannerNote(editingVisit?state.visit:chosen);
  return (editingVisit?'<div class="lesson-index">자유행동 · 월 1회</div>':'<div class="lesson-index">'+categories.map(([name],i)=>option(name,"category:"+i,i===lessonPage,false,"index-tab")).join("")+'</div>')+
    '<div class="card-field" role="group" aria-label="'+(editingVisit?'자유행동':slotNames[selectedSlot]+' 활동 목록')+'">'+
      '<div class="card-bank">'+cards.slice(0,half).join('')+'</div>'+
      '<div class="card-bank">'+cards.slice(half).join('')+'</div></div>'+
    '<div class="calendar-foot"><div class="calendar-summary"><strong>'+monthText(state.month)+'</strong>'+
      '<span class="calendar-note">'+note+'</span></div>'+
    (conditionWarning(state)?'<p class="calendar-warning condition-warning">'+conditionWarning(state)+'</p>':"")+
      '<div class="calendar-periods" role="group" aria-label="편집할 기간">'+periods.join('')+'</div>'+
      '<div class="calendar-settle">'+plannerCosts(estimate)+
      '<div class="plan-balance"><span>예상 월말 자금</span><strong>'+money(estimate.balance)+'</strong></div>'+
      btn('이달 일정 실행','execute',!planReady()||estimate.blocked,'calendar-run')+'</div>'+festivalNotice()+
      (estimate.blocked?'<p class="calendar-warning">준비비가 부족합니다. 활동이나 생산량을 조정하세요.</p>':'')+'</div>';
}

function planPanel(){
  if(state.phase==="event"){
    const event=pendingEvent();
    return frame(castName(event),'<p class="muted">'+event.text+'</p><div class="report-grid">'+event.choices.map((choice,index)=>{
      const locked=choice.when&&!choice.when(state);
      return btn(choice.label+'<br><span class="small '+(locked?"muted":"good")+'">'+(locked?"필요 조건 · "+choice.hint:choice.result)+'</span>',
        "choose:"+index,Boolean(locked),"option");
    }).join("")+'</div>');
  }
  if(state.phase==="result")return monthlyResults();

  if(state.phase==="ending"){
    const [title,description]=endingLabels[state.ending];
    return frame(title,'<p class="muted">'+description+'</p><div class="summary-grid">'+tile("보유 자금",money(state.fund))+
      tile("경영",state.stats.경영)+tile("완료 사건",state.events.length)+'</div>'+
      '<p>'+endings[state.ending].flavor+'</p><p>'+epilogue()+'</p><div class="inline">'+btn("장부 보기","tab:record")+btn("새 회차","reset",false,"primary")+'</div>','회차 종료');
  }
  return "";
}
function marketStats(){
  const order=forecast(), needed=cashNeeded();
  return {...order,balance:state.fund+order.revenue-needed-overhead(),blocked:needed>Math.max(0,state.fund)};
}
function stepper(key,label,min){
  return '<div class="tile"><label class="small muted" for="'+key+'">'+label+'</label><div class="stepper">'+
    '<button type="button" id="'+key+'down" data-action="step:'+key+':-1" aria-label="'+label+' 감소" '+(state[key]===min?"disabled":"")+
    '>−</button><input id="'+key+'" type="number" min="'+min+'" max="40" value="'+state[key]+'"><button type="button" id="'+key+'up" data-action="step:'+key+
    ':1" aria-label="'+label+' 증가" '+(state[key]===40?"disabled":"")+'>+</button></div></div>';
}
const legacyEventIds={"서재의 열쇠":"return","새벽의 일정표":"discipline","비어 있는 장부":"proof","여왕의 초청장":"audience","상점 진열장":"trade","손님이 돌아간 뒤":"room"};
function updateMoney(){
  $("money").innerHTML='<div class="nameplate"><small>CIEL</small><b>PHANTOMHIVE</b></div><div class="id-details"><span>'+portraitAge()+'세</span><span>12.14</span><span class="sign-mark" aria-label="사수자리"></span></div><strong class="wealth">'+money(state.fund)+'</strong>';
}
function relationBook(){
  return '<h3>인물 관계</h3>'+peopleInHouse().map(id=>{const r=state.people[id];return '<div class="work-ledger"><b>'+servants[id].name+'</b><span>상대 → 시엘　'+rank(r.toward)+'</span></div>';}).join("");
}
function titlePanel(){
  return frame("팬텀하이브 메이커",'<div class="book-cover"><small>1886 — 1888</small><h2>EARL<br>PHANTOMHIVE<br>MAKER</h2><p>팬텀하이브 메이커</p>'+btn('<span class="return-label">회차로 돌아가기</span>',"back",false,"return-control")+btn("새 회차","reset")+'</div>');
}
function epilogue(){
  const allies=peopleInHouse().filter(k=>state.people[k].toward>=5).map(k=>servants[k].name);
  const top=Object.keys(state.stats).sort((a,b)=>state.stats[b]/statMax(b)-state.stats[a]/statMax(a))[0];
  const route=state.ending==="vowNoTitle"?((state.stats.경영>=140&&state.fund>=260)?"런던의 사업가로 자리 잡았습니다. ":state.stats.통찰>=140?"정보상의 연락망을 얻었습니다. ":"마차를 타고 옛 흔적을 좇습니다. "):"";
  return route+(allies.length?allies.join("·")+"은 다음 겨울에도 도련님의 지시를 따르겠다고 전했습니다. ":"")+"가장 단련된 능력은 "+top+"이었습니다. 팬텀사의 개발품은 "+state.unlocked.length+"종, 저택에 합류한 고용인은 "+peopleInHouse().filter(id=>servants[id].job).length+"명입니다.";
}
function canBuyTownhouse(){return !state.flags.townhouse && state.fund>=250;}
function annexDesk(){
  const locked=state.phase!=="plan";
  const rooms=Object.entries(annex).map(([id,r])=>'<div class="annex-line"><div><b>'+r.name+' · Lv.'+state.annex[id]+'</b><small>'+r.desc+'</small></div>'+btn(state.annex[id]===3?"완료":money(r.cost*state.annex[id]),"annex:"+id,locked||state.annex[id]>=3||state.fund<r.cost*state.annex[id])+'</div>').join("");
  return '<details class="annexes"><summary>부속 시설</summary>'+rooms+'</details>'+
    '<details class="annexes"><summary>런던 타운하우스</summary><p>취득비 £250</p>'+btn(state.flags.townhouse?"보유 중":"타운하우스 취득","townhouse",!canBuyTownhouse())+'</details>';

}
function normalizeSave(run){
  const copy=structuredClone(run);
  if(copy.planMonth!==copy.month){
    if(["contract","guide","plan"].includes(copy.phase)){
      copy.plan=emptyPlan();
      copy.visit=null;
    }
    copy.planMonth=copy.month;
  }
  if(!copy.uniformAbilityCaps){
    const oldMax=copy.abilityScale||999;
    const snapshots=new Set([copy.stats,copy.accounts?.stats,copy.sequence?.before,
      copy.sequence?.after,copy.sequence?.opening?.stats,copy.report?.before?.stats]);
    for(const values of snapshots){
      if(!values)continue;
      for(const key of stats){
        const previousMax=copy.mixedAbilityCaps?(["의지","체력"].includes(key)?100:abilityMax):oldMax;
        if(Number.isFinite(values[key]))values[key]=cap(Math.round(values[key]*statMax(key)/previousMax),statMax(key));
      }
    }
    copy.mixedAbilityCaps=true;
    copy.uniformAbilityCaps=true;
    copy.abilityScale=abilityMax;
  }
  const defaults=initial();
  copy.duration=copy.duration||6;
  if(copy.phase==="contract"){
    if(!Number.isInteger(copy.openingLine)){
      const first=art=>openingLines.findIndex(entry=>entry.scene.art===art);
      const legacyPages=[0,first("seal"),first("ring"),openingLines.length,first("manor"),first("lesson")];
      copy.openingLine=legacyPages[copy.introPage]??0;
      copy.contractFiled=(copy.introPage||0)>=4;
    }
    else if(copy.openingEdition!==2)copy.openingLine=previousOpeningPages[cap(copy.openingLine,previousOpeningPages.length-1)];
    copy.openingEdition=2;
    copy.openingLine=cap(copy.openingLine,openingLines.length);
  }
  copy.annex={...defaults.annex,...copy.annex};
  copy.people={...defaults.people,...copy.people};
  copy.jobs={...copy.jobs};if(copy.people.tanaka&&copy.staff)copy.jobs.tanaka=copy.staff;
  for(const rel of Object.values(copy.people))delete rel.from;
  copy.shop={...defaults.shop,...copy.shop};
  copy.stock={...defaults.stock,...copy.stock};
  copy.salesBook=copy.salesBook||[];
  const oldResults=new Map();
  copy.events=copy.events.map(entry=>{
    if(entry.id)return entry;
    const id=legacyEventIds[entry.title];
    const definition=events.find(e=>e.id===id);
    if(entry.result)oldResults.set(entry.result,(definition?.title||"사건")+" · 처리 완료");
    return {id,index:null};
  });
  // Both London hosts appeared in the prince chapter, including its older second choice.
  if(copy.people.soma&&copy.flags.visitPrince)copy.flags.agni=true;
  if(!townhouseGuestsDue(copy)){
    if(copy.eventQueue)copy.eventQueue=copy.eventQueue.filter(id=>id!=="visitPrince");
    if(copy.pending==="visitPrince"&&!copy.eventResponse){
      delete copy.eventPage;
      copy.pending=copy.eventQueue?.shift()||null;
      copy.phase=copy.pending?"event":copy.princeFromPlan?"plan":"result";
      if(!copy.pending)delete copy.princeFromPlan;
    }
  }else if(!copy.pending&&["plan","result"].includes(copy.phase)){
    copy.princeFromPlan=copy.phase==="plan";
    copy.pending="visitPrince";copy.phase="event";
  }
  if(copy.eventQueue)copy.eventQueue=copy.eventQueue.filter(id=>id!=="circus");
  if(copy.phase==="event"&&copy.pending==="circus"){
    copy.pending=copy.eventQueue?.shift()||null;
    copy.phase=copy.pending?"event":"result";
    delete copy.eventPage;
    delete copy.eventResponse;
  }
  // A legacy save can already be at the last settlement, with no further month to draw.
  if(copy.month===copy.duration&&["event","result"].includes(copy.phase)&&canReceiveSnake(copy)){
    queueSnakeArrival(copy);
    if(copy.phase==="result"&&copy.eventQueue?.length){
      copy.pending=copy.eventQueue.shift();
      copy.phase="event";
    }
  }
  copy.log=copy.log.map(line=>oldResults.get(line)||line);
  if(copy.accounts?.month!==copy.month){
    const closed=["result","event","vow","ending"].includes(copy.phase);
    const opening=copy.sequence?.opening||(closed&&copy.report?.before)||copy;
    startAccounts(copy,opening,true);
  }
  if(copy.phase==="vow"){
    const live=state;state=copy;copy.ending=verdict(copy,qualifies());state=live;
    copy.phase="ending";copy.endingPage=0;copy.endingSeen=false;
  }
  if(copy.phase==="ending"&&endingLabels[copy.ending]){saves.gallery??={};saves.gallery[copy.ending]=endingLabels[copy.ending][0];}
  return copy;
}
function recordPanel(){
  const history=state.events.slice().reverse().map(record=>{
    const event=events.find(e=>e.id===record.id);
    if(!event)return "";
    const choice=event.choices[record.index];
    return '<details><summary>'+(record.month?monthText(record.month)+' · ':'')+escapeHTML(event.title)+'</summary>'+(sourceNote(event)?'<small>'+sourceNote(event)+'</small>':'')+'<p>'+event.text+'</p><p class="small muted">'+(choice?choice.label+" · "+escapeHTML(record.result??choice.result):"처리 완료")+'</p></details>';
  }).join("");
  const album=Object.entries(saves.gallery||{}).filter(([id])=>endings[id]).map(([id,label])=>btn(escapeHTML(label)+" 감상","replay-ending:"+id)).join(" ")||"아직 기록된 엔딩이 없습니다.";
  return frame("가문 장부",familyFolio(inspectTitle(),history,album,masteryGuide()));
}
function savePanel(){
  const rows=["auto","1","2","3"].map((id,index)=>{
    const record=saves[id];
    return '<div class="slot-save"><div><strong>'+(index?"슬롯 "+index:"자동 저장")+'</strong><br><span class="small muted">'+
      (record?monthText(record.month)+" · "+phaseNames[record.phase]:"빈 슬롯")+'</span></div><div class="opts">'+
      (index?btn("저장","store:"+id,false,"slot-write"):"")+btn("불러오기","load:"+id,!record,"slot-read")+'</div></div>';
  }).join("");
  return frame("설정",audioControls()+instructionBook()+'<section class="notebook-slots"><h3>저장 슬롯</h3>'+rows+'</section>'+(!storageOk?'<p class="small danger">브라우저 저장소를 사용할 수 없습니다. 이 탭을 닫으면 진행 내용이 사라집니다.</p>':"")+
    '<div class="notebook-actions">'+(state.phase!=="contract"?btn("프롤로그 다시 보기","recollect"):"")+btn("새 회차","reset")+btn("표지로","tab:title")+'</div>');
}
function statusPanel(){
  const predicted=state.phase==="plan"?projectTraining():state.report?.before;
  const current=[state.hp,state.stress,state.motivation];
  const properties=["hp","stress","motivation"];
  const conditions=["건강","스트레스","의욕"];
  const styles=["health","stress","drive"];
  const meters=current.map((value,i)=>{
    const forecast=predicted?.[properties[i]];
    const delta=Number.isFinite(forecast)?(state.phase==="plan"?forecast-value:value-forecast):0;
    return '<div class="meter '+styles[i]+'"><span>'+conditions[i]+'</span><span class="track" aria-hidden="true"><i class="fill" style="width:'+
      value+'%"></i></span><b>'+value+'</b><em class="'+((i===1?delta>0:delta<0)?"danger":"good")+'">'+(delta?signed(delta):"–")+'</em></div>';
  }).join("");
  return frame("시엘 상태",'<div class="inline"><b>시엘 팬텀하이브</b><span class="small muted">'+
    (state.phase==="plan"?"월말 예상 변동":"이번 달 변동")+'</span></div><div class="hud-group">'+meters+
    '<p class="condition-detail"><b>발병 기준 건강 30 이하 또는 스트레스 '+illnessThreshold(state)+' 이상</b> · 체력과 의욕이 높을수록 올라갑니다.</p>'+
    (conditionWarning(state)?'<p class="danger condition-detail">'+conditionWarning(state)+'</p>':"")+
    '</div><div class="hud-group"><div class="attributes"><div class="attribute attr-label muted"><span>능력치</span><b>현재</b><em>변동</em></div>'+
    stats.map(name=>{
      const delta=predicted?.stats?(state.phase==="plan"?predicted.stats[name]-state.stats[name]:state.stats[name]-predicted.stats[name]):0;
      return '<div class="attribute"><span>'+name+'</span><span class="gauge"><i style="width:'+(state.stats[name]/statMax(name)*100)+'%"></i></span><b>'+state.stats[name]+'</b><em>'+(delta?signed(delta):"–")+'</em></div>';
    }).join("")+'</div></div>');
}
const businessArt={"estate": "assets/map-estate.png", "design2": "assets/map-design2.png", "library2": "assets/map-library2.png", "parlor2": "assets/map-parlor2.png", "designer": "assets/map-designer.png", "cart-candy": "assets/map-cart-candy.png", "kitchen3": "assets/map-kitchen3.png", "store2": "assets/map-store2.png", "maker": "assets/map-maker.png", "cart-sweets": "assets/map-cart-sweets.png", "cart-hamper": "assets/map-cart-hamper.png", "parlor3": "assets/map-parlor3.png", "cart-toys": "assets/map-cart-toys.png", "clerk": "assets/map-clerk.png", "works2": "assets/map-works2.png", "store3": "assets/map-store3.png", "kitchen2": "assets/map-kitchen2.png", "library3": "assets/map-library3.png", "cart-plush": "assets/map-cart-plush.png", "design3": "assets/map-design3.png", "works3": "assets/map-works3.png", "company": "assets/map-company.png", "steward": "assets/map-steward.png", "cart-game": "assets/map-cart-game.png"};
const departments = {
  design:{name:"개발실",cost:65,benefit:"단계마다 표준품 도안 +£1 · 고급품 도안 +£2 및 개발비 할인"},
  works:{name:"제작실",cost:75,benefit:"단계마다 개당 생산 원가 £2 절감 · 최저 £2"},
  store:{name:"판매점",cost:80,benefit:"단계마다 수요 +3개 · 판매품당 포장 수익 +£1"}
};
const mapPositions = {
  library:[51,30], parlor:[72,69], kitchen:[22,68],
  design:[49,32], works:[73,65], store:[22,70]
};
// Button positions are separate from furniture anchors so labels can clear the staff.
const companyPinPositions = {design:[52,20],works:[76,48],store:[23,55]};
const companyStaffFeet = {designer:[32,36.5],maker:[67,72.2],clerk:[22,77]};
const workPositions = {library:[46,30],parlor:[70,64],kitchen:[20,61]};
let selectedRoom="library";
let selectedDepartment="works";

const researchDiscount=[0,0,25,45];
function researchFee(id,level=state.shop.design){
  return Math.ceil(products[id].research*(100-researchDiscount[level])/100);
}
function workerSprite(image,position){
  return '<img alt="" class="map-person" src="'+businessArt[image]+'" style="left:'+position[0]+'%;top:'+position[1]+'%">';
}
function propertyMap(company){
  const rooms=company?departments:facilities;
  const levels=company?state.shop:state.level;
  let additions="",pins="";
  for(const [id,room] of Object.entries(rooms)){
    const [x,y]=mapPositions[id];
    if(levels[id]>1){
      for(let tier=2;tier<=levels[id];tier++){
        const offset=tier===2?-10:11;
        additions+='<img alt="" class="map-fitting" src="'+businessArt[id+tier]+'" style="left:'+(x+offset)+'%;top:'+(y-5)+'%">';
      }
      additions+='<i class="map-award award-'+levels[id]+'" aria-hidden="true" style="left:'+x+'%;top:'+y+'%"></i>';
    }
    const selected=id===(company?selectedDepartment:selectedRoom);
    const [pinX,pinY]=company?companyPinPositions[id]:[x,y];
    pins+='<button type="button" data-action="station:'+id+'" aria-pressed="'+selected+'" class="map-pin" style="left:'+pinX+'%;top:'+pinY+'%">'+
      room.name+' <small>Lv.'+levels[id]+'</small></button>';
  }
  const people=company
    ? Object.entries(companyStaffFeet).map(([sprite,feet])=>workerSprite(sprite,feet)).join("")
    : state.staff?workerSprite("steward",workPositions[state.staff]):"";
  return '<div class="property-map" role="group" aria-label="시설 선택"><img alt="" class="map-base" src="'+businessArt[company?"company":"estate"]+'">'+
    additions+people+(company&&state.qty>0?'<img alt="" class="delivery-cart" src="'+businessArt["cart-"+state.product]+'">':"")+pins+'</div>';
}
function roomDetail(){
  const id=selectedRoom, room=facilities[id], level=state.level[id], active=state.phase==="plan";
  const steps=[1,2,3].map(n=>'<i class="'+(n<=level?'filled':'')+'"></i>').join('');
  return '<div class="work-title"><h3>'+room.name+'</h3><b>'+level+' / 3단계</b></div>'+
    '<div class="facility-steps" aria-hidden="true">'+steps+'</div>'+
    '<dl class="facility-data"><dt>시설 효과</dt><dd>'+room.desc+'</dd><dt>월 유지비</dt><dd>'+money(level*4)+(level<3?' → '+money((level+1)*4):'')+'</dd></dl>'+
    btn(level===3?"개수 완료":"시설 개수 · "+money(room.cost*level),"upgrade:"+id,!active||level===3||state.fund<room.cost*level,"work-order")+
    '<h4>저택 지원</h4><div class="work-actions">'+btn("왕진 · £55","doctor",!active||state.fund<55||state.flags["doctor"+state.month])+
    btn("대출 · £144","loan",!active||state.usedLoan)+'</div><small>왕진 시 건강 +24 · 대출은 월 £24씩 상환</small>';
}
function inventoryRows(){
  return state.unlocked.map(id=>'<div class="work-ledger"><span>'+products[id].name+'</span><b>'+state.stock[id]+'개</b></div>').join("");
}
function companyDetail(){
  const id=selectedDepartment, room=departments[id], level=state.shop[id], active=state.phase==="plan";
  let controls="";
  if(id==="design"){
    controls=productPlanning()+'<h4>상품 개발　'+state.unlocked.length+' / '+Object.keys(products).length+'</h4>'+
      Object.entries(products).map(([key,p])=>{
        const done=state.unlocked.includes(key),fee=researchFee(key);
        return '<div class="work-ledger"><span>'+p.name+'</span>'+
          (done?'<b>개발 완료</b>':btn('개발 · '+money(fee),'develop:'+key,!active||!!state.prototype||state.month===state.duration||state.fund-fee<cashNeeded()))+'</div>';
      }).join("");
  }else if(id==="works"){
    controls='<h4>이달 생산품</h4><div class="work-actions">'+state.unlocked.map(key=>option(products[key].name,"product:"+key,state.product===key,!active)).join("")+'</div>'+
      '<h4>품질</h4><div class="work-actions">'+[["standard","표준품"],["fine","고급품"]].map(([key,label])=>option(label,"quality:"+key,state.quality===key,!active)).join("")+'</div>'+
      (active?stepper("qty","생산량 (개)",0):'<p>생산량 '+state.qty+'개</p>')+
      '<div class="work-cost" id="work-cost">'+productionCost(forecast().unit)+'</div>';
  }else{
    controls='<h4>'+products[state.product].name+'</h4><p>주요 고객 · '+businessTailwind(state.product).audience+'　이달의 수요 · '+businessTailwind(state.product).trend+'</p>'+
      (active?stepper("price","판매가 (£)",4):'<p>판매가 '+money(state.price)+'</p>')+
      (active?'<div class="work-ledger"><span>이 가격의 예상 수요</span><b id="shop-demand">'+forecast().demand+'개</b></div>':'')+
      '<h4>상품별 재고</h4>'+inventoryRows();
  }
  return '<div class="work-title"><h3>'+room.name+'</h3><b>Lv. '+level+' / 3</b></div>'+controls+
    '<section class="expansion-quote"><h4>사업 확장</h4><p>'+room.benefit+'</p><div id="investment-quote">'+expansionQuote(id)+'</div></section>'+btn(level===3?"최대 규모":"증설 · "+money(room.cost*level),"expand:"+id,!active||level===3||state.fund<room.cost*level,"work-order");
}
function expansionQuote(id){
  const level=state.shop[id], next=Math.min(3,level+1);
  const now=forecast(), after=forecast({...state.shop,[id]:next});
  function compare(label,a,b){
    return '<div class="quote-row"><span>'+label+'</span><b>'+a+(next>level?' → '+b:'')+'</b></div>';
  }
  let rows="";
  if(id==="works")rows+=compare("개당 생산 원가",money(now.unit),money(after.unit));
  if(id==="store")rows+=compare("구매 수요",now.demand+"개",after.demand+"개")+compare("현재 물량으로 판매",now.sold+"개",after.sold+"개");
  if(id==="design")rows+=compare("개당 도안 웃돈",money((level-1)*(state.quality==="fine"?2:1)),money((next-1)*(state.quality==="fine"?2:1)))+compare("신상품 개발비 할인",researchDiscount[level]+"%",researchDiscount[next]+"%");
  if(state.phase!=="plan")return rows;
  rows+=compare("이달 영업이익",money(now.margin),money(after.margin));
  if(next===level)return rows;
  const gain=after.margin-now.margin, cost=departments[id].cost*level;
  let detail=gain?'같은 물량·가격·수요라면 '+Math.ceil(cost/gain)+'개월에 증설비 회수':id==="store"?"팔 수 있는 물량이 부족해 이달 추가 매출은 £0입니다.":"현재 생산·판매 조건에서는 이달 추가 이익이 없습니다.";
  if(id==="design")detail+=' · 개발비 할인 별도';
  rows+='<p class="quote-summary">증설비 '+money(cost)+' · 이달 영업이익 +'+money(gain)+'</p><small>'+detail+'</small>';
  const neededAfter=cashNeeded()+(after.unit-now.unit)*state.qty;
  if(state.fund>=cost&&state.fund-cost<neededAfter)rows+='<p class="danger">증설하면 이번 달 준비비가 '+money(neededAfter-(state.fund-cost))+' 부족합니다.</p>';
  return rows;
}
function productionCost(unit){
  return '<span>총생산비</span><strong>'+money(unit*state.qty)+'</strong><small>개당 '+money(unit)+' × '+state.qty+'개</small>';
}
function salesGauge(sold){
  const available=state.qty+state.stock[state.product];
  return '<span>판매 가능 '+available+'개 중 예상 판매 <b>'+sold+'개</b> · '+(available?Math.round(sold/available*100):0)+'%</span>'+
    '<progress aria-label="예상 판매 비중" value="'+sold+'" max="'+Math.max(1,available)+'"></progress>';
}
function businessForecast(){
  const est=marketStats();
  return '<div class="work-figures">'+tile("예상 판매량",est.sold+"개","market-estimate")+tile("예상 매출",money(est.revenue),"market-revenue")+
    tile("생산비",money(est.unit*state.qty),"market-cost")+tile("예상 월말 자금",money(est.balance),"market-balance")+'</div><div class="sales-gauge" id="sales-gauge">'+salesGauge(est.sold)+'</div>';
}
function salesBooks(){
  return '<details class="sales-books"><summary>월별 영업 장부</summary><p>판매 대금과 납품 선금은 가문 자금에 합산됩니다.</p>'+
    (state.salesBook.length?state.salesBook.slice().reverse().map(r=>'<div class="sale-row"><b>'+monthText(r.month)+' · '+products[r.product].name+'</b>'+
      '<span>판매 '+r.sold+'개 · '+money(r.revenue)+'　납품 선금 '+money(r.advance)+'　생산비 '+money(r.cost)+'</span>'+(r.investment?.total?'<span>시설 기여 이익 +'+money(r.investment.total)+'</span>':'')+'</div>').join(""):
      '<p>첫 월간 결산 후 판매 내역이 기록됩니다.</p>')+'</details>';
}
function managementPanel(){
  const company=tab==="company",active=state.phase==="plan";
  const nav='<div class="property-nav">'+option("저택","tab:estate",tab==="estate"||tab==="townhouse"||tab==="staffing")+(state.flags.townhouse?option("타운하우스","tab:townhouse",tab==="townhouse"):"")+option("팬텀 사(社)","tab:company",company)+'</div>';
  const header='<div class="property-head">'+nav+'<div><span>'+monthText(state.month)+'</span><b>'+money(state.fund)+'</b></div></div>';
  if(tab==="townhouse"&&state.flags.townhouse)return header+londonBoard();
  if(tab==="staffing")return header+staffBoard();
  const actual=state.salesBook.at(-1);
  const settled=["event","result","vow","ending"].includes(state.phase);
  const remaining=state.sequence?state.plan.slice(state.sequence.index+1).reduce((n,id)=>n+actions[id].cost,0):0;
  const live=state.sequence?'<section class="budget-book"><h3>확정된 이달 예산</h3>'+amountRow("남은 교육·활동비",remaining)+amountRow("저택 운영",overhead()-Math.min(24,state.debt))+amountRow("팬텀사 운영",state.qty*state.sequence.unit)+(state.debt?amountRow("채무 상환",Math.min(24,state.debt)):"")+'</section>':"";
  const budget=active?'<div id="live-budget">'+budgetTable()+'</div>':settled&&state.report?actualBudget():live;
  const bottom=company?(active?businessForecast():settled&&actual?'<div class="work-ledger"><span>'+monthText(actual.month)+' 영업 수입</span><b>'+money(actual.revenue+actual.advance)+'</b></div>':'')+budget+salesBooks():budget;
  return header+
    '<div class="property-grid"><div class="property-grounds">'+propertyMap(company)+bottom+'</div>'+
    '<section class="property-desk" aria-label="선택 시설">'+(company?companyDetail():roomDetail()+btn('<span class="staff-menu-icon" aria-hidden="true"></span><b>사용인 배치</b><span class="staff-menu-arrow" aria-hidden="true">›</span>',"tab:staffing",false,"staff-entry")+houseDesk()+facilityLedger()+annexDesk())+'</section></div>';
}

const conditionLabels={hp:"건강",stress:"스트레스",motivation:"의욕"};
const marketGoods={
  tea:{name:"홍차 한 잔",cost:12,effects:{stress:-5},line:"마침 차가 잘 우러났어. 한 잔 하겠어?"},
  scone:{name:"버터 스콘",cost:15,effects:{hp:6},line:"스콘은 따뜻할 때 반으로 갈라야 버터가 스며들지."},
  biscuit:{name:"레몬 비스킷",cost:10,effects:{motivation:7},line:"껍질까지 갈아 넣었으니 끝맛이 조금 쓰지. 오늘은 그게 괜찮을지도."},
  broth:{name:"닭고기 맑은 수프",cost:29,effects:{hp:14,stress:-3},line:"자리에 앉아. 식어 버리면 여기까지 걸어온 보람이 없잖아."},
  tart:{name:"자두 타르트",cost:23,effects:{hp:6,motivation:10},line:"가장자리부터 먹으면 바삭하고, 가운데부터 먹으면 달아."},
  cocoa:{name:"우유 코코아",cost:22,effects:{stress:-11,motivation:5},line:"찻주전자 밑에서도 이렇게 오래 향이 남는 물건은 드물어."},
  lavender:{name:"라벤더 향낭",cost:27,effects:{stress:-16},line:"베개 아래 넣어 둬. 밤중까지 장부를 볼 거라면 서랍에 둬도 되고."},
  ginger:{name:"설탕에 절인 생강",cost:18,effects:{hp:4,motivation:11},line:"하나만 먼저 먹어 봐. 두 개째는 코끝이 매워지거든."}
};
let selectedGood="tea";
function goodsEffects(g){
  return Object.entries(g.effects).map(([key,amount])=>({key,before:state[key],after:cap(state[key]+amount)}));
}
function marketPanel(){
  const cards=Object.entries(marketGoods).map(([id,g])=>
    '<button type="button" class="goods-ticket" data-action="goods:'+id+'" aria-pressed="'+(selectedGood===id)+'">'+
    '<b>'+g.name+'</b><img src="assets/goods-'+id+'.webp" alt=""><strong>'+money(g.cost)+'</strong></button>').join("");
  const g=marketGoods[selectedGood],effects=goodsEffects(g);
  const reason=state.phase!=="plan"?"일정 편성 중에 구매할 수 있습니다.":state.fund<g.cost?"보유금이 부족합니다.":
    effects.every(({before,after})=>before===after)?"변화시킬 수 있는 수치가 없습니다.":"";
  const rows=effects.map(({key,before,after})=>
    '<div class="stat-values"><span>'+conditionLabels[key]+'</span><b>'+before+' → '+after+'</b><strong>'+signed(after-before)+'</strong></div>').join("");
  return '<div class="lau-counter"><img class="lau-standing" src="assets/npc-lau.webp" alt="상점 주인 라우">'+
    '<div class="shop-stock"><div class="shop-purse"><span>보유금</span><strong>'+money(state.fund)+'</strong></div>'+
    '<div class="goods-list" role="group" aria-label="판매 상품">'+cards+'</div></div>'+
    '<section class="shop-talk" aria-label="상품 설명"><h3>라우</h3><p>'+g.line+'</p>'+
    '<div class="shop-trade"><div class="stat-preview">'+rows+'</div>'+
    btn(money(g.cost)+" 구매","buy:"+selectedGood,Boolean(reason),"shop-buy")+'</div>'+
    (reason?'<small>'+reason+'</small>':'')+'</section></div>';
}
const panels={market:marketPanel,title:titlePanel,plan:planPanel,status:statusPanel,estate:managementPanel,townhouse:managementPanel,staffing:managementPanel,company:managementPanel,record:recordPanel,save:savePanel};
state=normalizeSave(state);
if(state.hp<=30||state.stress>=illnessThreshold(state))state.illness=true;
if(state.phase==="event")tab="plan";
function sheetTitle(){
  if(tab==="plan"){
    if(state.phase==="event")return castName(pendingEvent());
    if(state.phase==="result")return "월간 결산";
    if(state.phase==="ending")return endingLabels[state.ending][0];
    return "월간 일정";
  }
  return {market:"라우의 상점",title:"Earl Phantomhive Maker",status:"상태",estate:"저택 관리",townhouse:"런던 타운하우스",staffing:"사용인 배치",company:"팬텀 사 경영",record:"가문 장부",save:"수첩 · 저장 및 소리"}[tab];
}
const homeRemarks=["무슨 일이지?","차가 식기 전에 마저 마시겠어.","오늘 일정은 확인했나?","잠깐이라면 들어주지."];
let remarkIndex=0;
let remarkTimeout;
function greetCiel(){
  if(tab!=="home")return;
  const bubble=$("ciel-aside");
  clearTimeout(remarkTimeout);
  const standing=$("home-standing");
  standing.classList.remove("ciel-hop");
  // Commit the cleared animation before restarting it on repeated clicks.
  standing.getBoundingClientRect();
  standing.classList.add("ciel-hop");
  bubble.textContent=homeRemarks[remarkIndex];
  remarkIndex=(remarkIndex+1)%homeRemarks.length;
  remarkTimeout=setTimeout(()=>{bubble.textContent="";},3000);
}
function render(focus=false,playbackOffset=0){
  clearTimeout(remarkTimeout);
  $("ciel-aside").textContent="";
  $("home-standing").classList.remove("ciel-hop");
  const panel=$("panel");
  const sameDesk=(tab==="estate"||tab==="company"||tab==="townhouse"||tab==="staffing") && $("scene").dataset.mode===tab && !$("sheet").hidden;
  const deskScroll=sameDesk?panel.scrollTop:0;
  const openSections=new Set(sameDesk
    ? Array.from(panel.querySelectorAll("details[open] > summary"),summary=>summary.textContent)
    : []);
  const standing=$("home-standing");
  if(standing.getAttribute("src")!==portraits.시엘)standing.src=portraits.시엘;
  const age=portraitAge();
  const cielHeight=148+(age-12)*6;
  $("scene").style.setProperty("--ciel-height",String(cielHeight/189));
  $("scene").style.setProperty("--ciel-aspect",({10:403/1000,11:1024/1530,12:910/1530})[age]);

  musicPlayer.sync(trackForView());
  stopPlayback();
  $("system-back").disabled=tab==="home";
  for(const id of ["scene-book","rail-book"])$(id).setAttribute("aria-pressed",String(tab==="record"));
  $("system-save").setAttribute("aria-pressed",String(tab==="save"));
  const finale=endingId();
  const opening=inOpening()||Boolean(finale);
  if(!finale){stopEnding();delete $("overture").dataset.ending;}
  $("scene").dataset.prologue=String(opening);
  $("overture").hidden=!opening;
  $("overture").setAttribute("aria-label",finale?"엔딩":"프롤로그");
  if(opening){
    for(const id of ["calendar","sheet","nav","home-standing","conversation","playback"])$(id).hidden=true;
    Object.assign($("scene").dataset,{mode:"prologue",calendar:"false",business:"false",story:"true",sheet:"false",settled:"false"});
    if(finale)drawEnding(finale,focus);
    else drawOpening(focus);
    return;
  }
  stopOpeningAuto();openingSession=false;
  $("scene").dataset.settled=String(tab==="plan"&&state.phase==="result");
  const stage=state.phase==="scene"&&tab==="plan";
  $("scene").dataset.mode=stage?"play":tab;
  $("playback").hidden=!stage;
  $("playback").innerHTML=stage?playMarkup():"";
  const vn=faceDialogue();
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
  $("home-standing").hidden=!(home||calendar||tab==="status"||tab==="title");
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
    const runLabel={contract:"계약 계속",guide:"안내 계속",visit:"방문 계속",review:"강평 보기",plan:"실행",scene:"일정 재개",slotEvent:"사건 확인",event:"사건 확인",result:"결산 확인",ending:"결과 확인"}[state.phase];
    const opening=["contract","guide"].includes(state.phase);
    const menu=opening?[["run",runLabel],["tab:save","수첩 · 저장"]]:commands;
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
  if(focus)title.focus({preventScroll:true});
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
  playSound();
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
  [...document.querySelectorAll('button[data-action="'+action+'"]:not(:disabled)')].find(button=>button.getClientRects().length)?.focus({preventScroll:true});
}
document.addEventListener("change",event=>{
  if(state.phase!=="plan")return;
  const field=event.target;
  if(field.id!=="price"&&field.id!=="qty")return;
  setNumber(field.id,Number.isFinite(field.valueAsNumber)?field.valueAsNumber:state[field.id]);
});
function goBack(rect){
  if(endingId()&&!$("picker").open){closeEnding();return true;}
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
  if(tab==="home")return false;
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
  if((inOpening()||endingId())&&["ArrowRight","ArrowLeft"].includes(event.key)){
    event.preventDefault();
    if(!dialogueHidden)handleAction(event.key==="ArrowRight"?"opening-next":"opening-prev");
    return;
  }
  if(tab==="home"&&/^[1-6]$/.test(event.key)){
    event.preventDefault();
    const action=commands[Number(event.key)-1][0];
    handleAction(action,document.querySelector('[data-action="'+action+'"]')?.getBoundingClientRect());
  }
});
let pendingConfirmation=null;
let lastMenu="tab:plan";
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
  if(action==="fair-entry"){selectFestival(id);return;}
  if(encounterAction(action,id))return;
  const fund=state.fund;
  if(action==="dialogue-toggle"){toggleDialogue();return;}
  if(endingAction(action,id)||openingAction(action,id,confirmed,rect))return;
  if(tab==="recollection"&&["system-back","back"].includes(action)){finishOpening();return;}
  if(action==="open-guide"){showGuidePage(0);return;}
  if(action==="goods"&&tab==="market"&&Object.hasOwn(marketGoods,id)){
    selectedGood=id;
    const panel=$("panel"),scroll=panel.scrollTop;
    panel.innerHTML=marketPanel();
    panel.scrollTop=scroll;
    focusAction(key);respond("choose",rect);return;
  }
  if(action==="greet-ciel"){greetCiel();return;}
  if(action==="open-menu"){
    editingVisit=false;
    utilityOrigin=null;
    tab="home";
    render(true);
    return;
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
  if(action==="chatline"){speak(id);respond("decision",rect,".dialogue");return;}
  if(eventPresentationAction(action,Number(id)))return;
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
    if(action==="townhouse"&&state.phase==="plan"&&townhouseGuestsDue(state)){
      state.princeFromPlan=true;state.pending="visitPrince";state.phase="event";tab="plan";persist();render(true);return;
    }
    const panelScroll=$("panel").scrollTop;
    persist();render();
    const detail=document.querySelector(action==="townhouse"?".annexes:last-child":".annexes");
    if(detail)detail.open=true;
    $("panel").scrollTop=panelScroll;
    respond("build",rect,".property-desk");
    popMoney(state.fund-fund);return;
  }
  if(action==="station"){
    if(tab==="estate" && Object.hasOwn(facilities,id))selectedRoom=id;
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
    if(["contract","guide"].includes(state.phase)&&!["save","plan"].includes(id)){tab="plan";render(true);return;}
    if(id==="chat"&&state.phase!=="plan"){announce("진행 중인 일정과 결산을 먼저 마쳐 주세요.");return;}
    if(id==="plan")lessonPage=Math.max(0,categories.findIndex(([,list])=>list.includes(state.plan[selectedSlot])));
    if(["record","save"].includes(id)){
      if(!["record","save"].includes(tab))utilityOrigin=tab;
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
    if(tab==="staffing"){tab="estate";render();$("panel").scrollTop=estateReturnScroll;focusAction("tab:staffing");return;}
    if(["contract","guide"].includes(state.phase)){tab="plan";render(true);return;}
    editingVisit=false;
    if(["record","save"].includes(tab)&&utilityOrigin){
      tab=utilityOrigin;utilityOrigin=null;render(true);respond("back",rect);return;
    }
    tab="home";render();focusAction(commands.find(([action])=>action===lastMenu)?.[0]||"tab:plan");respond("back",rect);return;
  }
  if(action==="run"){
    if(state.phase==="plan"&&planReady()&&cashNeeded()<=Math.max(0,state.fund))handleAction("execute",rect);
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
    editingVisit=false;
    selectedSlot=Number(id);
    const scroll=$("panel").scrollTop;
    render();
    $("panel").scrollTop=scroll;
    focusAction(key);respond("tap",rect);return;
  }
  if(action==="close"){
    pendingConfirmation=null;
    $("picker").close();respond("back",rect);return;
  }
  if(action==="confirm"){
    const operation=pendingConfirmation;
    pendingConfirmation=null;
    $("picker").close();
    if(operation)handleAction(operation,rect,true);
    return;
  }
  if(action==="step"){
    setNumber(id,state[id]+Number(value));respond("step",rect,"#market-balance");return;
  }
  if(action==="execute"&&state.phase==="plan"&&!planReady()){
    tab="plan";editingVisit=false;selectedSlot=state.plan.findIndex(id=>!actions[id]);
    render(true);return;
  }
  if(action==="execute"&&!confirmed&&state.phase==="plan"){
    const periods=state.plan.map((id,index)=>'<li><small>'+slotNames[index]+'</small>'+plannerIcon(id)+'<b>'+actions[id].name+'</b></li>').join("");
    const instructions='<details class="desk-review"><summary>이달 운영 지시 확인·변경</summary>'+
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
    if(!confirmed){askConfirmation(key,"새 회차","현재 진행이 초기화됩니다.<br>수동 저장은 유지됩니다.","새 회차 시작",rect);return;}
    utilityOrigin=null;state=initial();dialogueHidden=false;selectedSlot=0;tab="plan";message="새 회차 시작";
  }else if(action==="store"){
    if(saves[id]&&!confirmed){askConfirmation(key,"슬롯 "+id+" 저장","기존 슬롯의 저장 내용을 교체합니다.","덮어쓰기",rect);return;}
    pattern="save";saves[id]=structuredClone(state);message="슬롯 "+id+" 저장 완료";
  }else if(action==="load"){
    if(!saves[id])return;
    if(!confirmed){askConfirmation(key,"불러오기","현재 진행을 선택한 저장 상태로 바꿉니다.","불러오기",rect);return;}
    utilityOrigin=null;state=normalizeSave(saves[id]);selectedSlot=0;tab=state.phase==="plan"?"home":"plan";message="불러오기 완료";
  }else{
    if(state.phase!=="plan")return;
    if(action==="buy"){
      const g=marketGoods[id];
      if(tab!=="market"||!Object.hasOwn(marketGoods,id)||state.fund<g.cost)return;
      const effects=goodsEffects(g).filter(({before,after})=>before!==after);
      if(!effects.length)return;
      state.fund-=g.cost;
      for(const {key,after} of effects)state[key]=after;
      tryRecover(state);
      message=g.name+" · "+effects.map(({key,before,after})=>conditionLabels[key]+" "+signed(after-before)).join(" / ");
    }else if(action==="activity"){
      pattern="schedule";state.plan[Number(id)]=value;
      message=slotNames[Number(id)]+" · "+actions[value].name;
    }else if(action==="visit"){
      state.visit=id;
      message="자유행동 · "+visits[id];
    }else if(action==="product"){
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
      const before=state.hp,stress=state.stress;
      flagEvent(marker,()=>{state.fund-=55;state.hp=cap(state.hp+24);state.stress=cap(state.stress-20);tryRecover(state);});
      message="왕진 완료 · 건강 "+signed(state.hp-before)+" · 스트레스 "+signed(state.stress-stress);
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
      message=departments[id].name+" Lv. "+(level+1)+" · 예상 영업이익 +"+money(current.margin-prior.margin);
      pattern="build";
    }else if(action==="develop"){
      if(!Object.hasOwn(products,id))return;
      const cost=researchFee(id);
      if(state.fund-cost<cashNeeded()||state.prototype||state.month===state.duration||state.unlocked.includes(id))return;
      state.accounts.researchSaved=(state.accounts.researchSaved||0)+products[id].research-cost;
      state.fund-=cost;state.prototype={product:id,brief:state.brief||"family",review:state.month,reworked:false,approved:false};
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
      if(pressed?.animate&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
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
render();
if(state.phase==="guide"&&tab==="plan")showGuidePage(0);
$("launch-help").hidden=true;
$("mobile-menu").hidden=false;
