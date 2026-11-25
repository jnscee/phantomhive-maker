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
      text:"봉투에는 보증서가 없고 부러진 나무 바퀴가 하나 들었습니다. 답장은 그림으로 부탁한다는군요. 수레의 임자인 동생이 아직 글을 모른답니다. 같은 축을 쓴 수레가 여섯 상자 나갔습니다.",
      choices:[
        fundedDecision("여섯 상자를 모두 무상으로 교환한다","판매점마다 교환할 물건을 보냈다. 아이에게 가는 봉투에는 새 바퀴를 단 수레를 그려 넣었다. 가문 명성 +4",180,"company",()=>shift("renown",4)),
        choice("시엘이 판매 기록을 대조하게 한다","시엘은 축을 깎은 날짜와 판매 기록을 하나씩 맞춰 봤다. 수리하러 갈 집의 주소를 다 적고 나서야 펜을 놓았다. 통찰 +8 · 스트레스 +8",()=>{changeStat("통찰",8);shift("stress",8);})
      ]},
    {id:"carrierPlace",month:29,title:"마차의 빈 네 자리",speaker:"세바스찬",
      text:"매달 열여섯 개까지는 지금 내는 운임으로 보낼 수 있습니다. 열일곱 개째부터 하나에 3파운드씩 더 들지요. 연말까지 네 자리만 미리 사 두시면 스무 개까지 웃돈을 아낄 수 있습니다.",
      choices:[
        fundedDecision("정기 운송 자리를 계약한다","운송업자의 장부에 팬텀사 몫으로 네 자리를 더 잡았다. 다음 출하부터 추가 운임 없이 보낼 수 있는 물량이 월 16개에서 20개로 늘었다.",48,"company",()=>{state.flags.carrierSpace=true;}),
        choice("필요할 때마다 마차를 부른다","시엘은 계약서를 돌려주고 마차를 불러야 할 날짜에만 동그라미를 쳤다. 경영 +6",()=>changeStat("경영",6))
      ]},
    {id:"estateRoof",month:32,title:"빗물 아래 놓인 악보",speaker:"세바스찬",
      text:"영지 학교의 음악실에 비가 샌답니다. 선생님이 보낸 그림에는 피아노 건반 위에 찻잔이 줄지어 있더군요. 개학 전에는 수리공의 일정이 한 주 비는데, 마침 그 주에는 저희 응접실에도 손님이 없습니다.",
      choices:[
        fundedDecision("학교 지붕의 수리비를 맡는다","개학 날, 첫 연주회 초대장이 두 장 왔다. 아이들이 한 장은 도련님께, 다른 한 장은 지붕을 고친 수리공에게 썼다. 가문 명성 +5",240,"estate",()=>shift("renown",5)),
        choice("저택 응접실을 수업에 내준다","일주일 동안 시엘은 결재를 하면서 피아노 연습을 들었다. 금요일쯤에는 어느 마디에서 틀릴지까지 알았다. 가문 명성 +2 · 스트레스 +6",()=>{shift("renown",2);shift("stress",6);})
      ]}
  ].map(event=>({...event,season:true,sees:run=>run.duration===35&&run.month===event.month}));
}
function scriptedEvents(){
  const timed=[
    [5,"expo","박람회의 유리 진열장","유리장에 올릴 완구를 하나만 골라 달랍니다. 태엽 인형이 인사를 할 때는 어른들이 보시더군요. 아이들은 그 옆에 있는 수레를 직접 굴려 보고 싶다는 눈치고요.",
      ["수레를 시연한다","팬텀사 인지도 상승",{renown:2}],["구동 구조를 기록한다","경영 +8",{경영:8}]],
    [12,"birthday","열한 번째 생일","식탁 위에 초가 열한 개입니다. 시엘은 장부를 덮고, 빈 의자 하나를 잠깐 바라봅니다.",
      ["홍차와 케이크를 낸다","스트레스 −12",{stress:-12}],["도련님의 말을 기다린다","의지 +5",{의지:5}]],
    [18,"jubilee","황금빛 초대장",[["","1887년 6월 21일. 여왕의 행렬이 웨스트민스터 사원으로 향했다. 마지막 마차가 창 아래를 지나자 시엘은 책상으로 돌아섰다."],["세바스찬","왕실에 올릴 서신은 이쪽입니다, 도련님. 마차가 떠나기 전에 보시겠습니까?"]],
      ["직접 가문을 소개한다","왕실 신뢰 상승",{royal:3},s=>s.stats.기품>=380,"기품 380"],["헌정 완구를 보낸다","가문 명성 상승",{renown:2}]],
    [24,"birthday2","열두 번째 생일","올해의 케이크 장식은 설탕으로 만든 체스 말입니다. 한 칸 움직이면 곧장 무너질 자리입니다.",
      ["먼저 한 수 둔다","통찰 +6",{통찰:6}],["도련님이 고를 때까지 둔다","의욕 +9",{motivation:9}]],
    [31,"match","상자에 남은 이름","런던 성냥공장의 여공들이 일손을 놓았답니다. ……예, 도련님. 조간지와 함께 팬텀사의 하청 명부도 가져다 놓겠습니다.",
      ["납품 조건을 조사한다","협력 공장 기록 확보",{flag:"audit",경영:7}],["직원 대표를 만난다","가문 명성 상승",{renown:2}],["조사 자료를 왕실에 제출한다","왕실 신임 상승",{royal:3},s=>s.flags.deed&&s.stats.통찰>=400,"가문 증빙 확보 · 통찰 400"]],
    [33,"chapel","화이트채플에서 온 전보","동부에서 들어온 전보에 수신인이 빠져 있습니다. 시엘은 봉투에 남은 우편 소인부터 살핍니다.",
      ["소인의 경로를 맞춘다","조사 기록 확보",{flag:"postmark",통찰:8},s=>s.stats.통찰>=33,"통찰 33"],["연락망을 정리한다","의지 +5",{의지:5}]]
  ];
  const contestOverrides={expo:"kensington1886",jubilee:"jubilee1887"};
  const fixed=timed.map(([month,id,title,text,...options])=>({id,title,text:Array.isArray(text)?text[0][1]:text,lines:Array.isArray(text)?text:undefined,chapter:true,speaker:"세바스찬",sees:s=>s.month>=month&&s.month<=month+2&&!Number.isInteger(s.fairBook?.[contestOverrides[id]]?.rank),choices:options.filter(Boolean).map(effectChoice)}));
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
    ["negotiate",2,"quote","빈 가격란","수량도 납기도 저쪽에서 써 왔는데 값만 비워 두었군요. 저 펜을 먼저 집는 쪽이 첫 가격을 부르는 셈입니다.","납기부터 확인한다","경영",6,"상대의 표정을 읽는다","통찰",5],
    ["exercise",2,"breath","창가에서 한 호흡","창가에 닿자 숨이 찹니다. 세바스찬이 다음 발판에서 기다립니다.","걸어서 마친다","hp",6,"휴식 뒤 이어 간다","의지",5],
    ["practicum",2,"copy","먹지 두 장","먹지를 대고 옮긴 두 장입니다. 그대로 포개면 글씨가 꼭 맞아야 할 텐데, 숫자 하나가 어긋나는군요.","영수증을 찾는다","경영",6,"전표의 글씨를 본다","통찰",5],
    ["developToy",2,"axle","삐걱거리는 축","처음 두 번은 잘 굴러갔습니다. 세 번째에야 소리가 나는군요. 보십시오, 한쪽 바퀴만 멎었습니다.","축을 바꿔 본다","경영",6,"바닥을 바꿔 굴린다","통찰",6],
    ["supplier",2,"bolt","천의 뒷면","도련님께서 안감을 조금 접어 보시니 상인이 또 천을 펴 주는군요. 아까부터 앞면을 보여 준 게 벌써 세 번째입니다.","봉제 상태를 지적한다","경영",6,"다른 염색 천을 청한다","매력",4],
    ["estateWork",2,"roof","서쪽 지붕의 견적","서쪽 지붕 수리비를 또 청구했군요. 지난달에 온 청구서도 가져왔습니다. 손봤다는 자리도, 받아 가겠다는 액수도 같습니다.","근무 일지를 본다","지성",5,"현장을 직접 찾는다","통찰",5],
    ["reception",2,"chair","한 자리의 거리","저 끝자리에 앉은 손님만 한 박자씩 늦게 웃으십니다. 저 의자에 앉으면 옆에서 말을 옮겨 줘야 들리는 모양이군요.","직접 자리를 옮긴다","매력",5,"좌석표를 고친다","기품",5],
    ["casework",2,"map","뒤집힌 약도","증인이 그린 골목에는 있어야 할 굴뚝이 없습니다.","창에 비춰 뒤집어 본다","통찰",6,"다른 목격자를 찾는다","의지",5],
    ["reading",2,"margin","책 가장자리의 연필","추리소설의 범인 옆에 누군가 이름을 써 두었습니다.","과정을 먼저 짚는다","통찰",5,"마지막 장까지 읽는다","지성",5],
    ["recovery",2,"noon","정오의 왕진","의사가 기침이 멎은 시간을 묻습니다. 시엘은 시계보다 먼저 창문을 봅니다.","낮잠을 연장한다","hp",7,"창가에서 햇빛을 쬔다","motivation",7],
    ["outing",2,"window","작은 진열창","창밖의 아이들을 보십시오. 하나는 수레바퀴를, 하나는 마부의 모자를 가리키는군요. 같은 장난감을 두고 무슨 이야기를 저렇게 열심히 하는 걸까요?","두 사람의 말을 듣는다","경영",5,"진열대를 그려 둔다","통찰",5]
  ];
  const personal=[
    {id:"bargainManners",title:"무례한 젊은 사업가",speaker:"세바스찬",text:"조항마다 도련님의 뜻대로 됐더군요. 상대도 군말 없이 서명했고요. 다만 도련님께서 악수를 청하셨을 때, 그분은 벌써 문고리를 잡고 계시더군요.",sees:s=>s.stats.경영>=28&&s.stats.경영-s.stats.기품>=10,choices:[
      choice("답례 방문을 잡는다","기품 +6 · 가문 명성 상승",()=>{shift("기품",6);shift("renown",1)}),
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
     {label:"가문 책무 보고",when:s=>s.stats.기품>=24,hint:"기품 24",effect:()=>{state.royal+=1;state.renown+=1;},result:"왕실 평가 상승 · 가문 명성 상승"},
     {label:"팬텀사 회계 장부 제출",when:s=>s.stats.경영>=22,hint:"경영 22",effect:()=>{state.royal+=2;state.renown+=2;},result:"왕실 평가 상승 · 가문 명성 상승"},
     {label:"증빙 자료 요청",when:s=>s.stats.통찰>=24,hint:"통찰 24",effect:()=>{state.royal+=2;state.flags.deed=true;},result:"왕실 평가 상승 · 가문 증빙 확보"},
     {label:"세바스찬에게 접수 위임",effect:()=>{state.royal+=1;},result:"왕실 평가 소폭 상승"}
   ]},
  {id:"trade",visitPlace:"town",title:"거래처 협상",speaker:"팬텀사",
   text:"첫 거래를 청하는 편지가 왔다. ‘우선 저희 가게의 진열대 하나를 채울 만큼만.’ 주문은 작고, 선금을 치르겠다는 대목에는 밑줄이 두 번 그어져 있다.",
   sees:s=>s.month>=2&&s.visit==="town",
   choices:[
     {label:"소량 납품부터 계약한다",effect:()=>{recordContractAdvance(32);state.renown+=1;},result:"선금 £32 · 가문 명성 상승"},
     {label:"거래처 일대의 시장을 조사한다",effect:()=>{changeStat("경영",6);state.flags.market=true;state.marketMonth=state.month;},result:"경영 +6 · 다음 달 가문 명성 상승"}
   ]},
  {id:"room",title:"응접실 후속 접객",speaker:"저택",
   text:"응접실을 넓힌 덕에 거래처 손님을 한 팀 더 받을 수 있다. 세바스찬은 새 찻잔을 꺼내 놓고, 시엘이 회중시계를 덮을 때까지 기다렸다.",
   sees:s=>s.month>=4&&s.level.parlor>=2,
   choices:[
     {label:"다음 손님을 맞는다",effect:()=>{state.renown+=2;},result:"가문 명성 +2"},
     {label:"오늘 접객은 여기서 마친다",effect:()=>{state.trust+=1;state.stress=cap(state.stress-8);},result:"스트레스 -8"}
   ]}
];
}

// Preview dates only set the scene; gameplay draws from the eligible business cases.
const companyCases = [
  {
    id:"merchantBlueReceipt", title:"두 번째로 돌아온 영수증", previewMonth:2, gate:"toys", award:1, correct:0,
    lines:[
      ["","문을 닫기 직전이었다. 손님은 반으로 접은 영수증을 계산대에 펴 놓고, 완구 하나를 돌려주는 데 대체 몇 번을 와야 하느냐고 물었다. 길 건너에서도 대답할 수 있을 만한 목소리였다."],
      ["세바스찬","목제 완구는 어제 돌려주셨고, 돈은 한 푼도 못 받으셨답니다."],
      ["시엘","어제 쓴 출납장을 가져와. 돈을 돌려줬으면 받은 사람도 있을 테니까."]
    ],
    evidence:[
      ["손님의 영수증","27번 영수증 귀퉁이에 반달 모양 구멍이 있다. 계산대의 환불 집게를 포개 보면, 날이 살짝 이지러진 자리까지 꼭 맞는다."],
      ["어제의 현금 출납장","‘27번, 전액 반환.’ 그 옆에는 수령 서명이 있다. 이름 끝에서 펜을 길게 끈 버릇이 오늘 손님이 써 낸 항의장에도 보인다."]
    ],
    evidenceEmphasis:[
      ["반달 모양 구멍","환불 집게"],
      ["27번, 전액 반환","수령 서명"]
    ],
    question:"손님 앞에 어떤 기록을 펼쳐 놓을까?",
    answers:[
      ["서명과 환불 자국을 나란히 보여 준다","시엘이 영수증 옆에 출납장을 펴 놓았다. 손님은 제 서명부터 손바닥으로 가렸다. 줄을 선 사람들이 슬쩍 길을 터 주었다. 나갈 때는 바로 뒤에 선 점원조차 그 목소리를 못 들었다."],
      ["물건을 받은 창고지기에게 책임을 묻는다","창고지기가 어제 돌려받은 완구를 내밀었다. 손님은 거들떠보지도 않았다. “그래서 내 돈은요?” 창고지기는 완구를 든 채 같은 사연을 처음부터 들어야 했다."],
      ["다음 영업일에 다시 오시라고 한다","손님은 영수증을 반으로 접어 갔다. 다음 장날, 같은 접힌 자국을 펴 가며 다른 점원이 같은 항의를 받아 적었다."]
    ]
  },
  {
    id:"merchantAlphabet", title:"B가 둘인 알파벳", previewMonth:3, gate:"toys", award:1, correct:1,
    lines:[
      ["","아이는 계산대에 O, R, A를 나란히 놓고 맨 앞을 한 칸 비워 뒀다. 도라는 제 이름을 보여 주고 싶었는데, 상자에 D가 없다고 했다. 점원은 집에 가서 잘 찾아보라고 했다."],
      ["시엘","좋아. 이 아이가 집에서 D를 잃어버렸다고 치자. 그럼 남는 B는 어느 집에서 왔지?"]
    ],
    evidence:[
      ["아이의 나무패","나무패는 모두 스물여섯 개다. B가 두 개이고 D가 없다. 두 B의 모서리에는 갓 마른 파란 칠이 똑같이 묻어 있다."],
      ["아직 봉한 견본","같은 날 만든 상자 하나를 시엘이 보는 앞에서 개봉했다. 나무패를 꺼내 보니 이번에도 B가 둘이고 D가 없다."]
    ],
    evidenceEmphasis:[
      ["B가 두 개이고 D가 없다"],
      ["같은 날 만든 상자","B가 둘이고 D가 없다"]
    ],
    question:"도라의 이름을 완성해 주려면 가게에서는 어디까지 확인해야 할까?",
    answers:[
      ["집에서 다른 나무패와 섞였는지 아이에게 묻는다","“우리 집에는 이거 하나뿐이에요.” 아이는 아까와 똑같이 대답했다. 세 번째로 묻기 전에 어머니가 나무패를 도로 상자에 담았다. 맨 앞 한 칸은 끝내 비어 있었다."],
      ["같은 날 포장한 상자들을 확인하고 D를 바꿔 준다","점원이 D를 건네자 도라는 그 패를 맨 앞에 놓고 제 이름을 큰 소리로 읽었다. 구경하던 손님들이 한 번 더 읽어 달라고 했다. 그사이 시엘은 같은 날 포장한 상자들이 어디로 갔는지 주소를 받아 적었다."],
      ["B 하나에 종이로 D를 붙여 준다","종이 한 장이면 오늘은 DORA가 된다. 이튿날 다른 아이가 계산대에 나무패를 두 개 올려놨다. B와 B였다."]
    ]
  },
  {
    id:"merchantWindowStock", title:"창고에서 사라진 세 벌", previewMonth:4, gate:"stock", award:1, correct:2,
    lines:[
      ["세바스찬","창고에 있는 물건이 장부에 적힌 수량보다 세 벌 모자랍니다. 창고지기는 제 품삯에서 그 값을 빼 달라더군요."],
      ["","시엘은 임금 봉투를 서랍에 밀어 넣었다. 그 돈이면 세 벌의 값을 치를 수야 있겠지. 그러고도 물건이 어디로 갔는지는 모를 테고. 오늘 아침에 처음 열쇠를 받아 간 사람부터 부르게 했다."]
    ],
    evidence:[
      ["진열 담당의 수첩","‘창문에 한 벌, 판매대 양 끝에 한 벌씩.’ 오늘 날짜 밑에 가게 안을 대강 그리고 세 자리에 동그라미를 쳤다."],
      ["바닥에 붙은 꼬리표","진열대 세 곳에서 떼어 낸 꼬리표에는 같은 창고 번호가 적혀 있다. 판매용 꼬리표 구석에 손으로 써 넣은 ‘진열 중’이라는 글씨도 같다."]
    ],
    evidenceEmphasis:[
      ["창문에 한 벌, 판매대 양 끝에 한 벌씩"],
      ["같은 창고 번호","‘진열 중’"]
    ],
    question:"세 벌은 장부의 어느 칸에 들어가야 할까?",
    answers:[
      ["밤에 창고를 드나드는 사람이 있는지 지켜본다","이튿날 아침, 자물쇠에는 흠집이 하나도 없었다. 경비를 선 사람은 퇴근했고 창고지기는 어제와 같은 질문을 받았다."],
      ["다음 생산분 세 벌을 창고에 더 보낸다","세 벌을 채우고 장부를 덮었다. 저녁에 진열대를 비우자 창고로 세 벌이 더 들어왔다. 아침에는 모자라더니 이번에는 남는다."],
      ["진열품을 장부에 따로 적고 수량을 맞춘다","시엘이 창가의 꼬리표를 뒤집자 창고지기가 제 글씨를 알아봤다. 장부에는 진열란이 생겼고, 창고지기는 품삯을 받았다. 봉투를 뜯을 일도 없었다."]
    ]
  },
  {
    id:"merchantBiscuitTin", title:"벽난로 옆 자리", previewMonth:5, gate:"sweets", award:1, correct:0,
    lines:[
      ["","첫 번째 비스킷은 똑, 소리를 내며 부러졌다. 두 번째 것은 시엘의 엄지가 닿은 자리만 움푹 들어갔다. 다실 주인의 말로는 두 통을 다 어제 처음 열었다고 한다."],
      ["시엘","어느 손님의 입맛이 더 까다로운지는 됐어. 어제 이 두 통을 각각 어디에 뒀지?"]
    ],
    evidence:[
      ["제과장의 검식 쪽지","같은 판에서 구운 비스킷을 세 통에 나누어 담았다. 공장에 남긴 한 통도 열어 봤다고 한다. 검식 쪽지의 마지막 줄에는 ‘오늘 아침 바삭하게 부러졌다’고 적혀 있다."],
      ["다실의 자리 그림","눅눅한 쪽은 밤새 김이 오르던 찻주전자 바로 위 선반에 있었다. 통의 한쪽이 찌그러져, 손으로 꾹 눌러도 뚜껑이 꼭 닫히지 않는다."]
    ],
    evidenceEmphasis:[
      ["같은 판에서 구운","오늘 아침 바삭하게 부러졌다"],
      ["찻주전자 바로 위 선반","꼭 닫히지 않는다"]
    ],
    question:"눅눅해진 한 통은 어떻게 처리할까?",
    answers:[
      ["찌그러진 통을 바꿔 주고 보관 자리를 옮긴다","새 통은 벽난로 건너편 마른 찬장에 두었다. 사흘 뒤 다실에서 작은 소포가 왔다. 편지는 없고, 반으로 똑 부러진 비스킷 하나가 들었다."],
      ["같은 날 구운 비스킷을 전부 거둬들인다","다른 다실에서 돌려보낸 비스킷은 어느 것이나 똑똑 잘 부러졌다. 며칠 뒤 같은 선반에 놓아둔 통에서만 또 눅눅한 것이 나왔다."],
      ["손님들이 봉인을 먼저 뜯었다고 답장한다","‘첫 손님이 오기 전에 제가 통을 열었습니다.’ 주인은 그 한 줄을 쓴 편지를 찌그러진 통에 넣어 보냈다. 뚜껑은 오는 길에 빠져 있었다."]
    ]
  },
  {
    id:"merchantDeliveryBell", title:"종이 울리기 전의 납품", previewMonth:6, gate:"orders", award:1, correct:1,
    lines:[
      ["","거래처 주인은 어제 온 짐이 없다고 썼다. 마부는 자기가 직접 짐을 내려놓았다고 했다. 빈 마차를 끌고 모퉁이를 도는데 그제야 학교 종이 울리더란다."],
      ["세바스찬","골목 이름에 번지까지 여쭤봤습니다. 두 분이 같은 집을 짚으시더군요."]
    ],
    evidence:[
      ["인수증의 서명","인수증의 서명 밑에는 ‘아래층 보관, 메리’라고 적혀 있다. 발주서의 배달 지시에는 ‘위층 매장, 주인에게 직접’이라고 적혀 있다. 번지는 같고 마지막 줄이 다르다."],
      ["아래층의 쪽지","아래층 제본소에서 쪽지가 왔다. ‘위층 가게가 문을 열기 전에 맡아 둔 상자가 아직 계단을 막고 있다’는 전갈이다."]
    ],
    evidenceEmphasis:[
      ["아래층 보관, 메리","위층 매장, 주인에게 직접"],
      ["맡아 둔 상자가 아직 계단을 막고 있다"]
    ],
    question:"새 물량을 보내기 전에 어제 내린 상자부터 찾자. 어디로 가야 할까?",
    answers:[
      ["마구간에서 다른 마부를 부른다","새 마부가 빈손으로 위층 문을 두드렸다. 아래층 직공은 종이 한 짐을 안고 계단의 상자를 넘어야 했다. 오늘만 해도 벌써 세 번째였다."],
      ["아래층 보관분을 위층 주인에게 인계한다","메리가 계단에서 상자를 밀어 올리고 위층 주인이 상자를 받아 인수증에 서명했다. 점심때는 따끈한 파이가 같은 계단을 내려왔다. 메리의 몫이었다."],
      ["서명을 받았으니 배달은 끝났다고 거래처에 알린다","‘제 이름은 메리가 아닙니다.’ 위층에서 온 답장은 한 줄로 충분했다. 아래층에서는 여전히 상자를 넘어 다녔다."]
    ]
  },
  {
    id:"merchantRedDeck", title:"열리지 않는 성문", previewMonth:7, gate:"game", award:1, correct:2,
    lines:[
      ["","체스 클럽에서 한 상자를 붙들고 일곱 판을 뒀다. 일곱 판이 모두 성문 앞에서 끝났다. 여덟 번째 판을 권하자 시엘은 말부터 치우고 상자를 뒤집었다."],
      ["시엘","성문에서 열쇠를 내라. 읽었어. 그런데 자네들은 그 열쇠를 어디서 받았지?"]
    ],
    evidence:[
      ["규칙서의 첫 장","규칙서의 첫 장에는 빨간 문장 카드 열두 장과 푸른 열쇠 카드 열두 장이 그려져 있다. 성문에 닿은 사람은 푸른 카드 한 장을 내야 한다."],
      ["클럽의 카드 두 묶음","두 묶음은 모두 뒷면이 빨갛다. 펼쳐 보면 같은 문장이 꼭 두 장씩 짝을 이룬다. 푸른 카드는 한 장도 없다."]
    ],
    evidenceEmphasis:[
      ["빨간 문장 카드 열두 장과 푸른 열쇠 카드 열두 장","푸른 카드 한 장을 내야 한다"],
      ["모두 뒷면이 빨갛다","푸른 카드는 한 장도 없다"]
    ],
    question:"여덟 번째 판에서는 무엇을 바꿀까?",
    answers:[
      ["첫 차례인 사람에게만 성문을 열어 준다","첫 사람이 말을 성안으로 옮겼다. 두 번째 사람이 문 앞에 섰다. 클럽 회원 일동은 방금 치운 규칙서를 다시 펼쳤다."],
      ["규칙서에서 성문을 지운다","성문을 지우니 모두가 무사히 끝까지 갔다. 클럽에서 새로 보낸 편지는 전보다 짧았다. ‘그런데 누가 이긴 겁니까?’"],
      ["중복된 문장 묶음을 열쇠 묶음으로 교환한다","여덟 번째 판에서 클럽의 막내가 푸른 카드 한 장을 내고 말을 성안으로 옮겼다. 클럽의 대국 기록에는 첫 승자의 이름이, 그 아래에는 열쇠를 보내 준 팬텀사의 이름이 적혔다."]
    ]
  },
  {
    id:"merchantRabbitEar", title:"토끼가 기우는 쪽", previewMonth:8, gate:"plush", award:1, correct:1,
    lines:[
      ["","백화점에서 봉제 토끼를 한 줄 통째로 돌려보냈다. 나란히 앉혀 놓으니 모조리 왼쪽 귀를 늘어뜨리고 있었다. ‘진열대가 낮잠 시간의 보육원 같습니다.’ 담당자가 동봉한 쪽지였다."],
      ["세바스찬","누워 있으면 어느 쪽이 저희 견본인지 저도 모르겠군요. 두 마리를 다 세워 보시겠습니까?"]
    ],
    evidence:[
      ["토끼 두 마리","공장 견본은 세워도 두 귀가 선다. 돌아온 토끼의 왼쪽 귀를 손으로 쭉 펴 봤다. 손을 떼면 똑같은 곳에서 접힌다."],
      ["백화점의 포장 견본","뚜껑 안쪽에 왼쪽 귀 끝이 찍혀 있다. 받침 종이를 빼면 귀가 뚜껑에 닿지 않고, 토끼는 상자 속에서도 똑바로 선다."]
    ],
    evidenceEmphasis:[
      ["공장 견본은 세워도 두 귀가 선다","똑같은 곳에서 접힌다"],
      ["왼쪽 귀 끝이 찍혀 있다","받침 종이를 빼면"]
    ],
    question:"다음 상자부터 어디를 손볼까?",
    answers:[
      ["귀 속의 솜을 더 단단히 채운다","귀는 더 단단해졌다. 뚜껑을 덮자 왼쪽 귀가 꺾이면서 안쪽 종이에 전보다 깊은 자국을 냈다."],
      ["포장 받침을 낮춰 두 귀의 공간을 확보한다","다음 상자에서는 열두 마리가 두 귀를 쫑긋 세우고 나왔다. 백화점은 맨 앞의 한 마리를 상자에 그대로 앉혀 진열했다."],
      ["오른쪽 귀도 접어 한 쌍으로 맞춘다","두 귀를 나란히 접어 보낸 날, 백화점에서 원래 주문서를 다시 보내 왔다. 그림 속 토끼는 두 귀를 쫑긋 세우고 있었다."]
    ]
  },
  {
    id:"merchantBlackcurrant", title:"검은 사탕을 찾는 손님", previewMonth:9, gate:"candy", award:1, correct:0,
    lines:[
      ["","저녁 기차를 타는 손님은 역 앞 매점에서 매번 검은까치밥 사탕을 찾았고, 매번 빈손으로 갔다. 매점 주인의 걱정은 조금 달랐다. 장부를 펼 때마다 그 맛만 고스란히 남아 있다는 것이다."],
      ["시엘","맛을 보고 싫다는 손님이 있었어? 방금 저 사람은 한 알도 못 먹었는데."]
    ],
    evidence:[
      ["진열병 두 개","유리병에는 ‘자두’, ‘검은까치밥’ 종이표가 하나씩 붙었다. 제과장이 병마개에 매단 맛표를 읽어 보니 종이표와는 각각 반대로 적혀 있다."],
      ["매점 주인의 시식","종이표가 자두인 병에서는 검은까치밥 향이 났다. 주인은 그제야 두 병을 씻던 날의 이야기를 꺼냈다. 물에 젖을까 봐 종이표를 떼어 한데 두었다고."]
    ],
    evidenceEmphasis:[
      ["각각 반대로 적혀 있다"],
      ["자두인 병에서는 검은까치밥 향","종이표를 떼어 한데 두었다"]
    ],
    question:"다음 기차가 오기 전에 두 병을 어떻게 할까?",
    answers:[
      ["병마개의 맛표와 시식 결과에 맞춰 종이표를 바꾼다","저녁 기차가 들어올 무렵, 그 손님이 처음으로 사탕을 샀다. 한 봉지는 자기 몫이었고, 다른 한 봉지는 딸아이 몫이었다. 그 뒤로 주인은 병을 닦을 때 한 병을 다 닦고 표까지 붙여야 다음 병에 손을 댔다."],
      ["검은까치밥 맛의 생산을 줄인다","다음 날에도 그 손님은 검은까치밥을 찾았다. 주인은 고개를 저었다. 팔꿈치 바로 옆에 ‘자두’라고 적힌 병이 사탕으로 그득했다."],
      ["두 병을 섞어 모둠 사탕으로 판다","모둠 사탕은 잘 팔렸다. 그 손님은 한 봉지를 들여다보다가 기적 소리를 듣고 도로 놓았다. 오늘도 딸아이 몫은 없었다."]
    ]
  },
  {
    id:"merchantTwelfthParcel", title:"열두 번째 선물", previewMonth:11, gate:"hamper", award:1, correct:2,
    lines:[
      ["","호텔 주인이 손가락으로 짚어 가며 선물을 세었다. 열하나. 검수인은 상자를 받을 때도 그렇게 하나씩 짚었으며, 자기 손가락으로 센 건 틀림없이 열둘이었다고 했다. 귀까지 벌겋게 달아올라 있었다."],
      ["시엘","주문이 열두 개였다는 건 알아. 그런데 이 식탁에 앉을 사람은 몇이지?"]
    ],
    evidence:[
      ["연회 좌석표","좌석표에 적힌 손님 이름은 열하나다. 주최자는 좌석표 아래 여백에 조그맣게 숟가락을 그리고 ‘마지막 한 분께는 주방으로’라고 써 두었다."],
      ["선물 리본 주문서","열한 장에는 손님의 이름이 하나씩 적혀 있다. 나머지 한 장에는 ‘먼저 떠나는 요리사 엘런에게’라는 글귀가 있다. 엘런은 오늘 저녁상을 마지막으로 은퇴한다."]
    ],
    evidenceEmphasis:[
      ["손님 이름은 열하나","마지막 한 분께는 주방으로"],
      ["먼저 떠나는 요리사 엘런에게"]
    ],
    question:"호텔 주인은 마지막 상자를 어디서 찾아야 할까?",
    answers:[
      ["마지막 상자를 놓을 자리를 식탁에 더 마련한다","식탁에 빈 의자가 하나 늘었다. 주최자는 좌석표에 그린 숟가락을 짚었다. “그분은 오늘 저녁에도 여기에 앉으실 수가 없어요.”"],
      ["검수인에게 열두 번째 상자를 물어내라고 한다","검수인이 인수증을 펴는 사이 주방 문이 열렸다. 엘런의 손에는 막 끌러 낸 리본이 있었다. 호텔 주인은 인수증을 끝까지 읽기 전에 검수인에게 사과했다."],
      ["주방의 엘런에게 마지막 상자가 닿았는지 확인한다","엘런은 제 이름이 적힌 리본을 반듯이 개어 앞치마 주머니에 넣고 있었다. 시엘은 좌석표의 숟가락 옆에 그 이름을 적어 보냈다. 이번에는 주최자가 직접 주방으로 내려갔다."]
    ]
  },
  {
    id:"merchantCatalogue", title:"도안 번호 열일곱", previewMonth:12, gate:"variety", award:1, correct:1,
    lines:[
      ["세바스찬","주문과 다른 물건이 왔다는 편지가 세 통입니다. 재미있는 건 세 분이 모두 열일곱 번을 주문하셨다는 겁니다."],
      ["","시엘은 반송 주소를 쓰다 말았다. 봉투 세 장은 모두 새하얀데, 거기에 오려 붙인 주문표는 세 장이 다 누렇게 바랬다."]
    ],
    evidence:[
      ["지난겨울 도안첩","열일곱 번은 목제 완구다. 지난겨울에만 쓴 테두리 무늬가 있다. 손님들이 오려 낸 주문표 세 장에도 이 판본의 눈송이 장식이 한 귀씩 남았다."],
      ["이번 도안첩과 출고표","새 판에서는 다른 물품에 열일곱 번이 붙었다. 출고표를 맞춰 보니 점원은 세 번 모두 새 도안첩의 번호대로 물건을 보냈다."]
    ],
    evidenceEmphasis:[
      ["열일곱 번은 목제 완구","이 판본의 눈송이 장식"],
      ["새 판에서는 다른 물품","새 도안첩의 번호대로"]
    ],
    question:"손님도 점원도 열일곱을 골랐다. 세 주문을 어떻게 바로잡을까?",
    answers:[
      ["창고에서 열일곱 번 칸을 옆 칸과 맞바꾼다","지난겨울 주문표를 보낸 세 사람에게는 이제 맞는 물건이 갔다. 네 번째 손님은 새 책에서 주문표를 오렸다. 그 집에도 목제 완구가 배달됐다."],
      ["도안첩의 판본을 먼저 맞추고 세 주문을 교환한다","세 손님은 지난겨울에 골라 둔 목제 완구를 받았다. 다음에 찍은 주문표에는 번호 옆에 판본의 이름이 붙었다. 종이를 아무리 바짝 오려도 둘이 함께 남게끔."],
      ["손님에게 도안 번호를 한 번 더 써 달라고 한다","‘열일곱.’ ‘열일곱.’ 세 번째 손님은 ‘열일곱’ 밑에 줄까지 그어 보냈다. 시엘은 겨울 것과 이번 것, 도안첩 두 권을 나란히 펼쳤다."]
    ]
  },
  {
    id:"merchantBorrowedCrest", title:"상표를 빌린 자들", previewMonth:14, gate:"fame", award:3, correct:0,
    lines:[
      ["","경찰이 두 완구점에서 같은 상회의 장난감을 거둬 갔다. 속에 마약이 들어 있었다. 다행히 아이에게 팔린 것은 아직 없었다. 두 가게에서 그 완구가 놓였던 자리는 팬텀사 제품 바로 옆이었다."],
      ["세바스찬","상회 대표의 말로는 저희와 함께 납품했다는군요. 내일 자선 시연회에는 친절하게도 도련님의 자리까지 마련해 두었답니다."],
      ["시엘","그자가 내 이름을 쓰는 동안 나는 그 얼굴을 한 번도 못 봤군. 마침 자리도 있다니, 가서 인사해야지."]
    ],
    evidence:[
      ["자선회 서기의 회신","서기가 상회의 추천서와 자선회에 보관된 편지를 나란히 놓았다. 추천서는 자선회 소장 원본을 베낀 것이었다. 원본에는 용도가 ‘작년 연회 감사 인사’라고 적혀 있다. 추천서에는 그 끝 줄만 빠졌다."],
      ["완구상 두 곳의 증언","두 가게의 주인은 모두 문제의 완구를 팬텀사에서 받은 적이 없다. 주인들은 서로 다른 날 상회 대표에게서 물건을 샀다. 각자 제 돈통에 넣어 둔 영수증에 같은 대표의 서명이 있다."]
    ],
    evidenceEmphasis:[
      ["자선회 소장 원본을 베낀","‘작년 연회 감사 인사’"],
      ["팬텀사에서 받은 적이 없다","같은 대표의 서명"]
    ],
    question:"시연회에서 무엇을 근거로 누구의 이름을 댈까?",
    answers:[
      ["추천서 원본과 두 영수증을 맞춰 상회 대표를 지목한다","시엘이 원본의 마지막 한 줄을 읽고 두 완구상이 영수증을 한 장씩 폈다. 대표는 입을 다물었다. 상회를 내세웠던 마피아 일당이 경시청에 연행될 때까지 기자들은 자리를 지켰다. 일당이 직접 부른 기자들이었다. 이튿날 두 가게의 창에는 시엘이 서명한 회수 공고가 나붙었다."],
      ["팬텀사 창고의 출고 담당자를 먼저 지목한다","장부를 처음부터 뒤져도 그런 물건을 내보낸 기록은 없었다. 시엘이 사람들 앞에서 담당자의 이름을 거두는 동안 경시청은 두 가게를 따로 찾아가 영수증을 받았다."],
      ["시연회를 취소하고 경시청에 수사를 맡긴다","문제의 완구는 팔리기 전에 수거됐고 경시청은 상회 수사에 들어갔다. 그 뒤로도 팬텀사에는 초청장을 든 사람들이 찾아왔다. “그럼 여기에 적힌 백작님의 이름은 뭡니까?”"]
    ]
  },
  {
    id:"merchantBenefitShow", title:"흰 표 쉰 장", previewMonth:18, gate:"sales", award:1, correct:2,
    lines:[
      ["","팬텀사가 완구를 빌려준 자선 공연에는 빈자리가 하나도 없었다. 막이 내리고 돈을 세어 본 극장주는 출입구 직원을 불러 세웠다. 표 값이 반밖에 없으니 누군가 동전함에 손을 댄 게 틀림없다고 했다."],
      ["시엘","그 사람은 잠깐 놔둬. 돈은 자네가 셌으니 나는 표를 세어 볼게."]
    ],
    evidence:[
      ["회수한 입장권","회수한 표는 푸른 유료표 오십 장과 흰 초대권 오십 장이다. 푸른 표에 찍힌 값을 모두 더하면 동전함 속 금액과 한 푼도 어긋나지 않는다."],
      ["인쇄소의 주문서","후원자의 인쇄 주문에는 ‘아이 쉰 명 무료 초대’라는 글씨가 있다. 극장주의 예상 수입표에는 ‘백 자리 전부 유료’라고 적혀 있다."]
    ],
    evidenceEmphasis:[
      ["푸른 유료표 오십 장과 흰 초대권 오십 장","한 푼도 어긋나지 않는다"],
      ["아이 쉰 명 무료 초대","백 자리 전부 유료"]
    ],
    question:"매표 수입이 예상의 절반으로 나온 까닭은 뭘까?",
    answers:[
      ["입구 직원에게 모자라는 표 값을 청구한다","직원은 흰 표를 반듯이 접어 묶은 꾸러미를 꺼냈다. 쉰 장이었다. 극장주는 아까 그 말을 들은 사람들을 도로 불러 모아야 했다."],
      ["다음번에는 표 값을 두 배로 정한다","다음 공연의 표 값이 두 배가 됐다. 후원자는 새 가격표를 밀어 놓고 이번 장부부터 펼쳤다. “그래서, 제가 초대한 아이들은 어느 줄입니까?”"],
      ["무료 초대석을 따로 정산하고 직원의 누명을 벗긴다","시엘이 좌석표에 흰 표를 한 장씩 놓았다. 쉰 자리를 덮고 나니 남은 자리의 표 값은 돈통과 꼭 맞았다. 극장주는 직원을 곁에 세운 채 제 손으로 장부를 고쳤다. 아이들 쉰 명은 그날 공짜로 공연을 보았다. 애초에 그러기로 한 저녁이었다."]
    ]
  }
];

const companyCaseFirstMonth=2;
const companyCaseMonthlyChance=0.5;
function companyCaseEligible(run,item){
  if(run.month<companyCaseFirstMonth || run.flags[item.id] || run.events.some(record=>record.id===item.id))return false;
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
  if(companyCases.some(item=>run.pending===item.id||(run.eventQueue||[]).includes(item.id)))return null;
  const last=run.events.findLast(record=>companyCases.some(item=>item.id===record.id));
  if(last&&run.month-last.month<2)return null;
  const eligible=companyCases.filter(item=>companyCaseEligible(run,item));
  // Separate seeded draws keep both timing and selection stable after loading,
  // without biasing the selected case toward the occurrence draw's passing range.
  if(!eligible.length || monthlyDraw(run,0x4348414e)>=companyCaseMonthlyChance)return null;
  return eligible[Math.floor(monthlyDraw(run,0x43415345)*eligible.length)];
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
   lines:[["","밤새 바람이 온실 유리를 한 줄 걷어 갔다. 깨진 유리는 서른두 칸이었다. 시엘의 아침 식탁에는 꽃 한 송이와 그 서른두 칸에 들어갈 유리값을 적은 유리공의 청구서가 나란히 놓였다."],
          ["시엘","청구서는 저택 앞으로 돌려. ……꽃은 왜 가져가? 그건 거기에 둬."]]},
  {id:"setbackFall",month:2,title:"빈 등자",room:"field",hp:-18,stress:5,eligible:(run,ride)=>ride,
   lines:[["","마지막 모퉁이를 도는데 발밑에 등자가 없었다. 다음으로 시엘이 본 것은 눈앞의 젖은 모래였다. 깔린 어깨가 아프다는 건 숨을 한 번 들이켠 뒤에야 알았다."],
          ["세바스찬","말은 제가 데려오지요. 도련님은 오늘 저녁에는 그쪽 손으로 찻잔만 안 드시면 됩니다."]]},
  {id:"setbackPress",month:5,title:"한 줄 밀린 가격표",room:"office",cost:46,eligible:run=>run.report.sold>=6,
   lines:[["","전단에 찍힌 값이 한 줄씩 밀렸다. 손님들은 제 물건 밑에 적힌 값을 셌고 점원은 그 돈을 받았다. 벌써 가게 밖까지 줄이 서 있었다."],
          ["시엘","손님이야 우리가 적은 값에 샀지. 차액도 전단을 다시 찍는 비용도 팬텀사 앞으로 달아."]]},
  {id:"setbackLetter",month:9,title:"연회가 끝난 뒤",room:"ballroom",renown:-2,stress:6,eligible:run=>run.renown>=2,
   lines:[["","답신 봉투가 반송되어 돌아왔다. 연회는 어제 끝났다. 조간지에는 좌석표까지 실렸는데, 주빈 바로 옆 한 칸에만 이름이 없었다."],
          ["시엘","저쪽에선 내가 대답도 안 한 셈이군. 종이를 줘. 사과문은 내가 쓰지."]]},
  {id:"setbackBells",month:10,title:"새벽 두 시의 종",room:"bedroom",hp:-10,motivation:-6,
   lines:[["","새벽 두 시에 울리기 시작한 마을 종이 동틀 무렵에야 멎었다. 이웃 헛간의 불은 꺼졌고, 시엘의 베개는 어제 펴 놓은 모양 그대로였다."],
          ["세바스찬","차를 새로 올릴까요, 도련님? 지금 읽으시는 면을 펴셨을 때는 찻잔에서 김이 났는데요."]]},
  {id:"setbackAxle",month:15,title:"돌아오지 않은 마차",room:"office",cost:68,eligible:run=>run.report.sold>=9,
   lines:[["","런던 다리를 앞두고 팬텀사 짐마차의 차축이 부러졌다. 빌린 마차 셋에 짐을 나눠 싣고 마지막 한 대가 도착하고서야 상점의 문을 열었다."],
          ["세바스찬","상자는 하나도 빠지지 않았습니다. 청구서가 좀 늘었군요. 마차 세 대의 운임에 새 차축 하나의 값까지 붙었습니다."]]},
  {id:"setbackPipe",month:20,title:"식당 천장의 물자국",room:"ballroom",cost:84,
   lines:[["","은쟁반 한복판에 물 한 방울이 떨어졌다. 쟁반을 옮기자 식탁보가 젖었다. 천장을 열어 보니 오래된 수도관의 이음매가 벌어져 있었다."],
          ["시엘","배관공이 오면 바로 식당으로 들여. 오늘 저녁은 내가 자리를 옮기지. 서재에 상을 차려."]]}
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
    {id:"supplierReply",chapter:true,speaker:"세바스찬",title:"인수증의 두 번째 장",lines:[["세바스찬","도련님, 공장에서 답이 왔습니다. 인수증을 한번 보시지요."]],text:"도련님, 공장에서 답이 왔습니다. 인수증을 한번 보시지요.",
     rememberedText:s=>(s.flags.audit||recordedChoice(s,"match")===0)?"지난번 명부에는 같은 작업장의 이름이 두 번 있었지요. 오늘 온 인수증을 보십시오. 두 줄 중 하나에서 작업장의 이름을 지웠군요.":"직원 대표가 겨우 구한 사본이랍니다. 물건을 만든 사람들의 손에는 정작 인수증이 한 장도 돌아가지 않았다더군요.",
     sees:s=>after(s,"match"),choices:[choice("다음 납품부터 양쪽에 사본을 보내.","납품하는 쪽과 받는 쪽에 인수증을 한 장씩 보냈다. 새 재주문에서 개당 대금 +£1.",()=>{state.flags.sharedReceipt=true;shift("renown",1)}),
       choice("경리 담당에게 두 장을 맞춰 보라고 해.","경리 담당이 인수증 두 장을 대조하게 됐다. 새 재주문의 미납 부담이 개당 £1로 감소한다.",()=>{state.flags.checkedReceipt=true;changeStat("경영",5)})]},
    {id:"postalReply",chapter:true,speaker:"세바스찬",title:"회송 봉투",text:"화이트채플에서 답신이 왔습니다.",
     rememberedText:s=>(s.flags.postmark||recordedChoice(s,"chapel")===0)?"도련님께서 읽으신 소인을 토대로 우체국에서 회신을 보내왔습니다. 해당 전보는 이틀 동안 한 창구에 묵혀 있었다더군요.":"지난번 정리하신 연락망에서 답이 왔습니다. 세 곳에서 똑같은 전보를 수령했는데, 정작 회신할 주소가 제각각입니다.",
     sees:s=>after(s,"chapel"),choices:[choice("원본과 답신을 한 봉투에 넣어.","화이트채플 서신을 가문 기록에 보관했다.",()=>changeStat("통찰",5)),
       choice("첫 제보자에게 확인을 부탁해.","첫 제보자에게 답장을 보냈다.",()=>changeStat("의지",5))]},
    {id:"snakeReturn",speaker:"스네이크",title:"돌아오는 길",text:"갈 곳이 없으면 오랬지? 아직 우리 자리가 있어? ⋯라고 에밀리가 말했어.",
     sees:()=>false,choices:[choice("네 자리는 비워 뒀어. 들어와.","스네이크가 돌아와 풋맨으로 일한다.",()=>recruit("snake"))]}
  ];
}
