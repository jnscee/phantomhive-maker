"use strict";

function recruit(id){
  state.people[id]??={toward:2};
  if(servants[id].job)
    state.jobs[id]=servants[id].job;
}
function choice(label,result,effect,when,hint){return {label,result,effect,when,hint};}
function shift(key,n){if(stats.includes(key))changeStat(key,n);else if(["hp","stress","motivation"].includes(key))state[key]=cap(state[key]+n);else state[key]+=n;}
function effectChoice(row){
  const [label,result,changes,gate,hint]=row;
  return choice(label,result,()=>{
    for(const [key,n] of Object.entries(changes)){
      if(key==="recruit")recruit(n);
      else if(key==="flag")state.flags[n]=true;
      else if(key==="relation")talkTrust(n,2,1);
      else shift(key,n);
    }
  },gate,hint);
}
// Additional one-time events authored in the content editor.
const authoredEvents=[];
function authoredStoryEvents(){
  return authoredEvents.map(({id,month,title,room,track,lines,label,result})=>({
    id, title, track, authored:true, scheduled:true, text:lines[0][1],
    sees:run=>run.duration===35&&run.month===month,
    lines:lines.map(([speaker,text])=>[speaker,text,{room}]),
    prompt:["연출",result,{room}],
    choices:[choice(label,title,()=>{})]
  }));
}
function scriptedEvents(){
  const timed=[
    [5,"expo","박람회의 유리 진열장","전시 책임자가 완구 하나만 골라 달라고 합니다. 태엽 인형 곁에는 아이가 직접 굴릴 수 있는 작은 수레가 있습니다.",
      ["수레를 시연한다","팬텀사 인지도 상승",{renown:2}],["구동 구조를 기록한다","경영 +8",{경영:8}]],
    [9,"gardener","장미 줄기를 쥔 손","소년이 힘을 주자 삽자루가 갈라집니다. 시엘은 부러진 자루보다 온전한 뿌리를 먼저 봅니다.",
      ["온실 열쇠를 건넨다","피니안 합류 · 정원 담당",{recruit:"finny",flag:"greenhouse"}],["가벼운 일부터 가르친다","피니안 합류 · 기품 +3",{recruit:"finny",기품:3}]],
    [12,"birthday","열한 번째 생일","식탁 위에 초가 열한 개입니다. 시엘은 장부를 덮고, 빈 의자 하나를 잠깐 바라봅니다.",
      ["홍차와 케이크를 낸다","스트레스 −12",{stress:-12}],["도련님의 말을 기다린다","의지 +1",{의지:1}]],
    [15,"maid","창문 너머의 눈금","메이린이 먼 곳에 세운 작은 표식을 읽어 냅니다. 방금 깨뜨린 접시는 아직 발치에 있습니다.",
      ["저택의 시야를 맡긴다","메이린 합류 · 보안 기록 확보",{recruit:"mey",flag:"lookout"}],["타나카에게 교육을 맡긴다","메이린 합류",{recruit:"mey",trust:1}]],
    [18,"jubilee","황금빛 초대장","1887년 6월 21일, 여왕의 행렬이 웨스트민스터 사원으로 향합니다. 창가에서 보던 시엘이 돌아섭니다. 왕실 앞으로 보낼 가문의 서신이 아직 책상 위에 있습니다.",
      ["직접 가문을 소개한다","왕실 신뢰 상승",{royal:3},s=>s.stats.기품>=28,"기품 28"],["헌정 완구를 보낸다","가문 명성 상승",{renown:2}]],
    [19,"cook","불을 지키는 사람","바르도가 주방 문 앞에 섭니다. 구리 팬 하나, 들통 하나. 그가 익숙한 것은 큰 불 쪽입니다.",
      ["조리대를 맡긴다","바르도 합류 · 건강 +3",{recruit:"bard",hp:3}],["화구 수리부터 함께한다","바르도 합류 · 경영 +4",{recruit:"bard",경영:4}]],
    [24,"birthday2","열두 번째 생일","올해의 케이크 장식은 설탕으로 만든 체스 말입니다. 한 칸 움직이면 곧장 무너질 자리입니다.",
      ["먼저 한 수 둔다","통찰 +6",{통찰:6}],["도련님이 고를 때까지 둔다","의욕 +9",{motivation:9}]],
    [26,"visitPrince","타운하우스의 손님","소마는 자신이 가져온 찻잎을 내놓습니다. 아그니는 두 사람 몫보다 찻잔을 하나 더 꺼냅니다.",
      ["함께 차를 든다","소마·아그니와 교류 시작",{recruit:"soma",flag:"agni"}],["다음 방문을 약속한다","소마·아그니와 교류 시작 · 매력 +3",{recruit:"soma",flag:"agni",매력:3}]],
    [31,"match","상자에 남은 이름","런던의 성냥공장 파업 소식이 들어옵니다. 시엘은 팬텀사의 하청 명부도 가져오라고 합니다.",
      ["납품 조건을 조사한다","협력 공장 기록 확보",{flag:"audit",경영:7}],["직원 대표를 만난다","가문 명성 상승",{renown:2}]],
    [33,"chapel","화이트채플에서 온 전보","동부에서 들어온 전보에 수신인이 빠져 있습니다. 시엘은 봉투에 남은 우편 소인부터 살핍니다.",
      ["소인의 경로를 맞춘다","조사 기록 확보",{flag:"postmark",통찰:8},s=>s.stats.통찰>=33,"통찰 33"],["연락망을 정리한다","의지 +1",{의지:1}]]
  ];
  const fixed=timed.map(([month,id,title,text,a,b])=>({id,title,text,chapter:true,speaker:"세바스찬",sees:s=>s.month>=month&&(id==="visitPrince"?s.flags.townhouse:s.month<=month+2),choices:[a,b].map(effectChoice)}));
  const local=[
    ["study",3,"ink","번진 잉크","마지막 줄에서 잉크가 번졌습니다. 시엘은 답을 외운 채 새 종이를 달라고 합니다.","풀이를 말로 듣는다","지성",5,"잠시 펜을 놓는다","stress",-6],
    ["etiquette",3,"gloves","흰 장갑 한 켤레","세바스찬이 손님 역을 맡습니다. 장갑을 벗는 손의 순서가 지난번과 다릅니다.","그 까닭을 묻는다","통찰",5,"절을 다시 시킨다","기품",6],
    ["accounts",2,"pence","사라진 동전 한 닢","차변과 대변이 한 페니만큼 어긋납니다. 끝줄의 글씨가 조금 기울어 있습니다.","운임을 다시 본다","경영",6,"서명을 대조한다","통찰",5],
    ["inquiry",2,"seal","두 개의 봉랍","연도가 같은 편지 두 통에 찍힌 가문 인장의 테두리가 다릅니다.","장부 여백에 본을 뜬다","통찰",6,"타나카를 부른다","trust",1],
    ["riding",2,"rein","느슨한 고삐","말이 담장 앞에서 멈춥니다. 시엘은 고삐를 쥔 손부터 가만히 폅니다.","천천히 다시 돈다","체력",1,"오늘은 말의 보폭을 본다","통찰",4],
    ["letters",2,"salute","답신의 마지막 줄","상대가 보낸 편지에는 존칭이 하나 빠져 있습니다. 시엘의 펜촉이 공중에서 멎습니다.","정중하게 끝맺는다","기품",5,"같은 호칭을 돌려준다","의지",1],
    ["rest",4,"milk","식어 가는 밀크티","시엘의 책장이 한참 동안 넘어가지 않습니다. 잠든 손 곁에서 찻잔을 치웁니다.","커튼을 닫는다","hp",6,"저녁 일정을 비운다","stress",-8],
    ["walk",3,"rose","먼저 핀 장미","잎보다 먼저 색이 변한 꽃이 눈에 띕니다. 도련님이 걸음을 멈춥니다.","정원사가 한 일을 묻는다","통찰",4,"한 바퀴 더 걷는다","체력",1],
    ["language",2,"vowel","편지의 다른 뜻","번역하면 같은 말이지만, 한 단어만 상대의 계급을 드러냅니다.","문맥을 다시 읽는다","지성",5,"소리 내 읽어 본다","매력",5],
    ["music",2,"strings","끊어진 현","활이 멎자 처음으로 응접실의 시계 소리가 들립니다.","현을 갈고 다시 켠다","의지",1,"박자만 짚어 본다","기품",5],
    ["dance",2,"turn","왈츠의 셋째 박","시엘의 구두가 같은 자리를 두 번 밟습니다. 반주를 한 박 늦춥니다.","발밑부터 다시 본다","체력",1,"손을 잡아 박을 맞춘다","기품",5],
    ["social",2,"calling","남겨진 명함","손님의 명함 가장자리가 접혀 있습니다. 오늘 방문의 뜻이 거기에 있습니다.","답방을 약속한다","매력",5,"가문의 관습을 찾아본다","지성",5],
    ["negotiate",2,"quote","빈 가격란","견적서의 마지막 줄은 비었습니다. 액수를 먼저 쓰는 쪽이 값을 정하게 됩니다.","납기부터 확인한다","경영",6,"상대의 표정을 읽는다","통찰",5],
    ["exercise",2,"breath","체조실의 열린 창","마지막 동작에서 호흡이 흐트러집니다. 세바스찬이 창을 열고 물잔을 내려놓습니다.","창가에서 숨을 고른다","hp",6,"휴식 뒤 이어 간다","의지",1],
    ["practicum",2,"copy","먹지 두 장","장부 사본에 원본과 다른 숫자가 하나 남아 있습니다.","영수증을 찾는다","경영",6,"전표의 글씨를 본다","통찰",5],
    ["developToy",2,"axle","삐걱거리는 축","장난감 마차를 세 번 굴리자 한쪽 바퀴만 멎습니다.","축을 바꿔 본다","경영",6,"바닥을 바꿔 굴린다","통찰",6],
    ["supplier",2,"bolt","천의 뒷면","상인은 늘 견본의 앞면만 보여 줍니다. 시엘이 안감을 살짝 접습니다.","봉제 상태를 지적한다","경영",6,"다른 염색 천을 청한다","매력",4],
    ["estateWork",2,"roof","서쪽 지붕의 견적","같은 수리비가 지난달에도 청구되었습니다.","근무 일지를 본다","지성",5,"현장을 직접 찾는다","통찰",5],
    ["reception",2,"chair","한 자리의 거리","응접실에 놓인 의자 하나가 대화에서 비껴나 있습니다.","직접 자리를 옮긴다","매력",5,"좌석표를 고친다","기품",5],
    ["casework",2,"map","뒤집힌 약도","증인이 그린 골목에는 있어야 할 굴뚝이 없습니다.","창에 비춰 뒤집어 본다","통찰",6,"다른 목격자를 찾는다","의지",1],
    ["reading",2,"margin","책 가장자리의 연필","추리소설의 범인 옆에 누군가 이름을 써 두었습니다.","과정을 먼저 짚는다","통찰",5,"마지막 장까지 읽는다","지성",5],
    ["recovery",2,"noon","정오의 왕진","의사가 기침이 멎은 시간을 묻습니다. 시엘은 시계보다 먼저 창문을 봅니다.","낮잠을 연장한다","hp",7,"창가에서 햇빛을 쬔다","motivation",7],
    ["outing",2,"window","작은 진열창","어린 손님 둘이 같은 물건 앞에서 서로 다른 부분을 가리킵니다.","두 사람의 말을 듣는다","경영",5,"진열대를 그려 둔다","통찰",5]
  ];
  const personal=[
    {id:"bargainManners",title:"무례한 젊은 사업가",speaker:"세바스찬",text:"계약서에는 빈틈이 없습니다. 다만 상대는 악수도 하지 않고 돌아섰습니다.",sees:s=>s.stats.경영>=28&&s.stats.경영-s.stats.기품>=10,choices:[
      choice("답례 방문을 잡는다","기품 +6 · 왕실 신뢰 상승",()=>{shift("기품",6);shift("royal",1)}),
      choice("납품 약속에 집중한다","경영 +8",()=>shift("경영",8))]},
    {id:"teaPrivilege",title:"두 번째 잔",speaker:"세바스찬",text:"시엘이 빈 잔을 내려놓습니다. 명령을 기다릴 필요는 없었습니다. 세바스찬이 두 번째 잔을 채웁니다.",sees:s=>s.flags.quietTea>=3,choices:[
      choice("설탕을 하나 줄인다","둘만의 차 취향 기록 · 의욕 +6",()=>{state.flags.teaBlend=true;shift("motivation",6)}),
      choice("평소대로 따른다","스트레스 −6",()=>shift("stress",-6))]},
    {id:"agniTray",visitPlace:"townhouse",title:"빈 쟁반을 드는 법",speaker:"아그니",text:"아그니는 빈 쟁반을 거두는 동안에도 소마에게서 시선을 떼지 않습니다. 세바스찬이 그 손놀림을 지켜봅니다.",sees:s=>s.people.soma&&s.visit==="townhouse",choices:[
      choice("차를 올리는 순서를 묻는다","집사 교류 기록 · 소마의 신뢰 상승",()=>{state.flags.agniLesson=true;talkTrust("soma",2,1)}),
      choice("주인의 말을 기다린다","의지 +1",()=>shift("의지",1))]},
    {id:"greenhouseKey",visitPlace:"garden",title:"온실의 여벌 열쇠",speaker:"피니안",text:"피니안이 도련님의 손바닥에 열쇠를 놓습니다. 오늘은 먼저 들어가 보시겠느냐고 묻습니다.",sees:s=>s.people.finny?.toward>=5&&s.visit==="garden",choices:[
      choice("맡아 둔다","피니안의 신뢰 상승",()=>talkTrust("finny",2,2)),
      choice("함께 온실을 돈다","스트레스 −7",()=>shift("stress",-7))]}
  ];
  // Retain the former chapter only as a lookup for completed entries in older ledgers.
  const oldCircus={id:"circus",title:"비어 있는 천막",speaker:"스네이크",sees:()=>false,
    text:"스코틀랜드 야드가 노아의 방주 서커스단을 연행한 뒤, 한 소년만 우리 옆에 남았습니다. 뱀이 그의 소맷자락에 머리를 숨깁니다.",
    choices:[{label:"저택에 자리를 마련한다",result:"스네이크 합류"},{label:"우리의 행선지를 확인한다",result:"동물 보호 인계 기록"}]};
  return fixed.concat(oldCircus,snakeArrivalEvent(),personal,local.map(([act,n,id,title,text,a,k,x,b,j,y])=>({id,title,text,speaker:"세바스찬",slot:act,
    sees:s=>(s.counts[act]||0)>=n,choices:[
      choice(a,k==="trust"?"봉랍 확인을 요청함":(stats.includes(k)?k:({hp:"건강",stress:"스트레스",motivation:"의욕"}[k]))+" "+signed(x),()=>shift(k,x)),
      choice(b,j==="trust"?"봉랍 확인을 요청함":(stats.includes(j)?j:({hp:"건강",stress:"스트레스",motivation:"의욕"}[j]))+" "+signed(y),()=>shift(j,y))]})));
}

function initialEvents(){
  return [
  {id:"return",title:"서재 인수",speaker:"세바스찬",
   text:"요양 중인 타나카 씨가 열쇠와 장부를 보내셨습니다. 어느 쪽부터 보시겠습니까?",
   sees:s=>s.month===1,
   choices:[
     {label:"관리 권한 인수",effect:()=>{state.trust+=2; state.flags.keys=true;},result:"서재 관리 권한 인수"},
     {label:"가문 장부 확인",effect:()=>{state.flags.deed=true;changeStat("통찰",5);},result:"가문 증빙 확보 · 통찰 +5"}
   ]},
  {id:"discipline",title:"일정 과부하",speaker:"교육",
   text:"교육 반복 또는 스트레스로 일정 조정이 필요합니다.",
   sees:s=>s.stress>=55||Object.entries(s.counts).some(([id,count])=>actions[id].stress>0&&count>=4),
   choices:[
     {label:"교육 일정 완화",effect:()=>{state.stress=cap(state.stress-12);state.trust+=1;},result:"스트레스 -12"},
     {label:"기존 일정 유지",effect:()=>{changeStat("의지",1);state.motivation=cap(state.motivation-5);},result:"의지 +1 · 의욕 -5"}
   ]},
  {id:"proof",visitPlace:"library",title:"가문 장부 복원",speaker:"증빙",
   text:"가문 심의에 제출할 장부 원본을 발견했습니다.",
   sees:s=>s.month>=2&&!s.flags.deed&&(s.visit==="library"||s.counts.inquiry>=2),
   choices:[
     {label:"장부 복원",when:s=>s.stats.통찰>=19||s.trust>=3,hint:"통찰 19이면 복원 가능",effect:()=>{state.flags.deed=true;state.renown+=1;},result:"가문 증빙 확보 · 가문 명성 상승"},
     {label:"원본 보관",effect:()=>{state.trust+=2;},result:"장부 원본 보관"}
   ]},
  {id:"audience",visitPlace:"parlor",title:"여왕의 초청장",speaker:"왕실",
   text:"왕실에 가문의 활동 내역을 제출합니다.",
   sees:s=>s.month>=3&&(s.visit==="parlor"||s.month>=5),
   choices:[
     {label:"가문 책무 보고",when:s=>s.stats.기품>=24,hint:"기품 24",effect:()=>{state.royal+=3;state.renown+=1;},result:"왕실 평가 상승 · 가문 명성 상승"},
     {label:"팬텀사 회계 장부 제출",when:s=>s.stats.경영>=22,hint:"경영 22",effect:()=>{state.royal+=2;state.renown+=2;},result:"왕실 평가 상승 · 가문 명성 상승"},
     {label:"증빙 자료 요청",when:s=>s.stats.통찰>=24,hint:"통찰 24",effect:()=>{state.royal+=2;state.flags.deed=true;},result:"왕실 평가 상승 · 가문 증빙 확보"},
     {label:"세바스찬에게 접수 위임",effect:()=>{state.royal+=1;},result:"왕실 평가 소폭 상승"}
   ]},
  {id:"trade",visitPlace:"town",title:"거래처 협상",speaker:"팬텀사",
   text:"신규 거래처에서 납품 협의를 요청했습니다.",
   sees:s=>s.month>=2&&s.visit==="town",
   choices:[
     {label:"소량 납품 계약",effect:()=>{recordContractAdvance(32);state.renown+=1;},result:"선금 £32 · 가문 명성 상승"},
     {label:"시장 조사",effect:()=>{changeStat("경영",6);state.flags.market=true;state.marketMonth=state.month;},result:"경영 +6 · 다음 달 가문 명성 상승"}
   ]},
  {id:"room",title:"응접실 후속 접객",speaker:"저택",
   text:"응접실을 개수해 거래처를 추가로 접대할 수 있습니다.",
   sees:s=>s.month>=4&&s.level.parlor>=2,
   choices:[
     {label:"추가 접객 진행",effect:()=>{state.royal+=1;state.renown+=1;},result:"왕실 평가 상승 · 가문 명성 상승"},
     {label:"접객 일정 종료",effect:()=>{state.trust+=1;state.stress=cap(state.stress-8);},result:"스트레스 -8"}
   ]}
];
}
