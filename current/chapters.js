"use strict";
const portraits={라우:"assets/npc-lau.webp",세바스찬:"assets/sebastian.webp",타나카:"assets/npc-tanaka.webp",피니안:"assets/npc-finny.webp",메이린:"assets/npc-mey.webp",바르도:"assets/npc-bard.webp",스네이크:"assets/npc-snake.webp",소마:"assets/portraits/soma.webp",아그니:"assets/portraits/agni.webp",get 엘리자베스(){const age=elizabethAge();return age===12?"assets/portraits/elizabeth-12.webp?v=2":age===13?"assets/npc-lizzy.webp":"assets/npc-lizzy-11.webp";},get 시엘(){return cielArt(currentCielAge());}};
const castByEvent={gardener:"피니안",maid:"메이린",cook:"바르도",circus:"스네이크",visitPrince:"소마",jubilee:"세바스찬",agniTray:"아그니",greenhouseKey:"피니안"};
function castName(e){return castByEvent[e.id]||((e.speaker in portraits)?e.speaker:"세바스찬");}
function elizabethAge(){return Math.max(11,Math.min(13,currentCielAge()+1));}
function dialogueCast(speaker){
  const left=speaker==="시엘"?"세바스찬":speaker;
  return [left,"시엘"].map((name,index)=>
    sceneStanding(name,index?"right":"left",portraits[name],name==="엘리자베스"?elizabethAge():undefined)).join("");
}
function staged(who,title,line,buttons,caption="",room="library",partner=who){
  const start='<div class="review-room" style="background-image:url(&quot;'+sceneArt[room]+'&quot;)"></div>'+dialogueCast(partner);
  const speaker=(caption?caption+'　·　':'')+who,heading=title?'<h2>'+title+'</h2>':'';
  if(!buttons)return start+sceneLine(speaker,line,'<button type="button" class="line-next" aria-label="다음 대사" data-action="intro-next">▼</button>',"",heading);
  return start+'<article class="dialogue"><small>'+speaker+'</small>'+heading+'<p>'+line+'</p><div class="answers">'+buttons+'</div></article>';
}
const guide=[
 ["날짜판과 명패","오늘 날짜는 왼쪽 위 달력을 보십시오. 연도 옆에는 서른다섯 달 중 몇 달째인지 적어 두었습니다. 저택의 오른쪽 위 명패에는 도련님의 나이와 가문의 잔금이 있습니다."],
 ["일정표","왼쪽 아래 ‘일정표’에 상순·중순·하순 세 칸을 마련했습니다. 쉬고 나면 다음 수업에 집중하기 쉽습니다. 수업을 거듭하면 제가 시험을 내겠습니다. 열두 살부터는 응용 실기를 마치고 375에 이른 능력을 일정에서 다시 쓰실 때 최종 실기를 치릅니다. 바꾸실 칸을 먼저 짚고 활동을 고르시면 제가 적겠습니다. £ 옆의 숫자가 그 비용입니다."],
 ["자유행동","‘자유행동’은 도련님의 외출을 위해 비워 둔 칸입니다. 한 달에 한 곳을 정하실 수 있습니다. 누구와 무슨 이야기를 나누실지는 도착한 뒤에 정하셔도 됩니다."],
 ["팬텀사","‘관리 · 경영’에서 ‘팬텀 사(社)’를 여십시오. 개발실에서는 상품을, 제작실에서는 수량을, 판매점에서는 값을 정하시면 됩니다. 수업료가 모자라겠다면 이번 생산량을 조금 줄이는 편이 좋겠습니다."],
 ["저택","‘관리 · 경영’의 지도에서 방을 짚으시면 시설과 근무지를 살필 수 있습니다. 개수를 명하시기 전에 비용과 이달의 관리 상태를 보십시오. 간식이 필요하시면 저택 메뉴의 ‘상점’으로 모시겠습니다."],
 ["실행","명하신 대로 준비했습니다. 저택의 ‘실행’이나 일정표의 ‘이달 일정 실행’을 고르시면 상순부터 시작하겠습니다. 매 순의 성과는 제가 보고드리겠습니다. 하순 강평 뒤에는 정해 두신 곳을 방문하고, 돌아오시면 결산을 보고드리겠습니다."],
 ["대화와 상태","저택에서 ‘대화’로 부르시면 제가 듣겠습니다. ‘상태’에서는 도련님의 건강과 능력을 보실 수 있습니다. 피곤하시면 다음 한 순은 비워 둘까요?"],
 ["가문 장부와 수첩","지나간 사건은 아래의 ‘가문 장부’에 적어 두었습니다. ‘저장 · 설정’에서는 저장 칸과 음량을 고르실 수 있습니다. 음악만 잠시 끄시려면 BGM 버튼을, 돌아가시려면 ‘뒤로’를 눌러 주십시오."]
];
function guideMenu(page){
  const subjects=[[],["일정표"],["일정표"],["관리 · 경영"],["관리 · 경영","상점"],["실행"],["대화","상태"],[]][page];
  if(!subjects.length)return "";
  return '<span class="guide-menu" aria-label="저택 메뉴 위치">'+commands.map(([,label])=>
    '<span class="'+(subjects.includes(label)?"current":"")+'">'+label+'</span>').join("")+'</span>';
}
function instructionBook(){
 const topics=[
   ["날짜판과 명패","날짜와 보유금","왼쪽 위 달력에서 현재 날짜와 전체 35개월 중 몇 개월째인지 확인할 수 있습니다. 오른쪽 위 명패에는 시엘의 나이와 가문의 보유금이 표시됩니다."],
   ["일정표","한 달 일정 편성","상순·중순·하순 중 바꿀 칸을 누르고 활동을 선택합니다. 카드의 £ 표시는 해당 활동의 비용입니다. 휴식 뒤에는 다음 수업에 집중하기 쉽고, 같은 능력을 반복해서 훈련하면 실기 시험이 열립니다. 12세부터는 응용 실기를 마친 능력이 375 이상일 때 그 능력을 사용하는 일정에서 최종 실기를 치를 수 있습니다."],
   ["자유행동","방문지 선택","한 달에 한 곳을 방문할 수 있습니다. 일정표의 ‘자유행동’에서 장소를 고르면 하순 일정이 끝난 뒤 방문합니다. 방문하지 않을 때는 ‘방문 생략’을 선택합니다."],
   ["팬텀사","상품·생산량·판매가 설정","‘관리 · 경영’에서 ‘팬텀 사(社)’를 엽니다. 개발실에서 상품을 개발하고, 제작실에서 생산량을, 판매점에서 판매가를 정합니다. ‘이달 자금 예상’에서 수업료를 포함한 월말 잔액을 확인할 수 있습니다."],
   ["저택","시설 개수와 사용인 배치","‘관리 · 경영’의 저택 지도에서 방을 누르면 개수 효과와 비용을 확인할 수 있습니다. ‘사용인 배치’에서 인물을 고르고 근무할 방을 누릅니다. 간식과 수업 준비물은 저택 메인 화면의 ‘상점’에서 구매합니다."],
   ["실행","일정 진행과 월말 결산","세 순의 활동과 자유행동을 정한 뒤 ‘이달 일정 실행’을 누릅니다. 저택 메인 화면의 ‘실행’으로도 시작할 수 있습니다. 상순부터 차례로 성과를 확인하고, 하순이 끝나면 선택한 방문지를 거쳐 월말 결산을 봅니다."],
   ["대화와 상태","화제 선택과 능력 확인","저택 메인 화면의 ‘대화’에서 화제를 고르면 시엘의 반응을 볼 수 있습니다. ‘상태’에서는 건강·스트레스와 각 능력치를 확인할 수 있습니다."],
   ["가문 장부와 수첩","사건 기록과 저장","하단의 ‘가문 장부’에는 지난 사건과 엔딩이 기록됩니다. ‘저장 · 설정’에서 회차를 저장하거나 불러오고 음량을 조절할 수 있습니다. 하단의 BGM 버튼을 누르면 배경음악이 켜지거나 꺼집니다."]
 ];
 return '<details class="notebook-guide"><summary><i class="book-spread" aria-hidden="true"></i><strong>튜토리얼 안내서</strong></summary>'+topics.map(([title,subject,body])=>
   '<details class="guide-topic"><summary><b>'+title+'</b><small>'+subject+'</small></summary><p>'+body+'</p></details>').join("")+
   btn("세바스찬의 안내 다시 재생","open-guide",false,"guide-replay-button")+'</details>';
}
const visitsVN={
 library:["archive","서가 맨 아래에 그을린 장부가 누워 있다.","가문의 장서표를 대조한다"],
 garden:["garden","온실의 유리에 물방울이 맺혔다.","흙이 마른 화분부터 살핀다"],
 kitchen:["office","식탁에 저녁 식단과 빈 접시가 놓여 있다.","저녁 식단을 함께 짠다"],
 quarters:["bedroom","복도 끝 옷걸이에 새 앞치마가 걸려 있다.","사용인들의 작업 일지를 본다"],
 parlor:["ballroom","은쟁반 위에 다음 다과회의 답신이 쌓여 있다.","명함의 호칭을 확인한다"],
 company:["office","시제품 옆에 반품된 상자가 놓여 있다.","상자를 직접 열어 본다"],
 town:["street","비에 젖은 쇼윈도 너머로 완구점 주인이 손을 흔든다.","요즘 팔리는 물건을 묻는다"],
 townhouse:["ballroom","손님방에 따뜻한 물이 준비되어 있다.","찻잔을 받아 든다"]
};
const trustedGreetings={
 tanaka:["찾으시는 해의 장부를 꺼내 두었습니다. 끈이 낡았으니 제가 조심스레 풀어 드리지요.","요즘은 늘 그 권부터 펼치시는군요. 오늘은 책상 위에 올려 두었습니다.","바로 여기서 필체가 달라지지요. 제 짐작을 말씀드리기 전에, 도련님 눈에는 어찌 읽히는지 먼저 듣고 싶습니다.","이 귀퉁이의 연필 자국은 제 것입니다. 오늘이라면 말씀드릴 수 있겠군요."],
 finny:["도련님, 바닥이 젖었어요! 제가 먼저 지나가 볼게요!","또 와 주셨네요! 오늘은 도련님 구두에 흙 안 튀게 물부터 미리 줬어요.","가지를 이쪽으로 유인할까요? 전 이 문으로 들어올 때 바로 꽃이 보였으면 좋겠는데, 도련님은요?","처음엔 혼날까 봐 부러진 가지를 숨겼어요. 이건 제가 실수로 부러뜨린 거예요. 그런데 보세요! 붙여 놓은 데서 새잎이 났어요!"],
 mey:["리넨은 이쪽입니다요, 도련님! 자, 잠깐만요! 안경을 바르게 써야겠습니다요!","오실 줄 알고 도련님 셔츠는 따로 걸어 뒀습니다요! 단추도 하나하나 세 봤습니다요!","해 질 무렵이면 저 창에 맞은편 지붕이 비칩니다요. 커튼은 제가 닫겠습니다요!","이 방에선 안경을 벗고 있어도 마음이 놓입니다요. 도련님 발소리는 이제 헷갈릴 일이 없습니다요!"],
 bard:["오븐은 제가 보겠습니다. 도련님은 문에서 두어 걸음만 물러서 주십쇼.","오늘은 탄 데부터 잘라 낼 필요가 없습니다. 끝 쪽 한 조각 맛보시겠습니까?","이 고기, 지금 썰면 육즙이 다 빠집니다! 손님이 재촉하셔도 오 분만 더 벌어 주십쇼!","옛날 버릇이라 식탁에 앉아도 문부터 보게 됩니다. 도련님이 맞은편에 계신 날엔 그냥 먹습니다만."],
 snake:["방금 복도를 지나간 건 우리 애들이야. 놀라지 마. ⋯라고 에밀리가 말했어.","발소리만 듣고도 맞혔어. 오늘도 그 구두네. ⋯라고 오스카가 말했어.","서쪽 창을 조금만 열어 둘까? 누가 오는지 우리가 먼저 알 수 있어. ⋯라고 와일드가 말했어.","오늘 밤엔 우리랑 한 바퀴 돌자. 온실 지붕에 달이 걸리는 걸 너한테도 보여 주고 싶어. ⋯라고 에밀리가 말했어."],
 soma:["시엘! 여기 앉아! 오늘은 내가 차 골라 줄게!","시엘, 네 자리를 비워 뒀어. 저번에는 햇빛 때문에 눈 찡그렸잖아. 여긴 어때?","한 모금 마셔 봐! 난 이게 좋은데 넌 어때? 다음엔 네가 고른 걸로 마시자!","오늘은 여기 좀 더 있다 가지 그래? 말하지 않아도 네 마음쯤은 다 안다구."],
 agni:["어서 오십시오, 시엘 님. 왕자님께서 곧 내려오십니다.","오늘도 창가에 두 잔씩 놓았습니다. 시엘 님 몫에는 우유를 따로 드렸습니다.","왕자님께 드릴 말씀인데 제가 꺼내면 먼저 걱정하실 겁니다. 시엘 님이라면 어떻게 운을 떼시겠습니까?","처음 이 집에서 아침상을 차리던 날엔 손이 떨렸습니다. 왕자님께는 비밀로 해 주시겠습니까? 오늘이라면 웃으며 말씀드릴 수 있겠군요."]
};
function visitPerson(id){
 let person=visiting[id][1];
 if(id==="quarters"&&state.people.snake&&(!state.people.mey||state.month%2===0))person="snake";
 if(id==="townhouse"&&state.people.agni&&state.month%2===0)return "agni";
 return state.people[person]?person:null;
}
function visitName(person){return servants[person]?.name||"세바스찬";}
function visitPreview(id){
 if(!id)return "방문지를 선택하세요.";
 if(id==="none")return "방문 생략";
 const person=visitPerson(id);
 const forecast={...state,visit:id};
 if(person&&state.people[person]){
   const relation=state.people[person];
   forecast.people={...state.people,[person]:{...relation,toward:Math.min(20,relation.toward+1)}};
 }
 const possible=events.filter(e=>e.visitPlace===id&&!state.flags[e.id]&&e.sees(forecast));
 const encounter=visitName(person)+" · "+visitsVN[id][2];
 return possible.length?encounter+" / "+castName(possible[0])+" · "+possible[0].title:encounter;
}
const visitGrowth={library:"통찰",garden:"체력",kitchen:"지성",quarters:"통찰",parlor:"기품",company:"경영",town:"매력",townhouse:"매력"};
function visitScene(){
 const id=state.visit,[room,plain,label]=visitsVN[id];
 const seq=state.sequence;
 if(seq.visitEvent){
   const page=encounterPage(seq,room);
   if(page)return page;
   const event=events.find(e=>e.id===seq.visitEvent);
   const buttons=event.choices.map((c,i)=>btn(c.label+(c.when&&!c.when(state)?" · "+c.hint:""),"visit-choice:"+i,Boolean(c.when&&!c.when(state)))).join("");
   return staged(castName(event),"",storyLine(event),buttons,"",room);
 }
 if(seq.visitBefore){
   if(seq.encounterReply){
     const [speaker,line]=seq.encounterReply;
     return staged(speaker,"",line,btn(seq.index===0?"상순으로":seq.contest?"하순 경연으로":"월말 결산으로","visit-finish"),"방문 기록",room,seq.encounterPartner);
   }
   return staged(seq.visitReply?seq.replySpeaker:visitName(visitPerson(id)),"",seq.visitReply || "방문을 마치고 마차로 돌아왔다.",
     btn(seq.index===0?"상순으로":seq.contest?"하순 경연으로":"월말 결산으로","visit-finish"),visits[id]+" · 자유행동 결과",room);
 }
 const person=visitPerson(id);
 const memory=visitMemory(id,person);
 const line=memory?.line || (person?trustedGreetings[person][trustTier(state.people[person].toward)]:plain);
 return staged(visitName(person),"",line,btn(label,"visit-done:engage")+btn("잠시 머물다 돌아간다","visit-done:quiet"),"",room);
}
function visitDone(engage){
 if(state.phase!=="visit"||state.sequence.visitBefore||state.visitTurn===state.month)return;
 const id=state.visit,seq=state.sequence;
 const before=choiceSnapshot();
 const memory=visitMemory(id,visitPerson(id));
 if(memory){state.visitMemories??={};state.visitMemories[memory.id]=true;}
 seq.visitBefore=snapStats(state);
 state.visitTurn=state.month;
 if(engage){
   const who=visitPerson(id);
   if(who==="agni")state.flags.agniTea=true;
   if(who)talkTrust(who);
   if(id==="library"&&state.people.tanaka)state.trust++;
   changeStat(visitGrowth[id],4);
   if(id==="garden")shift("stress",-3);
   if(id==="kitchen")shift("hp",2);
   seq.visitEvent=events.find(e=>e.visitPlace===id&&!state.flags[e.id]&&e.sees(state))?.id;
 }else{
   shift("stress",-4);
   shift("motivation",2);
 }
 showChoiceImpact(engage?visitsVN[id][2]:"잠시 머물다 돌아간다",before);
 state.log.push("자유행동 · "+visits[id]+(engage?" · 교류":" · 휴식"));
 persist();render(true);
}
function visitChanges(){
 const after=snapStats(state),before=state.sequence.visitBefore;
 return Object.keys(after).filter(k=>after[k]!==before[k]).map(k=>k+" "+signed(after[k]-before[k]));
}
function chooseVisitEvent(index){
 const seq=state.sequence,event=events.find(e=>e.id===seq.visitEvent),choice=event?.choices[index];
 const card=visitEncounterCards.find(item=>item.id===event?.id);
 if(card && (seq.encounterPage||0)<card.lines.length-1)return;
 if(!choice||(choice.when&&!choice.when(state)))return;
 const before=choiceSnapshot();
 flagEvent(event.id,choice.effect);
 showChoiceImpact(choice.label,before);
 state.events.push({id:event.id,index,month:state.month});
 seq.visitReply=choice.response||event.responses?.[index]||null;
 seq.replySpeaker=castName(event);
 state.log.push(choice.result);
 if(card){seq.encounterReply=card.choices[index].reply;seq.encounterPartner=card.npc;}
 delete seq.encounterPage;
 delete seq.visitEvent;
 if(choice.responseLines||choice.nextScene){
   seq.readingVisitOutcome=true;
   state.phase="event";
   state.pending=event.id;
   state.termPage=0;
   state.termOutcome={id:event.id,index,response:choice.response,responseLines:choice.responseLines,nextScene:choice.nextScene};
 }
 persist();render(true);
}
function finishVisit(){
 const seq=state.sequence;
 if(state.phase!=="visit"||!seq.visitBefore||seq.visitEvent)return;
 if(openChoiceImpact("visit"))return;
 const changes=visitChanges();
 if(changes.length)state.log.push("자유행동 성과 · "+changes.join(" · "));
 delete seq.visitBefore;delete seq.encounterReply;delete seq.encounterPartner;
 if(seq.index===0)enterSlot();else settleMonth();
}
function chapterView(){
 if(tab!=="plan")return "";
 if(state.phase==="guide"){const i=state.guidePage||0;return staged("세바스찬",guide[i][0],guideMenu(i)+guide[i][1],btn(i===guide.length-1?"저택으로":"다음 안내","guide-next")+btn("안내 마치기","guide-end"),"조작 안내 "+(i+1)+" / "+guide.length);}
 if(state.phase==="investiture")return staged("세바스찬","","도련님, 왕실에서 서신이 왔습니다. 봉랍을 확인했습니다. 도련님 앞으로 온 친서입니다.",btn("서신을 펼친다","read-verdict"),"","library");
 if(state.phase==="visit")return visitScene();
 return "";
}
function chapterAction(action,id,confirmed,rect){
 if(state.phase==="guide"&&["guide-end","guide-next"].includes(action)){
 if(action==="guide-end"||state.guidePage>=guide.length-1){state.phase="plan";tab="home";}else state.guidePage++;
 }else if(action==="visit-done"&&state.phase==="visit"){visitDone(id==="engage");return true;}
 else if(action==="visit-choice"&&state.phase==="visit"){chooseVisitEvent(Number(id));return true;}
 else if(action==="visit-finish"&&state.phase==="visit"){finishVisit();return true;}
 else return false;
 persist();render(true);
 return true;
}
const exams=[
 ["study","지성","연대의 배열","불에 그을린 서신 세 통입니다. 왕실 인장이 바뀐 해를 기준으로 먼저 놓을 편지를 골라 보시겠습니까?","인장의 연대부터 맞춘다","글씨를 베껴 비교한다"],
 ["etiquette","기품","응접실 실기","제가 늦게 도착한 손님이라면, 먼저 오신 손님을 기다리게 하지 않고 어디로 안내하시겠습니까?","비어 있는 옆자리를 권한다","좌석표를 다시 살핀다"],
 ["accounts","경영","재고 실사","완구가 열 개 팔렸는데 대금은 아홉 개분입니다. 무엇을 확인하시겠습니까?","외상 매출 전표를 찾는다","계수부터 다시 한다"],
 ["inquiry","통찰","봉인의 판독","같은 날 보낸 두 봉투에서 서로 다른 밀랍 냄새가 납니다. 어디부터 보시겠습니까?","봉인의 압흔을 대조한다","봉투 무게부터 잰다"],
 ["language","지성","라틴어 구술","이 문장의 주어를 바꾸면 동사의 어느 부분이 달라집니까?","인칭 어미를 고쳐 읽는다","격변화표를 펼친다"],
 ["music","기품","바이올린 실기","악보를 덮겠습니다. 방금 멈춘 마디부터 이어 주시겠습니까?","앞선 악구를 떠올려 잇는다","처음부터 박자를 센다"],
 ["dance","기품","무도 실기","반주가 한 박자 멎었습니다. 상대의 발끝이 아직 떠 있군요.","체중이 옮겨질 때까지 기다린다","발의 위치를 다시 맞춘다"],
 ["social","매력","다과회 실기","초면인 손님 둘이 같은 은쟁반을 집었습니다. 도련님이라면요?","둘의 공통 관심사를 꺼낸다","잔을 새로 내온다"],
 ["negotiate","경영","협상 실기","납품가는 같고 도착일이 다릅니다. 어느 조건부터 물으시겠습니까?","지연 때의 부담을 확인한다","견적을 다시 읽는다"],
 ["exercise","체력","보폭 시험","마지막 왕복입니다. 체조실 문턱까지 보폭을 흐트러뜨리지 않고 가 보시겠습니까?","일정한 보폭으로 완주한다","잠시 호흡을 고른다"]
];
const examPartners={study:"통찰",etiquette:"매력",accounts:"지성",inquiry:"의지",language:"매력",music:"의지",dance:"체력",social:"기품",negotiate:"통찰",exercise:"의지"};
const advancedLessons={
 study:"서로 다른 두 신문의 날짜와 증언을 대조해 사건 연표를 복원합니다.",
 etiquette:"서열이 같은 두 손님을 어느 쪽도 기다리게 하지 않고 자리로 안내합니다.",
 accounts:"외상 장부와 납품서를 대조해 중복 청구된 한 줄을 찾아냅니다.",
 inquiry:"봉랍과 필체가 서로 다른 발신인을 가리킵니다. 편지가 거친 손을 추적합니다.",
 language:"외교 서한의 완곡한 거절을 원문의 뉘앙스까지 살려 옮깁니다.",
 music:"반주가 조를 바꿉니다. 첫 음을 다시 짚고 선율을 이어 갑니다.",
 dance:"상대가 한 박자 늦자 보폭을 줄여 다음 회전에서 다시 맞춥니다.",
 social:"식탁 양끝에서 끊긴 대화를 손님 둘의 공통 관심사로 이어 줍니다.",
 negotiate:"단가를 양보하는 대신 반품 비용을 거래처가 부담하도록 계약서를 고칩니다.",
 exercise:"직선과 회전을 섞은 코스를 돌며 마지막 구간까지 호흡을 유지합니다."
};
function advancedCourse(run,id){return advancedLessons[id] && run.flags?.["exam-"+id];}
function courseName(id){return (advancedCourse(state,id)?"고급 · ":"")+actions[id].name;}
function examEvents(){return exams.map(([slot,stat,title,text,a,b])=>({id:"exam-"+slot,slot,title,text,speaker:"세바스찬",exam:true,
 sees:s=>(s.counts[slot]||0)>=2,
 choices:[choice(a,"합격 · 고급 과정 진급",()=>{changeStat(stat,14);changeStat(examPartners[slot],8);}),
          choice(b,"보충 · 다음 수강 후 재시험",()=>{if(!state.events.some(e=>e.id==="exam-"+slot&&e.index===1)){changeStat(stat,8);changeStat(examPartners[slot],4);shift("motivation",5);}delete state.flags["exam-"+slot];})]}));}
function calendarEvents(){
 const out=[];
 for(let m=1;m<=35;m++){
 const month=(m-1)%12+1;
 let data;
 if(month===1)data=["신년 다과회","세바스찬","첫 손님의 마차가 도착했습니다. 도련님께서 문 앞에서 맞으시겠습니까?","손님에게 새해 인사를 한다","기품","가문의 올해 계획을 전한다","경영","가문 연례행사 · IF"];
 if(month===4)data=["엘리자베스의 부활절 달걀 찾기","엘리자베스","시엘, 마지막 달걀만 남았어! 내가 숨긴 곳이니까, 이번엔 네가 찾아야 해!","리본에 묻은 흙을 살핀다","통찰","엘리자베스와 함께 찾는다","매력","원작 14권 66화 모티프 · 시점 재구성"];
 if(month===9)data=["영지의 수확 감사제","세바스찬","교회 현관에 빵과 채소를 놓을 자리를 비워 두었습니다. 올해는 도련님께서 첫 바구니를 맡으시지요.","주민에게 빵을 나눈다","매력","수확 장부를 검토한다","경영","빅토리아 시대 수확 감사 관습 · 가문 참여 IF"];
 if(!data)continue;
 const [title,speaker,text,a,ka,b,kb,source]=data;
 out.push({id:"season-"+m,title,speaker,text,source,season:true,sees:s=>month===4&&s.month===m,choices:[choice(a,ka+" +4",()=>changeStat(ka,4)),choice(b,kb+" +4",()=>changeStat(kb,4))]});
 }
 return out;
}
function foundationEvents(){return [{id:"homecoming",chapter:true,household:true,speaker:"타나카",title:recruitScenes.homecoming.title,text:"서재로 돌아온 타나카가 시엘에게 그날의 일을 이야기하고, 다시 가문의 서신을 맡는다.",sees:tanakaReturns,choices:[
 choice("서재 열쇠를 돌려준다","타나카 복귀 · 서재 근무",()=>{recruit("tanaka");state.staff="library";}),
 choice("먼저 다과를 함께한다","타나카 복귀 · 신뢰 상승",()=>{recruit("tanaka");state.staff="library";talkTrust("tanaka",2);})]},
 {id:"unasked",speaker:"세바스찬",title:"명령보다 한 박자 먼저",lines:[["","시엘이 손을 내밀자 흰 장갑이 이미 그 위에 놓였다."],["시엘","“… 아직 안 불렀는데?”"],["","세바스찬은 태연히 반대쪽 장갑의 단추를 풀었다."],["세바스찬","“다시 벗겨 드릴까요?”"]],sees:s=>s.month>=4&&(s.flags.attention||0)>=3,choices:[choice("말없이 다음 장갑을 건넨다","둘만의 아침 습관 기록",()=>{state.flags.morningGloves=true;}),choice("도련님의 대답을 기다린다","의지 +15",()=>changeStat("의지",15))]}];}
function sourceNote(e){return e.source||({jubilee:"1887년 6월 빅토리아 여왕 즉위 50주년 · 가문 참여 IF",match:"1888년 런던 성냥공장 파업 · 회사 대응 IF",circus:"런던 타운하우스 · 소마와 아그니가 맞이한 방문객",gardener:"원작 연구소 탈출 · 첫 만남과 명명 / 게임 달력에 배치",maid:"원작 30권 · 올빼미에게 건넨 고용 제안 / 피니안 합류 뒤 월말 추첨",cook:"원작의 서재 면담 · 메이린 합류 뒤 게임 달력에 배치",homecoming:"타나카의 저택 복귀 · 게임 달력에 배치"}[e.id])||"";}
function houseValues(){
 const staff=Object.values(state.jobs),matched=Object.entries(state.jobs).filter(([p,r])=>servants[p]?.job===r).length;
 const rooms=[...Object.values(state.level),...Object.values(state.annex)],improvements=rooms.reduce((s,v)=>s+v-1,0);
 const care=state.houseCare||"routine",strain=(state.neglect||0)*8;
 const values={청결:cap(55+(staff.includes("parlor")?15:0)+(care==="clean"?22:0)-strain),보안:cap(45+state.annex.guard*8+staff.filter(r=>r==="guard").length*10+(care==="guard"?20:0)-strain),품격:cap(40+state.level.parlor*8+matched*4+improvements*2),시설상태:cap(65+improvements*3+(care==="repair"?22:0)-strain)};
 for(const [id,room] of Object.entries(state.jobs)){
   const metric=staffDutyMetric[room];
   if(metric&&state.people[id])values[metric]=cap(values[metric]+Math.floor((state.people[id].skill||0)/5));
 }
 return values;
}
function houseDesk(){
 const gauges=Object.entries(houseValues()).map(([key,value])=>
   '<div class="care-gauge"><span>'+key+'</span><b>'+value+' <small>/ 100</small></b>'+
   '<progress aria-label="'+key+'" value="'+value+'" max="100"></progress></div>').join("");
 const duties=[["routine","통상 관리"],["clean","청소"],["guard","경비"],["repair","수선"],["defer","관리 유예"]];
 const options=duties.map(([key,label])=>option(label,"care:"+key,key===(state.houseCare||"routine"),state.phase!=="plan")).join("");
 return '<section class="budget-book estate-care"><h3>저택 관리</h3><div class="care-readings">'+gauges+'</div>'+
   '<fieldset><legend>이번 달 중점 업무</legend><div class="care-options">'+options+'</div></fieldset>'+
   '<p class="care-note">관리 유예 시 월 £8 절약<br>두 달 이상 유예하면 교육 효율과 가문 명성이 낮아집니다.</p></section>';
}

function productPlanning(){
 const project=state.prototype;
 if(project)return '<h4>시제품 기획</h4><p>'+products[project.product].name+' · '+(project.brief==="gift"?"선물용":"가정용")+' · '+(project.material==="select"?"엄선 재료":"일반 재료")+' · '+(project.lead==="sales"?"판매 담당":"제작 담당")+' · '+(project.approved?"출시 승인":"월말 검수 예정")+'</p>';
 const pick=(title,action,options,value)=>'<fieldset><legend>'+title+'</legend><div class="work-actions">'+options.map(([id,label])=>option(label,action+":"+id,id===value,state.phase!=="plan")).join("")+'</div></fieldset>';
 return '<h4>시제품 기획</h4>'+pick("구매 목적","brief",[["family","가정용"],["gift","선물용 · 연말 수요"]],state.brief||"family")+
  pick("재료","material",[["common","일반 재료"],["select","엄선 재료 · 원가 +£2, 높은 가격 수용"]],state.material||"common")+
  pick("담당","lead",[["maker","제작 담당 · 원가 최대 £1 절감"],["sales","판매 담당 · 수요 +2개"]],state.lead||"maker");
}
function sampleReview(){
 const p=state.prototype;
 if(!p||p.approved||p.review>state.month)return "";
 const notes={toys:"몸체는 튼튼합니다. 손이 작은 아이에게는 손잡이가 조금 큽니다.",sweets:"버터 향이 좋습니다. 다만 꺼낼 때 가장자리가 부서지는군요.",game:"말의 색은 쉽게 구별됩니다. 첫 수를 두는 방법은 설명서에 한 줄 더 필요합니다.",plush:"안았을 때 감촉이 좋습니다. 다만 귀 뒤의 솔기가 조금 거칩니다.",candy:"맛은 고르게 들었습니다. 포장지 끝을 조금 더 길게 남기면 풀기 쉽겠습니다.",hamper:"구성은 좋습니다. 상자를 기울이면 작은 병이 칸막이 사이로 빠집니다."};
 const note=p.reworked?"재검수 결과, 지적한 부분을 보완했습니다.":p.brief==="gift"?"진열대에서는 눈에 띕니다. 아이 혼자 리본을 풀기에는 매듭이 빡빡하군요.":notes[p.product];
 return '<section class="budget-book sample-review"><header><img src="assets/map-cart-'+p.product+'.png" alt=""><div><small>팬텀사 시제품 검수</small><h3>'+products[p.product].name+'</h3></div></header><p>'+note+'</p><div class="sample-actions">'+btn("출시 승인 · 다음 달 생산","sample:approve")+btn("재작업 · £12","sample:redo",state.fund<12||state.month>=state.duration-1||p.reworked)+'</div></section>';
}
let facilityLedgerOpen=true;
document.addEventListener("toggle",event=>{
  if(event.target.matches?.(".estate-ledger")&&event.target.isConnected)facilityLedgerOpen=event.target.open;
},true);
function facilityLedger(){
 const conditionBase=houseValues().시설상태;
 const rooms=Object.entries({...state.level,...state.annex}).map(([id,n])=>{
   const room=facilities[id]||annex[id];
   const cost=facilities[id]?4*n:2*(n-1);
   const condition=cap(conditionBase+3*(n-1));
   return {room,n,cost,condition};
 });
 const total=rooms.reduce((sum,item)=>sum+item.cost,0);
 const rows=rooms.map(({room,n,cost,condition})=>
   '<tr><th scope="row">'+room.name+' <small>Lv.'+n+'</small></th><td>'+money(cost)+'</td><td><span class="room-health"><meter aria-label="'+room.name+' 상태" min="0" max="100" value="'+condition+'"></meter><b>'+condition+'%</b></span></td></tr>').join("");
 return '<details class="estate-ledger"'+(facilityLedgerOpen?' open':'')+'><summary><span>시설별 유지비와 상태 <small>월 시설 유지비</small></span><strong>'+money(total)+'</strong></summary>'+
   '<div class="estate-ledger-body"><table><thead><tr><th scope="col">시설</th><th scope="col">월 비용</th><th scope="col">상태</th></tr></thead><tbody>'+rows+'</tbody></table>'+
   '<small>공통 관리비 £36과 경비 절감액은 별도입니다.</small></div></details>';
}

// Later assignments combine subjects that the player actually practised.
function appliedExams(){
  const cases=[
    ["guestBook",3,"오늘 응접실에 손님이 한 분 더 오십니다. 좌석표에도, 식사 장부에도 자리가 없습니다. 어느 쪽을 먼저 손보시겠습니까?",
      [["두 손님의 대화를 잇는다","매력","기품"],["남은 식사 비용을 계산한다","경영","지성"],["식당까지 직접 동선을 살핀다","체력","통찰"]]],
    ["lateDispatch",6,"마지막 우편 마차가 곧 떠납니다. 납품서와 거래처의 답장이 서로 다르군요. 제게 어떤 지시를 내리시겠습니까?",
      [["답장을 대조해 정정본을 쓴다","통찰","지성"],["마차까지 직접 가서 인계한다","체력","의지"],["상대를 만나 납기를 바꾼다","경영","매력"]]],
    ["hostAlone",8,"오늘 만찬은 제가 문밖에서 기다리겠습니다. 손님들은 벌써 도착하셨는데, 도련님은 어느 자리를 맡으시겠습니까?",
      [["현관에서 한 사람씩 맞는다","기품","매력"],["모든 방을 돌며 진행을 지휘한다","의지","체력"],["식탁과 장부를 함께 점검한다","지성","경영"]]]
  ];
  return cases.map(([id,count,text,options])=>({id,chapter:true,title:"종합 실기",speaker:"세바스찬",text,
    sees:s=>exams.filter(([slot])=>s.flags["exam-"+slot]).length>=count,
    choices:options.map(([label,primary,secondary])=>choice(label,primary+" +30 · "+secondary+" +18",()=>{
      changeStat(primary,30);changeStat(secondary,18);
    }))}));
}

const endingArtDescriptions={"black":"검은 배경 · 암전","royal-monologue":"회랑에서 시엘의 뒷모습을 지켜보는 세바스찬","royal-gates":"낮의 버킹엄궁 정문","royal-doorway":"녹색 앞방에서 식장을 바라보는 마담 레드와 세바스찬","royal-reply":"창가에서 안대에 손을 올리는 시엘","royal-letter":"나무 책상 위에 놓인 여왕의 봉서와 편지칼","royal-dress":"거울 앞에서 시엘의 안대를 매는 세바스찬","royal-investiture":"무릎 꿇은 시엘의 어깨에 경식을 거는 여왕","royal-gallery":"창으로 빛이 드는 회랑에 선 두 사람","royal-oath":"계약인을 드러내고 명령을 내리는 시엘","vowTitle":"시엘 앞에 무릎을 꿇고 고개를 숙인 세바스찬"};
const endingScenes={
  vowTitle:{alt:"시엘 앞에 한쪽 무릎을 꿇은 세바스찬.",lines:[
    ["세바스찬","도련님, 편지가 왔습니다.","royal-letter",{"fx":"fade"}],
    ["세바스찬","이거…","royal-letter"],
    ["세바스찬","서둘러 알현복을 준비해야겠습니다.","royal-letter"],
    ["왕실 서신","시엘 팬텀하이브 경에게.","royal-letter"],
    ["왕실 서신","먼저, 가족의 죽음을 진심으로 애도합니다. 그리고 그대의 무사함을 신께 감사드립니다.","royal-letter"],
    ["왕실 서신","영주가 없는 관계로 왕가에 일시적으로 반환되었던 영지와 작위를 그대에게 반환하고자 합니다.","royal-letter"],
    ["왕실 서신","3월 17일 오전 10시 버킹엄궁전에서 특별 서훈식을 엽니다.","royal-letter"],
    ["왕실 서신","그대와의 만남을 기대합니다.","royal-letter"],
    ["왕실 서신","― 빅토리아.","royal-letter"],
    ["","……","black",{"fx":"fade","hideCast":true}],
    ["세바스찬","후훗.","royal-dress",{"fx":"fade"}],
    ["세바스찬","잘 어울리십니다, 도련님.","royal-dress"],
    ["시엘","하.","royal-dress"],
    ["시엘","아첨하는 것도 집사다워졌군.","royal-dress"],
    ["세바스찬","황송합니다.","royal-dress"],
    ["세바스찬","하지만 거짓말이 아닙니다.","royal-dress"],
    ["시엘","흥.","royal-dress"],
    ["시엘","가자, 세바스찬!","royal-gates",{"fx":"fade"}],
    ["귀빈","저 어린 나이에 왜 훈장을?","royal-investiture",{"fx":"fade"}],
    ["귀빈","아무리 명문 백작가라지만…","royal-investiture"],
    ["빅토리아","어서 와요, 팬텀하이브 백작.","royal-investiture"],
    ["빅토리아","그대의 귀환을 환영합니다.","royal-investiture"],
    ["마담 레드","더 가까이에서 보면 좋았을 텐데.","royal-doorway",{"fx":"fade"}],
    ["마담 레드","당신은 이제 시엘에게 가족이나 다름없어.","royal-doorway"],
    ["세바스찬","가족이라뇨. 당치 않습니다.","royal-doorway"],
    ["세바스찬","저는—","royal-doorway"],
    ["세바스찬","어디까지나,","royal-doorway"],
    ["세바스찬","집사니까요.","royal-doorway"],
    ["","……","royal-gallery",{"fx":"fade","hideCast":true}],
    ["세바스찬","이제 당신은 정식으로 백작이 되었습니다.","royal-gallery"],
    ["세바스찬","지위도 재산도 아름다운 약혼자도 전부 당신 것입니다.","royal-gallery"],
    ["세바스찬","어떻습니까?","royal-gallery"],
    ["세바스찬","복수 같은 어리석은 짓은 그만두고 이대로 행복하게 살아가는 것은?","royal-gallery"],
    ["시엘","……","royal-reply",{"fx":"fade"}],
    ["시엘","그것도 나쁘지 않지….","royal-reply"],
    ["시엘","하지만,","royal-reply"],
    ["시엘","나는 행복을 얻기 위해 ‘여기’로 돌아온 게 아니야.","royal-reply"],
    ["시엘","나는 싸우기 위해 돌아왔어.","royal-reply"],
    ["시엘","시엘 팬텀하이브 백작이라는 이름을 짊어진 이상, 앞으로 나아가는 수밖에 없어.","royal-reply"],
    ["시엘","나의 악한 이름에 걸고 반드시 복수를 하고 말 거야!","royal-reply"],
    ["세바스찬 · 독백","아아.","royal-monologue",{"fx":"fade"}],
    ["세바스찬 · 독백","한 치의 망설임도 없이 빛을 등지고,","royal-monologue"],
    ["세바스찬 · 독백","기품 있는 걸음걸이로 나락으로 돌진하는 그 모습은…","royal-monologue"],
    ["세바스찬 · 독백","얼마나 아름답고 어리석은가.","royal-monologue"],
    ["시엘","명령이다, 세바스찬.","royal-oath",{"fx":"fade"}],
    ["시엘","너는 나의 검이 되고 방패가 되어…","royal-oath"],
    ["시엘","나에게 승리를!","royal-oath"],
    ["세바스찬","예스, 마이 로드.","vowTitle",{"fx":"fade"}]
  ]},
  vowNoTitle:{alt:"비에 젖은 골목에서 시엘이 문장 없는 마차에 발을 올린다.",lines:[
    ["세바스찬","왕실에서 회신이 도착했습니다. 전령은 답도 듣지 않고 말머리부터 돌리더군요.","royal-letter",{"fx":"fade"}],
    ["왕실 서신","작위의 환부는 차기 심의까지 보류합니다. 제출된 서류 일체는 왕실 서고에 보관합니다.","royal-letter"],
    ["시엘","…차기 심의는 언제라고 적혀 있지?","royal-letter"],
    ["세바스찬","글쎄요. 기일을 적는 자리가 텅 비어 있습니다.","royal-letter"],
    ["시엘","……거기부터 봤어야 했는데.","royal-letter"],
    ["","시엘은 편지를 구기지 않았다. 첫 장부 맨 뒷장에 칼같이 반듯하게 접어 끼웠다.","royal-letter"],
    ["세바스찬","장부는 두고 가십니까?","royal-letter"],
    ["시엘","그래. 오늘 들고 갈 건 따로 있어.","royal-letter"],
    ["","되돌아온 서류 틈에 모래가 조금 남아 있었다. 봉투를 기울이자 검은 낟알 셋이 톡, 굴러 떨어졌다.","royal-letter"],
    ["시엘","이건 누가 묻힌 거지?","royal-letter"],
    ["세바스찬","잉크를 말릴 때 쓰는 모래군요. ……다만 묘한 점이 있습니다. 차기 심의 칸은 백지인데, 발신 인장과 날짜는 오늘 자로 찍혀 있습니다.","royal-letter"],
    ["세바스찬","답안은 이미 오래전에 써 두고, 날짜만 오늘 도장을 꾹 눌러 보낸 모양이지요.","royal-letter"],
    ["시엘","내 얼굴 한 번 보지 않고 내린 처분이란 말이지. 좋아. 그럼 이번엔 내가 직접 얼굴을 들이밀고 묻겠어.","royal-letter"],
    ["세바스찬","왕실의 소개장 없이는 어딜 가도 문전박대일 텐데요.","royal-letter"],
    ["시엘","그 종이를 챙겨. 팬텀하이브가 왕실에 문전박대당했다는 소식이라면, 오히려 반가워서 빗장을 풀 놈이 하나쯤은 있을 테니까.","royal-letter"],
    ["","책상 위 지도에는 항구와 여관 두 곳, 그리고 폐쇄된 역의 옛 이름이 붉게 찍혀 있었다. 지난 35개월간 왕실의 눈을 피해 발품으로 긁어모은 자리들이었다.","releaseNoTitle",{"fx":"fade"}],
    ["세바스찬","허나 이 기록의 뒷장은 왕실의 열람 허가가 있어야 이어 보실 수 있습니다.","releaseNoTitle"],
    ["시엘","기록을 쓴 본인에게 직접 물으면 허가 따윈 필요 없지.","releaseNoTitle"],
    ["세바스찬","그분께선 지금 꼭꼭 숨어 계신데요.","releaseNoTitle"],
    ["시엘","그러니까 갈 만한 구멍을 세 군데나 짚어 놨잖아.","releaseNoTitle"],
    ["세바스찬","마지막 장소에 닿을 즈음이면 해가 뚝 떨어지겠습니다.","releaseNoTitle"],
    ["시엘","해가 졌으면 등불을 켜면 될 일이야. 준비해.","releaseNoTitle"],
    ["","어린 주인이 지도 접는 법을 익힌 건 첫겨울이었다. 이제는 어둠 속을 걸을 등불 한 자루까지 셈에 넣기 시작한 것이다.","releaseNoTitle",{"hideCast":true}],
    ["","시엘은 책상 밑 서랍을 당겼다. 맨 아래 깔아 둔 낡은 여비 봉투에서 반으로 찢긴 기차표가 나왔다.","releaseNoTitle",{"fx":"fade"}],
    ["세바스찬","조사를 시작하신 첫날에 끊으신 표군요. 그날은 시간이 늦어 역 문턱도 못 넘으셨지요.","releaseNoTitle"],
    ["세바스찬","‘역무원은 밤 열한 시에 교대.’ 손수 적어 두셨군요.","releaseNoTitle"],
    ["시엘","사람은 도망쳐도 그가 하던 일은 누군가 물려받기 마련이지.","releaseNoTitle"],
    ["세바스찬","그럼 첫 번째 여관보다 역부터 들르시겠습니까?","releaseNoTitle"],
    ["시엘","응. 이번엔 교대 전에 잡아야 해.","releaseNoTitle"],
    ["","시엘은 반쪽짜리 표를 조끼 주머니에 찔러 넣었다. 영지를 돌려달라는 탄원서는 책상 위에 그대로 버려두었다.","releaseNoTitle"],
    ["","막차가 빠져나간 플랫폼에는 빗물이 흥건했다. 시엘이 내민 표를 본 역무원이 등불을 바짝 들이댔다.","black"],
    ["역무원","손님, 이걸론 못 타요. 날짜가 몇 년 전 것인데.","black"],
    ["시엘","알아. 날짜 말고 뒷면의 글씨나 봐.","black"],
    ["역무원","……이걸 누구한테 받으셨소?","black"],
    ["시엘","그날 밤, 누구한테 개찰을 맡기고 자리를 떴지?","black"],
    ["","남자가 등불을 푹 내렸다. 뒷걸음질 치던 구두 굽이 승강장 끝에 걸려 휘청였다. 흰 장갑을 낀 손이 그의 팔꿈치를 우아하게 붙들었다.","black"],
    ["세바스찬","발밑을 조심하시지요. 저희 주인께서 아직 답을 못 들으셨으니.","black"],
    ["역무원","키가 작은 사내였소. 왼손 엄지가 없었고……. 난 그거밖에 몰라!","black"],
    ["역무원","그리고… 손등이 흉터로 굳어서 검표 가위를 못 쥐더군. 결국 표를 손으로 반만 북 찢어 줬어.","black"],
    ["","시엘은 주머니 속 남은 반쪽을 매만졌다. 투박하게 뜯긴 종이 결이 손끝에 걸렸다.","black"],
    ["시엘","됐어. 그 놈을 다시 보거든 여기로 기별해.","black"],
    ["역무원","성함은 뭘로 적습니까? 손님 앞으로?","black"],
    ["시엘","시엘 팬텀하이브. 그 이름이면 충분해.","black"],
    ["","마차가 구르자 시엘이 안에서 창을 두드렸다.","vowNoTitle",{"fx":"fade"}],
    ["시엘","세바스찬, 인쇄소부터 들러. 이 일련번호가 어느 역으로 납품됐는지 장부부터 털어야겠어.","vowNoTitle"],
    ["세바스찬","예스, 마이 로드.","vowNoTitle"]
  ]},
  releaseTitle:{alt:"달빛이 드는 창가에 시엘이 서 있고 세바스찬의 손 위로 푸른 빛이 피어오른다.",lines:[
    ["세바스찬","도련님, 편지가 왔습니다.","royal-letter"],
    ["세바스찬","이거…","royal-letter"],
    ["세바스찬","서둘러 알현복을 준비해야겠습니다.","royal-letter"],
    ["왕실 서신","시엘 팬텀하이브 경에게.","royal-letter"],
    ["왕실 서신","먼저, 가족의 죽음을 진심으로 애도합니다. 그리고 그대의 무사함을 신께 감사드립니다.","royal-letter"],
    ["왕실 서신","영주가 없는 관계로 왕가에 일시적으로 반환되었던 영지와 작위를 그대에게 반환하고자 합니다.","royal-letter"],
    ["왕실 서신","3월 17일 오전 10시 버킹엄궁전에서 특별 서훈식을 엽니다.","royal-letter"],
    ["왕실 서신","그대와의 만남을 기대합니다.","royal-letter"],
    ["왕실 서신","― 빅토리아.","royal-letter"],
    ["","…….","black"],
    ["세바스찬","후훗.","royal-dress",{"fx":"fade"}],
    ["세바스찬","잘 어울리십니다, 도련님.","royal-dress"],
    ["시엘","하.","royal-dress"],
    ["시엘","아첨하는 것도 집사다워졌군.","royal-dress"],
    ["세바스찬","황송합니다.","royal-dress"],
    ["세바스찬","하지만 거짓말이 아닙니다.","royal-dress"],
    ["시엘","흥.","royal-dress"],
    ["시엘","가자, 세바스찬!","royal-gates"],
    ["귀빈","저 어린 나이에 왜 훈장을?","royal-investiture"],
    ["귀빈","아무리 명문 백작가라지만…","royal-investiture"],
    ["빅토리아","어서 와요, 팬텀하이브 백작.","royal-investiture"],
    ["빅토리아","그대의 귀환을 환영합니다.","royal-investiture"],
    ["마담 레드","더 가까이에서 보면 좋았을 텐데.","royal-doorway"],
    ["마담 레드","당신은 이제 시엘에게 가족이나 다름없어.","royal-doorway"],
    ["세바스찬","가족이라뇨. 당치 않습니다.","royal-doorway"],
    ["세바스찬","저는—","royal-doorway"],
    ["세바스찬","어디까지나,","royal-doorway"],
    ["세바스찬","집사니까요.","royal-doorway"],
    ["세바스찬","이제 당신은 정식으로 백작이 되었습니다.","royal-gallery",{"fx":"fade"}],
    ["세바스찬","지위도 재산도 아름다운 약혼자도 전부 당신 것입니다.","royal-gallery"],
    ["세바스찬","어떻습니까?","royal-gallery"],
    ["세바스찬","복수 같은 어리석은 짓은 그만두고 이대로 행복하게 살아가는 것은?","royal-gallery"],
    ["시엘","……","royal-monologue",{"fx":"fade"}],
    ["시엘","그것도 나쁘지 않지….","royal-monologue"],
    ["시엘","리지와 저녁을 먹고, 겨울이면 저택에 내려가고…… 그래. 어떻게 살지는 나도 궁금했어.","royal-monologue"],
    ["","시엘이 안대를 풀었다. 매듭이 한 번 걸려서, 두 번째에는 두 손을 써야 했다.","black",{"fx":"fade"}],
    ["시엘","손 내밀어.","black"],
    ["","세바스찬은 곱게 접은 안대를 받았다.","black"],
    ["시엘","가져. 내일 아침엔 쓸 일이 없을 테니.","black"],
    ["세바스찬","그렇군요.","black"],
    ["","집사가 흰 장갑 한 짝을 벗었다. 손등의 문양과 소년의 오른쪽 눈이 같은 빛을 띠었다.","black"],
    ["시엘","이럴 때까지 서서 하게 할 셈이냐?","black"],
    ["세바스찬","실례했습니다, 도련님.","black"],
    ["","세바스찬이 주인 앞에 무릎을 꿇었다. 늘 장화를 벗겨 주던 높이였다.","black"],
    ["시엘","복수는 그만두겠어. 이게 내 마지막 명령이다.","royal-oath",{"fx":"fade"}],
    ["세바스찬","예스, 마이 로드.","royal-oath"],
    ["","시엘이 눈을 감기도 전에 세상이 어두워졌다.","black",{"cg":"black","hideCast":true,"fx":"fade"}],
    ["","어둠 속에서 악마가 입을 열었다. 시엘의 마지막 숨을 따라 빠져나온 영혼을, 세바스찬은 남김없이 삼켰다.","black",{"cg":"black","hideCast":true}],
    ["","회랑 밖에서 의전관이 백작의 마차를 불렀다. 대답이 없어 한 번 더 불렀다.","black"]
  ]},
  releaseNoTitle:{alt:"불탄 기록 곁에서 마지막 명령을 받아들이는 세바스찬.",lines:[
    ["세바스찬","재가를 청하는 서류를 다시 꾸릴 수는 있습니다. 반년 뒤에 다음 심의가 열립니다.","royal-letter",{"fx":"fade"}],
    ["시엘","이번에도 봉투를 고스란히 돌려보냈어?","royal-letter"],
    ["세바스찬","가문을 증명하는 서류는 반송되었습니다. 답신은 딱 한 줄뿐이더군요.","royal-letter"],
    ["시엘","읽어 봐.","royal-letter"],
    ["세바스찬","‘현 상황에서는 재가 허가를 내리기 어렵습니다.’","royal-letter"],
    ["","시엘은 편지 끝의 날짜를 내려다보았다. 날짜만 두 번, 소리 없이 훑었다.","royal-letter"],
    ["시엘","반년 뒤에 쓸 종이값은 남겨 둬. 딴 데 쓸 일이 생길 테니.","royal-letter"],
    ["","사환이 문 앞에서 나갈 편지 묶음을 기다렸다. 시엘은 자기 앞에 놓인 임시 봉투의 주소를 펜으로 쭉 그어 지웠다.","black",{"fx":"fade"}],
    ["시엘","왕궁으로 갈 마차는 물려.","black"],
    ["세바스찬","이미 삯을 치렀습니다만. 원하신다면 남는 편지를 불쏘시개로 쓸 수는 있습니다.","black"],
    ["시엘","마부한테 오늘은 일찍 들어가 쉬라고 전해.","black"],
    ["세바스찬","시내에 들르실 곳이 하나 더 남지 않으셨습니까?","black"],
    ["시엘","알아. 그 자가 묵고 있다는 여관 말이지.","black"],
    ["","시엘은 서랍을 열었다. 구겨진 방명록 한 장이 맨 위에 얹혀 있었다.","black"],
    ["시엘","여기, 아버지가 돌아가신 날. 누군가 잉크를 칼로 긁어 냈지?","black"],
    ["세바스찬","예. 종이가 얇아졌으니 등불에 비추면 필압이 고스란히 드러날 겁니다.","black"],
    ["","세바스찬이 램프를 바짝 가져왔다. 시엘은 말없이 심지를 쑥 내려 불을 죽였다.","black"],
    ["세바스찬","안 보십니까?","black"],
    ["시엘","석 달 전이었으면 네 손에서 낚아채서라도 읽었을 거야.","black"],
    ["세바스찬","마부를 다시 부를까요? 아직 마당을 안 나갔습니다.","black"],
    ["시엘","보내라니까.","black"],
    ["","잠시 뒤 창밖으로 멀어지는 마차 바퀴 소리가 났다. 시엘의 손가락 밑에서 종이 끝이 힘없이 들렸다 가라앉았다.","black"],
    ["시엘","……궁에서 나를 백작이라 부르든 애송이라 부르든 상관없어. 그래서 그만두는 게 아니야.","black"],
    ["시엘","35개월이나 발버둥 쳤지만…… 이제 놈들의 이름을 알아낸대도 더 쫓을 마음이 없어.","black"],
    ["세바스찬","그렇다면 도련님께 청구할 것이 딱 하나 남는군요.","black"],
    ["시엘","설마 마차 삯은 아닐 테고.","black"],
    ["세바스찬","제가 언제 봉급을 돈으로 받은 적이 있었습니까?","black"],
    ["","시엘이 픽, 작게 웃었다. 마른 웃음이 잦아들자 방 안에는 종이 타는 소리만 사그락거렸다.","black"],
    ["시엘","그래. 네가 처음부터 노려 온 몫이 뭔지는 알아. 복수를 접고 판에서 내려온다면, 계약의 위약금은 지금 치러야겠지.","black"],
    ["","시엘이 안대를 풀었다. 매듭이 한 번 엉켜, 두 번째에는 양손을 다 써야 했다.","black"],
    ["시엘","손 내밀어.","black"],
    ["","세바스찬은 곱게 접힌 안대를 받았다. ","black"],
    ["","집사가 오른손의 흰 장갑을 벗었다. 손등의 계약인과 소년의 오른쪽 눈이 같은 빛으로 서늘하게 얽혔다.","black"],
    ["시엘","이런 때까지 서서 내려다볼 셈이냐?","black"],
    ["세바스찬","실례했습니다, 도련님.","black"],
    ["","세바스찬이 주인 앞에 한쪽 무릎을 꿇었다. 늘 장화를 벗겨 주던 바로 그 높이였다.","black"],
    ["시엘","복수는 여기서 끝이다. 이게 내 마지막 명령이야.","black"],
    ["세바스찬","예스, 마이 로드.","black"],
    ["","시엘이 눈을 감기도 전에 방 안의 촛불이 일제히 꺼졌다.","black",{"cg":"black","hideCast":true}],
    ["","짙은 어둠 속에서 악마가 본래의 입을 열었다. 시엘의 마지막 숨을 따라 빠져나온 영혼을, 세바스찬은 남김없이 삼켰다.","black",{"cg":"black","hideCast":true}],
    ["","다음 심의의 날짜를 알리는 왕실의 편지가 저택에 당도한 것은 이듬해였다. 편지는 수취인 부재로 궁에 되돌아갔다.","black"]
  ]},
  ill:{alt:"창가에 선 세바스찬 곁으로 시엘의 빈 의자와 수첩이 보인다.",lines:[
    ["","편지를 가져온 아이는 마차가 대문을 빠져나갈 때까지 현관 앞에서 모자를 꼭 쥔 채 서 있었다.","royal-letter"],
    ["세바스찬","어디서 온 서신인지 보시겠습니까?","royal-letter"],
    ["시엘","볕에 비춰 봐. 글자가 등까지 비치면 급한 거야. 급하면 다들 펜을 꾹 눌러 쓰잖아.","royal-letter"],
    ["세바스찬","아주 가볍고 고운 필체입니다. 안부를 묻는 편지군요.","royal-letter"],
    ["시엘","그럼 잘 받았다고만 해. 답장 기다리게 하지 말고.","royal-letter"],
    ["세바스찬","어디까지 전하면 됩니까?","royal-letter"],
    ["시엘","이쪽은 볕이 아주 잘 든다고. 그건 네 눈에도 보이잖아.","royal-letter"],
    ["","세바스찬은 봉투를 침대 옆 탁자에 세워 두었다. 겹쳐 놓은 편지지 위로 창살 그림자가 반듯하게 걸렸다.","royal-letter"],
    ["","서재 문을 여는 열쇠가 찻숟가락과 짤랑 부딪혔다. 눈을 감고 있던 시엘이 먼저 물었다.","black",{"fx":"fade"}],
    ["시엘","세바스찬, 어느 쪽 서랍을 연 거야?","black"],
    ["세바스찬","책상 왼쪽 서랍입니다. 아침에 의사가 다녀간 시각을 적어 두려고요.","black"],
    ["","복도 시계가 네 번 울렸다. 시엘은 세 번째와 네 번째 사이에서 거칠게 숨을 골랐다.","black"],
    ["세바스찬","오전에 들른 손님은 돌려보냈습니다. 오후에도 마차는 부르지 않을 겁니다.","black"],
    ["시엘","……네가 마음대로 물렸어?","black"],
    ["세바스찬","도련님께서 어제저녁에 직접 명하셨습니다. 열이 오르셔서 잊으신 모양이군요.","black"],
    ["시엘","그렇구나…… 정신이 하나도 없네.","ill"],
    ["","시엘은 몸을 일으키려다 힘없이 침대 가장자리를 짚었다. 세바스찬의 움직임이 뚝 멈췄다.","black"],
    ["세바스찬","……! 의사를 다시 모셔 오겠습니다.","black"],
    ["시엘","……어릴 때도 꼭 이랬어.","black"],
    ["세바스찬","어릴 때라니요?","black"],
    ["시엘","밤새 숨이 턱턱 막혀서……. 어머니가 옆에서 밤새도록 등을…….","black"],
    ["","그 뒤는 쌕쌕거리는 숨소리에 묻혀 들리지 않았다. 시엘은 여전히 자신이 말을 이어 가고 있는 줄 아는 얼굴이었다.","black"],
    ["세바스찬","도련님. 제 손을 잡으시겠습니까?","black"],
    ["","서늘한 손끝이 겨우 닿았다. 세바스찬은 다른 손으로 침대 곁의 종을 세게 당겼다.","black"],
    ["의사","예전에 천식을 앓은 적이 있습니까? 아주 어릴 때라도요.","black"],
    ["세바스찬","제가 이 댁에 온 뒤로는 들은 바가 없습니다. 도련님께서 약한 소리를 하시는 분이 아니어서요.","black"],
    ["의사","단순한 과로가 아닙니다. 그 전의 일을 아는 분께 급히 확인해 주십시오.","black"],
    ["","의사는 시엘의 손목을 놓지 않은 채 침대 곁을 지켰다. 세바스찬이 아래층 서재로 내려갔다.","black"],
    ["","선대 백작 부인의 수첩은 늘 같은 자리에 꽂혀 있었다. 집사가 수백 번도 넘게 먼지를 닦아 낸 책이었다.","black"],
    ["","시엘의 생일과 유모의 품삯이 적힌 페이지 뒤편에, 어린 도련님의 발작이 있던 밤들이 빼곡히 적혀 있었다.","black"],
    ["세바스찬","……선천적인 천식이셨군요. 고작 이런 위태로운 숨을 숨기고 지금까지 버티셨단 말입니까.","black"],
    ["","마지막 날짜 아래에 짧은 줄이 그어져 있었다. 저택이 불탄 뒤로 한 줄도 더해지지 않은 기록이었다.","black"],
    ["","침실로 돌아왔을 때 시엘은 베갯잇 끝을 손가락 사이에 팽팽하게 말아 쥐고 있었다.","black"],
    ["세바스찬","찾았습니다. 어릴 적에 여러 차례 심하게 앓으셨답니다.","black"],
    ["의사","예. 책은 거기 두세요.","black"],
    ["","세바스찬은 시엘이 움켜쥔 천을 펴 주려다 그대로 두었다.","black"],
    ["시엘","……늦었어.","black"],
    ["세바스찬","예. 다음번에는 더 빨리 다녀오겠습니다.","black"],
    ["","시엘의 손이 스르르 풀렸다. 악마는 ‘다음번’이라는 거짓말을 차마 고쳐 말하지 않았다.","black"],
    ["","동틀 무렵, 의사가 일어서며 시계를 보았다. 세바스찬도 탁자 위 시계를 보았다. 두 시계가 가리키는 분은 여전히 달랐다.","black"],
    ["의사","……가족분들께 사람을 보내셔야겠습니다.","black"],
    ["","시엘의 얇은 가슴은 다시 오르지 않았다.","black"],
    ["","세바스찬은 탁자 위 수첩을 펼쳤다. 오래전에 멎어 있던 날짜들 밑에, 그날 새벽의 시각을 반듯하게 적어 넣었다.","ill",{"fx":"fade"}]
  ]},
  broke:{alt:"빈 가게에서 접시 값을 두고 말다툼하는 시엘과 세바스찬.",lines:[
    ["","압류 영장을 든 사내는 모자도 외투도 맡기지 않았다. 현관에 뻣뻣이 서서 금고를 열 수 있는 시각만 물었다.","black",{"fx":"fade"}],
    ["세바스찬","약속한 때보다 한 시간이나 일찍 들이닥쳤습니다. 돌려보낼까요?","black"],
    ["시엘","한 시간 더 뻐긴다고 금고 안 사정이 달라지나?","black"],
    ["세바스찬","확실히, 들어 있는 동전의 수에는 변함이 없겠습니다.","black"],
    ["시엘","그럼 들여. 문밖에 세워 두는 것도 결국 가문의 체면을 깎는 일일 뿐이잖아.","black"],
    ["세바스찬","(더 깎일 체면이 있을까요?) 어느 방으로 모실까요.","black"],
    ["시엘","서재.","black"],
    ["","세바스찬이 은쟁반을 들어 올리자, 부도 처리되어 돌아온 어음 아래에서 동그란 찻잔 자국이 드러났다.","black"],
    ["","책상 위에는 영수증이 발행일 순서대로 묶여 있었다. 맨 마지막 묶음만 철끈에서 풀려 나와 있었다.","black"],
    ["시엘","이건 왜 따로 빼 놨어?","black"],
    ["세바스찬","오른쪽이 이번 달에 들어온 돈이고, 왼쪽이 나간 돈입니다.","black"],
    ["시엘","왼쪽 종이는 왜 책상 아래 바닥까지 뱀처럼 기어 내려와 있지?","black"],
    ["세바스찬","영수증이 길어서요.","black"],
    ["시엘","종이가 왜 저렇게 긴지를 묻잖아!","black"],
    ["집달리","실례합니다. 두 분께서 다정히 의논하시는 동안 저쪽 은식기부터 세어도 되겠습니까?","black"],
    ["세바스찬","은포크는 열두 벌입니다. 생선용 나이프는 아래쪽 서랍에 가지런히 있습니다.","black"],
    ["시엘","친절하게 일러바치지 마!","black"],
    ["집달리","고맙습니다. 저기 촛대도 한 쌍이지요?","black"],
    ["","세바스찬은 공손히 입을 다물었다. 대신 촛대가 든 장식장 문을 소리 없이 활짝 열어젖혔다.","black"],
    ["","시엘은 바닥에 닿은 영수증 끝자락을 잡아챘다. 그 밑으로 똑같은 무늬의 영수증이 줄줄이 딸려 올라왔다.","black"],
    ["시엘","최고급 밀가루. 설탕. 프랑스산 발효 버터. 이 아래에 또 버터. 우리 집에 젖소라도 들였나?","black"],
    ["세바스찬","팬텀사 신제품 시식회 비용입니다. 도련님께서 재료가 성에 안 찬다며 공정을 열일곱 번이나 갈아엎고 직접 맛을 보시겠다고 하셨지요.","black"],
    ["시엘","그래서 시식회에 손님을 몇 명이나 먹인 거야?","black"],
    ["세바스찬","손님은 딱 한 분이셨습니다.","black"],
    ["시엘","……설마 나?","black"],
    ["세바스찬","예. 열일곱 번째 접시에서 이제 단 건 꼴도 보기 싫다며 포크를 던지셨지요.","black"],
    ["시엘","그럼 남은 걸 가게에서 팔았어야지!","black"],
    ["세바스찬","접시마다 딱 한 입씩만 베어 드시고 물리신 것을 말씀하십니까?","black"],
    ["","집달리가 난처한 듯 헛기침을 했다. 비어 있던 은쟁반 밑에서 큼지막한 영수증이 한 장 더 삐져나왔다.","black"],
    ["집달리","이 은쟁반은 경매에 부치면 제법 값을 받겠습니다.","black"],
    ["시엘","… 쟁반은 가져가도 좋아. 영수증은 놓고 가.","black"],
    ["","쟁반이 들려 나가자 탁자 위에 하얗게 동그라미가 남았다. 세바스찬이 얼른 마른 천을 꺼내 들었다.","black"],
    ["시엘","닦지 마. 어차피 저 탁자도 곧 들고 갈 텐데, 뭐.","black"],
    ["세바스찬","이제 집기 목록을 훤히 꿰고 계시는군요.","black"],
    ["시엘","애초에 네 봉급부터 깎았어야 했어.","black"],
    ["세바스찬","송구스럽지만, 저는 아직 단 한 푼도 받은 적이 없습니다.","black"],
    ["","집달리가 저택의 열쇠를 받아 들고 서재 문을 닫았다. 두 사람이 앉아 있던 의자마저 그 뒤를 따라 복도로 실려 나갔다.","black"],
    ["시엘","… 내일 아침엔 대체 어디서 눈을 떠야 하지?","black"],
    ["세바스찬","우선 묵을 숙소부터 알아보겠습니다. 조식은 별도 요금이어도 괜찮으시겠습니까?","black"],
    ["시엘","홍차까지 포함해서 알아봐. 돈 두 번 내는 건 이제 지긋지긋하니까.","black"],
    ["","세바스찬이 빈 장부를 덮었다. 유난히 공손하고 평온한 미소였다.","black"],
    ["세바스찬","역시 인간 아이에게 가문의 경영은 너무 이른 분야였을까요.","broke",{"fx":"fade"}],
    ["시엘","네가 관리를 잘못한 거잖아, 세바스찬!","broke"],
    ["세바스찬","제가 그 케이크를 열일곱 접시나 먹었습니까?","broke"],
    ["시엘","내가 한 입 먹을 때마다 눈치도 없이 새 접시를 내온 게 누군데!","broke"],
    ["","복도로 나갔던 집달리가 도로 문틈으로 고개를 들이밀었다.","broke"],
    ["집달리","그럼 차압 목록에 접시도 열일곱 장으로 적겠습니다.","broke"]
  ]}
};

const londonEndingScenes={
  "merchant": [
    [
      "",
      "새벽안개 속에 템스 강 하역장이 열렸다. 경비가 앞을 막아섰지만 팬텀사의 정식 운송장을 보자 군말 없이 빗장을 풀었다."
    ],
    [
      "창고지기",
      "작은 사장님께서 직접 화물을 보러 납실 줄은 몰랐습니다."
    ],
    [
      "시엘",
      "물건이 아니라 삯을 보러 왔어. 똑같은 상자인데 왜 이 창고에서만 운임이 두 배로 튀지?"
    ],
    [
      "창고지기",
      "그게, 한밤중에 따로 내리는 짐이라……."
    ],
    [
      "시엘",
      "팬텀사가 완구를 밤도둑처럼 야반에 하역하라고 한 적이 있던가?"
    ],
    [
      "",
      "남자가 눈을 피했다. 세바스찬이 운송장 석 장을 가지런히 겹쳐 들었다. 세 장 모두 같은 자리에서 펜촉이 종이를 뚫고 나갔다."
    ],
    [
      "세바스찬",
      "이 필체를 쓰는 분은 몸이 열 개라도 모자라겠군요. 같은 날 런던과 도버 양쪽에 동시에 계셨으니. 이름만 빌려줬거나, 솜씨 좋은 대리인을 두셨나 봅니다."
    ],
    [
      "시엘",
      "그 사람 거래, 내가 통째로 사지. 돈은 지금 여기서 쳐 주겠어."
    ],
    [
      "창고지기",
      "그 양반은 장난감 장사가 아닙니다."
    ],
    [
      "시엘",
      "그러니까 내가 직접 왔잖아."
    ],
    [
      "",
      "금화가 묵직하게 건너가자 금고 밑바닥에서 진짜 선하증권이 나왔다. 팬텀하이브가 불타던 밤, 은밀히 출항한 배의 이름도 거기 박혀 있었다."
    ],
    [
      "시엘",
      "가게는 평소대로 열어 둬. 오늘부터 저 배가 닻을 내리는 항구마다 우리 물건을 깔겠다."
    ],
    [
      "세바스찬",
      "어디까지 납품 구역으로 삼으시겠습니까?"
    ],
    [
      "시엘",
      "놈이 내 돈을 단 한 푼이라도 축내는 곳 끝까지."
    ],
    [
      "",
      "그해 겨울, 런던 부두가에 팬텀사의 새 지점이 문을 열었다. 사장실 벽에는 매출표와 항만 입항표가 나란히 걸렸다."
    ],
    [
      "",
      "시엘은 자를 대고 두 표를 한 줄씩 짚어 내려갔다. 선박의 입항일과 수상한 돈줄이 움직인 날짜가 맞물리는 한 줄에서 자가 딱, 멎었다."
    ],
    [
      "시엘",
      "찾았다. 세바스찬, 다음 배편을 잡아."
    ]
  ],
  "broker": [
    [
      "",
      "이스트엔드의 전당포는 새벽 한 시에도 셔터를 반쯤 치켜올려 두고 있었다. 시엘이 허리를 숙여 들어서자 어둠 속에서 값부터 날아왔다.",
      "vowNoTitle"
    ],
    [
      "정보상",
      "이름 하나에 기니 하나. 외상은 안 받소.",
      "vowNoTitle"
    ],
    [
      "시엘",
      "이름은 이미 셋이나 듣고 왔어. 공교롭게도 셋 다 같은 날 뒈졌더군.",
      "vowNoTitle"
    ],
    [
      "정보상",
      "쯧, 안됐군그래.",
      "vowNoTitle"
    ],
    [
      "시엘",
      "그런데 그 셋의 장례를 죄다 네가 치렀다지? 난 그게 훨씬 구미가 당기는데.",
      "vowNoTitle"
    ],
    [
      "",
      "남자의 손이 계산대 밑으로 쑥 내려갔다. 등 뒤에서 세바스찬이 묵직한 빈 서랍을 통째로 빼 들었다.",
      "vowNoTitle"
    ],
    [
      "세바스찬",
      "찾으시는 물건이라면 제가 조금 전 치워 두었습니다만.",
      "vowNoTitle"
    ],
    [
      "정보상",
      "……대체 어디서 기어나온 놈이지, 꼬마야?",
      "vowNoTitle"
    ],
    [
      "시엘",
      "앞으로도 그게 궁금하면, 내 돈 값어치 하는 물건부터 내놔.",
      "vowNoTitle"
    ],
    [
      "",
      "시엘은 기니 금화 한 닢을 세워 탁자 위로 데구루루 굴렸다. 남자가 투박한 손바닥으로 금화를 턱 덮었다.",
      "vowNoTitle"
    ],
    [
      "정보상",
      "도살장 옛 장부를 봐. 열두 번째 줄. 사람 이름은 없고 짐 무게만 적혀 있을 거요.",
      "vowNoTitle"
    ],
    [
      "시엘",
      "제값은 하는군. 다음번엔 네 진짜 이름도 사 주지.",
      "vowNoTitle"
    ],
    [
      "",
      "그날부터 전당포 창에 불이 켜지면 뒷골목에 수군거림이 돌았다. 값을 깎지 않고 제값을 치르는 외눈의 손님이 온다고.",
      "vowNoTitle"
    ],
    [
      "세바스찬",
      "뒷골목에서 도련님을 뭐라 부르는지 아십니까?",
      "vowNoTitle"
    ],
    [
      "시엘",
      "돈을 뿌렸으면 이름값은 해야지. 오늘은 몇이나 기다려?",
      "vowNoTitle"
    ],
    [
      "세바스찬",
      "셋입니다. 서로 얼굴 붉히지 않도록 전부 다른 문으로 들였습니다.",
      "vowNoTitle"
    ],
    [
      "시엘",
      "좋아. 가장 그럴싸한 거짓말을 짠 놈부터 데려와.",
      "vowNoTitle"
    ]
  ]
};


let endingReplay=null;
function hasEndingRecord(id){
  return Object.hasOwn(endingScenes,id)&&(Object.hasOwn(saves.gallery||{},id)||
    [state,saves.auto,saves[1],saves[2],saves[3]].some(run=>run?.phase==="ending"&&run.ending===id));
}
function endingThumb(id){
  return '<button type="button" class="ending-thumb" data-action="ending-art:'+id+'"><img loading="lazy" src="assets/endings/'+id+'.webp" alt=""><span>'+endingLabels[id][0]+'</span></button>';
}
const endingFarewells={
  tanaka:{
    parting:[
      "도련님, 현관에 외투를 내어 두었습니다.",
      "도련님께서 읽으시던 장부는 펼쳐 두겠습니다. 돌아오셔서 마저 보시지요.",
      "선대께서는 집을 비우실 때 제게 열쇠를 맡기셨지요. 도련님의 열쇠도 제가 간수하겠습니다.",
      "오늘은 세바스찬 말고, 제가 한 잔을 더 올려도 되겠습니까?"
    ],
    mourning:[
      "도련님의 방은 제가 정리하겠습니다.",
      "책에 끼워 두신 표지는 그대로 두십시오. 거기까지 읽으셨습니다.",
      "도련님이 차를 식히시는 버릇까지 선대와 닮았다는 말을 끝내 못 드렸군요.",
      "도련님. 이번에는 제가 돌아오시라는 말씀을 드려도, 대답이 없으시군요."
    ]
  },
  finny:{
    parting:[
      "도련님, 나가시는 길에 정원 흙은 밟으셔도 돼요! 방금 쓸었어요!",
      "도련님 창 아래 심은 꽃, 다음에 피면 제일 먼저 보여 드릴게요!",
      "제가 처음으로 혼자 키운 꽃이에요. 이 한 송이는 도련님 거예요!",
      "제 이름을 불러 주신 날부터 지금까지, 저, 여기서 매일 아침이 기다려졌어요!"
    ],
    mourning:[
      "정원에서 꺾어 왔어요. 도련님 방에 두어도 돼요?",
      "도련님 창 밑에 심은 게 오늘 아침에 폈어요. 한 송이 가져왔어요.",
      "가지를 안 부러뜨리고 옮길 수 있게 됐어요. 도련님한테 보여 드리려고 했는데.",
      "아침에 제 이름을 불러 주실 것 같아서, 오늘도 창문 아래서 한참 기다렸네요."
    ]
  },
  mey:{
    parting:[
      "도련님, 셔츠는 이쪽에 걸어 뒀습니다요! 이번엔 단추도 다 맞췄습니다요!",
      "도련님이 고르신 넥타이는 따로 싸 뒀습니다요. 구겨지면 이 메이드에게 맡겨 주시라요!",
      "제게 맡겨 주신 창문이십니다요. 제가 닦아 둘 테니 돌아오시면 꼭 봐 주세요!",
      "저, 이제 안경을 벗어도 도련님 발소리는 압니다요! 언제 돌아오셔도 제가 먼저 맞을 거예요."
    ],
    mourning:[
      "도련님 셔츠를 다려 뒀습니다요. 어디에 넣어 둘까요?",
      "도련님이 앉으시던 자리는 제가 매일 닦아 두겠습니다요.",
      "커튼은 아직 닫지 말아 주시라요. 도련님 방을 어둡게 두고 싶지 않습니다요.",
      "저 복도에서 구두 소리가 났습니다요. 도련님이 아니란 걸 아는데, 받아들이기가 힘듭니다요."
    ]
  },
  bard:{
    parting:[
      "도련님, 길에서 드시라고 빵을 싸 뒀습니다. 이번 건 안 태웠습니다, 하하하!",
      "돌아오시면 스튜는 제가 데우죠. 그 정도는 할 수 있습니다?",
      "도련님이 오 분 더 기다려 주신 덕에 저번 고기는 잘 됐죠. 예? 태웠냐고요? 아닙니다?!",
      "어느 집 식탁에 앉으셔도 상관없습니다만, 배고플 땐 가만있지 말고 제 부엌부터 찾아오십쇼!"
    ],
    mourning:[
      "……그럼, 앞으로의 일은 어떻게 되는 거야?",
      "이제 억지로 요리할 필요는 없겠지.",
      "게으름을 피워도 이제는 혼내 줄 사람이 없네.",
      "부엌에 자리 하나는 그냥 비워 둘까."
    ]
  },
  snake:{
    parting:[
      "복도에서 우릴 보면 놀라지 마. 마중 나온 거야. ⋯라고 에밀리가 말했어.",
      "늦게 와도 알아. 이제 네 구두 소리는 기억하거든. ⋯라고 오스카가 말했어.",
      "창문은 조금 열어 둘게. 우리가 먼저 네가 오는 걸 알아채게. ⋯라고 와일드가 말했어.",
      "네가 불러 준 이름이 좋았어. 다음에도 스네이크라고 불러 줘. 마이 로드."
    ],
    mourning:[
      "오늘 복도가 너무 조용해. ⋯라고 에밀리가 말했어.",
      "그 구두 소리는 다른 사람하고 헷갈리지 않아. 오늘은 한 번도 못 들었어. ⋯라고 오스카가 말했어.",
      "그래도 창문은 조금 열어 둬. 오늘만은. ⋯라고 와일드가 말했어.",
      "오늘은 내가 말할게. ……네가 지어 준 우리 자리를 잊지 않을 거야."
    ]
  },
  soma:{
    parting:[
      "시엘! 런던에 오거든 내 쪽에도 꼭 들러라!",
      "네가 저번에 고른 차를 사 뒀어! 이번엔 내가 제대로 끓여 볼 거야!",
      "시엘, 네가 바쁜 건 알아. 그래도 네가 차 한 잔 할 시간은 내가 비워 둘 테다.",
      "시엘. 힘들 땐 이 소마 님께 기대 달라고. 나도 그땐 눈치를 봐 줄 테니까."
    ],
    mourning:[
      "시엘한테 한 번 더 놀러 오라고 할걸.",
      "저번에 네가 고른 차, 오늘은 내가 끓이려고 했어, 시엘.",
      "아그니, 시엘 자리는 치우지 말아 줘. 오늘은 내가 거기 앉고 싶어.",
      "시엘, 네가 또 왔으면 이번엔 아무것도 묻지 않고 그냥 옆에 앉아 있었을 텐데."
    ]
  },
  agni:{
    parting:[
      "시엘 님, 길에서 드실 차를 챙겼습니다. 떠나시기 직전에 따라 드리겠습니다.",
      "시엘 님이 앉으시던 자리는 비워 두었습니다. 런던에 오시면 들러 주십시오.",
      "왕자님께 어려운 말씀을 드릴 때면 시엘 님의 조언을 떠올립니다. 덕분에 한결 쉬워졌습니다.",
      "시엘 님, 타운하우스에 편히 돌아오십시오. 기다리는 사람이 둘이나 있습니다."
    ],
    mourning:[
      "시엘 님께 올리던 찻잔을 가져왔습니다. 이쪽에 놓겠습니다.",
      "왕자님께서는 오늘도 두 잔을 부탁하셨습니다. 우유는 따로 놓았습니다.",
      "왕자님께 무슨 말씀을 드릴지, 오늘만은 시엘 님께 여쭙고 싶었습니다.",
      "저희 집 계단에서 시엘 님이 내려오시는 소리를 아직도 기억합니다. 왕자님께서도 그러시겠지요."
    ]
  }
};
function endingFarewellRecord(run){
  return {
    age:campaignAge(run),
    cast:Object.keys(endingFarewells).filter(id=>run.people?.[id]).map(id=>[id,trustTier(run.people[id].toward)])
  };
}
function savedEndingFarewells(id,replay){
  if(!replay||state.phase==="ending"&&state.ending===id)return endingFarewellRecord(state);
  if(saves.farewellGallery?.[id])return saves.farewellGallery[id];
  const run=[saves.auto,saves[1],saves[2],saves[3]].find(r=>r?.phase==="ending"&&r.ending===id);
  if(run)return endingFarewellRecord(run);
  const year=saves.growthGallery?.[id]?.at(-1);
  return year?{age:year.age,cast:(year.cast||[]).filter(id=>Object.hasOwn(endingFarewells,id)).map(id=>[id,0])}:null;
}
function showEndingFarewells(host,id,record,start,onPage,onFinish){
  const mourning=["ill","releaseTitle","releaseNoTitle"].includes(id);
  const room={vowTitle:"garden",vowNoTitle:"street",broke:"office",ill:"bedroom",releaseTitle:"ballroom",releaseNoTitle:"library"}[id];
  host.hidden=false;
  host.dataset.review="false";
  host.innerHTML='<section class="ending-farewells" aria-label="함께한 사람들" data-mourning="'+mourning+'">'+
    '<img class="farewell-backdrop" src="assets/room-'+room+'.webp" alt="">'+
    '<div class="farewell-stage">'+
    (mourning?'':'<img class="farewell-ciel" src="'+cielArt(record.age)+'" alt="시엘">')+
    '<div class="farewell-exchange" aria-live="polite" aria-atomic="true"></div></div>'+
    '<div class="farewell-controls"><button type="button" data-farewell="prev">이전</button>'+
    '<button type="button" data-farewell="auto"></button>'+
    '<button type="button" data-farewell="skip">건너뛰기</button>'+
    '<button type="button" data-farewell="next">다음</button></div></section>';
  const screen=host.querySelector(".ending-farewells"),exchange=screen.querySelector(".farewell-exchange");
  const prev=screen.querySelector('[data-farewell="prev"]'),next=screen.querySelector('[data-farewell="next"]');
  const auto=screen.querySelector('[data-farewell="auto"]');
  let at=Math.min(start,record.cast.length-1),elapsed=0,lastTime=0,hold=0,finished=false;
  let paused=document.documentElement.dataset.gameMotion==="reduced"||matchMedia("(prefers-reduced-motion: reduce)").matches;
  function label(){
    auto.textContent=paused?"자동 재생":"일시정지";
    auto.setAttribute("aria-pressed",String(!paused));
  }
  function draw(){
    const [person,tier]=record.cast[at];
    const name=servants[person].name;
    const line=endingFarewells[person][mourning?"mourning":"parting"][tier];
    exchange.innerHTML='<img class="farewell-person" src="'+portraits[name]+'" alt="">'+
      '<div class="farewell-bubble"><strong>'+name+'</strong><p>'+escapeHTML(line)+'</p></div>';
    prev.disabled=at===0;
    next.textContent=at===record.cast.length-1?"마치기":"다음";
    hold=Math.min(6500,3300+line.length*47);
    elapsed=0;
  }
  function finish(){
    if(finished)return;
    finished=true;
    onFinish();
  }
  function step(direction){
    const page=at+direction;
    if(page>=record.cast.length){finish();return;}
    if(page<0)return;
    at=page;
    onPage(at);
    draw();
  }
  function frame(now){
    if(finished||!screen.isConnected)return;
    if(!paused&&!document.hidden&&lastTime){
      elapsed+=Math.min(80,now-lastTime);
      if(elapsed>=hold)step(1);
    }
    lastTime=now;
    if(!finished)requestAnimationFrame(frame);
  }
  screen.querySelector('[data-farewell="skip"]').onclick=finish;
  prev.onclick=()=>step(-1);
  next.onclick=()=>step(1);
  auto.onclick=()=>{paused=!paused;label();};
  screen.addEventListener("keydown",event=>{
    if(event.altKey||event.ctrlKey||event.metaKey||event.repeat||!["ArrowLeft","ArrowRight"].includes(event.key))return;
    event.preventDefault();
    event.stopPropagation();
    step(event.key==="ArrowLeft"?-1:1);
  });
  draw();
  label();
  requestAnimationFrame(frame);
}
function growthRecord(run){
  const years=new Map();
  function yearFor(month){
    const date=calendarDate(month),year=date.getUTCFullYear();
    if(!years.has(year))years.set(year,{year,plans:new Map(),entries:[]});
    return years.get(year);
  }
  yearFor(1);
  for(const entry of run.past||[]){
    if(!Number.isInteger(entry.month))continue;
    const group=yearFor(entry.month);
    for(const id of entry.plan||[]){
      const name=actions[id]?.name;
      if(name)group.plans.set(name,(group.plans.get(name)||0)+1);
    }
  }
  for(const entry of run.events||[]){
    const event=events.find(item=>item.id===entry.id);
    if(event&&Number.isInteger(entry.month))yearFor(entry.month).entries.push({month:entry.month,title:event.title});
  }
  const record=[...years.values()].sort((a,b)=>a.year-b.year).map(group=>({
    year:group.year,age:group.year-1876,
    plans:[...group.plans].sort((a,b)=>b[1]-a[1]).slice(0,3).map(([name])=>name),
    entries:group.entries.sort((a,b)=>a.month-b.month)
  }));
  if(run.ending==="vowTitle" && stats.every(key=>run.stats[key]===abilityMax))record.at(-1).allMastered=true;
  return record;
}
function savedGrowthRecord(id,replay){
  if(!replay||state.phase==="ending"&&state.ending===id)return growthRecord(state);
  if(saves.growthGallery?.[id])return saves.growthGallery[id];
  const run=[saves.auto,saves[1],saves[2],saves[3]].find(r=>r?.phase==="ending"&&r.ending===id);
  return run?growthRecord(run):null;
}
function showGrowthCredits(host,years,onFinish){
  host.hidden=false;host.dataset.review="false";
  host.innerHTML='<section class="growth-credits" aria-label="시엘의 성장 기록"><img class="growth-backdrop" src="assets/endings/vowTitle.webp" alt=""><div class="growth-window" tabindex="0"><div class="growth-roll"><header><h2>시엘의 성장 기록</h2></header></div></div><footer><button type="button" class="growth-toggle"></button><button type="button" class="growth-end">마치기</button></footer></section>';
  const windowEl=host.querySelector(".growth-window"),roll=host.querySelector(".growth-roll");
  function add(parent,tag,value){
    const el=document.createElement(tag);el.textContent=value;parent.append(el);return el;
  }
  for(const {year,age,plans,entries} of years){
    const section=add(roll,"section","");
    const portrait=document.createElement("img");
    portrait.src=cielArt(age);portrait.alt="";section.append(portrait);
    add(section,"h3",year+"년");
    if(plans.length)add(section,"p","주요 일정　"+plans.join(" · "));
    for(const entry of entries){
      const row=add(section,"div","");row.className="growth-entry";
      add(row,"small",(calendarDate(entry.month).getUTCMonth()+1)+"월");add(row,"span",entry.title);
    }
  }
  if(years.at(-1)?.allMastered){
    const section=add(roll,"section","");
    add(section,"h3","일곱 과목 만점");
    add(section,"p","세바스찬은 마지막 성적표의 일곱 칸에 차례로 서명했다.");
    add(section,"p","“그래서, 내일부터는 수업이 없나?”");
    add(section,"p","“도련님께서 그렇게 말씀하실 줄 알고 다음 교본을 준비해 두었습니다.”");
  }
  add(roll,"p","끝").className="growth-fin";
  const toggle=host.querySelector(".growth-toggle");
  let paused=document.documentElement.dataset.gameMotion==="reduced"||matchMedia("(prefers-reduced-motion: reduce)").matches,lastTime=0,fraction=0,finished=false;
  function label(){toggle.textContent=paused?"자동 재생":"일시정지";}
  function finish(){if(finished||!roll.isConnected)return;finished=true;onFinish();}
  function frame(now){
    if(finished||!roll.isConnected)return;
    if(!paused&&!document.hidden&&lastTime){
      fraction+=Math.min(100,now-lastTime)*0.027;
      const pixels=Math.floor(fraction);fraction-=pixels;windowEl.scrollTop+=pixels;
      if(windowEl.scrollTop+windowEl.clientHeight>=windowEl.scrollHeight-1){finish();return;}
    }
    lastTime=now;requestAnimationFrame(frame);
  }
  toggle.onclick=()=>{paused=!paused;label();};
  windowEl.addEventListener("wheel",()=>{paused=true;label();},{passive:true});
  windowEl.addEventListener("touchstart",()=>{paused=true;label();},{passive:true});
  host.querySelector(".growth-end").onclick=finish;
  label();requestAnimationFrame(frame);
}
function showEndingScene(host){
  const replay=tab==="endingMemory"?endingReplay:null;
  const live=tab==="plan"&&state.phase==="ending"&&Number.isInteger(state.endingBeat);
  if(!replay&&!live)return false;
  const id=replay?replay.id:state.ending,scene=endingScenes[id];
  if(!scene)return false;
  function finishScene(){
    if(replay){endingReplay=null;tab=replay.origin;}
    else {delete state.growthCredits;delete state.endingFarewell;delete state.endingBeat;persist();}
    render(true);
  }
  function afterFarewells(){
    if(id!=="vowTitle"||!savedGrowthRecord(id,replay)){finishScene();return;}
    if(replay){delete replay.farewell;replay.credits=true;}
    else {delete state.endingFarewell;state.growthCredits=true;persist();}
    render(true);
  }
  const farewellAt=replay?replay.farewell:state.endingFarewell;
  if(Number.isInteger(farewellAt)){
    const record=savedEndingFarewells(id,replay);
    if(!record?.cast.length){afterFarewells();return true;}
    showEndingFarewells(host,id,record,farewellAt,at=>{
      if(replay)replay.farewell=at;else {state.endingFarewell=at;persist();}
    },afterFarewells);
    return true;
  }
  if(id==="vowTitle"&&(replay?replay.credits:state.growthCredits)){
    showGrowthCredits(host,savedGrowthRecord(id,replay)||[],finishScene);return true;
  }
  const end=scene.lines.length-1,at=Math.min(end,Math.max(0,replay?replay.at:state.endingBeat));
  // The last act of this ending follows the career earned in the finished run.
  const route=id==="vowNoTitle"?(replay&&!(state.phase==="ending"&&state.ending===id)
    ?saves.londonCareer:londonCareer(state)):null;
  const act=londonEndingScenes[route];
  const [who,line,legacyPicture,cue]=act&&at>=scene.lines.length-act.length
    ?act[at-(scene.lines.length-act.length)]:scene.lines[at];
  const last=at===end;
  const routeAct=Boolean(act && at>=scene.lines.length-act.length);
  const story=routeAct && !cue?.cg && !last;
  const endingPicture=last&&routeAct?id:legacyPicture||id;
  const room=route==="broker"?"street":"library";
  const picture=cue?.cg || (story?"room-"+room:endingPicture);
  const castCue=story&&!cue?.hideCast&&!cue?.left&&!cue?.right
    ? {...cue,left:who==="세바스찬"?"seb":undefined,right:who==="시엘"?"ciel":undefined}:cue;
  clearTimeout(recruitTimer);if(last)stopRecruitAuto();
  const arrow='<button type="button" class="line-next" data-read="'+(last?'finish':'next')+'" aria-label="'+(last?'장면 마치기':'다음 대사')+'">▼</button>';
  host.hidden=false;host.dataset.review="false";
  const existing=host.querySelector(".ending-cg");
  const art=existing?.dataset.ending===id?existing:document.createElement("img");
  if(art!==existing){
    art.className="ending-cg";art.dataset.ending=id;
  }
  if(!story)rememberCG("assets/endings/"+picture+".webp");
  if(art.dataset.picture!==picture){
    art.dataset.picture=picture;art.src=(story?"assets/":"assets/endings/")+picture+".webp";art.alt=story?"":endingArtDescriptions[picture]||scene.alt;
  }
  host.replaceChildren(art);
  host.insertAdjacentHTML("beforeend",(novelCast(castCue,recruitArtwork(currentCielAge()))??"")+sceneLine(who,line,arrow,'data-book="ending-'+id+'" aria-live="polite" aria-atomic="true"')+readerControls(at,last,recruitAuto));
  playNovelCue(host,"ending:"+id+":"+at,cue);
  musicPlayer.sync(trackForView());
  bindSceneReader(host,at,end,line,to=>{
    if(replay)replay.at=to;else {state.endingBeat=to;persist();}
    showEndingScene(host);host.querySelector(".line-next").focus({preventScroll:true});
  },()=>{
    stopRecruitAuto();
    if(!savedEndingFarewells(id,replay)?.cast.length){afterFarewells();return;}
    if(replay)replay.farewell=0;else {state.endingFarewell=0;persist();}
    render(true);
  },cue?.wait);
  return true;
}
