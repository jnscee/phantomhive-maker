const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const mem=new Map(),elements=new Map();
function element(){return {isConnected:true,dataset:{},style:{setProperty(){}},addEventListener(){},setAttribute(){},focus(){},querySelector(){return this},querySelectorAll(){return []},classList:{contains(){return false},toggle(){}}}}
const doc={baseURI:"https://example.test/",hidden:false,getElementById(id){if(!elements.has(id))elements.set(id,element());return elements.get(id)},querySelectorAll(){return []},addEventListener(){}};
const ctx=vm.createContext({console,structuredClone,document:doc,ResizeObserver:class {observe(){}},localStorage:{getItem:k=>mem.get(k)||null,setItem:(k,v)=>mem.set(k,v)},setTimeout,clearTimeout,clearInterval,window:{getSelection(){return null},addEventListener(){}},URL,URLSearchParams});
for(const name of ['locale','cover','content','prince','recruit','story','scenes','audio','reports','prologue','chapters','staffing','term-events','visitors','festivals','almanac','game']){
 let s=fs.readFileSync(require('node:path').join(process.argv[2]||'site','js',name+'.js'),'utf8');if(name==='game')s=s.slice(0,s.indexOf('\nrender();\n'));
 vm.runInContext(s,ctx,{filename:name+'.js'});
}
const run=s=>vm.runInContext(s,ctx,{timeout:1800});run('let tourSession=false;render=function(){};');
run('render=()=>{};respond=()=>{};announce=()=>{};focusAction=()=>{};popMoney=()=>{};document.querySelector=()=>null;');
const assertOk=source=>assert.ok(run(source),source);
const setup=(code="")=>run('state=initial();state.owlSeed=1;state.phase="plan";tab="company";'+code);
// Both tea-party events in each of the three years use Edward, including on a restored scorecard.
const teaParties=run('contests.filter(f=>f.id.startsWith("newYear-")).map(f=>f.id)');
assert.equal(teaParties.length,2);
for(const id of teaParties){
  ctx.teaId=id;
  for(const index of [0,1]){
    ctx.teaIndex=index;
    const intro=run('duelScene(contests.find(f=>f.id===teaId),{index:teaIndex},{rivalScore:44,focus:0})');
    assert.match(intro,/에드워드 미드포드/);assert.doesNotMatch(intro,/엘리자베스/);
    assert.ok(intro.includes(index?"edward-tea.png":"edward-greeting.png"));
    assert.match(intro,/팬텀하이브의 당주/);
  }
}
for(const [rank,score,expected] of [[0,5,"입상권 밖"],[1,40,"은상"],[2,44,"공동 금상"],[2,49,"금상"]]){
  ctx.legacyEntry={rank,score,duel:{rivalScore:44},scoreNote:"매력 41 + 심사 대응 8"};
  const slip=run('contestResultSlip(contests[0],legacyEntry,"심사평")');
  assert.ok(slip.includes("<h3>"+expected+"</h3>")&&slip.includes(ctx.legacyEntry.scoreNote));
  assert.doesNotMatch(slip,/undefined|NaN|입상 보상/);
}
assert.deepEqual(Array.from(run('contests.map(f=>f.month)')),[4,9,13,16,21,25,28,33]);
assert.deepEqual(Array.from(run('contests.slice(0,3).map(f=>f.title)')),["이스터(부활절)","로열 워런트(수확제)","신년 다과회"]);
assertOk('contests.every(f=>f.track===(f.warrant?"companyFair":f.id.startsWith("easter-")?"sakura":"newYear"))');
for(const [month,extra,qty] of [[5,4,8],[18,2,9],[29,3,8]]){
  ctx.marketMonth=month;
  setup('state.month=state.planMonth=marketMonth;state.product="toys";state.qty=20');
  const demand=run('forecast().demand');
  assertOk('openContests(state).every(f=>f.month!==marketMonth)');
  assert.equal(run('historicalTradeEvents[state.month].demand.toys'),extra);
  run('state.order=customerOffer(state,"toys");state=normalizeSave(state)');
  assert.equal(run('state.order.qty'),qty);
  assertOk('state.order.due===state.month&&tradeBuyer(state.order)===historicalTradeEvents[state.month].buyer');
  assert.equal(run('forecast().trade.shipped'),qty);
  assert.equal(run('forecast().demand'),demand);
  assertOk('!customerOffer(state,"toys")');
}
// All competitions pair each judging tier with its own scripted reading.
setup();
for(const fairId of run('contests.map(f=>f.id)')){
  ctx.fairId=fairId;
  run('state.fund=25;state.qty=1;state.quality="fine";state.stats.기품=44;state.stats.매력=44;');
  assertOk(`(()=>{
    const f=contests.find(f=>f.id===fairId);
    const entries=f.company?[{product:"toys"}]:f.options.map((_,index)=>({index}));
    return entries.every(t=>{
      const duel={rivalScore:44,focus:0};
      const speeches=[0,1,2].map(rank=>contestSpeech(f,t,rank));
      if(new Set(speeches).size!==3||speeches.some(line=>typeof line!=="string"))return false;
      const first=judgeContest(state,f,t,{...duel,choice:0});
      const second=judgeContest(state,f,t,{...duel,choice:1});
      return JSON.stringify(first)===JSON.stringify(second)&&
        first.score===Math.round(first.factors.reduce((n,[,m])=>n*m,first.scoreParts[0][1]))&&
        (f.company||first.scoreParts[0][1]===state.stats[f.options[t.index].stat]);
    });
  })()`);
}
// A real manual slot saved on the last line can be replayed. Once awarded, the saved result is final.
setup('state.fairTickets={"newYear-1886":{index:0}};state.plan=["study","study","study"];state.visit="none";state=normalizeSave(state)');
assertOk('!reservedContest(state)&&openContests(state).length===0&&scheduledActivities(state).length===3&&settleFestival(state)===null');
for(const [index,stat,low,high] of [[0,"기품",.31,.34],[1,"매력",.15,.18]]){
  setup('tab="plan";state.month=state.planMonth=13;state.stats.기품=124;state.stats.매력=71;state.fairTickets={"newYear-1887":{index:'+index+'}};state.sequence={contest:"newYear-1887"};prepareContest(state)');
  const chance=run('state.sequence.duel.judgment.chance');
  assert.ok(chance>low&&chance<high);
  assert.equal(run('state.sequence.duel.rivalScore'),195);
  run('state.sequence.duel.page=2;handleAction("store:1",null,true)');
  const before=run('JSON.stringify([state.fund,state.renown,state.stats])');
  for(const won of [false,true]){
    run('handleAction("load:1",null,true)');
    assert.equal(run('JSON.stringify([state.fund,state.renown,state.stats])'),before);
    ctx.roll=won?chance/2:(1+chance)/2;
    run('(()=>{const rng=Math.random;try{Math.random=()=>roll;settleFestival(state,state.sequence.duel);}finally{Math.random=rng;}})()');
    const entry=run('state.fairBook["newYear-1887"]');
    assert.equal(entry.rank,won?2:0);
    assert.equal(entry.purse,won?46:0);
    assert.equal(entry.prize,won?"은제 찻숟가락":"");
    assert.equal(entry.growth?.length||0,won?2:0);
    if(!won)assert.equal(run('JSON.stringify([state.fund,state.renown,state.stats])'),before);
    const slip=run('contestResultSlip(contests[2],state.fairBook["newYear-1887"],"심사평")');
    assert.match(slip,won?/<h3>승리/:/<h3>패배/);assert.doesNotMatch(slip,/금상|은상|동점/);
    assert.equal(slip.includes("승리 보상"),won);
    const paid=run('JSON.stringify([state.fairBook,state.fund,state.renown,state.stats])');
    run('handleAction("store:2",null,true);handleAction("load:2",null,true);settleFestival(state,state.sequence.duel)');
    assert.equal(run('JSON.stringify([state.fairBook,state.fund,state.renown,state.stats])'),paid);
  }
  setup('state.stats.기품=124;state.stats.매력=71');
  ctx.optionIndex=index; ctx.statKey=stat;
  const odds=()=>run('judgeContest(state,contests[2],{index:optionIndex}).chance');
  const baseline=odds();
  run('state.stats[statKey]+=12');assert.ok(odds()>baseline);
  run('state.stats[statKey]-=12;state.stress+=20');assert.ok(odds()<baseline);
}
// Preview, execution and save/load use the same course tradeoff for each of the three grades.
for(const id of run('[...categories[0][1],...categories[2][1]]')){
  ctx.subject=id;
  for(const [grade,cost] of [["great",1],["steady",2],["poor",4]]){
    ctx.testGrade=grade;
    setup('for(const k of stats)state.stats[k]=100;state.plan=[subject,"rest","rest"];tab="plan";selectedSlot=0');
    assertOk('!Object.hasOwn(actions[subject].gains,trainingTradeoffs[subject])');
    const key=run('trainingTradeoffs[subject]');
    assert.match(run('scheduleNote(subject)'),/▼/);
    assert.equal(run('state.stats[trainingTradeoffs[subject]]'),100);
    run('applyActivity(state,subject,testGrade);state=normalizeSave(state)');
    assert.equal(run('state.stats[trainingTradeoffs[subject]]'),100-cost,id+" "+key);
    setup('state.stats[trainingTradeoffs[subject]]=1;applyActivity(state,subject,testGrade)');
    assert.equal(run('state.stats[trainingTradeoffs[subject]]'),0);
  }
}
for(const subject of run('Object.keys(advancedLessons)')){
  ctx.subject=subject;
  for(const grade of ['great','steady','poor']){
    ctx.testGrade=grade;
    setup('for(const k of stats)state.stats[k]=100;state.flags["exam-"+subject]=true;applyActivity(state,subject,testGrade)');
    assertOk('stats.every(k=>state.stats[k]>=100)');
  }
}
setup('state.ill=true;state.hp=10;state.stress=99;state.plan=["study","rest","rest"];state.sequence={index:0};enterSlot()');
assertOk('state.sequence.activity==="recovery"&&state.stats.체력===50');

for(const [key,first] of [["study",3],["music",4],["practicum",4]]){
  ctx.subject=key;
  for(let count=1;count<=first;count++){
    ctx.attended=count;
    setup('state.phase="scene";state.stats.의지=state.stats.경영=450;state.counts[subject]=attended;state.plan=[subject,"rest","rest"];state.sequence={index:0,activity:subject};finishScene()');
    const queued=run('[state.pending,...state.sequence.slotQueue].filter(id=>id&&(id.startsWith("exam-")||id.startsWith("portfolio-")))');
    assert.equal(queued.length>0,count===first,key+" attendance "+count);
  }
}
setup('tab="plan";state.plan=["study","practicum","rest"];state.visit="none";state.qty=0');
assertOk('courseTuition(state,"study")===20 && courseTuition(state,"practicum")===4 && plannedTuition()===30');
run('execute();state.flags["exam-study"]=true;state=normalizeSave(state)');
assertOk('state.sequence.bookedFees[0]===20&&state.sequence.trainingPaid===20&&courseTuition(state,"study")===28');
setup('state.fund=-8;state.visit="none";state.plan=["study","study","study"];tab="plan"');
assertOk('marketStats().shortfall===cashNeeded()&&!plannerContents().match(/<button[^>]*data-action="execute"[^>]*disabled/)');
run('handleAction("execute",null,true)');
assertOk('state.phase==="scene"&&state.fund===-8-courseTuition(state,"study")');
run('state=normalizeSave(state)');
assertOk('state.sequence.trainingPaid===courseTuition(state,"study")&&state.fund===-8-courseTuition(state,"study")');
setup('state.fund=50;state.stats.의지=149');
assertOk('povertyAfterClosing(state)');
run('state.stats.의지=150');
assertOk('!povertyAfterClosing(state)');
run('state.poverty=true;state.fund=149');
assertOk('povertyAfterClosing(state)&&normalizeSave(state).poverty');
run('state.fund=150');
assertOk('!povertyAfterClosing(state)');
setup('state.poverty=true;state.stress=30;state.ill=false;applyActivity(state,"rest",null)');
assertOk('state.stress===33&&cielCondition(state)==="가난"');
run('state.ill=true;state.stress=30;applyActivity(state,"rest",null)');
assertOk('state.stress===5');
setup('state.poverty=true;state.motivation=70;applyActivity(state,"music","steady")');
assertOk('state.motivation===65');
const caseIds=run('companyCases.map(item=>item.id)');
assert.equal(new Set(caseIds).size,12);
for(const id of caseIds){
  ctx.caseId=id;
  for(let index=0;index<3;index++){
    ctx.answer=index;
    setup('tab="plan";state.pending=caseId;state.phase="event";state.month=20;');
    assertOk('termPages(pendingEvent()).length>=5');
    run('choose(answer)');assertOk('!state.flags[caseId]');
    run('state.termPage=termPages(pendingEvent()).length-1;state=normalizeSave(state);choose(answer);state=normalizeSave(state);choose(answer)');
    assertOk('state.flags[caseId] && state.events.filter(e=>e.id===caseId).length===1');
    assertOk('state.renown===(pendingEvent().companyCase.correct===answer?pendingEvent().companyCase.award:0)');
    assertOk('state.termOutcome.response===pendingEvent().choices[answer].response');
  }
}
setup('state.month=14;state.renown=8;state.productHistory.toys={units:89,reputation:5,orders:1}');
assertOk('!companyCaseEligible(state,companyCases.find(item=>item.gate==="fame"))');
run('state.productHistory.toys.units=90');
assertOk('dueCompanyCase(state).gate==="fame"');
run('state.events.push({id:"merchantAlphabet",month:13,index:0})');assertOk('!dueCompanyCase(state)');
run('state.month++;state.flags.merchantBorrowedCrest=true');assertOk('dueCompanyCase(state)?.gate!=="fame"');
// Month-end incidents cannot be declined or resolved twice, including after reloading.
for(const id of run('monthlySetbacks.map(item=>item.id)')){
  ctx.incident=id;
  setup('state.month=22;state.pending=incident;state.phase="event";state.renown=4');
  assertOk('pendingEvent().choices.length===1');
  run('state.termPage=1;state=normalizeSave(state);choose(0);');
  assertOk('state.flags[incident] && state.choiceImpact.setback && state.choiceImpact.items[0].rows.length');
  const once=run('JSON.stringify([state.fund,state.hp,state.stress,state.motivation,state.renown,state.accounts.setbacks,state.events])');
  run('state=normalizeSave(state);choose(0)');
  assert.equal(run('JSON.stringify([state.fund,state.hp,state.stress,state.motivation,state.renown,state.accounts.setbacks,state.events])'),once);
}
setup('state.month=3;state.report={sold:10}');
assertOk('drawMonthlySetback(state,false,()=>0)==="setbackGlass" && drawMonthlySetback(state,false,()=>.99)===null');
run('state.events.push({id:"setbackGlass",month:2,index:0})');assertOk('drawMonthlySetback(state,true,()=>0)===null');
setup('state.month=2;state.report={sold:0}');
assertOk('!drawMonthlySetback(state,false,()=>0) && drawMonthlySetback(state,true,()=>0)==="setbackFall"');
for(let month=1;month<=35;month++){
  ctx.m=month;const season=(month-1)%12+1;
  assert.equal(run('rollSeasonWeather(m,()=>0)'),season===6?'heat':season===12?'cold':null);
  assert.equal(run('rollSeasonWeather(m,()=>.4)'),null);
}
for(const weather of ['heat','cold']){
  ctx.weatherKind=weather;
  setup('tab="plan";state.month=weatherKind==="heat"?6:12;state.weather=weatherKind;state.phase="weatherBriefing";persist();state=normalizeSave(saves.auto)');
  assertOk('faceDialogue() && $("conversation").innerHTML.includes(weatherFor(state).scene) && $("conversation").innerHTML.includes("weather-close")');
  run('handleAction("weather-close")');assertOk('state.phase==="plan" && saves.auto.phase==="plan"');
  setup('state.month=weatherKind==="heat"?7:12;state.plan=["exercise","study","rest"];state.visit="none";');
  const ordinary=run('overhead()');
  run('state.weather=weatherKind;state=normalizeSave(state)');
  assert.equal(run('overhead()'),ordinary+(weather==='heat'?22:30));
  assertOk('!drawMonthlySetback(state,true,()=>0)');
  for(const activity of ['exercise','riding','study','language','rest','recovery']){
    ctx.subject=activity;
    const [clear,extreme]=run('[null,weatherKind].map(weather=>{const r=structuredClone(state);r.weather=weather;applyActivity(r,subject,"steady");return [r.hp,r.stress,r.stats.체력,r.stats.의지,r.stats.지성]})');
    if(['exercise','riding'].includes(activity)){
      assert.equal(extreme[0]-clear[0],weather==='heat'?-7:-9);
      assert.equal(extreme[1]-clear[1],weather==='heat'?3:2);
      assert.ok(extreme[2]>clear[2] && extreme[3]>clear[3]);
    }else assert.deepEqual(extreme,clear);
  }
  assertOk('plannerContents().includes(weatherFor(state).name) && scheduleNote("exercise").includes("▲")');
  run('state.plan=["study","study","study"];state.visit="town";state.qty=0;execute();var quote=overhead();state.sequence.index=2;settleMonth()');
  assertOk('state.report.bills===quote && actualBudget().includes(weatherFor(state).charge)');
}

for(const id of run('Object.keys(marketShifts)')){
  ctx.shiftId=id;
  setup('state.product=marketShifts[shiftId].products[0]');
  const base=run('forecast()');
  run('state.marketShift=shiftId;persist();state=normalizeSave(saves.auto)');
  assert.equal(run('forecast().unit'),base.unit+run('marketShifts[shiftId].cost||0'));
  assert.equal(run('forecast().demand'),base.demand+run('marketShifts[shiftId].demand||0'));
  assertOk('tradeNews(state).includes(marketShifts[shiftId].title)');
}

function pick(){
  run('if(recruitScenes[state.pending])state.recruitPage={id:state.pending,version:2,at:recruitScenes[state.pending].lines.length-1};choose(0);if(state.choiceImpact?.next)handleAction("impact-close")');
}
setup('delete state.unifiedAbilityCaps;state.uniformAbilityCaps=true;state.mixedAbilityCaps=true;state.stats.의지=220;state.stats.체력=75;state.illness=true;state.phase="ending";state.ending="ill";state.endingPage=2;state=normalizeSave(state)');
assertOk('state.stats.의지===220&&state.stats.체력===75&&state.ill&&state.endingBeat===2');
setup('delete state.unifiedAbilityCaps;state.uniformAbilityCaps=true;state.month=29;state.flags.townhouse=true;for(const p of ["finny","mey","bard","tanaka","soma","agni"])recruit(p);state.phase="event";state.pending="snakeArrival";state.snakeArrivalMonth=29;state=normalizeSave(state)');
assertOk('state.pending==="circus"&&state.phase==="event"');
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
for(const [book,version,oldPage,newPage] of [['gardener',null,11,10],['maid',3,4,6],['circus',4,37,41],['visitPrince',3,33,46]]){
  Object.assign(ctx,{book,version,oldPage});
  setup('delete state.storyPageEdition;state.recruitPage={id:book,version,at:oldPage};state=normalizeSave(state)');
  assert.equal(run('state.recruitPage.at'),newPage);
  assert.equal(run('normalizeSave(state).recruitPage.at'),newPage);
}
setup('delete state.storyPageEdition;state.phase="ending";state.ending="broke";state.endingBeat=43;state=normalizeSave(state)');
assert.equal(run('state.endingBeat'),41);
assert.equal(run('normalizeSave(state).endingBeat'),41);
const princePages=run('recruitScenes.visitPrince.lines');
assert.ok(princePages.length>0);
const welcome=princePages.findIndex(p=>typeof p.withTanaka==="string");
const tanakaOnly=princePages.findIndex(p=>p.withTanaka===true);
assert.ok(tanakaOnly>=0);
ctx.tanakaOnly=tanakaOnly;
assertOk('!recruitReadingOrder("visitPrince",false).includes(tanakaOnly) && recruitReadingOrder("visitPrince",true).includes(tanakaOnly)');
assertOk('recruitMarkup("visitPrince",tanakaOnly,x=>x,true,false,"",true).includes(recruitScenes.visitPrince.lines[tanakaOnly].text)');
if(welcome>=0){
  ctx.welcome=welcome;
  assertOk('!recruitMarkup("visitPrince",welcome).includes("타나카") && recruitMarkup("visitPrince",welcome,x=>x,true,false,"",true).includes("타나카")');
}
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
assertOk('londonPlan(state).power.salon===4 && state.london.book[0].summary.includes("컨디션 +1")');
run('state.month=2;state.phase="plan";placeEmployee("agni","post");state.stats.통찰=499;settleLondon(state)');
assertOk('state.stats.통찰===499 && state.renown===2 && state.london.book.length===2');
run('state.month=3;placeEmployee("agni","off");placeEmployee("soma","off");settleLondon(state)');
assertOk('state.london.book.length===2 && londonPlan(state).power.salon===0');
setup('state.flags.townhouse=true;recruit("soma");recruit("agni");tab="townhouse";placeEmployee("soma","post");placeEmployee("agni","post")');
assertOk('londonPlan(state).power.post===4 && !londonPlan(state).ready');
setup('state.flags.townhouse=true;recruit("soma");recruit("agni");tab="townhouse";placeEmployee("soma","salon");placeEmployee("agni","kitchen");state.plan=["rest","study","reading"];state.visit="none";state.sequence={...forecast(),opening:{fund:state.fund,stats:{...state.stats}}};settleMonth();state=normalizeSave(state)');
assertOk('state.london.book[0].month===1 && state.london.skill.soma===1 && state.log.some(entry=>entry.includes(londonRequests[0].name))');
// Recruitment, the ledger replay and the public reader share the same authored scene cues.
setup('tab="plan";state.phase="event";state.pending="circus"');
const snakePageCount=run('recruitScenes.circus.lines.length');
assert.ok(snakePageCount>0);
for(let index=0;index<snakePageCount;index++){
  ctx.at=index;
  assertOk('Object.hasOwn(musicTracks,recruitTrack("circus",at))');
  const expected=run('recruitTrack("circus",at)');
  assert.equal(run('tab="plan";state.recruitPage={id:"circus",at,version:3};trackForView()'),expected);
  assert.equal(run('tab="staffMemory";recruitMemory={id:"circus",at};trackForView()'),expected);
}
setup('tab="plan";state.phase="event";state.ill=true;state.pending="circus"');assert.equal(run('trackForView()'),'illness');
for(const id of ['audience','linenMarks','finnyRoseLabel','teaPrivilege','postalReply']){
  ctx.eventId=id;
  assertOk('Object.hasOwn(musicTracks,eventTrack(eventId))');
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
assert.equal(run('forecast().trade.holding'),17);
setup('state.month=33;state.unlocked.push("sweets");state.productHistory.toys={units:50,reputation:10,orders:1};state.flags.sharedReceipt=true;handleAction("order:toys",null,true);state.month++;state.stock.toys=14;state.product="sweets";state.qty=0;state.plan=["walk","walk","walk"];state.visit="none";execute();settleMonth();');
assertOk('state.productHistory.toys.orders===2&&state.report.wholesale>0&&state.report.penalty===0');
setup('state.phase="plan";state.productHistory.toys={units:70,reputation:8,orders:2};state.qty=0;handleAction("material:select",null,true);handleAction("lead:sales",null,true);handleAction("develop:toys",null,true)');assertOk('state.prototype.revised&&state.prototype.material==="select"&&state.prototype.lead==="sales"&&state.fund===460');
run('state.phase="result";handleAction("sample:approve",null,true);advance()');assertOk('state.unlocked.length===1&&state.productNotes.toys.material==="select"&&!canDesign("toys")');
setup('state.fund=500;handleAction("expand:works",null,true);handleAction("liquidate:works",null,true);handleAction("liquidate:works",null,true)');assertOk('state.shop.works===1&&state.fund===462&&state.accounts.divest===37');
setup('delete state.fineStock;delete state.productHistory;state.salesBook=[{month:1,product:"toys",sold:8}];state.quality="fine";state.stock.toys=4;state=normalizeSave(state);state=normalizeSave(state)');assertOk('state.productHistory.toys.units===8&&state.fineStock.toys===4');
assertOk('orderDesk().includes("재주문") && inventoryRows().includes("누적 판매")');
console.log('PASS townhouse invitation, trust greetings for seven characters, Sebastian growth and replies, late-save recruitment, final vow return, legacy Snake, independent gloves, 10 visit echoes and reloads, both history branches, graded inventory, cross-product deliveries, fees, cash reconciliation, upgrade and liquidation.');

// A valid June save may still be waiting for Mey-Rin. Reloading preserves the draw and the October guarantee.
setup('state.owlSeed=4055616904;state.month=state.planMonth=18;recruit("finny");persist();state=normalizeSave(saves.auto)');
assertOk('!state.people.mey && !owlAppears(state)');
run('state.month=state.planMonth=22;state.phase="result";persist();state=normalizeSave(saves.auto)');
assert.equal(run('state.pending'),'maid');
run('state.recruitPage={id:"maid",at:1,version:2};persist();state=normalizeSave(saves.auto)');
assertOk('state.pending==="maid" && state.recruitPage.at===1');
pick();
assertOk('state.people.mey && !owlAppears(state) && state.events.filter(e=>e.id==="maid").length===1');

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
  ["dance", "exercise", "language", 14, 17],
  ["casework", "accounts", "social", 15, 21],
  ["rest", "rest", "rest", 15, 19]
];
ctx.facilityPurchases={3:["expand:store"],5:["expand:design"],7:["upgrade:parlor"],10:["expand:works"],
  13:["upgrade:library"],15:["expand:store"],17:["expand:design"],19:["expand:works"]};
function playCampaign(invest){
  ctx.invest=invest;
  return vm.runInContext(`(()=>{
  let january;
  const originalRandom=Math.random;
  let trialSeed=5371;
  Math.random=()=>((trialSeed=(Math.imul(trialSeed,1664525)+1013904223)>>>0)/0x100000000);
  state=initial();state.owlSeed=0;state.phase="plan";tab="plan";
  for(const [a,b,c,price,qty] of campaignSchedule){
    if(state.phase!=="plan")throw Error("Could not enter calendar at "+state.month);
    state.plan=state.unwell?["recovery",b,"rest"]:[a,b,c];state.visit="town";state.price=price;state.qty=qty;
    if(invest)for(const action of facilityPurchases[state.month]||[])handleAction(action,null,true);
    if(cashNeeded()>state.fund)state.qty=Math.max(0,Math.min(qty,Math.floor((state.fund-plannedTuition())/forecast().unit)));
    execute();
    if(state.phase!=="scene")throw Error("Infeasible budget at "+state.month);
    for(let steps=0;steps<180;steps++){
      if(state.choiceImpact?.next)handleAction("impact-close");
      else if(state.phase==="weatherBriefing")handleAction("weather-close");
      else if(state.phase==="scene")finishScene();
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
      }else if(state.phase==="result"){
        if(state.month===25)january={stats:Object.values(state.stats),fund:state.fund};
        advance();
      }
      else break;
    }
  }
  Math.random=originalRandom;
  return {january,finished:state.phase==="ending"||state.phase==="investiture",ending:state.ending,
    stats:Object.values(state.stats),fund:state.fund,decisions:state.events.filter(e=>["winterAxles","carrierPlace","estateRoof"].includes(e.id)).map(e=>e.month),
    birthdays:state.events.filter(e=>birthdayDialogue[e.id]).map(e=>e.month),exams:state.events.filter(e=>e.id.startsWith("portfolio-")).length};
})()`,ctx,{timeout:8000});
}
for(const invest of [false,true]){
  const campaign=playCampaign(invest);
  assert.ok(campaign.finished);
  if(invest){
    assert.equal(campaign.ending,"releaseNoTitle");
    assert.ok(campaign.stats.some(value=>value<500));
  }
  assert.ok(campaign.january.stats.filter(value=>value<500).length>=4);
  assert.ok(campaign.stats.some((value,i)=>value>campaign.january.stats[i]));
  assert.equal(campaign.exams,invest?13:12);
  assert.deepEqual(Array.from(campaign.birthdays),[12,24]);
  assert.deepEqual(Array.from(campaign.decisions),[26,29,32]);
  console.log('PASS 35-month campaign',invest?'expanded estate':'starting facilities',
    'January',JSON.stringify(campaign.january),'final funds',campaign.fund);
}

// Charge excess freight exactly once, including wholesale shipments, and honor a pre-update signed quote.
setup('state.month=26;state.qty=21;state.price=10;state.visit="town";state.plan=["walk","walk","walk"];state.order={id:"toys",qty:5,rate:14,due:26}');
assertOk('forecast().sold===16 && forecast().trade.shipped===5 && forecast().trade.freight===15');
run('state.flags.carrierSpace=true');assert.equal(run('forecast().trade.freight'),3);
const signedClosing=run('marketStats().balance');
run('execute();delete state.sequence.trade.freight;persist();state=normalizeSave(saves.auto);settleMonth()');
assert.equal(run('state.fund'),signedClosing+3);
assertOk('state.report.freight===0');
for(const [id,cost,account] of [['winterAxles',180,'company'],['carrierPlace',48,'company'],['estateRoof',240,'estate']]){
  ctx.decisionId=id;ctx.cost=cost;ctx.account=account;
  setup('state.month=26;state.pending=decisionId;state.phase="event";state.fund=cost-1');
  run('choose(0);if(state.choiceImpact?.next)handleAction("impact-close")');assertOk('state.pending===decisionId && !state.flags[decisionId] && state.fund===cost-1');
  run('choose(1)');assertOk('state.flags[decisionId] && state.fund===cost-1 && state.accounts[account]===0');
  setup('state.pending=decisionId;state.phase="event";state.fund=cost;choose(0);state=normalizeSave(saves.auto)');
  assertOk('state.flags[decisionId] && state.fund===0 && state.accounts[account]===cost');
}
setup('state.month=25;state.fund=3000;for(const key of stats)state.stats[key]=500;state=normalizeSave(state)');
assertOk('state.fund===3000 && stats.every(key=>state.stats[key]===500)');
// Each practical, including one already queued in an old notebook, follows the activity actually completed.
for(const [activity,index] of [["language",0],["dance",1],["letters",2],["accounts",3],["casework",4],["music",5],["exercise",6],["study",null],["rest",null],["walk",null],["recovery",null]]){
  for(const rank of [0,1]){
    Object.assign(ctx,{activity,index,rank});
    setup('state.month=25;state.phase="scene";state.plan=["music","dance","exercise"];state.sequence={activity,index:1};state.counts[activity]=4;for(const k of stats)state.stats[k]=400;if(rank)for(let i=0;i<7;i++)state.flags["portfolio-"+i+"-0"]=true;finishScene()');
    const queued=run('[state.pending,...state.sequence.slotQueue].filter(id=>id?.startsWith("portfolio-"))');
    assert.deepEqual(Array.from(queued),index==null?[]:["portfolio-"+index+"-"+rank],activity);
  }
}
setup('state.phase="slotEvent";state.pending="portfolio-5-0";state.sequence={index:0,activity:"accounts",slotQueue:["portfolio-1-0","portfolio-3-0"]};state=normalizeSave(state)');
assertOk('state.pending==="portfolio-3-0" && !state.flags["portfolio-5-0"] && !state.sequence.slotQueue.length');
run('state.sequence.activity="rest";state=normalizeSave(state)');assertOk('state.phase==="review" && !state.pending');
setup('state.month=25;state.stats.지성=375;events.find(e=>e.id==="portfolio-0-1").choices[0].effect()');
assert.equal(run('state.stats.지성'),393);
setup('state.phase="scene";state.plan=["exercise","exercise","exercise"];state.sequence={activity:"recovery",index:0,onSickLeave:true};state.stats.체력=400;finishScene()');
assertOk('state.phase==="review" && !state.pending');
setup('state.plan=["exercise","rest","walk"];state.visit="none"');
assertOk('statusPanel().includes("컨디션") && statusPanel().includes("지구력") && scheduleNote("exercise").includes("컨디션") && scheduleNote("exercise").includes("지구력")');
run('state.accounts.opening=483;state.fund=410;state.accounts.company=80;state.report={income:240,cost:135,bills:48,expenses:10,operating:10,training:40,debtPayment:0}');
assertOk('actualBudget().includes("−£73") && actualBudget().includes("£313") && actualBudget().includes("£410") && !actualBudget().includes("내역 외 잔액 변동")');
// Only the part of a training gain above 485 slows down before the second applied exam.
setup('state.month=25;state.foundation=24;state.stats.지성=484');
assertOk('lessonGain("지성",440,20,25,{})===lessonGain("지성",440,20,25,{lateDispatch:true})');
assertOk('lessonGain("지성",484,20,25)===2 && lessonGain("지성",485,20,25)===1 && lessonGain("지성",500,20,25)===0');
assertOk('scheduleNote("study").replace(/<[^>]+>/g,"").includes("지성 ▲") && !statusPanel().includes("과목 실기")');
run('state.stats.지성=485;state.plan=["study","rest","walk"];const graduate=structuredClone(state);graduate.flags.lateDispatch=true;applyActivity(graduate,"study","great")');
assertOk('graduate.stats.지성>486 && projectTraining().stats.지성===486 && state.stats.지성===485');
run('changeStat("지성",6);state.flags.lateDispatch=true;persist();state=normalizeSave(saves.auto)');
assertOk('state.stats.지성===491 && lessonGain("지성",491,20,25)>1 && !statusPanel().includes("과목 실기 0/6")');

// Mastery above 497 uses the main subject after the applied examination in the stat's primary subject.
for(const [flag,grade,expected] of [[false,"great",497],[true,"steady",499],[true,"great",499]]){
  ctx.mflag=flag;ctx.mgrade=grade;
  setup('state.month=34;state.foundation=24;state.stats.지성=state.stats.통찰=497;state.flags.lateDispatch=mflag;state.level.library=3;applyActivity(state,"study",mgrade)');
  assert.equal(run('state.stats.지성'),expected);
  assert.equal(run('state.stats.통찰'),497);
}
run('changeStat("지성",20);state=normalizeSave(state);applyActivity(state,"study","great")');
assertOk('state.stats.지성===500 && state.stats.통찰===497');
run('changeStat("지성",4)');
assertOk('state.stats.지성===500');
setup('state.plan=["study","inquiry","casework"];state.month=1;projectTraining()');
assertOk('state.foundation===0&&!state.linkFrom');
run('applyActivity(state,"study","steady");state=normalizeSave(state);applyActivity(state,"inquiry","steady");applyActivity(state,"casework","steady")');
assertOk('state.foundation===0');
setup('state.plan=["accounts","rest","study"]');
assertOk('projectTraining().foundation===0 && state.linkFrom===null');
run('recordStudyLink(state,"accounts");recordStudyLink(state,"rest");state=normalizeSave(state)');
assertOk('recordStudyLink(state,"study")==="지성" && state.foundation===0');
run('state.month=2;recordStudyLink(state,"rest")');assertOk('!recordStudyLink(state,"inquiry")');
setup('state.month=6;state.weather="heat";state.plan=["riding","rest","exercise"]');
assertOk('projectTraining().foundation===12 && state.foundation===0');
run('applyActivity(state,"riding","steady");applyActivity(state,"study","great");applyActivity(state,"recovery",null,"exercise");state=normalizeSave(state)');
assertOk('state.foundation===6');
run('state.month=12;state.weather="cold";for(let i=0;i<3;i++)applyActivity(state,"exercise","steady")');
assertOk('state.foundation===24');
run('state.foundation=6;state.month=18;state.weather="heat";applyActivity(state,"riding","great")');
assertOk('state.foundation===6');
// High stress spends condition on work; sick leave requires low condition as well.
setup('state.hp=76;state.stats.체력=50;state.motivation=70;state.stress=75;updateIllness(state)');
assertOk('!state.ill && healthNotice(state).includes("손이 떨리") && careActivity(state,"accounts")==="accounts"');
for(const [stress,loss] of [[70,0],[71,1],[80,4],[90,7],[100,10]]){
  Object.assign(ctx,{stress,loss});
  assertOk('overworkLoss(stress,actions.accounts)===loss && overworkLoss(stress,actions.rest)===0');
}
setup('state.hp=90;state.stress=79;state.plan=["accounts","rest","rest"];const hpBefore=state.hp;applyActivity(state,"accounts","steady");');
assertOk('state.hp===hpBefore-overworkLoss(94,actions.accounts) && !state.ill');
run('applyActivity(state,"rest")');assertOk('state.hp>hpBefore && state.stress===69');
setup('state.hp=36;state.stress=100;updateIllness(state)');assertOk('!state.ill');
run('state.hp=35;updateIllness(state)');assertOk('state.ill');
run('state.stress=60;state.hp=49;updateIllness(state)');assertOk('state.ill');
run('state.hp=50;state.stress=61;updateIllness(state)');assertOk('state.ill');
run('state.stress=60;updateIllness(state)');assertOk('!state.ill');
setup('state.hp=25;state.stress=20;updateIllness(state)');assertOk('!state.ill');
for(const condition of ['state.motivation=100;state.stress=illnessLimits(state).stamina','state.stats.체력=500;state.motivation=20;state.stress=illnessLimits(state).spirit']){
  setup('state.hp=35;'+condition+';state.plan=["exercise","rest","rest"];state.visit="library";state.qty=0;execute()');
  assertOk('state.phase==="scene" && state.sequence.activity==="recovery" && state.sequence.onSickLeave');
  assertOk('state.sequence.trainingPaid===actions.exercise.cost && state.fund===state.sequence.opening.fund-actions.exercise.cost && !state.counts.exercise');
  run('state=normalizeSave(saves.auto)');
  assertOk('state.fund===state.sequence.opening.fund-actions.exercise.cost');
  run('continueSequence();continueSequence();state.visit="none";continueSequence()');
  assertOk('state.report.training===actions.exercise.cost+2*actions.rest.cost');
}
// A single rest can succeed or fail according to condition. Stronger care restores the full effect of sick leave.
for(const [hp,stress,plan,doctor,stage,ending] of [
  [15,82,["exercise","exercise","exercise"],false,2,"ill"],
  [15,82,["rest","riding","exercise"],false,2,"ill"],
  [60,46,["rest","exercise","exercise"],false,0,null],
  [15,82,["rest","rest","exercise"],false,0,null],
  [15,82,["recovery","exercise","exercise"],false,0,null],
  [15,82,["exercise","exercise","exercise"],true,0,null]
]){
  Object.assign(ctx,{hp,stress,plan});
  setup('state.relapseStage=2;state.unwell=1;state.hp=hp;state.stress=stress;state.plan=structuredClone(plan);state.qty=0;state.visit="none"');
  if(doctor)run('handleAction("doctor",null,true)');
  const predicted=run('projectTraining().hp');
  run('execute();state=normalizeSave(saves.auto);continueSequence();continueSequence();continueSequence()');
  assert.equal(run('state.hp'),predicted);
  assert.equal(run('state.relapseStage'),stage);
  assert.equal(run('state.report.training'),run('plannedTuition()'));
  run('state.phase="result";advance()');
  assert.equal(run('state.ending'),ending);
}
setup('delete state.relapseStage;state.hp=30;state.stress=illnessLimits(state).onset;state.plan=["exercise","exercise","exercise"];state.qty=0;state.visit="none";execute()');
assertOk('state.hp===53 && state.sequence.sickAbsence');
setup('state.plan=["walk","walk","walk"];state.visit="none";state.price=40;state.qty=0;state.stock.toys=25;execute()');
run('state.sequence.trade.holding=13;persist();state=normalizeSave(saves.auto);settleMonth()');
assertOk('state.report.storage===13');
setup('state.hp=24;state.stress=100;state.qty=0;state.plan=["exercise","rest","recovery"];state.visit="none";state.fund=plannedTuition()-1;execute()');
assertOk('state.phase==="scene" && state.sequence.onSickLeave && state.fund===actions.rest.cost+actions.recovery.cost-1');
setup('state.hp=20;state.stress=100;state.visit="library";persist()');
assertOk('state.ill && !hasPendingVisit()');
run('state.hp=57;state.stress=51;persist()');
assertOk('!state.ill && hasPendingVisit()');

setup('for(const [key,[target]] of Object.entries(courtEducation))state.stats[key]=target;Object.assign(state.level,{library:2,kitchen:2});state.salesBook=Array.from({length:8},()=>({revenue:30,cost:15}));state.royal=6;state.renown=32;state.fund=1200;state.debt=0;state.advancedStudy={study:2,etiquette:2,accounts:2}');
assertOk('qualifies() && courtRows().length===10');
assertOk('cielEndingId(458,true)==="releaseTitle" && cielEndingId(459,true)==="vowTitle"');
assertOk('cielEndingId(458,false)==="releaseNoTitle" && cielEndingId(459,false)==="vowNoTitle"');
for(const change of ['stats.지성--','stats.기품--','stats.매력--','stats.통찰--','stats.경영--','stats.의지--','stats.체력--','advancedStudy.study--','level.kitchen--','salesBook.pop()','royal--','renown--','fund--','debt++']){
  const previous=run('structuredClone(state)');
  run('state.'+change);assertOk('!qualifies()');ctx.savedCourt=previous;run('state=savedCourt');
}
for(const ending of ["title","business","defer"]){
  ctx.legacyEnding=ending;
  setup('state=normalizeSave({...state,duration:6,month:6,planMonth:6,phase:"ending",ending:legacyEnding,endingBeat:3})');
  assertOk('state.duration===35 && state.phase==="result" && !state.ending && state.endingBeat===undefined');
  run('advance()');assertOk('state.month===7 && state.phase==="plan"');
}
for(const [quality,qty,roll,rank] of [["fine",1,0,2],["fine",1,.999,0],["standard",1,.999,0],["fine",0,0,0]]){
  setup('tab="plan";state.month=4;state.fairTickets={kensington1886:{product:"toys"}};persist();state=normalizeSave(saves.auto);state.month=5;state.qty='+qty+';state.quality='+JSON.stringify(quality));
  run('(()=>{const rng=Math.random;try{Math.random=()=>'+roll+';settleFestival(state,{fairId:"kensington1886"});}finally{Math.random=rng;}})()');
  assert.equal(run('state.fairBook.kensington1886.rank'),rank);
  const renown=run('state.renown');run('settleFestival(state)');assert.equal(run('state.renown'),renown);
  run('state.month=6');assert.equal(run('fairDemand(state,"toys")'),rank*2);
  run('state.month=7');assertOk('fairDemand(state,"toys")===0');
}
setup('tab="plan";state.month=4;state.fairTickets={kensington1886:{product:"toys"}};selectFestival("kensington1886","cancel");state.month=5;settleFestival(state)');
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
assert.deepEqual(Array.from(run('Object.keys(endingScenes).sort()')),['broke','ill','releaseNoTitle','releaseTitle','vowNoTitle','vowTitle']);
const minimumEndingLines={broke:47,ill:43,releaseNoTitle:41,releaseTitle:48,vowNoTitle:46,vowTitle:48};
for(const [id,minimum] of Object.entries(minimumEndingLines))assert.ok(run('endingScenes.'+id+'.lines.length')>=minimum,id);
console.log('PASS illness, reserved tuition during sick leave, recovery, optional fair outcomes and demand, both library follow-ups after loading, one-way trust, and all six ending scripts.');
