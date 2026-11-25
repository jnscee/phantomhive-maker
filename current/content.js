"use strict";

// Scene names also identify the replaceable background and sprite files.
const stageNames = {
  library:"저택 서재", ballroom:"대연회장", office:"팬텀사 제작소", archive:"가문 문서고",
  gym:"저택 체조실", field:"승마장", garden:"장미 정원", music:"음악실", bedroom:"도련님의 침실", street:"런던 상점가"
};
const sceneArt = {
  "library": "assets/room-library.webp",
  "ballroom": "assets/room-ballroom.webp",
  "office": "assets/room-office.webp",
  "archive": "assets/room-archive.webp",
  "field": "assets/room-field.webp",
  gym:"assets/room-gym.webp",
  "garden": "assets/room-garden.webp",
  "music": "assets/room-music.webp",
  "bedroom": "assets/room-bedroom.webp",
  "street": "assets/room-street.webp"
};
const actors = {
  "read": "assets/ciel-read.png",
  "turn": "assets/ciel-turn.png",
  "bow": "assets/ciel-bow.png",
  "greet": "assets/ciel-greet.png",
  "write": "assets/ciel-write.png",
  "inspect": "assets/ciel-inspect.png",
  "step1": "assets/ciel-step1.png",
  "step2": "assets/ciel-step2.png",
  "trot1": "assets/ciel-trot1.png",
  "trot2": "assets/ciel-trot2.png",
  "trot3": "assets/ciel-trot3.png",
  "trot4": "assets/ciel-trot4.png",
  "bowOut": "assets/ciel-bowOut.png",
  "bowIn": "assets/ciel-bowIn.png",
  "cupUp": "assets/ciel-cupUp.png",
  "cupDown": "assets/ciel-cupDown.png",
  "penUp": "assets/ciel-penUp.png",
  "penDown": "assets/ciel-penDown.png",
  "waltz1": "assets/ciel-waltz1.png",
  "waltz2": "assets/ciel-waltz2.png"
};

// A common four-frame cycle keeps the props and silhouette unique to each activity.
const illustratedActivities=["dance","accounts","inquiry","letters","language","social","negotiate","exercise","practicum","developToy","supplier","estateWork","reception","casework","reading","recovery","outing"];
function activityFrames(activity){
  const ids=[1,2,3,4].map(frame=>activity+frame);
  for(const id of ids)actors[id]="assets/lessons/"+id+".png";
  return ids.join(" ");
}

// Authoring defaults are kept separately so a saved placement can always be reset.
// x and bottom locate the sprite's centre on the visible stage; scale follows the painted room height.
const lessonPlacementDefaults = {
  default:{x:50,bottom:50,scale:0.255},
  inquiry:{x:36,bottom:50,scale:0.255},
  negotiate:{x:43,bottom:48.5,scale:0.255},
  walk:{x:50,bottom:46.5,scale:0.23},
  exercise:{x:50,bottom:50,scale:0.42}
};
for(const placement of Object.values(lessonPlacementDefaults))Object.freeze(placement);
Object.freeze(lessonPlacementDefaults);
function defaultLessonPlacement(id){
  return {...lessonPlacementDefaults.default,...(Object.hasOwn(lessonPlacementDefaults,id)?lessonPlacementDefaults[id]:{})};
}
function lessonPlacement(id,override){
  const fallback=defaultLessonPlacement(id),authored=override??choreography[id]?.[5]??{};
  const finite=(key,min,max,precision)=>{
    const value=typeof authored[key]==="number"&&Number.isFinite(authored[key])?authored[key]:fallback[key];
    return Math.round(Math.min(max,Math.max(min,value))*precision)/precision;
  };
  return {x:finite("x",0,100,100),bottom:finite("bottom",0,100,100),scale:finite("scale",0.05,1,1000)};
}

// Room, acting sequence, blocking, prop animation, direction, and sprite placement are authored per activity.
const choreography = {
  study:["library","read turn","read","page","책갈피가 꽂힌 곳을 펴고, 어제 푼 문제의 다음 줄을 읽습니다.",{"x":49.74,"bottom":47.65,"scale":0.255}],
  etiquette:["ballroom","greet bow","bow","glint","발끝을 모으고 손을 가슴에 얹습니다. 이번 인사는 정확히 세 박자입니다.",{x:50,bottom:50,scale:0.255}],
  accounts:["office",activityFrames("accounts"),"write","coin","주판알을 한 줄씩 밀어 매입가를 더합니다. 마지막 줄에서 검산을 시작합니다.",{"x":51.96,"bottom":43.92,"scale":0.375}],
  inquiry:["archive",activityFrames("inquiry"),"search","lens","장부를 등불에 비춥니다. 종이를 긁어 고친 흔적이 보입니다.",{"x":38.88,"bottom":47.65,"scale":0.33}],
  riding:["field","trot1 trot2 trot3 trot4","ride","dust","고삐를 짧게 쥐고 울타리를 따라 한 바퀴 돕니다.",{x:50,bottom:50,scale:0.255}],
  letters:["library",activityFrames("letters"),"write","letter","편지의 두 귀를 맞춰 접고 붉은 밀랍 위에 가문의 인장을 누릅니다.",{"x":48.43,"bottom":47.06,"scale":0.33}],
  rest:["bedroom","cupUp cupDown","rest","steam","찻잔을 내려놓고 벽난로의 장작이 타는 소리를 듣습니다.",{"x":34.71,"bottom":47.06,"scale":0.255}],
  walk:["garden","step1 step2","walk","leaf","정원 길을 천천히 걷습니다. 온실 앞에서 보폭이 한결 느려집니다.",{"x":48.56,"bottom":45.72,"scale":0.23}],
  language:["library",activityFrames("language"),"recite","speech","라틴어 편지 한 줄을 소리 내어 읽고, 강세를 고쳐 다시 읽습니다.",{"x":50,"bottom":50,"scale":0.33}],
  music:["music","bowOut bowIn","play","notes","활을 현 위에 얹습니다. 네 마디를 끊지 않고 이어 봅니다.",{"x":51.57,"bottom":53.33,"scale":0.255}],
  dance:["ballroom",activityFrames("dance"),"waltz","beat","마룻바닥의 무늬를 따라 세 걸음, 반 바퀴 돌아 제자리로 옵니다.",{"x":50,"bottom":50,"scale":0.385}],
  social:["ballroom",activityFrames("social"),"meet","speech","손님에게 먼저 인사를 건네고 대답이 끝날 때까지 기다립니다.",{"x":50,"bottom":50,"scale":0.33}],
  negotiate:["office",activityFrames("negotiate"),"meet","contract","견적서를 밀어 둡니다. 상대가 먼저 가격을 부를 차례입니다.",{"x":47.58,"bottom":43.4,"scale":0.33}],
  exercise:["gym",activityFrames("exercise"),"calisthenics","beat","체조실 거울 앞에 섭니다. 두 팔을 펴고 무릎을 번갈아 올리며 네 박자마다 숨을 고릅니다.",{x:50,bottom:50,scale:0.42}],
  practicum:["office",activityFrames("practicum"),"count","coin","영수증 한 장에 동전 한 닢이 모자랍니다. 맞춰 본 전표를 오른쪽 함에 넣습니다.",{"x":48.17,"bottom":42.94,"scale":0.33}],
  developToy:["office",activityFrames("developToy"),"search","toy","목제 견본의 바퀴를 굴려 보고 도면의 축 길이를 고칩니다.",{"x":49.74,"bottom":43.53,"scale":0.33}],
  supplier:["street",activityFrames("supplier"),"meet","delivery","진열창 앞에 멈춰 견본의 마감과 납기표를 대조합니다.",{"x":46.86,"bottom":45.49,"scale":0.33}],
  estateWork:["archive",activityFrames("estateWork"),"write","stamp","수선 요청서를 먼저 읽고 결재가 끝난 문서를 왼편에 쌓습니다.",{"x":48.3,"bottom":42.16,"scale":0.33}],
  reception:["ballroom",activityFrames("reception"),"meet","glint","잔을 들어 건배하고, 맞은편 손님에게 차례로 인사를 건넵니다.",{"x":50,"bottom":50,"scale":0.33}],
  casework:["street",activityFrames("casework"),"search","lens","골목의 발자국을 살핀 뒤 수첩에 현장 약도를 그립니다.",{"x":48.3,"bottom":42.16,"scale":0.28}],
  reading:["bedroom",activityFrames("reading"),"read","page","오늘은 교본 대신 추리소설을 무릎 위에 올려 둡니다.",{"x":36.27,"bottom":51.18,"scale":0.33}],
  recovery:["bedroom",activityFrames("recovery"),"rest","sun","약속을 미룬 오후입니다. 해가 기울 때까지 안락의자에서 쉽니다.",{"x":33.01,"bottom":49.8,"scale":0.33}],
  outing:["street",activityFrames("outing"),"walk","leaf","마차에서 내려 쇼윈도를 구경합니다. 약속한 시각 전에 돌아갑니다.",{"x":45.94,"bottom":45.88,"scale":0.33}]
};
const extraActivities = {
  language:["라틴어",23,{지성:8,매력:6},10],music:["바이올린",25,{기품:8,의지:5},8],
  dance:["무도 수업",25,{기품:8,체력:5},10],social:["사교 수업",20,{매력:10,기품:4},9],
  negotiate:["협상",16,{경영:8,통찰:7},11],exercise:["체력 단련",8,{체력:10,의지:4},11,-3],
  practicum:["회계 실습",5,{경영:10,지성:3},8],developToy:["상품 개발 실습",10,{경영:8,통찰:5},9],
  supplier:["거래처 방문",8,{매력:7,경영:7},10,-2],estateWork:["저택 사무",3,{지성:6,경영:5},7],
  reception:["사교 행사",24,{매력:11,기품:6},13,-2],casework:["사건 조사",14,{의지:12,통찰:8},13,-3],
  reading:["자유 독서",0,{지성:3},-11,3],recovery:["요양",22,{},-28,23],outing:["시내 외출",10,{매력:3},-17,5]
};
// Each basic course or field assignment draws time from one other area of training.
const trainingTradeoffs={
  study:"체력", etiquette:"의지", accounts:"매력", inquiry:"기품", riding:"지성", letters:"경영",
  practicum:"기품", developToy:"체력", supplier:"통찰", estateWork:"매력", reception:"체력", casework:"기품"
};
const categories = [
  ["기초 수업",["study","etiquette","accounts","inquiry","riding","letters"]],
  ["특별 수업",["language","music","dance","social","negotiate","exercise"]],
  ["현장 실습",["practicum","developToy","supplier","estateWork","reception","casework"]],
  ["휴식",["rest","walk","reading","recovery","outing"]]
];
const servants = {
  tanaka:{name:"타나카",home:"library",job:"library"}, finny:{name:"피니안",home:"garden",job:"garden"},
  mey:{name:"메이린",home:"quarters",job:"parlor"}, bard:{name:"바르도",home:"kitchen",job:"kitchen"},
  snake:{name:"스네이크",role:"풋맨",home:"quarters",job:"parlor"}, soma:{name:"소마",home:"townhouse",job:null},
  agni:{name:"아그니",home:"townhouse",job:null}
};
const annex = {
  bedroom:{name:"침실",cost:75,desc:"개수마다 휴식·요양의 컨디션 회복 +5"},
  garden:{name:"정원",cost:65,effects:[["산책 스트레스","−5","개수할 때마다 추가 감소"]]},
  guard:{name:"경비실",cost:80,effects:[["월 손실 절감","£8","개수할 때마다"],["월 순절감","£6","추가 유지비 £2 차감 후"]]},
  quarters:{name:"사용인 숙소",cost:65,desc:"월말에 영입한 사용인의 실무 숙련도가 숙소 등급만큼 성장 (월 +1 / +2 / +3)"}
};
const visiting = {
  none:["방문 생략",null,""],library:["서재","tanaka","타나카가 장서표를 한 장씩 넘깁니다. 도련님이 가문의 필체를 알아봅니다."],
  parlor:["응접실",null,"답장을 기다리는 초청장이 은쟁반에 놓여 있습니다. 시엘은 첫 줄의 호칭부터 살핍니다."],
  town:["런던 거리",null,"완구점 주인이 아이들이 가장 오래 서 있던 진열대를 가리켜 줍니다."],
  garden:["정원","finny","온실 문이 열려 있습니다. 흙이 마르지 않았는지 함께 살핍니다."],
  kitchen:["주방","bard","구리 냄비 뚜껑 아래에서 스튜가 끓고 있습니다."],
  quarters:["사용인 숙소","mey","복도 끝 방에서 새로 다린 리넨 냄새가 납니다."],
  company:["팬텀사 사무실",null,"시제품 하나가 사장 책상에 놓여 있습니다. 포장과 내용물을 따로 검사합니다."],
  townhouse:["런던 타운하우스","soma","런던 집의 응접실과 우편함을 살펴봅니다."]
};
function calendarDate(turn,day=1){return new Date(Date.UTC(1886,turn-1,day));}
function monthText(turn){const d=calendarDate(turn);return d.getUTCFullYear()+"년 "+(d.getUTCMonth()+1)+"월";}
function campaignAge(run){
  let day=1;
  if(run.sequence)day=(run.sequence.index??0)*10+(run.phase==="scene"?1:9);
  else if(["event","result","vow","investiture","ending"].includes(run.phase)&&!["estate","plan"].includes(run.recruitReturn))day=28;
  return ageAt(run.month,day);
}
function currentCielAge(){return tourSession?.age??campaignAge(state);}
function cielArt(age){return age>=12?"assets/ciel-12.webp":age===11?"assets/ciel-11.webp":"assets/ciel.png";}
function ageAt(turn,day=1){const d=calendarDate(turn,day);return d.getUTCFullYear()-1875-(d.getUTCMonth()<11||d.getUTCDate()<14?1:0);}
function peopleInHouse(){return Object.keys(servants).filter(k=>state.people[k]);}
function talkTrust(id,n=1,other=1){
  if(!state.people[id])return;
  const rel=state.people[id];
  rel.toward=Math.min(20,rel.toward+n);
}
function canVisit(id){
  if(!Object.hasOwn(visits,id))return false;
  if(id==="townhouse")return Boolean(state.flags.townhouse);
  if(id==="quarters")return state.month>=2||Boolean(state.people.mey);
  if(id==="company")return state.salesBook.length>0;
  return true;
}
const staffDutyMetric = {
  library:"품격", parlor:"청결", garden:"시설상태", kitchen:"청결", guard:"보안"
};
function trainHousehold(run){
  const changes=[];
  for(const [id,person] of Object.entries(run.people)){
    if(!servants[id]?.job)continue;
    const before=person.skill||0;
    person.skill=Math.min(30,before+run.annex.quarters);
    if(person.skill>before)changes.push(servants[id].name+" +"+(person.skill-before));
  }
  if(changes.length)run.log.push("사용인 실무 숙련도 · "+changes.join(" / "));
}
function shiftAssigned(room){return Object.entries(state.jobs).some(([p,r])=>r===room&&servants[p].job===room);}
function trustTier(n){return n>=9?3:n>=5?2:n>=3?1:0;}
function rank(n){return ["살피는 중","익숙함","의지함","속을 터놓음"][trustTier(n)];}

// Keep the original identifiers in saved games, snapshots and authored event conditions.
function statLabel(key){return key==="체력"?"지구력":key==="건강"?"컨디션":key;}
function statResultText(text){
  return text.replace(/(건강|체력)(?= (?:[+−–-]?\d|상승|하락|회복))/g,statLabel);
}
const stats = ["지성","기품","매력","경영","통찰","의지","체력"];
const abilityMax = 500;
function statMax(key){return stats.includes(key)?abilityMax:100;}
const actions = {
  study:{name:"서재 수업",cost:24,gains:{지성:12,통찰:4},stress:13},
  etiquette:{name:"귀족 예법",cost:27,gains:{기품:13,매력:6},stress:12},
  accounts:{name:"팬텀사 회계",cost:12,gains:{경영:14,지성:4},stress:15},
  inquiry:{name:"가문 기록 조사",cost:15,gains:{통찰:13,의지:7},stress:14},
  riding:{name:"승마",cost:22,gains:{체력:13,의지:5},stress:9,health:-4},
  letters:{name:"초대장 답신",cost:10,gains:{매력:12,기품:5},stress:8},
  rest:{name:"저택 휴식",cost:6,gains:{},stress:-25,health:13},
  walk:{name:"정원 산책",cost:0,gains:{체력:3},stress:-19,health:8}
};
for (const [id,[name,cost,gains,stress,health=0]] of Object.entries(extraActivities))
  actions[id]={name,cost,gains,stress,health};
const seasonalWeather={
  heat:{name:"폭염",fee:22,strain:7,stress:3,
    scene:"도련님, 오늘은 차를 테라스에 내지 않는 편이 좋겠습니다. 아침부터 온도계가 이 눈금까지 오른 건 저택의 6월 기록에도 없더군요."},
  cold:{name:"한파",fee:30,strain:9,stress:2,
    scene:"도련님, 커튼은 잠시 그대로 두시지요. 밤새 창 안쪽까지 얼었습니다. 올 12월은 기록적인 한파로 남겠군요. 차는 난롯가에 준비했습니다."}
};
function rollSeasonWeather(month,random=Math.random){
  const m=(month-1)%12+1;
  const kind=m===6?"heat":m===12?"cold":null;
  return kind&&random()<.4?kind:null;
}
function weatherFor(run){return seasonalWeather[run.weather]||null;}
function weatherWorkout(id){return id==="exercise"||id==="riding";}

const trainingRooms={study:"library",inquiry:"library",language:"library",etiquette:"parlor",dance:"parlor",social:"parlor"};
const facilities = {
  library:{name:"서재",cost:90,effects:[["수업별 성장치","+4","서재 수업 · 기록 조사 · 라틴어","개수할 때마다 · 피로 보정 전"]]},
  parlor:{name:"응접실",cost:100,effects:[["수업별 성장치","+4","귀족 예법 · 무도 · 사교 수업","개수할 때마다 · 피로 보정 전"],["가문 명성","+1","첫 개수 시"]]},
  kitchen:{name:"주방",cost:80,effects:[["월말 컨디션 회복","+6","개수할 때마다 · 최대 100"]]}
};
const products = {
  toys:{name:"목제 완구",research:0,unit:7,demand:[13,14,15,17,19,23],price:14},
  sweets:{name:"비스킷",research:54,unit:5,demand:[16,17,13,20,25,20],price:11},
  game:{name:"보드게임",research:95,unit:10,demand:[9,10,13,17,23,24],price:19},
  plush:{name:"봉제인형",research:82,unit:9,demand:[14,17,15,12,16,20],price:17},
  candy:{name:"사탕",research:48,unit:4,demand:[19,24,17,21,22,24],price:8},
  hamper:{name:"기념 선물 세트",research:125,unit:14,demand:[7,10,11,9,13,16],price:26}
};
const visits=Object.fromEntries(Object.entries(visiting).map(([id,[label]])=>[id,label]));

const productBuyers={
  toys:"런던 완구상회",plush:"리버티 완구점",game:"체스 클럽",sweets:"빅토리아 다실",candy:"역전 매점",hamper:"지역 호텔 조합"
};
const historicalTradeEvents={
  5:{title:"사우스켄싱턴 박람회",buyer:"사우스켄싱턴 역 앞 완구점",orders:{toys:8},demand:{toys:4,game:2}},
  18:{title:"여왕의 골든 주빌리",buyer:"주빌리 기념품상",orders:{toys:9,hamper:6},demand:{toys:2,hamper:7,sweets:4}},
  29:{title:"얼스 코트 이탈리아 박람회",buyer:"얼스 코트 인근 상점",orders:{toys:8,plush:7},demand:{toys:3,plush:6,game:3}}
};
function tradeBuyer(order){
  return historicalTradeEvents[order.tradeMonth]?.buyer||productBuyers[order.id];
}
const marketShifts={
  toyOrders:{title:"지방 완구점의 추가 주문",products:["toys","plush"],demand:4},
  toySurplus:{title:"창고 정리 할인전",products:["toys","game"],demand:-3},
  teaOrders:{title:"다과회 예약 증가",products:["sweets","candy","hamper"],demand:4},
  teaCancellations:{title:"연회 주문 취소",products:["sweets","hamper"],demand:-3},
  timberShortage:{title:"목재 하역 지연",products:["toys","game"],cost:2},
  timberArrival:{title:"목재 운반선 입항",products:["toys","game"],cost:-2},
  sugarShortage:{title:"설탕 경매가 상승",products:["sweets","candy"],cost:1},
  sugarArrival:{title:"정제당 대량 입고",products:["sweets","candy"],cost:-1}
};
function rollMarketShift(run){
  if(monthlyDraw(run,0x6d61726b)>=.35)return null;
  const eligible=Object.keys(marketShifts).filter(id=>marketShifts[id].products.some(p=>run.unlocked.includes(p)));
  return eligible[Math.floor(monthlyDraw(run,0x74726164)*eligible.length)]||null;
}
function tradeNews(run){
  const shift=marketShifts[run.marketShift];
  const notes=[];
  if(shift){
    const items=shift.products.map(id=>products[id].name).join("·");
    const change=shift.cost?"개당 재료비 "+(shift.cost>0?"+":"−")+"£"+Math.abs(shift.cost):"소매 수요 "+signed(shift.demand)+"개";
    notes.push(shift.title+" · "+items+" "+change);
  }
  const fair=historicalTradeEvents[run.month];
  if(!fair)return notes.join(" / ");
  const demand=Object.entries(fair.demand).map(([id,n])=>products[id].name+" +"+n+"개").join(" · ");
  return [...notes,fair.title+" · 이달 소매 수요 "+demand].join(" / ");
}
function productHistory(run,id){
  return run.productHistory?.[id]||{reputation:0,units:0,orders:0};
}
function recentRetail(run,id){
  return run.salesBook.filter(r=>r.product===id&&r.month>=run.month-3&&r.month<run.month)
    .reduce((sum,r)=>sum+r.sold,0);
}
function customerOffer(run,id){
  const line=productHistory(run,id);
  if(run.order||run.month>=run.duration||!run.unlocked.includes(id))return null;
  const qtyRequested=historicalTradeEvents[run.month]?.orders[id];
  if(qtyRequested)return {id,qty:qtyRequested,tradeMonth:run.month,due:run.month,shortFee:run.flags.checkedReceipt?1:2,rate:products[id].price+4};
  if(line.reputation<3)return null;
  const qty=Math.min(13,6+Math.floor(line.reputation/3)+line.orders);
  return {id,qty,due:run.month+1,shortFee:run.flags.checkedReceipt?1:2,rate:products[id].price+1+Math.min(3,line.orders)+(run.flags.sharedReceipt?1:0)};
}
function businessTerms(run,id){
  const p=products[id], note=run.productNotes?.[id];
  const material=note?.material==="select";
  return {cost:material?2:0,premium:material?2:0,
    skill:note?.lead==="maker"?1:0, reach:note?.lead==="sales"?2:0,
    pressure:Math.min(Math.ceil(p.demand[(run.month-1)%6]*0.60),Math.floor(recentRetail(run,id)/4))};
}
function operatingCost(shop){
  return Object.values(shop).reduce((sum,level)=>sum+5*(level-1)+(level>=3?6:0),0);
}
const profitContributionFloor=1600;
const profitContributionUpperBand=2100;
function profitContribution(run,margin,livingCosts){
  const reserve=Math.max(profitContributionFloor,run.accounts?.opening??run.fund);
  const retained=Math.min(margin,run.fund+margin-livingCosts-reserve);
  if(retained<=0)return 0;
  const firstBand=Math.min(retained,Math.max(0,profitContributionUpperBand-reserve));
  return Math.floor(firstBand*.65+(retained-firstBand)*.85);
}
function supplyPlan(run,shop,demand,unit,receipt,livingCosts=0){
  const id=run.product,order=run.order?.due===run.month?run.order:null;
  const stock={...run.stock},fine={...run.fineStock};
  stock[id]+=run.qty;
  if(run.quality==="fine")fine[id]=(fine[id]||0)+run.qty;
  // Wholesale buyers accept both grades. Ship standard stock first.
  const shipped=order?Math.min(stock[order.id],order.qty):0;
  if(order){
    stock[order.id]-=shipped;
    fine[order.id]=Math.min(fine[order.id]||0,stock[order.id]);
  }
  const available=run.quality==="fine"?(fine[id]||0):stock[id]-(fine[id]||0);
  const sold=Math.min(demand,available);
  stock[id]-=sold;
  if(run.quality==="fine")fine[id]-=sold;
  const holding=Math.max(0,Object.values(stock).reduce((n,v)=>n+v,0)-8);
  const short=order?order.qty-shipped:0;
  const freightAllowance=run.flags.carrierSpace?20:16;
  const freight=Math.max(0,sold+shipped-freightAllowance)*3;
  const expanded=Object.values(shop).reduce((sum,level)=>sum+level-1,0);
  const reserve=Math.min(330,expanded*100);
  const opening=run.accounts?.opening??run.fund;
  const guaranteeFee=expanded?Math.ceil(Math.max(0,reserve-Math.max(0,opening))/3):0;
  const trade={holding,freight,freightAllowance,guaranteeFee,operation:operatingCost(shop)+guaranteeFee,penalty:short*(order?.shortFee??2),wholesale:order?shipped*order.rate:0,shipped,short,order,stock,fine};
  const revenue=sold*receipt+trade.wholesale,cost=run.qty*unit;
  const baseExpenses=holding+freight+trade.penalty+trade.operation;
  trade.contribution=profitContribution(run,revenue-cost-baseExpenses,livingCosts);
  const expenses=baseExpenses+trade.contribution;
  return {unit,demand,receipt,sold,available,cost,revenue,expenses,margin:revenue-cost-expenses,trade};
}
function recordTrading(run,id,sold,trade){
  function add(key,units,reputation,orders=0){
    const old=productHistory(run,key);
    run.productHistory[key]={units:old.units+units,reputation:cap(old.reputation+reputation,20),orders:old.orders+orders};
  }
  const quality=run.quality==="fine"||run.productNotes?.[id]?.material==="select";
  add(id,sold,sold>=6?(quality?2:1):0);
  if(trade.order){
    add(trade.order.id,trade.shipped,trade.short?-2:2,trade.short?0:1);
    run.order=null;
  }
  run.stock=trade.stock;run.fineStock=trade.fine;
}
function restoreTrading(run){
  if(!run.productHistory){
    run.productHistory={};
    for(const row of run.salesBook){
      if(!products[row.product])continue;
      const line=productHistory(run,row.product);
      run.productHistory[row.product]={...line,units:line.units+row.sold,reputation:Math.min(20,line.reputation+(row.sold>=6?1:0))};
    }
  }
  if(!run.fineStock)run.fineStock=run.quality==="fine"?{[run.product]:run.stock[run.product]}:{};
}
