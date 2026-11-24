"use strict";

function recruit(id){
  state.people[id]??={toward:2};
  if(servants[id].job)
    state.jobs[id]=servants[id].job;
}
function choice(label,result,effect,when,hint){return {label,result:statResultText(result),effect,when,hint};}
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
    hint:route?.stat?statLabel(route.stat)+" "+route.min+" 이상":"",
    effect:()=>{if(stat)shift(stat,amount);}
  };
}
function appendAuthoredOptions(event){
  if(event.setback||!Object.hasOwn(authoredOptions,event.id)||visitEncounterCards.some(card=>card.id===event.id))return event;
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

const companyCases = [
  {
    id:"merchantBlueReceipt", title:"두 번째로 돌아온 영수증", month:2, gate:"toys", award:1, correct:0,
    lines:[
      ["","오후의 마지막 손님이 계산대 위에 영수증을 쫙 폈다. 이 가게에서는 손님을 두 번씩 오게 하느냐고, 문밖까지 들릴 만큼 큰 소리로 물었다."],
      ["세바스찬","어제 목제 완구를 돌려주셨는데 아직 한 푼도 못 받으셨답니다."],
      ["시엘","어제 돌려준 돈은 어디 적었지?"]
    ],
    evidence:[
      ["손님의 영수증","27번 영수증 귀퉁이에 반달 모양 구멍이 있다. 계산대의 환불 집게를 대니 이 빠진 자리까지 포개진다."],
      ["어제의 현금 출납장","‘27번, 전액 반환.’ 그 옆에 손님이 쓴 수령 서명이 있다. 오늘 항의장에 그은 길쭉한 마지막 획과 같다."]
    ],
    question:"같은 영수증을 들고 온 손님에게 무엇을 내보일까?",
    answers:[
      ["서명과 환불 자국을 나란히 보여 준다","시엘이 두 종이를 돌려 놓자 손님은 자기 서명이 보이는 부분부터 손으로 덮었다. 줄 서 있던 사람들이 길을 비켰고, 손님은 조용히 가게를 나갔다."],
      ["물건을 받은 창고지기에게 책임을 묻는다","창고지기는 반품한 완구를 찾아왔다. 돌려받은 것이 완구라는 사실은 확인했지만, 손님이 묻던 돈 이야기는 처음부터 다시 해야 했다."],
      ["다음 영업일에 다시 오시라고 한다","손님은 영수증을 접어 주머니에 넣었다. 다음 장날 점원이 같은 사연을 처음부터 받아 적었다."]
    ]
  },
  {
    id:"merchantAlphabet", title:"B가 둘인 알파벳", month:3, gate:"toys", award:1, correct:1,
    lines:[
      ["","어린 손님이 알파벳 나무패를 늘어놓았다. 자기 이름인 DORA를 보여 주고 싶은데 상자에 D가 없단다. 점원은 아이가 집에서 잃어버렸을 거라고 했다."],
      ["시엘","잃어버린 글자라면 왜 B가 하나 남는지부터 대답해 봐."]
    ],
    evidence:[
      ["아이의 나무패","패는 꼭 스물여섯 개다. B가 두 개이고 D가 없다. 두 B 모두 모서리에 갓 마른 파란 칠이 남았다."],
      ["아직 봉한 견본","시엘 앞에서 같은 날 만든 상자의 봉인을 뜯었다. 그 안에도 B가 둘이고 D가 없다."]
    ],
    question:"이 아이에게만 새 패를 주면 일이 끝날까?",
    answers:[
      ["아이 집에 다른 한 벌이 섞였는지 묻는다","아이는 집에 나무패가 이 한 벌뿐이라고 두 번 대답해야 했다. 기다리던 어머니가 상자째 안고 돌아갔다."],
      ["같은 날 포장한 상자를 열어 D를 맞춰 준다","점원이 새 D를 건네자 아이는 곧장 DORA를 완성했다. 시엘은 같은 날 나간 상자의 주소를 받아 적었고, 아이는 구경꾼들에게 제 이름을 소리 내 읽어 주었다."],
      ["B 하나에 종이로 D를 붙여 준다","아이는 그날 자기 이름을 만들었다. 이튿날 다른 아이가 똑같은 B 두 개를 계산대에 올렸다."]
    ]
  },
  {
    id:"merchantWindowStock", title:"창고에서 사라진 세 벌", month:4, gate:"stock", award:1, correct:2,
    lines:[
      ["세바스찬","실물 재고가 장부보다 세 벌 모자랍니다. 창고지기는 제 품삯에서 빼 달라고 하더군요."],
      ["","시엘은 임금 봉투를 서랍에 밀어 넣고, 가게를 열던 아침에 누가 먼저 열쇠를 받았는지 물었다."]
    ],
    evidence:[
      ["진열 담당의 수첩","‘창문에 한 벌, 판매대 양 끝에 한 벌씩.’ 오늘 날짜 아래로 세 자리의 진열도를 그려 놓았다."],
      ["바닥에 붙은 꼬리표","세 진열대 밑에서 같은 창고 번호가 나왔다. 모두 판매용 재고 꼬리표 위에 ‘진열 중’이라고만 덧썼다."]
    ],
    question:"사라진 세 벌을 장부 어디서 찾아야 할까?",
    answers:[
      ["밤에 드나든 사람이 있었는지 경비를 세운다","다음 날 아침에도 문은 멀쩡했다. 창고지기는 세 벌이 어디 갔느냐는 같은 질문을 다시 들었다."],
      ["다음 생산분 세 벌을 창고에 더 보낸다","빈칸은 잠시 메워졌다. 저녁에 창문을 비우자 돌아온 세 벌을 적을 자리가 또 없었다."],
      ["진열품을 장부에 따로 적고 수량을 맞춘다","시엘이 창문에서 한 벌을 들어 보이자 창고지기가 제 손글씨를 알아봤다. 세 벌 모두 진열란에 옮겨 적고 임금 봉투도 온전히 돌려줬다."]
    ]
  },
  {
    id:"merchantBiscuitTin", title:"벽난로 옆 자리", month:5, gate:"sweets", award:1, correct:0,
    lines:[
      ["","다실 주인이 비스킷 두 통을 놓았다. 하나는 손으로 가볍게 꺾였고, 다른 하나는 눅눅해서 휘었다. 둘 다 어제 막 열었다고 했다."],
      ["시엘","어느 쪽 손님이 까다로운지는 나중에 들어. 두 통이 어제 어디 있었지?"]
    ],
    evidence:[
      ["제과장의 검식 쪽지","두 통은 같은 판에서 구운 것을 나눠 담았다. 공장에 남긴 세 번째 통의 비스킷도 오늘 아침 바삭하게 부러졌다."],
      ["다실의 자리 그림","눅눅한 쪽만 밤새 김 오르는 찻주전자 바로 위 선반에 있었다. 그 통의 뚜껑은 가장자리가 찌그러져 꼭 닫히지 않는다."]
    ],
    question:"이번 한 통을 어떻게 처리할까?",
    answers:[
      ["찌그러진 통을 바꿔 주고 보관 자리를 옮긴다","새 통은 벽난로 건너편 마른 찬장에 들어갔다. 사흘 뒤 다실 주인은 편지 대신 반으로 똑 부러진 비스킷 하나를 보냈다."],
      ["같은 날 구운 비스킷을 전부 거둬들인다","다른 다실에서 돌아온 비스킷은 모두 바삭했다. 주전자가 놓인 선반에서만 다음 통이 또 눅눅해졌다."],
      ["손님들이 봉인을 먼저 뜯었다고 답장한다","다실 주인은 손님 오기 전에 제 손으로 열었다며 답장을 돌려보냈다. 찌그러진 통도 함께 돌아왔다."]
    ]
  },
  {
    id:"merchantDeliveryBell", title:"종이 울리기 전의 납품", month:6, gate:"orders", award:1, correct:1,
    lines:[
      ["","거래처에서 납품을 받지 못했다는 편지가 왔다. 마부는 직접 상자를 내려놓았으며, 학교 종이 치기 전이었다고 기억했다."],
      ["세바스찬","마부와 거래처 주인 모두 같은 골목, 같은 번지를 부르십니다."]
    ],
    evidence:[
      ["인수증의 서명","마부가 받은 서명 아래에는 ‘아래층 보관, 메리’라고 적혀 있다. 발주서 맨 아래에는 ‘위층 매장, 주인에게 직접’이라는 줄이 있다."],
      ["아래층의 쪽지","같은 건물의 제본소에서 ‘이웃 가게가 열기 전 맡아 둔 상자가 아직 계단을 막고 있다’고 전해 왔다."]
    ],
    question:"새 물량을 보내기 전에 누구를 만날까?",
    answers:[
      ["마구간에서 다른 마부를 부른다","새 마부는 거래처 문 앞에 섰지만 손에 든 것이 없었다. 아래층에서 종이 나르는 사람들만 상자를 힘겹게 넘어 다녔다."],
      ["아래층 보관분을 위층 주인에게 인계한다","제본소의 메리가 상자를 내밀었다. 위층 주인이 그 자리에서 두 번째 서명을 하고, 메리에게는 점심에 먹을 따뜻한 파이를 보냈다."],
      ["거래처에 서명이 있으니 배달은 끝났다고 알린다","위층 주인은 메리가 자기 이름이 아니라는 짧은 답장을 보냈다. 상자는 여전히 아래층에 있었다."]
    ]
  },
  {
    id:"merchantRedDeck", title:"열리지 않는 성문", month:7, gate:"game", award:1, correct:2,
    lines:[
      ["","체스 클럽에서 새 보드게임을 일곱 번이나 두었는데 한 사람도 성문을 통과하지 못했다고 한다. 시엘은 여덟 번째 판을 시작하는 대신 상자를 비웠다."],
      ["시엘","설명서대로 열쇠를 받으라는데, 대체 어디서 받지?"]
    ],
    evidence:[
      ["규칙서의 첫 장","내용물은 빨간 문장 카드 열두 장과 푸른 열쇠 카드 열두 장이다. 성문을 열려면 푸른 카드 한 장을 내야 한다."],
      ["클럽의 카드 두 묶음","두 묶음 모두 뒷면이 빨갛다. 펼쳐 보니 문장만 똑같이 두 장씩이고, 푸른 카드는 한 장도 없다."]
    ],
    question:"다음 판을 제대로 두려면 무엇을 바꿔야 할까?",
    answers:[
      ["첫 번째 차례의 사람에게 문을 열어 준다","첫 사람은 성문을 통과했다. 두 번째 사람은 여전히 없는 카드를 내야 해서 그 자리에서 판을 접었다."],
      ["규칙서에서 성문을 지운다","일행은 성문을 건너뛰고 끝까지 갔다. 이번에는 뭘 두고 경쟁한 셈이냐는 편지가 왔다."],
      ["중복된 문장 묶음을 열쇠 묶음으로 교환한다","여덟 번째 판에서 가장 어린 회원이 열쇠를 냈다. 클럽은 첫 승자의 이름 밑에 누락된 카드를 찾아준 팬텀사의 이름도 적었다."]
    ]
  },
  {
    id:"merchantRabbitEar", title:"토끼가 기우는 쪽", month:8, gate:"plush", award:1, correct:1,
    lines:[
      ["","백화점에서 봉제 토끼 한 줄을 돌려보냈다. 왼쪽 귀만 축 늘어져 진열대에서 졸고 있는 것 같다는 이유였다."],
      ["세바스찬","우리 견본도 눕혀 보면 멀쩡합니다. 세워서 살펴보시겠습니까?"]
    ],
    evidence:[
      ["토끼 두 마리","공장 견본은 세워도 두 귀가 선다. 반품된 토끼는 왼쪽 귀를 손으로 펴도 똑같은 곳에서 접힌다."],
      ["백화점의 포장 견본","견본 상자의 뚜껑 안쪽에 왼쪽 귀 끝이 찍혀 있다. 받침 종이를 빼면 토끼를 상자 안에서 곧게 세울 수 있다."]
    ],
    question:"다음 물량에서 바꿀 부분은 어디일까?",
    answers:[
      ["귀 속의 솜을 더 단단히 채운다","솜을 더 넣은 귀도 상자에 넣는 순간 휘었다. 뚜껑에는 전보다 깊은 자국이 났다."],
      ["포장 받침을 낮춰 두 귀의 공간을 확보한다","도착한 상자를 열자 토끼 열두 마리의 귀가 가지런히 섰다. 백화점은 맨 앞의 한 마리를 상자째 진열해 손님들에게 보여 줬다."],
      ["오른쪽 귀도 접어 한 쌍으로 맞춘다","양쪽 귀 모양은 같아졌다. 백화점은 주문서에 그려 둔 쫑긋한 토끼를 다시 보내 달라고 했다."]
    ]
  },
  {
    id:"merchantBlackcurrant", title:"검은 사탕을 찾는 손님", month:9, gate:"candy", award:1, correct:0,
    lines:[
      ["","역전 매점에 검은까치밥 사탕을 찾는 손님이 자꾸 빈손으로 돌아갔다. 그런데 장부에 적힌 바에 따르면, 바로 그 맛만 잔뜩 남아 있는 것이다."],
      ["시엘","사탕이 맛없다는 사람과, 맛본 적이 없다는 사람은 전혀 다른 손님이야."]
    ],
    evidence:[
      ["진열병 두 개","유리병의 종이표는 ‘자두’와 ‘검은까치밥’이다. 병마개에 달린 제과장의 작은 맛표는 각각 반대로 적혀 있다."],
      ["매점 주인의 시식","종이표가 자두인 병에서는 검은까치밥 향이 났다. 주인은 두 병을 씻은 날 종이표를 떼어 한데 두었다고 했다."]
    ],
    question:"매점에 잔뜩 남은 사탕은 어떻게 할까?",
    answers:[
      ["병마개의 맛표와 시식 결과에 맞춰 종이표를 바꾼다","저녁 기차가 오기 전, 늘 빈손이던 손님이 딸 몫까지 두 봉을 샀다. 매점 주인은 이번에는 병 하나를 다 닦고 나서야 다음 병을 열었다."],
      ["검은까치밥 맛의 생산을 줄인다","매점에는 그 맛을 찾는 손님이 또 왔다. 주인은 자두라고 적힌 가득 찬 병 옆에서 고개를 저었다."],
      ["두 병을 섞어 모둠 사탕으로 판다","모둠 봉투는 금세 팔렸다. 검은까치밥만 찾던 손님은 이번에도 기차 시간에 쫓겨 그냥 돌아갔다."]
    ]
  },
  {
    id:"merchantTwelfthParcel", title:"열두 번째 선물", month:11, gate:"hamper", award:1, correct:2,
    lines:[
      ["","호텔의 연회 주문은 선물 열두 세트였다. 식탁에는 열한 개뿐인데 검수인은 분명히 열두 개를 받았다며 벌겋게 달아올랐다."],
      ["시엘","식탁을 하나 더 차렸는지부터 묻지. 초대받은 사람이 전부 식당에 앉았을까?"]
    ],
    evidence:[
      ["연회 좌석표","손님 이름은 열하나. 아래 여백에 주최자가 ‘마지막 한 분께는 주방으로’라며 작은 숟가락을 그렸다."],
      ["선물 리본 주문서","열한 장에는 손님 이름이, 한 장에는 ‘먼저 떠나는 요리사 엘런에게’라는 글귀가 적혀 있다. 엘런은 오늘 식사를 끝으로 은퇴한다."]
    ],
    question:"호텔 주인에게 열두 번째 선물이 있어야 할 곳을 알려 주자.",
    answers:[
      ["빈 좌석을 하나 마련해 남는 상자를 둔다","빈 의자만 하나 늘었다. 주최자는 숟가락 표시를 가리키며 그 선물의 주인은 홀에 나오지 않는다고 했다."],
      ["검수인에게 열두 번째 상자를 물어내라고 한다","검수인은 인수증을 다시 꺼냈다. 주방 쪽에서 리본 풀리는 소리가 들리자 호텔 주인이 먼저 사과했다."],
      ["주방의 엘런에게 마지막 상자가 닿았는지 확인한다","엘런은 리본을 앞치마 주머니에 넣고 있었다. 시엘이 식탁의 빈칸에 그 이름을 적어 보내자 주최자는 주방으로 내려가 직접 인사를 건넸다."]
    ]
  },
  {
    id:"merchantCatalogue", title:"도안 번호 열일곱", month:12, gate:"variety", award:1, correct:1,
    lines:[
      ["세바스찬","우편으로 주문한 손님 세 분이 생각과 다른 물건을 받으셨답니다. 모두 도안 열일곱 번을 청하셨습니다."],
      ["","시엘은 물건을 되돌려 보내라는 회신을 잠시 미뤘다. 세 통 모두 봉투는 새것인데 오려 붙인 주문표는 누렇게 바랬다."]
    ],
    evidence:[
      ["지난겨울 도안첩","열일곱 번은 목제 완구다. 손님들이 오려낸 주문표 귀퉁이에도 이 판본의 눈송이 장식이 남아 있다."],
      ["이번 도안첩과 출고표","새 판에서는 다른 물품이 열일곱 번이다. 점원은 새 도안첩의 번호대로 정확히 출고했다."]
    ],
    question:"서로 다른 물건을 가리킨 같은 번호를 어떻게 바로잡을까?",
    answers:[
      ["창고에서 열일곱 번 칸을 옆 칸과 맞바꾼다","오래된 주문 세 통은 맞게 됐다. 새 도안첩을 보고 쓴 네 번째 손님에게 이번에는 목제 완구가 갔다."],
      ["도안첩 판본을 먼저 맞추고 세 주문을 교환한다","손님들은 기다리던 목제 완구를 받았다. 다음 주문표에는 도안 번호 바로 곁에 판본 이름이 찍혔다."],
      ["손님에게 도안 번호를 한 번 더 써 달라고 한다","세 통의 답장에 세 번 모두 똑같이 ‘열일곱’이라고 적혀 왔다. 시엘은 두 권의 도안첩을 다시 펼쳤다."]
    ]
  },
  {
    id:"merchantBorrowedCrest", title:"상표를 빌린 자들", month:14, gate:"fame", award:3, correct:0,
    lines:[
      ["","팬텀사의 완구를 들인 두 가게에서 같은 상회의 물건이 함께 발견됐다. 아이들에게 팔리기 전에 경찰이 거둬 간 장난감 안에는 마약이 들어 있었다."],
      ["세바스찬","상회 대표는 팬텀사와 함께 납품했다는군요. 내일 자선 시연회에는 도련님 몫의 의자까지 내놓았답니다."],
      ["시엘","내 이름으로 장사를 했으면 내 질문 한두 개쯤은 받아 줘야지."]
    ],
    evidence:[
      ["자선회 서기의 회신","상회가 내민 팬텀사의 추천서는 자선회 소장 원본을 베낀 것이었다. 원본에 적힌 용도는 ‘작년 연회 감사 인사’ 하나뿐이다."],
      ["완구상 두 곳의 증언","두 주인은 문제의 완구를 팬텀사에서 받은 적이 없다. 서로 다른 날 그 상회의 대표에게 직접 샀으며, 각자 보관한 영수증에는 같은 대표의 서명이 있다."]
    ],
    question:"누가 팬텀사의 이름을 내세웠는지 어느 증거로 밝힐까?",
    answers:[
      ["추천서 원본과 두 영수증을 맞춰 상회 대표를 지목한다","시엘이 기자들 앞에서 추천서의 생략된 끝 문장을 읽었다. 두 완구상이 영수증을 내놓자 대표는 더는 팬텀사를 가리키지 못했다. 그 상회를 앞세운 마피아 일당은 자기들이 부른 기자들 앞에서 경시청에 체포됐다. 이튿날 두 완구상의 쇼윈도에는 시엘이 서명한 회수 공고가 걸렸다."],
      ["팬텀사 창고의 출고 담당자를 먼저 지목한다","창고 장부에서는 해당 거래가 한 건도 나오지 않았다. 담당자의 이름을 거두는 동안 경시청은 완구상들에게 따로 영수증을 받아야 했다."],
      ["시연회를 취소하고 경시청에 수사를 맡긴다","문제의 물량은 판매 전에 수거됐다. 경시청이 상회를 조사하는 동안, 팬텀사가 그 초청장과 무슨 관계였는지 묻는 편지가 계속 도착했다."]
    ]
  },
  {
    id:"merchantBenefitShow", title:"흰 표 쉰 장", month:18, gate:"sales", award:1, correct:2,
    lines:[
      ["","팬텀사에서 완구를 빌려준 자선 공연은 만석이었다. 극장주는 매표 수입이 절반뿐이라며 누군가 동전함에 손을 댔다고 했다."],
      ["시엘","동전함을 열기 전에 관객이 손에 들었던 것부터 세 보자."]
    ],
    evidence:[
      ["회수한 입장권","푸른 유료표 오십 장과 흰 초대권 오십 장이다. 유료표의 액면을 합한 돈은 동전함에 남은 금액과 한 푼도 어긋나지 않는다."],
      ["인쇄소의 주문서","후원자가 낸 인쇄 주문에는 ‘아이 쉰 명 무료 초대’라고 적혔다. 극장주의 예상 수입표에는 백 자리 전부 유료로 계산돼 있다."]
    ],
    question:"어디에서 절반의 차이가 생겼을까?",
    answers:[
      ["입구 직원에게 모자라는 표 값을 청구한다","직원은 흰 초대권을 반씩 접어 모아 둔 꾸러미를 내밀었다. 극장주는 사람들 앞에서 했던 말을 도로 거둬야 했다."],
      ["다음번에는 표 값을 두 배로 정한다","다음 공연의 금액만 바뀌었다. 후원자는 이번 공연에서 초대한 쉰 명은 어느 칸에 적었느냐고 물었다."],
      ["무료 초대석을 갈라 정산하고 직원의 누명을 벗긴다","시엘은 빈 객석을 그려 놓은 칸마다 흰 초대권 한 장을 붙였다. 극장주가 직원 앞에서 장부를 고쳤고, 아이들의 박수도 온전히 그날 공연의 몫으로 남았다."]
    ]
  }
];

function companyCaseEligible(run,item){
  if(run.month<item.month || run.flags[item.id])return false;
  const lines=Object.values(run.productHistory||{});
  if(item.gate==="sales")return lines.some(line=>line.units>=12);
  if(item.gate==="orders")return lines.some(line=>line.orders>=1);
  if(item.gate==="stock")return Object.values(run.stock).some(count=>count>=3);
  if(item.gate==="variety")return lines.filter(line=>line.units>=4).length>=2;
  if(item.gate==="fame"){
    const toys=["toys","plush","game"].map(id=>productHistory(run,id));
    return run.renown>=8 && toys.some(line=>line.units>=30&&line.reputation>=5)
      && lines.reduce((sum,line)=>sum+line.units,0)>=90;
  }
  return Object.hasOwn(products,item.gate)&&productHistory(run,item.gate).units>=4;
}
function dueCompanyCase(run){
  if(run.duration!==35)return null;
  const last=run.events.findLast(record=>companyCases.some(item=>item.id===record.id));
  if(last&&run.month-last.month<2)return null;
  const eligible=companyCases.filter(item=>companyCaseEligible(run,item));
  return eligible.find(item=>item.gate==="fame")||
    eligible[Math.floor(monthlyDraw(run,0x43415345)*eligible.length)]||null;
}
function companyCaseEvents(){
  return companyCases.map(item=>({
    id:item.id,title:item.title,text:item.lines[0][1],companyCase:item,room:"office",track:"business",speaker:"세바스찬",
    sees:run=>companyCaseEligible(run,item),
    lines:[...item.lines,...item.evidence,["",item.question]],
    choices:item.answers.map(([label,response],index)=>({
      label,response,result:response+(index===item.correct?" · 가문 명성 +"+item.award:""),
      effect:()=>{if(index===item.correct)shift("renown",item.award);}
    }))
  }));
}

// Each incident has a single outcome. The monthly draw is saved in the event queue.
const monthlySetbacks = [
  {id:"setbackGlass",month:3,title:"온실에 남은 서른두 칸",room:"garden",cost:34,
   lines:[["","새벽 돌풍이 온실 유리를 한 줄 통째로 뽑아 갔다. 아침 식탁에 오른 건 꽃 한 송이와 유리공의 청구서였다."],
          ["시엘","꽃은 그 자리에 둬. 유리값은 저택 앞으로 달아 놓고."]]},
  {id:"setbackFall",month:2,title:"빈 등자",room:"field",hp:-18,stress:5,eligible:(run,ride)=>ride,
   lines:[["","마지막 회전에서 장화가 등자를 놓쳤다. 시엘이 다시 숨을 들이켰을 때는 젖은 모래에 한쪽 어깨가 닿아 있었다."],
          ["세바스찬","말은 제가 데려가겠습니다. 오늘 저녁엔 그 팔로 찻잔을 들지 마십시오."]]},
  {id:"setbackPress",month:5,title:"한 줄 밀린 가격표",room:"office",cost:46,eligible:run=>run.report.sold>=6,
   lines:[["","상점에 도착한 전단에는 아랫줄 상품의 값이 찍혀 있었다. 점원은 먼저 줄을 선 손님들에게 인쇄된 값으로 팔았다."],
          ["시엘","약속한 값은 지켜야지. 차액과 전단을 다시 찍은 값은 팬텀사 앞으로 청구해."]]},
  {id:"setbackLetter",month:9,title:"연회가 끝난 뒤",room:"ballroom",renown:-2,stress:6,eligible:run=>run.renown>=2,
   lines:[["","반송된 답신이 저택에 돌아온 건 연회 다음 날이었다. 조간지의 좌석표에는 주빈 옆 한 자리만 이름이 없었다."],
          ["시엘","받지 못한 편지를 읽었다고 할 수도 없잖아. 사과문은 내가 쓸게."]]},
  {id:"setbackBells",month:10,title:"새벽 두 시의 종",room:"bedroom",hp:-10,motivation:-6,
   lines:[["","마을 종이 멎었을 때는 이미 동이 틀 무렵이었다. 이웃 헛간의 불은 꺼졌지만 시엘의 베개에는 머리를 뉜 자국조차 없었다."],
          ["세바스찬","차가 식었습니다, 도련님. 아까부터 같은 면을 읽고 계시는군요."]]},
  {id:"setbackAxle",month:15,title:"돌아오지 않은 마차",room:"office",cost:68,eligible:run=>run.report.sold>=9,
   lines:[["","팬텀사의 짐마차가 런던 다리 앞에서 축이 부러졌다. 남의 마차 세 대에 상자를 나눠 싣고 나서야 가게 문을 열었다."],
          ["세바스찬","물건은 한 상자도 빠지지 않았습니다. 대신 마차 세 대의 운임과 새 차축 값이 들었습니다."]]},
  {id:"setbackPipe",month:20,title:"식당 천장의 물자국",room:"ballroom",cost:84,
   lines:[["","은쟁반 한가운데로 물방울이 떨어졌다. 천장을 걷어 내자 벽 속의 오래된 수도관이 이음매부터 갈라져 있었다."],
          ["시엘","배관공에게 방을 열어 줘. 오늘 저녁은 서재에서 먹겠다."]]}
];
function drawMonthlySetback(run,ride,random=Math.random){
  if(run.duration!==35||run.month<2||weatherFor(run))return null;
  const last=run.events.findLast(record=>monthlySetbacks.some(item=>item.id===record.id));
  if(last&&run.month-last.month<2)return null;
  const eligible=monthlySetbacks.filter(item=>run.month>=item.month&&!run.flags[item.id]&&(!item.eligible||item.eligible(run,ride)));
  if(!eligible.length||random()>=(run.month<=12?.32:.42))return null;
  return eligible[Math.floor(random()*eligible.length)].id;
}
function setbackEvents(){
  return monthlySetbacks.map(item=>{
    const result=[item.cost&&"지출 £"+item.cost,item.hp&&"컨디션 "+signed(item.hp),
      item.stress&&"스트레스 "+signed(item.stress),item.motivation&&"의욕 "+signed(item.motivation),
      item.renown&&"가문 명성 "+signed(item.renown)].filter(Boolean).join(" · ");
    return {id:item.id,title:item.title,room:item.room,lines:item.lines,text:item.lines[0][1],setback:true,sees:()=>false,
      choices:[choice("기록을 확인한다",item.title+" · "+result,()=>{
        if(item.cost){
          state.fund-=item.cost;
          state.accounts.setbacks=(state.accounts.setbacks||0)+item.cost;
        }
        for(const key of ["hp","stress","motivation"])if(item[key])shift(key,item[key]);
        if(item.renown)state.renown=Math.max(0,state.renown+item.renown);
      })]};
  });
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
    "오늘도 불 끄기 전에 한 숟갈 빼 놨습니다!",
    "도련님 접시는 요 뚜껑 밑에! 탄내 없이 따끈합니다."]},
  linenMarks:{place:"quarters",person:"mey",lines:[
    "파란 실은 손님방, 흰 실은 도련님 방. 이번엔 수건이 제자리에 갔습니다요!",
    "개킨 쪽으로 손을 넣으면 작은 수건부터 잡힙니다요. 도련님이 보신 그대로입니다요."]}
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
     text:"젠장, 은쟁반이 안 오네! 화력 올려서 새로 끓일까요?",
     sees:s=>s.visit==="kitchen"&&!!s.people.bard,
     responses:["자, 작은 숟가락 여기 있습니다.","오호, 뚜껑 있는 그릇 좋네! 주방 날릴 일도 없겠는데요."],
     choices:[choice("내가 먼저 간을 보지.","바르도가 맛볼 몫을 덜어 두었다.",()=>talkTrust("bard")),
              choice("한 그릇 덜어서 덮어 둬.","바르도가 시엘의 접시를 따로 덮었다.",()=>shift("hp",2))]},
    {id:"linenMarks",visitOnly:true,visitPlace:"quarters",title:"리넨장 맨 윗칸",speaker:"메이린",
     text:"손님방 수건이 또 도련님 방에 들어갔습니다요. 글씨가 어찌나 비슷한지…….",
     sees:s=>s.visit==="quarters"&&!!s.people.mey&&(!s.people.snake||s.month%2===1),
     responses:["실 색깔은 저도 금방 알아봅니다요. 바느질 상자를 가져올게요!","아, 손으로도 크기를 알겠습니다요. 맨 윗칸부터 다시 개겠습니다요."],
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
