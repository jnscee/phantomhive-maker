"use strict";
let playbackTimer=0, playbackElapsed=0, speed=1, lessonPage=0;

const motionObjects={page:"▱",glint:"★",coin:"£",lens:"◎",dust:"·",letter:"▱",steam:"～",leaf:"♣",speech:"…",notes:"♫",beat:"♪",contract:"▤",toy:"◇",delivery:"▦",stamp:"◆",sun:"☆"};
function stopPlayback(){cancelAnimationFrame(playbackTimer);playbackTimer=0;}
function snapStats(run){return {...run.stats,건강:run.hp,스트레스:run.stress,의욕:run.motivation};}
function dayPlate(turn,day){
  const d=calendarDate(turn,day),m=d.getUTCMonth(),month=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][m];
  return '<div class="date-top">'+d.getUTCFullYear()+'<span> '+turn+' / '+state.duration+'</span></div><div class="date-paper"><div><b>'+month+'</b><i>'+["SUN","MON","TUE","WED","THU","FRI","SAT"][d.getUTCDay()]+'</i></div><strong>'+String(day).padStart(2,"0")+'</strong></div>';
}
function sequenceActivity(){return state.sequence.activity??state.plan[state.sequence.index];}
function playMarkup(){
  const seq=state.sequence, part=seq.index, id=sequenceActivity(), [room,frames,movement,prop,line]=choreography[id];
  const pose=frames.split(" ");
  const all=Object.keys(seq.after).filter(k=>seq.before[k]!==seq.after[k]&&(!seq.bedridden||!stats.includes(k)));
  let rows=all.map(k=>'<div class="stage-stat"><span>'+k+'</span><em data-stat="'+k+'">'+seq.before[k]+'</em><i><b></b></i><small>'+signed(seq.after[k]-seq.before[k])+'</small></div>').join("");
  return '<div class="lesson-art"><div class="lesson-plane" data-room="'+room+'"><div class="stage-room" style="background-image:url(&quot;'+sceneArt[room]+'&quot;)"></div>'+
    '<div class="performer '+movement+'" '+(actionFrames.includes(id)?'data-action-id="'+id+'"':'')+' data-frames="'+pose.join(" ")+'"><img src="'+actors[pose[0]]+'" alt="'+actions[id].name+' 중인 시엘"><span class="motion-object '+prop+'" aria-hidden="true">'+motionObjects[prop]+'</span></div></div></div>'+
    '<div class="stage-top"><b>'+stageNames[room]+'</b><span>'+slotNames[part]+' · '+actions[id].name+'</span></div>'+
    '<div class="stage-record">'+(seq.bedridden?'<b class="condition-detail">요양 · 능력치 각 −4</b>':'')+rows+'</div><div class="stage-foot"><p>'+line+'</p><div><button data-action="speed">재생 ×'+speed+'</button><button data-action="skip">이 순 마치기 ›</button></div></div>';
}
function startPlayback(resumeAt=0){
  stopPlayback();
  const seq=state.sequence, index=seq.index, turn=state.month;
  const firstDay=index*10+1,lastDay=index===2?new Date(Date.UTC(1886,turn,0)).getUTCDate():firstDay+9;
  const actor=$("playback").querySelector(".performer"),poses=actor.dataset.frames.split(" ");
  const sprite=actor.querySelector("img"), fields=[...$("playback").querySelectorAll("[data-stat]")];
  const interval=poses[0]==="trot1"?180:poses.includes("step1")?280:poses[0]==="bowOut"?390:poses.length===4?530:800;
  for(const frame of poses){const img=new Image();img.src=actors[frame];}
  playbackElapsed=resumeAt;
  let then=performance.now();
  let lastDayShown=0,lastMeterUpdate=-Infinity;
  function paint(now){
    if(state.phase!=="scene"||tab!=="plan"||state.sequence!==seq||!actor.isConnected){stopPlayback();return;}
    if(!document.hidden)playbackElapsed+=Math.min(now-then,180)*speed;
    const elapsed=playbackElapsed;
    then=now;
    const pct=Math.min(1,elapsed/6200);
    const day=firstDay+Math.floor((lastDay-firstDay)*Math.min(1,pct*1.16));
    if(day!==lastDayShown){$("date").innerHTML=dayPlate(turn,day);lastDayShown=day;}
    const frame=poses[Math.floor(elapsed/interval)%poses.length];
    if(sprite.dataset.pose!==frame){sprite.src=actors[frame];sprite.dataset.pose=frame;}
    if(elapsed-lastMeterUpdate>=70||pct>=1){
      lastMeterUpdate=elapsed;
      for(const field of fields){
        const key=field.dataset.stat,v=Math.round(seq.before[key]+(seq.after[key]-seq.before[key])*Math.min(1,pct*1.35));
        field.textContent=v;field.nextElementSibling.firstElementChild.style.width=Math.min(100,v/statMax(key)*100)+"%";
      }
    }
    if(pct>=1)finishScene();
    else playbackTimer=requestAnimationFrame(paint);
  }
  paint(then);
}
function enterSlot(){
  const seq=state.sequence,planned=state.plan[seq.index];
  seq.before=snapStats(state);
  const {changes,grade,id,bedridden,fallenIll,cost}=applyActivity(state,planned);
  Object.assign(seq,{grade,activity:id,bedridden,fallenIll});
  seq.trainingPaid??=state.plan.slice(0,seq.index).reduce((sum,key)=>sum+actions[key].cost,0);
  seq.trainingPaid+=cost;
  state.fund-=cost;
  if(!bedridden)state.counts[id]=(state.counts[id]||0)+1;
  seq.after=snapStats(state);
  const label=actions[id].name+(id!==planned?" ("+actions[planned].name+" 대체)":"");
  state.log.push(slotNames[seq.index]+" · "+label+(grade===null?"":" · "+lessonGrades[grade])+" · "+changes.join(" / "));
  state.phase="scene";tab="plan";persist();render(true);
}
function hasPendingVisit(){
  return !state.illness&&state.stress<illnessThreshold(state)&&state.visit!=="none"&&state.visitTurn!==state.month&&canVisit(state.visit);
}
function continueSequence(){
  if(state.sequence.index<2){state.sequence.index++;enterSlot();}
  else if(hasPendingVisit()){state.phase="visit";tab="plan";persist();render(true);}
  else {
    if(state.visit&&state.visit!=="none"&&(state.illness||state.stress>=illnessThreshold(state)))state.log.push("자유행동 · 과로 요양으로 방문 취소");
    settleMonth();
  }
}
function finishScene(){
  if(state.phase!=="scene")return;
  stopPlayback();
  const id=sequenceActivity();
  const eligible=state.duration===35&&!state.sequence.bedridden&&!state.illness?events.filter(e=>(e.slot===id||e.activitySet?.includes(id))&&!state.flags[e.id]&&e.sees(state)):[];
  if(eligible.length){
    state.sequence.slotQueue=eligible.map(e=>e.id);
    state.phase="slotEvent";
    closePendingEvent();
  }else openReview();
}
function faceDialogue(){
  const con=$("conversation"),event=["slotEvent","event"].includes(state.phase)&&tab==="plan"?pendingEvent():null;
  const review=state.phase==="review"&&tab==="plan";
  con.dataset.review=String(review);
  const chapter=chapterView();if(chapter){con.hidden=false;con.innerHTML=chapter;return true;}
  if(review){con.hidden=false;con.innerHTML=reviewMarkup();return true;}
  if(!event&&tab!=="chat"){con.hidden=true;con.innerHTML="";return false;}
  const c=event?{caption:state.phase==="slotEvent"?slotNames[state.sequence.index]+"의 기록":"월말의 기록",title:event.title,line:event.text,
    buttons:event.choices.map((c,i)=>btn(c.label+(c.when&&!c.when(state)?' · '+c.hint:""),"choose:"+i,Boolean(c.when&&!c.when(state)),"vn-choice")).join("")}:chatDialogue();
  con.hidden=false;
  if(event){
    if(eventLines(event).length){con.innerHTML=layeredEvent(event,c.buttons);return true;}
    const who=castName(event);
    con.innerHTML=staged(who,"",event.text,c.buttons,"",event.slot?choreography[event.slot][0]:event.id.startsWith("season-")&&event.speaker==="엘리자베스"?"garden":"ballroom");return true;
  }
  con.innerHTML=dialogueCast("세바스찬")+'<article class="dialogue"><small>'+c.caption+'</small>'+(c.title?'<h2>'+c.title+'</h2>':'')+'<p>'+c.line+'</p>'+(c.effects?'<small>'+escapeHTML(c.effects)+'</small>':'')+'<div class="answers">'+c.buttons+'</div></article>';
  return true;
}
function chatDialogue(){
  const spoken=state.spoken?.turn===state.month?state.spoken:null;
  if(spoken)return {caption:"시엘 팬텀하이브",title:spoken.title==="팬텀사의 신상품"?"":spoken.title,line:spoken.line,effects:spoken.effects,buttons:btn("대화를 마친다","back")};
  return {caption:"세바스찬 미카엘리스",line:state.hp<35?"차는 침실로 올리겠습니다. 오늘은 어느 서류를 물릴까요?":state.stress>60?"오늘은 찻잔이 식을 때까지 한 장도 넘기지 않으셨군요.":"오후의 홍차가 준비됐습니다. 오늘은 어떤 이야기를 나누시겠습니까?",
    buttons:btn("몸 상태를 묻는다","chatline:health")+btn("팬텀사 이야기를 꺼낸다","chatline:business")+btn("차를 한 잔 더 따른다","chatline:tea")+btn("다음에","back")};
}
function speak(id){
  if(state.phase!=="plan"||state.spoken?.turn===state.month)return;
  const lines={health:["몸 상태","“내가 무리하면 먼저 눈치챌 건 너잖아. 오늘 회의는 삼십 분 늦춰.”"],business:["","“장식은 나중이야. 아이가 혼자서도 상자를 열 수 있는지부터 봐.”"],tea:["오후의 홍차","“……그래. 한 잔만 더. 그동안은 서류도 그대로 두고.”"]};
  if(!Object.hasOwn(lines,id))return;
  if(id==="tea"||id==="health")state.flags.attention=(state.flags.attention||0)+1;
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
  const [title,line]=lines[id];
  state.spoken={turn:state.month,title,line,effects};
  persist();render(true);
}
