"use strict";
const legacyLondonFestivals = [
  {
    id: "kensington1886",
    title: "사우스켄싱턴 박람회",
    options: [
      {
        product: "toys",
        line: "공방에서 작은 짐수레 세 대를 가져왔다. 시엘은 상자를 뒤집어 경사로를 만들고 아이에게 가장 가벼운 수레부터 내주었다."
      },
      {
        product: "sweets",
        line: "찻잔을 내려놓을 자리도 없이 점포가 붐볐다. 시엘은 비스킷 여섯 장과 포장지 한 장을 들고 계산대 앞으로 갔다."
      }
    ]
  },
  {
    id: "jubilee1887",
    title: "여왕의 골든 주빌리",
    options: [
      {
        product: "toys",
        line: "나무 말 여섯 필과 마차 두 대가 창턱에 올라갔다. 아이들이 고삐를 잡고 늘어서자 시엘이 지휘봉 대신 연필을 들었다."
      },
      {
        product: "hamper",
        line: "아이들은 집에 가져갈 기념 상자에 리본을 묶었다. 시엘은 완성된 상자를 건네며 누구에게 줄 선물인지 물었다."
      }
    ]
  },
  {
    id: "earlsCourt1888",
    title: "얼스 코트 이탈리아 박람회",
    options: [
      {
        product: "toys",
        line: "판지로 만든 다리 밑에 종이배를 달았다. 손잡이를 한 바퀴 돌릴 때마다 무대 한쪽에서 뱃사공이 나타나 모자를 벗어야 한다."
      },
      {
        product: "plush",
        line: "봉제 인형 둘을 무대에 올리고 시엘이 바이올린을 턱 밑에 댔다. 인형을 든 점원이 고개를 끄덕이자 첫 박이 울렸다."
      }
    ]
  }
];

const annualContests = [
  {
    id:"newYear", month:1, title:"신년 다과회", track:"newYear", room:"ballroom",
    invitation:"이웃 가문이 응접실에서 새해 인사를 나눕니다. 초대받은 집안의 자제들이 인사와 다과 접대를 겨룹니다.",
    options:[
      {label:"신년 축사",stat:"기품",prep:"etiquette",poses:["greet","bow"],
        line:"마지막 찻잔이 내려앉고 시엘의 이름이 불립니다. 시엘은 원고를 뒤집어 놓고 자리에서 일어납니다.",
        placed:"시엘은 맨 끝자리의 손님까지 돌아보고 집집마다 보낸 새해 인사에 답합니다. 심사위원이 원고를 읽지 않았다는 데 표시를 합니다.",
        missed:"서두르는 바람에 두 손님의 호칭을 바꿔 불렀습니다. 시엘은 자리에 앉기 전 두 사람을 찾아가 이름을 바로 불러 인사합니다."},
      {label:"다과 접대",stat:"매력",prep:"reception",poses:["cupDown","cupUp"],
        line:"서로 처음 만난 손님 셋이 시엘의 탁자에 앉습니다. 한 사람이 차는 됐다며 찻잔을 밀어 놓습니다.",
        placed:"시엘은 뜨거운 물을 따로 내고, 양옆의 손님에게도 차의 농도를 묻습니다. 빈 찻잔에 손을 대지 않던 손님이 먼저 두 번째 잔을 청합니다.",
        missed:"찻잔은 제때 돌렸지만 탁자 끝의 손님 몫은 식고 말았습니다. 시엘이 새 물을 부어 주는 사이 심사 종료 종이 울립니다."}
    ], prize:"은제 찻숟가락"
  },
  {
    id:"spring", month:4, title:"봄꽃 정원제", track:"sakura", room:"garden",
    invitation:"꽃이 핀 영지 정원에 연주석과 묘목 심사대를 마련합니다. 시엘은 두 종목 중 하나에 출전할 수 있습니다.",
    options:[
      {label:"정원 연주회",stat:"기품",prep:"music",poses:["bowOut","bowIn"],
        line:"바람에 악보 귀퉁이가 들립니다. 시엘은 악보대의 집게를 누르고 반주자와 눈을 맞춥니다.",
        placed:"악보가 한 장 넘어가도 시엘은 활을 멈추지 않습니다. 반주자가 다시 따라붙고 두 사람이 같은 박에서 곡을 닫습니다.",
        missed:"바람에 넘어간 마디를 찾느라 한 박이 빕니다. 시엘은 반주자가 되풀이하는 소절에 맞춰 끝까지 연주합니다."},
      {label:"봄꽃 표찰 맞히기",stat:"통찰",prep:"inquiry",poses:["read","inspect"],
        line:"꽃 이름을 떼어 낸 화분들이 온실 앞에 늘어섭니다. 마지막 두 화분에는 아직 봉오리만 달렸습니다.",
        placed:"시엘은 잎 뒷면의 털과 줄기가 갈라지는 높이를 비교해 표찰을 놓습니다. 심사위원이 마지막 화분을 돌려 보다가 고개를 끄덕입니다.",
        missed:"꽃잎만 본 앞줄은 맞혔지만 끝의 두 표찰이 뒤바뀝니다. 시엘은 정답표를 접기 전에 잎 모양부터 다시 그려 둡니다."}
    ], prize:"봄꽃 압화 책갈피"
  },
  {
    id:"harvest", month:9, title:"영지의 수확 감사제", track:"harvest", room:"field",
    invitation:"추수 감사예배 뒤 교회 앞마당에서 수확물 경연이 열립니다. 영지 주민들과 함께 바구니를 꾸리거나 수확물을 배분합니다.",
    options:[
      {label:"수확 바구니 품평",stat:"통찰",prep:"estateWork",poses:["inspect","read"],
        line:"아침에 들여온 사과와 늦게 거둔 배가 나란히 놓였습니다. 심사할 바구니에는 각각 한 겹씩만 담을 수 있습니다.",
        placed:"시엘은 멍든 자리를 골라내고 바구니 밑에 짚을 덧댑니다. 심사위원이 열매를 하나씩 들어 보아도 밑면의 손상이 없습니다.",
        missed:"시엘이 맨 위에 놓은 배는 빛깔이 좋았지만 밑에 깔린 두 알이 눌렸습니다. 심사위원이 꺼내 놓은 두 알을 보고 바구니 높이를 다시 잽니다."},
      {label:"곡물 나눔 장부",stat:"경영",prep:"accounts",poses:["penUp","penDown"],
        line:"주최 측이 보리와 밀을 나누어 줄 명단을 내밉니다. 성인과 아이가 받는 양이 달라 자루 수부터 맞춰야 합니다.",
        placed:"시엘은 한 집에서 두 번 적어 낸 몫을 찾아냅니다. 남은 곡물까지 계량을 끝내자 심사위원이 장부와 저울의 수를 대조합니다.",
        missed:"합계는 맞았지만 마지막 집 몫을 다른 줄에 써 놓았습니다. 시엘은 배부가 끝나기 전에 잘못 건넨 표를 돌려받습니다."}
    ], prize:"수확 감사 바구니"
  },
  {
    id:"warrant", month:10, title:"로열 워런트 · 왕실 납품 심사", track:"companyFair", room:"office", company:true,
    invitation:"왕실 납품 담당관이 팬텀사의 견본과 거래 장부를 함께 봅니다. 해당 품목이 대결에서 이기면 왕실 납품 인증을 획득합니다.",
    prize:"왕실 납품 증서"
  }
];

const historicalContests = [
  {id:"kensington1886",month:5,date:"1886년 5월 4일 박람회 개막",
    title:"사우스켄싱턴 박람회 · 팬텀사 출품전", track:"companyFair", room:"street", company:true,
    invitation:"사우스켄싱턴에서 식민지·인도 박람회가 열렸습니다. 박람회 주간에 맞춰 런던 상인들이 여는 별도 견본 품평회에 출품합니다.",
    prize:"사우스켄싱턴 상인회 메달"},
  {id:"jubilee1887",month:18,date:"1887년 6월 21일 기념 예배",
    title:"여왕의 골든 주빌리 · 기념품 경연", track:"companyFair", room:"street", company:true,
    invitation:"여왕의 즉위 50주년을 기념하는 주간입니다. 런던 상인들이 여는 기념품 경연에 팬텀사 제품을 냅니다.",
    prize:"골든 주빌리 기념 메달"},
  {id:"earlsCourt1888",month:29,date:"1888년 5월 얼스 코트 박람회",
    title:"얼스 코트 이탈리아 박람회 · 공예품 품평", track:"companyFair", room:"street", company:true,
    invitation:"얼스 코트 이탈리아 박람회가 열리는 달입니다. 인근 상인회가 여는 공예품 견본 품평에 팬텀사도 참가합니다.",
    prize:"얼스 코트 공예 메달"}
];

const oldContests = annualContests.flatMap(fair=>[0,1,2].map(year=>({
  ...fair, id:fair.id+"-"+(1886+year), month:fair.month+12*year, year,
  warrant:fair.id==="warrant"
}))).concat(historicalContests).sort((a,b)=>a.month-b.month);

const easterFair={
  id:"easter", month:4, title:"이스터(부활절)", track:"sakura", room:"garden",
  invitation:"부활절 예배가 끝나자 엘리자베스가 정원의 문을 엽니다. 리본을 단 달걀을 찾거나, 예배를 마친 손님들에게 바이올린 한 곡을 들려주세요.",
  options:[
    {label:"부활절 연주",stat:"기품",poses:["bowOut","bowIn"],
      line:"예배를 마친 손님들이 연주석 앞으로 모입니다.",
      placed:"시엘이 마지막 음을 길게 당기자 종소리가 그 뒤를 받습니다. 모자를 쓰고 일어서던 손님까지 돌아서서 박수를 칩니다.",
      missed:"첫 종소리에 활이 반 박자 늦습니다. 시엘은 반주자의 손끝을 보며 마지막 소절을 마칩니다."},
    {label:"부활절 달걀 찾기",stat:"통찰",poses:["inspect","read"],
      line:"생울타리 사이로 달걀을 담을 빈 바구니가 하나씩 건네집니다.",
      placed:"시엘이 빈 둥지 밑을 살짝 들추자 금빛 달걀이 굴러 나옵니다. 엘리자베스가 직접 묶은 작은 리본이 달려 있습니다.",
      missed:"분홍 리본 끝을 따라간 곳에는 빈 바구니만 남았습니다. 마지막 종이 울리자 시엘이 찾아낸 달걀을 심사대에 올립니다."}
  ], prize:"은제 달걀 장식"
};
const harvestWarrant={...annualContests.find(f=>f.id==="warrant"),
  id:"royalWarrant",month:9,title:"로열 워런트(수확제)",room:"field",warrant:true,
  invitation:"수확제 장터에 왕실 납품 심사대가 섰습니다. 팬텀사에서 만든 제품 한 점을 골라 출품하세요. 담당관이 견본과 지금까지의 납품 장부를 살핍니다."};
const contests=[annualContests[0],easterFair,harvestWarrant].flatMap(fair=>
  [0,1,2].map(year=>({...fair,id:fair.id+"-"+(1886+year),month:fair.month+12*year,year}))
).sort((a,b)=>a.month-b.month);
// Completed pages and previously booked invitations retain their original rules and dates.
const retiredContests=oldContests.filter(f=>!contests.some(active=>active.id===f.id));
const contestArchive=[...contests,...retiredContests].sort((a,b)=>a.month-b.month);

// Each contestant addresses Ciel before his own demonstration.
const contestOpponents={
  newYear:{name:"에드워드 미드포드",quote:"시엘, 난 아직 널 내 매제로 인정하지 않았다. ……뭐? 다과회랑 무슨 상관이냐고? 아무튼, 내가 먼저다!",laterQuotes:["해가 바뀌었다고 내가 마음을 바꾼 줄은 아니겠지, 시엘? 리지는 벌써 네 자리부터 봐 뒀더구나.","시엘, 잘해라. 리지가 보고 있다. ……응원한 게 아니다! 내 매제가 되려면 그 정도는 해야지."],replies:["내가 언제 인정해 달랬어? ……먼저 해, 에드워드. 손님들 차가 식겠어.","리지가 내 자리를 봐 뒀다고? 고맙다고 전해야겠군. 네 자리도 옆이야?","그래, 응원 고마워. ……그렇게 노려보지 마. 리지한테는 비밀로 할 테니까."],role:"미드포드가 장남",poses:["assets/portraits/edward-greeting.png","assets/portraits/edward-tea.png"]},
  easter:{name:"엘리자베스 미드포드",quote:"시엘, 저 금색 달걀 보이지? 오늘은 나도 봐주지 않을 거야!",laterQuotes:["작년 생각나? 이번에는 내가 먼저 심사대에 갈 거야, 시엘!","올해도 같이 나올 줄 알았어. 자, 종이 울린다!"],role:"미드포드가 영애",get portrait(){return portraits.엘리자베스;}},
  spring:{name:"클라라 벨",quote:"정원에서는 바람도 심사에 끼어들지요.",role:"교구 원예회",actor:"designer"},
  harvest:{name:"토머스 리드",quote:"도련님, 장터에 내놓을 물건을 고른다고 생각해 보십시오.",role:"영지 소작농 대표",actor:"maker"},
  kensington1886:{name:"하트웰 완구점",quote:"세 바퀴째도 첫 바퀴처럼 달리는지 봐 주십시오.",role:"기계 완구 상인",actor:"maker",product:"toys"},
  jubilee1887:{name:"벨 & 손 제과점",quote:"리본을 푸는 순간까지가 저희 선물입니다.",role:"주빌리 기념품 출품사",actor:"clerk",product:"hamper"},
  earlsCourt1888:{name:"모레티 공방",quote:"손잡이를 한번 돌려 보시지요. 인사가 끝날 때까지요.",role:"기계 인형 제작소",actor:"designer",product:"plush"},
  warrant:{name:"휘트컴 상회",quote:"지난 주문서까지 가져왔습니다. 어느 쪽이든 먼저 보시지요.",role:"왕실 납품 후보",actor:"clerk",product:"game"}
};
function contestOpponent(fair){return contestOpponents[fair.warrant?"warrant":fair.id.split("-")[0]];}

// Dialogue reflects three levels of performance before the verdict.
const contestSpeeches={
  newYear:[
    ["……미드포드 부인. 실례했습니다. 먼저 새해 인사를 드렸어야 했는데요.","먼 길 와 주셔서 감사합니다. 돌아가실 때는 저희 마차를 쓰시지요.","편지에 적어 주신 장미가 올봄엔 피겠군요. 그때는 제가 먼저 인사를 가겠습니다."],
    ["잠깐. 그 잔은 이미 식었군. 새로 우려 오도록 해.","우유를 곁들이신다고요? 이번 잔은 조금 진하게 따르겠습니다.","첫 잔은 거의 안 드셨더군요. 이번엔 조금 연하게 해 봤습니다. 어떠십니까?"]
  ],
  easter:[
    ["다시 한 번만. 교회 종이 울릴 때 첫 음을 놓쳤어.","다음 종이 울리면 들어가 줘. 내가 먼저 시작할게.","리지, 마지막 음은 조금 늦춰. 들리지? 종이 우리 대신 끝을 맺어 줄 거야."],
    ["분명히 저 리본이었는데. ……빈 바구니까지 숨겨 두다니.","이쪽 가지에 물감이 묻었어. 파란 달걀은 이 아래야.","리지, 넌 매듭을 언제나 왼쪽으로 묶잖아. 그래서 새 둥지도 한번 들춰 봤지."]
  ],
  spring:[
    ["한 마디만 다시 부탁해. 바람에 악보가 두 장 넘어갔어.","그 박자로 계속 쳐 줘. 다음 소절에서 내가 따라가지.","악보는 그대로 둬. 방금 네가 바꾼 끝음, 이번엔 내가 받아 볼게."],
    ["꽃잎 색은 같은데…… 이 둘의 표찰은 잠시 비워 두겠어.","이건 앵초야. 잎을 뒤집어 보면 털이 있으니까.","같은 날 심었다는 기록부터 틀렸군. 이쪽만 묵은 꽃대가 남았잖아."]
  ],
  harvest:[
    ["맨 아래 배가 눌렸군. 잠깐, 바구니를 다시 내 줘.","사과와 배 사이에 짚을 좀 깔아. 이 정도면 장터까지 가겠어.","맨 아래 것을 하나 꺼내 보시죠. 마차에 실려도 멍이 들지 않게 담았습니다."],
    ["잠깐만. 마지막 집에 돌아갈 몫이 왜 한 자루 모자라지?","빈 자루 무게는 빼고 달아. 그래야 마지막 집까지 제 몫이 돌아가.","이 두 줄은 같은 집이야. 잘못 뺀 반 자루는 아이들이 셋인 집 몫이고."]
  ],
  warrant:[["이 품목의 지난 납품 전표가 이것뿐인가? 있는 대로 올려.","견본과 납품분은 같은 규격입니다. 치수는 여기 적었습니다.","첫 주문부터 이번 물량까지입니다. 어느 상자를 여셔도 같은 견본과 대조하실 수 있습니다."]],
  kensington1886:[["잠깐, 그 견본은 내가 놓겠어. 받침대가 조금 흔들리는군.","가까이서 보셔도 됩니다. 진열장에 놓인 것과 같은 물건입니다.","여기 있는 것 중 아무거나 골라 보시죠. 저희 상표를 붙인 건 전부 같은 검사를 거칩니다."]],
  jubilee1887:[["리본이 걸렸군. 잠시만요, 제가 풀겠습니다.","포장을 여실 때 이 끝을 당기시면 됩니다. 안쪽도 보시죠.","받는 분이 직접 여실 텐데 칼을 쓰실 필요야 없지요. 리본을 한 번만 당겨 보시겠습니까?"]],
  earlsCourt1888:[["잠깐. 견본을 빛 쪽으로 좀 옮겨 주겠어?","가장자리까지 손으로 마감했습니다. 가까이서 보시지요.","심사대의 것만 고른 솜씨라고요? 납품 상자에서도 하나 꺼내 보시겠습니까?"]]
};
function contestSpeech(fair,ticket,rank){
  return contestSpeeches[fair.warrant?"warrant":fair.id.split("-")[0]][fair.company?0:ticket.index][rank];
}
