"use strict";

const revengeThreshold=300;
const endingArt={
  letter:["letter","은쟁반 위에 놓인 왕실 서신"],
  dress:["dress","거울 앞에서 알현복을 갖춰 입는 시엘"],
  court:["court","왕실에서 작위를 돌려받는 시엘"],
  command:["command","시엘의 명을 받아 무릎을 꿇는 세바스찬"],
  carriage:["carriage","겨울 역 앞에 세워 둔 검은 마차"],
  gloves:["gloves","서재 책상에 남겨진 흰 장갑"],
  key:["key","저택 열쇠를 건네는 시엘"],
  butler:["butler","긴 복도에 서서 시엘의 대답을 기다리는 세바스찬"]
};
const endings={
  vowTitle:{
    track:"prologue",
    scenes:[
      ["letter",[
        ["세바스찬","왕실에서 온 편지입니다. 이쪽 쟁반의 것은 직접 뜯으시지요."],
        ["시엘","……봉랍이 달라."],
        ["세바스찬","오늘은 비서관의 인장이 찍혀 있지 않습니다."],
        ["연출","시엘은 칼 대신 엄지손톱으로 봉랍을 눌렀다. 금이 가는 소리가 났다."],
        ["왕실 서신","시엘 팬텀하이브 경. 왕실에 귀속되어 있던 영지와 작위를 그대에게 돌려드립니다."],
        ["왕실 서신","서임식은 궁에서 거행합니다. 그대가 다시 우리 앞에 설 날을 기다리겠습니다."],
        ["시엘","내 앞으로 온 편지가 맞군."],
        ["세바스찬","예. 봉투에도 그렇게 적혀 있습니다."]
      ]],
      ["dress",[
        ["연출","거울 앞에는 예복과 장갑, 깃털이 달린 모자가 놓여 있었다. 재단사가 떠난 뒤 세바스찬이 옷깃을 여몄다."],
        ["세바스찬","왼쪽 어깨를 조금만 들어 주십시오."],
        ["시엘","……됐다. 더 당기면 자국이 눌려."],
        ["세바스찬","아직 통증이 있습니까?"],
        ["시엘","그 정도는 지났어."],
        ["연출","세바스찬의 손이 한 번 멎었다. 시엘은 거울에서 눈을 떼지 않았다."],
        ["시엘","가끔은 잊어. 그러다 저걸 보면 누가 해 놓은 일인지 다시 생각나지."],
        ["세바스찬","그럼 오늘은 여기까지만 채우겠습니다."],
        ["시엘","끝까지 채워. 내내 만질 수도 없잖아."],
        ["세바스찬","좋습니다. 이제 잘 어울리십니다."],
        ["시엘","그런 말도 제법 자연스럽군."],
        ["세바스찬","세 해 동안 매일 연습한 일이니까요."],
        ["시엘","마차를 대. 늦겠어."]
      ]],
      ["court",[
        ["연출","궁의 문이 열렸다. 시엘이 걸음을 옮길 때마다 발소리가 높은 천장 아래 남았다."],
        ["객석","선대의 아들이라지. 저 아이 혼자 저 앞까지 간다고?"],
        ["연출","시엘은 단 아래에서 멈췄다. 배운 대로 고개를 숙이고, 호명이 끝날 때까지 기다렸다."],
        ["빅토리아","고개를 들어요, 팬텀하이브 경. 얼굴을 잘 보아 두고 싶군요."],
        ["시엘","폐하."],
        ["빅토리아","오래 비워 두었던 자리예요. 돌아온 것을 환영합니다, 팬텀하이브 백작."],
        ["연출","견장 위로 새 장식의 무게가 얹혔다. 한 박자 늦게 객석에서 박수가 터졌다."],
        ["손님","저기서는 도련님 얼굴이 안 보일 텐데요. 가족 곁 자리를 청해 보지 그러셨어요?"],
        ["세바스찬","이 자리면 충분합니다. 백작께서 나오실 때 외투를 드려야 하거든요."],
        ["독백","보이지 않는 얼굴을 굳이 볼 필요도 없었다. 저 아이가 지금 웃고 있을 리는 없었으므로."]
      ]],
      ["butler",[
        ["연출","문이 닫히자 박수 소리가 끊겼다. 창을 세 개 지나고 나서 세바스찬이 먼저 입을 열었다."],
        ["세바스찬","이제 장부의 첫 줄을 고쳐도 되겠군요. 영지와 작위가 모두 도련님 앞으로 돌아왔습니다."],
        ["시엘","그래."],
        ["세바스찬","저택에는 저녁을 기다리는 사람들이 있고, 내일 초대장을 보내도 기꺼이 올 손님들이 있습니다."],
        ["시엘","그런데."],
        ["세바스찬","이쯤에서 그만두고 그걸 누리는 데 써 보시겠습니까? 앞으로 남은 시간 말입니다."],
        ["연출","세 번째 창의 빛이 시엘의 등에서 멎었다."],
        ["시엘","……그렇게 살아도 잘 살 수 있겠지."],
        ["세바스찬","예. 이제는 그러실 수 있습니다."]
      ]],
      ["butler",[
        ["시엘","그래서 지금 대답하는 거야. 누구도 내게 계속하라고 할 수 없는 때에."],
        ["시엘","내가 돌아온 이유는 처음부터 하나였어. 누가 이 집을 태웠는지 알아내고, 내가 그 끝을 내는 것."],
        ["시엘","폐하께 받은 이름으로 그 문 앞에 설 거다. 오늘 받은 것 전부를 써서라도."],
        ["연출","시엘이 망토를 뒤로 넘겼다. 아직 빛이 드는 창을 등지고 한 걸음 내디뎠다."],
        ["독백","마침내 혼자서도 돌아설 수 있는 자리에 세워 놓았더니, 저 발로 다시 어둠을 고른다."],
        ["독백","그 대답까지 기다린 보람은 있었군."],
        ["시엘","명령이다, 세바스찬."],
        ["시엘","내가 그자들 앞에 설 때까지 나를 지켜. 길을 막는 건 네가 치워."],
        ["시엘","그리고 내가 이기게 해."],
      ]],
      ["command",[
        ["연출","세바스찬의 무릎이 대리석에 닿았다. 복도에 남은 기척은 그 소리 하나뿐이었다."],
        ["세바스찬","예스, 마이 로드."]
      ]]
    ],
    flavor:"왕실 장부에는 그가 돌아온 날만 적혔다. 그날 밤 누가 다시 출발했는지는, 현관에서 외투를 건넨 집사만 알았다."
  },
  vowNoTitle:{
    track:"gloomy",
    scenes:[
      ["letter",[
        ["세바스찬","왕실에서 회신이 왔습니다. 배달인은 회신을 기다리지 않고 떠났습니다."],
        ["시엘","그 편지, 탁자에 둬."],
        ["왕실 서신","작위의 환부는 차기 심의까지 보류합니다. 제출된 서류는 왕실에서 보관하겠습니다."],
        ["시엘","차기 심의가 언제라고 적혀 있지?"],
        ["세바스찬","날짜를 적는 자리가 비었습니다."],
        ["시엘","……거기부터 봤어야 했는데."],
        ["연출","시엘은 편지를 구기지 않았다. 첫 장부 맨 뒤에 반듯하게 접어 넣었다."],
        ["세바스찬","장부는 여기 두시겠습니까?"],
        ["시엘","그래. 들고 갈 건 따로 있어."]
      ]],
      ["gloves",[
        ["연출","책상 위 지도에는 항구, 여관 두 곳, 폐쇄된 역의 옛 이름이 적혀 있었다."],
        ["세바스찬","이 기록은 왕실의 열람 허가를 받아야 이어 볼 수 있습니다."],
        ["시엘","그렇다면 기록을 쓴 사람에게 묻지."],
        ["세바스찬","그 사람은 피신 중입니다."],
        ["시엘","그러니까 세 군데나 표시했잖아."],
        ["세바스찬","마지막 장소에 닿을 즈음이면 해가 지겠습니다."],
        ["시엘","해가 질 때까지 밖에 있으면 되는 일이야. 등도 준비해."],
        ["독백","어린 주인이 지도를 접는 법을 배운 건 첫겨울이었다. 이제는 등불 한 자루까지 셈에 넣는다."]
      ]],
      ["carriage",[
        ["연출","마차 바퀴가 안뜰의 살얼음을 갈랐다. 시엘은 문간에서 저택의 창을 한 번 셌다."],
        ["세바스찬","돌아오실 날은 사용인들에게 어떻게 전할까요?"],
        ["시엘","저녁은 늘 먹던 시간에 먹으라고 해. 내 자리까지 비워 둘 필요 없어."],
        ["세바스찬","도련님 몫은 어디에 준비할까요?"],
        ["시엘","마차에서 먹겠어. 손에 묻지 않는 걸로."],
        ["연출","등불이 켜졌다. 길 건너 여관 간판의 마지막 글자가 간신히 읽혔다."],
        ["시엘","궁에서 준 게 없으니 도로 돌려줄 것도 없겠군."],
        ["세바스찬","가지실 수 있는 물건이라면 여기 있습니다. 지도와 수첩, 그리고 가문의 반지입니다."]
      ]],
      ["butler",[
        ["시엘","반지는 내가 들지."],
        ["세바스찬","그럼 이 마차는 어느 이름으로 예약해 둘까요?"],
        ["시엘","시엘 팬텀하이브. 그동안 부르던 그대로."],
        ["세바스찬","알겠습니다."],
        ["시엘","내가 찾아서, 내가 끝낸다. 그 얘기는 한 글자도 바뀌지 않아."],
        ["세바스찬","첫 번째 장소에는 마차가 들어가지 못합니다."],
        ["시엘","그럼 내려서 걸어. 네가 먼저 길을 봐."],
        ["연출","세바스찬이 발판을 접었다. 닫힌 문 너머에서 시엘이 무릎 위에 지도를 폈다."],
        ["세바스찬","예스, 마이 로드."]
      ]]
    ],
    flavor:"공문에 비어 있던 다음 심의 날짜는 결국 채워지지 않았다. 시엘의 지도에는 그날부터 방문한 장소가 하나씩 늘었다."
  },
  releaseTitle:{
    track:"romantic",
    scenes:[
      ["court",[
        ["연출","돌아온 마차에 타기 전, 시엘은 가슴의 장식을 한 번 바로 달았다."],
        ["세바스찬","모두 보셨습니다. 다시 달지 않으셔도 됩니다."],
        ["시엘","기울었잖아. 네가 아까 잡아 줬을 때는 멀쩡했는데."],
        ["세바스찬","박수가 시작될 때 도련님께서 만지셨거든요."],
        ["시엘","그랬나."],
        ["연출","마차 문이 닫혔다. 마주 앉은 세바스찬은 끝내 손을 뻗지 않았다."],
        ["시엘","저택에 가면 서재로 와. 둘이 있을 때 할 얘기가 있어."]
      ]],
      ["gloves",[
        ["연출","서재에는 도장이 찍힌 서류와 며칠 전 들여온 수사 기록이 나란히 놓여 있었다."],
        ["세바스찬","어느 쪽부터 정리할까요?"],
        ["시엘","수사 기록은 저 상자에 넣어. 열쇠는 내 손에 줘."],
        ["세바스찬","내일 찾으실 수 있게 위에 올려 두겠습니다."],
        ["시엘","내일 찾지 않아."],
        ["연출","잉크병 뚜껑을 닫고 난 뒤에도 시엘은 손을 책상 위에 얹어 두었다."],
        ["시엘","내가 부탁한 복수는 여기까지다. 누가 했는지 알게 되더라도 내 손으로 끝내는 일은 없을 거야."],
        ["세바스찬","그 이름을 알게 되는 날에도요?"],
        ["시엘","그래. 기억은 내 몫으로 남겨. 나머지는 내가 정리하겠어."]
      ]],
      ["butler",[
        ["세바스찬","지금 하신 말씀은 명령입니까?"],
        ["시엘","내가 결정한 일이야. 그러니 사냥할 상대가 없다는 건 너도 받아들여."],
        ["연출","세바스찬은 장갑의 단추를 하나 풀었다. 천이 손등을 지나 책상 위에 떨어졌다."],
        ["세바스찬","그렇다면 계약의 마지막 날도 오지 않겠군요."],
        ["시엘","그날을 기다렸나?"],
        ["세바스찬","정성을 들인 일의 끝은 대개 기다리게 됩니다."],
        ["시엘","그래. 나도 그럴 줄 알았어."],
        ["독백","편지에 적힌 것보다 훨씬 작은 목소리였다. 저택에서는 그 정도면 충분했다."]
      ]],
      ["gloves",[
        ["시엘","나가기 전에 현관 등 하나만 켜 줘. 타나카가 저녁 약을 가지러 내려와."],
        ["세바스찬","소등은 누가 합니까?"],
        ["시엘","내가."],
        ["연출","문이 닫힌 뒤 시엘은 한동안 장갑을 보았다. 그러고는 서랍을 열어 서임장을 넣었다."],
        ["연출","아래층에 불이 하나 들어왔다. 서재에는 발걸음이 돌아오지 않았다."],
        ["시엘","……내일은 작위가 돌아왔다는 편지부터 써야겠군."],
        ["연출","시엘은 자기 손으로 펜에 잉크를 묻혔다."]
      ]]
    ],
    flavor:"그 집의 현관 등은 그날 이후에도 같은 시각에 켜졌다. 마지막으로 계단을 내려가 불을 끄는 사람은 백작이었다."
  },
  releaseNoTitle:{
    track:"gloomy",
    scenes:[
      ["letter",[
        ["세바스찬","재가를 청하는 서류를 다시 꾸릴 수는 있습니다. 반년 뒤에 심의가 열립니다."],
        ["시엘","이번에도 봉투를 돌려보냈어?"],
        ["세바스찬","가문을 증명하는 종이는 돌려보냈습니다. 답신은 한 줄입니다."],
        ["시엘","읽어 봐."],
        ["세바스찬","‘현 상황에서 재가하기 어렵습니다.’"],
        ["연출","시엘은 편지 끝의 날짜를 읽었다. 날짜만 두 번 읽었다."],
        ["시엘","반년 뒤에 쓸 종이값은 남겨 둬. 다른 데 쓸 일이 있겠지."]
      ]],
      ["key",[
        ["연출","저녁 종이 울리기 전에 시엘은 주방으로 내려왔다. 은쟁반보다 먼저 낡은 열쇠가 식탁에 놓였다."],
        ["세바스찬","서쪽 문 열쇠입니다. 그 문턱은 오늘 손봤습니다."],
        ["시엘","아침에 열어 봤어. 잘 열리더라."],
        ["세바스찬","그럼 돌려주시는 이유를 여쭤도 되겠습니까?"],
        ["시엘","문을 잘 고쳤다는 건 기억해 둘 거야. 그 문으로 누구를 찾으러 나가는 일은 이제 없겠어."],
        ["세바스찬","수색을 중단하실 때는 전에도 있었습니다."],
        ["시엘","이번에는 돌아와서 다시 시작할 생각이 없어."],
        ["연출","난로의 재가 가라앉았다. 물이 끓는 소리만 남았다."]
      ]],
      ["butler",[
        ["세바스찬","저들이 다시 모습을 드러내면, 도련님은 어떻게 하시겠습니까?"],
        ["시엘","그날 내가 지켜야 할 사람이 있으면 그 사람부터 챙기겠지."],
        ["세바스찬","셈한 순서가 바뀌었군요."],
        ["시엘","그래. 그러니까 네가 기다리는 건 앞으로 없을 일이야."],
        ["세바스찬","……알아들었습니다."],
        ["독백","이 집에서는 저 아이의 말을 몇 번이나 받아 적었다. 오늘 것은 종이를 꺼낼 필요가 없었다."],
        ["시엘","내일 몫의 아침도 생각해 놨어?"],
        ["세바스찬","식빵은 찬장 위 칸, 잼은 아래 칸에 두었습니다."]
      ]],
      ["key",[
        ["시엘","열쇠는 가져가. 네가 처음 손본 문이잖아."],
        ["세바스찬","그 문을 잠그는 법은 알고 계시지요?"],
        ["시엘","안에서 빗장을 지르면 돼."],
        ["세바스찬","그렇습니다."],
        ["연출","세바스찬은 열쇠를 집었다. 손바닥을 덮으니 금속 빛이 보이지 않았다."],
        ["시엘","이제 가도 돼, 세바스찬."],
        ["연출","문이 열리고 찬 공기가 들어왔다. 시엘은 자리에서 일어나 남아 있던 두 번째 잔을 씻었다."],
        ["연출","빗장은 그날 밤에도 한 번만 울렸다."]
      ]]
    ],
    flavor:"현관의 명패에는 오래전의 흠집이 남았다. 다음 봄, 시엘은 먼저 경첩부터 갈았다."
  }
};

const shortEndings={
  title:["court","daily","반환 목록",[
    ["세바스찬","영지 도면과 계승 서류가 모두 도착했습니다."],["시엘","도면부터 펴. 가장 먼 집은 어디지?"],
    ["세바스찬","북쪽 숲을 지나면 한 채 있습니다."],["시엘","좋아. 오늘부터 우리가 갈 곳이 하나 더 생겼군."]
  ],"되찾은 영지의 첫 방문지는 지도상의 맨 끝이었다."],
  business:["letter","daily","다음 발주",[
    ["세바스찬","가문의 도장은 보류됐습니다. 팬텀사의 도장은 새로 넘겨받았습니다."],["시엘","그쪽부터 가져와."],
    ["세바스찬","오늘 찍으면 첫 물량은 다음 주에 나갑니다."],["시엘","그럼 오늘 찍어. 저택 식구들한테도 그렇게 전해."]
  ],"심의는 밀렸지만 발주서는 약속한 시각에 도착했다."],
  defer:["gloves","gloomy","빈 서명란",[
    ["세바스찬","서류를 돌려받았습니다. 신청서는 아직 쓸 수 있습니다."],["시엘","뭐가 비었는지 한 장씩 봐."],
    ["세바스찬","오늘 밤에는 모두 보기 어렵겠습니다."],["시엘","그럼 첫 장까지만. 나머지는 내일 한다."]
  ],"장부는 빈 서명란을 남겨 둔 채 다시 펼쳐졌다."],
  ill:["gloves","gloomy","닫힌 셔터",[
    ["세바스찬","오전의 손님은 돌아갔습니다. 오후에도 마차를 부르지 않을 겁니다."],["시엘","……네가 취소했어?"],
    ["세바스찬","도련님께서 어제 저녁에 명하셨습니다."],["시엘","그랬지. 그럼 커튼은 조금만 열어 둬."]
  ],"다음 장부의 날짜 칸에는 아무것도 적지 않았다. 시엘이 깨어 있는 동안 창으로만 오후가 지나갔다."],
  broke:["key","gloomy","마지막 장부",[
    ["세바스찬","마지막 지출을 적었습니다. 사용인들의 이번 주 급료입니다."],["시엘","그건 밀리지 않았지?"],
    ["세바스찬","예. 다 지급했습니다."],["시엘","좋아. 빈 금고는 내가 닫을게."]
  ],"금고 열쇠는 그날 처음으로 장부 옆에 놓였다."]
};
for(const [id,[art,track,name,lines,flavor]] of Object.entries(shortEndings)){
  endings[id]={track,scenes:[[art,[["연출",name],...lines]]],flavor};
}
function verdict(run,hasTitle){
  return (run.stats.의지>=revengeThreshold?"vow":"release")+(hasTitle?"Title":"NoTitle");
}
let replayEnding=null, endingPage=0, endingAuto=false, endingTimer=0;
function endingId(){return replayEnding||(tab==="plan"&&state.phase==="ending"&&!state.endingSeen?state.ending:null);}
function endingBeats(id){
  return endings[id].scenes.flatMap(([art,lines])=>lines.map(([speaker,line],index)=>({art,speaker,line,index})));
}
function stopEnding(){clearTimeout(endingTimer);endingTimer=0;}
function drawEnding(id,focus=false){
  stopEnding();
  const beats=endingBeats(id);
  const i=cap(replayEnding?endingPage:state.endingPage||0,beats.length-1);
  const beat=beats[i], last=i===beats.length-1, [art,alt]=endingArt[beat.art];
  const surface=$("overture"), picture=$("opening-picture");
  Object.assign(surface.dataset,{art,ending:"true",signing:"false",voiceOnly:"false",close:"false",establish:String(beat.index===0),voice:beat.speaker==="독백"?"thought":"speech"});
  delete surface.dataset.pause;
  if(picture.dataset.art!=="ending-"+art){
    const img=new Image();img.className="opening-cg ready";img.src="assets/endings/"+art+".webp";img.alt=alt;
    picture.dataset.art="ending-"+art;picture.replaceChildren(img);
  }
  $("opening-dialogue").classList.add("dialogue");
  $("opening-speaker").hidden=["연출","독백"].includes(beat.speaker);
  $("opening-speaker").textContent=beat.speaker;
  $("opening-line").textContent=beat.line;
  $("opening-slots").hidden=true;
  $("opening-prev").disabled=i===0;
  $("opening-next").hidden=false;
  $("opening-next").setAttribute("aria-label",last?"엔딩 기록 보기":"다음 대사");
  $("opening-auto").hidden=$("opening-skip").hidden=false;
  $("opening-auto").textContent=endingAuto?"자동 멈춤":"자동 재생";
  $("opening-auto").setAttribute("aria-pressed",String(endingAuto));
  $("opening-skip").textContent=replayEnding?"감상 종료":"결과 보기";
  $("opening-read").hidden=true;
  $("opening-read").disabled=true;
  syncDialogueVisibility();
  if(endingAuto&&!dialogueHidden&&!document.hidden&&!$("picker").open){
    endingTimer=setTimeout(()=>stepEnding(1),openingHold({text:beat.line,speaker:beat.speaker,beat:beat.index})+(beat.index===0?400:0));
  }
  if(focus)(dialogueHidden?$("opening-toggle"):$("opening-next")).focus({preventScroll:true});
}
function stepEnding(delta){
  const id=endingId();
  if(!id)return;
  const next=Math.max(0,(replayEnding?endingPage:state.endingPage||0)+delta);
  if(next>=endingBeats(id).length){closeEnding();return;}
  if(replayEnding)endingPage=next;
  else {state.endingPage=next;persist();}
  drawEnding(id,!endingAuto);
}
function closeEnding(){
  stopEnding();endingAuto=false;dialogueHidden=false;
  if(replayEnding){replayEnding=null;tab="record";}
  else {state.endingSeen=true;persist();}
  render(true);
}
function endingAction(action,id){
  if(action==="replay-ending"&&tab==="record"&&Object.hasOwn(saves.gallery||{},id)&&endings[id]){
    replayEnding=id;endingPage=0;endingAuto=false;dialogueHidden=false;render(true);return true;
  }
  if(!endingId())return false;
  if(action==="opening-next"||action==="opening-prev"){if(dialogueHidden)return true;endingAuto=false;stepEnding(action==="opening-next"?1:-1);return true;}
  if(action==="opening-auto"){endingAuto=!endingAuto;drawEnding(endingId());return true;}
  if(["opening-skip","system-back","back"].includes(action)){closeEnding();return true;}
  return false;
}
document.addEventListener("visibilitychange",()=>{
  if(!endingId())return;
  if(document.hidden)stopEnding();
  else drawEnding(endingId());
});
