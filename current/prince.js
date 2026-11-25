"use strict";

function awaitingTownhouseGuests(run){
  const {finny,mey,bard,soma,agni}=run.people;
  return Boolean(run.flags.townhouse&&finny&&mey&&bard&&!(soma&&agni));
}
function scheduleTownhouseGuests(run,arrivalMonth=run.month+1){
  if(awaitingTownhouseGuests(run)&&!Number.isInteger(run.townhouseGuestMonth)){
    run.townhouseGuestMonth=arrivalMonth;
  }
}
function townhouseGuestsDue(run){
  return awaitingTownhouseGuests(run)&&Number.isInteger(run.townhouseGuestMonth)&&run.month>=run.townhouseGuestMonth;
}
function bardNeededForEarlyGuests(run){
  const {finny,mey,bard,soma,agni}=run.people;
  return Boolean(run.flags.townhouse&&finny&&mey&&soma&&agni&&!bard);
}

const princeChapter={
  name:"소마·아그니", title:"런던 집의 두 주인", result:"소마와 아그니가 보수를 받고 런던 타운하우스의 관리를 맡았다.",
  scenes:[
    {title:"골목에서 고른 편",art:"street",music:"gloomy",cast:["ciel","seb"],lines:[
      ["장면","런던 이스트엔드. 시엘과 세바스찬이 골목을 돌아서자, 일거리를 기다리던 인도인 사내 몇이 둘을 에워쌌다. "],
      ["","맨 앞의 사내가 시엘의 옷깃을 움켜쥐었다.",true],
      ["사내","부두에선 우리 보고 인도로 돌아가라더군. 거기선 너희 나라 사람들이 일자리를 차지하고 있는데 말이야. 도련님은 어느 쪽으로 가라고 할 텐가?"],
      ["시엘","내 옷깃을 놓으면 대답하지."],
      ["소마","아그니, 저기 봐! 영국 귀족에다 집사까지 있잖아. ",null,{"right":"soma","left":"agni"}],
      ["소마","난 우리 동포 편이야. 저 둘을 막아 줘!",null,{"right":"soma","left":"agni"}]
    ]},
    {title:"왕자의 첫 명령",art:"street",music:"gloomy",cast:["agni","seb"],lines:[
      ["장면","사내의 손이 시엘의 깃에서 떨어졌다. "],
      ["","고개를 돌렸을 때 세바스찬은 벌써 낯선 남자와 맞붙어 있었다. 마차 한 대가 골목을 지나도록 어느 쪽도 물러서지 않았다."],
      ["아그니","……이상하군요. 보통 사람이라면 벌써 몇 번은 정신을 잃었을 텐데. 어찌 아직 서 계십니까?"],
      ["세바스찬","글쎄요. 도련님께서 아직 돌아가시라는 말씀을 안 하셔서."],
      ["시엘","잠깐, 너희가 봤다는 건 어디부터지? ",null,{"right":"ciel","left":"agni"}],
      ["","내 옷깃을 잡은 건 저쪽이야. 내가 영국인이면 그건 물을 필요도 없나?",null,{"left":"agni","right":"ciel"}]
    ]},
    {title:"왕자의 두 번째 명령",art:"london",music:"daily",cast:["soma","ciel"],lines:[
      ["소마","뭐? 이봐, 너희가 먼저 저 애 멱살을 잡았어?"],
      ["장면","사내가 시엘의 옷깃에서 뜯어낸 단추를 슬쩍 놓았다. 돌바닥에 떨어지는 소리에 소마의 눈썹이 올라갔다."],
      ["소마","그럼 너희가 잘못했잖아! 아그니, 저 땅꼬마 좀 도와줘! 집사도!"],
      ["","…….",null,{"hideCast":true}],
      ["장면","소란이 가라앉았을 때 골목의 사내들은 하나같이 바닥에 뻗어 있었다. ",null,{"hideCast":true}],
      ["장면","소년은 제 이름이 소마 아스만 카다르라고 외치고는, 아그니를 데리고 저만치 가 버렸다.",null,{"hideCast":true}],
      ["세바스찬","우선 이분들부터 시경에 인계하지요. 단추는 제가 달아 드리겠습니다.",null,{"left":"seb","right":"ciel"}]
    ]},
    {title:"돌아온 일행",art:"parlour",music:"daily",cast:["finny","mey"],lines:[
      ["장면","타운하우스 문이 열렸다. 피니안이 시엘의 외투를 받고 메이린이 모자를 받았다. 바르도는 젖은 장갑을 말리겠다며 부엌에서 집게를 들고 나왔다.","타운하우스 문이 열렸다. 피니안이 외투를, 메이린이 모자를 받았다. 바르도가 부엌 집게로 시엘의 장갑을 집으려 하자 타나카가 말없이 은쟁반을 내밀었다."],
      ["시엘","세바스찬. 그런데 하룻밤 묵는 데 왜 셋을 전부 데려온 거지?"],
      ["세바스찬","지난번에 셋에게 집을 맡겼을 때 말입니다. 돌아와 보니 밖에서도 식당 안이 훤히 보이더군요. 원래 벽이 있던 쪽으로요."],
      ["시엘","그 얘기는 됐어. 세바스찬, 홍차. 오늘은 이제 아무도 만나고 싶지 않아."]]},
    {title:"은인은 손님으로",art:"parlour",music:"daily",cast:["soma","agni"],lines:[
      ["소마","잘됐네! 우린 아까 만났잖아. 그럼 새 손님은 아니지?"],
      ["장면","세바스찬이 찻잔 하나를 들고 돌아왔다. 소마는 벌써 시엘 옆에 앉아 있었다. 등 뒤에 선 아그니가 마침 컵을 하나 더 꺼내던 참이었다."],
      ["소마","우리나라에선 은인이 집에 오면 잘 대접해 줘. 아그니 것도 한 잔 줘! 그런데 시엘, 우리 방은 어디야?"],
      ["시엘","……차 한 잔에서 침대 두 개까지 가는 데 숨도 한 번 안 쉬는군."]]},
    {title:"집사보다 이른 손님",art:"bedroom",music:"daily",cast:["agni","seb"],lines:[
      ["장면","이튿날―",null,{"hideCast":true,"fx":"fade"}],
      ["","세바스찬이 시엘의 방문에 손을 대자 문이 안에서 열렸다. 시엘은 벌써 옷깃을 여미고 있었다. 아그니가 빈 세숫대야를 들고 길을 비켰다."],
      ["세바스찬","아그니 씨, 여기는 남의 집이고 당신은 손님입니다. 적어도 식사만큼은 앉아서 받아 주셔도 됩니다만."],
      ["아그니","왕자님께서 신세를 지시는 집이지 않습니까. "],
      ["아그니","제가 할 수 있는 일이 눈앞에 있는데, 굳이 누가 와서 하실 때까지 두는 편이 더 불편합니다."],
      ["장면","마침 커튼이 걷혔다. 세바스찬의 눈에는 햇살이 죄다 아그니의 등 뒤로 모인 것처럼 보였다."],
      ["세바스찬","……아그니 씨. 혹시 내일도 이 시간에 뵐 수 있을까요?"]
    ]},
    {title:"런던 집의 열쇠",art:"parlour",music:"daily",cast:["soma","ciel"],lines:[
      ["소마","역시 아그니야! 시엘, 난 한숨 더 잘게."],
      ["시엘","잠깐. 그 방이 마음에 들면 계속 써도 좋아. 허락해 주지."],
      ["소마","에, 진짜?"],
      ["시엘","대신!! ",null,{"fx":"shake"}],
      ["시엘","일하지 않는 녀석은 내 집에 놔두지 않는다는 게 내 원칙이야."],
      ["소마","일을 해? 왕자인 내가?"],
      ["시엘","그래. 일한 보수도 지불하지. 즉, 그 돈은 네가 일해서 번 돈이라는 거야."],
      ["시엘","그럼 부모로부터 독립한 멋진 남자가 되겠지?"],
      ["소마","…듣고 보니 일리 있네!! 그럼 내가 뭘 하면 돼?"],
      ["시엘","아그니와 둘이 타운하우스를 관리하면 어때?"],
      ["시엘","'어려운 일'이라 아무한테나 맡길 수 없는 일이지. 할 수 있겠어?"],
      ["소마","할게!! 맡겨만 줘!!",null,{"fx":"shake"}],
      ["장면","소마가 열쇠를 받자마자 아그니와 손님 명부를 펼쳤다. ",null,{"hideCast":true}],
      ["","시엘은 두 사람이 고개를 맞댄 사이 세바스찬에게 외투를 내밀었다.",null,{"hideCast":true}],
      ["시엘","…후, 살았다. 이제 당분간 조용히 지낼 수 있겠지.",null,{"left":"seb","right":"ciel","fx":"dissolve"}],
      ["세바스찬","아주 노련하셨습니다.",null,{"left":"seb","right":"ciel"}],
      ["시엘"," 내일 아침은 본저택에서 먹어야겠어.",null,{"left":"seb","right":"ciel"}],
      ["세바스찬","예, 도련님. 이번에는 홍차도 한 분 몫만 준비해 두겠습니다.",null,{"left":"seb","right":"ciel"}]
    ]}
  ]
};
