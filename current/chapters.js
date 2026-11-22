"use strict";
function portraitAge(){const run=tourSession?.state??state;return ageAt(run.month,portraitDay(run));}
function portraitDay(run){return ["event","result","vow","ending"].includes(run.phase)?calendarDate(run.month+1,0).getUTCDate():run.phase==="slotEvent"||run.phase==="review"?Math.min(28,10*((run.sequence?.index??0)+1)):1;}
const portraits={라우:"assets/npc-lau.webp",세바스찬:"assets/sebastian.webp",타나카:"assets/npc-tanaka.webp",피니안:"assets/npc-finny.webp",메이린:"assets/npc-mey.webp",바르도:"assets/npc-bard.webp",스네이크:"assets/npc-snake.webp",소마:"assets/npc-soma.webp",아그니:"assets/npc-agni.webp",get 엘리자베스(){const age=elizabethAge();return age===13?"assets/npc-lizzy.webp":"assets/npc-lizzy-"+age+(age===12?"-portrait":"")+".webp";},get 시엘(){const age=portraitAge();return age<11?"assets/ciel.png":"assets/ciel-"+Math.min(age,12)+".webp";}};
const castByEvent={gardener:"피니안",maid:"메이린",cook:"바르도",circus:"스네이크",visitPrince:"소마",jubilee:"세바스찬",agniTray:"아그니",greenhouseKey:"피니안"};
function castName(e){return castByEvent[e.id]||((e.speaker in portraits)?e.speaker:"세바스찬");}
function elizabethAge(){return Math.max(11,Math.min(13,portraitAge()+1));}
const castHeights={세바스찬:189,타나카:164,피니안:165,메이린:165,바르도:181,스네이크:172,소마:174,아그니:188,라우:177};
function dialogueCast(speaker,cast=[speaker==="시엘"?"세바스찬":speaker,"시엘"]){
  return cast.map((name,index)=>
    '<img class="butler cast '+(index?"cast-right":"cast-left")+'" alt="'+name+'" style="--cast-height:'+
    (name==="시엘"?"var(--ciel-height)":(name==="엘리자베스"?[145,151,157][elizabethAge()-11]:castHeights[name]||177)/189)+
    '" src="'+portraits[name]+'">').join("");
}
function staged(who,title,line,buttons,caption="",room="library",partner=who){
  return '<div class="review-room" style="background-image:url(&quot;'+sceneArt[room]+'&quot;)"></div>'+dialogueCast(partner)+'<article class="dialogue"><small>'+(caption?caption+'　·　':'')+who+'</small>'+(title?'<h2>'+title+'</h2>':'')+'<p>'+line+(buttons?'</p><div class="answers">'+buttons+'</div>':' <button type="button" class="line-next" aria-label="다음 대사" data-action="intro-next">▼</button></p>')+'</article>';
}
const guide=[
 ["날짜판과 명패","오늘 날짜는 왼쪽 위 달력을 보십시오. 연도 옆에는 서른다섯 달 중 몇 달째인지 적어 두었습니다. 저택의 오른쪽 위 명패에는 도련님의 나이와 가문의 잔금이 있습니다."],
 ["일정표","왼쪽 아래 ‘일정표’에 상순·중순·하순 세 칸을 마련했습니다. 어느 때를 비워 두시겠습니까? 바꾸실 칸을 먼저 짚고 활동을 고르시면 제가 적겠습니다. £ 옆의 숫자가 그 비용입니다."],
 ["자유행동","‘자유행동’은 도련님의 외출을 위해 비워 둔 칸입니다. 한 달에 한 곳을 정하실 수 있습니다. 누구와 무슨 이야기를 나누실지는 도착한 뒤에 정하셔도 됩니다."],
 ["팬텀사","‘관리 · 경영’에서 ‘팬텀 사(社)’를 여십시오. 개발실에서는 상품을, 제작실에서는 수량을, 판매점에서는 값을 정하시면 됩니다. 수업료가 모자라겠다면 이번 생산량을 조금 줄이는 편이 좋겠습니다."],
 ["저택","‘관리 · 경영’의 지도에서 방을 짚으시면 시설과 근무지를 살필 수 있습니다. 개수를 명하시기 전에 비용과 이달의 관리 상태를 보십시오. 간식이 필요하시면 저택 메뉴의 ‘상점’으로 모시겠습니다."],
 ["실행","명하신 대로 준비했습니다. 저택의 ‘실행’이나 일정표의 ‘이달 일정 실행’을 고르시면 상순부터 시작하겠습니다. 매 순의 성과는 제가 보고드리겠습니다. 하순 강평 뒤에 정해 두신 곳을 방문합니다. 돌아오시면 그달의 결산을 보고드리겠습니다."],
 ["대화와 상태","저택에서 ‘대화’로 부르시면 제가 듣겠습니다. ‘상태’에서는 도련님의 건강과 능력을 보실 수 있습니다. 피곤하시면 다음 한 순은 비워 둘까요?"],
 ["가문 장부와 수첩","지나간 사건은 달력 위 ‘가문 장부’에 적어 두었습니다. ‘수첩 · 저장’에서는 저장 칸과 음량을 고르실 수 있습니다. 음악만 잠시 끄시려면 BGM 버튼을, 돌아가시려면 ‘뒤로’를 눌러 주십시오."]
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
 library:["archive","서가 맨 아래에 그을린 장부가 누워 있다.","이 장은 제가 보관해 두었습니다. 귀퉁이가 타도 날짜는 읽히지요.","가문의 장서표를 대조한다"],
 garden:["garden","온실의 유리에 물방울이 맺혔다.","도련님, 이 새순 좀 보세요. 오늘은 힘을 빼고 옮겨 심었어요!","흙이 마른 화분부터 살핀다"],
 kitchen:["office","식탁에 저녁 식단과 빈 접시가 놓여 있다.","오늘은 오븐으로만 구웠습니다. 한 조각 먼저 드셔 보시죠.","저녁 식단을 함께 짠다"],
 quarters:["bedroom","복도 끝 옷걸이에 새 앞치마가 걸려 있다.","단추를 전부 다시 달았어요, 도련님. 이번엔 틀림없습니다요!","사용인들의 작업 일지를 본다"],
 parlor:["ballroom","은쟁반 위에 다음 다과회의 답신이 쌓여 있다.","","명함의 호칭을 확인한다"],
 company:["office","시제품 옆에 반품된 상자가 놓여 있다.","","상자를 직접 열어 본다"],
 town:["street","비에 젖은 쇼윈도 너머로 완구점 주인이 손을 흔든다.","","요즘 팔리는 물건을 묻는다"],
 townhouse:["ballroom","손님방에 따뜻한 물이 준비되어 있다.","시엘! 오늘만큼은 내가 고른 차를 먼저 마셔 봐라.","찻잔을 받아 든다"]
};
function quartersVisitors(){return ["mey","snake"].filter(id=>state.people[id]);}
function visitPerson(id){
 if(id==="quarters"){
   const visitors=quartersVisitors();
   return visitors.includes(state.sequence?.visitPerson)?state.sequence.visitPerson:visitors[0]??null;
 }
 const person=visiting[id][1];
 if(id==="townhouse"&&state.flags.agni&&state.month%2===0)return "agni";
 return state.people[person]?person:null;
}
function visitName(person){return person==="agni"?"아그니":servants[person]?.name||"세바스찬";}
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
 const encounter=id==="quarters"&&quartersVisitors().length===2?"메이린 · 스네이크 중 선택":visitName(person)+" · "+(person==="snake"?snakeRound(state)[0]:visitsVN[id][3]);
 return [encounter,...possible.map(e=>"가능 사건 · "+e.title)].join(" / ");
}
const visitGrowth={library:"통찰",garden:"체력",kitchen:"지성",quarters:"통찰",parlor:"기품",company:"경영",town:"매력",townhouse:"매력"};
function visitScene(){
 const id=state.visit,[room,plain,spoken,label]=visitsVN[id];
 const seq=state.sequence;
 if(seq.visitEvent){
   const page=encounterPage(seq,room);
   if(page)return page;
   const event=events.find(e=>e.id===seq.visitEvent);
   const buttons=event.choices.map((c,i)=>btn(c.label+(c.when&&!c.when(state)?" · "+c.hint:""),"visit-choice:"+i,Boolean(c.when&&!c.when(state)))).join("");
   return staged(castName(event),"",event.text,buttons,"",room);
 }
 if(seq.visitBefore){
   if(seq.encounterReply){
     const [speaker,line]=seq.encounterReply;
     return staged(speaker,"",line,btn(seq.index===0?"상순으로":"월말 결산으로","visit-finish"),"방문 기록",room,seq.encounterPartner);
   }
   const changes=visitChanges();
   return staged(visitName(visitPerson(id)),"",changes.join(" · ")||"더 변한 수치는 없습니다.",
     btn(seq.index===0?"상순으로":"월말 결산으로","visit-finish"),visits[id]+" · 자유행동 결과",room);
 }
 const visitors=id==="quarters"?quartersVisitors():[];
 const canChoose=visitors.length>1;
 if(canChoose&&!seq.visitPerson){
   return staged("세바스찬",visits[id],"메이린 씨는 작업 일지를 정리 중입니다. 스네이크 씨는 복도 끝에 있고요. 어느 쪽으로 모실까요?",
     visitors.map(person=>btn(visitName(person)+" 만나기","visit-person:"+person)).join("")+btn("잠시 머물다 돌아간다","visit-done:quiet"),"자유행동",room);
 }
 const person=visitPerson(id);
 let line=spoken;
 let actionLabel=label;
 if(person==="snake")[actionLabel,line]=snakeRound(state);
 if(person==="agni")line="소마 님께서는 도련님이 오시기 전에 잔부터 데워 두셨습니다.";
 if(id==="garden"&&person&&state.flags.greenhouse)line="그날 주신 열쇠예요. 도련님이 먼저 열어 보실래요?";
 return staged(visitName(person),visits[id],person?line:plain,btn(actionLabel,"visit-done:engage")+btn("잠시 머물다 돌아간다","visit-done:quiet")+(canChoose?btn("만날 사람 다시 고르기","visit-person:back"):""),"자유행동",room);
}
function visitDone(engage){
 if(state.phase!=="visit"||state.sequence.visitBefore||state.visitTurn===state.month)return;
 const id=state.visit,seq=state.sequence;
 if(id==="quarters"&&quartersVisitors().length>1&&!seq.visitPerson&&engage)return;
 seq.visitBefore=snapStats(state);
 state.visitTurn=state.month;
 if(engage){
   const who=visitPerson(id);
   if(who==="snake")state.flags.snakeRounds=(state.flags.snakeRounds||0)+1;
   if(who==="agni")state.flags.agniTea=true;else if(who)talkTrust(who);
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
 state.log.push(choice.result);
 if(card){seq.encounterReply=card.choices[index].reply;seq.encounterPartner=card.npc;}
 delete seq.encounterPage;
 delete seq.visitEvent;
 persist();render(true);
}
function finishVisit(){
 const seq=state.sequence;
 if(state.phase!=="visit"||!seq.visitBefore||seq.visitEvent)return;
 const changes=visitChanges();
 if(changes.length)state.log.push("자유행동 성과 · "+changes.join(" · "));
 delete seq.visitBefore;delete seq.encounterReply;delete seq.encounterPartner;
 delete seq.visitPerson;
 if(seq.index===0)enterSlot();else settleMonth();
}
function chapterView(){
 if(tab!=="plan")return "";
 if(state.phase==="guide"){const i=state.guidePage||0;return staged("세바스찬",guide[i][0],guideMenu(i)+guide[i][1],btn(i===guide.length-1?"저택으로":"다음 안내","guide-next")+btn("안내 마치기","guide-end"),"조작 안내 "+(i+1)+" / "+guide.length);}
 if(state.phase==="visit")return visitScene();
 return "";
}
function chapterAction(action,id,confirmed,rect){
 if(state.phase==="guide"&&["guide-end","guide-next"].includes(action)){
 if(action==="guide-end"||state.guidePage>=guide.length-1){state.phase="plan";tab="home";}else state.guidePage++;
 }else if(action==="visit-person"&&state.phase==="visit"&&state.visit==="quarters"&&!state.sequence.visitBefore){
  if(id==="back")delete state.sequence.visitPerson;
  else if(quartersVisitors().includes(id))state.sequence.visitPerson=id;
  else return false;
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
 ["riding","체력","고삐를 짧게 잡는 때","말이 울타리 끝에서 속도를 높였습니다. 고삐를 당기기 전에 어디부터 살피시겠습니까?","말의 발과 내 자세를 확인한다","정지한 뒤 다시 출발한다"],
 ["letters","매력","답신의 한 문장","초대를 거절하시면서 다음 만남을 청해야 합니다. 어디부터 쓰시겠습니까?","상대와 다시 만나고 싶은 이유를 먼저 쓴다","정중한 인사말부터 고친다"],
 ["language","지성","라틴어 구술","이 문장의 주어를 바꾸면 동사의 어느 부분이 달라집니까?","인칭 어미를 고쳐 읽는다","격변화표를 펼친다"],
 ["music","기품","바이올린 실기","악보를 덮겠습니다. 방금 멈춘 마디부터 이어 주시겠습니까?","앞선 악구를 떠올려 잇는다","처음부터 박자를 센다"],
 ["dance","기품","무도 실기","반주가 한 박자 멎었습니다. 상대의 발끝이 아직 떠 있군요.","체중이 옮겨질 때까지 기다린다","발의 위치를 다시 맞춘다"],
 ["social","매력","다과회 실기","초면인 손님 둘이 같은 은쟁반을 집었습니다. 도련님이라면요?","둘의 공통 관심사를 꺼낸다","잔을 새로 내온다"],
 ["negotiate","경영","협상 실기","납품가는 같고 도착일이 다릅니다. 어느 조건부터 물으시겠습니까?","지연 때의 부담을 확인한다","견적을 다시 읽는다"],
 ["exercise","체력","체조실의 마지막 세트","벽시계의 초침을 세지 않고 마지막 동작까지 호흡을 맞출 수 있겠습니까?","자기 호흡에 맞춰 마친다","앉아서 호흡부터 고른다"]
];
function examReward(run,stat){
 const grade=run.sequence.grade??1;
 return grade===2?28:grade===1?16:-4;
}
function examEvents(){return exams.map(([slot,stat,title,text,a,b])=>({id:"exam-"+slot,slot,title,text,speaker:"세바스찬",exam:true,
 lines:[["연출",stageNames[choreography[slot][0]]+". 수업이 끝났는데 세바스찬은 교본을 거두지 않았다."],
   ["세바스찬","오늘 배운 부분은 제가 짚어 드리지 않겠습니다. 도련님께서 먼저 어느 부분을 보셨는지 듣고 싶습니다."],
   ["시엘","……문제를 내." ]],
 sees:s=>s.counts[slot]>=2&&s.stats[stat]>=18,
 examSummary:(run,i)=>i?stat+" +8 · 의욕 +5 · 스트레스 −4":stat+" "+signed(examReward(run,stat))+" · "+lessonGrades[run.sequence.grade??1],
 examAnswer:(run,i)=>["세바스찬",i?"여기까지 하시지요. 처음부터 다시 해 보는 건 다음 수업 때의 몫으로 남겨 두겠습니다.":(run.sequence.grade===2?"좋습니다. 이제 제가 곁에서 순서를 불러 드릴 일은 없겠군요.":run.sequence.grade===0?"거기까지만. 어디서부터 놓치셨는지 표시해 두겠습니다.":"답은 나왔습니다. 다음에는 그 생각에 이르기까지 걸린 시간을 줄여 보시지요.")],
 choices:[choice(a,"실기 결과 기록",()=>{const gain=examReward(state,stat);changeStat(stat,gain);shift("stress",gain<0?5:2);}),
   choice(b,"보충 지도 · "+stat+" +8 · 의욕 +5 · 스트레스 −4",()=>{changeStat(stat,8);shift("motivation",5);shift("stress",-4);})]}));}
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
function foundationEvents(){return [{id:"homecoming",chapter:true,speaker:"타나카",title:"돌아온 집사",text:"도련님, 지팡이는 현관에 두어도 되겠습니다. 제 방 열쇠를 아직 간직하고 계셨군요.",sees:s=>s.month>=3&&!s.people.tanaka,choices:[
 choice("서재 열쇠를 돌려준다","타나카 복귀 · 서재 근무",()=>{recruit("tanaka");state.staff="library";}),
 choice("먼저 다과를 함께한다","타나카 복귀 · 신뢰 상승",()=>{recruit("tanaka");state.staff="library";talkTrust("tanaka",2);})]},
 {id:"unasked",speaker:"세바스찬",title:"명령보다 한 박자 먼저",text:"시엘이 손을 내밀자 장갑이 이미 그 위에 놓였다. “아직 부르지 않았는데.” 세바스찬은 반대쪽 장갑의 단추를 풀었다. “다시 벗겨 드릴까요?”",sees:s=>s.month>=4&&(s.flags.attention||0)>=3,choices:[choice("말없이 다음 장갑을 건넨다","둘만의 아침 습관 기록",()=>{state.flags.gloves=true;}),choice("도련님의 대답을 기다린다","의지 +3",()=>changeStat("의지",3))]}];}
function sourceNote(e){return e.source||({jubilee:"1887년 6월 빅토리아 여왕 즉위 50주년 · 가문 참여 IF",match:"1888년 런던 성냥공장 파업 · 회사 대응 IF",circus:"원작 서커스 편 · 야드 체포와 합류는 IF",gardener:"원작 인물 설정 · 영입 시점 IF",maid:"원작 인물 설정 · 영입 시점 IF",cook:"원작 인물 설정 · 영입 시점 IF",homecoming:"원작 인물 설정 · 요양 후 복귀 IF"}[e.id])||"";}
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
 const picker=["family","gift"].map((k,i)=>option(i?"선물용 · 판매 담당":"가정용 · 제작 담당","brief:"+k,(state.brief||"family")===k,state.phase!=="plan")).join(" ");
 return '<h4>시제품 기획</h4>'+(project?'<p>'+products[project.product].name+' · '+(project.brief==="gift"?"선물 포장":"튼튼한 몸체")+' · '+(project.approved?"출시 승인":"월말 검수 예정")+'</p>':picker);
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
