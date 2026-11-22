"use strict";

// Scene names also identify the replaceable background and sprite files.
const stageNames = {
  library:"저택 서재", ballroom:"대연회장", office:"팬텀사 제작소", archive:"가문 문서고",
  field:"승마장", gym:"저택 체조실", garden:"장미 정원", music:"음악실", bedroom:"도련님의 침실", street:"런던 상점가"
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

// Room, acting sequence, blocking, prop animation, and scene direction are authored per activity.
const choreography = {
  study:["library","read turn","read","page","책갈피가 꽂힌 곳을 펴고, 어제 푼 문제의 다음 줄을 읽습니다."],
  etiquette:["ballroom","greet bow","bow","glint","발끝을 모으고 손을 가슴에 얹습니다. 이번 인사는 정확히 세 박자입니다."],
  accounts:["office","accounts-0 accounts-1 accounts-2 accounts-3","write","coin","원장 왼쪽의 매입가를 짚고 오른쪽에 남은 금액을 적습니다."],
  inquiry:["archive","inquiry-0 inquiry-1 inquiry-2 inquiry-3","search","lens","장부를 등불에 비춥니다. 종이를 긁어 고친 흔적이 보입니다."],
  riding:["field","trot1 trot2 trot3 trot4","ride","dust","고삐를 짧게 쥐고 울타리를 따라 한 바퀴 돕니다."],
  letters:["library","letters-0 letters-1 letters-2 letters-3","write","letter","청첩장을 접고 봉인 위에 가문의 인장을 누릅니다."],
  rest:["bedroom","cupUp cupDown","rest","steam","찻잔을 내려놓고 벽난로의 장작이 타는 소리를 듣습니다."],
  walk:["garden","step1 step2","walk","leaf","정원 길을 천천히 걷습니다. 온실 앞에서 보폭이 한결 느려집니다."],
  language:["library","language-0 language-1 language-2 language-3","recite","speech","라틴어 편지 한 줄을 소리 내어 읽고, 강세를 고쳐 다시 읽습니다."],
  music:["music","bowOut bowIn","play","notes","활을 현 위에 얹습니다. 네 마디를 끊지 않고 이어 봅니다."],
  dance:["ballroom","waltz1 waltz2","waltz","beat","마룻바닥의 무늬를 따라 세 걸음, 반 바퀴 돌아 제자리로 옵니다."],
  social:["ballroom","social-0 social-1 social-2 social-3","meet","speech","손님에게 먼저 인사를 건네고 대답이 끝날 때까지 기다립니다."],
  negotiate:["office","negotiate-0 negotiate-1 negotiate-2 negotiate-3","meet","contract","견적서를 밀어 둡니다. 상대가 먼저 가격을 부를 차례입니다."],
  exercise:["gym","exercise-0 exercise-1 exercise-2 exercise-3","stretch","beat","팔을 양옆으로 편 뒤, 호흡에 맞춰 무릎을 들어 올리고 균형을 잡습니다."],
  practicum:["office","practicum-0 practicum-1 practicum-2 practicum-3","count","coin","제작실에서 넘어온 영수증을 집어 들고 금액과 잔돈을 대조합니다."],
  developToy:["office","developToy-0 developToy-1 developToy-2 developToy-3","search","toy","장난감 기차를 작업대에 올리고 앞바퀴가 축에 맞물리는지 확인합니다."],
  supplier:["street","supplier-0 supplier-1 supplier-2 supplier-3","inspect","delivery","진열창 앞에 멈춰 견본의 마감과 납기표를 대조합니다."],
  estateWork:["archive","estateWork-0 estateWork-1 estateWork-2 estateWork-3","write","stamp","수선 요청서를 먼저 읽고 결재가 끝난 문서를 왼편에 쌓습니다."],
  reception:["ballroom","reception-0 reception-1 reception-2 reception-3","toast","glint","잔을 들어 손님들에게 인사하고, 건배가 끝날 때까지 기다립니다."],
  casework:["street","casework-0 casework-1 casework-2 casework-3","search","lens","골목의 발자국을 살핀 뒤 수첩에 현장 약도를 그립니다."],
  reading:["bedroom","reading-0 reading-1 reading-2 reading-3","read","page","오늘은 교본 대신 추리소설을 무릎 위에 올려 둡니다."],
  recovery:["bedroom","recovery-0 recovery-1 recovery-2 recovery-3","rest","sun","약속을 미룬 오후입니다. 해가 기울 때까지 안락의자에서 쉽니다."],
  outing:["street","outing-0 outing-1 outing-2 outing-3","browse","leaf","마차에서 내려 쇼윈도를 구경합니다. 약속한 시각 전에 돌아갑니다."]
};
const actionFrames=["social","negotiate","exercise","practicum","casework","reading","recovery","outing","accounts","inquiry","letters","language","developToy","supplier","estateWork","reception"];
for(const activity of actionFrames){
  for(let frame=0;frame<4;frame++)actors[activity+"-"+frame]="assets/sprites/"+activity+"-"+frame+".png";
}
const extraActivities = {
  language:["라틴어",23,{지성:8,매력:6},10],music:["바이올린",25,{기품:8,의지:5},8],
  dance:["무도 수업",25,{기품:8,체력:5},10],social:["사교 수업",20,{매력:10,기품:4},9],
  negotiate:["협상",16,{경영:8,통찰:7},11],exercise:["체력 단련",8,{체력:10,의지:4},11,-3],
  practicum:["회계 실습",5,{경영:10,지성:3},8],developToy:["상품 개발 실습",10,{경영:8,통찰:5},9],
  supplier:["거래처 방문",8,{매력:7,경영:7},10,-2],estateWork:["저택 사무",3,{지성:6,경영:5},7],
  reception:["사교 행사",24,{매력:11,기품:6},13,-2],casework:["사건 조사",14,{의지:12,통찰:8},13,-3],
  reading:["자유 독서",0,{지성:3},-11,3],recovery:["요양",22,{},-28,23],outing:["시내 외출",10,{매력:3},-17,5]
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
  snake:{name:"스네이크",home:"quarters",job:"guard"}, soma:{name:"소마",home:"townhouse",job:null}
};
const annex = {
  bedroom:{name:"침실",cost:75,desc:"개수마다 휴식·요양의 건강 회복 +5"},
  garden:{name:"정원",cost:65,desc:"개수마다 산책의 스트레스 5 추가 감소"},
  guard:{name:"경비실",cost:80,desc:"개수마다 월 손실 £8 절감 · 추가 유지비 £2를 뺀 순절감 £6"},
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
  townhouse:["런던 타운하우스","soma","차가 식기 전에 소마가 옆자리를 권합니다. 아그니가 주전자를 들어 올립니다."]
};
function calendarDate(turn,day=1){return new Date(Date.UTC(1886,turn-1,day));}
function monthText(turn){const d=calendarDate(turn);return d.getUTCFullYear()+"년 "+(d.getUTCMonth()+1)+"월";}
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
function rank(n){return n>=9?"속을 터놓음":n>=5?"의지함":n>=3?"익숙함":"살피는 중";}

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
const courseIds=categories.slice(0,2).flatMap(([,ids])=>ids);
const trainingRooms={study:"library",inquiry:"library",language:"library",etiquette:"parlor",dance:"parlor",social:"parlor"};
const facilities = {
  library:{name:"서재",cost:90,desc:"개수마다 서재 수업·기록 조사·라틴어의 각 성장치 +4 (피로 보정 전)"},
  parlor:{name:"응접실",cost:100,desc:"개수마다 귀족 예법·무도·사교 수업의 각 성장치 +4 (피로 보정 전) · 첫 개수 시 명성 +1"},
  kitchen:{name:"주방",cost:80,desc:"개수마다 월말 건강 회복 +6 (건강 상한 100)"}
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
