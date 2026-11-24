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
  ["지성", "번역자의 여백", [["두 번역본에서 같은 문장의 주어가 서로 다르군요. 도련님께서 고르신 쪽을 들려주시지요.", "앞 문장까지 이어서 번역한다", "동사 어미부터 대조한다"], ["인쇄소에서 마지막 교정쇄가 왔습니다. 이 한 줄대로라면 여우가 사냥꾼에게 쫓아오라고 명령하는 셈인데요.", "여우의 대사를 고쳐 읽는다", "원서의 인용부호를 확인한다"]]],
  ["기품", "박자가 멎은 무도회", [["곡이 끝난 줄 알고 손님 한 분이 먼저 박수를 치셨습니다. 아직 파트너의 손을 잡고 계시지요, 도련님?", "마지막 박에 맞춰 함께 인사한다", "파트너에게 다음 박을 짚어 준다"], ["첫 춤을 청하신 두 분이 같은 곡명을 적으셨군요. 벌써 악장이 활을 들었습니다.", "두 손님께 직접 순서를 청한다", "춤 수첩의 빈 곡을 찾아본다"]]],
  ["매력", "답장이 오는 초대장", [["지난번에도 같은 분이 다과회 초대를 사양하셨습니다. 그런데 도련님의 온실에 관해서는 두 장이나 쓰셨더군요.", "온실의 첫 꽃을 함께 보자고 쓴다", "답장 속 꽃 이름을 다시 읽는다"], ["손님들은 모두 귀가하셨는데 맨 끝자리의 명찰만 뒤집혀 있습니다. 그분께 오늘 감사 편지를 쓰신다면 어떤 일을 떠올리시겠습니까?", "둘이 나눈 짧은 농담을 적는다", "그 손님이 머물던 자리를 돌아본다"]]],
  ["경영", "원장의 마지막 한 닢", [["돈통은 장부보다 한 페니가 많습니다. 거스름돈을 못 받은 손님이 아직 가게 안에 계시겠군요.", "영수증을 맞춰 손님을 찾는다", "작은 동전부터 다시 센다"], ["매출은 늘었는데 금요일 임금을 치를 돈이 모자랍니다. 외상 장부와 주문서 중 어느 쪽을 먼저 보시겠습니까?", "입금일 순으로 지급 계획을 짠다", "금요일 전에 받을 대금을 표시한다"]]],
  ["통찰", "뒤집힌 차륜", [["수레는 왼쪽으로 넘어졌는데 짐 상자의 오른쪽 모서리만 패였습니다. 어느 흔적이 먼저 생겼을까요?", "바퀴 자국을 따라 사고 순서를 짚는다", "상자를 수레에 다시 맞춰 본다"], ["같은 설계도로 만든 두 수레 중 하나만 빈 채로도 기웁니다. 제작자는 바퀴 지름이 같다고 장담하더군요.", "두 차축을 바꿔 끼워 원인을 가린다", "평평한 바닥에서 축 높이를 잰다"]]],
  ["의지", "미완성 악보", [["셋째 마디에서 활이 멎자 세바스찬은 피아노 건반에서 손을 뗐다. “반주는 어디서 다시 들어갈까요, 도련님?”", "셋째 마디부터 끝까지 이끈다", "활이 걸린 두 음을 따로 켠다"], ["마지막 장을 넘기는 순간 보면대에서 악보가 미끄러졌다. 세바스찬은 반주를 이어 가며 다음 마디의 첫 박을 비워 두었다.", "빈 박을 받아 기억한 선율을 잇는다", "박자를 짚으며 합주할 곳을 찾는다"]]],
  ["체력", "마지막 한 바퀴", [["정원 끝까지는 아직 한 바퀴 남았습니다. 아까부터 자갈 위 발소리가 두 걸음씩 붙어 들리는군요.", "보폭을 줄여 일정한 속도로 완주한다", "분수대까지 내쉬는 숨을 맞춘다"], ["마차가 떠나기 전에 정문으로 가셔야 합니다. 계단에서는 여유가 있었는데 자갈길에 드니 숨이 가빠지셨군요.", "남은 거리에 맞춰 걸음을 나눈다", "모퉁이까지 호흡부터 고른다"]]]
];
const portfolioRanks=[
  {threshold:120,reward:35,name:"응용 실기"},
  {threshold:375,reward:18,name:"최종 실기"}
];
function portfolioEvents(){
  return portfolios.flatMap(([stat,title,scenes],i)=>portfolioRanks.map(({threshold,reward,name},rank)=>({
    id:"portfolio-"+i+"-"+rank,statExam:true,exam:true,speaker:"세바스찬",title:title+" · "+name,
    text:scenes[rank][0],
    sees:run=>run.stats[stat]>=threshold && (!rank||(run.month>=25&&run.flags["portfolio-"+i+"-0"]&&actions[run.sequence?.activity]?.gains[stat]>0)),
    choices:[
      choice(scenes[rank][1],name+" 통과",()=>changeStat(stat,reward)),
      choice(scenes[rank][2],name+" 보충",()=>{changeStat(stat,Math.ceil(reward*.7));shift("stress",-15);})
    ]
  })));
}
const middleObservations={
  "season-16":{
    통찰:"저 화분만 받침 아래 흙이 말랐어. 방금 옮긴 거지? 리지, 그 옆에서부터 찾아보자.",
    매력:"리지, 내가 장미 쪽을 볼 때만 웃음을 참더군. 이리 와. 마지막 건 같이 열자.",
    지성:"앞의 달걀은 수선화, 제비꽃, 은방울꽃 순이었어. 네 자수 도안 순서잖아. 다음 꽃을 보여 줘."
  },
  jubilee:{
    기품:"봉투에는 폐하의 존호를 다 썼는데 편지 첫 줄은 평소 호칭이군. 새 종이를 가져와. 첫 줄은 내가 쓸게.",
    경영:"견본은 마차에 실었는데 수령증이 여기 있어. 궁에 닿아도 누가 받았는지 모르겠군. 한 부 더 써.",
    통찰:"봉랍 가장자리가 눌렸어. 아직 보내지도 않은 편지를 누가 서류 밑에 깔아 둔 거지? 다시 봉하겠다."
  },
  birthday2:{
    통찰:"나이트가 지나간 자리에 설탕 가루가 끊겼군. 미끄러진 게 아니라 들어서 옮겼어. 비숍은 거기 둬.",
    기품:"네 자리에서만 비숍이 안 보이겠군. 생일 손님에겐 판을 볼 권리쯤은 줘야지. 의자를 당겨.",
    경영:"주방에서 센 건 흰 말 열다섯 개였지? 여기 열넷밖에 없어. 접시 아래 그 폰부터 꺼내."
  }
};
const observationReplies={
  "season-16":[["엘리자베스","그걸 봤어? 리본까지 새로 묶었는데! 자, 열어 봐. 마지막 달걀은 네 거야."],["엘리자베스","그럼 셋 하면 같이 들어 올리자. 하나, 둘…… 시엘, 벌써 봤지?"]],
  jubilee:[["","시엘은 편지 끝에 가문의 이름을 적고 봉랍이 식을 때까지 손을 떼지 않았다."],["","세바스찬이 견본을 비단으로 감싸자 시엘은 왕실에 보낼 상자의 뚜껑을 직접 덮었다."]]
};
function observedLines(event){
  const variants=middleObservations[event.id];
  if(!variants)return null;
  const key=Object.keys(variants).reduce((a,b)=>state.stats[a]>=state.stats[b]?a:b);
  if(event.id==="birthday2"){
    const lines=birthdayDialogue.birthday2.lines;
    return [...lines.slice(0,-2),["시엘",variants[key]],...lines.slice(-2)];
  }
  return [[event.speaker,event.text],["시엘",variants[key]]];
}
function termPages(event){
  if(event.authored)return event.lines;
  const observation=observedLines(event);
  if(observation)return observation;
  if(event.lines)return event.lines;
  const birthday=birthdayDialogue[event.id];
  if(birthday)return birthday.lines;
  const script=event.slot&&examDialogue[event.slot];
  return event.exam&&script?[["",script[0]],["시엘",script[1]],["세바스찬",event.text]]:null;
}
function termCue(event){
  const lines=state.termOutcome?.id===event?.id?state.termOutcome?.responseLines:termPages(event);
  return lines?.[Math.min(state.termPage||0,lines.length-1)]?.[3];
}
function termDialogue(event,buttons){
  const pages=termPages(event);
  const outcome=state.termOutcome?.id===event.id?state.termOutcome:null;
  if(!pages&&!outcome?.response)return "";
  const script=outcome?.responseLines??(outcome?.response?[["",outcome.response]]:outcome?(event.authored?[["",event.response]]:birthdayDialogue[event.id]?.replies[outcome.index]||(observationReplies[event.id]?.[outcome.index]?[observationReplies[event.id][outcome.index]]:null)||[["세바스찬",examDialogue[event.slot][2+outcome.index]]]):pages);
  const at=Math.min(state.termPage||0,script.length-1),[who,line]=script[at];
  const end=at===script.length-1,actions=end?(outcome?btn(outcome.nextScene?"다음 장면":"기록을 덮는다","term-close"):buttons):btn("다음 ▸","term-next:"+at);
  const room=event.room||(event.id==="season-16"?"garden":null)||birthdayDialogue[event.id]?.room||choreography[event.slot]?.[0]||"ballroom";
  const cue=termCue(event),picture=cue?.cg||event.picture;
  const art=picture?"assets/endings/"+picture+".webp":sceneArt[room];
  if(picture)rememberCG(art);
  const standing=cue?.standing||event.standing;
  const cast=novelCast(cue,recruitArtwork(currentCielAge()))??(standing&&Object.hasOwn(recruitCast,standing)
    ?sceneStanding(recruitNames[standing],"left",recruitArtwork(currentCielAge())(recruitCast[standing])):picture?"":dialogueCast(event.id==="season-16"?"엘리자베스":"세바스찬"));
  const speaker=novelSpeakerName(who);
  return '<div class="review-room" style="background-image:url(&quot;'+art+'&quot;)"></div>'+cast+
    '<article class="dialogue">'+(speaker?'<small>'+escapeHTML(speaker)+'</small>':"")+'<p>'+escapeHTML(line)+'</p>'+
    (outcome?.note&&end&&!state.choiceImpact?'<small>'+escapeHTML(outcome.note)+'</small>':'')+'<div class="answers">'+actions+'</div></article>';
}
