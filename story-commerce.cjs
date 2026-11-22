const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const mem=new Map(),elements=new Map();
function element(){return {isConnected:true,dataset:{},style:{setProperty(){}},addEventListener(){},setAttribute(){},focus(){},querySelector(){return this},querySelectorAll(){return []},classList:{contains(){return false},toggle(){}}}}
const doc={hidden:false,getElementById(id){if(!elements.has(id))elements.set(id,element());return elements.get(id)},querySelectorAll(){return []},addEventListener(){}};
const ctx=vm.createContext({console,structuredClone,document:doc,ResizeObserver:class {observe(){}},localStorage:{getItem:k=>mem.get(k)||null,setItem:(k,v)=>mem.set(k,v)},setTimeout,clearTimeout,clearInterval,window:{getSelection(){return null},addEventListener(){}},URLSearchParams});
for(const name of ['content','prince','recruit','story','scenes','audio','reports','prologue','chapters','staffing','term-events','visitors','festivals','almanac','game']){
 let s=fs.readFileSync(require('node:path').join(process.argv[2]||'site','js',name+'.js'),'utf8');if(name==='game')s=s.slice(0,s.indexOf('\nrender();\nif(state.phase'));
 vm.runInContext(s,ctx,{filename:name+'.js'});
}
const run=s=>vm.runInContext(s,ctx,{timeout:1800});run('let tourSession=false;render=function(){};');
run('render=()=>{};respond=()=>{};announce=()=>{};focusAction=()=>{};popMoney=()=>{};document.querySelector=()=>null;');
const assertOk=source=>assert.ok(run(source),source);
const setup=(code="")=>run('state=initial();state.owlSeed=1;state.phase="plan";tab="company";'+code);
function pick(){
  run('if(recruitScenes[state.pending])state.recruitPage={id:state.pending,version:2,at:recruitScenes[state.pending].lines.length-1};choose(0)');
}
for(const phase of ['result','vow']){
  setup('state.month=35;state.phase="'+phase+'";state=normalizeSave(state)');
  const sequence=[];
  while(run('state.phase')==='event'){
    assert.ok(sequence.length<9);sequence.push(run('state.pending'));run('persist();state=normalizeSave(saves.auto)');pick();
  }
  assert.deepEqual(sequence,['gardener','maid','cook','homecoming']);assert.equal(run('state.phase'),phase);
}
setup('state.month=29;state.flags.snakeSafe=true;state.flags.circus=true;state.events=[{id:"circus",index:1,month:20}];for(const id of ["finny","mey","bard","tanaka"])recruit(id);state.phase="result";state=normalizeSave(state)');
assertOk('!state.pending&&!state.people.snake');
run('state.flags.townhouse=true;recruit("soma");recruit("agni");state.month=35;state=normalizeSave(state)');
assert.equal(run('state.pending'),'snakeReturn');pick();assertOk('state.people.snake&&state.events.some(x=>x.id==="circus"&&x.index===1)');
for(const omit of ["townhouse","soma","agni"]){
  ctx.omit=omit;
  setup('state.month=35;state.phase="event";state.pending="circus";state.recruitPage={id:"circus",at:7,version:2};state.eventQueue=["snakeReturn"];for(const p of ["finny","mey","bard","tanaka","soma","agni"])recruit(p);state.flags.townhouse=omit!=="townhouse";delete state.people[omit];state=normalizeSave(state)');
  assertOk('!state.people.snake && !state.recruitPage && !["circus","snakeReturn"].includes(state.pending) && !state.snakeArrivalMonth');
}
for(const missing of ["townhouse","finny","mey","bard"]){
  ctx.missing=missing;
  setup('state.flags.townhouse=missing!=="townhouse";for(const id of ["finny","mey","bard"])if(id!==missing)recruit(id);state.pending="visitPrince";state.phase="event";state.recruitReturn="estate";state.eventQueue=["visitPrince"];state=normalizeSave(state)');
  assertOk('state.phase==="plan"&&!state.pending&&!townhouseGuestsDue(state)&&!state.flags.visitPrince');
}
setup('state.month=19;state.flags.townhouse=true;recruit("finny");recruit("mey");state.phase="event";state.pending="cook";state.eventQueue=[]');
pick();assert.equal(run('state.pending'),"visitPrince");
assertOk('!state.people.soma && !state.people.agni');
run('state.recruitPage={id:"visitPrince",at:6,version:3};state=normalizeSave(state)');assert.equal(run('recruitPage("visitPrince")'),6);
pick();assertOk('state.people.soma && state.people.agni && !townhouseGuestsDue(state)');
setup('state.flags.townhouse=true;recruit("soma");recruit("agni");state.flags.visitPrince=true;state=normalizeSave(state)');
assertOk('state.people.soma && state.people.agni && !state.pending');
const princePages=run('recruitScenes.visitPrince.lines');
assert.match(princePages[0].text,/에워쌌다/u);
assert.ok(princePages.every(p=>!["여왕","라우","백작","커피하우스"].some(word=>(p.speaker+p.text+(p.withTanaka||"")+p.scene.title).includes(word))));
const welcome=princePages.findIndex(p=>p.withTanaka);
assert.ok(welcome>=0);ctx.welcome=welcome;
assertOk('!recruitMarkup("visitPrince",welcome).includes("타나카") && recruitMarkup("visitPrince",welcome,x=>x,true,false,"",true).includes("타나카")');
setup('for(const p of ["bard","finny","mey"])recruit(p);state.month=5;state.phase="plan";state.fund=500;handleAction("townhouse",null,true)');
assert.equal(run('state.pending'),'visitPrince');pick();
assertOk('state.people.soma && state.people.agni && !state.people.tanaka && state.snakeArrivalMonth>=5 && state.snakeArrivalMonth<=7');
run('state.month=state.snakeArrivalMonth;state.phase="result";advance();state=normalizeSave(state)');
assert.equal(run('state.pending'),'circus');
assertOk('["스네이크","소마","아그니","시엘","세바스찬"].every(name=>recruitScenes.circus.lines.some(page=>page.speaker===name))');
assertOk('recruitScenes.circus.lines.every((page,i)=>recruitMarkup("circus",i).includes(page.text))');
run('state.recruitPage={id:"circus",at:13,version:3};state=normalizeSave(state)');assert.equal(run('recruitPage("circus")'),13);
pick();assertOk('state.people.snake && !dueSnakeVisit(state) && state.events.filter(e=>e.id==="circus").length===1');
for(const [person,place,month] of [["tanaka","library",1],["finny","garden",1],["mey","quarters",1],["bard","kitchen",1],["snake","quarters",2],["soma","townhouse",1],["agni","townhouse",2]]){
  Object.assign(ctx,{person,place,month});
  setup('recruit(person);state.phase="visit";state.visit=place;state.month=month;state.sequence={index:2}');
  for(const [tier,trust] of [2,3,5,9].entries()){
    Object.assign(ctx,{tier,trust});
    run('state.people[person].toward=trust');
    assertOk('visitScene().includes(trustedGreetings[person][tier]) && relationBook().includes("상대 → 시엘 신뢰　"+rank(trust))');
  }
}
setup('tab="estate"');
assertOk('!managementPanel().includes("tab:townhouse")');
run('handleAction("tab:townhouse")');assert.equal(run('tab'),"estate");
run('for(const p of ["bard","finny","mey"])recruit(p);handleAction("townhouse",null,true)');pick();
assertOk('managementPanel().includes("tab:townhouse")');
run('handleAction("tab:townhouse")');
assertOk('tab==="townhouse" && managementPanel().includes("이번 달 배치")');
run('placeEmployee("soma","salon");placeEmployee("agni","kitchen");state=normalizeSave(state)');
assertOk('londonPlan(state).ready && !state.jobs.soma && !state.jobs.agni');
const demandWithVisitors=run('forecast().demand');
run('placeEmployee("soma","off")');assert.equal(run('forecast().demand'),demandWithVisitors-3);
run('placeEmployee("soma","salon");state.london.skill={soma:9,agni:9};state.hp=99;state.phase="scene"');
run('placeEmployee("agni","post");settleLondon(state);settleLondon(state);state=normalizeSave(state)');
assertOk('state.london.book.length===1 && state.london.jobs.agni==="kitchen" && state.london.skill.agni===10 && state.hp===100 && state.renown===1');
assertOk('londonPlan(state).power.salon===4 && state.london.book[0].summary.includes("건강 +1")');
run('state.month=2;state.phase="plan";placeEmployee("agni","post");state.stats.통찰=499;settleLondon(state)');
assertOk('state.stats.통찰===500 && state.renown===2 && state.london.book.length===2');
run('state.month=3;placeEmployee("agni","off");placeEmployee("soma","off");settleLondon(state)');
assertOk('state.london.book.length===2 && londonPlan(state).power.salon===0');
setup('state.flags.townhouse=true;recruit("soma");recruit("agni");tab="townhouse";placeEmployee("soma","post");placeEmployee("agni","post")');
assertOk('londonPlan(state).power.post===4 && !londonPlan(state).ready');
setup('state.flags.townhouse=true;recruit("soma");recruit("agni");tab="townhouse";placeEmployee("soma","salon");placeEmployee("agni","kitchen");state.plan=["rest","study","reading"];state.visit="none";state.sequence={...forecast(),opening:{fund:state.fund,stats:{...state.stats}}};settleMonth();state=normalizeSave(state)');
assertOk('state.london.book[0].month===1 && state.london.skill.soma===1 && state.log.some(entry=>entry.includes("완구상 초청 다과회"))');
// Recruitment, the ledger replay and the public reader share the same authored scene cues.
setup('tab="plan";state.phase="event";state.pending="circus"');
const snakeLines=run('recruitScenes.circus.lines.map(p=>[p.scene.title,p.speaker,p.text])');
assert.ok(snakeLines.every(row=>!row.join(" ").includes("스마일")));
const snakeDialogue=snakeLines.filter(row=>row[1]==="스네이크").map(row=>row[2]);
const returnGreeting=run('events.find(e=>e.id==="snakeReturn").text');
for(const text of [...snakeDialogue,...run('trustedGreetings.snake'),returnGreeting]){
  assert.match(text,/⋯라고 (?:에밀리|오스카|키츠|와일드)가 말했어\.$/u);
  assert.doesNotMatch(text,/(?:요|니다|시오|지요)[.?!, ]|습니다만|께서|드시|주셔/u);
}
const asksForVisit=snakeLines.findIndex(([,speaker,text])=>speaker==="스네이크"&&text.includes("얼굴만이라도"));
const recognizes=snakeLines.findIndex(([,speaker,text])=>speaker==="시엘"&&text.includes("노아의 방주"));
const tellsTruth=snakeLines.findIndex(([,speaker,text])=>speaker==="시엘"&&text.includes("아이들을 납치"));
assert.ok(asksForVisit>=0 && recognizes>asksForVisit && tellsTruth>recognizes);
assert.ok(snakeLines.slice(tellsTruth).some(([,speaker,text])=>speaker==="시엘"&&text.includes("면회시켜 주진 않아")));
const jokerQuestion=snakeLines.findIndex(([,speaker,text])=>speaker==="시엘" && text.includes("조커"));
assert.ok(jokerQuestion>0);
assert.match(snakeLines[jokerQuestion][2],/조커가 누구지\?/u);
assert.equal(snakeLines[jokerQuestion+1][1],"스네이크");
assert.match(snakeLines[jokerQuestion+1][2],/단장 대리/u);
for(const [index,[title]] of snakeLines.entries()){
  ctx.at=index;
  const score={"봉투에 적힌 이름":"gloomy","런던의 번지":"gloomy","타운하우스의 문간":"daily","손으로 전할 편지":"daily","마차를 빌리다":"daily","온실 앞":"daily","백작에게 묻다":"gloomy","열어 둘 문":"romantic","신임 경비원의 침구":"romantic"};
  assert.equal(run('tab="plan";state.recruitPage={id:"circus",at,version:3};trackForView()'),score[title]);
  assert.equal(run('tab="staffMemory";recruitMemory={id:"circus",at};trackForView()'),score[title]);
}
setup('tab="plan";state.phase="event";state.ill=true;state.pending="circus"');assert.equal(run('trackForView()'),'illness');
for(const [event,track] of [["audience","etiquette"],["linenMarks","daily"],["finnyRoseLabel","cheerful"],["teaPrivilege","romantic"],["postalReply","gloomy"]]){
  ctx.eventId=event;assert.equal(run('eventTrack(eventId)'),track);
}
for(const [tier,value] of [45,100,225,350].entries()){
  Object.assign(ctx,{tier,value});
  for(const topic of ["health","business","tea"]){
    ctx.topic=topic;
    setup('tab="chat";for(const key of stats)state.stats[key]=value');
    assertOk('chatDialogue().line===butlerGreetings[tier]');
    run('speak(topic);handleAction("chat-reply");state=normalizeSave(state)');
    assertOk('chatDialogue().caption==="세바스찬 미카엘리스"&&chatDialogue().line===butlerReplies[topic][tier]');
  }
}
setup('state.events=[{id:"unasked",index:0}];state.flags.gloves=true;state=normalizeSave(state)');assertOk('!state.flags.gloves&&state.flags.morningGloves');
run('state.events.push({id:"gloves",index:1});state.flags.gloves=true;state=normalizeSave(state)');assertOk('state.flags.gloves&&state.flags.morningGloves');
for(const [id,place,person] of [['greenhouseKey','garden','finny'],['finnyRoseLabel','garden','finny'],['bardSupper','kitchen','bard'],['linenMarks','quarters','mey'],['postalReply','library','tanaka']]){
  for(const index of [0,1]){
    ctx.entry={id,place,person,index};
    setup('recruit(entry.person);state.month=10;state.phase="visit";state.visit=entry.place;state.events=[{id:entry.id,index:entry.index,month:9}];state.flags[entry.id]=true;state.sequence={index:2}');
    assertOk('visitScene().includes(visitRecollections[entry.id].lines[entry.index])');
    run('visitDone(false);state=normalizeSave(state);state.month++;state.sequence={index:2};state.phase="visit"');assertOk('visitMemory(entry.place,entry.person)===null');
  }
}
for(const id of ['supplierReply','postalReply']){
  const prev=id==='postalReply'?'chapel':'match';ctx.k=id;ctx.prev=prev;setup('state.month=34;state.events=[{id:prev,index:0,month:33}]');
  const a=run('storyLine(events.find(x=>x.id===k))');run('state.events[0].index=1');assert.notEqual(run('storyLine(events.find(x=>x.id===k))'),a);
}
setup('state.stock.toys=8;state.fineStock.toys=3;state.qty=0;state.quality="fine"');assert.equal(run('forecast().sold'),3);
run('state.quality="standard"');assert.equal(run('forecast().sold'),5);
setup('state.month=4;state.unlocked.push("sweets");state.productHistory.toys={units:32,reputation:5,orders:0};handleAction("order:toys",null,true);handleAction("order:toys",null,true);state=normalizeSave(state)');
assertOk('state.order.due===5&&state.order.qty===7');run('state.month=5;state.product="sweets";state.stock.toys=5;state.fineStock.toys=2;state.plan=["walk","walk","walk"];state.visit="none";state.qty=10');
const quote=JSON.parse(run('JSON.stringify(forecast())'));assert.equal(quote.trade.shipped,5);assert.equal(quote.trade.short,2);assert.equal(quote.trade.penalty,4);
const balance=run('marketStats().balance');run('execute();state=normalizeSave(saves.auto);settleMonth()');assert.equal(run('state.fund'),balance);
assertOk('!state.order && state.stock.toys===0 && state.fineStock.toys===0 && state.productHistory.toys.units===37 && state.productHistory.toys.reputation===3 && state.report.penalty===4');
assertOk('actualBudget().includes("거래처 납품 대금")&&salesBooks().includes("납품 5/7")');
setup('state.stock.toys=25;state.fineStock.toys=10;state.qty=0;state.price=40;state.plan=["walk","walk","walk"];state.visit="none"');
assert.equal(run('forecast().trade.holding'),13);
setup('state.month=33;state.unlocked.push("sweets");state.productHistory.toys={units:50,reputation:10,orders:1};state.flags.sharedReceipt=true;handleAction("order:toys",null,true);state.month++;state.stock.toys=14;state.product="sweets";state.qty=0;state.plan=["walk","walk","walk"];state.visit="none";execute();settleMonth();');
assertOk('state.productHistory.toys.orders===2&&state.report.wholesale>0&&state.report.penalty===0');
setup('state.phase="plan";state.productHistory.toys={units:70,reputation:8,orders:2};state.qty=0;handleAction("material:select",null,true);handleAction("lead:sales",null,true);handleAction("develop:toys",null,true)');assertOk('state.prototype.revised&&state.prototype.material==="select"&&state.prototype.lead==="sales"&&state.fund===460');
run('state.phase="result";handleAction("sample:approve",null,true);advance()');assertOk('state.unlocked.length===1&&state.productNotes.toys.material==="select"&&!canDesign("toys")');
setup('state.fund=500;handleAction("expand:works",null,true);handleAction("liquidate:works",null,true);handleAction("liquidate:works",null,true)');assertOk('state.shop.works===1&&state.fund===462&&state.accounts.divest===37');
setup('delete state.fineStock;delete state.productHistory;state.salesBook=[{month:1,product:"toys",sold:8}];state.quality="fine";state.stock.toys=4;state=normalizeSave(state);state=normalizeSave(state)');assertOk('state.productHistory.toys.units===8&&state.fineStock.toys===4');
assertOk('orderDesk().includes("재주문") && inventoryRows().includes("누적 판매")');
console.log('PASS townhouse invitation, trust greetings for seven characters, Sebastian growth and replies, late-save recruitment, final vow return, legacy Snake, independent gloves, 10 visit echoes and reloads, both history branches, graded inventory, cross-product deliveries, fees, cash reconciliation, upgrade and liquidation.');

const result=vm.runInContext(`(()=>{
 const all=new Set(),last={},arrivals=new Set();for(let seed=0;seed<4096;seed++){
  const run=initial();run.owlSeed=seed;run.people.finny={};const births=[];
  for(let m=13;m<=25;m++){
   run.month=m;
   // Queue recruitment candidates against the start-of-settlement roster.
   const maid=owlAppears(run),cook=events.find(e=>e.id==='cook').sees(run);
   if(m===21){run.flags.townhouse=true;run.people.soma={};run.people.agni={}}
   scheduleSnakeVisit(run);
   const snake=dueSnakeVisit(run);
   if(snake && (m<21||m>23||snake!=="circus"))throw Error("Invalid Snake window");
   if(cook){run.people.bard={};births.push('B'+m)}
   if(maid){run.people.mey={};births.push('M'+m)}
   if(tanakaReturns(run)){run.people.tanaka={};births.push('T'+m);run.events.push({id:'homecoming',month:m})}
   if(snake){run.people.snake={};arrivals.add(m);births.push('S'+m)}
  }
  if(!run.people.snake||births.map(s=>s[0]).filter(id=>id!=='S').join('')!=='MBT')throw Error(seed+':'+births.join());
  for(const s of births){const k=s[0];last[k]=Math.max(last[k]||0,+s.slice(1))}
  all.add(births.join(','));
 }
 if(arrivals.size!==3)throw Error("Expected three possible visiting months");
 return {patterns:all.size,latest:last};
})()`,ctx,{timeout:12000});
console.log('4096 seeds',JSON.stringify(result));

// A complete campaign from the starting estate, including tuition, trade, fatigue and both birthdays.
ctx.campaignSchedule=[
  ["accounts", "dance", "inquiry", 14, 15],
  ["walk", "etiquette", "dance", 14, 13],
  ["etiquette", "walk", "accounts", 13, 12],
  ["music", "casework", "music", 13, 11],
  ["walk", "inquiry", "music", 14, 16],
  ["developToy", "casework", "recovery", 15, 15],
  ["casework", "recovery", "inquiry", 13, 13],
  ["dance", "recovery", "casework", 14, 14],
  ["etiquette", "recovery", "study", 13, 14],
  ["accounts", "recovery", "study", 15, 17],
  ["inquiry", "recovery", "etiquette", 14, 18],
  ["recovery", "dance", "negotiate", 15, 19],
  ["practicum", "negotiate", "practicum", 14, 15],
  ["recovery", "accounts", "practicum", 13, 16],
  ["recovery", "negotiate", "letters", 13, 17],
  ["recovery", "exercise", "exercise", 13, 18],
  ["exercise", "walk", "riding", 14, 20],
  ["exercise", "recovery", "reading", 15, 21],
  ["language", "reading", "reading", 13, 17],
  ["study", "language", "developToy", 14, 18],
  ["walk", "letters", "walk", 14, 17],
  ["letters", "social", "reception", 15, 21],
  ["social", "social", "recovery", 15, 19],
  ["developToy", "language", "reception", 15, 21],
  ["music", "music", "music", 14, 19],
  ["reading", "reading", "reading", 13, 18],
  ["reception", "letters", "letters", 14, 17],
  ["practicum", "practicum", "accounts", 14, 17],
  ["developToy", "developToy", "developToy", 15, 19],
  ["recovery", "recovery", "developToy", 15, 19],
  ["recovery", "walk", "walk", 13, 15],
  ["rest", "rest", "rest", 14, 19],
  ["rest", "rest", "rest", 14, 17],
  ["rest", "rest", "rest", 15, 21],
  ["rest", "rest", "rest", 15, 19]
];
const fullRun=vm.runInContext(`(()=>{
  state=initial();state.owlSeed=0;state.phase="plan";tab="plan";
  for(const [a,b,c,price,qty] of campaignSchedule){
    if(state.phase!=="plan")throw Error("Could not enter calendar at "+state.month);
    state.plan=[a,b,c];state.visit="town";state.price=price;state.qty=qty;
    execute();
    if(state.phase!=="scene")throw Error("Infeasible budget at "+state.month);
    for(let steps=0;steps<180;steps++){
      if(state.phase==="scene")finishScene();
      else if(state.phase==="review")continueSequence();
      else if(state.phase==="event"||state.phase==="slotEvent"){
        const event=pendingEvent();
        if(state.termOutcome){
          state=normalizeSave(saves.auto);handleAction("term-close");
        }else if(termPages(event)&&(state.termPage||0)<termPages(event).length-1){
          handleAction("term-next:"+(state.termPage||0));
        }else{
          if(recruitScenes[event.id])state.recruitPage={id:event.id,at:recruitScenes[event.id].lines.length-1,version:2};
          choose(event.choices.findIndex(ch=>!ch.when||ch.when(state)));
        }
      }else if(state.phase==="visit"){
        const visitor=visitEncounterCards.find(e=>e.id===state.sequence.visitEvent);
        if(visitor && (state.sequence.encounterPage||0)<visitor.lines.length-1)handleAction("encounter-next:"+(state.sequence.encounterPage||0));
        else if(state.sequence.visitEvent)chooseVisitEvent(0);
        else if(state.sequence.visitBefore)finishVisit();else visitDone(true);
      }else if(state.phase==="result")advance();
      else break;
    }
  }
  return {finished:state.phase==="ending"||state.phase==="investiture",stats:Object.values(state.stats),
    birthdays:state.events.filter(e=>birthdayDialogue[e.id]).map(e=>e.month),exams:state.events.filter(e=>e.id.startsWith("portfolio-")).length};
})()`,ctx,{timeout:8000});
assert.ok(fullRun.finished);assert.equal(fullRun.exams,14);
assert.deepEqual(Array.from(fullRun.stats),Array(7).fill(500));
assert.deepEqual(Array.from(fullRun.birthdays),[12,24]);
console.log('PASS 35 months from the initial estate, 7 x 500, 14 portfolio exams and both birthdays.');

for(const condition of ["state.hp=30","state.stress=100"]){
  setup(condition+';state.plan=["exercise","rest","rest"];state.visit="library";state.qty=0;execute()');
  assertOk('state.phase==="scene" && state.sequence.activity==="recovery" && state.sequence.onSickLeave');
  assertOk('state.sequence.trainingPaid===0 && state.fund===state.sequence.opening.fund && !state.counts.exercise');
}
setup('state.hp=20;state.stress=100;state.visit="library";persist()');
assertOk('state.ill && !hasPendingVisit()');
run('state.hp=57;state.stress=51;persist()');
assertOk('!state.ill && hasPendingVisit()');

for(const [index,outcome] of [[0,"success"],[1,"practice"],[1,"absent"]]){
  Object.assign(ctx,{fairIndex:index,fairOutcome:outcome});
  setup('state.month=4;selectFestival(fairIndex);persist();state=normalizeSave(saves.auto);state.month=5;');
  run('if(fairOutcome==="success")state.counts.developToy=1;if(fairOutcome==="absent")state.ill=true;settleFestival(state)');
  assertOk('state.fairBook.kensington1886.outcome===fairOutcome');
  const renown=run('state.renown');run('settleFestival(state)');assert.equal(run('state.renown'),renown);
  run('state.month=6');
  assert.equal(run('fairDemand(state,londonFestivals[0].options[fairIndex].product)'),outcome==="success"?4:outcome==="practice"?2:0);
  run('state.month=7');assertOk('fairDemand(state,londonFestivals[0].options[fairIndex].product)===0');
}
setup('state.month=4;selectFestival(0);selectFestival("cancel");state.month=5;settleFestival(state)');
assertOk('!state.fairBook?.kensington1886');
for(const index of [0,1]){
  ctx.replyIndex=index;
  setup('recruit("tanaka");state.people.tanaka.from=9;state.counts.inquiry=1;state.visit="library";state.flags.proof=true;state.phase="visit";state.sequence={index:2};visitDone(true)');
  assertOk('state.sequence.visitEvent==="visitLibrarySeal"');
  run('handleAction("encounter-next:0");state=normalizeSave(saves.auto)');
  assertOk('state.sequence.encounterPage===1 && !Object.hasOwn(state.people.tanaka,"from")');
  run('chooseVisitEvent(replyIndex)');assertOk('!state.flags.visitLibrarySeal');
  run('handleAction("encounter-next:1");handleAction("encounter-next:2");chooseVisitEvent(replyIndex);chooseVisitEvent(replyIndex)');
  assertOk('state.events.filter(e=>e.id==="visitLibrarySeal").length===1 && state.sequence.encounterReply');
  run('state.month++;state.sequence={index:2};visitDone(true)');
  assertOk('state.sequence.visitEvent===(replyIndex===0?"visitLibraryWax":"visitLibraryCarbon")');
}
assertOk('Object.keys(endingScenes).length===9 && Object.values(endingScenes).every(scene=>scene.lines.length>=48)');
console.log('PASS illness, free sick leave, recovery, optional fair outcomes and demand, both library follow-ups after loading, one-way trust, and all nine ending scripts.');
