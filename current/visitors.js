"use strict";

const visitEncounterCards = [
  {
    id: "visitLibraryWax", place: "library", npc: "타나카", title: "봉투 안의 부스러기",
    condition: run => Boolean(run.people.tanaka) && run.events.some(e => e.id === "visitLibrarySeal" && e.index === 0 && e.month < run.month),
    lines: [
      ["타나카", "지난번 봉인을 떼실 때 이 조각이 떨어졌습니다. 흰 종이에 받쳐 두었지요."],
      ["시엘", "종이 뒤에 글자가 비치는데."],
      ["타나카", "장부를 묶을 때 밑에 깔았던 전표입니다. 불에 그슬려서 버리는 종이인 줄 알았습니다."],
      ["시엘", "펜을 얼마나 눌러 썼는지 종이 두 장 아래까지 날짜가 남았어. 등잔을 좀 옆으로 치워 봐."]
    ],
    choices: [
      {label: "그림자를 따라 날짜를 베껴 쓴다", reply: ["시엘", "십일 일이야. 앞쪽의 영수증과 같은 날이군."], stat: "통찰", amount: 2},
      {label: "전표를 어디서 가져왔는지 묻는다", reply: ["타나카", "동쪽 계단 밑 작은 서랍입니다. 내일은 도련님께서 직접 열어 보시지요."], trust: "tanaka"}
    ]
  },
  {
    id: "visitLibraryCarbon", place: "library", npc: "타나카", title: "사본에만 적힌 이름",
    condition: run => Boolean(run.people.tanaka) && run.events.some(e => e.id === "visitLibrarySeal" && e.index === 1 && e.month < run.month),
    lines: [
      ["타나카", "맡겨 두신 장부의 사본입니다. 마지막 줄은 제 글씨입니다."],
      ["시엘", "원본에는 비어 있었지. 물건을 받아 간 사람이 생각났어?"],
      ["타나카", "제가 받았습니다. 그때는 저 말고 이 장부를 읽을 사람이 있을 줄 몰랐지요."],
      ["시엘", "그럼 오늘 날짜를 쓰고 서명해. 나중에 누가 읽든 어느 날 기억해 낸 건지 알 수 있게."]
    ],
    choices: [
      {label: "타나카에게 다음 권도 맡긴다", reply: ["타나카", "내일 같은 자리에 꺼내 두겠습니다. 도련님 펜도 옆에 두지요."], trust: "tanaka"},
      {label: "원본 옆에 사본을 나란히 꽂는다", reply: ["시엘", "책등의 높이가 같으니 금방 찾겠어. 이 칸은 그대로 둬."], stat: "지성", amount: 2}
    ]
  },
  {
    id: "visitGardenMorning", place: "garden", npc: "피니안", title: "먼저 연 온실",
    condition: run => Boolean(run.people.finny) && run.events.some(e => e.id === "greenhouseKey" && e.index === 0 && e.month < run.month),
    lines: [
      ["피니안", "어? 제 열쇠는 여기 있는데 문이 열려 있네요."],
      ["시엘", "네가 맡겨 둔 열쇠로 열었어. 꽃 한 송이 보러 가는데 매번 사람을 깨워야 하나?"],
      ["피니안", "도련님 신발 자국이었구나! 흙 묻은 구두로 돌아가시면 세바스찬 씨가 보실 텐데."],
      ["시엘", "이미 봤겠지. 기왕 들킨 김에 이 꽃 이름이나 가르쳐 줘."]
    ],
    choices: [
      {label: "피니안이 외우는 법을 듣는다", reply: ["피니안", "이건 입을 벌린 사자처럼 생겼죠? 옆을 살짝 누르면요. 도련님이 해 보세요!"], trust: "finny"},
      {label: "화단에 쪼그려 앉아 꽃을 본다", reply: ["시엘", "……정말 입이 벌어지는군. 한 번만 더."], stat: "stress", amount: -3}
    ]
  },
  {
    id: "visitGardenPace", place: "garden", npc: "피니안", title: "벤치를 옮긴 자리",
    condition: run => Boolean(run.people.finny) && run.events.some(e => e.id === "greenhouseKey" && e.index === 1 && e.month < run.month),
    lines: [
      ["피니안", "지난번에 도련님이 여기서 오래 서 계셨잖아요. 그래서 저쪽 벤치를 가져왔어요."],
      ["시엘", "그 돌덩이를? 세바스찬한테 수레라도 빌리지 그랬어."],
      ["피니안", "벤치는 가벼웠는데 수평 맞추기가 어려웠어요. 한쪽에 앉아 보실래요?"],
      ["시엘", "그럼 넌 반대쪽에 앉아. 둘이 앉을 때도 흔들리나 보게."]
    ],
    choices: [
      {label: "둘이 앉아서 해가 지는 걸 본다", reply: ["피니안", "여기서는 온실 유리에 노을이 두 번 비쳐요. 두 번째가 벌써 왔네요."], stat: "stress", amount: -3},
      {label: "벤치가 놓인 자리를 정원도에 표시한다", reply: ["피니안", "이제 정원도에 제가 고른 자리도 들어가요? 그럼 다음엔 길가 풀도 다듬어 둘게요!"], trust: "finny"}
    ]
  },
  {
    id: "visitLibrarySeal", place: "library", npc: "타나카", title: "봉인된 장부",
    condition: run => Boolean(run.people.tanaka) && (run.counts.inquiry || 0) >= 1,
    lines: [
      ["타나카", "도련님, 서가를 비우다가 이 장부가 나왔습니다. 끈은 아직 그대로입니다."],
      ["시엘", "가죽은 그을렸는데 봉랍에는 먼지 하나 없군. 누가 다시 봉했지?"],
      ["타나카", "저입니다. 마른 종이를 옮길 때 낱장이 달아날까 봐서요. 풀기 전에 그 말씀부터 드려야 할 것 같았습니다."],
      ["시엘", "잘했어. 그때 무엇을 봤는지 기억할 사람도 마침 여기 있고."]
    ],
    choices: [
      {label: "봉랍을 떼고 원본을 함께 펼친다", reply: ["타나카", "조각은 제가 받겠습니다. 도련님께서는 첫 장 귀퉁이를 잡아 주십시오."], stat: "통찰", amount: 2},
      {label: "원본을 맡기고 사본을 부탁한다", reply: ["타나카", "빈 줄까지 보이는 대로 옮겨 두겠습니다. 제가 기억하는 것은 따로 쓰지요."], trust: "tanaka"}
    ]
  },
  {
    id: "visitGardenGraft", place: "garden", npc: "피니안", title: "리본 달린 가지",
    condition: run => Boolean(run.people.finny) && (run.counts.walk || 0) >= 1,
    lines: [
      ["시엘", "피니, 장미마다 왜 천 조각을 묶어 놨지?"],
      ["피니안", "제가 겨울에 접붙인 가지예요. 잎이 나니까 어느 게 제 것이었는지 도무지 못 찾겠어서요."],
      ["시엘", "그렇게 꽉 묶으면 굵어질 자리가 없잖아. 자, 이쪽은 내가 잡고 있을게."],
      ["피니안", "아, 정말 자국이 났네요. 내일은 끈부터 보러 와야겠다."]
    ],
    choices: [
      {label: "말뚝에 리본을 옮겨 묶는다", reply: ["피니안", "이제 얼마든지 굵어져도 되겠어요. 남은 것도 제가 이렇게 할게요!"], trust: "finny"},
      {label: "다음 산책 때 볼 가지를 골라 둔다", reply: ["시엘", "이건 잎 끝이 벌써 붉어. 어느 쪽 꽃이 피나 내기할까?"], stat: "motivation", amount: 2}
    ]
  },
  {
    id: "visitKitchenBowl", place: "kitchen", npc: "바르도", title: "손잡이 달린 그릇",
    condition: run => Boolean(run.people.bard) && (run.hp < 75 || (run.counts.recovery || 0) > 0),
    lines: [
      ["바르도", "맛만 좀 봐 주시겠습니까. 쟁반이 올라갔다가 그대로 돌아오면 요리사 체면이 영 말이 아니라서요."],
      ["시엘", "수프를 찻잔에 담았네."],
      ["바르도", "책 읽으시면서 한 손으로 드시라고요. 숟가락이 거슬리시는 것 같더군요."],
      ["시엘", "그렇게까지 내가 언제 숟가락을 내려놨는지 지켜봤어?"]
    ],
    choices: [
      {label: "잔을 들고 그 자리에서 마신다", reply: ["바르도", "한 잔 더 드릴까요? 예, 다음 잔은 조용히 식탁에 갖다 놓겠습니다."], stat: "hp", amount: 3},
      {label: "저녁에도 같은 잔을 부탁한다", reply: ["바르도", "그럼 도련님 잔은 이걸로 정해 두죠. 손잡이에 흠이 있어서 눈 감고도 찾겠습니다."], trust: "bard"}
    ]
  },
  {
    id: "visitQuartersHem", place: "quarters", npc: "메이린", title: "소매 안쪽의 바늘땀",
    condition: run => Boolean(run.people.mey) && (!run.sequence?.visitPerson || run.sequence.visitPerson === "mey") && run.stats.기품 >= 20,
    lines: [
      ["메이린", "도련님, 잠깐만 팔을 굽혀 봐 주시겠습니까요? 지난번 가봉 때보다 소매가 짧아진 것 같아서요."],
      ["시엘", "새로 맞춘 지 얼마나 됐다고. ……손목이 보이긴 하네."],
      ["메이린", "안에 이만큼 남겨 뒀어요. 풀면 다음 봄까지 입으실 수 있습니다요."],
      ["시엘", "처음부터 남겨 뒀어? 그때 내 팔이 얼마나 더 길어질 줄 알고."]
    ],
    choices: [
      {label: "메이린에게 길이를 맡긴다", reply: ["메이린", "내일 아침이면 됩니다요. 왼팔이랑 오른팔 길이도 따로 적어 놨거든요."], trust: "mey"},
      {label: "팔을 뻗어 움직일 때의 길이도 잰다", reply: ["시엘", "자, 이렇게 카드 한 장을 건넬 때. 딱 여기까지만 보이면 돼."], stat: "기품", amount: 2}
    ]
  },
  {
    id: "visitQuartersLedge", place: "quarters", npc: "스네이크", title: "창턱의 빈 바구니",
    condition: run => Boolean(run.people.snake) && (!run.sequence?.visitPerson || run.sequence.visitPerson === "snake"),
    lines: [
      ["시엘", "요 며칠 빈 바구니만 창 앞에 있더군. 바닥 천은 왜 반만 덮었어?"],
      ["스네이크", "볕이 드는 쪽하고 그늘진 쪽 중에서 내가 고를 수 있게 해 뒀어. ⋯라고 에밀리가 말했어."],
      ["시엘", "네가 있었어? 난 손수건 무늬인 줄 알았는데."],
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
      ["엘리자베스", "시엘, 연습 좀 도와줘. 어제 저쪽 구석에서 춤을 췄는데 피아노 소리가 영 안 들렸어."],
      ["시엘", "일부러 피아노에서 제일 먼 자리까지 의자를 밀어 뒀구나."],
      ["엘리자베스", "응! 중간에 음악이 끊겨도 내가 돌 때 손을 받아 줄 수 있어?"],
      ["시엘", "왼손이지? ……그 표정은 뭐야. 손은 제대로 내밀었잖아."]
    ],
    choices: [
      {label: "손끝으로만 박자를 맞춘다", reply: ["엘리자베스", "맞았어! 반주가 다시 들리는 데까지 우리 한 번도 안 멈췄어."], stat: "매력", amount: 2},
      {label: "서로 발을 보면서 한 번 더 춘다", reply: ["시엘", "구두코는 내가 먼저 밟았어. 이번엔 네 차례라고 웃진 마."], stat: "stress", amount: -3}
    ]
  },
  {
    id: "visitCompanyBox", place: "company", npc: "세바스찬", title: "뜯긴 모서리",
    condition: run => run.salesBook.some(row => row.sold > 0),
    lines: [
      ["세바스찬", "도련님, 가게에서 가져온 빈 상자입니다. 손님들이 물건만 꺼내 가고 두고 갔다더군요."],
      ["시엘", "전부 오른쪽 모서리가 뜯겼어. 뚜껑에 붙이라고 한 손잡이는 멀쩡하고."],
      ["세바스찬", "하나 열어 보시겠습니까? 제가 방금 풀을 칠했습니다."],
      ["시엘", "……손가락이 안 들어가. 이래서 모서리를 잡아당겼구나."]
    ],
    choices: [
      {label: "시엘의 손 크기로 홈을 다시 그린다", reply: ["시엘", "이 정도면 장갑을 끼고도 열 수 있겠어. 내일 가게에 견본을 갖다 줘."], stat: "경영", amount: 2},
      {label: "다시 닫아 선물해도 되는지 시험한다", reply: ["세바스찬", "초콜릿 하나를 넣었습니다. 열어 보신 뒤의 평도 듣고 싶군요."], stat: "통찰", amount: 2}
    ]
  },
  {
    id: "visitTownRain", place: "town", npc: "라우", title: "비 오는 날의 진열창",
    condition: run => run.month >= 2 && (run.counts.supplier || run.salesBook.some(row => row.sold >= 10)),
    lines: [
      ["라우", "백작, 거기 서서 뭘 보시나? 가게 안에서 보면 더 가까운데."],
      ["시엘", "여기가 애들 눈높이야. 창 한가운데 붙인 가격표 때문에 태엽 말 머리가 가렸어."],
      ["라우", "아, 그렇군. 난 비가 와서 오늘 손님이 없는 줄 알았는데."],
      ["시엘", "비는 오는 날마다 오잖아. 네가 값을 얼마나 잘 보이게 써 붙였는지 이쪽에서도 한번 봐."]
    ],
    choices: [
      {label: "가격표를 아래로 내려 반응을 본다", reply: ["라우", "이런, 벌써 한 아이가 멈췄네. 백작은 내 가게에 더 자주 들러야겠어."], stat: "경영", amount: 2},
      {label: "옆 가게의 비 오는 날 진열도 살핀다", reply: ["시엘", "저 창은 불을 일찍 켰어. 길에 고인 물에까지 물건이 비치는군."], stat: "통찰", amount: 2}
    ]
  },
  {
    id: "visitTownhouseChess", place: "townhouse", npc: "소마", title: "두 번째 체스판",
    condition: run => Boolean(run.flags.townhouse && run.people.soma && (run.people.agni || run.flags.agni)) && run.month % 2 === 1,
    lines: [
      ["소마", "시엘! 그 판은 그대로 둬! 지난번에 네가 지기 직전에 집에 갔잖아."],
      ["시엘", "아직 안 졌어. 그런데 체스판을 왜 하나 더 샀지?"],
      ["소마", "나도 체스는 두고 싶고, 네가 오기 전에 네 말을 옮겨 버리긴 싫잖아. 그래서 하나 더 샀어!"],
      ["시엘", "……그쪽 판에서도 내 말을 두고 있었네. 이 수를 세 번이나 연습했어?"]
    ],
    choices: [
      {label: "소마가 준비한 수부터 받아 준다", reply: ["소마", "좋아! 아그니, 이번엔 귀띔해 주면 안 돼. 이 수는 내가 생각했어!"], trust: "soma"},
      {label: "두 판의 차이를 찾아낸다", reply: ["시엘", "네가 연습할 때는 이 폰이 한 칸 뒤에 있었지. 자, 이제 내 차례야."], stat: "통찰", amount: 2}
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
      {label: "문 앞에서 두 번 두드린다", reply: ["아그니", "계단 소리가 들리시지요? 차를 한 잔 더 준비하겠습니다."], stat: "매력", amount: 2},
      {label: "아그니와 누가 먼저 듣는지 겨뤄 본다", reply: ["시엘", "지금. ……너도 들었구나. 소마는 실내화 뒤축부터 닳겠어."], stat: "통찰", amount: 2}
    ]
  }
];
