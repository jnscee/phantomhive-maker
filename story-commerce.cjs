const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const mem=new Map(),elements=new Map();
function element(){return {isConnected:true,append(){},dataset:{},style:{setProperty(){}},addEventListener(){},setAttribute(){},focus(){},querySelector(){return this},querySelectorAll(){return []},classList:{contains(){return false},toggle(){}}}}
const doc={baseURI:"https://example.test/",hidden:false,getElementById(id){if(!elements.has(id))elements.set(id,element());return elements.get(id)},querySelectorAll(){return []},addEventListener(){}};
const ctx=vm.createContext({console,structuredClone,document:doc,ResizeObserver:class {observe(){}},MutationObserver:class {observe(){}},localStorage:{getItem:k=>mem.get(k)||null,setItem:(k,v)=>mem.set(k,v)},setTimeout,clearTimeout,clearInterval,window:{getSelection(){return null},addEventListener(){}},URL,URLSearchParams});
for(const name of ['edition-lines','locale','cover','content','prince','recruit','story','scenes','audio','reports','prologue','chapters','staffing','term-events','visitors','festivals','almanac','game']){
 let s=fs.readFileSync(require('node:path').join(process.argv[2]||'site','js',name+'.js'),'utf8');if(name==='game')s=s.slice(0,s.indexOf('\nrender();\n'));
 vm.runInContext(s,ctx,{filename:name+'.js'});
}
const run=s=>vm.runInContext(s,ctx,{timeout:1800});run('let tourSession=false;render=function(){};');
run('render=()=>{};respond=()=>{};announce=()=>{};focusAction=()=>{};popMoney=()=>{};document.querySelector=()=>null;');
const assertOk=source=>assert.ok(run(source),source);
run('$("status-drawer").hidden=true;');
const setup=(code="")=>run('state=initial();state.owlSeed=1;state.phase="plan";tab="company";'+code);
// A translated clue must remain inside its complete evidence sentence after markup.
for (const language of ["en", "ja"]) {
  ctx.evidenceLanguage = language;
  const missing = run(`gameLanguage = evidenceLanguage;
    companyCases.flatMap(item => item.evidence.flatMap((entry, i) => {
      const phrases = item.evidenceEmphasis[i];
      const html = companyEvidenceEntry(entry, phrases);
      return phrases.filter(phrase => {
        const translated = translatedLine(phrase);
        return translated === phrase || !html.includes("<mark>" + escapeHTML(translated) + "</mark>");
      }).map(phrase => item.id + ": " + phrase);
    }))`);
  assert.equal(missing.length, 0, language + " missing translated clues: " + missing.join(", "));
}
// Quantities and handbook terms also appear in old, Korean-language save data.
for (const [language, unitLabel, accountsLabel] of [["en","Per unit","Monthly accounts"],["ja","1個あたり","月次決算"]]) {
  ctx.edition = language;
  run("gameLanguage = edition");
  assert.equal(run('translatedLine("개당")'), unitLabel);
  assert.equal(run('translatedLine("결산")'), accountsLabel);
  const lines = run('recruitScenes.cook.lines.map(row=>row.text).filter(text=>text.includes("팬텀하이브 가의 이름")||text.includes("요리 솜씨를 보아서"))');
  assert.equal(lines.length, 2);
  for (const korean of lines) {
    ctx.korean = korean;
    assert.equal(run('korean.split("\\n").map(s=>translatedLine(s.trim())).join("\\n")'),run('translatedLine(korean)'));
  }
  assert.equal(run('translatedLine("1명")'), language==="en"?"1 person":"1人");
  assert.equal(run('translatedLine("12명")'), language==="en"?"12 people":"12人");
  assert.ok(run('editionFormat("개당 {price} × {quantity}개", {price:"£7",quantity:12})').includes("12"));
}
run('gameLanguage = "ko"');
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
    setup('tab="plan";{const fair=contests.find(f=>f.id===teaId);state.month=state.planMonth=fair.month;state.fairTickets={[teaId]:{index:teaIndex}};state.sequence={contest:teaId};prepareContest(state)}');
    run('handleAction("fair-next:0");handleAction("fair-next:1");state=normalizeSave(structuredClone(state))');
    const narration=run('contestScene(pendingEvent())');
    assert.ok(narration.includes(index?'찻주전자':'원고')&&narration.includes('fair-next:handoff'));
    run('handleAction("fair-next:1");handleAction("fair-next:2")');
    assertOk('state.sequence.duel.announcing&&!state.fairBook?.[teaId]');
    run('handleAction("fair-next:handoff");handleAction("fair-next:handoff")');
    assertOk('!state.sequence.duel.announcing&&state.sequence.duel.page===2&&!state.fairBook?.[teaId]');
    assert.match(run('contestScene(pendingEvent())'),/심사 중/);
  }
}
for(const [rank,score,expected] of [[0,5,"입상권 밖"],[1,40,"은상"],[2,44,"공동 금상"],[2,49,"금상"]]){
  ctx.legacyEntry={rank,score,duel:{rivalScore:44},scoreNote:"매력 41 + 심사 대응 8"};
  const slip=run('contestResultSlip(contests[0],legacyEntry,"심사평")');
  assert.ok(slip.includes("<h3>"+expected+"</h3>")&&!slip.includes(ctx.legacyEntry.scoreNote));
  assert.doesNotMatch(slip,/undefined|NaN|입상 보상/);
}
assert.deepEqual(Array.from(run('contests.map(f=>f.month)')),[4,9,13,16,21,25,28,33]);
assert.deepEqual(Array.from(run('contests.slice(0,3).map(f=>f.title)')),["부활절 가든파티","로열 워런트(수확제)","신년 다과회"]);
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
for(const [statScore,label] of [[274,"패배"],[275,"공동 우승"],[276,"승리"]]){
  const won=label!=="패배";
  ctx.statScore=statScore;
  // These multipliers give a fractional score just below the displayed integer.
  setup('tab="plan";state.month=state.planMonth=13;state.stats.기품=statScore;state.motivation=69;state.fairTickets={"newYear-1887":{index:0}};state.sequence={contest:"newYear-1887"};prepareContest(state)');
  assert.equal(run('state.sequence.duel.judgment.score'),statScore);
  assert.equal(run('state.sequence.duel.rivalScore'),275);
  run('state.sequence.duel.page=2;handleAction("store:1",null,true)');
  const before=run('JSON.stringify([state.fund,state.renown,state.stats])');
  for(const roll of [0,.999]){
    ctx.roll=roll;
    run('handleAction("load:1",null,true)');
    assert.equal(run('JSON.stringify([state.fund,state.renown,state.stats])'),before);
    run('(()=>{const rng=Math.random;try{Math.random=()=>roll;settleFestival(state,state.sequence.duel);}finally{Math.random=rng;}})()');
    const entry=run('state.fairBook["newYear-1887"]');
    assert.equal(entry.rank,won?2:0);
    assert.equal(entry.purse,won?46:0);
    assert.equal(entry.prize,won?"은제 찻숟가락":"");
    assert.equal(entry.growth?.length||0,won?2:0);
    if(!won)assert.equal(run('JSON.stringify([state.fund,state.renown,state.stats])'),before);
    const scene=run('contestScene(pendingEvent())');
    assert.ok(scene.includes("<h3>"+label+"</h3>")&&scene.includes(statScore+"점"));
    assert.equal(scene.includes("승리 보상"),won);
    assert.doesNotMatch(scene,/승률|award-parts|컨디션 ×|의욕 ×|스트레스 ×/);
    assert.ok(run('thisMonthFairReport()').includes(label));
    const paid=run('JSON.stringify([state.fairBook,state.fund,state.renown,state.stats])');
    run('handleAction("store:2",null,true);handleAction("load:2",null,true);settleFestival(state,state.sequence.duel)');
    assert.equal(run('JSON.stringify([state.fairBook,state.fund,state.renown,state.stats])'),paid);
  }
}
assert.deepEqual(Array.from(run('contests.map(contestRivalAbility)')),[112,110,275,365,132,490,515,148]);
for(const [index,stat] of [[0,"기품"],[1,"매력"]]){
  setup('state.stats.기품=124;state.stats.매력=71');
  ctx.optionIndex=index;ctx.statKey=stat;
  const score=()=>run('judgeContest(state,contests[2],{index:optionIndex}).score');
  const baseline=score();
  run('state.stats[statKey]+=12');assert.ok(score()>baseline);
  run('state.stats[statKey]-=12;state.stress+=20');assert.ok(score()<baseline);
}
// A top-quality entry beats the final opponent. The warrant also requires 18 units sold.
for(const [units,expected] of [[240,"승리"],[18,"승리"],[17,"인증 요건 미달"]]){
  ctx.units=units;
  setup('state.month=33;state.quality="fine";state.qty=1;state.shop.design=state.shop.works=3;state.productNotes={toys:{material:"select",reworked:true}};state.productHistory={toys:{reputation:20,units,orders:12}};state.fairTickets={"royalWarrant-1888":{product:"toys"}};state.sequence={contest:"royalWarrant-1888"};prepareContest(state);settleFestival(state,state.sequence.duel)');
  const entry=run('state.fairBook["royalWarrant-1888"]');
  assert.equal(entry.score,152);
  assert.equal(entry.duel.rivalScore,148);
  assert.equal(run('contestRank(state.fairBook["royalWarrant-1888"])'),expected);
  assert.equal(run('contestResultOutcome(contestArchive.find(f=>f.id==="royalWarrant-1888"),state.fairBook["royalWarrant-1888"])'),units>=18?'win_close':'qualification');
  assert.equal(run('state.royalWarrants?.toys===33'),units>=18);
  if(units<18)assert.match(run('contestScene(pendingEvent())'),/누적 판매·납품 18개 미달/);
}
// Management can tip a close warrant without changing the scores at other fairs.
setup('state.quality="fine";state.qty=1;state.shop.design=state.shop.works=3;state.productHistory={toys:{reputation:15,units:24,orders:0}}');
const sampleScore=(id,management)=>run('state.stats.경영='+management+';judgeContest(state,contestArchive.find(f=>f.id==="'+id+'"),{product:"toys"}).score');
const warrantBase=sampleScore('royalWarrant-1886',0);
assert.equal(warrantBase,107);
assert.equal(sampleScore('royalWarrant-1886',150),110);
assert.equal(sampleScore('royalWarrant-1886',500),warrantBase+10);
assert.equal(sampleScore('jubilee1887',0),sampleScore('jubilee1887',500));
run('state.productHistory.toys.units=17');
assert.equal(run('judgeContest(state,contests.find(f=>f.warrant),{product:"toys"}).scoreCondition'),'누적 판매·납품 18개 미달');
// An unfinished legacy match keeps both contestants' scores. A previously awarded upset stays final.
setup('state.month=13;state.stats.기품=210;state.fairTickets={"newYear-1887":{index:0}};state.sequence={contest:"newYear-1887"};prepareContest(state);state.sequence.duel.rivalScore=195;state.sequence.duel.judgment.chance=0;state.stats.기품=50;persist();state=normalizeSave(saves.auto)');
assertOk('contestScene(pendingEvent()).includes("195점")');
run('settleFestival(state,state.sequence.duel)');
assertOk('state.fairBook["newYear-1887"].duel.rivalScore===195&&state.fairBook["newYear-1887"].rank===2');
setup('state.month=13;state.fairTickets={"newYear-1887":{index:0}};state.fairBook={"newYear-1887":{match:true,index:0,score:250,chance:.65,rank:0,duel:{rivalScore:195},revealed:true}};persist();state=normalizeSave(saves.auto)');
assertOk('settleFestival(state)===null&&fairReport(contests[2]).includes("패배")');
// Result readings use the actual game modules loaded above, not the standalone preview engine.
assert.equal(run('Object.values(contestResultDialogue.edward).reduce((n,s)=>n+Object.keys(s).length,0)+Object.values(contestResultDialogue.elizabeth).reduce((n,s)=>n+Object.keys(s).length,0)+Object.keys(contestResultDialogue.warrant.standard).length+Object.keys(contestResultDialogue.special).length'),34);
const resultSubjects=[
  ['newYear-1887',0,'edward','greeting'],['newYear-1887',1,'edward','tea'],
  ['easter-1886',0,'elizabeth','music'],['easter-1886',1,'elizabeth','eggs'],
  ['royalWarrant-1886',0,'warrant','standard']
];
const resultOutcomes=[
  [0,80,'loss_under'],[0,95,'loss_close'],[2,102,'win_close'],
  [2,110,'win_prepared'],[0,120,'loss_even'],[2,80,'win_even']
];
for(const [id,index,group,subject] of resultSubjects){
  Object.assign(ctx,{resultFairId:id,resultIndex:index,resultGroup:group,resultSubject:subject});
  for(const [rank,score,outcome] of resultOutcomes){
    Object.assign(ctx,{resultRank:rank,resultScore:score,resultOutcome:outcome});
    assertOk(`(()=>{
      const fair=contestArchive.find(f=>f.id===resultFairId);
      const entry={match:true,index:resultIndex,product:"toys",rank:resultRank,score:resultScore,duel:{rivalScore:100}};
      const scene=contestResultScene(fair,entry),expected=contestResultDialogue[resultGroup][resultSubject][resultOutcome];
      if(contestResultOutcome(fair,entry)!==resultOutcome||scene!==expected||contestResultLine(fair,entry)!==scene.narration)return false;
      const html=duelScene(fair,entry,entry.duel,entry);
      if(html.includes(escapeHTML(scene.narration))||html.includes(escapeHTML(scene.lines[0][1]))||!html.includes('결과창 닫기'))return false;
      openContestClosings.add(entry);
      const first=duelScene(fair,entry,entry.duel,entry);
      if(!first.includes('<p>'+escapeHTML(scene.narration)+' ')||first.includes('award-sheet')||first.includes('<small></small>'))return false;
      contestResultPages.set(entry,1);
      const next=duelScene(fair,entry,entry.duel,entry);
      return next.includes(escapeHTML(scene.lines[0][1]))&&!next.includes(escapeHTML(scene.narration));
    })()`);
  }
}
for(const [rank,score,outcome] of [[0,94,'loss_under'],[0,95,'loss_close'],[0,99,'loss_close'],[2,101,'win_close'],[2,109,'win_close'],[2,110,'win_prepared'],[0,100,'loss_even'],[2,100,'win_even']]){
  Object.assign(ctx,{resultRank:rank,resultScore:score});
  assert.equal(run('contestResultOutcome(contests[2],{match:true,rank:resultRank,score:resultScore,duel:{rivalScore:100}})'),outcome);
}
assert.equal(run('contestResultOutcome(contests[2],{match:true,rank:2,score:110,scoreParts:[["기품",110]],factors:[["컨디션",.999]],duel:{rivalScore:100}})'),'win_prepared');
// Completed old upsets and incomplete scorecards retain their saved outcome and get neutral prose.
for(const [entry,outcome] of [
  [{match:true,rank:0,score:250,chance:.65,duel:{rivalScore:195}},'loss_even'],
  [{match:true,rank:2,score:195,chance:.4,duel:{rivalScore:250}},'win_even'],
  [{match:true,rank:0,score:100},'loss_even'],
  [{match:true,rank:2,duel:{rivalScore:100}},'win_even'],
  [{match:true,rank:0,score:100,duel:{rivalScore:0}},'loss_even'],
  [{match:true,rank:0,score:NaN,duel:{rivalScore:100}},'loss_even'],
  [{match:true,rank:1,score:100,duel:{rivalScore:100}},'unknown']
]){
  ctx.resultRecord={index:0,...entry};
  const untouched=structuredClone(ctx.resultRecord);
  assert.equal(run('contestResultOutcome(contests[2],resultRecord)'),outcome);
  if(outcome==='unknown')assert.equal(run('contestResultScene(contests[2],resultRecord)'),null);
  else assert.equal(run('contestResultScene(contests[2],resultRecord)===contestResultDialogue.edward.greeting[contestResultOutcome(contests[2],resultRecord)]'),true);
  assert.deepEqual(ctx.resultRecord,untouched);
}
for(const rank of [0,1,2]){
  ctx.resultRecord={rank,index:0,score:100,duel:{rivalScore:100}};
  assert.equal(run('contestResultScene(contests[2],resultRecord)'),null);
  assert.equal(run('contestResultDialogueMarkup(contests[2],resultRecord)'),'');
}
for(const id of ['spring-1886','harvest-1886','kensington1886','jubilee1887','earlsCourt1888']){
  ctx.resultFairId=id;
  assertOk(`(()=>{
    const fair=contestArchive.find(f=>f.id===resultFairId);
    const entry={match:true,rank:2,index:0,product:"toys",score:100,duel:{rivalScore:100},tied:true};
    return contestResultScene(fair,entry)===null&&contestResultDialogueMarkup(fair,entry)===""&&
      !contestResultLine(fair,entry).includes("납품 증서");
  })()`);
}
assert.equal(run('contestResultScene(contests[2],{match:true,rank:2,index:99,score:400,duel:{rivalScore:275}})'),null);
for(const [id,entry,key] of [
  ['newYear-1887',{match:true,index:0,rank:2,score:275,duel:{rivalScore:275},tied:true},'tied_personal'],
  ['royalWarrant-1886',{match:true,product:'toys',rank:2,score:112,duel:{rivalScore:112},tied:true},'tied_company'],
  ['royalWarrant-1886',{match:true,product:'toys',rank:0,score:152,duel:{rivalScore:112},scoreCondition:'누적 판매·납품 18개 미달'},'qualification'],
  ['newYear-1887',{match:true,index:0,rank:0,reason:'병중으로 불참'},'absent']
]){
  Object.assign(ctx,{resultFairId:id,resultRecord:entry,resultSpecial:key});
  assertOk('contestResultScene(contestArchive.find(f=>f.id===resultFairId),resultRecord)===contestResultDialogue.special[resultSpecial]');
}
assert.equal(run('contestResultOutcome(contests[2],{reason:"불참",scoreCondition:"요건 미달",tied:true})'),'absent');
assert.equal(run('contestResultOutcome(contests[1],{match:true,rank:0,scoreCondition:"요건 미달",tied:true})'),'qualification');
// Non-duel result pages and the separate absence path must also contain the new readings.
setup('tab="plan";state.month=state.planMonth=13;state.phase="event";state.pending="contest-newYear-1887";state.hp=10;state.ill=true;state.fairTickets={"newYear-1887":{index:0}};settleFestival(state)');
let resultHtml=run('contestScene(pendingEvent())');
assert.match(resultHtml,/병중으로 불참|참가하지 못합니다/);
assert.match(resultHtml,/award-dialogue/);assert.doesNotMatch(resultHtml,/undefined점|NaN|award-total|award-purse/);
const absenceState=run('structuredClone(state)');
run('handleAction("fair-result-next:0");handleAction("fair-result-restart:1")');
assert.deepEqual(run('structuredClone(state)'),absenceState);
setup('tab="plan";state.month=state.planMonth=13;state.phase="event";state.pending="contest-newYear-1887";state.stats.기품=400;state.fairTickets={"newYear-1887":{index:0}};settleFestival(state);state.fairBook["newYear-1887"].revealed=true');
resultHtml=run('contestScene(pendingEvent())');
assert.doesNotMatch(resultHtml,/award-dialogue/);assert.match(resultHtml,/award-total/);
// Absence keeps its in-card reader and never repeats settlement.
{
  setup('tab="plan";state.month=state.planMonth=13;state.phase="event";state.pending="contest-newYear-1887";state.hp=10;state.ill=true;state.fairTickets={"newYear-1887":{index:0}};settleFestival(state)');
  const paid=run('structuredClone(state)'),saved=Array.from(mem);
  assertOk(`(()=>{
    const event=pendingEvent(),entry=state.fairBook[event.contest.id],scene=contestResultScene(event.contest,entry);
    const settle=settleFestival,monthly=settleMonth,save=persist,rng=Math.random;
    const refuse=()=>{throw new Error("A result reading must not settle, save, or draw randomness");};
    try{
      settleFestival=settleMonth=persist=Math.random=refuse;
      if(contestResultPage(entry,scene)!==0)return false;
      handleAction("fair-result-prev:0");
      if(contestResultPage(entry,scene)!==0)return false;
      handleAction("fair-result-next:0");
      if(contestResultPage(entry,scene)!==1)return false;
      handleAction("fair-result-next:0");
      if(contestResultPage(entry,scene)!==1)return false;
      while(contestResultPage(entry,scene)<scene.lines.length-1)handleAction("fair-result-next:"+contestResultPage(entry,scene));
      const last=scene.lines.length-1;
      handleAction("fair-result-next:"+last);
      if(contestResultPage(entry,scene)!==last)return false;
      if(!contestResultDialogueMarkup(event.contest,entry).includes(escapeHTML(scene.lines[last][1])))return false;
      handleAction("fair-result-prev:"+last);
      if(contestResultPage(entry,scene)!==last-1)return false;
      handleAction("fair-result-restart:"+(last-1));
      if(contestResultPage(entry,scene)!==0)return false;
      handleAction("fair-result-next:invalid");
      return contestResultPage(entry,scene)===0;
    }finally{settleFestival=settle;settleMonth=monthly;persist=save;Math.random=rng;}
  })()`);
  assert.deepEqual(run('structuredClone(state)'),paid);
  assert.deepEqual(Array.from(mem),saved);
}
// Each scored result closes into narration, advances once per click, and ends on the last line.
for(const id of ['newYear-1887','royalWarrant-1887','jubilee1887']){
  for(const margin of [-8,0,8]){
    Object.assign(ctx,{resultFairId:id,resultMargin:margin});
    setup(`tab="plan";{
      const fair=contestArchive.find(f=>f.id===resultFairId);
      state.month=state.planMonth=fair.month;
      state.stats.기품=400;state.qty=1;state.quality="fine";state.shop.design=state.shop.works=3;
      state.productHistory={toys:{reputation:20,units:240,orders:12}};
      state.fairTickets={[fair.id]:fair.company?{product:"toys"}:{index:0}};
      state.sequence={contest:fair.id};prepareContest(state);
      const duel=state.sequence.duel;duel.judgment.score=duel.rivalScore+resultMargin;
      settleFestival(state,duel);
    }`);
    assert.equal(run('contestRank(state.fairBook[resultFairId])'),margin===0?'공동 우승':margin>0?'승리':'패배');
    const paid=run('structuredClone(state)'),saved=Array.from(mem);
    assert.equal(run('settleFestival(state,state.sequence.duel)'),null);
    const lines=run('contestClosingLines(pendingEvent().contest,state.fairBook[resultFairId])');
    assert.equal(lines[0][0],'');assert.ok(lines.length>=2);
    assert.match(run('contestScene(pendingEvent())'),/award-sheet/);
    run('handleAction("fair-close")');
    for(const [page,[,line]] of lines.entries()){
      run('handleAction("fair-close");handleAction("fair-closing-next:'+(page-1)+'")');
      const view=run('contestScene(pendingEvent())');
      assert.match(view,/class="dialogue"/);assert.doesNotMatch(view,/award-sheet/);
      assert.ok(view.includes(run('escapeHTML('+JSON.stringify(line)+')')));
      assert.deepEqual(run('structuredClone(state)'),paid);
      assert.deepEqual(Array.from(mem),saved);
      run('handleAction("fair-closing-next:'+page+'")');
    }
    assert.notEqual(run('state.pending'),"contest-"+id);
  }
}
// Authored dialogue stays text even when it contains markup-like characters.
assertOk(`(()=>{
  const lines=contestResultDialogue.edward.greeting.win_prepared.lines,original=lines[0];
  try{
    lines[0]=["<시엘>","<img src=x onerror=alert(1)> & 인사"];
    const html=contestResultDialogueMarkup(contests[2],{match:true,index:0,rank:2,score:400,duel:{rivalScore:275}});
    return html.includes("&lt;시엘&gt;")&&html.includes("&lt;img")&&html.includes("&amp; 인사")&&!html.includes("<img");
  }finally{lines[0]=original;}
})()`);
console.log('PASS 34 result readings, score boundaries, historical fallbacks, absence, replay without settlement, and escaped dialogue');
// Poor condition raises the chance of a real failure, even with practice and an upgraded room.
assertOk(`(()=>{
  const run=initial();run.month=20;run.counts.study=3;run.level.library=3;
  const failures=(hp,stress,motivation)=>{
    Object.assign(run,{hp,stress,motivation});
    let count=0;
    for(let i=1;i<=512;i++){
      run.owlSeed=Math.imul(i,2654435761)>>>0;
      if(lessonResult(run,"study",0)==="poor")count++;
    }
    return count;
  };
  return failures(76,20,70)===0&&failures(45,60,30)>300&&failures(40,65,30)>450
    &&failures(45,60,30)>failures(60,60,30)&&failures(45,60,30)>failures(45,45,30)
    &&failures(45,60,30)>failures(45,60,55)&&lessonGrades.poor.label==="실패"
    &&lessonResult(run,"rest",0)===null;
})()`);
// Preview, execution and save/load use the same course tradeoff for each of the three grades.
for(const id of run('[...categories[0][1],...categories[2][1]]')){
  ctx.subject=id;
  for(const [grade,cost] of [["great",1],["steady",2],["poor",4]]){
    ctx.testGrade=grade;
    setup('for(const k of stats)state.stats[k]=100;state.plan=[subject,"rest","rest"];tab="plan";selectedSlot=0');
    assertOk('!Object.hasOwn(actions[subject].gains,trainingTradeoffs[subject])');
    const key=run('trainingTradeoffs[subject]');
    assert.match(run('scheduleNote(subject)'),/↓/);
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
assertOk('state.sequence.bookedFees[0]===20&&state.sequence.trainingPaid===20&&courseTuition(state,"study")===39');
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
// Exercise the real selector across a population of campaigns, without fixing any seed's answer.
run(`function businessTestRun(seed=1,month=2){
  const r=initial();
  Object.assign(r,{owlSeed:seed,month,planMonth:month,phase:"plan",renown:8});
  r.productHistory=Object.fromEntries(Object.keys(products).map(id=>[id,{units:100,reputation:10,orders:1}]));
  r.stock=Object.fromEntries(Object.keys(products).map(id=>[id,3]));
  return r;
}`);
assertOk('companyCases.every(item=>!companyCaseEligible(businessTestRun(1,1),item)&&companyCaseEligible(businessTestRun(1,2),item))');
assert.equal(run('dueCompanyCase(businessTestRun(1,1))'),null);
// Product, stock, order, sales and variety thresholds remain requirements at the common start month.
const businessGateChecks=[
  ...Array.from(run('[...new Set(companyCases.filter(item=>Object.hasOwn(products,item.gate)).map(item=>item.gate))]'))
    .map(id=>[id,`state.productHistory.${id}={units:3,reputation:0,orders:0}`,`state.productHistory.${id}.units=4`]),
  ['stock','for(const id of Object.keys(state.stock))state.stock[id]=2','state.stock.toys=3'],
  ['orders','state.productHistory.toys={units:0,reputation:0,orders:0}','state.productHistory.toys.orders=1'],
  ['sales','state.productHistory.toys={units:11,reputation:0,orders:0}','state.productHistory.toys.units=12'],
  ['variety','state.productHistory={toys:{units:8},sweets:{units:3}}','state.productHistory.sweets.units=4']
];
for(const [gate,before,after] of businessGateChecks){
  ctx.businessGate=gate;
  setup('state.month=state.planMonth=2;'+before);
  assertOk('companyCases.filter(item=>item.gate===businessGate).every(item=>!companyCaseEligible(state,item))');
  run(after);
  assertOk('companyCases.filter(item=>item.gate===businessGate).every(item=>companyCaseEligible(state,item))');
}
// Fame needs all three requirements, and any of the existing toy lines may satisfy its sales test.
for(const product of ['toys','plush','game']){
  ctx.businessProduct=product;
  setup('state.month=state.planMonth=2;state.renown=8;state.productHistory={[businessProduct]:{units:30,reputation:5,orders:0},sweets:{units:60,reputation:0,orders:0}}');
  assertOk('companyCaseEligible(state,companyCases.find(item=>item.gate==="fame"))');
  const eligible=run('structuredClone(state)');
  for(const change of ['state.renown=7','state.productHistory[businessProduct].reputation=4','state.productHistory[businessProduct].units=29;state.productHistory.sweets.units=61','state.productHistory.sweets.units=59']){
    ctx.businessCheckpoint=eligible;run('state=structuredClone(businessCheckpoint);'+change);
    assertOk('!companyCaseEligible(state,companyCases.find(item=>item.gate==="fame"))');
  }
}
// With only one product sold, unrelated cases cannot leak into the draw.
for(const product of run('Object.keys(products)')){
  ctx.businessProduct=product;
  assertOk(`(()=>{
    const r=initial();r.month=2;r.productHistory={[businessProduct]:{units:4,reputation:0,orders:0}};
    const seen=new Set();
    for(let seed=1;seed<=256;seed++){
      r.owlSeed=seed;const item=dueCompanyCase(r);
      if(item){if(item.gate!==businessProduct)return false;seen.add(item.id);}
    }
    return companyCases.filter(item=>item.gate===businessProduct).every(item=>seen.has(item.id));
  })()`);
}
for(const month of [2,8,20,35]){
  ctx.businessMonth=month;
  const sample=run(`(()=>{
    const r=businessTestRun(1,businessMonth),counts=Object.fromEntries(companyCases.map(item=>[item.id,0]));
    let absent=0;
    for(let seed=1;seed<=4096;seed++){
      r.owlSeed=seed;const item=dueCompanyCase(r);
      if(item)counts[item.id]++;else absent++;
    }
    return {counts,absent};
  })()`);
  assert.ok(sample.absent>4096*.45&&sample.absent<4096*.55,`month ${month}: approximately half of eligible months have no case`);
  const expected=(4096-sample.absent)/caseIds.length;
  for(const [id,count] of Object.entries(sample.counts))
    assert.ok(count>expected*.6&&count<expected*1.4,`month ${month}: ${id} remains reachable without a preferred case (${count})`);
}
const businessCampaigns=run(`(()=>{
  const result=[];
  for(let seed=1;seed<=128;seed++){
    const r=businessTestRun(seed),selected=[];
    for(r.month=2;r.month<=35;r.month++){
      const item=dueCompanyCase(r);if(!item)continue;
      selected.push({id:item.id,month:r.month});
      r.flags[item.id]=true;r.events.push({id:item.id,month:r.month,index:item.correct});
    }
    result.push(selected);
  }
  return result;
})()`);
for(const campaign of businessCampaigns){
  assert.equal(new Set(campaign.map(item=>item.id)).size,campaign.length,'a completed case cannot recur');
  assert.ok(campaign.every((item,index)=>!index||item.month-campaign[index-1].month>=2),'leave at least two months between cases');
}
assert.ok(new Set(businessCampaigns.map(items=>items.map(item=>item.id).join(','))).size>1,'case order varies across campaigns');
assert.ok(new Set(businessCampaigns.map(items=>items.map(item=>item.month).join(','))).size>1,'occurrence months vary across campaigns');
assert.ok(businessCampaigns.some(items=>items.some((item,index)=>index&&item.month-items[index-1].month>2)),'eligible months may be skipped after the cooldown');
// Both current flags and older history-only records exclude completed cases, even without a month.
for(const id of caseIds){
  ctx.caseId=id;
  assertOk(`(()=>{
    const r=businessTestRun(1,20);
    r.flags=Object.fromEntries(companyCases.filter(item=>item.id!==caseId).map(item=>[item.id,true]));
    const appears=()=>{
      for(let seed=1;seed<=128;seed++){r.owlSeed=seed;if(dueCompanyCase(r)?.id===caseId)return true;}
      return false;
    };
    if(!appears())return false;
    r.flags[caseId]=true;if(appears())return false;
    delete r.flags[caseId];r.events=[{id:caseId,month:2,index:0}];if(appears())return false;
    r.events=[{id:caseId,index:null}];return !appears();
  })()`);
}
assertOk(`(()=>{
  const r=businessTestRun(),rng=Math.random;
  try{
    Math.random=()=>{throw new Error("Business selection must use the saved campaign seed");};
    for(const duration of [12,24])for(let seed=1;seed<=64;seed++){
      r.duration=duration;r.owlSeed=seed;if(dueCompanyCase(r)!==null)return false;
    }
    r.duration=35;
    for(let seed=1;seed<=64;seed++){
      r.owlSeed=seed;const before=JSON.stringify(r),first=dueCompanyCase(r)?.id;
      if(dueCompanyCase(r)?.id!==first||JSON.stringify(r)!==before)return false;
    }
    return true;
  }finally{Math.random=rng;}
})()`);
// Loading an unreserved month keeps its draw, including legacy saves with no campaign seed.
assertOk(`(()=>{
  for(let seed=1;seed<=64;seed++){
    const r=businessTestRun(seed,8),saved=JSON.parse(JSON.stringify(r));
    if(dueCompanyCase(r)?.id!==dueCompanyCase(normalizeSave(saved))?.id)return false;
  }
  const old=businessTestRun(1,8);delete old.owlSeed;
  const first=normalizeSave(old),second=normalizeSave(old);
  return first.owlSeed===second.owlSeed&&dueCompanyCase(first)?.id===dueCompanyCase(second)?.id;
})()`);
// An active or already queued case blocks new reservations; unrelated scenes do not.
assertOk(`(()=>{
  const r=businessTestRun(1,12),id=companyCases[0].id;
  for(const [pending,queue] of [[id,["birthday"]],["birthday",["supplierReply",id,"setbackGlass"]]]){
    r.pending=pending;r.eventQueue=queue;const before=JSON.stringify(r);
    for(let seed=1;seed<=64;seed++){r.owlSeed=seed;if(dueCompanyCase(r)!==null)return false;}
    r.owlSeed=1;if(JSON.stringify(r)!==before)return false;
  }
  r.pending="birthday";r.eventQueue=["supplierReply"];
  for(let seed=1;seed<=128;seed++){r.owlSeed=seed;if(dueCompanyCase(r))return true;}
  return false;
})()`);
// Manual slots preserve an introduction page and its queue without invoking the selector again.
for(const queued of [false,true]){
  ctx.businessQueued=queued;
  setup('state=businessTestRun(1,12);tab="plan";state.phase="event";state.pending=businessQueued?"birthday":companyCases[0].id;state.eventQueue=businessQueued?[companyCases[1].id,"supplierReply","setbackGlass"]:["supplierReply","setbackGlass"];state.termPage=2');
  const checkpoint=run('JSON.stringify([state.owlSeed,state.pending,state.eventQueue,state.termPage,state.termOutcome])');
  assertOk(`(()=>{
    const selector=dueCompanyCase;
    try{
      dueCompanyCase=()=>{throw new Error("Loading or reading a reserved event must not redraw it");};
      handleAction("store:3",null,true);state.termPage=0;state.eventQueue=[];
      handleAction("load:3",null,true);state=normalizeSave(state);
      return Boolean(termDialogue(pendingEvent(),""));
    }finally{dueCompanyCase=selector;}
  })()`);
  assert.equal(run('JSON.stringify([state.owlSeed,state.pending,state.eventQueue,state.termPage,state.termOutcome])'),checkpoint);
}
console.log('PASS business-case timing and selection, all gates, common start, cooldown, saved draws, reserved queues, and legacy completion records');
// Month-end incidents cannot be declined or resolved twice, including after reloading.
for(const id of run('monthlyIncidents.map(item=>item.id)')){
  ctx.incident=id;
  setup('state.month=22;state.pending=incident;state.phase="event";state.renown=4');
  assertOk('pendingEvent().choices.length===1');
  const item=run('monthlyIncidents.find(row=>row.id===incident)');
  if(item.income||item.cost){
    run('tab="plan"');
    assert.equal(run('trackForView()'),item.income?'cheerful':'gloomy');
  }
  const beforeCash=run('state.fund');
  run('state.termPage=1;state=normalizeSave(state);choose(0);');
  assert.equal(run('state.fund'),beforeCash+(item.income||0)-(item.cost||0));
  if(item.income){
    assert.equal(run('state.accounts.windfalls'),item.income);
    assert.equal(run('state.renown'),4);
  }
  assertOk('state.flags[incident] && state.choiceImpact.monthlyIncident && state.choiceImpact.items[0].rows.length');
  const once=run('JSON.stringify([state.fund,state.hp,state.stress,state.motivation,state.renown,state.accounts.setbacks,state.accounts.windfalls,state.events])');
  run('state=normalizeSave(state);choose(0)');
  assert.equal(run('JSON.stringify([state.fund,state.hp,state.stress,state.motivation,state.renown,state.accounts.setbacks,state.accounts.windfalls,state.events])'),once);
}
// Cash draws are independent of progress, unlocked goods, weather, and the preceding month's draw.
setup('state.month=1');
const cashSample=run(`(()=>{
  const tally={},r=initial();let consecutive=false,repeat=false;
  for(let seed=1;seed<=4096;seed++){
    r.owlSeed=seed;r.month=1;const id=drawCashIncident(r);
    const rich={...r,fund:5000,weather:"heat",productHistory:{toys:{units:150,orders:8}},events:[{id,month:1}],flags:{[id]:true}};
    if(drawCashIncident(rich)!==id)throw Error("Trade or weather changed a cash draw");
    tally[id||"none"]=(tally[id||"none"]||0)+1;
    r.month=2;const next=drawCashIncident(r);if(id&&next)consecutive=true;if(id&&id===next)repeat=true;
  }
  return {tally,consecutive,repeat};
})()`);
assert.ok(cashSample.consecutive&&cashSample.repeat);
for(const pool of ['cashWindfalls','cashLosses']){
  const ids=run(pool+'.map(item=>item.id)');
  const count=ids.reduce((sum,id)=>{assert.ok(cashSample.tally[id]>0);return sum+cashSample.tally[id];},0);
  assert.ok(count>110&&count<230);
}
for(const id of ['windfallWindow','setbackGlass']){
  ctx.incident=id;
  setup('tab="plan";state.pending=incident;state.phase="event";state.termPage=1;state.flags[incident]=true;state.month=2;state.events=[{id:incident,month:1,index:0}]');
  run('choose(0)');
  assertOk('state.events.filter(e=>e.id===incident).length===2');
  const funds=run('state.fund');
  run('state=normalizeSave(state);choose(0)');
  assert.equal(run('state.fund'),funds);
}
setup('state.month=3;state.report={sold:10}');
assertOk('drawMonthlyIncident(state,true,()=>0)==="setbackFall" && drawMonthlyIncident(state,true,()=>.99)===null');
run('state.events.push({id:"setbackFall",month:2,index:0})');assertOk('drawMonthlyIncident(state,true,()=>0)===null');
setup('state.month=2;state.report={sold:0}');
assertOk('!drawMonthlyIncident(state,false,()=>0) && drawMonthlyIncident(state,true,()=>0)==="setbackFall"');
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
  setup('state.month=weatherKind==="heat"?6:12;state.plan=["exercise","study","rest"];state.visit="none";');
  const ordinary=run('overhead()');
  run('state.weather=weatherKind;state=normalizeSave(state)');
  assert.equal(run('overhead()'),ordinary+(weather==='heat'?22:30));
  assertOk('!drawMonthlyIncident(state,true,()=>0)');
  for(const activity of ['exercise','riding','study','language','rest','recovery']){
    ctx.subject=activity;
    const [clear,extreme]=run('[null,weatherKind].map(weather=>{const r=structuredClone(state);r.weather=weather;applyActivity(r,subject,"steady");return [r.hp,r.stress,r.stats.체력,r.stats.의지,r.stats.지성]})');
    if(['exercise','riding'].includes(activity)){
      assert.equal(extreme[0]-clear[0],weather==='heat'?-7:-9);
      assert.equal(extreme[1]-clear[1],weather==='heat'?3:2);
      assert.ok(extreme[2]>clear[2] && extreme[3]>clear[3]);
    }else assert.deepEqual(extreme,clear);
  }
  assertOk('plannerContents().includes(weatherFor(state).name) && scheduleNote("exercise").includes("↑")');
  run('state.plan=["study","study","study"];state.visit="town";state.qty=0;execute();var quote=overhead();state.sequence.index=2;settleMonth()');
  assertOk('state.report.bills===quote && actualBudget().includes("저택 유지")');
  assert.doesNotMatch(run('actualBudget()'),/빙고 얼음값|난방 석탄값/);
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
for(const omit of ["townhouse","finny","mey","bard","soma","agni"]){
  ctx.omit=omit;
  setup('state.month=35;state.snakeArrivalMonth=34;state.phase="event";state.pending="circus";state.recruitPage={id:"circus",at:7,version:2};state.eventQueue=["snakeReturn"];for(const p of ["finny","mey","bard","tanaka","soma","agni"])recruit(p);state.flags.townhouse=omit!=="townhouse";delete state.people[omit];state=normalizeSave(state)');
  assertOk('!state.people.snake && !state.recruitPage && !["circus","snakeReturn"].includes(state.pending) && !state.snakeArrivalMonth');
}
for(const missing of ["townhouse","finny","mey","bard"]){
  ctx.missing=missing;
  setup('state.flags.townhouse=missing!=="townhouse";for(const id of ["finny","mey","bard"])if(id!==missing)recruit(id);state.pending="visitPrince";state.phase="event";state.recruitReturn="estate";state.eventQueue=["visitPrince"];state=normalizeSave(state)');
  assertOk('state.phase==="plan"&&!state.pending&&!townhouseGuestsDue(state)&&!state.flags.visitPrince');
}
for(const present of [null,"soma","agni"]){
  ctx.present=present;
  setup('for(const id of ["finny","mey","bard"])recruit(id);state.flags.townhouse=true;state.flags.visitPrince=true;state.flags.agni=true;if(present)state.people[present]={toward:7};state=normalizeSave(state)');
  assert.equal(run('state.pending'),"visitPrince");
  run('state.recruitPage={id:"visitPrince",at:6,version:3};state=normalizeSave(state)');
  assert.equal(run('recruitPage("visitPrince")'),6);
  pick();
  assertOk('state.people.soma&&state.people.agni&&(!present||state.people[present].toward===7)&&!normalizeSave(state).pending');
}
setup('state.month=19;state.flags.townhouse=true;recruit("finny");recruit("mey");state.phase="event";state.pending="cook";state.eventQueue=[]');
pick();
assertOk('state.people.bard&&!state.people.soma&&!state.people.agni&&state.townhouseGuestMonth===20&&!townhouseGuestsDue(state)');
run('state=normalizeSave(state);advance();if(state.phase==="weatherBriefing")handleAction("weather-close")');
assertOk('state.month===20&&state.phase==="event"&&state.pending==="visitPrince"');
run('state.recruitPage={id:"visitPrince",at:6,version:3};state=normalizeSave(state)');assert.equal(run('recruitPage("visitPrince")'),6);
pick();assertOk('state.people.soma && state.people.agni && !townhouseGuestsDue(state)');
setup('state.flags.townhouse=true;recruit("soma");recruit("agni");state.flags.visitPrince=true;state=normalizeSave(state)');
assertOk('state.people.soma && state.people.agni && !state.pending');
// Loading cannot advance or postpone a known invitation, including an old same-month cook entry.
setup('state.month=state.planMonth=9;state.flags.townhouse=true;for(const id of ["finny","mey","bard"])recruit(id);delete state.townhouseGuestMonth;state.events=[{id:"cook",month:9,index:0}];state.phase="event";state.pending="visitPrince";state.recruitReturn="estate";state=normalizeSave(state)');
assertOk('state.phase==="plan"&&!state.pending&&state.townhouseGuestMonth===10&&normalizeSave(state).townhouseGuestMonth===10');
// A legacy roster with the London guests out of order repairs Bard at the first free event.
for(const phase of ["plan","result","vow","event"]){
  ctx.repairPhase=phase;
  setup('state.month=state.planMonth=6;state.flags.townhouse=true;for(const id of ["finny","mey","soma","agni"])recruit(id);state.people.soma.toward=9;state.phase=repairPhase;state.plan=["rest","study","reading"];if(repairPhase==="event"){state.pending="ink";state.eventQueue=["cook","cook"]}state=normalizeSave(state)');
  if(phase==="event"){
    assertOk('state.pending==="ink"&&JSON.stringify(state.eventQueue)===JSON.stringify(["cook"])');
    pick();
  }
  assertOk('state.pending==="cook"&&normalizeSave(state).pending==="cook"');
  pick();
  assertOk('state.people.bard&&state.people.soma.toward===9&&state.people.agni&&state.events.filter(e=>e.id==="cook").length===1&&!townhouseGuestsDue(state)&&normalizeSave(state).pending!=="cook"');
  if(phase==="plan")assertOk('JSON.stringify(state.plan)===JSON.stringify(["rest","study","reading"])');
  if(phase==="plan"||phase==="vow")assert.equal(run('state.phase'),phase);
}
setup('state.month=6;state.flags.townhouse=true;recruit("finny");recruit("mey");state=normalizeSave(state)');
assertOk('!state.pending&&!townhouseGuestsDue(state)&&!overdueArrival(state)');
setup('state.month=state.planMonth=35;state.flags.townhouse=true;for(const id of ["finny","mey","bard"])recruit(id);state.phase="vow";state=normalizeSave(state)');
assertOk('state.townhouseGuestMonth===36&&!townhouseGuestsDue(state)&&state.pending!=="visitPrince"');
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
assertOk('!state.pending&&state.townhouseGuestMonth===6&&!townhouseGuestsDue(normalizeSave(state))');
run('state.phase="result";advance();if(state.phase==="weatherBriefing")handleAction("weather-close")');
assertOk('state.month===6&&state.pending==="visitPrince"');pick();
assertOk('state.people.soma && state.people.agni && !state.people.tanaka && state.snakeArrivalMonth>=6 && state.snakeArrivalMonth<=8');
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
setup('state.month=state.planMonth=3;tab="estate"');
assertOk('!managementPanel().includes("tab:townhouse")');
run('handleAction("tab:townhouse")');assert.equal(run('tab'),"estate");
run('for(const p of ["bard","finny","mey"])recruit(p);handleAction("townhouse",null,true);state.phase="result";advance();if(state.phase==="weatherBriefing")handleAction("weather-close")');pick();
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
run('state.month=5;state.phase="plan";placeEmployee("agni","post");state.stats.통찰=499;settleLondon(state)');
assertOk('state.stats.통찰===500 && state.renown===2 && state.london.book.length===2');
run('state.month=6;placeEmployee("agni","off");placeEmployee("soma","off");settleLondon(state)');
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
  const run=initial();run.owlSeed=seed;run.people.finny={};const births=[];let eligibleAt=null;
  for(let m=13;m<=35;m++){
   run.month=m;
   // Queue recruitment candidates against the start-of-settlement roster.
   const maid=owlAppears(run),cook=events.find(e=>e.id==='cook').sees(run);
   if(m===21){run.flags.townhouse=true;run.people.soma={};run.people.agni={}}
   if(eligibleAt===null&&run.people.mey&&run.people.bard&&run.flags.townhouse)eligibleAt=m;
   scheduleSnakeVisit(run);
   const snake=dueSnakeVisit(run);
   if(snake && (eligibleAt===null||m<eligibleAt||m>eligibleAt+2||snake!=="circus"))throw Error("Invalid Snake window");
   if(cook){run.people.bard={};births.push('B'+m)}
   if(maid){run.people.mey={};births.push('M'+m)}
   if(tanakaReturns(run)){run.people.tanaka={};births.push('T'+m);run.events.push({id:'homecoming',month:m})}
   if(snake){run.people.snake={};arrivals.add(m-eligibleAt);births.push('S'+m)}
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
  const originalRandom=Math.random,originalWeather=rollSeasonWeather,originalSetback=drawMonthlyIncident;
  // Loading each dialogue calls initial() for defaults. Keep weather and incidents
  // independent of how many optional business scenes the campaign happens to read.
  const monthlyRandom=(month,salt)=>{
    let seed=(5371^Math.imul(month,2654435761)^salt)>>>0;
    return ()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/0x100000000);
  };
  rollSeasonWeather=month=>originalWeather(month,monthlyRandom(month,0x57454154));
  drawMonthlyIncident=(run,ride)=>originalSetback(run,ride,monthlyRandom(run.month,0x53455442));
  let trialSeed=5371;
  Math.random=()=>((trialSeed=(Math.imul(trialSeed,1664525)+1013904223)>>>0)/0x100000000);
  state=initial();state.owlSeed=0;state.phase="plan";tab="plan";
  for(const [a,b,c,price,qty] of campaignSchedule){
    if(state.phase!=="plan")throw Error("Could not enter calendar at "+state.month);
    if(state.unwell && state.fund>160)handleAction("doctor",null,true);
    state.plan=(state.unwell||state.ill?["recovery","rest","rest"]:[a,b,c]).map(id=>canSchedule(state,id)?id:"rest");state.visit="town";state.price=price;state.qty=qty;
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
  Math.random=originalRandom;rollSeasonWeather=originalWeather;drawMonthlyIncident=originalSetback;
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
  assert.ok(campaign.exams>=10);
  assert.deepEqual(Array.from(campaign.birthdays),[12,24]);
  assert.deepEqual(Array.from(campaign.decisions),[26,29,32]);
  console.log('PASS 35-month campaign',invest?'expanded estate':'starting facilities',
    'January',JSON.stringify(campaign.january),'final funds',campaign.fund);
}

// Lau only sells goods. Prior income remains in the ledger when an old save is restored.
setup('tab="market";state.stock.toys=12;state.usedBooks={birds:1};state.fund+=25;state.accounts.lauSales=3;state.accounts.lauBookSales=22;state=normalizeSave(state)');
assertOk('!marketPanel().includes("shop-mode:")&&!marketPanel().includes("shop-sell:")');
run('handleAction("shop-sell:toys:1",null,true);handleAction("shop-sell:birds:1",null,true)');
assertOk('state.fund===525&&state.stock.toys===12&&state.accounts.lauSales===3&&state.accounts.lauBookSales===22');
run('handleAction("buy:birds",null,true);handleAction("buy:birds",null,true)');
assertOk('state.fund===481&&state.stats.매력===14&&state.lauPurchases===1');
run('state.plan=["walk","walk","walk"];state.visit="none";state.qty=0;execute();settleMonth()');
assertOk('actualBudget().includes("라우 상점 재고 매각")&&actualBudget().includes("라우 상점 중고 교본 매각")&&!actualBudget().includes("내역 외 잔액 변동")');

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
setup('state.month=25;state.stats.지성=484');
assertOk('lessonGain("지성",440,20,25,{})===lessonGain("지성",440,20,25,{lateDispatch:true})');
assertOk('lessonGain("지성",484,20,25)===2 && lessonGain("지성",485,20,25)===1 && lessonGain("지성",500,20,25)===0');
assertOk('scheduleNote("study").replace(/<[^>]+>/g,"").includes("지성 ↑") && !statusPanel().includes("과목 실기")');
run('state.stats.지성=485;state.plan=["study","rest","walk"];const graduate=structuredClone(state);graduate.flags.lateDispatch=true;applyActivity(graduate,"study","great")');
assertOk('graduate.stats.지성>486 && projectTraining().stats.지성===486 && state.stats.지성===485');
run('changeStat("지성",6);state.flags.lateDispatch=true;persist();state=normalizeSave(saves.auto)');
assertOk('state.stats.지성===491 && lessonGain("지성",491,20,25)>1 && !statusPanel().includes("과목 실기 0/6")');

// Final ordinary gains advance one point at a time, with no hidden bonus required.
setup('state.stats.지성=497;for(let i=0;i<5;i++)changeStat("지성",6)');
assertOk('state.stats.지성===500');
for(const [flag,grade,expected] of [[false,"great",498],[true,"steady",500],[true,"great",500]]){
  ctx.mflag=flag;ctx.mgrade=grade;
  setup('state.month=34;state.stats.지성=state.stats.통찰=497;state.flags.lateDispatch=mflag;state.level.library=3;applyActivity(state,"study",mgrade)');
  assert.equal(run('state.stats.지성'),expected);
  assert.ok(run('state.stats.통찰')>=497 && run('state.stats.통찰')<=498);
}
run('changeStat("지성",20);state=normalizeSave(state);applyActivity(state,"study","great")');
assertOk('state.stats.지성===500 && state.stats.통찰<=500');
run('changeStat("지성",4)');
assertOk('state.stats.지성===500');
setup('state.plan=["study","inquiry","casework"];state.month=1;projectTraining()');
assertOk('!Object.hasOwn(state,"foundation")&&!state.linkFrom');
run('applyActivity(state,"study","steady");state=normalizeSave(state);applyActivity(state,"inquiry","steady");applyActivity(state,"casework","steady")');
assertOk('!Object.hasOwn(state,"foundation")');
setup('state.plan=["accounts","rest","study"]');
assertOk('!Object.hasOwn(projectTraining(),"foundation") && state.linkFrom===null');
run('recordStudyLink(state,"accounts");recordStudyLink(state,"rest");state=normalizeSave(state)');
assertOk('recordStudyLink(state,"study")==="지성"');
run('state.month=2;recordStudyLink(state,"rest")');assertOk('!recordStudyLink(state,"inquiry")');
setup('state.month=6;state.weather="heat";state.plan=["riding","rest","exercise"]');
run('const fairWeather=structuredClone(state);fairWeather.weather=null;applyActivity(fairWeather,"riding","steady");applyActivity(state,"riding","steady")');
assertOk('state.stats.체력>fairWeather.stats.체력 && state.hp<fairWeather.hp');
run('state=normalizeSave({...state,foundation:24})');
assertOk('!Object.hasOwn(state,"foundation")');
setup('state.month=26;state.fund=state.accounts.opening=2140;state.stats.경영=420;state.shop={design:3,works:3,store:3};state.plan=["rest","walk","rest"];state.visit="none";state.qty=20;state.price=18');
assertOk('forecast().trade.contribution>0 && profitContribution(state,120,200)===0');
run('const feeQuote=forecast();execute();state=normalizeSave(state);settleMonth()');
assertOk('state.report.contribution===feeQuote.trade.contribution && state.report.expenses===feeQuote.expenses');
assertOk('state.fund===2140+feeQuote.margin-state.report.training-state.report.bills && actualBudget().includes("수익 분담금")');
setup('state.month=9;state.hp=62;state.stress=76');
assertOk('!criticalHealth(state)');
run('state.hp=52');
assertOk('criticalHealth(state)');
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
setup('state.phase="plan";state.ill=false;state.hp=75;state.stress=0;state.plan=["rest","walk","study"];handleAction("activity:0:recovery",null,true)');
assertOk('state.plan[0]==="rest"');
run('state.plan[1]="recovery";state=normalizeSave(state)');assertOk('state.plan[1]===null && state.plan[0]==="rest" && state.plan[2]==="study"');
run('state.hp=20;state.stress=90;updateIllness(state);handleAction("activity:1:recovery",null,true)');assertOk('state.plan[1]==="recovery"');
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
  run('updateIllness(state)');
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
setup('state.hp=24;state.stress=100;state.qty=0;state.plan=["exercise","rest","recovery"];state.visit="none";state.fund=plannedTuition()-1;updateIllness(state);execute()');
assertOk('state.phase==="scene" && state.sequence.onSickLeave && state.fund===actions.rest.cost+actions.recovery.cost-1');
setup('state.hp=20;state.stress=100;state.visit="library";persist()');
assertOk('state.ill && !hasPendingVisit()');
run('state.hp=57;state.stress=51;persist()');
assertOk('!state.ill && hasPendingVisit()');

// Preview eligibility uses the post-interaction state without applying rewards or saving.
const checkedVisitPreview=place=>{
  ctx.previewPlace=place;
  const before=run('JSON.stringify(state)'),saved=JSON.stringify([...mem]);
  const text=run('visitPreview(previewPlace)');
  assert.equal(run('JSON.stringify(state)'),before,'visit preview changed campaign state');
  assert.equal(JSON.stringify([...mem]),saved,'visit preview wrote browser storage');
  return text;
};
for(const [hp,recovery,supperDone,expected] of [
  [73,0,true,null],[74,0,true,null],[72,0,true,'visitKitchenBowl'],[75,0,true,null],
  [74,1,true,'visitKitchenBowl'],[73,0,false,'bardSupper']
]){
  Object.assign(ctx,{previewHP:hp,previewRecovery:recovery,previewSupperDone:supperDone});
  setup('tab="plan";state.month=state.planMonth=24;recruit("bard");state.visit="kitchen";state.phase="visit";state.sequence={index:2};state.hp=previewHP;state.counts.recovery=previewRecovery;state.flags.bardSupper=previewSupperDone;state.events=previewSupperDone?[{id:"bardSupper",index:0,month:20}]:[]');
  const text=checkedVisitPreview('kitchen');
  assert.equal(text.includes('손잡이 달린 그릇'),expected==='visitKitchenBowl','HP '+hp+' bowl preview');
  if(expected)assert.match(text,/교류 시 확정/);else assert.doesNotMatch(text,/확정|손잡이 달린 그릇/);
  assert.equal(text.includes('식기 전에'),expected==='bardSupper');
  run('visitDone(true)');
  assert.equal(run('state.sequence.visitEvent||null'),expected);
  assertOk('state.hp===previewHP+2&&state.stats.지성===22&&state.people.bard.toward===3');
}
// Listing every eligible speaker promises meetings after the first selected event.
for(const [place,activity,event,extraName] of [
  ['parlor','dance','audience','엘리자베스'],['town','supplier','trade','라우']
]){
  Object.assign(ctx,{previewPlace:place,previewActivity:activity});
  setup('tab="plan";state.month=state.planMonth=3;state.visit=previewPlace;state.counts[previewActivity]=1');
  const planned=checkedVisitPreview(place);
  assert.match(planned,/교류 시 가능/);assert.doesNotMatch(planned,/확정/);
  assert.ok(!planned.includes(extraName),place+' advertised a later event speaker');
  run('state.phase="visit";state.sequence={index:2}');
  assert.match(checkedVisitPreview(place),/교류 시 확정/);
  run('visitDone(true)');assert.equal(run('state.sequence.visitEvent'),event);
}
setup('tab="plan";state.month=state.planMonth=24;recruit("finny");state.people.finny.toward=4;state.visit="garden";state.phase="visit";state.sequence={index:2}');
assert.match(checkedVisitPreview('garden'),/교류 시 확정.*온실의 여벌 열쇠/);
assert.doesNotMatch(checkedVisitPreview('garden'),/신뢰|체력|[0-9]/);
run('visitDone(false)');
assertOk('!state.sequence.visitEvent&&state.people.finny.toward===4&&state.stats.체력===50&&state.stress===16&&state.motivation===72');
assert.equal(checkedVisitPreview('garden'),'만날 수 있는 사람: 피니안');
run('state.sequence={index:2}'); // A restored visitTurn guard must also prevent another forecast.
assert.equal(checkedVisitPreview('garden'),'만날 수 있는 사람: 피니안');
run('delete state.visitTurn;state.visit="library"');
assert.match(checkedVisitPreview('garden'),/교류 시 가능/);
assert.doesNotMatch(checkedVisitPreview('garden'),/확정/);
assert.equal(checkedVisitPreview(null),'방문지를 선택하세요.');
assert.equal(checkedVisitPreview('none'),'방문 생략');
// Running a preview before either choice must preserve every real effect, including caps.
for(const place of ['library','garden','kitchen','quarters','parlor','company','town','townhouse']){
  for(const [ability,grown] of [[12,16],[498,499],[500,500]])for(const engage of [false,true]){
    Object.assign(ctx,{previewPlace:place,previewAbility:ability,previewEngage:engage});
    setup('tab="plan";state.month=state.planMonth=24;state.visit=previewPlace;state.phase="visit";state.sequence={index:2};state.flags.townhouse=true;for(const id of Object.keys(servants)){recruit(id);state.people[id].toward=previewAbility===500?20:19;}for(const key of stats)state.stats[key]=previewAbility;state.hp=99;state.stress=1;state.salesBook=[{month:23,product:"toys",sold:12,revenue:168,cost:40}]');
    ctx.previewSeed=run('structuredClone(state)');
    run('visitDone(previewEngage)');
    const direct=run('JSON.stringify(state)');
    assert.equal(run('state.stats[visitGrowth[previewPlace]]'),engage?grown:ability);
    run('state=structuredClone(previewSeed)');
    const text=checkedVisitPreview(place);
    assert.equal(checkedVisitPreview(place),text);
    run('visitDone(previewEngage)');
    assert.equal(run('JSON.stringify(state)'),direct,place+' rewards changed after a preview');
    if(engage){
      assertOk('!visitPerson(previewPlace)||state.people[visitPerson(previewPlace)].toward===20');
      if(place==='library')assert.equal(run('state.trust'),2);
      if(place==='kitchen')assert.equal(run('state.hp'),100);
      if(place==='garden')assert.equal(run('state.stress'),0);
      if(place==='townhouse')assertOk('state.flags.agniTea');
      if(run('state.sequence.visitEvent'))assert.ok(text.includes(run('events.find(e=>e.id===state.sequence.visitEvent).title')));
    }
  }
}
console.log('PASS visit-preview HP boundaries, event priority, conditional certainty, first-event speakers, purity, quiet choice and all eight places with unchanged capped rewards');

setup('for(const [key,[target]] of Object.entries(courtEducation))state.stats[key]=target;Object.assign(state.level,{library:2,kitchen:2});state.salesBook=Array.from({length:14},()=>({revenue:30,cost:15}));state.events=Array.from({length:6},(_,i)=>({id:"portfolio-"+i+"-1",index:0,month:30}));state.royal=8;state.renown=30;state.fund=2100;state.debt=0;state.advancedStudy={study:2,etiquette:2,accounts:2}');
assertOk('qualifies() && courtRows().length===11');
assertOk('cielEndingId(460,true,39)==="releaseTitle" && cielEndingId(460,true,40)==="vowTitle" && cielEndingId(459,true,70)==="vowTitle"');
assertOk('cielEndingId(459,true,69)==="releaseTitle" && cielEndingId(461,true,0)==="vowTitle"');
assertOk('cielEndingId(459,false,69)==="releaseNoTitle" && cielEndingId(461,false,0)==="vowNoTitle"');
for(const change of ['stats.지성--','stats.기품--','stats.매력--','stats.통찰--','stats.경영--','stats.의지--','stats.체력--','advancedStudy.study--','events[0].index++','events[0].id=state.events[1].id','level.kitchen--','salesBook.pop()','royal--','renown--','fund--','debt++']){
  const previous=run('structuredClone(state)');
  run('state.'+change);assertOk('!qualifies()');ctx.savedCourt=previous;run('state=savedCourt');
}
for(const ending of ["title","business","defer"]){
  ctx.legacyEnding=ending;
  setup('state=normalizeSave({...state,duration:6,month:6,planMonth:6,phase:"ending",ending:legacyEnding,endingBeat:3})');
  assertOk('state.duration===35 && state.phase==="result" && !state.ending && state.endingBeat===undefined');
  run('advance()');assertOk('state.month===7 && state.phase==="plan"');
}
for(const [quality,qty,rank] of [["fine",1,2],["standard",1,0],["fine",0,0]]){
  setup('tab="plan";state.month=4;state.fairTickets={kensington1886:{product:"toys"}};persist();state=normalizeSave(saves.auto);state.month=5;state.qty='+qty+';state.quality='+JSON.stringify(quality));
  run('state.productHistory.toys={reputation:12,units:72,orders:2};settleFestival(state,{fairId:"kensington1886"})');
  assert.equal(run('state.fairBook.kensington1886.rank'),rank);
  const renown=run('state.renown');run('settleFestival(state)');assert.equal(run('state.renown'),renown);
  run('state.month=6');assert.equal(run('fairDemand(state,"toys")'),rank*2);
  run('state.month=7');assertOk('fairDemand(state,"toys")===0');
}
setup('tab="plan";state.month=4;state.fairTickets={kensington1886:{product:"toys"}};selectFestival("kensington1886","cancel");state.month=5;settleFestival(state)');
assertOk('!state.fairBook?.kensington1886');
for(const index of [0,1]){
  ctx.replyIndex=index;
  setup('tab="plan";recruit("tanaka");state.people.tanaka.from=9;state.counts.inquiry=1;state.visit="library";state.flags.proof=true;state.phase="visit";state.sequence={index:2};visitDone(true)');
  assertOk('state.sequence.visitEvent==="visitLibrarySeal"');
  run('handleAction("encounter-next:0");state=normalizeSave(saves.auto)');
  assertOk('state.sequence.encounterPage===1 && !Object.hasOwn(state.people.tanaka,"from")');
  run('chooseVisitEvent(replyIndex)');assertOk('!state.flags.visitLibrarySeal');
  run('handleAction("encounter-next:1");handleAction("encounter-next:2");chooseVisitEvent(replyIndex);chooseVisitEvent(replyIndex)');
  assertOk('state.events.filter(e=>e.id==="visitLibrarySeal").length===1 && state.sequence.encounterReply');
  assert.match(run('visitScene()'),/자유행동 결과 보기/);
  run('handleAction("visit-finish")');
  assert.equal(run('state.choiceImpact.next'),'visit');
  const summary=run('impactMarkup(state.choiceImpact)');
  assert.match(summary,/자유행동 결과/);
  assert.match(summary,/타나카의 호감도 ↑/);
  assert.ok(summary.includes('<strong>+'+(index===0?6:4)+'</strong>'));
  const finalStats=run('structuredClone(state.stats)'),finalTrust=run('state.people.tanaka.toward');
  assertOk(`(()=>{
    state=normalizeSave(saves.auto);
    const settle=settleMonth;let continued=0;
    try{
      settleMonth=()=>continued++;
      handleAction("impact-close");
      return continued===1;
    }finally{settleMonth=settle;}
  })()`);
  assert.deepEqual(run('state.stats'),finalStats);
  assert.equal(run('state.people.tanaka.toward'),finalTrust);
  assert.ok(!run('state.choiceImpact'));
  run('state.phase="visit";state.month++;state.sequence={index:2};visitDone(true)');
  assertOk('state.sequence.visitEvent===(replyIndex===0?"visitLibraryWax":"visitLibraryCarbon")');
}
assert.deepEqual(Array.from(run('Object.keys(endingScenes).sort()')),['broke','ill','releaseNoTitle','releaseTitle','vowNoTitle','vowTitle']);
// Scheduling, the doorstep choice, and selecting the event use distinct moments of the month.
for(const fixture of [
  {place:"kitchen",setup:'recruit("bard");state.flags.bardSupper=true;state.hp=73',note:"만날 수 있는 사람: 바르도",event:null},
  {place:"kitchen",setup:'recruit("bard");state.flags.bardSupper=true;state.hp=72',note:"만날 수 있는 사람: 바르도 / 교류 시 가능 · 「손잡이 달린 그릇」",event:"visitKitchenBowl"},
  {place:"parlor",setup:'state.counts.dance=1',note:"만날 수 있는 사람: 세바스찬 / 교류 시 가능 · 「여왕의 초청장」",event:"audience"},
  {place:"quarters",setup:'recruit("mey");state.flags.linenMarks=true;state.stats.기품=19',
    plan:["rest","etiquette","rest"],note:"만날 수 있는 사람: 메이린 / 교류 시 가능 · 「소매 안쪽의 바늘땀」",event:"visitQuartersHem"},
  {place:"garden",setup:'recruit("finny");state.people.finny.toward=4',quiet:true,
    note:"만날 수 있는 사람: 피니안 / 교류 시 가능 · 「온실의 여벌 열쇠」",event:null}
]){
  ctx.visitFixture=fixture;
  setup('state.month=state.planMonth=26;state.visit=visitFixture.place;state.plan=visitFixture.plan||emptyPlan();'+fixture.setup);
  const beforePreview=run('JSON.stringify(state)');
  assert.equal(run('visitPreview(state.visit)'),fixture.note);
  assert.equal(run('JSON.stringify(state)'),beforePreview);
  if(fixture.plan){
    run('execute();for(let i=0;i<3;i++){finishScene();continueSequence()}');
    assert.equal(run('state.phase'),"visit");
  }else run('state.phase="visit";state.sequence={index:2}');
  run('visitDone(!visitFixture.quiet)');
  assert.equal(run('state.sequence.visitEvent??null'),fixture.event);
}
const minimumEndingLines={broke:46,ill:40,releaseNoTitle:41,releaseTitle:48,vowNoTitle:42,vowTitle:47};
for(const [id,minimum] of Object.entries(minimumEndingLines))assert.ok(run('endingScenes.'+id+'.lines.length')>=minimum,id);
for(const [ending,edition,beat,expected] of [
  ["vowTitle",2,27,27],["vowTitle",3,26,26],["vowTitle",3,27,28],
  ["broke",2,46,46],["broke",3,5,5],["broke",3,6,5],["broke",3,45,44],
  ["broke",4,46,46],["ill",2,20,17],["ill",4,7,7],["ill",4,8,8],["ill",4,10,8],["ill",4,11,8],["ill",4,42,39],["ill",5,20,20]
]){
  Object.assign(ctx,{ending,edition,beat,expected});
  assertOk('(()=>{const saved=normalizeSave({...initial(),storyPageEdition:edition,phase:"ending",ending,endingBeat:beat});return saved.storyPageEdition===5&&saved.endingBeat===expected&&normalizeSave(saved).endingBeat===expected;})()');
}
console.log('PASS illness, reserved tuition during sick leave, recovery, optional fair outcomes and demand, both library follow-ups after loading, one-way trust, and all six ending scripts.');

// Each London career remains independently collectible across later playthroughs.
run('saves={};state=initial();saves.gallery={vowNoTitle:"문장 없는 마차"};saves.londonCareer="broker";');
assert.deepEqual(Array.from(run('endingGalleryEntries().map(([,route])=>route)')),["broker"]);
run('saves.cgSeen={"assets/endings/london-pursuit.webp":true};restoreCGRecords();');
assert.deepEqual(Array.from(run('endingGalleryEntries().map(([,route])=>route)')),["pursuit","broker"]);
assertOk('saves.cgSeen["assets/endings/vowNoTitle.webp"]&&saves.cgSeen["assets/endings/london-broker.webp"]');
run('saves={};tab="plan";');
for(const [worth,management,insight,route,art] of [
  [500,180,100,"pursuit","vowNoTitle"],
  [500,190,160,"broker","london-broker"],
  [2500,380,180,"merchant","london-merchant"]
]){
  Object.assign(ctx,{worth,management,insight,route,art});
  run('state=initial();state.fund=worth;state.stats.경영=management;state.stats.통찰=insight;finish("vowNoTitle");');
  assertOk('state.londonCareer===route&&saves.cgSeen["assets/endings/"+art+".webp"]');
}
assert.deepEqual(Array.from(run('endingGalleryEntries().map(([,route])=>route)')),["pursuit","broker","merchant"]);
run('saves=JSON.parse(localStorage.getItem(storageKey));tab="album";handleAction("ending-art:vowNoTitle:broker");');
assertOk('endingReplay.route==="broker"&&endingSceneRoute("vowNoTitle",endingReplay)==="broker"');
assert.equal(run('savedGrowthRecord("vowNoTitle",endingReplay).at(-1).recap.finalStats.경영'),190);
assert.equal(run('savedGrowthRecord("vowNoTitle",{route:"merchant"}).at(-1).recap.finalStats.경영'),380);
assert.equal(run('savedGrowthRecord("vowNoTitle",{route:"pursuit"}).at(-1).recap.finalStats.경영'),180);
console.log('PASS three independently collectible London endings, legacy CG migration, replay, and separate growth records');

// A garden-party meeting is counted once and announced after the final line.
setup('tab="plan";state.month=4;state.phase="event";state.pending="contest-easter-1886";state.sequence={duel:{}}');
assert.match(run('familyFolio("","")'),/엘리자베스<\/b>[\s\S]*?호감도 0/);
assertOk('recordElizabethMeeting(state)');
run('state.pendingFairAffinity=state.pending');
assertOk('!recordElizabethMeeting(state)&&!state.choiceImpact&&elizabethAffinity(state)===3');
run('finishEventChoice(pendingEvent())');
assert.equal(run('state.choiceImpact.next'),'event');
assert.match(run('impactMarkup(state.choiceImpact)'),/엘리자베스 호감도 ↑/);
run('state=structuredClone(state);handleAction("impact-close")');
assertOk('!state.choiceImpact&&!state.pendingFairAffinity&&elizabethAffinity(state)===3');
assert.match(run('familyFolio("","")'),/엘리자베스<\/b>[\s\S]*?호감도 3/);
setup('tab="plan";state.phase="event";state.pending="contest-easter-1886";state.fairBook={"easter-1886":{reason:"병중으로 불참"}}');
assertOk('!recordElizabethMeeting(state)&&!state.pendingFairAffinity');
console.log('PASS garden-party affinity, delayed result, absence and ledger');
for(const year of [1886,1887,1888]){
  ctx.warrantYear=year;
  setup('tab="plan";{const fair=contests.find(f=>f.id==="royalWarrant-"+warrantYear);state.month=fair.month;state.fairTickets={[fair.id]:{product:"toys"}};state.sequence={contest:fair.id};prepareContest(state);}');
  assert.match(run('contestScene(pendingEvent())'),/휘트컴 상회/);
  run('handleAction("fair-next:0")');
  assertOk('contestScene(pendingEvent()).includes(contestOpponent(pendingEvent().contest).replies[contestAppearance(pendingEvent().contest)])');
  run('handleAction("fair-next:1")');
  const stage=run('contestScene(pendingEvent())');
  assert.ok(stage.includes('class="duel-vs"')&&stage.includes('fair-next:2')&&!stage.includes('class="duel-sample"'));
}
