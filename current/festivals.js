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
    ], prize:"은제 찻숟가락", ribbon:"신년 다과회 입상 리본"
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
    ], prize:"봄꽃 압화 책갈피", ribbon:"봄꽃 정원제 입상 리본"
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
    ], prize:"수확 감사 바구니", ribbon:"수확 감사제 입상 리본"
  },
  {
    id:"warrant", month:10, title:"로열 워런트 · 왕실 납품 심사", track:"etiquette", room:"office", company:true,
    invitation:"왕실 납품 담당관이 팬텀사의 견본과 거래 장부를 함께 봅니다. 해당 품목이 금상을 받으면 왕실 납품 인증을 획득합니다.",
    prize:"왕실 납품 증서", ribbon:"왕실 납품 심사 은상장"
  }
];

const historicalContests = [
  {id:"kensington1886",month:5,date:"1886년 5월 4일 박람회 개막",
    title:"사우스켄싱턴 박람회 · 팬텀사 출품전", track:"cheerful", room:"street", company:true,
    invitation:"사우스켄싱턴에서 식민지·인도 박람회가 열렸습니다. 박람회 주간에 맞춰 런던 상인들이 여는 별도 견본 품평회에 출품합니다.",
    prize:"사우스켄싱턴 상인회 메달", ribbon:"런던 견본 품평회 은상장"},
  {id:"jubilee1887",month:18,date:"1887년 6월 21일 기념 예배",
    title:"여왕의 골든 주빌리 · 기념품 경연", track:"cheerful", room:"street", company:true,
    invitation:"여왕의 즉위 50주년을 기념하는 주간입니다. 런던 상인들이 여는 기념품 경연에 팬텀사 제품을 냅니다.",
    prize:"골든 주빌리 기념 메달", ribbon:"주빌리 기념품 경연 은상장"},
  {id:"earlsCourt1888",month:29,date:"1888년 5월 얼스 코트 박람회",
    title:"얼스 코트 이탈리아 박람회 · 공예품 품평", track:"cheerful", room:"street", company:true,
    invitation:"얼스 코트 이탈리아 박람회가 열리는 달입니다. 인근 상인회가 여는 공예품 견본 품평에 팬텀사도 참가합니다.",
    prize:"얼스 코트 공예 메달", ribbon:"공예품 품평회 은상장"}
];

const contests = annualContests.flatMap(fair=>[0,1,2].map(year=>({
  ...fair, id:fair.id+"-"+(1886+year), month:fair.month+12*year, year,
  warrant:fair.id==="warrant"
}))).concat(historicalContests).sort((a,b)=>a.month-b.month);

// The two demonstrations in each class respond to the examiner's observations.
const contestOpponents={
  newYear:{name:"엘리자베스 미드포드",quote:"시엘, 오늘은 나도 양보 안 할 거야!",role:"미드포드 가문",actor:"lizzy",
    entries:[
      ["연단의 꽃을 살짝 옮긴 엘리자베스가 뒷줄까지 눈을 맞추며 새해 인사를 건넵니다.","목소리가 닿는가","맨 뒤 손님을 향해 축사한다","호칭이 정확한가","초청장 순서로 이름을 부른다"],
      ["엘리자베스가 손님의 빈 찻잔을 보고 먼저 차를 권합니다. 심사위원이 탁자 사이로 한 걸음 다가섭니다.","차의 온도","식은 잔부터 바꾸어 낸다","손님의 취향","설탕과 우유를 따로 권한다"]
    ]},
  spring:{name:"클라라 벨",quote:"정원에서는 바람도 심사에 끼어들지요.",role:"교구 원예회",actor:"designer",
    entries:[
      ["클라라가 낮은 현에서 시작해 온실 지붕 아래로 선율을 보냅니다. 반주자가 마지막 음을 짧게 받습니다.","합주의 호흡","반주자의 손을 보고 들어간다","음의 울림","긴 음에서 활을 끝까지 쓴다"],
      ["클라라가 화분을 반 바퀴 돌리고 봉오리 아래에 표찰을 꽂습니다.","잎 뒷면의 차이","잎맥과 잔털을 대조한다","생장 시기","봉오리와 파종표를 맞춘다"]
    ]},
  harvest:{name:"토머스 리드",quote:"도련님, 장터에 내놓을 물건을 고른다고 생각해 보십시오.",role:"영지 소작농 대표",actor:"maker",
    entries:[
      ["토머스가 사과 바구니를 번쩍 들어 심사대에 놓습니다. 과일이 구르지 않도록 밑에는 짚을 덧대었습니다.","운반 중 손상","바닥에 짚을 한 겹 더 댄다","익은 정도","꼭지와 향으로 열매를 고른다"],
      ["토머스는 저울에 보리를 올리고 가족 수에 맞춰 몫을 나눕니다. 장부 끝에는 남은 반 자루까지 적습니다.","저울의 눈금","빈 자루 무게를 먼저 뺀다","배부 명단","같은 집이 두 번 적혔는지 찾는다"]
    ]},
  kensington1886:{name:"하트웰 완구점",quote:"세 바퀴째도 첫 바퀴처럼 달리는지 봐 주십시오.",role:"기계 완구 상인",actor:"maker",product:"toys",entries:[
    ["하트웰의 점원이 태엽 마차를 전시대 끝에서 놓습니다. 바퀴가 난간을 스치고 제자리로 돌아옵니다.","반복 작동","같은 견본을 세 번 시연한다","제작 원가","부품별 단가표를 펼친다"]]},
  jubilee1887:{name:"벨 & 손 제과점",quote:"리본을 푸는 순간까지가 저희 선물입니다.",role:"주빌리 기념품 출품사",actor:"clerk",product:"hamper",entries:[
    ["벨 제과점이 기념 리본을 풀어 작은 선물 상자 여섯 개를 한 줄에 놓습니다.","선물의 마감","봉인과 포장을 가까이 보인다","기념품 보급","판매처별 인도 기록을 제시한다"]]},
  earlsCourt1888:{name:"모레티 공방",quote:"손잡이를 한번 돌려 보시지요. 인사가 끝날 때까지요.",role:"기계 인형 제작소",actor:"designer",product:"plush",entries:[
    ["모레티 공방의 장인이 인형극 상자를 엽니다. 인형이 손잡이 한 바퀴에 맞춰 모자를 벗습니다.","공예의 정밀도","이음새와 수작업 마감을 보인다","수선의 편의","교체 가능한 부품을 꺼낸다"]]},
  warrant:{name:"휘트컴 상회",quote:"지난 주문서까지 가져왔습니다. 어느 쪽이든 먼저 보시지요.",role:"왕실 납품 후보",actor:"clerk",product:"game",entries:[
    ["휘트컴 상회의 대리인이 견본과 봉인된 발송장을 나란히 놓습니다. 담당관이 왕실 인장을 책상에 내려놓습니다.","품질의 일관성","같은 규격의 마감을 대조한다","납기 준수","수령일이 찍힌 전표를 제출한다"]]}
};
function contestOpponent(fair){return contestOpponents[fair.id.split("-")[0]];}
function contestDemonstration(fair,ticket){return contestOpponent(fair).entries[fair.company?0:ticket.index];}
