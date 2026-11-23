"use strict";
let playbackTimer=0, playbackElapsed=0, speed=1, lessonPage=0;

const motionObjects={page:"▱",glint:"★",coin:"£",lens:"◎",dust:"·",letter:"▱",steam:"～",leaf:"♣",speech:"…",notes:"♫",beat:"♪",contract:"▤",toy:"◇",delivery:"▦",stamp:"◆",sun:"☆"};
function stopPlayback(){clearInterval(playbackTimer);playbackTimer=0;}
function snapStats(run){return {...run.stats,건강:run.hp,스트레스:run.stress,의욕:run.motivation};}
function dayPlate(turn,day){
  const d=calendarDate(turn,day),m=d.getUTCMonth(),month=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][m];
  return '<div class="date-top">'+d.getUTCFullYear()+'<span> '+turn+' / '+state.duration+'</span></div><div class="date-paper"><div><b>'+month+'</b><i>'+["SUN","MON","TUE","WED","THU","FRI","SAT"][d.getUTCDay()]+'</i></div><strong>'+String(day).padStart(2,"0")+'</strong></div>';
}
function playMarkup(){
  const seq=state.sequence, part=seq.index, id=seq.activity||state.plan[part], [room,frames,movement,prop,line]=choreography[id];
  const pose=frames.split(" ");
  const outcome=lessonGrades[seq.grade]?.label;
  const stageText=(advancedCourse(state,id)?advancedLessons[id]+" ":"")+(outcome?lessonPlayback(id,seq.grade,seq.remark):line);
  const all=Object.keys(seq.after).filter(k=>seq.before[k]!==seq.after[k]);
  let rows=all.map(k=>'<div class="stage-stat"><span>'+k+'</span><em data-stat="'+k+'">'+seq.before[k]+'</em><i><b></b></i><small>'+signed(seq.after[k]-seq.before[k])+'</small></div>').join("");
  return '<div class="lesson-art"><div class="lesson-plane" data-room="'+room+'"><div class="stage-room" style="background-image:url(&quot;'+sceneArt[room]+'&quot;)"></div>'+
    '<div class="performer '+movement+'" data-frames="'+pose.join(" ")+'"><img src="'+actors[pose[0]]+'" alt="'+courseName(id)+' 중인 시엘"><span class="motion-object '+prop+'" aria-hidden="true">'+motionObjects[prop]+'</span></div></div></div>'+
    '<div class="stage-top"><b>'+stageNames[room]+'</b><span>'+slotNames[part]+' · '+courseName(id)+(outcome?' · '+outcome:'')+'</span></div>'+
    '<div class="stage-record">'+rows+'</div><div class="stage-foot"><p>'+stageText+'</p><div><button data-action="speed">재생 ×'+speed+'</button><button data-action="skip">이 순 마치기 ›</button></div></div>';
}
function startPlayback(resumeAt=0){
  stopPlayback();
  const seq=state.sequence, index=seq.index, turn=state.month;
  const firstDay=index*10+1,lastDay=index===2?new Date(Date.UTC(1886,turn,0)).getUTCDate():firstDay+9;
  const actor=$("playback").querySelector(".performer"),poses=actor.dataset.frames.split(" ");
  const custom=illustratedActivities.includes((seq.activity||state.plan[index]));
  const frameMs=custom?((seq.activity||state.plan[index])==="exercise"?260:(seq.activity||state.plan[index])==="recovery"?950:460):
    poses[0]==="trot1"?180:poses.includes("step1")?280:poses[0]==="bowOut"?390:800;
  const sprite=actor.querySelector("img"), fields=[...$("playback").querySelectorAll("[data-stat]")];
  for(const pose of new Set(poses)){const image=new Image();image.src=actors[pose];}
  playbackElapsed=resumeAt;
  let then=performance.now();
  function paint(){
    if(state.phase!=="scene"||tab!=="plan"||state.sequence!==seq||!actor.isConnected){stopPlayback();return;}
    const now=performance.now();
    if(!document.hidden)playbackElapsed+=Math.min(now-then,180)*speed;
    const elapsed=playbackElapsed;
    then=now;
    const pct=Math.min(1,elapsed/6200);
    $("date").innerHTML=dayPlate(turn,firstDay+Math.floor((lastDay-firstDay)*Math.min(1,pct*1.16)));
    const poseInterval=motionReduced()?Math.max(800,frameMs):frameMs;
    const frame=motionMode==="reduced"?poses[0]:poses[Math.floor(elapsed/poseInterval)%poses.length];
    if(sprite.dataset.pose!==frame){const src=actors[frame];if(sprite.getAttribute("src")!==src)sprite.src=src;sprite.dataset.pose=frame;}
    for(const field of fields){
      const key=field.dataset.stat,v=Math.round(seq.before[key]+(seq.after[key]-seq.before[key])*Math.min(1,pct*1.35));
      field.textContent=v;field.nextElementSibling.firstElementChild.style.width=Math.min(100,v/statMax(key)*100)+"%";
    }
    if(pct>=1)finishScene();
  }
  playbackTimer=setInterval(paint,85);paint();
}
function enterSlot(){
  const seq=state.sequence,planned=state.plan[seq.index];
  updateIllness(state);
  const id=careActivity(state,planned);
  seq.activity=id;seq.onSickLeave=Boolean(state.ill);
  const paid=actions[planned].cost;
  seq.trainingPaid??=state.plan.slice(0,seq.index).reduce((total,key)=>total+actions[key].cost,0);
  seq.trainingPaid+=paid;
  seq.before=snapStats(state);
  state.fund-=paid;
  seq.grade=lessonResult(state,id,seq.index);
  seq.remark=(state.counts[id]||0)%2;
  delete seq.examNote;
  const changes=applyActivity(state,id,seq.grade);
  state.counts[id]=(state.counts[id]||0)+1;
  if(seq.onSickLeave&&id!==planned)state.log.push(actions[planned].name+" 결석 · 요양으로 대체 · 예약 비용 "+money(paid));
  if(!seq.onSickLeave&&state.ill)state.log.push("병환 · 다음 일정부터 요양");
  if(seq.onSickLeave&&!state.ill)state.log.push("건강 회복 · 다음 순부터 일정에 복귀");
  seq.after=snapStats(state);
  state.log.push(slotNames[seq.index]+" · "+courseName(id)+" · "+(seq.grade?lessonGrades[seq.grade].label+" · ":"")+changes.join(" / "));
  state.phase="scene";tab="plan";persist();render(true);
}
function hasPendingVisit(){
  return !state.ill && state.visit!=="none"&&state.visitTurn!==state.month&&canVisit(state.visit);
}
function continueSequence(){
  if(state.sequence.index<2){state.sequence.index++;enterSlot();}
  else if(hasPendingVisit()){state.phase="visit";tab="plan";persist();render(true);}
  else {
    if(state.ill && state.visit && state.visit!=="none")state.log.push("자유행동 · 병환으로 방문 취소");
    settleMonth();
  }
}
function finishScene(){
  if(state.phase!=="scene")return;
  stopPlayback();
  const id=state.sequence.activity||state.plan[state.sequence.index];
  const eligible=state.duration===35&&!state.sequence.onSickLeave&&!state.ill?events.filter(e=>(e.slot===id||e.statExam)&&!state.flags[e.id]&&e.sees(state)):[];
  if(eligible.length){
    state.sequence.slotQueue=eligible.map(e=>e.id);
    state.pending=state.sequence.slotQueue.shift();state.phase="slotEvent";persist();render(true);}
  else openReview();
}
function faceDialogue(){
  const con=$("conversation"),event=["slotEvent","event"].includes(state.phase)&&tab==="plan"?pendingEvent():null;
  if(showEndingScene(con))return true;
  if(tab==="staffMemory"&&recruitMemory){showRecruitMemory(con);return true;}
  if(event&&Object.hasOwn(recruitScenes,event.id)){con.dataset.review="false";showMonthlyRecruit(con,event);return true;}
  const review=state.phase==="review"&&tab==="plan";
  con.dataset.review=String(review);
  const chapter=chapterView();if(chapter){con.hidden=false;con.innerHTML=chapter;return true;}
  if(review){con.hidden=false;con.innerHTML=reviewMarkup();return true;}
  if(!event&&tab!=="chat"){con.hidden=true;con.innerHTML="";return false;}
  con.hidden=false;
  if(event){
    const buttons=event.choices.map((c,i)=>btn(c.label+(c.when&&!c.when(state)?' · '+c.hint:""),"choose:"+i,Boolean(c.when&&!c.when(state)),"vn-choice")).join("");
    con.innerHTML=termDialogue(event,buttons)||staged(castName(event),"",storyLine(event),buttons,"",event.slot?choreography[event.slot][0]:event.id.startsWith("season-")&&event.speaker==="엘리자베스"?"garden":"ballroom");return true;
  }
  const c=chatDialogue();
  con.innerHTML=dialogueCast("세바스찬")+'<article class="dialogue"><small>'+c.caption+'</small><p>'+c.line+'</p>'+(c.effects?'<small>'+escapeHTML(c.effects)+'</small>':'')+'<div class="answers">'+c.buttons+'</div></article>';
  return true;
}
function sebastianRegard(abilities){
  const average=stats.reduce((total,key)=>total+abilities[key],0)/stats.length;
  return average>=350?3:average>=225?2:average>=100?1:0;
}
const butlerGreetings=[
  "차를 한 잔 드시지요. 잔은 오른쪽에 두었습니다. 편지를 펼치시기 전에 봉투의 이름부터 확인하시고요.",
  "편지 두 통과 차를 가져왔습니다. 어떤 편지를 먼저 여시겠습니까? 오늘은 제가 순서를 매기지 않았습니다.",
  "봉투는 그대로 두었습니다. 제 짐작을 말씀드리면 도련님 생각을 들을 기회를 놓치겠지요.",
  "오늘 답신을 기다릴 분께는 차를 한 잔 더 내드렸습니다. ……도련님께서 어느 봉투를 나중에 여실지, 저도 이제 제법 잘 맞히지요?"
];
const butlerReplies={
 health:["삼십 분 늦추겠습니다. 그동안만큼은 장부를 제게 주시지요.","그 정도면 차가 식기 전에 눈을 좀 붙이실 수 있겠군요. 깨워 드리겠습니다.","삼십 분이면 충분하시겠습니까? 그럼 그 시각에 맞춰 손님을 들이겠습니다.","예. 삼십 분 뒤에 깨워 드리지요. 다시 부르실 때까지 여기 있겠습니다."],
 business:["그럼 이 매듭을 한 손으로 풀어 보십시오. 다른 손엔 장난감을 들고 있다고 생각하시고요.","리본부터 보셨군요. 어느 끝을 당겨야 하는지 아이도 알아볼까요?","알겠습니다. 매듭만 바꾼 견본을 하나 더 가져오지요. 두 상자 중 어느 것을 먼저 집는지 보시겠습니까?","저도 뚜껑을 고쳐야겠다 싶었습니다만, 리본 하나를 빼면 그만이군요. 이번엔 도련님 안이 한 수 위였습니다."],
 tea:["한 잔 더 올리지요. 이번엔 설탕을 넣기 전에 향부터 맡아 보십시오.","조금 더 진하게 우려 보았습니다. 어느 쪽이 나은지는 도련님께서 말씀해 주시지요.","예, 같은 차로 올리겠습니다. 두 번째 잔을 청하시면 그날의 차는 합격이라고 여겨도 되겠습니까?","한 잔 더, 입니까. 그럼 저도 배운 보람이 있군요. ……예전에는 다시 우려 오라는 분부를 더 자주 내리셨거든요."]
};
function chatDialogue(){
  const spoken=state.spoken?.turn===state.month?state.spoken:null;
  if(spoken){
    const end=btn("대화를 마친다","back");
    if(spoken.replyRead&&spoken.reply)return {caption:"세바스찬 미카엘리스",line:spoken.reply,buttons:end};
    return {caption:"시엘 팬텀하이브",line:spoken.line,effects:spoken.effects,buttons:spoken.reply?btn("세바스찬의 대답을 듣는다","chat-reply")+end:end};
  }
  return {caption:"세바스찬 미카엘리스",line:state.ill||state.hp<35?"차는 침실로 올리겠습니다. 오늘은 어느 서류를 물릴까요?":state.stress>60?"오늘은 찻잔이 식을 때까지 한 장도 넘기지 않으셨군요.":butlerGreetings[sebastianRegard(state.stats)],
    buttons:btn("몸 상태를 묻는다","chatline:health")+btn("팬텀사 이야기를 꺼낸다","chatline:business")+btn("차를 한 잔 더 따른다","chatline:tea")+btn("다음에","back")};
}
function speak(id){
  if(state.phase!=="plan"||state.spoken?.turn===state.month)return;
  const lines={health:["몸 상태","“내가 무리하면 먼저 눈치챌 건 너잖아. 오늘 회의는 삼십 분 늦춰.”"],business:["","“장식은 나중이야. 아이가 혼자서도 상자를 열 수 있는지부터 봐.”"],tea:["오후의 홍차","“……그래. 한 잔만 더. 그동안은 서류도 그대로 두고.”"]};
  if(!Object.hasOwn(lines,id))return;
  if(id==="tea"||id==="health")state.flags.attention=(state.flags.attention||0)+1;
  const reply=butlerReplies[id][sebastianRegard(state.stats)];
  const before=snapStats(state);
  if(id==="health"){
    changeStat("통찰",6);
    state.stress=cap(state.stress-6);
  }else if(id==="business"){
    changeStat("경영",7);
    changeStat("지성",4);
  }else{
    changeStat("매력",6);
    state.motivation=cap(state.motivation+5);
    state.flags.quietTea=(state.flags.quietTea||0)+1;
  }
  const after=snapStats(state);
  const effects=Object.keys(after).filter(k=>before[k]!==after[k])
    .map(k=>k+" "+signed(after[k]-before[k])).join(" · ")||"수치 변동 없음";
  const [title,usual]=lines[id];
  let line=usual;
  if(id==="tea"&&state.flags.teaBlend)line="“설탕은 하나. 그래, 오늘도 그걸로.” 시엘이 서류에서 눈을 떼지 않고 잔을 받습니다.";
  if(id==="health"&&state.flags.morningGloves)line="“손을 내밀기도 전에 장갑부터 챙기는 녀석이 그걸 물어?” 시엘이 반대쪽 손도 내밉니다.";
  state.spoken={turn:state.month,title,line,reply,effects};
  persist();render(true);
}
