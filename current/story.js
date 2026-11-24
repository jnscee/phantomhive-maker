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
// Additional one-time campaign events from the content editor.
const authoredEvents=[];
const authoredOptions={};
function authoredChoice([label,response,stat,amount,responseLines,route]){
  return {label,result:response,response,responseLines:responseLines?.length?responseLines:undefined,nextScene:route?.next,
    when:route?.stat?run=>run.stats[route.stat]>=route.min:undefined,
    hint:route?.stat?route.stat+" "+route.min+" 이상":"",
    effect:()=>{if(stat)shift(stat,amount);}
  };
}
function appendAuthoredOptions(event){
  if(!Object.hasOwn(authoredOptions,event.id)||visitEncounterCards.some(card=>card.id===event.id))return event;
  const choices=authoredOptions[event.id].map(authoredChoice);
  return {...event,choices:[...event.choices,...choices]};
}
function authoredStoryEvents(){
  return authoredEvents.map(({id,month,title,room,track,lines,label,result,picture,standing})=>({
    id,title,room,track,lines,picture,standing,linkedOnly:month===0,authored:true,text:lines[0][1],response:result,
    sees:run=>month>0&&run.duration===35&&run.month===month,
    choices:[choice(label,title,()=>{})]
  }));
}
// A decision is settled once, through the same event and monthly accounts as the campaign.
function fundedDecision(label,result,cost,account,effect){
  return choice(label+" · £"+cost,result,()=>{
    state.fund-=cost;
    state.accounts[account]+=cost;
    effect();
  },run=>run.fund>=cost,"자금 부족");
}
function finalYearDecisions(){
  return [
    {id:"winterAxles",month:26,title:"봉투에 든 바퀴",speaker:"세바스찬",
      text:"보증서는 없고, 부러진 나무 바퀴만 들어 있습니다. 편지를 쓴 아이가 답장은 그림으로 그려 달라는군요. 수레 주인인 동생은 아직 글을 모른답니다. 같은 축을 쓴 물량이 여섯 상자입니다.",
      choices:[
        fundedDecision("여섯 상자 모두 무상 교환한다","판매점마다 교환품을 두고 아이에게는 새 바퀴를 끼운 수레를 그려 보냈다. 가문 명성 +4",180,"company",()=>shift("renown",4)),
        choice("시엘이 판매 기록을 대조하게 한다","시엘은 축을 깎은 날짜까지 대조해 수리할 집을 골랐다. 통찰 +8 · 스트레스 +8",()=>{changeStat("통찰",8);shift("stress",8);})
      ]},
    {id:"carrierPlace",month:29,title:"마차의 빈 네 자리",speaker:"세바스찬",
      text:"운송업자가 연말까지 마차 네 자리를 비워 두겠답니다. 지금은 매달 열일곱 번째 물건부터 운임이 3파운드씩 붙지요. 계약하면 스무 개까지는 웃돈 없이 보낼 수 있습니다.",
      choices:[
        fundedDecision("정기 운송 자리를 계약한다","다음 출하부터 추가 운송비 없이 보낼 수 있는 월 물량이 16개에서 20개로 늘었다.",48,"company",()=>{state.flags.carrierSpace=true;}),
        choice("필요할 때마다 마차를 부른다","시엘이 마차를 부를 날짜만 장부에 표시했다. 경영 +6",()=>changeStat("경영",6))
      ]},
    {id:"estateRoof",month:32,title:"빗물 아래 놓인 악보",speaker:"세바스찬",
      text:"영지 학교의 음악실에서 비가 샌답니다. 아이들은 건반마다 찻잔을 얹어 물을 받고 있습니다. 수리공은 개학 전까지 한 주가 비고, 저택의 응접실도 그 주엔 손님이 없습니다.",
      choices:[
        fundedDecision("학교 지붕의 수리비를 맡는다","개학 날 아이들이 수리공과 도련님 앞으로 첫 연주회의 초대장을 보냈다. 가문 명성 +5",240,"estate",()=>shift("renown",5)),
        choice("저택 응접실을 수업에 내준다","도련님은 일주일 동안 피아노 연습을 들으며 결재했다. 가문 명성 +2 · 스트레스 +6",()=>{shift("renown",2);shift("stress",6);})
      ]}
  ].map(event=>({...event,season:true,sees:run=>run.duration===35&&run.month===event.month}));
}
function scriptedEvents(){
  const timed=[
    [5,"expo","박람회의 유리 진열장","전시 책임자가 완구 하나만 골라 달라고 합니다. 태엽 인형 곁에는 아이가 직접 굴릴 수 있는 작은 수레가 있습니다.",
      ["수레를 시연한다","팬텀사 인지도 상승",{renown:2}],["구동 구조를 기록한다","경영 +8",{경영:8}]],
    [12,"birthday","열한 번째 생일","식탁 위에 초가 열한 개입니다. 시엘은 장부를 덮고, 빈 의자 하나를 잠깐 바라봅니다.",
      ["홍차와 케이크를 낸다","스트레스 −12",{stress:-12}],["도련님의 말을 기다린다","의지 +5",{의지:5}]],
    [18,"jubilee","황금빛 초대장","1887년 6월 21일, 여왕의 행렬이 웨스트민스터 사원으로 향합니다. 창가에서 보던 시엘이 돌아섭니다. 왕실 앞으로 보낼 가문의 서신이 아직 책상 위에 있습니다.",
      ["직접 가문을 소개한다","왕실 신뢰 상승",{royal:3},s=>s.stats.기품>=28,"기품 28"],["헌정 완구를 보낸다","가문 명성 상승",{renown:2}]],
    [24,"birthday2","열두 번째 생일","올해의 케이크 장식은 설탕으로 만든 체스 말입니다. 한 칸 움직이면 곧장 무너질 자리입니다.",
      ["먼저 한 수 둔다","통찰 +6",{통찰:6}],["도련님이 고를 때까지 둔다","의욕 +9",{motivation:9}]],
    [31,"match","상자에 남은 이름","런던의 성냥공장 파업 소식이 들어옵니다. 시엘은 팬텀사의 하청 명부도 가져오라고 합니다.",
      ["납품 조건을 조사한다","협력 공장 기록 확보",{flag:"audit",경영:7}],["직원 대표를 만난다","가문 명성 상승",{renown:2}]],
    [33,"chapel","화이트채플에서 온 전보","동부에서 들어온 전보에 수신인이 빠져 있습니다. 시엘은 봉투에 남은 우편 소인부터 살핍니다.",
      ["소인의 경로를 맞춘다","조사 기록 확보",{flag:"postmark",통찰:8},s=>s.stats.통찰>=33,"통찰 33"],["연락망을 정리한다","의지 +5",{의지:5}]]
  ];
  const contestOverrides={expo:"kensington1886",jubilee:"jubilee1887"};
  const fixed=timed.map(([month,id,title,text,a,b])=>({id,title,text,chapter:true,speaker:"세바스찬",sees:s=>s.month>=month&&s.month<=month+2&&!Number.isInteger(s.fairBook?.[contestOverrides[id]]?.rank),choices:[a,b].filter(Boolean).map(effectChoice)}));
  // Dispatched by a completed investigation or the January turn opener.
  fixed.push({id:"gardener",title:recruitScenes.gardener.title,text:"연구소에서 빠져나온 S-012는 시엘에게 이름과 책을 받았다.",chapter:true,speaker:"세바스찬",sees:()=>false,
    choices:[effectChoice(["피니안 영입",recruitScenes.gardener.result,{recruit:"finny"}])]});
  fixed.push({id:"maid",title:recruitScenes.maid.title,text:"아침 홍차를 따르던 중 저택의 창이 깨진다.",chapter:true,speaker:"세바스찬",sees:()=>false,
    choices:[effectChoice(["메이린 영입",recruitScenes.maid.result,{recruit:"mey",flag:"lookout"}])]});
  fixed.push({id:"cook",household:true,chapter:true,speaker:"시엘",title:recruitScenes.cook.title,
    text:"서재에서 시엘은 세바스찬에게 미군 출신을 셰프로 고용하려는 이유를 묻는다.",
    sees:s=>s.month>=19&&s.people.finny&&s.people.mey&&!s.people.bard,
    choices:[effectChoice(["바르도 영입",recruitScenes.cook.result,{recruit:"bard"}])]});
  fixed.push({id:"circus",household:true,chapter:true,speaker:"스네이크",title:recruitScenes.circus.title,
    text:"단원들이 남긴 편지에서 백작의 이름을 읽은 스네이크가 런던의 타운하우스 문을 두드린다.",
    sees:s=>dueSnakeVisit(s)==="circus",
    choices:[effectChoice(["풋맨으로 맞는다",recruitScenes.circus.result,{recruit:"snake"}])]});
  fixed.push({id:"visitPrince",household:true,chapter:true,speaker:"소마",title:recruitScenes.visitPrince.title,
    text:"이스트엔드의 골목에서 시엘과 소마가 서로 다른 편에 선다. 이튿날 두 사람은 런던 집의 열쇠를 놓고 거래한다.",
    sees:townhouseGuestsDue,choices:[choice("두 사람에게 런던 집을 맡긴다",recruitScenes.visitPrince.result,()=>{
      recruit("soma");recruit("agni");state.flags.agni=true;
      scheduleSnakeVisit(state);
    })]});
  const local=[
    ["study",3,"ink","번진 잉크","마지막 줄에서 잉크가 번졌습니다. 시엘은 답을 외운 채 새 종이를 달라고 합니다.","풀이를 말로 듣는다","지성",5,"잠시 펜을 놓는다","stress",-6],
    ["etiquette",3,"gloves","흰 장갑 한 켤레","세바스찬이 손님 역을 맡습니다. 장갑을 벗는 손의 순서가 지난번과 다릅니다.","그 까닭을 묻는다","통찰",5,"절을 다시 시킨다","기품",6],
    ["accounts",2,"pence","사라진 동전 한 닢","차변과 대변이 한 페니만큼 어긋납니다. 끝줄의 글씨가 조금 기울어 있습니다.","운임을 다시 본다","경영",6,"서명을 대조한다","통찰",5],
    ["inquiry",2,"seal","두 개의 봉랍","연도가 같은 편지 두 통에 찍힌 가문 인장의 테두리가 다릅니다.","장부 여백에 본을 뜬다","통찰",6,"타나카에게 봉랍을 문의한다","trust",1],
    ["riding",2,"rein","느슨한 고삐","말이 담장 앞에서 멈춥니다. 시엘은 고삐를 쥔 손부터 가만히 폅니다.","천천히 다시 돈다","체력",5,"오늘은 말의 보폭을 본다","통찰",4],
    ["letters",2,"salute","답신의 마지막 줄","상대가 보낸 편지에는 존칭이 하나 빠져 있습니다. 시엘의 펜촉이 공중에서 멎습니다.","정중하게 끝맺는다","기품",5,"같은 호칭을 돌려준다","의지",5],
    ["rest",4,"milk","식어 가는 밀크티","시엘의 책장이 한참 동안 넘어가지 않습니다. 잠든 손 곁에서 찻잔을 치웁니다.","커튼을 닫는다","hp",6,"저녁 일정을 비운다","stress",-8],
    ["walk",3,"rose","먼저 핀 장미","잎보다 먼저 색이 변한 꽃이 눈에 띕니다. 도련님이 걸음을 멈춥니다.","정원사가 한 일을 묻는다","통찰",4,"한 바퀴 더 걷는다","체력",5],
    ["language",2,"vowel","편지의 다른 뜻","번역하면 같은 말이지만, 한 단어만 상대의 계급을 드러냅니다.","문맥을 다시 읽는다","지성",5,"소리 내 읽어 본다","매력",5],
    ["music",2,"strings","끊어진 현","활이 멎자 처음으로 응접실의 시계 소리가 들립니다.","현을 갈고 다시 켠다","의지",5,"박자만 짚어 본다","기품",5],
    ["dance",2,"turn","왈츠의 셋째 박","시엘의 구두가 같은 자리를 두 번 밟습니다. 반주를 한 박 늦춥니다.","발밑부터 다시 본다","체력",5,"손을 잡아 박을 맞춘다","기품",5],
    ["social",2,"calling","남겨진 명함","손님의 명함 가장자리가 접혀 있습니다. 오늘 방문의 뜻이 거기에 있습니다.","답방을 약속한다","매력",5,"가문의 관습을 찾아본다","지성",5],
    ["negotiate",2,"quote","빈 가격란","견적서의 마지막 줄은 비었습니다. 액수를 먼저 쓰는 쪽이 값을 정하게 됩니다.","납기부터 확인한다","경영",6,"상대의 표정을 읽는다","통찰",5],
    ["exercise",2,"breath","창가에서 한 호흡","창가에 닿자 숨이 찹니다. 세바스찬이 다음 발판에서 기다립니다.","걸어서 마친다","hp",6,"휴식 뒤 이어 간다","의지",5],
    ["practicum",2,"copy","먹지 두 장","장부 사본에 원본과 다른 숫자가 하나 남아 있습니다.","영수증을 찾는다","경영",6,"전표의 글씨를 본다","통찰",5],
    ["developToy",2,"axle","삐걱거리는 축","장난감 마차를 세 번 굴리자 한쪽 바퀴만 멎습니다.","축을 바꿔 본다","경영",6,"바닥을 바꿔 굴린다","통찰",6],
    ["supplier",2,"bolt","천의 뒷면","상인은 늘 견본의 앞면만 보여 줍니다. 시엘이 안감을 살짝 접습니다.","봉제 상태를 지적한다","경영",6,"다른 염색 천을 청한다","매력",4],
    ["estateWork",2,"roof","서쪽 지붕의 견적","같은 수리비가 지난달에도 청구되었습니다.","근무 일지를 본다","지성",5,"현장을 직접 찾는다","통찰",5],
    ["reception",2,"chair","한 자리의 거리","응접실에 놓인 의자 하나가 대화에서 비껴나 있습니다.","직접 자리를 옮긴다","매력",5,"좌석표를 고친다","기품",5],
    ["casework",2,"map","뒤집힌 약도","증인이 그린 골목에는 있어야 할 굴뚝이 없습니다.","창에 비춰 뒤집어 본다","통찰",6,"다른 목격자를 찾는다","의지",5],
    ["reading",2,"margin","책 가장자리의 연필","추리소설의 범인 옆에 누군가 이름을 써 두었습니다.","과정을 먼저 짚는다","통찰",5,"마지막 장까지 읽는다","지성",5],
    ["recovery",2,"noon","정오의 왕진","의사가 기침이 멎은 시간을 묻습니다. 시엘은 시계보다 먼저 창문을 봅니다.","낮잠을 연장한다","hp",7,"창가에서 햇빛을 쬔다","motivation",7],
    ["outing",2,"window","작은 진열창","어린 손님 둘이 같은 물건 앞에서 서로 다른 부분을 가리킵니다.","두 사람의 말을 듣는다","경영",5,"진열대를 그려 둔다","통찰",5]
  ];
  const personal=[
    {id:"bargainManners",title:"무례한 젊은 사업가",speaker:"세바스찬",text:"계약서에는 빈틈이 없습니다. 다만 상대는 악수도 하지 않고 돌아섰습니다.",sees:s=>s.stats.경영>=28&&s.stats.경영-s.stats.기품>=10,choices:[
      choice("답례 방문을 잡는다","기품 +6 · 왕실 신뢰 상승",()=>{shift("기품",6);shift("royal",1)}),
      choice("납품 약속에 집중한다","경영 +8",()=>shift("경영",8))]},
    {id:"teaPrivilege",title:"두 번째 잔",speaker:"세바스찬",lines:[["","시엘이 빈 잔을 내려놓는다. 명령을 기다릴 필요는 없었다. 세바스찬이 두 번째 잔을 채운다."]],sees:s=>s.flags.quietTea>=3,choices:[
      choice("설탕을 하나 줄인다","둘만의 차 취향 기록 · 의욕 +6",()=>{state.flags.teaBlend=true;shift("motivation",6)}),
      choice("평소대로 따른다","스트레스 −6",()=>shift("stress",-6))]},
    {id:"agniTray",narration:true,visitPlace:"townhouse",title:"빈 쟁반을 드는 법",speaker:"아그니",text:"아그니는 빈 쟁반을 거두는 동안에도 소마에게서 시선을 떼지 않는다. 세바스찬이 그 빈틈없는 손놀림을 유심히 지켜본다.",sees:s=>s.people.agni&&s.visit==="townhouse",choices:[
      choice("차를 올리는 순서를 묻는다","집사 교류 기록 · 소마의 신뢰 상승",()=>{state.flags.agniLesson=true;talkTrust("soma",2,1)}),
      choice("주인의 말을 기다린다","의지 +5",()=>shift("의지",5))]},
    {id:"greenhouseKey",narration:true,visitPlace:"garden",title:"온실의 여벌 열쇠",speaker:"피니안",text:"피니안이 도련님의 손바닥에 작은 열쇠를 살며시 올려놓는다. 오늘은 먼저 들어가 보시겠느냐고 해맑게 묻는다.",sees:s=>s.people.finny?.toward>=5&&s.visit==="garden",choices:[
      choice("맡아 둔다","피니안의 신뢰 상승",()=>talkTrust("finny",2,2)),
      choice("함께 온실을 돈다","스트레스 −7",()=>shift("stress",-7))]}
  ];
  return fixed.concat(personal,local.map(([act,n,id,title,text,a,k,x,b,j,y])=>({id,title,text,speaker:"세바스찬",slot:act,
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
     {label:"기존 일정 유지",effect:()=>{changeStat("의지",5);state.motivation=cap(state.motivation-5);},result:"의지 +5 · 의욕 -5"}
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

function recordedChoice(run,id){
  return run.events.find(entry=>entry.id===id)?.index;
}
function storyLine(event){
  return event.rememberedText ? event.rememberedText(state) : (event.lines?.[0]?.[1]??event.text);
}
function visitMemory(place,person){
  if(!person)return null;
  for(const entry of state.events){
    if(entry.month>=state.month||state.visitMemories?.[entry.id])continue;
    const memory=visitRecollections[entry.id];
    if(memory?.place===place&&memory.person===person&&memory.lines[entry.index])
      return {id:entry.id,line:memory.lines[entry.index]};
  }
  return null;
}
const visitRecollections={
  postalReply:{place:"library",person:"tanaka",lines:[
    "화이트채플에서 온 두 통은 한 봉투에 묶어 두었습니다. 다음에 찾으실 때도 나란히 꺼내 드리지요.",
    "제보자 앞으로 보낸 봉투가 아직 돌아오지 않았습니다. 답신이 오면 이 칸부터 먼저 살피시지요."]},
  greenhouseKey:{place:"garden",person:"finny",lines:[
    "도련님, 오늘은 제가 노크할게요! 지난번에 열쇠를 맡아 주셨잖아요!",
    "지난번에 같이 보신 그 봉오리예요! 오늘 아침에 활짝 벌어졌어요!"]},
  finnyRoseLabel:{place:"garden",person:"finny",lines:[
    "오늘은 돌아가며 보실 필요 없어요. 제 쪽에서 제가 바로 읽어 드릴게요!",
    "장부의 네 번째 줄이 바로 여기예요. 비가 와도 번호는 그대로라서 금방 찾았어요!"]},
  bardSupper:{place:"kitchen",person:"bard",lines:[
    "오늘도 한 숟갈 덜어 놨습니다. 간 보실 주인님이 계시니까요.",
    "도련님 접시는 바로 이 뚜껑 밑에 있습니다. 오늘은 식지 않고 따뜻할 겁니다."]},
  linenMarks:{place:"quarters",person:"mey",lines:[
    "파란 실은 손님방, 흰 실은 도련님 방! 이번엔 수건이 딱 제자리를 찾아갔다요!",
    "개킨 쪽으로 손을 넣으면 작은 수건부터 쏙 잡힌다요! 도련님이 보신 그대로예요!"]}
};
function followupEvents(){
  const after=(s,id)=>s.events.some(e=>e.id===id&&(e.month==null||e.month<s.month));
  return [
    {id:"finnyRoseLabel",visitOnly:true,visitPlace:"garden",title:"장미의 표찰",speaker:"피니안",
     text:"도련님 쪽에서 읽으시게 꽂았는데, 물을 줄 때마다 제가 자꾸 거꾸로 읽어요. 이 이름표, 다시 쓸까요?",
     sees:s=>s.visit==="garden"&&!!s.people.finny,
     responses:["그럼 이번엔 제가 읽는 쪽으로요! 내일 꽃이 피면 제가 제일 먼저 달려가서 알려 드릴게요!","장부 순서대로 하나, 둘…… 아! 그럼 잉크가 물에 번져도 어느 화분인지 금방 알겠어요!"],
     choices:[choice("네 글씨대로 둬. 화분을 돌리면 되잖아.","표찰의 방향을 피니안에게 맡겼다.",()=>{}),
              choice("화분 번호를 장부에도 적어 두지.","장미의 번호를 정원 장부에 옮겼다.",()=>{})]},
    {id:"bardSupper",visitOnly:true,visitPlace:"kitchen",title:"식기 전에",speaker:"바르도",
     text:"수프는 다 끓었는데 은쟁반이 아직 안 왔군요. 손님 몫을 다시 끓일까요, 도련님?",
     sees:s=>s.visit==="kitchen"&&!!s.people.bard,
     responses:["그럼 여기, 제일 작은 숟가락입니다. 냄비 위에서 드셨단 말은 입 밖에도 안 내겠습니다.","뚜껑이 꼭 맞는 그릇이라…… 과연. 불을 다시 지필 필요도 없겠군요."],
     choices:[choice("내가 먼저 간을 보지.","바르도가 맛볼 몫을 덜어 두었다.",()=>talkTrust("bard")),
              choice("한 그릇 덜어서 덮어 둬.","바르도가 시엘의 접시를 따로 덮었다.",()=>shift("hp",2))]},
    {id:"linenMarks",visitOnly:true,visitPlace:"quarters",title:"리넨장 맨 윗칸",speaker:"메이린",
     text:"으아앗, 손님방 수건이 또 도련님 방에 들어갔습니다요! 글씨가 어찌나 비슷한지 도통…….",
     sees:s=>s.visit==="quarters"&&!!s.people.mey&&(!s.people.snake||s.month%2===1),
     responses:["실 색깔이야 저도 금방 알아봅니다요! 얼른 바느질 상자를 가져올게요!","아! 손끝만으로도 크기를 딱 알겠다요! 맨 윗칸부터 죄다 다시 개겠습니다요!"],
     choices:[choice("가장자리에 다른 색 실을 달아.","메이린이 두 색의 실로 수건을 표시했다.",()=>talkTrust("mey")),
              choice("접는 방향을 달리해 봐.","메이린이 손으로 수건을 구분하게 됐다.",()=>changeStat("통찰",2))]},
    {id:"supplierReply",chapter:true,speaker:"세바스찬",title:"인수증의 두 번째 장",text:"공장에서 회신이 왔습니다.",
     rememberedText:s=>(s.flags.audit||recordedChoice(s,"match")===0)?"조사하신 하청 명부에 같은 작업장의 이름이 두 번 있습니다. 오늘 온 인수증에는 이름 하나가 지워져 있군요.":"지난번에 만나신 직원 대표가 인수증 사본을 보냈습니다. 일한 사람들에겐 한 장도 돌아가지 않았답니다.",
     sees:s=>after(s,"match"),choices:[choice("다음 납품 때 사본을 양쪽에 보내.","양쪽에 인수증을 보냈다. 새 재주문에서 개당 대금 +£1.",()=>{state.flags.sharedReceipt=true;shift("renown",1)}),
       choice("경리 담당에게 두 장을 대조시켜.","대조 절차를 마련했다. 새 재주문의 미납 부담이 개당 £1로 감소한다.",()=>{state.flags.checkedReceipt=true;changeStat("경영",5)})]},
    {id:"postalReply",chapter:true,speaker:"세바스찬",title:"회송 봉투",text:"화이트채플에서 답신이 왔습니다.",
     rememberedText:s=>(s.flags.postmark||recordedChoice(s,"chapel")===0)?"도련님께서 읽으신 소인을 토대로 우체국에서 회신을 보내왔습니다. 해당 전보는 이틀 동안 한 창구에 묵혀 있었다더군요.":"지난번 정리하신 연락망에서 답이 왔습니다. 세 곳에서 똑같은 전보를 수령했는데, 정작 회신할 주소가 제각각입니다.",
     sees:s=>after(s,"chapel"),choices:[choice("원본과 답신을 한 봉투에 넣어.","화이트채플 서신을 가문 기록에 보관했다.",()=>changeStat("통찰",5)),
       choice("첫 제보자에게 확인을 부탁해.","첫 제보자에게 답장을 보냈다.",()=>changeStat("의지",5))]},
    {id:"snakeReturn",speaker:"스네이크",title:"돌아오는 길",text:"갈 곳이 없으면 오랬지? 아직 우리 자리가 있어? ⋯라고 에밀리가 말했어.",
     sees:()=>false,choices:[choice("네 자리는 비워 뒀어. 들어와.","스네이크가 돌아와 풋맨으로 일한다.",()=>recruit("snake"))]}
  ];
}
