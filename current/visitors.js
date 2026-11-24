"use strict";

const visitEncounterCards = [
  {
    id: "visitLibraryWax", place: "library", npc: "타나카", title: "봉투 안의 부스러기",
    condition: run => Boolean(run.people.tanaka) && run.events.some(e => e.id === "visitLibrarySeal" && e.index === 0 && e.month < run.month),
    lines: [
      ["타나카", "지난번 봉인을 떼실 때 이 종이 조각이 떨어졌습니다. 잃어버릴까 흰 종이에 받쳐 두었지요."],
      ["시엘", "빛에 비춰 보니 종이 뒤에 글자가 아른거리는데."],
      ["타나카", "장부를 묶을 때 밑에 깔았던 전표입니다. 불에 그슬려서 버리는 종이인 줄만 알았습니다."],
      ["시엘", "펜을 얼마나 눌러 썼는지 두 장 아래까지 필압이 남았어. 등잔을 좀 옆으로 치워 봐."]
    ],
    choices: [
      {label: "그림자를 따라 날짜를 베껴 쓴다", reply: ["시엘", "십일 일이군. 앞쪽에 있던 영수증과 정확히 같은 날이야."], stat: "통찰", amount: 2},
      {label: "전표를 어디서 가져왔는지 묻는다", reply: ["타나카", "동쪽 계단 밑 작은 서랍에서 나왔습니다. 내일은 도련님께서 직접 열어 보시지요."], trust: "tanaka"}
    ]
  },
  {
    id: "visitLibraryCarbon", place: "library", npc: "타나카", title: "사본에만 적힌 이름",
    condition: run => Boolean(run.people.tanaka) && run.events.some(e => e.id === "visitLibrarySeal" && e.index === 1 && e.month < run.month),
    lines: [
      ["타나카", "맡겨 두신 장부의 사본을 마쳤습니다. 맨 마지막 줄은 제 글씨입니다."],
      ["시엘", "원본에는 비어 있던 칸이군. 물건을 받아 간 놈이 생각났어?"],
      ["타나카", "제가 직접 받았습니다. 그때는 저 말고 이 장부를 읽을 이가 남을 줄은 몰랐지요."],
      ["시엘", "그럼 오늘 날짜를 쓰고 서명해 둬. 나중에 누가 읽든 어느 날 되짚어 낸 기억인지 알 수 있게."]
    ],
    choices: [
      {label: "타나카에게 다음 권도 맡긴다", reply: ["타나카", "내일 같은 자리에 꺼내 두겠습니다. 도련님 펜도 곁에 놓아두지요."], trust: "tanaka"},
      {label: "원본 옆에 사본을 나란히 꽂는다", reply: ["시엘", "책등 높이가 똑같으니 한눈에 찾겠어. 이 칸은 손대지 말고 그대로 둬."], stat: "지성", amount: 2}
    ]
  },
  {
    id: "visitGardenMorning", place: "garden", npc: "피니안", title: "먼저 연 온실",
    condition: run => Boolean(run.people.finny) && run.events.some(e => e.id === "greenhouseKey" && e.index === 0 && e.month < run.month),
    lines: [
      ["피니안", "어라? 제 열쇠는 여기 있는데 온실 문이 열려 있네요?"],
      ["시엘", "네가 맡겨 둔 열쇠로 열었어. 꽃 한 송이 보러 가는데 매번 사람을 깨워야 하나?"],
      ["피니안", "아, 도련님 신발 자국이었구나! 흙 묻은 구두로 돌아가시면 세바스찬 씨한테 혼나실 텐데요!"],
      ["시엘", "이미 봤겠지. 기왕 들킨 김에 이 꽃 이름이나 가르쳐 줘."]
    ],
    choices: [
      {label: "피니안이 외우는 법을 듣는다", reply: ["피니안", "이건 입을 딱 벌린 사자처럼 생겼죠? 옆을 살짝 누르면요…… 자, 도련님도 해 보세요!"], trust: "finny"},
      {label: "화단에 쪼그려 앉아 꽃을 본다", reply: ["시엘", "……정말 입이 벌어지네. 한 번만 더 눌러 봐."], stat: "stress", amount: -3}
    ]
  },
  {
    id: "visitGardenPace", place: "garden", npc: "피니안", title: "벤치를 옮긴 자리",
    condition: run => Boolean(run.people.finny) && run.events.some(e => e.id === "greenhouseKey" && e.index === 1 && e.month < run.month),
    lines: [
      ["피니안", "지난번에 도련님이 여기서 오래 서 계셨잖아요. 그래서 저쪽 벤치를 통째로 들고 왔어요!"],
      ["시엘", "그 돌덩이를? 세바스찬한테 수레라도 빌리지 그랬어."],
      ["피니안", "벤치는 가벼웠는데 수평 맞추기가 영 어려웠어요! 한쪽에 앉아 보실래요?"],
      ["시엘", "그럼 넌 반대쪽에 앉아. 둘이 앉을 때도 흔들리나 보게."]
    ],
    choices: [
      {label: "둘이 앉아서 해가 지는 걸 본다", reply: ["피니안", "여기서는 온실 유리에 노을이 두 번 비쳐요! 봐요, 두 번째 노을이 벌써 왔네요!"], stat: "stress", amount: -3},
      {label: "벤치가 놓인 자리를 정원도에 표시한다", reply: ["피니안", "우와, 이제 정원도에 제가 고른 자리도 들어가요? 그럼 다음엔 길가 풀도 예쁘게 다듬어 둘게요!"], trust: "finny"}
    ]
  },
  {
    id: "visitLibrarySeal", place: "library", npc: "타나카", title: "봉인된 장부",
    condition: run => Boolean(run.people.tanaka) && (run.counts.inquiry || 0) >= 1,
    lines: [
      ["타나카", "도련님, 안쪽 서가를 정리하다 이 장부가 나왔습니다. 묶인 끈은 아직 옛것 그대로입니다."],
      ["시엘", "가죽은 그을렸는데 봉랍에는 먼지 한 톨 없군. 누가 새로 봉했지?"],
      ["타나카", "접니다. 바삭하게 마른 종이를 옮기다 낱장이 달아날까 염려되어서요. 풀기 전에 그 말씀부터 올리는 편이 옳겠다 싶었습니다."],
      ["시엘", "잘했어. 마침 그때 일을 기억할 증인도 여기 있고."]
    ],
    choices: [
      {label: "봉랍을 떼고 원본을 함께 펼친다", reply: ["타나카", "떨어지는 조각은 제가 받겠습니다. 도련님께서는 첫 장 귀퉁이를 눌러 주십시오."], stat: "통찰", amount: 2},
      {label: "원본을 맡기고 사본을 부탁한다", reply: ["타나카", "빈 줄까지 보이는 대로 옮겨 적겠습니다. 제가 기억하는 대목은 따로 기록해 두지요."], trust: "tanaka"}
    ]
  },
  {
    id: "visitGardenGraft", place: "garden", npc: "피니안", title: "리본 달린 가지",
    condition: run => Boolean(run.people.finny) && (run.counts.walk || 0) >= 1,
    lines: [
      ["시엘", "피니, 장미마다 왜 천 조각을 묶어 놨지?"],
      ["피니안", "제가 겨울에 접붙인 가지예요! 잎이 나니까 어느 게 제 것이었는지 도무지 못 찾겠어서요."],
      ["시엘", "그렇게 꽉 묶으면 굵어질 자리가 없잖아. 자, 이쪽은 내가 잡고 있을게."],
      ["피니안", "앗, 정말 자국이 났네요! 내일은 끈부터 느슨하게 보러 와야겠다."]
    ],
    choices: [
      {label: "말뚝에 리본을 옮겨 묶는다", reply: ["피니안", "이제 얼마든지 굵어져도 되겠어요! 남은 것도 제가 얼른 이렇게 옮길게요!"], trust: "finny"},
      {label: "다음 산책 때 볼 가지를 골라 둔다", reply: ["시엘", "이건 잎 끝이 벌써 붉군. 어느 쪽 꽃이 먼저 피나 내기할까?"], stat: "motivation", amount: 2}
    ]
  },
  {
    id: "visitKitchenBowl", place: "kitchen", npc: "바르도", title: "손잡이 달린 그릇",
    condition: run => Boolean(run.people.bard) && (run.hp < 75 || (run.counts.recovery || 0) > 0),
    lines: [
      ["바르도", "맛만 봐 줘요, 도련님! 이건 진짜 안 태웠다구요!"],
      ["시엘", "수프를 찻잔에 담았네."],
      ["바르도", "책 보면서 한 손으로 마시라구요. 평범한 수프니까 걱정 말고!"],
      ["시엘", "내가 숟가락 내려놓는 것까지 봤어?"]
    ],
    choices: [
      {label: "잔을 들고 그 자리에서 마신다", reply: ["바르도", "크하하, 진짜 마시네! 한 잔 더 갖다 놓죠!"], stat: "hp", amount: 3},
      {label: "저녁에도 같은 잔을 부탁한다", reply: ["바르도", "도련님 전용 잔으로 찜해 두겠습니다."], trust: "bard"}
    ]
  },
  {
    id: "visitQuartersHem", place: "quarters", npc: "메이린", title: "소매 안쪽의 바늘땀",
    condition: run => Boolean(run.people.mey) && (!run.sequence?.visitPerson || run.sequence.visitPerson === "mey") && run.stats.기품 >= 20,
    lines: [
      ["메이린", "도련님, 잠깐만 팔을 굽혀 봐 주시겠습니까요? 지난번 가봉 때보다 소매가 짧아진 것 같습니다요."],
      ["시엘", "새로 맞춘 지 얼마나 됐다고."],
      ["메이린", "안에 이만큼 남겨 뒀어요. 풀면 다음 봄까지 입으실 수 있을 겁니다요."],
      ["시엘", "처음부터 남겨 뒀어? 그때 내 팔이 얼마나 더 길어질 줄 알고."]
    ],
    choices: [
      {label: "메이린에게 길이를 맡긴다", reply: ["메이린", "내일 아침이면 됩니다요. 왼팔이랑 오른팔 길이도 따로 적어 놨습니다요."], trust: "mey"},
      {label: "팔을 뻗어 움직일 때의 길이도 잰다", reply: ["시엘", "자, 딱 여기까지만 보이면 될 것 같아."], stat: "기품", amount: 2}
    ]
  },
  {
    id: "visitQuartersLedge", place: "quarters", npc: "스네이크", title: "창턱의 빈 바구니",
    condition: run => Boolean(run.people.snake) && (!run.sequence?.visitPerson || run.sequence.visitPerson === "snake"),
    lines: [
      ["시엘", "요 며칠 빈 바구니만 창 앞에 있더군. 바닥 천은 왜 반만 덮었어?"],
      ["스네이크", "볕이 드는 쪽하고 그늘진 쪽 중에서 내가 고를 수 있게 해 뒀어. ⋯라고 에밀리가 말했어."],
      ["시엘", "그쪽에도 있었구나. (;) 난 손수건 무늬인 줄 알았지."],
      ["스네이크", "그게 마음에 들어서 어제부터 여기 누워 있었지. ⋯라고 에밀리가 말했어."]
    ],
    choices: [
      {label: "창이 언제 그늘지는지 근무표에 적는다", reply: ["스네이크", "오후 두 시엔 바구니를 반 뼘만 옮겨 줘. ⋯라고 에밀리가 말했어."], trust: "snake"},
      {label: "바구니 옆에서 조용히 햇볕을 쬔다", reply: ["스네이크", "지금은 그 자리가 두 번째로 따뜻해. ⋯라고 오스카가 말했어."], stat: "stress", amount: -3}
    ]
  },
  {
    id: "visitParlorDance", place: "parlor", npc: "엘리자베스", title: "반주자가 없는 왈츠",
    condition: run => (run.counts.dance || 0) > 0,
    lines: [
      ["엘리자베스", "시엘, 연습 좀 도와줘! 어제 저쪽 구석에서 춤을 췄는데 피아노 소리가 영 안 들렸어."],
      ["시엘", "그래서 일부러 피아노에서 제일 먼 자리까지 의자를 밀어 둔 거야?"],
      ["엘리자베스", "응! 중간에 음악이 끊겨도 내가 돌 때 손 받아 줄 수 있어?"],
      ["시엘", "왼손이지? ……그 표정은 뭐야. 손은 제대로 내밀었잖아."]
    ],
    choices: [
      {label: "손끝으로만 박자를 맞춘다", reply: ["엘리자베스", "맞았어! 반주가 다시 들리는 데까지 한 번도 안 멈췄잖아! 대단해~."], stat: "매력", amount: 2},
      {label: "서로 발을 보면서 한 번 더 춘다", reply: ["시엘", "구두코는 리지, 네가 먼저 밟았잖아. 그렇게 웃지 말라고."], stat: "stress", amount: -3}
    ]
  },
  {
    id: "visitCompanyBox", place: "company", npc: "세바스찬", title: "뜯긴 모서리",
    condition: run => run.salesBook.some(row => row.sold > 0),
    lines: [
      ["세바스찬","가게에서 가져온 빈 상자입니다. 손님들이 알맹이만 꺼내 가고 이건 두고 갔다더군요."],
      ["시엘","죄다 오른쪽 모서리를 뜯었어. 손잡이까지 붙여 줬는데 그건 하나같이 새것이고."],
      ["세바스찬","이걸로 한번 해 보시죠. 가게에서 내놓는 것과 똑같이 풀을 발라 뒀습니다."],
      ["시엘","……내 손가락도 안 들어가잖아. 모서리는 용케도 저만큼만 뜯었군."]
    ],
    choices: [
      {label: "시엘의 손 크기로 홈을 다시 그린다", reply: ["시엘","이 정도면 돼. 장갑을 낀 채로도 손가락이 걸리잖아. 내일은 이대로 견본을 하나 만들어서 가게에 갖다줘."], stat: "경영", amount: 2},
      {label: "다시 닫아 선물해도 되는지 시험한다", reply: ["세바스찬","그럼 초콜릿을 한 알 넣고 도로 닫아 보지요. 이번에는 선물을 받으시는 쪽입니다, 도련님."], stat: "통찰", amount: 2}
    ]
  },
  {
    id: "visitTownRain", place: "town", npc: "라우", title: "비 오는 날의 진열창",
    condition: run => run.month >= 2 && (run.counts.supplier || run.salesBook.some(row => row.sold >= 10)),
    lines: [
      ["라우","이런, 백작. 내 가게엔 비를 피할 지붕도 있는데 굳이 거기에 서서 보시나?"],
      ["시엘","이리 와서 이만큼만 몸을 낮춰 봐. 태엽 말의 머리가 보여야 할 자리에 가격표가 붙어 있잖아. 애들한테는 이렇게 보인다고."],
      ["라우","허어. 난 비가 와서 장사가 안되는 줄 알았지."],
      ["시엘","그럼 날이 개면 말의 머리가 저절로 보이나? 너희 가게에서 제일 잘 보이는 물건이 가격표야."]
    ],
    choices: [
      {label: "가격표를 아래로 내려 반응을 본다", reply: ["라우","어이쿠, 벌써 꼬마 손님 하나가 멈췄네. 백작한테는 비 오는 날마다 차를 대접해야겠어."], stat: "경영", amount: 2},
      {label: "옆 가게의 비 오는 날 진열도 살핀다", reply: ["시엘","옆집은 벌써 등을 켰어. 봐, 고인 물에까지 진열한 물건이 비치잖아."], stat: "통찰", amount: 2}
    ]
  },
  {
    id: "visitTownhouseChess", place: "townhouse", npc: "소마", title: "두 번째 체스판",
    condition: run => Boolean(run.flags.townhouse && run.people.soma && (run.people.agni || run.flags.agni)) && run.month % 2 === 1,
    lines: [
      ["소마", "시엘! 그 판은 그대로 둬! 지난번에 네가 지기 직전에 집에 갔잖아!"],
      ["시엘", "아직 안 졌어. 그런데 체스판을 왜 하나 더 샀지?"],
      ["소마", "나도 체스는 두고 싶고, 네가 오기 전에 네 말을 옮겨 버리긴 싫잖아! 그래서 하나 더 샀어!"],
      ["시엘", "……그쪽 판에서도 내 말을 두고 있었네. 이 수를 세 번이나 연습한 거야?"]
    ],
    choices: [
      {label: "소마가 준비한 수부터 받아 준다", reply: ["소마", "좋아! 아그니, 이번엔 귀띔해 주면 안 돼! 이 수는 내가 생각했어!"], trust: "soma"},
      {label: "두 판의 차이를 찾아낸다", reply: ["시엘", "네가 연습할 때는 이 폰이 한 칸 뒤에 있었지. 자, 이제 내 차례다."], stat: "통찰", amount: 2}
    ]
  },
  {
    id: "visitTownhouseKnock", place: "townhouse", npc: "아그니", title: "두 번 울리는 노크",
    condition: run => Boolean(run.flags.townhouse && run.people.soma && (run.people.agni || run.flags.agni)) && run.month % 2 === 0,
    lines: [
      ["아그니", "시엘 님, 저 문은 두 번 두드리시면 됩니다. 한 번이면 제가, 두 번이면 소마 님께서 나오십니다."],
      ["시엘", "왕자가 직접 현관에 나와?"],
      ["아그니", "소마 님께서 그러고 싶어 하십니다. 제가 먼저 열면 발소리를 듣고도 아쉬워하시더군요."],
      ["시엘", "흠. 그럼 오늘은 내가 밖에서 다시 두드리지."]
    ],
    choices: [
      {label: "문 앞에서 두 번 두드린다", reply: ["아그니", "계단 내려오시는 소리가 들리시지요? 차를 한 잔 더 준비하겠습니다."], stat: "매력", amount: 2},
      {label: "안쪽에서 나는 소리를 누가 먼저 듣는지 겨뤄 본다", reply: ["시엘", "지금. ……너도 들었구나. 소마의 실내화는 뒤축부터 닳겠어."], stat: "통찰", amount: 2}
    ]
  }
];
