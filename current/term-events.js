"use strict";

// These records belong to the live campaign. A reader may leave and return between any two lines.
const birthdayDialogue = {
  birthday: {
    room:"ballroom",
    lines:[
      ["","접시 가장자리에 흰 설탕이 조금 묻어 있었다. 시엘은 검지로 그것을 닦다가 촛불을 보았다."],
      ["시엘","열하나. ……제대로 셌네."],
      ["세바스찬","작년에 쓰시던 촛대에는 열 개밖에 들어가지 않아서요. 하나는 케이크에 바로 꽂았습니다."],
      ["시엘","그래서 한 개만 기울었군."],
      ["","마지막 초가 흘린 밀랍이 크림에 닿기 직전이었다. 시엘이 접시를 제 쪽으로 당겼다."],
      ["시엘","그건 내가 끌게. 너는 칼을 데워 와. 찬 걸로 자르면 단면이 망가져."],
      ["세바스찬","예, 도련님. 첫 조각은 어느 접시에 덜어 드릴까요?"]
    ],
    replies:[
      [["","홍차를 따르는 사이, 시엘이 케이크의 모서리를 반듯하게 잘라 냈다."],["시엘","올해는 이 정도면 돼. 차는…… 한 잔 더 줘."]],
      [["","시엘은 잠시 빈 접시를 내려다보다가 자기 앞으로 가져왔다."],["시엘","여기에. 내 생일인데 자꾸 네가 먼저 정하게 둘 순 없잖아."]]
    ]
  },
  birthday2: {
    room:"ballroom",
    lines:[
      ["","올해는 열두 개가 다 촛대에 들어갔다. 초 사이의 설탕 체스 말만 하나 비스듬했다."],
      ["시엘","이거 어제 두던 판이잖아. 내 나이트가 거기가 아니었을 텐데."],
      ["세바스찬","주방에서 오는 동안 한 칸 미끄러진 모양입니다. 제 킹에는 뜻밖의 행운이었지요."],
      ["","시엘이 케이크 받침을 사분의 일 바퀴 돌렸다. 검은 왕 뒤에 흰 비숍이 숨어 있었다."],
      ["시엘","잘도 미끄러졌군. 그렇게 둬 봐. 두 수면 끝나."],
      ["세바스찬","초가 녹기 전까지 제게 두 수나 허락해 주시겠습니까?"],
      ["시엘","오늘은 내 시계로 재. 먼저 둘지 말지는 네가 정해."]
    ],
    replies:[
      [["","세바스찬이 폰을 밀자 시엘은 기다렸다는 듯 설탕 비숍을 집었다."],["시엘","체크메이트. 네 몫은 네가 지킨 폰으로 해."]],
      [["","시엘은 말을 집는 대신 접시를 저택 식구 수만큼 꺼내 놓았다."],["시엘","식으면 다 같은 설탕이지. 사람들 먼저 불러. 초는 같이 끌 거야."]]
    ]
  }
};

const examDialogue = {
  study:["세 통의 봉투가 책상에 놓였다. 세바스찬이 날짜를 가린 뒤 모래시계를 뒤집었다.","날짜까지 덮으면 필적도 단서가 되겠지.","연대를 정하셨으니 틀린 날짜가 적힌 사본도 골라내시겠군요.","필체를 옮긴 두 줄을 인장 옆에 놓으십시오. 같은 해인지 보이십니까?"],
  etiquette:["세바스찬은 문 앞으로 나가 장갑을 벗고, 뒤늦은 손님처럼 노크했다.","내가 문까지 나가면 먼저 온 손님이 혼자가 되는군.","양쪽 손님이 모두 자리에 앉았습니다. 차도 식지 않았고요.","좌석표에 한 칸을 남겨 두지요. 손님이 늘 때마다 주인이 일어설 수는 없습니다."],
  accounts:["바퀴 달린 말 열 개를 세운 집사가 동전 아홉 닢을 내려놓았다.","한 닢을 어디 감췄는지만 물으면 시험이 안 되겠지.","전표 날짜까지 맞습니다. 내일 들어올 한 닢도 마감할 수 있겠군요.","물건 수는 맞았습니다. 이번엔 외상 장부의 마지막 줄을 보시지요."],
  inquiry:["봉랍 두 덩이가 촛불 가까이에서 서로 다른 냄새를 냈다.","인장은 하나인데 밀랍을 두 종류나 썼다고?","금이 간 자국까지 겹칩니다. 봉한 사람과 보낸 사람을 나눠 볼 수 있겠군요.","무게는 같습니다. 손톱으로 누른 자리도 같을까요?"],
  language:["세바스찬이 책을 닫고 같은 문장을 두 번 읽었다. 두 번째에는 한 음절이 달랐다.","마지막 동사가 달랐어. 누가 말하는지 바꿨군.","예. 이제 다른 사람이 한 말을 그대로 옮겨도 주인이 바뀌지 않겠습니다.","표를 보셔도 됩니다. 대신 이번 문장은 도련님 자신의 말로 읽으시지요."],
  music:["활이 현에서 떨어지자 집사가 악보를 뒤집었다. 끝나지 않은 음 하나가 방에 남았다.","적어도 어디서 끊을지는 먼저 말해 주지 그래.","다음 악구로 넘어가는 숨까지 이어졌습니다. 악보를 돌려 드리지요.","첫 박자를 잡으셨군요. 이제 그 박자를 간직한 채 셋째 마디부터."],
  dance:["축음기가 회전하는데 반주가 한 박자 비었다. 집사의 발끝이 아직 바닥에 닿지 않았다.","이대로 돌면 네 발을 밟겠어.","상대가 디딜 자리를 남겨 두셨습니다. 다음 곡도 이 속도로 하지요.","마룻결을 기준으로 두 발을 다시 놓으십시오. 제가 먼저 체중을 옮기겠습니다."],
  social:["세바스찬이 빈 의자 둘을 놓고 은쟁반 하나를 그 사이에 밀었다.","손님이 둘인데 네 역할도 둘이야? 꽤 바쁘겠군.","쟁반은 테이블에 남고 손님끼리 이야기를 시작했습니다. 훌륭한 주최시군요.","잔은 충분합니다. 이제 어느 쪽 손님께 먼저 말을 거시겠습니까?"],
  negotiate:["가격이 같은 견적서 두 장. 세바스찬이 달력 위에 반씩 겹쳐 놓았다.","하나는 박람회가 끝난 뒤에 오잖아.","연착 책임을 넣으니 싼 쪽이 바뀌었습니다. 이 조건으로 서명하시지요.","합계 아래의 작은 글씨도 보십시오. 마차가 늦으면 누가 비용을 냅니까?"],
  exercise:["체조실 바닥에 분필선이 세 줄 그어져 있었다. 세바스찬이 회중시계의 뚜껑을 열었다.","끝에 가서 뛰면 금방인 거리인데.","마지막 선에서도 보폭이 같았습니다. 기록보다 호흡을 먼저 보셨군요.","천천히 내쉬십시오. 시계는 제가 멈췄으니 도련님이 준비되면 다시 시작하지요."]
};

const portfolios = [
  ["지성","번역자의 여백","동화 초판과 라틴어 원서에서 같은 문단을 찾아 한 줄로 주석을 단다."],
  ["기품","박자가 멎은 무도회","반주가 멎은 사이에 파트너와 늦게 온 손님을 함께 자리로 이끈다."],
  ["매력","답장이 오는 초대장","손님 명부를 훑어보고, 내성적인 손님도 선뜻 답장을 쓸 만한 초대장을 한 통 적는다."],
  ["경영","원장의 마지막 한 닢","납품가와 외상 전표를 맞춰 금고에 남은 한 닢의 행방을 밝힌다."],
  ["통찰","뒤집힌 차륜","수레가 쓰러진 자리의 약도를 시제품 설계도와 포개고 뒤집힌 축을 짚는다."],
  ["의지","미완성 악보","악보 한가운데에 책갈피가 놓였다. 세 번을 틀린 마디에서 다시 시작해 곡을 끝까지 잇는다."],
  ["체력","마지막 한 바퀴","체조실의 호흡을 잃지 않고 정원을 한 바퀴 돈 뒤 마지막 무도의 회전을 마친다."]
];
const portfolioRanks=[
  {threshold:120,reward:75,name:"응용 실기"},
  {threshold:375,reward:125,name:"최종 실기"}
];
function portfolioEvents(){
  return portfolios.flatMap(([stat,title,assignment],i)=>portfolioRanks.map(({threshold,reward,name},rank)=>({
    id:"portfolio-"+i+"-"+rank,statExam:true,exam:true,speaker:"세바스찬",title:title+" · "+name,
    text:assignment+" 세바스찬이 채점표를 내밀었다. “도련님의 풀이로 마치시겠습니까?”",
    sees:run=>run.stats[stat]>=threshold && (!rank||(run.month>=25&&run.flags["portfolio-"+i+"-0"])),
    choices:[
      choice("끝까지 직접 해 보인다",name+" 통과",()=>changeStat(stat,reward)),
      choice("어려운 부분만 다시 짚는다",name+" 보충",()=>{changeStat(stat,Math.ceil(reward*.7));shift("stress",-15);})
    ]
  })));
}
function termPages(event){
  if(event.authored)return event.lines;
  const birthday=birthdayDialogue[event.id];
  if(birthday)return birthday.lines;
  const script=event.slot&&examDialogue[event.slot];
  return event.exam&&script?[["",script[0]],["시엘",script[1]],["세바스찬",event.text]]:null;
}
function termDialogue(event,buttons){
  const pages=termPages(event);
  const outcome=state.termOutcome?.id===event.id?state.termOutcome:null;
  if(!pages&&!outcome?.response)return "";
  const script=outcome?.response?[["",outcome.response]]:outcome?(event.authored?[["",event.response]]:birthdayDialogue[event.id]?.replies[outcome.index]||[["세바스찬",examDialogue[event.slot][2+outcome.index]]]):pages;
  const at=Math.min(state.termPage||0,script.length-1),[who,line]=script[at];
  const end=at===script.length-1,actions=end?(outcome?btn("기록을 덮는다","term-close"):buttons):btn("다음 ▸","term-next:"+at);
  const room=event.room||birthdayDialogue[event.id]?.room||choreography[event.slot]?.[0]||"ballroom";
  const art=event.picture?"assets/endings/"+event.picture+".webp":sceneArt[room];
  const cast=event.standing&&Object.hasOwn(recruitCast,event.standing)
    ?sceneStanding(recruitNames[event.standing],"left",recruitCast[event.standing]):event.picture?"":dialogueCast("세바스찬");
  return '<div class="review-room" style="background-image:url(&quot;'+art+'&quot;)"></div>'+cast+
    '<article class="dialogue"><small>'+escapeHTML(who||event.title)+'</small><p>'+escapeHTML(line)+'</p>'+
    (outcome?.note&&end?'<small>'+escapeHTML(outcome.note)+'</small>':'')+'<div class="answers">'+actions+'</div></article>';
}
