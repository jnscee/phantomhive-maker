const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const mem=new Map(),elements=new Map();
function element(){return {isConnected:true,dataset:{},style:{setProperty(){}},addEventListener(){},setAttribute(){},focus(){},querySelector(){return this},querySelectorAll(){return []},classList:{contains(){return false},toggle(){}}}}
const doc={hidden:false,getElementById(id){if(!elements.has(id))elements.set(id,element());return elements.get(id)},querySelectorAll(){return []},addEventListener(){}};
const ctx=vm.createContext({console,structuredClone,document:doc,ResizeObserver:class {observe(){}},localStorage:{getItem:k=>mem.get(k)||null,setItem:(k,v)=>mem.set(k,v)},setTimeout,clearTimeout,clearInterval,window:{getSelection(){return null},addEventListener(){}},URLSearchParams});
for(const name of ['content','recruit','story','scenes','audio','reports','prologue','chapters','staffing','game']){
 let s=fs.readFileSync(require('node:path').join(process.argv[2]||'site','js',name+'.js'),'utf8');if(name==='game')s=s.slice(0,s.indexOf('\nrender();\nif(state.phase'));
 vm.runInContext(s,ctx,{filename:name+'.js'});
}
const run=s=>vm.runInContext(s,ctx,{timeout:1800});run('let tourSession=false;render=function(){};');
run('render=()=>{};respond=()=>{};announce=()=>{};focusAction=()=>{};popMoney=()=>{};document.querySelector=()=>null;');
const assertOk=source=>assert.ok(run(source),source);
const setup=(code="")=>run('state=initial();state.phase="plan";tab="company";'+code);
function pick(){
  run('if(recruitScenes[state.pending])state.recruitPage={id:state.pending,version:2,at:recruitScenes[state.pending].lines.length-1};choose(0)');
}
for(const phase of ['result','vow']){
  setup('state.month=35;state.phase="'+phase+'";state=normalizeSave(state)');
  const sequence=[];
  while(run('state.phase')==='event'){
    assert.ok(sequence.length<9);sequence.push(run('state.pending'));run('persist();state=normalizeSave(saves.auto)');pick();
  }
  assert.deepEqual(sequence,['gardener','maid','cook','homecoming','circus']);assert.equal(run('state.phase'),phase);
}
setup('state.month=29;state.flags.snakeSafe=true;state.flags.circus=true;state.events=[{id:"circus",index:1,month:20}];for(const id of ["finny","mey","bard","tanaka"])recruit(id);state.phase="result";state=normalizeSave(state)');
assert.equal(run('state.pending'),'snakeReturn');pick();assertOk('state.people.snake&&state.events.some(x=>x.id==="circus"&&x.index===1)');
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
console.log('PASS late-save recruitment, final vow return, legacy Snake, independent gloves, 10 visit echoes and reloads, both history branches, graded inventory, cross-product deliveries, fees, cash reconciliation, upgrade and liquidation.');

const result=vm.runInContext(`(()=>{
 const all=new Set(),last={};for(let seed=0;seed<4096;seed++){
  const run=initial();run.owlSeed=seed;run.people.finny={};const births=[];
  for(let m=13;m<=25;m++){
   run.month=m;
   // Queue recruitment candidates against the start-of-settlement roster.
   const maid=owlAppears(run),cook=events.find(e=>e.id==='cook').sees(run);
   const snake=events.find(e=>e.id==='circus').sees(run);
   if(cook){run.people.bard={};births.push('B'+m)}
   if(maid){run.people.mey={};births.push('M'+m)}
   if(tanakaReturns(run)){run.people.tanaka={};births.push('T'+m);run.events.push({id:'homecoming',month:m})}
   if(snake){run.people.snake={};births.push('S'+m)}
  }
  if(!run.people.snake||births.map(s=>s[0]).join('')!=='MBTS')throw Error(seed+':'+births.join());
  for(const s of births){const k=s[0];last[k]=Math.max(last[k]||0,+s.slice(1))}
  all.add(births.join(','));
 }
 return {patterns:all.size,latest:last};
})()`,ctx,{timeout:12000});
console.log('4096 seeds',JSON.stringify(result));
