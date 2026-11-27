"use strict";

const recruitArt={
  bedroom:{bg:"assets/room-bedroom.webp"},garden:{bg:"assets/room-garden.webp"},
  lab:{bg:"assets/endings/black.webp",crop:[0,0,221,145],tone:"cold"},
  dark:{bg:"assets/endings/black.webp",crop:[0,0,185,115],tone:"blackout"},
  night:{bg:"assets/room-garden.webp",tone:"night"},
  library:{bg:"assets/room-library.webp"},street:{bg:"assets/room-street.webp",tone:"night"},
  parlour:{bg:"assets/room-ballroom.webp"},study:{bg:"assets/manor.webp"},
  field:{bg:"assets/room-field.webp"},london:{bg:"assets/room-street.webp"}
};
const recruitProps={tea:"assets/goods-tea.webp"};
const recruitCast={
  ciel:"assets/ciel.png",ciel11:"assets/ciel-11.webp",ciel12:"assets/ciel-12.webp",seb:"assets/sebastian.webp",
  finny:"assets/npc-finny.webp",mey:"assets/npc-mey.webp",owl:"assets/portraits/mey-owl.webp",bard:"assets/npc-bard.webp",tanaka:"assets/npc-tanaka.webp",
  snake:"assets/npc-snake.webp",soma:"assets/portraits/soma.webp",agni:"assets/portraits/agni.webp"
};
// Speakers before the naming scene use the boy's number. His gardener portrait appears only at the manor.
const recruitScenes={
  gardener:{name:"피니안",title:"번호 대신 이름을",result:"피니안이 팬텀하이브가의 정원사가 되었다.",scenes:[
    {title:"연구소",music:"gloomy",art:"lab",lines:[
      ["연구원","여긴 끝났어. 기록부터 전부 불태워!",null,{"cg":"black"}],
      ["다른 연구원","아이들은 어떡합니까?",null,{"cg":"black"}],
      ["연구원","실험체 따위 살려 둘 수 없어. 서둘러!",null,{"cg":"black"}],
      ["","위가 소란스럽다. 피니안의 옆에 앉아 있던 아이가 먼저 고개를 들었다.",null,{"cg":"black"}]
    ]},
    {title:"선생님",music:"gloomy",art:"dark",lines:[
      ["아이","선생님……?",null,{"cg":"black"}],
      ["","철문이 열렸다. 아이들은 그저 묻고 싶은 게 있었을 뿐이었다.",null,{"cg":"black"}],
      ["","탕―!",null,{"cg":"black","fx":"shake"}],
      ["","바로 옆에서 고막을 찢는 총성이 울렸다.",null,{"cg":"black"}],
      ["","정신을 차렸을 때, 부서진 철문 너머로 S-012는 맨발로 달리고 있었다.",null,{"cg":"black"}],
      ["","그리고 좁은 사다리를 기어올라, 머리 위 뚜껑을 힘껏 밀어 젖혔다.",null,{"cg":"black"}]
    ]},
    {title:"달빛 아래",music:"gloomy",art:"night",cast:["ciel","seb"],lines:[
      ["","······.",null,{"fx":"fade"}],
      ["","밖이었다."],
      ["","하늘에 크고 둥근 빛이 떠 있었다. S-012의 바로 앞에는 두 사람이 서 있었다."],
      ["S-012","으아아……!",null,{"fx":"shake"}],
      ["세바스찬","도련님, 제 뒤로."],
      ["시엘","잠깐, 세바스찬."],
      ["시엘","… 네 이름은 뭐지?"],
      ["장면","그때는 그것이 무슨 말인지 알 수 없었다.\nS-012에게 번호가 아니라 이름을 물은 사람은 시엘이 처음이었으니까."]
    ]},
    {title:"그 뒤, 저택의 서재",art:"library",cast:["finny","ciel"],lines:[
      ["장면","피니안의 머리카락이 조금 자랐을 때쯤, 시엘이 제 방으로 소년을 불렀다.",null,{"fx":"fade"}],
      ["시엘","너한테 이름을 하나 지어 주겠어."],
      ["소년","이름……요?"],
      ["시엘","언제까지고 널 피험자 12번이라 부를 순 없잖아. 금발이 제법 근사하게 자랐군."]
    ]},
    {title:"금발의 영웅",art:"library",cast:["finny","ciel"],lines:[
      ["시엘","‘핀’. 옛말로 금발이라는 뜻이지. 여기 나오는 영웅도 그 머리 때문에 그렇게 불렸어."],["소년","그 책에 저처럼 머리 노란 사람이 나와요?"],
      ["시엘","그래. 그러니 네 이름은 피니안이다."]]},
    {title:"세바스찬의 한마디",art:"library",cast:["ciel","seb"],lines:[
      ["세바스찬","꽤나 거창한 이름을 골라 주셨군요."],["세바스찬","제 경우처럼 개 이름을 물려받는 것보다는 백배 낫겠습니다만."]]},
    {title:"소년의 책",music:"romantic",art:"library",cast:["finny","ciel"],lines:[
      ["시엘","이 책은 네 거야. 글자를 익히거든 네 이름이 나온 대목을 직접 읽어 봐. 알았지, 피니안?"],
      ["피니안","네!"],
      ["장면","피니안이 책을 품에 꼭 껴안았다. 소년의 팔 안에서 양장본 표지가 푹 우그러졌다.",null,{"fx":"shake"}]
    ]},
    {title:"저택의 새 사용인",music:"cheerful",art:"library",cast:["finny","seb"],lines:[
      ["세바스찬","이제야 표정이 풀리는군요."],
      ["세바스찬","그럼 그 책은 조금만 놓아 주시겠습니까. "],
      ["세바스찬","말씨도, 힘을 쓰는 법도 차차 익히셔야겠습니다."]
    ]}
  ]},
  maid:{name:"메이린",title:"아침의 올빼미",result:"메이린이 팬텀하이브가의 메이드로 합류했다.",scenes:[
    {"title": "아침 시중", "art": "bedroom", "cast": ["seb"], "lines": [
      ["세바스찬","도련님. 아침입니다.",null,{"fx":"fade"}],
      ["시엘","으음……."],
      ["장면","세바스찬이 커튼을 걷었다. 햇빛이 이불 끝까지 들어왔다."]
    ], "music": "daily"},
    {"title": "깨진 창", "art": "bedroom", "cast": ["seb"], "lines": [
      ["세바스찬","……!",null,{"fx":"slide"}],
      ["장면"," 시엘이 몸을 일으키기도 전에 은제 찻주전자가 그의 앞을 가로막았다."],
      ["","쨍그랑 ―!",null,{"fx":"shake"}]
    ]},
    {"title": "창밖", "art": "garden", "cast": ["owl"], "lines": [["올빼미", "빗나갔어……?"]]},
    {"title": "깨진 창", "art": "bedroom", "cast": ["seb"], "lines": [
      ["시엘","뭐야? 주전자는 또 왜 줄줄 새는 거지?",null,{"right":"ciel","left":"seb","fx":"shake"}],
      ["장면","세바스찬이 찻잔을 받쳐 들었다. 총알이 뚫은 주전자 옆구리에서 홍차가 잔 안으로 똑똑 떨어졌다.",null,{"right":"ciel","left":"seb"}]
    ]},
    {"title": "닐기리", "art": "bedroom", "cast": ["seb", "ciel"], "lines": [
      ["세바스찬","…… 오늘 아침 차는 산뜻한 닐기리로 골랐습니다."],
      ["시엘","차 이름을 물어봤어?! 방금 내 머리 옆을 스쳐 간 게 뭐냐고!",null,{"fx":"shake"}],
      ["세바스찬","누가 도련님을 저격했습니다. 제법 눈이 좋은 손님이군요."],
      ["시엘","하아…?! 지금 그런 말이나 할 때야?"]
    ], "prop": "tea"},
    {"title": "식사가 식기 전에", "art": "garden", "cast": ["ciel", "seb"], "lines": [
      ["","…….",null,{"cg":"black","hideCast":true,"fx":"fade"}],
      ["장면","― 그런 소동이 있고, 결국 정원에 아침상이 차려졌다.",null,{"fx":"fade"}],
      ["장면","세바스찬이 시엘의 의자를 당겼다."],
      ["세바스찬","완두콩 수프와 미트볼입니다. 크루아상은 방금 구웠고, 달걀도 삶아 두었습니다."],
      ["시엘","(맛 없을 것 같은 메뉴인데…….)"],
      ["세바스찬","후식은 오렌지 젤리입니다. 그럼 잠시 다녀오겠습니다. 천천히 드십시오."],
      ["시엘","……어?"],
      ["","…….",null,{"fx":"fade","cg":"black","hideCast":true}],
      ["장면","잠시 후, 세바스찬이 포박한 침입자를 질질 끌고 저택으로 돌아왔다.",null,{"fx":"fade","cg":"black","hideCast":true}]
    ], "music": "daily"},
    {"title": "창가의 올빼미", "art": "library", "cast": ["owl", "seb"], "lines": [
      ["세바스찬","실례하겠습니다, 도련님. 아침에 찾아온 ‘올빼미’를 데려왔습니다.",null,{"fx":"fade"}],
      ["올빼미","저 애가…… 팬텀하이브 백작?"],
      ["시엘","청방의 백이 나를 노린다더니. 제 손으로 길렀다는 올빼미까지 보낸 걸 보면 정보가 맞았군.",null,{"left":"owl","right":"ciel"}],
      ["올빼미","날 죽여. 뭘 물어봐도 대답은 안 해. 정원 바닥만 피로 더러워질걸.",null,{"left":"owl","right":"ciel"}],
      ["세바스찬","바닥까지 다시 닦을 일을 제가 왜 만들겠습니까? 저는 다른 용건이 있습니다."]
    ], "castBySpeaker": {"시엘": ["owl", "ciel"]}},
    {music:"daily","title": "뜻밖의 일자리", "art": "library", "cast": ["owl", "seb"], "lines": [
      ["세바스찬","팬텀하이브가에서 일해 보실 생각은 없습니까?"],
      ["올빼미","……뭐?",null,{"fx":"shake"}],
      ["시엘","뭐라고? 세바스찬, 저 녀석은 오늘 아침에 나를 쏘러 왔어!",null,{"fx":"shake","right":"ciel","left":"seb"}],
      ["세바스찬","예. 그런데 저희는 사람이 모자라고, 피니 혼자서 저택 일을 전부 맡을 수도 없지요. ",null,{"left":"seb","right":"ciel"}],
      ["세바스찬","저 눈이라면 망을 보는 데도 쓸모가 있겠습니다."],
      ["세바스찬","게다가 일을 그르친 이상 이제 백에게 돌아갈 수도 없겠지요? 마침 이곳에는 빈자리가 있습니다."]
    ], "castBySpeaker": {"시엘": ["owl", "ciel"]}},
    {music:"daily","title": "빈자리는 메이드", "art": "library", "cast": ["owl", "seb"], "lines": [
      ["세바스찬","손님을 맞으려면 메이드 한 명은 있어야 한다고 말씀하신 분은 도련님이셨습니다."],
      ["시엘","메이드? 잠깐. 올빼미가……?",null,{"left":"owl","right":"ciel"}],
      ["세바스찬","예. 이분은 여성입니다만."],
      ["시엘","……그렇다고 날 죽이러 온 녀석한테 메이드 앞치마를 두르겠다는 거야?",null,{"fx":"shake","left":"seb","right":"ciel"}]
    ], "castBySpeaker": {"시엘": ["owl", "ciel"]}},
    {music:"daily","title": "저택이 찾는 사람", "art": "library", "cast": ["owl", "seb"], "lines": [
      ["세바스찬","도련님을 지킬 솜씨가 있고, 배신할 수 없는 처지에 있고, 도련님이 직접 그 실력을 검증하신 사람.\n구인 광고를 내도 좀처럼 찾기 힘들겠지요."],
      ["올빼미","잠깐. 둘이서 멋대로 정하지 마. 난 안 해.\n사람 죽이던 손으로 메이드 일을 어떻게 하라고."],
      ["세바스찬","먼지떨이를 들어 보기도 전에 그걸 어찌 아십니까?\n주인에게 성가신 것을 치운다는 점에선 꽤 익숙한 일일 텐데요."],
      ["세바스찬","소개장도 여권도 없이 청방에 쫓기면서, 이 문을 나가면 어디로 가실 생각입니까?"],
      ["올빼미","그건……."]
    ]},
    {"title": "고용 조건", "art": "library", "cast": ["owl", "seb"], "lines": [
      ["세바스찬","메이드 경력은 묻지 않습니다. 나이도, 어디에서 오셨는지도요."],
      ["세바스찬","급료와 휴일이 있고, 설탕과 홍차도 넉넉히 드립니다. 일을 잘하시면 급료도 올라갑니다."],
      ["세바스찬","어떻습니까? 첫 일자리치고는 꽤 괜찮은 조건이지요."]
    ], "music": "daily"},
    {"title": "그 눈동자", "art": "library", "cast": ["owl", "seb"], "lines": [
      ["장면","세바스찬이 올빼미 앞에 몸을 낮췄다. "],
      ["장면","그의 어깨 너머, 창가에 어린 백작이 서 있었다.",null,{"left":"seb","right":"ciel"}],
      ["세바스찬","그 눈동자―, 도련님을 위해 써보지 않겠습니까?",null,{"left":"seb","right":"ciel"}]
    ], "music": "daily"}
  ]},
  cook:{name:"바르도",title:"저택의 새 셰프",result:"바르도가 팬텀하이브가의 셰프로 합류했다.",scenes:[
    {title:"서재 면담",art:"library",cast:["ciel","seb"],lines:[
      ["시엘","미군 출신을 우리 집 셰프로 쓰겠다고?"],
      ["세바스찬","네, 도련님."],
      ["시엘","꼭 둬야 해? 지금까지 주방은 너 혼자서도 잘 꾸려 왔잖아."],
      ["세바스찬","손님은 저녁상에 오른 요리로도 그 집을 평합니다. \n팬텀하이브 가의 이름을 다시 세우시려면 셰프가 필요합니다."]
    ]},
    {title:"요리와 출신",art:"library",cast:["ciel","bard"],lines:[
      ["시엘","이름이 알려진 셰프라면 대개 프랑스나 이탈리아 사람이잖아."],
      ["바르도","뭐야, 양키라서 영 마땅찮단 건가? 프랑스 놈이 구우면 같은 고기도 더 고상한 맛이 난다 이거지?"],
      ["바르도","어차피 배에 들어가면 그만인 걸, 맛이 무슨 대수라고!"],
      ["시엘","……난 누가 요리하든 상관없어. 식탁에 올릴 거면 맛있는 게 좋다는 거지."]]},
    {title:"주방의 명령",art:"library",cast:["ciel","bard"],lines:[
      ["시엘","전장에선 숯이 될 때까지 구우라는 명령을 받았을지도 모르지."],
      ["시엘","하지만 내 주방에선 태우지 마. 이건 명령이야."],
      ["장면","바르도가 고개를 들었다."]]},
    {title:"교육을 맡기다",music:"etiquette",art:"library",cast:["ciel","seb"],lines:[
      ["세바스찬","애초에 제가 이분을 데려온 건 요리 솜씨를 보아서가 아닙니다.\n이만한 대저택에 상급 사용인이 저 하나일 수는 없으니까요."],
      ["시엘","방식은 너한테 맡기지. 제대로 교육시켜."],
      ["세바스찬","알겠습니다."]
    ]}
  ]},
  homecoming:{name:"타나카",title:"돌아온 집사",result:"타나카가 휴직을 마치고 저택 서재로 돌아왔다.",scenes:[
    {title:"다시 찾은 서재",music:"gloomy",art:"library",cast:["tanaka","ciel"],lines:[
      ["장면","서재 문을 두드리는 노크 소리에 시엘이 펜을 내려놓았다. 문 앞에 선 타나카가 모자를 벗었다."],
      ["타나카","다녀왔습니다, 도련님. 너무 오래 자리를 비웠습니다."],
      ["시엘","어서 와, 할아범. 거기 앉아. "],
      ["타나카","주인어른을 지켜 드리지 못한 몸으로 다시 이 방에 들어서려니, 고개를 들 면목이 없습니다."],
      ["시엘","할아범 잘못이 아니야."],
      ["장면","시엘이 책상 한쪽에 쌓아 둔 서신 뭉치를 타나카 앞으로 밀었다."],
      ["시엘","할아범이 돌아오면 맡기려고 따로 빼 뒀어. 예전처럼 할아범이 먼저 훑어봐 줘."]
    ]}
  ]},
  circus:{name:"스네이크",title:"봉투에 적힌 이름",result:"스네이크는 타운하우스에서 소마와 아그니를 만났다. 본저택에서 시엘과 이야기를 나눈 뒤, 뱀들과 함께 풋맨으로 일하기로 했다.",scenes:[
    {title:"봉투에 적힌 이름",music:"gloomy",art:"field",cast:["snake"],lines:[
      ["장면","공연이 끝나면 조커가 돈을 세고, 스네이크는 뱀을 셌다. 오늘은 뱀을 다 세고도 천막을 떠날 수 없었다."],
      ["장면","스코틀랜드 야드가 단원들을 데려간 뒤였다. 조커의 짐 속에 마른 분 냄새가 밴 편지 한 통이 남아 있었다. "],
      ["","‘팬텀하이브 백작 귀하.’"]
    ]},
    {title:"런던의 번지",music:"gloomy",art:"london",cast:["snake"],lines:[
      ["장면","런던의 타운하우스. 스네이크는 봉투에 적힌 번지와 눈앞의 문패를 번갈아 보았다. 목도리 속에서 오스카가 먼저 고개를 내밀었다."],
      ["스네이크","봉투랑 문패에 똑같은 이름이 있어. 이번엔 제대로 왔네. ⋯라고 오스카가 말했어."]]},
    {title:"타운하우스의 문간",music:"daily",art:"london",cast:["snake","soma"],lines:[
      ["소마","이봐! 문 열어 달라며? 그렇게 보고만 있으면 안에서 어떻게 알아!"],
      ["스네이크","이 편지를 읽을 사람을 찾고 있어. 여기 ‘팬텀하이브 백작 귀하’라고 쓰여 있지? ⋯라고 오스카가 말했어."],
      ["소마","시엘한테 볼일 있어? 오늘은 본저택에 있는데. "],
      ["소마","아그니, 우리 마차가 아직 마구간에 있나?"]
    ]},
    {title:"손으로 전할 편지",music:"daily",art:"london",cast:["snake","agni"],lines:[
      ["아그니","아직 마구간에 있습니다, 왕자님.\n손님, 봉투만 전해 드려도 되겠습니까?"],
      ["스네이크","고마워. 그래도 이건 스네이크가 직접 건네고 싶대. ⋯라고 키츠가 말했어."],
      ["아그니","그렇다면 마차를 대겠습니다. 바구니도 이리 주십시오."],
      ["스네이크","바구니는 밑을 받쳐 줘. 에밀리가 손잡이에 턱을 괴고 자거든. ⋯라고 키츠가 말했어."]
    ]},
    {title:"마차를 빌리다",music:"daily",art:"london",cast:["snake","soma"],lines:[
      ["소마","다들 내 마차에서 자면 되잖아! 참, 시엘한테 전해 줘. 지난번 체스는 아직 내 차례라고!"]]},
    {title:"온실 앞",music:"gloomy",art:"garden",cast:["snake"],lines:[
      ["장면","본저택 온실 앞에서 마차가 멎었다. 스네이크가 바구니 뚜껑을 조금 들자 납작한 머리들이 볕 드는 돌턱으로 하나씩 미끄러져 나왔다."]
    ]},
    {title:"백작에게 묻다",music:"gloomy",art:"garden",cast:["snake","ciel"],lines:[
      ["시엘","시엘 팬텀하이브야. 아그니가 편지를 든 손님이 온다고 했는데, 네가 그 녀석인가? 거기 내 장갑을 깔고 누운 녀석은 일행이고?"],
      ["스네이크","난 스네이크야. 장갑이 마음에 든 저 애는 와일드고. ⋯라고 에밀리가 말했어."],
      ["장면","스네이크는 벌떡 일어섰다. 손에 쥐고 온 편지를 내미는 데는 한참이 더 걸렸다."],
      ["스네이크","조커의 짐에서 이게 나왔어. 우리 식구들을 데려가라고 한 게 당신이야? ⋯라고 와일드가 말했어."],
      ["시엘","편지부터 좀 보지. 그런데 조커가 누구지?"],
      ["스네이크","우리 서커스의 단장 대리야. ⋯라고 에밀리가 말했어."],
      ["스네이크","얼굴만이라도 볼 수 있어? 우리가 왔다고 조커한테 전해 줘. ⋯라고 오스카가 말했어."],
      ["시엘","서커스단이라면…… 노아의 방주 서커스단인가?"],
      ["스네이크","맞아. 그게 우리 천막에 걸린 이름이야. ⋯라고 와일드가 말했어."],
      ["장면","시엘은 며칠 전 세바스찬에게서 받아 본 스코틀랜드 야드의 보고서를 떠올렸다."],
      ["장면"," 첫 장에는 잡혀간 단원들의 명단이, 그 뒤에는 아이들이 사라진 날짜와 서커스의 순회 일정이 나란히 적혀 있었다."],
      ["시엘","그럼 왜 잡혀갔는지도 똑바로 알아 둬. 네가 같이 지낸 단원들이 공연을 다니면서 아이들을 납치했어. 야드가 쫓고 있던 건 그 사건이야."],
      ["장면","봉투 가장자리가 바스락거렸다. 스네이크는 구겨진 데를 엄지로 몇 번이고 폈다."],
      ["스네이크","조커가 그랬다고? 매일 같은 천막에서 잤는데 스네이크한텐 아무 말도 안 했어. ⋯라고 에밀리가 말했어."],
      ["시엘","네가 그 사람을 보고 싶은 건 알겠어. 그래도 내 이름으로 면회시켜 주진 않아. 아직 피해 아동이 돌아오길 기다리는 집이 있으니까."],
      ["장면","시엘은 편지를 접힌 자국대로 접어 돌려주었다. 스네이크가 봉투를 받았는데도 그 손은 거기 그대로 있었다."]
    ]},
    {title:"열어 둘 문",music:"romantic",art:"garden",cast:["snake","ciel"],lines:[
      ["시엘","스네이크, 네가 보고 들은 건 야드에 네 입으로 얘기해. 난 해줄 수 있는 게 없어."],
      ["시엘","…그 다음에― 돌아갈 곳이 없으면 여기로 와. 일손이 하나 필요하거든."],
      ["스네이크","천막에선 뱀을 돌봤어. 여기선 뭘 하면 돼? ⋯라고 와일드가 말했어."],
      ["시엘","풋맨 일이지. 손님이 오면 외투를 받고 응접실로 안내해. 식사 때는 세바스찬 곁에서 시중을 들고."],
      ["스네이크","그럼 우리는 모자걸이에 있어도 돼? ⋯라고 오스카가 말했어."],
      ["시엘","손님이 모자를 걸었다가 기절할 일 있나. 뱀들의 거처도 따로 만들어 두면 되는 거지?"],
      ["장면","시엘이 손을 내밀었다. 스네이크는 손바닥을 바지에 한 번 닦고, 옷깃 위로 올라온 오스카 쪽으로 귀를 기울였다."],
      ["스네이크","그럼 내일 아침에 다시 올게. 네 장갑은 조금만 더 빌려 줘. 와일드가 벌써 잠들었어. ⋯라고 오스카가 말했어."],
      ["장면","그가 손을 잡고 일어서자 바구니에서 에밀리가 따라 나왔다. 소맷부리와 소맷부리 사이, 두 사람의 손등을 건너갔다."]
    ]},
    {title:"풋맨의 첫 급료",music:"romantic",art:"garden",cast:["seb","ciel"],lines:[
      ["","…….",null,{"fx":"fade"}],
      ["세바스찬","어쩌려고 저런 수상한 자를 받아들이셨습니까?"],
      ["시엘","마침 '애완동물'이 하나 갖고 싶었거든."],
      ["세바스찬","정말, 그런 이유라니…. 어쩔 수 없군요."],
      ["세바스찬","그럼 근무표에 올리겠습니다. 그런데 도련님, 장갑은 되찾으셨습니까?"],
      ["시엘","마음에 들었다잖아. 첫 급료에서 장갑 값을 떼면 주인이 너무 옹졸해 보이겠지?"],
      ["세바스찬","그럼 장부에는 새 풋맨의 동행을 위한 침구 한 벌로 적어 두지요."]
    ]}
  ]},
  visitPrince:princeChapter
};
for(const book of Object.values(recruitScenes)){
  book.lines=book.scenes.flatMap((scene,i)=>scene.lines.map(([speaker,text,withTanaka,cue])=>({scene,i,speaker,text,withTanaka,cue})));
}
function pageAt(id,at){return Number.isInteger(at)?Math.min(Math.max(0,at),recruitScenes[id].lines.length-1):0;}
function recruitReadingOrder(id,hasTanaka){
  return recruitScenes[id].lines.flatMap((page,at)=>page.withTanaka===true&&!hasTanaka?[]:[at]);
}
function recruitPage(id){
  const order=recruitReadingOrder(id,Boolean(state.people.tanaka));
  const saved=pageAt(id,state.recruitPage?.id===id?state.recruitPage.at:0);
  return order.find(at=>at>=saved)??order.at(-1);
}
function observePortraitStage(stage){
  const observer=new ResizeObserver(([entry])=>{
    stage.style.setProperty("--portrait-scene-height",entry.contentRect.height+"px");
    stage.style.setProperty("--portrait-scene-width",entry.contentRect.width+"px");
    const room=stage.querySelector("#playback:not([hidden]) .stage-room");
    if(room)fitLessonRoom(room);
  });
  observer.observe(stage);
  const toggle=document.getElementById("dialogue-visibility");
  const opening=stage.querySelector("#overture");
  const conversation=stage.querySelector("#conversation");
  function placeToggle(){
    const bar=opening && !opening.hidden && opening.dataset.signing!=="true" && opening.dataset.voiceOnly!=="true"
      ? opening.querySelector(".opening-top")
      : !conversation.hidden && conversation.querySelector(":scope > .recruit-controls");
    const parent=stage.dataset.artOnly==="true"?stage:(bar||stage);
    if(toggle.parentElement!==parent)parent.append(toggle);
  }
  // Each new conversation line may replace the entire playback toolbar.
  const controlsObserver=new MutationObserver(placeToggle);
  controlsObserver.observe(stage,{attributes:true,attributeFilter:["data-art-only"]});
  if(opening)controlsObserver.observe(opening,{attributes:true,attributeFilter:["hidden","data-signing","data-voice-only"]});
  controlsObserver.observe(conversation,{childList:true,attributes:true,attributeFilter:["hidden"]});
  placeToggle();
  toggle.addEventListener("click",event=>{
    event.stopPropagation();
    setArtOnly(stage,stage.dataset.artOnly!=="true");
  });
  document.addEventListener("keydown",event=>{
    if(event.repeat||event.altKey||event.ctrlKey||event.metaKey||event.isComposing||
       event.target?.closest?.("input,textarea,select,[contenteditable=true]")||
       !toggle.getClientRects().length||getComputedStyle(toggle).visibility!=="visible"||document.querySelector("dialog[open]"))return;
    const hidden=stage.dataset.artOnly==="true";
    if(event.code==="KeyH"||(hidden&&event.key==="Escape")){
      event.preventDefault();event.stopImmediatePropagation();
      setArtOnly(stage,!hidden);toggle.focus({preventScroll:true});
    }
  },true);
}
function setArtOnly(stage,hidden){
  if(hidden){
    stopRecruitAuto();
    if(typeof stopOpeningAuto==="function"){
      stopOpeningAuto();
      if(stage.dataset.prologue==="true"&&document.getElementById("overture").dataset.pause)drawOpening();
    }
    for(const auto of stage.querySelectorAll("#opening-auto,[data-read=auto]")){
      auto.setAttribute("aria-pressed","false");auto.textContent="자동 재생";
    }
  }
  const host=stage.querySelector("#conversation");
  if(host){
    host.querySelector(".art-layout-space")?.remove();
    const dialogue=host.querySelector(":scope > .dialogue");
    if(hidden && dialogue && getComputedStyle(host).display==="grid"){
      const space=document.createElement("div");
      space.className="art-layout-space";
      space.setAttribute("aria-hidden","true");
      const box=dialogue.getBoundingClientRect();
      const style=getComputedStyle(dialogue);
      Object.assign(space.style,{gridArea:style.gridArea,height:box.height+"px",margin:style.margin,
        visibility:"hidden",pointerEvents:"none",boxSizing:"border-box"});
      host.append(space);
    }
  }
  stage.dataset.artOnly=String(hidden);
  const openingMat=stage.querySelector(".opening-mat");
  if(openingMat)openingMat.hidden=hidden;
  for(const overlay of stage.querySelectorAll("#conversation .dialogue,#conversation .answers,#conversation .review-bubble,#conversation .review-slip")){
    overlay.style.visibility=hidden?"hidden":"";
    overlay.inert=hidden;
  }
  const toggle=stage.querySelector("#dialogue-visibility");
  if(toggle){
    toggle.setAttribute("aria-pressed",String(!hidden));
    toggle.title=hidden?"대화창 다시 표시 (H)":"대화창 숨기기 (H)";
  }
}
function cielPortraitScale(age){return String(Math.min(152,140+6*(age-10))/186);}
// Eye positions and eye-to-chin lengths were measured on each illustration at 400 px high.
const standingMeasures={
  "세바스찬":[189,67,43], "아그니":[193,53,36], "바르도":[181,52,46],
  "피니안":[163,68,44], "메이린":[165,94,45], "올빼미":[165,77,40], "스네이크":[177,64,45],
  "소마":[171,74,44], "타나카":[166,64,44], "라우":[178,62,42],
  "엘리자베스11":[144,87,39], "엘리자베스12":[150,78,35], "엘리자베스13":[156,89,45]
};
const cielMeasures=[[140,86,46],[146,79,45],[152,62,46]];
function standingFit(profile,age){
  const [referenceHeight,referenceEye,referenceChin]=cielMeasures[age-10];
  const referenceScale=Number(cielPortraitScale(age));
  const [height,eye,chin]=standingMeasures[profile];
  const eyeLevel=referenceScale*(1-referenceEye/400)+(height-referenceHeight)/300;
  if(profile==="엘리자베스12"&&age===11){
    // Match the two portraits by their face size, then position the crown just above Ciel’s.
    return {scale:referenceScale*referenceChin/chin*.93,window:referenceScale*1.018};
  }
  const faceRatio=profile.startsWith("엘리자베스")?1:1.08;
  const scale=Math.max(referenceScale*referenceChin*faceRatio/chin,eyeLevel/(1-eye/400));
  return {scale,window:eyeLevel+scale*eye/400};
}
function setPortraitAge(stage,age){
  const ageIndex=Math.max(10,Math.min(12,age));
  stage.dataset.castAge=String(ageIndex);
  stage.style.setProperty("--ciel-scale",cielPortraitScale(ageIndex));
  // Fit the tallest illustration once. Clipping each head separately flattens differences in height.
  const tallest=Math.max(...Object.keys(standingMeasures).map(profile=>standingFit(profile,ageIndex).window));
  stage.style.setProperty("--cast-camera",String(Math.min(1,.91/tallest)));
}
function framedStanding(name,src,classes,profile=name){
  const age=Number(document.getElementById("scene").dataset.castAge)||10;
  const fit=name==="시엘"?{scale:Number(cielPortraitScale(age)),window:Number(cielPortraitScale(age))}:standingFit(Object.hasOwn(standingMeasures,profile)?profile:"세바스찬",age);
  const portraitId=name==="시엘"?' data-portrait="ciel"':"";
  return '<span class="standing-window '+classes+'" style="--figure-scale:'+fit.scale+';--figure-height:'+fit.window+'"><img'+portraitId+' src="'+src+'" alt="'+String(name).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;')+'"></span>';
}
function sceneStanding(name,side,src,age){
  const profile=name==="엘리자베스"?name+(age||Number(document.getElementById("scene").dataset.castAge)+1):name;
  return framedStanding(name,src,"cast cast-"+side,profile);
}
function novelSpeakerName(speaker){
  const name=speaker?.trim();
  return name&&name!=="장면"?name:"";
}
function sceneLine(speaker,text,next,attributes="",heading=""){
  const name=novelSpeakerName(speaker);
  return '<article class="dialogue" '+attributes+'>'+(name?'<small>'+name+'</small>':'')+heading+
    '<p>'+text+' '+next+'</p></article>';
}
const novelExpressions={};
const recruitNames={ciel:"시엘",ciel11:"시엘",ciel12:"시엘",seb:"세바스찬",finny:"피니안",mey:"메이린",owl:"올빼미",bard:"바르도",tanaka:"타나카",snake:"스네이크",soma:"소마",agni:"아그니"};
const dialogueThemeKey="earl-phantomhive-dialogue-theme";
function readDialogueTheme(){
  try{return localStorage.getItem(dialogueThemeKey)==="light"?"light":"dark";}
  catch{return "dark";}
}
function readerControls(at,last,auto){
  return '<div class="opening-top recruit-controls" role="group" aria-label="대사 재생">'+
    '<button type="button" data-read="previous" '+(at===0?'disabled':'')+'>이전</button>'+
    '<button type="button" data-read="auto" aria-pressed="'+auto+'" '+(last?'disabled':'')+'>'+(auto?'자동 멈춤':'자동 재생')+'</button>'+
    '<button type="button" data-read="skip" '+(last?'disabled':'')+'>건너뛰기</button></div>';
}
const novelEffects={
  fade:[{filter:"brightness(0)"},{filter:"brightness(1)"}],
  dissolve:[{opacity:.22},{opacity:1}],
  slide:[{transform:"translateX(3%)",opacity:.55},{transform:"translateX(0)",opacity:1}],
  shake:[{transform:"translateX(0)"},{transform:"translateX(-5px)"},{transform:"translateX(5px)"},{transform:"translateX(-2px)"},{transform:"translateX(0)"}]
};
const novelPlayback=new WeakMap();
function playNovelCue(host,key,cue){
  const previous=novelPlayback.get(host);
  if(previous?.key===key&&previous.cue===cue)return;
  previous?.animation?.cancel();
  previous?.sound?.pause();
  if(!key){novelPlayback.delete(host);return;}
  const playback={key,cue};
  novelPlayback.set(host,playback);
  const reduced=typeof motionReduced==="function"?motionReduced():matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(cue?.fx&&Object.hasOwn(novelEffects,cue.fx)&&!reduced&&host.animate)
    playback.animation=host.animate(novelEffects[cue.fx],{duration:cue.fx==="shake"?320:500,easing:"ease-out"});
  if(cue?.se&&typeof playNovelSound==="function")playback.sound=playNovelSound(cue.se);
}
function novelCast(cue,file=x=>x){
  if(cue?.hideCast)return "";
  if(!cue?.left&&!cue?.right)return null;
  return ["left","right"].map(side=>{
    const id=cue[side];
    if(!Object.hasOwn(recruitCast,id))return "";
    const expression=novelExpressions[cue[side+"Expression"]];
    const art=expression?.actor===id?expression.file:recruitCast[id];
    return sceneStanding(recruitNames[id],side,file(art));
  }).join("");
}
function recruitMarkup(id,at,file=x=>x,readOnly=false,auto=false,answers="",hasTanaka=false,order=recruitReadingOrder(id,hasTanaka)){
  at=order.find(page=>page>=at)??order.at(-1);
  const book=recruitScenes[id],{scene,speaker,text,withTanaka,cue}=book.lines[at];
  const picture=cue?.cg||scene.picture;
  const art=picture?{bg:"assets/endings/"+picture+".webp"}:recruitArt[scene.art],bg=file(art.bg),last=at===order.at(-1);
  if(typeof rememberCG==="function")rememberCG(art.bg);
  const backdrop=art.crop
    ? '<svg class="review-room recruit-backdrop '+art.tone+'" viewBox="'+art.crop.join(" ")+'" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><image width="680" height="380" href="'+bg+'"/></svg>'
    : '<div class="review-room '+(art.tone||'')+'" style="background-image:url(&quot;'+bg+'&quot;)"></div>';
  const cast=cue?.standing?[cue.standing]:scene.castBySpeaker?.[speaker]||scene.cast||[];
  const actors=novelCast(cue,file)??cast.map((person,i)=>{
    const side=person==="ciel"?"right":cast.includes("ciel")||i===0?"left":"right";
    return sceneStanding(recruitNames[person],side,file(recruitCast[person]));
  }).join("");
  const label=last?(readOnly?"회상 마치기":"영입 확정"):"다음 대사";
  const arrow=answers?'':'<button type="button" class="line-next" data-read="'+(last?'finish':'next')+'" aria-label="'+label+'">▼</button>';
  const controls=readerControls(order.indexOf(at),last,auto);
  const props=scene.prop?'<img class="recruit-tea" alt="닐기리 홍차" src="'+file(recruitProps[scene.prop])+'">':'';
  return backdrop+actors+props+sceneLine(speaker,hasTanaka&&typeof withTanaka==="string"?withTanaka:text,arrow,
    'data-book="'+id+'" data-leaf="'+at+'" aria-live="polite" aria-atomic="true"')+answers+controls;
}
let recruitTimer=0,recruitAuto=false;
function stopRecruitAuto(){clearTimeout(recruitTimer);recruitTimer=0;recruitAuto=false;}
function drawRecruitReader(host,id,at,file,readOnly,onPage,onFinish,answers="",hasTanaka=false){
  const order=recruitReadingOrder(id,hasTanaka);
  at=order.find(page=>page>=at)??order.at(-1);
  const index=order.indexOf(at),end=order.length-1;
  clearTimeout(recruitTimer);if(index===end)stopRecruitAuto();
  host.innerHTML=recruitMarkup(id,at,file,readOnly,recruitAuto,answers,hasTanaka,order);
  const {text,withTanaka,cue}=recruitScenes[id].lines[at];
  const passage=hasTanaka && typeof withTanaka==="string"?withTanaka:text;
  playNovelCue(host,id+":"+at,cue);
  bindSceneReader(host,index,end,passage,to=>onPage(order[to]),answers?null:onFinish,cue?.wait);
}
// The standalone preview loads the Korean script without the locale module.
function readingDelay(source, koreanDelay){
  if(typeof gameLanguage==="undefined" || gameLanguage==="ko")return koreanDelay;
  const length=Array.from(translatedLine(source)).length;
  // Allow the typewriter to finish and leave time to read the complete line.
  return Math.max(koreanDelay,1200+length*(gameLanguage==="en"?48:86));
}
function bindSceneReader(host,at,end,text,onPage,onFinish,wait=0){
  const line=host.querySelector(".dialogue"),bar=host.querySelector(".recruit-controls");
  function step(to){if(line.isConnected)onPage(to);}
  function arm(){
    if(!recruitAuto||at===end)return;
    const delay=readingDelay(text,Math.min(6200,1700+text.length*90))+wait;
    recruitTimer=setTimeout(()=>{if(line.isConnected&&!document.hidden)step(at+1);else stopRecruitAuto();},delay);
  }
  function click(e){
    const control=e.target.closest("[data-read]");
    if(!line.isConnected||control?.disabled||window.getSelection()?.toString())return;
    const read=control?.dataset.read||(e.currentTarget===line?(at===end?"finish":"next"):"");
    if(!read)return;e.stopPropagation();
    if(read==="auto"){
      if(recruitAuto)stopRecruitAuto();else{recruitAuto=true;arm();}
      control.textContent=recruitAuto?"자동 멈춤":"자동 재생";control.setAttribute("aria-pressed",String(recruitAuto));return;
    }
    stopRecruitAuto();
    if(read==="previous"&&at>0)step(at-1);
    if(read==="next"&&at<end)step(at+1);
    if(read==="skip"&&at<end)step(end);
    if(read==="finish"&&at===end)onFinish?.();
  }
  function keydown(e){
    if(host.closest("[data-art-only=true]"))return;
    if(e.altKey||e.ctrlKey||e.metaKey||e.repeat||!["ArrowLeft","ArrowRight"].includes(e.key))return;
    e.preventDefault();e.stopPropagation();stopRecruitAuto();
    const to=at+(e.key==="ArrowLeft"?-1:1);
    if(to>=0&&to<=end)step(to);
  }
  for(const element of [line,bar]){
    element.addEventListener("keydown",keydown);
    element.addEventListener("click",click);
  }
  arm();
}
function showMonthlyRecruit(host,event){
  const id=event.id,at=recruitPage(id);
  const current=()=>tab==="plan"&&["event","slotEvent"].includes(state.phase)&&state.pending===id&&recruitPage(id)===at;
  const hasChoices=at===recruitReadingOrder(id,Boolean(state.people.tanaka)).at(-1)&&event.choices.length>1;
  const answers=hasChoices?'<div class="answers" role="group" aria-label="대화 선택지">'+
    event.choices.map((c,i)=>btn(c.label,"choose:"+i,Boolean(c.when&&!c.when(state)),"vn-choice")).join("")+'</div>':"";
  host.hidden=false;drawRecruitReader(host,id,at,recruitArtwork(currentCielAge()),false,to=>{
    if(!current())return;state.recruitPage={id,at:to,...(id==="circus"?{version:4}:id==="visitPrince"?{version:3}:id==="maid"?{version:3}:id==="cook"?{version:2}:{})};persist();render();
    host.querySelector(".line-next, .answers button")?.focus({preventScroll:true});
  },()=>{if(current())choose(0)},answers,Boolean(state.people.tanaka));
}
function recruitAge(id,month){return id==="gardener"?10:ageAt(month,28);}
function recruitArtwork(age){
  return path=>path===recruitCast.ciel&&age>=11?(age>=12?recruitCast.ciel12:recruitCast.ciel11):path;
}
let recruitMemory=null;
function openRecruitMemory(id){
  if(!Object.hasOwn(recruitScenes,id))return;stopRecruitAuto();
  const entry=state.events.find(entry=>entry.id===id);
  const month=entry?.month||state.month;
  const hadTanaka=entry?.hadTanaka??state.events.slice(0,state.events.indexOf(entry)).some(e=>e.id==="homecoming");
  recruitMemory={id,at:0,month,hadTanaka,previousTrack:musicPlayer.backgroundTrack,age:entry?.age||recruitAge(id,month)};tab="staffMemory";render(true);
}
function closeRecruitMemory(){
  stopRecruitAuto();const {id,previousTrack}=recruitMemory;recruitMemory=null;tab="record";
  musicPlayer.sync(previousTrack);render();
  const button=document.querySelector('[data-action="recruit-memory:'+id+'"]');
  if(button){button.closest("details").open=true;button.focus({preventScroll:true});}
}
function showRecruitMemory(host){
  const memory=recruitMemory,{id,at,age}=memory;
  host.hidden=false;host.dataset.review="false";
  drawRecruitReader(host,id,at,recruitArtwork(age),true,to=>{
    if(tab!=="staffMemory"||memory!==recruitMemory)return;
    memory.at=to;render();host.querySelector(".line-next")?.focus({preventScroll:true});
  },closeRecruitMemory,"",memory.hadTanaka);
}
