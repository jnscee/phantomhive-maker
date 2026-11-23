"use strict";
const portraits={라우:"assets/npc-lau.webp",세바스찬:"assets/sebastian.webp",타나카:"assets/npc-tanaka.webp",피니안:"assets/npc-finny.webp",메이린:"assets/npc-mey.webp",바르도:"assets/npc-bard.webp",스네이크:"assets/npc-snake.webp",소마:"assets/portraits/soma.webp",아그니:"assets/portraits/agni.webp",get 엘리자베스(){const age=elizabethAge();return age===13?"assets/npc-lizzy.webp":"assets/npc-lizzy-"+age+".webp";},get 시엘(){return cielArt(currentCielAge());}};
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
 ["일정표","왼쪽 아래 ‘일정표’에 상순·중순·하순 세 칸을 마련했습니다. 쉬고 나면 다음 수업에 집중하기 쉽습니다. 수업을 거듭하거나 실력이 충분히 자라면 제가 시험을 내겠습니다. 바꾸실 칸을 먼저 짚고 활동을 고르시면 제가 적겠습니다. £ 옆의 숫자가 그 비용입니다."],
 ["자유행동","‘자유행동’은 도련님의 외출을 위해 비워 둔 칸입니다. 한 달에 한 곳을 정하실 수 있습니다. 누구와 무슨 이야기를 나누실지는 도착한 뒤에 정하셔도 됩니다."],
 ["팬텀사","‘관리 · 경영’에서 ‘팬텀 사(社)’를 여십시오. 개발실에서는 상품을, 제작실에서는 수량을, 판매점에서는 값을 정하시면 됩니다. 수업료가 모자라겠다면 이번 생산량을 조금 줄이는 편이 좋겠습니다."],
 ["저택","‘관리 · 경영’의 지도에서 방을 짚으시면 시설과 근무지를 살필 수 있습니다. 개수를 명하시기 전에 비용과 이달의 관리 상태를 보십시오. 간식이 필요하시면 저택 메뉴의 ‘상점’으로 모시겠습니다."],
 ["실행","명하신 대로 준비했습니다. 저택의 ‘실행’이나 일정표의 ‘이달 일정 실행’을 고르시면 상순부터 시작하겠습니다. 매 순의 성과는 제가 보고드리겠습니다. 하순 강평 뒤에는 정해 두신 곳을 방문하고, 돌아오시면 결산을 보고드리겠습니다."],
 ["대화와 상태","저택에서 ‘대화’로 부르시면 제가 듣겠습니다. ‘상태’에서는 도련님의 건강과 능력을 보실 수 있습니다. 피곤하시면 다음 한 순은 비워 둘까요?"],
 ["가문 장부와 수첩","지나간 사건은 아래의 ‘가문 장부’에 적어 두었습니다. ‘수첩 · 저장’에서는 저장 칸과 음량을 고르실 수 있습니다. 음악만 잠시 끄시려면 BGM 버튼을, 돌아가시려면 ‘뒤로’를 눌러 주십시오."]
];
function guideMenu(page){
  const subjects=[[],["일정표"],["일정표"],["관리 · 경영"],["관리 · 경영","상점"],["실행"],["대화","상태"],[]][page];
  if(!subjects.length)return "";
  return '<span class="guide-menu" aria-label="저택 메뉴 위치">'+commands.map(([,label])=>
    '<span class="'+(subjects.includes(label)?"current":"")+'">'+label+'</span>').join("")+'</span>';
}
function instructionBook(){
 const paths=["오늘 날짜 · 진행 개월 · 보유금","상·중·하순 선택 → 활동 카드","자유행동 → 방문 장소","상품 개발 → 생산량 → 판매가","시설 선택 → 개수 또는 사용인 배치","상순 → 중순 → 하순 → 자유행동(선택) → 월말 결산","화제 선택 · 건강과 능력 확인","사건 기록 · 회차 저장"];
 return '<details class="notebook-guide"><summary>세바스찬의 조작 안내</summary>'+btn("처음부터 다시 보기","open-guide")+guide.map(([title,body],i)=>
   '<details class="guide-topic"><summary><b>'+title+'</b><small>'+paths[i]+'</small></summary><p>'+body+'</p></details>').join("")+'</details>';
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
 tanaka:["찾으시는 해의 장부를 꺼내 두었습니다. 끈이 낡았으니 제가 풀어 드리지요.","요즘은 늘 그 권부터 펴시는군요. 오늘은 책상에 올려 두었습니다.","여기서 필체가 달라지지요. 제 짐작을 말씀드리기 전에 도련님 눈에는 어찌 보이는지 듣고 싶습니다.","이 귀퉁이의 연필 자국은 접니다. 그날 차마 잉크로 쓰지 못한 이름인데…… 오늘은 말씀드릴 수 있겠군요."],
 finny:["도련님, 바닥이 젖었어요. 제가 먼저 지나가 볼게요!","또 와 주셨어요! 오늘은 도련님 구두에 흙 안 튀게 물부터 줬어요.","가지를 이쪽으로 유인할까요? 전 이 문으로 들어올 때 꽃이 보였으면 좋겠는데, 도련님은요?","처음엔 손 댄 걸 들킬까 봐 부러진 가지를 숨겼어요. 이건 제가 부러뜨린 거예요. 그런데 보세요. 붙여 놓은 데서 잎이 났어요!"],
 mey:["리넨은 이쪽입니다요, 도련님. 잠깐만요, 안경부터 바로 쓰고요!","오실 줄 알고 도련님 셔츠는 따로 걸어 뒀습니다요. 단추도 세 봤고요!","해 질 무렵이면 저 창에 맞은편 지붕이 비칩니다요. 커튼은 제가 닫을까요, 조금 더 볼까요?","이 방에선 안경을 벗고 있어도 마음이 놓입니다요. 도련님 발소리는 이제 헷갈릴 일이 없거든요."],
 bard:["오븐은 제가 보겠습니다. 도련님은 문에서 조금만 물러서 주시죠.","오늘은 탄 데부터 잘라 낼 필요가 없습니다. 끝 쪽 한 조각 드시겠습니까?","이 고기, 지금 썰면 육즙이 다 빠집니다. 손님이 재촉해도 오 분만 더 벌어 주시겠습니까?","옛날 버릇이라 식탁에 앉아도 문부터 보게 됩니다. 도련님이 맞은편에 계신 날엔 그냥 먹습니다만."],
 snake:["방금 복도를 지나간 건 우리 애들이야. 놀라지 마. ⋯라고 에밀리가 말했어.","발소리만 듣고도 맞혔어. 오늘도 그 구두네. ⋯라고 오스카가 말했어.","서쪽 창을 조금만 열어 둘까? 누가 오는지 우리가 먼저 알 수 있어. ⋯라고 와일드가 말했어.","오늘 밤엔 우리랑 한 바퀴 돌자. 온실 지붕에 달이 걸리는 걸 너한테도 보여 주고 싶어. ⋯라고 에밀리가 말했어."],
 soma:["시엘! 여기 앉아. 오늘은 내가 차 골라 줄게!","시엘, 네 자리 비워 뒀어. 저번에 햇빛 때문에 눈 찡그렸잖아. 여긴 어때?","한 모금 마셔 봐. 난 이게 좋은데 넌 어때? 다음엔 네가 고른 걸로 마시자.","오늘은 그냥 여기 좀 더 있다 가. 너랑 있으면 말 안 하고 앉아 있어도 좋더라."],
 agni:["어서 오십시오, 시엘 님. 전하께서 곧 내려오십니다.","오늘도 창가에 두 잔 놓았습니다. 시엘 님은 우유를 따로 드렸습니다.","전하께 드릴 말씀인데 제가 꺼내면 먼저 걱정하실 겁니다. 시엘 님이라면 어떻게 운을 떼시겠습니까?","처음 이 집에서 아침상을 차리던 날엔 손이 떨렸습니다. 전하께는 비밀로 해 주시겠습니까? 오늘은 웃으며 말씀드릴 수 있군요."]
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
     return staged(speaker,"",line,btn(seq.index===0?"상순으로":"월말 결산으로","visit-finish"),"방문 기록",room,seq.encounterPartner);
   }
   const changes=visitChanges();
   return staged(seq.visitReply?seq.replySpeaker:visitName(visitPerson(id)),"",seq.visitReply || changes.join(" · ")||"더 변한 수치는 없습니다.",
     btn(seq.index===0?"상순으로":"월말 결산으로","visit-finish"),visits[id]+" · 자유행동 결과",room);
 }
 const person=visitPerson(id);
 const memory=visitMemory(id,person);
 const line=memory?.line || (person?trustedGreetings[person][trustTier(state.people[person].toward)]:plain);
 return staged(visitName(person),"",line,btn(label,"visit-done:engage")+btn("잠시 머물다 돌아간다","visit-done:quiet"),"",room);
}
function visitDone(engage){
 if(state.phase!=="visit"||state.sequence.visitBefore||state.visitTurn===state.month)return;
 const id=state.visit,seq=state.sequence;
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
 flagEvent(event.id,choice.effect);
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
 if(month===1)data=["가문의 신년 다과회","세바스찬","첫 손님의 마차가 도착했습니다. 도련님께서 문 앞에서 맞으시겠습니까?","손님에게 새해 인사를 한다","기품","가문의 올해 계획을 전한다","경영","가문 연례행사 · IF"];
 if(month===4)data=["엘리자베스의 부활절 달걀 찾기","엘리자베스","시엘, 마지막 달걀만 남았어! 내가 숨긴 곳이니까, 이번엔 네가 찾아야 해.","리본에 묻은 흙을 살핀다","통찰","엘리자베스와 함께 찾는다","매력","원작 14권 66화 모티프 · 시점 재구성"];
 if(month===9)data=["영지의 수확 감사제","세바스찬","교회 현관에 빵과 채소를 놓을 자리를 비워 두었습니다. 올해는 도련님께서 첫 바구니를 맡으시지요.","주민에게 빵을 나눈다","매력","수확 장부를 검토한다","경영","빅토리아 시대 수확 감사 관습 · 가문 참여 IF"];
 if(!data)continue;
 const [title,speaker,text,a,ka,b,kb,source]=data;
 out.push({id:"season-"+m,title,speaker,text,source,season:true,sees:s=>s.month===m,choices:[choice(a,ka+" +4",()=>changeStat(ka,4)),choice(b,kb+" +4",()=>changeStat(kb,4))]});
 }
 return out;
}
function foundationEvents(){return [{id:"homecoming",chapter:true,household:true,speaker:"타나카",title:recruitScenes.homecoming.title,text:"서재로 돌아온 타나카가 그날의 일을 이야기하고 세바스찬에게 집사장의 회중시계를 건넨다.",sees:tanakaReturns,choices:[
 choice("서재 열쇠를 돌려준다","타나카 복귀 · 서재 근무",()=>{recruit("tanaka");state.staff="library";}),
 choice("먼저 다과를 함께한다","타나카 복귀 · 신뢰 상승",()=>{recruit("tanaka");state.staff="library";talkTrust("tanaka",2);})]},
 {id:"unasked",speaker:"세바스찬",title:"명령보다 한 박자 먼저",text:"시엘이 손을 내밀자 장갑이 이미 그 위에 놓였다. “아직 부르지 않았는데.” 세바스찬은 반대쪽 장갑의 단추를 풀었다. “다시 벗겨 드릴까요?”",sees:s=>s.month>=4&&(s.flags.attention||0)>=3,choices:[choice("말없이 다음 장갑을 건넨다","둘만의 아침 습관 기록",()=>{state.flags.morningGloves=true;}),choice("도련님의 대답을 기다린다","의지 +15",()=>changeStat("의지",15))]}];}
function sourceNote(e){return e.source||({jubilee:"1887년 6월 빅토리아 여왕 즉위 50주년 · 가문 참여 IF",match:"1888년 런던 성냥공장 파업 · 회사 대응 IF",circus:"런던 타운하우스 · 소마와 아그니가 맞이한 방문객",visitPrince:"런던 타운하우스 보유 · 바르도, 피니안, 메이린 합류 후",gardener:"원작 연구소 탈출 · 첫 만남과 명명 / 게임 달력에 배치",maid:"원작 30권 · 올빼미에게 건넨 고용 제안 / 피니안 합류 뒤 월말 추첨",cook:"원작의 서재 면담 · 메이린 합류 뒤 게임 달력에 배치",homecoming:"원작 회중시계 계승 장면 · 저택 복귀일의 서재로 각색"}[e.id])||"";}
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
function facilityLedger(){
 const levels={...state.annex,...state.level},h=houseValues();
 return '<details class="annexes"><summary>시설별 유지비와 상태</summary>'+Object.entries(levels).map(([k,n])=>{
 const f=facilities[k]||annex[k],cost=facilities[k]?n*4:(n-1)*2;
 const condition=cap(h.시설상태+3*(n-1));
 return '<div class="annex-line"><div><b>'+f.name+' · '+n+'단계</b><small>'+f.desc+'</small></div><div>월 £'+cost+'<br>상태 '+condition+'</div></div>';
 }).join("")+'<p>공통 관리비 £36에 시설비를 합하고 경비 절감액을 반영합니다.</p></details>';
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

const endingArtDescriptions={"royal-monologue":"회랑에서 시엘의 뒷모습을 지켜보는 세바스찬","royal-gates":"낮의 버킹엄궁 정문","royal-doorway":"녹색 앞방에서 식장을 바라보는 마담 레드와 세바스찬","royal-reply":"창가에서 안대에 손을 올리는 시엘","royal-letter":"나무 책상 위에 놓인 여왕의 봉서와 편지칼","royal-dress":"거울 앞에서 시엘의 안대를 매는 세바스찬","royal-investiture":"무릎 꿇은 시엘의 어깨에 경식을 거는 여왕","royal-gallery":"창으로 빛이 드는 회랑에 선 두 사람","royal-oath":"계약인을 드러내고 명령을 내리는 시엘","vowTitle":"시엘 앞에 무릎을 꿇고 고개를 숙인 세바스찬","letter": "은쟁반 위에 놓인 왕실 서신", "dress": "거울 앞에서 알현복을 갖춰 입는 시엘", "court": "왕실에서 작위를 돌려받는 시엘", "command": "시엘의 명을 받아 무릎을 꿇는 세바스찬", "carriage": "겨울 역 앞에 세워 둔 검은 마차", "gloves": "서재 책상에 남겨진 흰 장갑", "key": "저택 열쇠를 건네는 시엘", "butler": "긴 복도에 서서 시엘의 대답을 기다리는 세바스찬", "departure": "달리는 마차 안에서 약도를 접는 시엘과 대답을 기다리는 세바스찬"};
const endingScenes={
  vowTitle:{alt:"시엘 앞에 한쪽 무릎을 꿇은 세바스찬.",lines:[
    ["세바스찬","도련님, 편지가 왔습니다.","royal-letter"],
    ["세바스찬","이거…","royal-letter"],
    ["세바스찬","서둘러 알현복을 준비해야겠습니다.","royal-letter"],
    ["왕실 서신","시엘 팬텀하이브 경에게.","royal-letter"],
    ["왕실 서신","먼저, 가족의 죽음을 진심으로 애도합니다. 그리고 그대의 무사함을 신께 감사드립니다.","royal-letter"],
    ["왕실 서신","영주가 없는 관계로 왕가에 일시적으로 반환되었던 영지와 작위를 그대에게 반환하고자 합니다.","royal-letter"],
    ["왕실 서신","3월 17일 오전 10시 버킹엄궁전에서 특별 서훈식을 엽니다.","royal-letter"],
    ["왕실 서신","그대와의 만남을 기대합니다.","royal-letter"],
    ["왕실 서신","빅토리아","royal-letter"],
    ["","……",null,{"fx":"fade","hideCast":true}],
    ["세바스찬","후훗.","royal-dress"],
    ["세바스찬","잘 어울리십니다, 도련님.","royal-dress"],
    ["시엘","하.","royal-dress"],
    ["시엘","아첨하는 것도 집사다워졌군.","royal-dress"],
    ["세바스찬","황송합니다.","royal-dress"],
    ["세바스찬","하지만 거짓말이 아닙니다.","royal-dress"],
    ["시엘","흥.","royal-dress"],
    ["시엘","가자, 세바스찬!","royal-gates",{"fx":"fade"}],
    ["귀빈","저 어린 나이에 왜 훈장을?","royal-investiture"],
    ["귀빈","아무리 명문 백작가라지만…","royal-investiture"],
    ["빅토리아","어서 와요, 팬텀하이브 백작.","royal-investiture"],
    ["빅토리아","그대의 귀환을 환영합니다.","royal-investiture"],
    ["마담 레드","더 가까이에서 보면 좋았을 텐데.","royal-doorway"],
    ["마담 레드","당신은 이제 시엘에게 가족이나 다름없어.","royal-doorway"],
    ["세바스찬","가족이라뇨. 당치 않습니다.","royal-doorway"],
    ["세바스찬","저는—","royal-doorway"],
    ["세바스찬","어디까지나,","royal-doorway"],
    ["세바스찬","집사입니다.","royal-doorway"],
    ["","……","royal-gallery",{"fx":"fade","hideCast":true}],
    ["세바스찬","이제 당신은 정식으로 백작이 되었습니다.","royal-gallery"],
    ["세바스찬","지위도 재산도 아름다운 약혼자도 전부 당신 것입니다.","royal-gallery"],
    ["세바스찬","어떻습니까?","royal-gallery"],
    ["세바스찬","복수 같은 어리석은 짓은 그만두고 이대로 행복하게 살아가는 것은?","royal-gallery"],
    ["시엘","……","royal-reply"],
    ["시엘","그것도 나쁘지 않지….","royal-reply"],
    ["시엘","하지만,","royal-reply"],
    ["시엘","나는 행복을 얻기 위해 ‘여기’로 돌아온 게 아니야.","royal-reply"],
    ["시엘","나는 싸우기 위해 돌아왔어.","royal-reply"],
    ["시엘","시엘 팬텀하이브 백작이라는 이름을 짊어진 이상, 앞으로 나아가는 수밖에 없어.","royal-reply"],
    ["시엘","나의 악한 이름에 걸고 반드시 복수를 하고 말 거야!","royal-reply"],
    ["세바스찬 · 독백","아아.","royal-monologue"],
    ["세바스찬 · 독백","한 치의 망설임도 없이 빛을 등지고,","royal-monologue"],
    ["세바스찬 · 독백","기품 있는 걸음걸이로 나락으로 돌진하는 그 모습은…","royal-monologue"],
    ["세바스찬 · 독백","얼마나 아름답고 어리석은가.","royal-monologue"],
    ["시엘","명령이다, 세바스찬.","royal-oath"],
    ["시엘","너는 나의 검이 되고 방패가 되어…","royal-oath"],
    ["시엘","나에게 승리를!","royal-oath"],
    ["세바스찬","예스, 마이 로드.","vowTitle"]
  ]},
  vowNoTitle:{alt:"비에 젖은 골목에서 시엘이 문장 없는 마차에 발을 올린다.",lines:[
    ["세바스찬","왕실에서 회신이 왔습니다. 배달인은 회신을 기다리지 않고 떠났습니다.","letter"],
    ["시엘","그 편지, 탁자에 둬.","letter"],
    ["왕실 서신","작위의 환부는 차기 심의까지 보류합니다. 제출된 서류는 왕실에서 보관하겠습니다.","letter"],
    ["시엘","차기 심의가 언제라고 적혀 있지?","letter"],
    ["세바스찬","날짜를 적는 자리가 비었습니다.","letter"],
    ["시엘","……거기부터 봤어야 했는데.","letter"],
    ["","시엘은 편지를 구기지 않았다. 첫 장부 맨 뒤에 반듯하게 접어 넣었다.","letter"],
    ["세바스찬","장부는 여기 두시겠습니까?","letter"],
    ["시엘","그래. 들고 갈 건 따로 있어.","letter"],
    ["","되돌아온 서류에 모래가 조금 남아 있었다. 봉투를 기울이자 검은 낟알 셋이 굴러 나왔다.","letter"],
    ["시엘","이건 누가 묻혔지?","letter"],
    ["세바스찬","저쪽에서 글을 말릴 때 쓴 모래일 겁니다.","letter"],
    ["세바스찬","답안은 일찌감치 써 두고 날짜만 오늘 넣었군요.","letter"],
    ["시엘","날 만나지 않고 내린 결정이란 말이지. 좋아. 이번엔 사람 얼굴을 보고 묻겠어.","letter"],
    ["세바스찬","소개장이 필요하실 텐데요.","letter"],
    ["시엘","저 종이를 가져가. 내가 문전박대당한 걸 보여 주면, 반가워할 사람이 한 명쯤은 있을 테니까.","letter"],
    ["","책상 위 지도에는 항구, 여관 두 곳, 폐쇄된 역의 옛 이름이 적혀 있었다.","gloves"],
    ["세바스찬","이 기록은 왕실의 열람 허가를 받아야 이어 볼 수 있습니다.","gloves"],
    ["시엘","그렇다면 기록을 쓴 사람에게 묻지.","gloves"],
    ["세바스찬","그 사람은 피신 중입니다.","gloves"],
    ["시엘","그러니까 세 군데나 표시했잖아.","gloves"],
    ["세바스찬","마지막 장소에 닿을 즈음이면 해가 지겠습니다.","gloves"],
    ["시엘","해가 질 때까지 밖에 있으면 되는 일이야. 등도 준비해.","gloves"],
    ["세바스찬 · 독백","어린 주인이 지도를 접는 법을 배운 건 첫겨울이었다. 이제는 등불 한 자루까지 셈에 넣는다.","gloves"],
    ["","시엘은 책상 밑 서랍을 열었다. 맨 아래 깔아 둔 오래된 여비 봉투에서 기차표 반쪽이 나왔다.","key"],
    ["세바스찬","조사 첫날에 사신 겁니다. 그날은 시간이 늦어 역 밖에도 못 나가셨지요.","key"],
    ["시엘","차표 뒤에 뭐라고 썼는지 읽어 봐.","key"],
    ["세바스찬","‘역무원은 밤 열한 시에 교대.’ 직접 적으셨군요.","key"],
    ["시엘","사람이 사라지면 주소는 소용없어. 그래도 그 사람이 하던 일은 누군가 이어받지.","key"],
    ["세바스찬","그럼 첫 여관보다 역이 먼저겠습니까?","key"],
    ["시엘","응. 가는 동안 시계도 맞춰 둬. 이번엔 교대 전에 닿아야 해.","key"],
    ["","시엘은 반쪽짜리 표를 조끼 주머니에 넣었다. 영지를 돌려달라는 탄원서는 책상에 남겼다.","key"],
    ["","막차가 빠져나간 플랫폼에는 빗물이 고여 있었다. 시엘이 내민 표를 보고 역무원이 등불을 들었다.","vowNoTitle"],
    ["역무원","도련님, 이걸로는 못 타요. 날짜가 몇 년 전인데.","vowNoTitle"],
    ["시엘","알아. 뒤에 적힌 글씨를 보라는 거야.","vowNoTitle"],
    ["역무원","……누가 이걸 줬지?","vowNoTitle"],
    ["시엘","그날 밤 누구한테 개찰을 맡기고 자리를 떴어?","vowNoTitle"],
    ["","남자가 등불을 내렸다. 뒤로 물러서던 구두 굽이 승강장 끝에 걸렸다. 흰 장갑이 그의 팔꿈치를 붙들었다.","vowNoTitle"],
    ["세바스찬","조심하시지요. 저희 주인께서 아직 답을 못 들으셔서요.","vowNoTitle"],
    ["역무원","키가 작은 남자였어. 왼쪽 엄지가 없었고. 난 그거밖에 몰라.","vowNoTitle"],
    ["시엘","검표 가위는 어느 손으로 쥐었지?","vowNoTitle"],
    ["역무원","오른손. 가위를 쓰질 못해서 표를 반만 찢었어.","vowNoTitle"],
    ["","시엘은 주머니에서 남은 반쪽을 만졌다. 종이가 뜯긴 자리가 손끝에 걸렸다.","vowNoTitle"],
    ["시엘","됐어. 그 사람을 다시 보면 여기로 알려.","vowNoTitle"],
    ["역무원","이름은 뭘로 써요? 백작님 앞으로?","vowNoTitle"],
    ["시엘","시엘 팬텀하이브. 그거면 돼.","vowNoTitle"],
    ["","마차가 출발하자 시엘이 안에서 창을 두드렸다.","vowNoTitle"],
    ["시엘","세바스찬, 인쇄소부터 들러. 이 표가 어느 역에서 팔렸는지 알아야겠어.","vowNoTitle"],
    ["세바스찬","예스, 마이 로드.","vowNoTitle"]
  ]},
  releaseTitle:{alt:"서훈식 뒤 시엘이 안대를 건네고 세바스찬이 그의 영혼을 거둔다.",lines:[
    ["세바스찬","도련님, 편지가 왔습니다.","royal-letter"],
    ["세바스찬","이거…","royal-letter"],
    ["세바스찬","서둘러 알현복을 준비해야겠습니다.","royal-letter"],
    ["왕실 서신","시엘 팬텀하이브 경에게.","royal-letter"],
    ["왕실 서신","먼저, 가족의 죽음을 진심으로 애도합니다. 그리고 그대의 무사함을 신께 감사드립니다.","royal-letter"],
    ["왕실 서신","영주가 없는 관계로 왕가에 일시적으로 반환되었던 영지와 작위를 그대에게 반환하고자 합니다.","royal-letter"],
    ["왕실 서신","3월 17일 오전 10시 버킹엄궁전에서 특별 서훈식을 엽니다.","royal-letter"],
    ["왕실 서신","그대와의 만남을 기대합니다.","royal-letter"],
    ["왕실 서신","빅토리아","royal-letter"],
    ["세바스찬","아직 아프십니까?","royal-dress"],
    ["시엘","…아니.","royal-dress"],
    ["시엘","통증보다도 타는 듯한 분노가 떠올라.","royal-dress"],
    ["세바스찬","당신께 새겨 넣은 것은 지워지지 않는 분노…라는 뜻입니까?","royal-dress"],
    ["세바스찬","후훗.","royal-dress"],
    ["세바스찬","그렇게 생각하면 이 추한 흉터도 나쁘지 않군요.","royal-dress"],
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
    ["세바스찬","집사입니다.","royal-doorway"],
    ["세바스찬","이제 당신은 정식으로 백작이 되었습니다.","royal-gallery"],
    ["세바스찬","지위도 재산도 아름다운 약혼자도 전부 당신 것입니다.","royal-gallery"],
    ["세바스찬","어떻습니까?","royal-gallery"],
    ["세바스찬","복수 같은 어리석은 짓은 그만두고 이대로 행복하게 살아가는 것은?","royal-gallery"],
    ["시엘","……","royal-reply"],
    ["시엘","그것도 나쁘지 않지….","royal-reply"],
    ["시엘","리지와 저녁을 먹고, 겨울이면 저택에 내려가고…… 그래. 어떻게 살지는 나도 궁금했어.","royal-reply"],
    ["세바스찬","그럼 오늘은 그쪽을 택하시겠습니까?","royal-gallery"],
    ["시엘","넌 내가 고를 수 있는 게 뭔지 잘 알잖아.","royal-reply"],
    ["","시엘이 안대를 풀었다. 매듭이 한 번 걸려서, 두 번째에는 두 손을 써야 했다.","releaseTitle"],
    ["시엘","손 내밀어.","releaseTitle"],
    ["","세바스찬은 곱게 접은 안대를 받았다. 의자 등받이에 걸어 두려 하자 시엘이 고개를 가로저었다.","releaseTitle"],
    ["시엘","가져. 내일 아침엔 쓸 일이 없을 테니.","releaseTitle"],
    ["세바스찬","그렇군요.","releaseTitle"],
    ["","집사가 흰 장갑 한 짝을 벗었다. 손등의 문양과 소년의 오른쪽 눈이 같은 빛을 띠었다.","releaseTitle"],
    ["시엘","이럴 때까지 서서 하게 할 셈이냐?","releaseTitle"],
    ["세바스찬","실례했습니다, 도련님.","releaseTitle"],
    ["","세바스찬이 주인 앞에 무릎을 꿇었다. 늘 장화를 벗겨 주던 높이였다.","releaseTitle"],
    ["시엘","복수는 그만두겠어. 이게 내 마지막 명령이다.","royal-oath"],
    ["세바스찬","예스, 마이 로드.","releaseTitle"],
    ["","시엘이 눈을 감기도 전에 촛불이 일제히 꺼졌다.","releaseTitle"],
    ["","어둠 속에서 악마가 입을 열었다. 시엘의 마지막 숨을 따라 빠져나온 영혼을, 세바스찬은 남김없이 삼켰다.","releaseTitle"],
    ["","회랑 밖에서 의전관이 백작의 마차를 불렀다. 대답이 없어 한 번 더 불렀다.","releaseTitle"]
  ]},
  releaseNoTitle:{alt:"불탄 기록 곁에서 마지막 명령을 받아들이는 세바스찬.",lines:[
    ["세바스찬","재가를 청하는 서류를 다시 꾸릴 수는 있습니다. 반년 뒤에 심의가 열립니다.","letter"],
    ["시엘","이번에도 봉투를 돌려보냈어?","letter"],
    ["세바스찬","가문을 증명하는 종이는 돌려보냈습니다. 답신은 한 줄입니다.","letter"],
    ["시엘","읽어 봐.","letter"],
    ["세바스찬","‘현 상황에서 재가하기 어렵습니다.’","letter"],
    ["","시엘은 편지 끝의 날짜를 읽었다. 날짜만 두 번 읽었다.","letter"],
    ["시엘","반년 뒤에 쓸 종이값은 남겨 둬. 다른 데 쓸 일이 있겠지.","letter"],
    ["","사환이 문 앞에 서서 나갈 편지 묶음을 기다렸다. 시엘은 자기 앞에 붙인 임시 봉투의 주소를 선으로 지웠다.","letter"],
    ["시엘","왕궁으로 갈 차편은 취소해.","letter"],
    ["세바스찬","이미 삯을 주었습니다. 다른 편지를 태울 수는 있습니다만.","letter"],
    ["시엘","마부한테 오늘은 일찍 들어가도 된다고 전해.","releaseNoTitle"],
    ["세바스찬","시내에 가실 용무가 하나 더 있지 않습니까?","releaseNoTitle"],
    ["시엘","알아. 그 자가 묵고 있다는 여관 말이지.","releaseNoTitle"],
    ["","시엘은 서랍을 열었다. 구겨진 방명록 한 장이 맨 위에 있었다.","releaseNoTitle"],
    ["시엘","여기, 아버지가 돌아가신 날. 잉크를 긁어 냈지?","releaseNoTitle"],
    ["세바스찬","예. 종이가 얇아져서 등불에 비치면 보일 겁니다.","releaseNoTitle"],
    ["","세바스찬이 램프를 가까이 가져왔다. 시엘은 심지를 내려 버렸다.","releaseNoTitle"],
    ["세바스찬","읽지 않으십니까?","releaseNoTitle"],
    ["시엘","석 달 전이었으면 네 손에서 뺏어서라도 읽었을 거야.","releaseNoTitle"],
    ["세바스찬","마부를 다시 부를까요? 아직 현관에 있습니다.","releaseNoTitle"],
    ["시엘","보내라니까.","releaseNoTitle"],
    ["","조금 뒤에 바퀴 소리가 났다. 손가락 밑에서 종이 끝이 들렸다 가라앉았다.","releaseNoTitle"],
    ["시엘","너, 저 이름을 이미 읽었지?","releaseNoTitle"],
    ["세바스찬","물으신다면 답해 드리겠습니다.","releaseNoTitle"],
    ["시엘","그럴 것 같았어.","releaseNoTitle"],
    ["","시엘이 종이를 불 위에 놓았다. 긁어 낸 자리부터 먼저 구멍이 났다.","releaseNoTitle"],
    ["세바스찬","그 집 투숙객은 제가 기억합니다. 원하시면 다시 적어 드릴 수 있습니다.","releaseNoTitle"],
    ["시엘","오늘따라 말귀를 못 알아듣는군.","releaseNoTitle"],
    ["세바스찬","제 입으로 먼저 여쭙기가 좀 그래서요.","releaseNoTitle"],
    ["시엘","궁에서 나를 뭐라고 부르든 상관없어. 그래서 그만두는 게 아니야.","releaseNoTitle"],
    ["시엘","놈들의 이름을 아는 날이 와도, 더는 쫓지 않겠어.","releaseNoTitle"],
    ["세바스찬","그러면 도련님께 청구할 것이 하나 남습니다.","releaseNoTitle"],
    ["시엘","차 값은 아닐 테고.","releaseNoTitle"],
    ["세바스찬","제 봉급을 돈으로 치르신 적이 있었습니까?","releaseNoTitle"],
    ["","시엘이 작게 웃었다. 그 웃음이 그치자 방 안에는 종이 타는 소리만 남았다.","releaseNoTitle"],
    ["시엘","그래. 네가 받을 몫은 알고 있어.","releaseNoTitle"],
    ["","시엘이 안대를 풀었다. 매듭이 한 번 걸려서, 두 번째에는 두 손을 써야 했다.","releaseNoTitle"],
    ["시엘","손 내밀어.","releaseNoTitle"],
    ["","세바스찬은 곱게 접은 안대를 받았다. 의자 등받이에 걸어 두려 하자 시엘이 고개를 가로저었다.","releaseNoTitle"],
    ["시엘","가져. 내일 아침엔 쓸 일이 없을 테니.","releaseNoTitle"],
    ["세바스찬","그렇군요.","releaseNoTitle"],
    ["","집사가 흰 장갑 한 짝을 벗었다. 손등의 문양과 소년의 오른쪽 눈이 같은 빛을 띠었다.","releaseNoTitle"],
    ["시엘","이럴 때까지 서서 하게 할 셈이냐?","releaseNoTitle"],
    ["세바스찬","실례했습니다, 도련님.","releaseNoTitle"],
    ["","세바스찬이 주인 앞에 무릎을 꿇었다. 늘 장화를 벗겨 주던 높이였다.","releaseNoTitle"],
    ["시엘","복수는 그만두겠어. 이게 내 마지막 명령이다.","releaseNoTitle"],
    ["세바스찬","예스, 마이 로드.","releaseNoTitle"],
    ["","시엘이 눈을 감기도 전에 촛불이 일제히 꺼졌다.","releaseNoTitle"],
    ["","어둠 속에서 악마가 입을 열었다. 시엘의 마지막 숨을 따라 빠져나온 영혼을, 세바스찬은 남김없이 삼켰다.","releaseNoTitle"],
    ["","다음 심의의 날짜를 알리는 편지가 도착한 것은 이듬해였다. 편지는 수취인 부재로 궁에 돌아갔다.","releaseNoTitle"]
  ]},
  ill:{alt:"주인 없는 침대 곁에 남은 시엘의 시계와 수첩.",lines:[
    ["","편지를 가져온 아이는 마차가 돌아나갈 때까지 현관 앞에서 모자를 손에 들고 있었다.","letter"],
    ["세바스찬","어디서 온 편지인지 보시겠습니까?","letter"],
    ["시엘","볕에 비춰 봐. 글자가 등까지 비쳤으면 급한 거야. 급하면 다들 눌러 쓰잖아.","letter"],
    ["세바스찬","아주 가볍게 썼습니다. 안부를 묻는 편지군요.","letter"],
    ["시엘","그럼 잘 받았다고만 해. 답장을 기다리게 하지 말고.","letter"],
    ["세바스찬","어디까지 전하면 됩니까?","letter"],
    ["시엘","볕이 잘 든다고. 그건 네가 봐도 알겠지.","letter"],
    ["","세바스찬은 봉투를 침대 옆 탁자에 세워 두었다. 겹친 종이에 창살 그림자가 반듯이 걸렸다.","letter"],
    ["","서재를 열던 열쇠가 찻숟가락과 부딪혔다. 눈을 감고 있던 시엘이 먼저 물었다.","key"],
    ["시엘","너 어디 문을 열었어?","key"],
    ["세바스찬","책상 왼쪽 서랍입니다. 아침에 의사가 다녀간 시각을 적어 두려고요.","key"],
    ["시엘","내 시계로 적어. 복도 시계가 조금 빨라.","key"],
    ["세바스찬","얼마나요?","key"],
    ["시엘","세면 알잖아. 이따 종 치면.","key"],
    ["","종은 네 번 울렸다. 시엘은 세 번째와 네 번째 사이에서 잠깐 숨을 골랐다.","key"],
    ["세바스찬","오늘은 도련님 시계가 이 분 늦습니다.","key"],
    ["시엘","그럼 그걸 맞춰야지. 왜 웃어?","key"],
    ["세바스찬","여전히 시계 두 개를 다 쓰게 하시는군요.","key"],
    ["세바스찬","오전의 손님은 돌아갔습니다. 오후에도 마차를 부르지 않을 겁니다.","butler"],
    ["시엘","……네가 취소했어?","butler"],
    ["세바스찬","도련님께서 어제 저녁에 명하셨습니다.","butler"],
    ["시엘","잠깐…… 그 베개, 세워 줘.","ill"],
    ["","시엘은 다시 누우려다 침대 가장자리를 짚었다. 세바스찬이 말을 멈추었다.","ill"],
    ["세바스찬","의사를 다시 모셔 오겠습니다.","ill"],
    ["시엘","……옛날에도 이랬어.","ill"],
    ["세바스찬","옛날이라니요?","ill"],
    ["시엘","어릴 때. 어머니가 밤새 옆에…….","ill"],
    ["","그 뒤가 들리지 않았다. 시엘은 여전히 얘기하고 있는 줄 아는 얼굴이었다.","ill"],
    ["세바스찬","도련님. 제 손을 잡으시겠습니까?","ill"],
    ["","손이 겨우 닿았다. 세바스찬은 다른 손으로 침대 곁의 종을 당겼다.","ill"],
    ["의사","천식을 앓은 적이 있습니까? 아주 어릴 때라도요.","ill"],
    ["세바스찬","제가 이 댁에 온 뒤로는 들은 바가 없습니다.","ill"],
    ["의사","그 전의 일을 아는 분께 물어봐 주십시오.","ill"],
    ["","의사는 침대 곁을 떠나지 않았다. 세바스찬이 아래층 서재로 내려갔다.","ill"],
    ["","선대 백작 부인의 수첩은 늘 같은 자리에 있었다. 그는 그 책의 먼지를 수백 번 닦았다.","ill"],
    ["","생일이며 유모의 품삯이 적힌 페이지 뒤에, 어린 시엘의 발작이 있던 밤들이 적혀 있었다.","ill"],
    ["세바스찬","……천식이셨군요.","ill"],
    ["","날짜에 짧은 줄이 그어져 있었다. 그 줄 아래로 여러 해 동안 한 줄도 더해지지 않았다.","ill"],
    ["","침실로 돌아왔을 때 시엘은 베갯잇 끝을 손가락 사이에 말아 쥐고 있었다.","ill"],
    ["세바스찬","찾았습니다, 선생님. 어릴 적에 여러 번 앓으셨습니다.","ill"],
    ["의사","예. 책은 거기 두세요.","ill"],
    ["","세바스찬은 시엘이 손에 쥔 천을 펴 주려다가 그대로 두었다.","ill"],
    ["시엘","……늦었어.","ill"],
    ["세바스찬","예. 다음번에는 더 빨리 다녀오겠습니다.","ill"],
    ["","시엘의 손이 조금 풀렸다. 집사는 다음번이라는 말을 고쳐 말할 기회를 얻지 못했다.","ill"],
    ["","동틀 무렵 의사가 일어서서 시계를 보았다. 세바스찬도 시간을 보았다. 두 시계가 가리키는 분이 달랐다.","ill"],
    ["의사","가족 분들께 사람을 보내셔야겠습니다.","ill"],
    ["","시엘의 가슴은 다시 오르지 않았다.","ill"],
    ["","세바스찬은 탁자 위 수첩을 열었다. 오래전에 멎은 날짜들 밑에 그날 새벽의 시각을 적었다.","ill"]
  ]},
  broke:{alt:"빈 가게에서 접시 값을 두고 말다툼하는 시엘과 세바스찬.",lines:[
    ["","대문으로 들어온 남자는 모자도 외투도 맡기지 않았다. 현관에 서서 금고를 볼 수 있는 시각만 물었다.","letter"],
    ["세바스찬","약속한 때보다 한 시간 일찍 왔습니다. 돌려보낼까요?","letter"],
    ["시엘","한 시간 더 있으면 금고 안이 달라져?","letter"],
    ["세바스찬","동전의 수에는 변함이 없겠습니다.","letter"],
    ["시엘","그럼 들여. 바깥에 세워 두는 것도 이 집 이름으로 하는 일이야.","letter"],
    ["세바스찬","어느 방으로 모실까요?","letter"],
    ["시엘","서재. 의자는 둘만 놔. 내 앞에 서서 얘기하게 하면 내가 먼저 올려다봐야 하잖아.","letter"],
    ["","세바스찬이 은쟁반을 들자 반송된 어음 아래에서 동그란 찻잔 자국이 드러났다.","letter"],
    ["","책상 위에는 영수증이 발행일 순서로 묶여 있었다. 마지막 묶음만 철끈에서 빠져 있었다.","gloves"],
    ["시엘","이건 왜 빼 놨어?","gloves"],
    ["세바스찬","이쪽이 이번 달에 들어온 돈이고 저쪽이 나간 돈입니다.","broke"],
    ["시엘","저쪽은 왜 책상 아래까지 내려와 있지?","broke"],
    ["세바스찬","종이가 길어서요.","broke"],
    ["시엘","종이가 왜 긴지를 묻잖아!","broke"],
    ["집달리","실례합니다. 두 분이 의논하시는 동안 은식기부터 세도 되겠습니까?","broke"],
    ["세바스찬","은포크는 열두 벌입니다. 생선용은 아래 서랍에 있습니다.","broke"],
    ["시엘","친절하게 알려 주지 마!","broke"],
    ["집달리","고맙습니다. 저 촛대도 한 쌍이지요?","broke"],
    ["","세바스찬은 입을 다물었다. 대신 촛대가 든 장을 정중히 열어 주었다.","broke"],
    ["시엘","그 장 닫아.","broke"],
    ["세바스찬","예, 도련님.","broke"],
    ["","시엘은 영수증을 한 장 뽑았다. 그 밑으로 같은 무늬의 영수증이 줄줄이 딸려 왔다.","broke"],
    ["시엘","밀가루. 설탕. 버터. 이 아래에 또 버터. 우리 집에 소라도 들였나?","broke"],
    ["세바스찬","팬텀사 신제품 시식회입니다. 도련님께서 전부 맛을 보시겠다고 하셨지요.","broke"],
    ["시엘","그래서 몇 명을 먹였어?","broke"],
    ["세바스찬","손님은 한 분이셨습니다.","broke"],
    ["시엘","……나?","broke"],
    ["세바스찬","예. 열일곱 번째 접시에서 이제 단 건 꼴도 보기 싫다고 하셨습니다.","broke"],
    ["시엘","남은 건 팔았어야지!","broke"],
    ["세바스찬","접시마다 한 입씩 드신 것을 말씀하시는 겁니까?","broke"],
    ["","집달리가 헛기침을 했다. 빈 은쟁반 밑에서 영수증이 한 장 더 나왔다.","broke"],
    ["집달리","이건 경매에 부치면 제법 받겠습니다.","broke"],
    ["시엘","쟁반은 가져가도 좋아. 영수증은 놓고 가.","broke"],
    ["","쟁반이 사라지자 탁자에 하얗게 동그라미가 남았다. 세바스찬은 천을 꺼냈다.","broke"],
    ["시엘","닦지 마. 그것도 곧 가져갈 거야.","broke"],
    ["세바스찬","이제 집기 목록을 외우셨군요.","broke"],
    ["시엘","네 봉급부터 깎았어야 했어.","broke"],
    ["세바스찬","실례지만 저는 아직 한 푼도 받은 적이 없습니다.","broke"],
    ["","집달리가 열쇠를 받아 들고 문을 닫았다. 둘이 앉았던 의자도 그와 함께 나갔다.","broke"],
    ["시엘","내일 아침엔 어디서 일어나야 하지?","broke"],
    ["세바스찬","숙소부터 알아보겠습니다. 조식은 별도여도 괜찮으시겠습니까?","broke"],
    ["시엘","차까지 포함이야. 두 번 내는 건 이제 지긋지긋해.","broke"],
    ["","세바스찬이 장부를 덮었다. 유난히 공손한 표정이었다.","broke"],
    ["세바스찬","역시 인간 아이에게 경영은 너무 이른 분야였을까요.","broke"],
    ["시엘","네가 잘못한 거잖아, 세바스찬!","broke"],
    ["세바스찬","제가 열일곱 접시를 먹었습니까?","broke"],
    ["시엘","한 입 먹을 때마다 새 접시를 내온 게 누군데!","broke"],
    ["","복도에서 집달리가 도로 고개를 들이밀었다.","broke"],
    ["집달리","그럼 접시도 열일곱 장으로 적겠습니다.","broke"]
  ]},
  title:{alt:"응접실 창가에서 시엘이 붉은 인장이 달린 왕실 문서를 읽는다.",lines:[
    ["","영지 도면을 묶은 붉은 끈이 도화지에 물이 들 만큼 오래 감겨 있었다. 시엘은 끈을 자르지 않고 풀었다.","letter"],
    ["세바스찬","가위가 여기 있습니다.","letter"],
    ["시엘","풀어 두면 말아서 다시 넣을 수 있잖아.","letter"],
    ["세바스찬","이걸 돌려보내실 생각입니까?","letter"],
    ["시엘","아니. 어느 길로 가서 어디까지 봤는지 적어 둘 거야. 여기에.","letter"],
    ["","도면 한쪽 끝이 말려 올라가자 문진 대신 낡은 회중시계가 올라갔다.","letter"],
    ["세바스찬","저쪽 고정쇠를 쓰면 잉크가 덜 묻습니다.","letter"],
    ["시엘","이 정도 무게면 돼. 우선 읽어 줘.","letter"],
    ["세바스찬","영지 도면과 계승 서류가 모두 도착했습니다.","court"],
    ["시엘","도면부터 펴. 가장 먼 집은 어디지?","court"],
    ["세바스찬","북쪽 숲을 지나면 한 채 있습니다.","court"],
    ["시엘","좋아. 오늘부터 우리가 갈 곳이 하나 더 생겼군.","court"],
    ["세바스찬","도로가 끝나는 자리군요. 길이 도중에 끊긴 것처럼 그려져 있습니다.","court"],
    ["시엘","그럼 저 사람들은 편지를 어디로 받아?","court"],
    ["세바스찬","장부에는 우체부가 우유 수레에 맡기는 것으로 되어 있습니다.","court"],
    ["시엘","수레가 건너가는 길이 있다는 뜻이지. 그 길이 왜 여기서 끊겼는지 보러 가자.","court"],
    ["","옷장에는 새로 돌려받은 문장을 수놓은 외투와, 무릎께에 진흙이 튄 낡은 외투가 함께 걸려 있었다.","dress"],
    ["세바스찬","어느 쪽을 준비할까요?","dress"],
    ["시엘","더러워진 쪽. 담장을 넘든 수레에 오르든 마음대로 할 수 있는 걸로.","dress"],
    ["세바스찬","첫 영지 시찰치고는 사진사에게 불친절한 선택이군요.","dress"],
    ["시엘","데려가기로 했어?","dress"],
    ["세바스찬","아직 부르지 않았습니다.","dress"],
    ["시엘","잘했네. 사진으로 먼저 보면 가서 보고도 똑같은 것만 찾게 돼.","dress"],
    ["","세바스찬은 준비했던 문장핀을 옷장 안에 놓고 장화 끈을 당겼다.","dress"],
    ["","마차에서 본 우유 수레는 작은 돌다리를 건넜다. 다리 난간에는 수레바퀴 높이까지 진흙 자국이 나 있었다.","carriage"],
    ["시엘","길이 끊긴 게 여기야?","carriage"],
    ["세바스찬","예. 이 다리는 도면을 만든 뒤에 놓은 모양입니다.","carriage"],
    ["우유","배달부 물 불면 여기로 못 가요. 그때는 집 뒤쪽 빨랫줄에 달아 놓고 호각을 불죠.","carriage"],
    ["시엘","편지를요?","carriage"],
    ["우유","배달부 예. 주인 양반한테도 건너오라고 하지 마세요. 가운데 돌이 움직여서.","carriage"],
    ["세바스찬","도련님, 진흙이 옷자락까지 올라옵니다.","carriage"],
    ["시엘","기다려. 옷은 네가 빨 수 있지만 틀린 곳은 내가 봐야 적을 수 있어.","carriage"],
    ["","작은 문이 열렸다. 우편 자루를 든 아이가 망토의 진흙을 보고 걸레부터 내밀었다.","title"],
    ["아이","집에 가면 혼나요.","title"],
    ["시엘","이 옷을 빨 사람은 벌써 봤어.","title"],
    ["세바스찬","예. 돌다리의 내력은 밑단만 보아도 짐작이 갑니다.","title"],
    ["시엘","이 집으로 편지가 오면 어디다 두지?","title"],
    ["아이","건너편에 매달아요. 비 오면 가지러 못 가고요.","title"],
    ["","시엘은 지도 위에서 다리의 양 끝을 짚었다. 한쪽 끝만 팬텀하이브 영지에 들어 있었다.","title"],
    ["시엘","내일 석공을 불러. 맞은편 땅 주인도.","title"],
    ["세바스찬","두 분께서 비용을 나누시는 겁니까?","title"],
    ["시엘","누가 얼마를 낼지는 만나서 정하지. 그동안엔 우편 자루를 우리 마차에 실어.","title"],
    ["아이","누구한테 부탁했다고 해요?","title"],
    ["","세바스찬이 대답하려 하자 시엘이 장갑을 벗고 아이에게 손을 내밀었다.","title"],
    ["시엘","팬텀하이브 백작이야.","title"],
    ["","아이는 그 손에 젖은 우편 자루를 넘겼다. 예상보다 무거워서 시엘의 팔이 툭 내려갔다.","title"],
    ["세바스찬","첫 번째 청원이 벌써 도착했군요.","title"],
    ["시엘","웃고 있지 말고 마차 문이나 열어, 세바스찬.","title"]
  ]},
  business:{alt:"팬텀사 작업대에서 시엘이 새 목제 기관차의 바퀴를 점검한다.",lines:[
    ["세바스찬","가문의 도장은 보류됐습니다. 팬텀사의 도장은 새로 넘겨받았습니다.","letter"],
    ["시엘","그쪽부터 가져와.","letter"],
    ["세바스찬","오늘 찍으면 첫 물량은 다음 주에 나갑니다.","letter"],
    ["시엘","그럼 오늘 찍어. 저택 식구들한테도 그렇게 전해.","letter"],
    ["","도장은 뜻밖에 작았다. 시엘이 종이 귀퉁이에 시험 삼아 누르자 글자의 왼쪽 절반만 찍혔다.","letter"],
    ["시엘","회사 이름을 반만 보내면 돈도 반만 받겠군.","letter"],
    ["세바스찬","책상 다리 밑이 기웁니다. 이번에는 제 쪽에 놓고 찍어 보시지요.","letter"],
    ["시엘","잠깐. 공방 책상도 이런지 먼저 물어봐.","letter"],
    ["","견본 상자 세 개를 같은 높이에서 떨어뜨렸다. 첫째 상자는 벌어졌고, 둘째는 깨끗했다. 셋째는 아무 소리도 나지 않았다.","gloves"],
    ["시엘","소리가 안 나는 게 제일 잘된 건가?","gloves"],
    ["세바스찬","열어 보시겠습니까?","gloves"],
    ["시엘","……비었어.","gloves"],
    ["세바스찬","서두르니 검수를 마치기도 전에 뚜껑부터 묶었군요.","gloves"],
    ["시엘","그럼 출고표에 무게 적을 칸을 만들어. 다음부터는 하나씩 다 열지 않아도 알 수 있어.","gloves"],
    ["세바스찬","칸 하나를 더 넣으면 주문 주소가 한 줄 줄어듭니다.","gloves"],
    ["시엘","주소는 두 장을 써도 돼. 손님한테 빈 상자를 둘이나 보내는 것보다는 싸겠지.","gloves"],
    ["","창고 열쇠에는 붉은색 꼬리표가 달려 있었다. 문을 열자 상자의 주소가 전부 같은 높이에서 보였다.","key"],
    ["시엘","똑바로 놓으니까 예쁘긴 하네. 저 안쪽 것부터 빼려면 몇 개를 들어야 하지?","key"],
    ["세바스찬","다섯 줄입니다. 손을 빌리면 아주 빨리 끝낼 수도 있겠습니다.","key"],
    ["시엘","네가 여섯 명은 아니잖아. 내일 네가 이 방에 없어도 되게 정리해.","key"],
    ["세바스찬","그렇다면 제일 먼저 나가는 것부터 문 앞으로요?","key"],
    ["시엘","응. 늦게 온 주문이라도 배가 이르면 먼저 나가야 해. 상자에 날짜도 찍고.","key"],
    ["세바스찬","날짜 도장을 새로 파겠습니다.","key"],
    ["시엘","숫자가 빠지는 걸로 해. 오래 쓸 거야.","key"],
    ["","거래처 마차가 창고 뒷문에 섰다. 마부는 짐칸 한가운데를 비워 두고 양옆으로 상자를 쌓았다.","carriage"],
    ["시엘","하나쯤 더 실을 자리가 있는데?","carriage"],
    ["마부","돌아오는 길에 저희 쪽 빈 상자를 싣습니다. 한 번에 나르는 편이 싸요.","carriage"],
    ["시엘","그 빈 상자, 어디까지 가져갑니까?","carriage"],
    ["마부","강 건너 인쇄소까지요.","carriage"],
    ["시엘","우리도 그 집에 용무가 있어요. 견적서 봉투 하나만 맡기면 삯이 얼마죠?","carriage"],
    ["세바스찬","편지라면 제가 곧장 다녀올 수 있습니다만.","carriage"],
    ["시엘","그렇게 하면 다음번에도 네가 가야 하잖아. 나는 오늘부터 우송비를 알고 싶어.","carriage"],
    ["","사흘 뒤, 첫 주문을 낸 백화점에서 상자 하나를 돌려보냈다. 뚜껑에 아이 이빨 자국이 있었다.","business"],
    ["세바스찬","반품이 한 건입니다. 사유는 ‘기관차가 자꾸 식탁 아래로 도망감’.","business"],
    ["시엘","비뚤게 달린다는 소리야? 줘 봐.","business"],
    ["","시엘이 태엽을 감자 기관차가 반원을 그리며 집사의 구두에 부딪쳤다.","business"],
    ["시엘","왼쪽 바퀴가 작네.","business"],
    ["세바스찬","새것을 보내 드릴까요?","business"],
    ["시엘","고쳐서 보내. 새것은 필요 없을걸.","business"],
    ["","시엘이 뒤집은 차체 바닥에 연필로 역 이름이 쓰여 있었다. ‘엄마 의자’, ‘내 의자’, ‘식탁 밑’.","business"],
    ["시엘","이 애 철도에선 우리도 벌써 세 번은 탈선했겠군.","business"],
    ["","그날 오후 공방에 둥근 시험 선로가 놓였다. 사장은 기관차를 하나씩 굴려 본 뒤에야 상자를 닫게 했다.","business"],
    ["세바스찬","도련님. 궁에서 온 우편도 있습니다.","business"],
    ["시엘","저 애 편지부터 써. 내 이름으로.","business"],
    ["세바스찬","직함은 백작으로 할 수 없는데요.","business"],
    ["시엘","팬텀사의 사장이라고 쓰면 돼. 고장 난 걸 판 건 나니까.","business"],
    ["","일주일 뒤 답장이 왔다. 다른 선로를 더 놓았는데 이제 객차도 사야 할까요.","business"],
    ["시엘","세바스찬, 객차 도면 가져와.","business"],
    ["세바스찬","예, 사장님.","business"]
  ]},
  defer:{alt:"닫힌 심의실 문을 등지고 시엘이 외투를 챙기러 돌아선다.",lines:[
    ["","반송된 봉투에는 풀을 다시 바른 자국이 두 줄 나 있었다. 겉에 찍힌 도장은 한 번뿐이었다.","letter"],
    ["세바스찬","서류를 돌려받았습니다. 신청서는 아직 쓸 수 있습니다.","letter"],
    ["시엘","뭐가 비었는지 한 장씩 봐.","letter"],
    ["세바스찬","오늘 밤에는 모두 보기 어렵겠습니다.","letter"],
    ["시엘","그럼 첫 장까지만. 나머지는 내일 한다.","letter"],
    ["세바스찬","맨 위에는 ‘미비’라고만 쓰여 있습니다.","letter"],
    ["시엘","그건 쓴 사람 이름이 없어. 사유로 옮기면 잉크만 두 번 쓰는 셈이야.","letter"],
    ["","시엘은 원인을 적어 두려던 칸에 종잇조각을 끼웠다. 글부터 쓰진 않았다.","letter"],
    ["","문서함 아래에 수리공의 청구서가 끼여 있었다. 삐져나온 모서리에 흙 묻은 손자국이 있었다.","key"],
    ["시엘","이거 쓴 사람은 글씨를 모르나? 서명이 십자야.","key"],
    ["세바스찬","뒤에 두 사람이 보증했습니다. 읽어 드릴까요?","key"],
    ["시엘","이름은 읽을 수 있어. 왜 두 사람이나 필요했는지가 궁금해.","key"],
    ["세바스찬","한 사람은 이 일을 맡겼고, 한 사람은 끝난 것을 보았답니다.","key"],
    ["시엘","……그렇군. 재건했다고 내가 쓴 종이에는 내가 한 서명밖에 없어.","key"],
    ["세바스찬","수리공에게 왕실 서류를 다시 쓰게 하시겠습니까?","key"],
    ["시엘","아니. 그 사람이 한 일을 물을 거야. 궁정에서 쓰는 말은 내가 배워야지.","key"],
    ["","식탁 끝의 촛농이 길게 흘렀다. 노트를 들고 온 세바스찬은 일부러 빈칸을 남기고 첫 줄을 썼다.","gloves"],
    ["시엘","그쪽도 비워 두게?","gloves"],
    ["세바스찬","‘묻는다’와 ‘확인했다’를 다른 쪽에 적으려고 합니다.","gloves"],
    ["시엘","칸을 그렇게 잡으면 왼쪽만 가득 찰 텐데.","gloves"],
    ["세바스찬","지금은 그렇습니다.","gloves"],
    ["시엘","그럼 얇은 종이를 써. 넘겨서 반대편을 보면 어느 쪽이 비었는지 보일 거야.","gloves"],
    ["","세바스찬이 첫 장을 들었다. 아직 젖은 글자의 획이 종이 너머로 비쳤다.","gloves"],
    ["시엘","내일 저 사람한테 물을 때는 내가 먼저 말할게. 네가 답까지 만들어 두지 말고.","gloves"],
    ["","다음 날에도 수리공은 어제 입었던 외투를 입고 왔다. 모자챙에서 마른 흙이 떨어졌다.","butler"],
    ["수리공","제가 물이 샌 곳을 고치긴 했습니다. 한데 비 온 날 보셨습니까?","butler"],
    ["시엘","맑을 때 올라가 봤어요.","butler"],
    ["수리공","그럼 다 고쳤다고 쓰지 마세요. 비가 와야 저도 아는 겁니다.","butler"],
    ["세바스찬","첫 장 여백이 점점 좁아지는군요.","butler"],
    ["시엘","오히려 한 줄이면 돼. 다음 비에 다시 확인할 것.","butler"],
    ["수리공","비가 오면 저도 같이 올라가겠습니다.","butler"],
    ["시엘","그렇게 서명해 주세요. 서명은 평소 하시던 식으로 하시면 됩니다.","butler"],
    ["","밤이 되자 정말 비가 왔다. 시엘은 서재에 앉아 책을 읽다가 같은 줄을 세 번 읽었다.","defer"],
    ["시엘","지금 가면 무슨 소린지 네 귀에는 들리겠지?","defer"],
    ["세바스찬","처마에서 물 떨어지는 소리 말씀이십니까?","defer"],
    ["시엘","됐어. 부츠 가져와.","defer"],
    ["","빈 대야가 있어야 할 자리에 수리공이 웅크리고 있었다. 마른 헝겊에 손을 닦으며 일어섰다.","defer"],
    ["수리공","마른 거 직접 보셨지요. 이젠 제 돈 주셔도 됩니다.","defer"],
    ["시엘","벌써 준 줄 알았는데?","defer"],
    ["수리공","궁에서 허락하시면 도로 오라고 하셔서요.","defer"],
    ["","세바스찬이 청구서를 뒤집었다. 선대의 장부에서 옮긴, 빛바랜 연필 글씨였다.","defer"],
    ["시엘","지붕에 비가 새는데 궁의 허락까지 받아야 하나. 줘.","defer"],
    ["세바스찬","어느 이름으로 영수증을 받으실까요?","defer"],
    ["시엘","내 이름이면 되잖아. 이 집 지붕 아래 자는 게 누군데.","defer"],
    ["","수리공은 시엘이 불러 준 이름을 한 글자씩 따라 썼다. 작위를 적는 칸만 비었다.","defer"],
    ["수리공","다음에 새거든 또 부르세요, 도련님.","defer"],
    ["","다음 날 아침 왕실로 가는 우편 자루는 비어 있었다. 저택에서 먼저 내보낸 편지는 밀린 품삯을 받으러 오라는 전갈이었다.","defer"],
    ["시엘","다 보내면 내일은 내 책상 위 지붕부터 봐 줘. 어제 책에 물 떨어졌어.","defer"]
  ]}
};

const londonEndingScenes={
  "merchant": [
    [
      "",
      "새벽에 템스 강 하역장이 열렸다. 경비가 시엘의 앞을 막았지만 팬텀사의 운송장을 보자 빗장을 풀었다.",
      "business"
    ],
    [
      "창고지기",
      "작은 사장님이 직접 화물을 보러 오실 줄은 몰랐습니다.",
      "business"
    ],
    [
      "시엘",
      "물건이 아니라 삯을 보러 왔어. 같은 상자가 왜 이 창고에서만 두 배지?",
      "business"
    ],
    [
      "창고지기",
      "밤에 따로 내리는 짐이라…….",
      "business"
    ],
    [
      "시엘",
      "우리가 완구를 밤에 내리라고 한 적이 있어?",
      "business"
    ],
    [
      "",
      "남자가 시선을 피했다. 세바스찬이 운송장 석 장을 겹쳤다. 세 장 모두 같은 자리에서 펜촉이 종이를 뚫었다.",
      "business"
    ],
    [
      "세바스찬",
      "이 필체를 쓰는 분이 제법 부지런하십니다. 같은 날 런던과 도버 양쪽에 계셨군요.",
      "business"
    ],
    [
      "시엘",
      "그 사람 거래를 내가 사지. 돈은 지금 치르겠어.",
      "business"
    ],
    [
      "창고지기",
      "그 양반은 장난감 장사가 아닙니다.",
      "business"
    ],
    [
      "시엘",
      "그래서 내가 직접 왔잖아.",
      "business"
    ],
    [
      "",
      "대금이 건너가자 금고에서 진짜 선하증권이 나왔다. 팬텀하이브가 불타던 밤에 출항한 배 이름도 거기 있었다.",
      "business"
    ],
    [
      "시엘",
      "가게는 평소대로 열어. 오늘부터 저 배가 들르는 항구마다 우리 물건을 보내겠다.",
      "business"
    ],
    [
      "세바스찬",
      "어디까지 납품 구역으로 삼으시겠습니까?",
      "business"
    ],
    [
      "시엘",
      "놈이 내 돈을 한 푼이라도 쓰는 데까지.",
      "business"
    ],
    [
      "",
      "그해 겨울 런던에 팬텀사의 새 지점이 생겼다. 사장실에는 매출표와 입항표가 나란히 걸렸다.",
      "business"
    ],
    [
      "",
      "시엘은 자로 두 표를 한 줄씩 짚어 내려갔다. 한 군데서 자가 멎었다.",
      "business"
    ],
    [
      "시엘",
      "여기다. 세바스찬, 배편을 잡아.",
      "business"
    ]
  ],
  "broker": [
    [
      "",
      "이스트엔드의 전당포는 새벽 한 시에도 셔터를 반쯤 올려 두었다. 시엘이 허리를 숙여 들어가자 안에서 가격부터 불렀다.",
      "vowNoTitle"
    ],
    [
      "정보상",
      "이름 하나에 기니 하나. 선불이오.",
      "vowNoTitle"
    ],
    [
      "시엘",
      "이름은 벌써 셋이나 들었어. 세 사람 다 같은 날 죽었더군.",
      "vowNoTitle"
    ],
    [
      "정보상",
      "그것 참 유감이군.",
      "vowNoTitle"
    ],
    [
      "시엘",
      "그런데 장례를 맡은 사람이 너야. 난 그게 더 흥미로워.",
      "vowNoTitle"
    ],
    [
      "",
      "남자의 손이 계산대 밑으로 내려갔다. 뒤에서 세바스찬이 빈 서랍을 빼 들었다.",
      "vowNoTitle"
    ],
    [
      "세바스찬",
      "찾으시는 물건이라면 아까 치워 두었습니다.",
      "vowNoTitle"
    ],
    [
      "정보상",
      "……어디서 왔다고 했지, 꼬마야?",
      "vowNoTitle"
    ],
    [
      "시엘",
      "앞으로도 그게 궁금하면, 내게 팔 만한 걸 가져와.",
      "vowNoTitle"
    ],
    [
      "",
      "시엘은 기니 하나를 세워 굴렸다. 남자가 손바닥으로 덮었다.",
      "vowNoTitle"
    ],
    [
      "정보상",
      "도살장 옛 장부를 봐. 열두 번째 줄. 사람 이름은 없고 짐 무게만 적혔어.",
      "vowNoTitle"
    ],
    [
      "시엘",
      "다음에 만날 땐 네 이름도 사지.",
      "vowNoTitle"
    ],
    [
      "",
      "그날부터 전당포 창의 불빛이 켜지면 뒷골목에 소문이 돌았다. 값을 제대로 치르는 외눈의 손님이 왔다고.",
      "vowNoTitle"
    ],
    [
      "세바스찬",
      "사람들이 도련님을 뭐라고 부르는지 아십니까?",
      "vowNoTitle"
    ],
    [
      "시엘",
      "돈을 받았으면 이름값은 해야지. 오늘은 누가 기다려?",
      "vowNoTitle"
    ],
    [
      "세바스찬",
      "셋입니다. 전부 다른 문으로 들였습니다.",
      "vowNoTitle"
    ],
    [
      "시엘",
      "좋아. 같은 거짓말을 하는 놈부터 데려와.",
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
// Keep only the entries needed by the gallery when a new campaign replaces the autosave.
function growthCast(run){
  const visits=new Set();
  for(const entry of run.events||[]){
    const event=events.find(item=>item.id===entry.id);
    if(event?.visitPlace)visits.add(event.speaker);
  }
  return Object.keys(servants).filter(id=>run.people?.[id]&&(
    run.people[id].toward>2||visits.has(servants[id].name)||
    (id==="agni"&&(run.flags?.agniTea||run.flags?.agniLesson))
  ));
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
  record[record.length-1].cast=growthCast(run);
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
  const cast=years.at(-1)?.cast||[];
  if(cast.length){
    const group=add(roll,"section","");group.className="growth-cast";
    add(group,"h3","함께한 사람들");
    const roles={tanaka:"가령",finny:"정원사",mey:"하녀",bard:"요리사",snake:"풋맨",soma:"벵골의 왕자",agni:"소마의 집사"};
    for(const id of cast){
      const person=servants[id];
      if(!person||!Object.hasOwn(roles,id))continue;
      const figure=add(group,"figure","");
      const image=document.createElement("img");
      image.src=portraits[person.name];image.alt="";figure.append(image);
      const caption=add(figure,"figcaption","");
      add(caption,"small",roles[id]);add(caption,"strong",person.name);
    }
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
    else {delete state.growthCredits;delete state.endingBeat;persist();}
    render(true);
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
  const picture=cue?.cg||legacyPicture||id,last=at===end;
  clearTimeout(recruitTimer);if(last)stopRecruitAuto();
  const arrow='<button type="button" class="line-next" data-read="'+(last?'finish':'next')+'" aria-label="'+(last?'장면 마치기':'다음 대사')+'">▼</button>';
  host.hidden=false;host.dataset.review="false";
  const existing=host.querySelector(".ending-cg");
  const art=existing?.dataset.ending===id?existing:document.createElement("img");
  if(art!==existing){
    art.className="ending-cg";art.dataset.ending=id;
  }
  if(art.dataset.picture!==picture){
    art.dataset.picture=picture;art.src="assets/endings/"+picture+".webp";art.alt=endingArtDescriptions[picture]||scene.alt;
  }
  host.replaceChildren(art);
  host.insertAdjacentHTML("beforeend",(novelCast(cue,recruitArtwork(currentCielAge()))??"")+sceneLine(who,line,arrow,'data-book="ending-'+id+'" aria-live="polite" aria-atomic="true"')+readerControls(at,last,recruitAuto));
  playNovelCue(host,"ending:"+id+":"+at,cue);
  musicPlayer.sync(trackForView());
  bindSceneReader(host,at,end,line,to=>{
    if(replay)replay.at=to;else {state.endingBeat=to;persist();}
    showEndingScene(host);host.querySelector(".line-next").focus({preventScroll:true});
  },()=>{
    stopRecruitAuto();
    const years=id==="vowTitle"?savedGrowthRecord(id,replay):null;
    if(years){
      if(replay)replay.credits=true;else {state.growthCredits=true;persist();}
      render(true);return;
    }
    finishScene();
  },cue?.wait);
  return true;
}
