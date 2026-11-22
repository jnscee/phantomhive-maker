"use strict";

const lessonGrades=["별로","그럭저럭","대성공"];
const courseFeedback={
  study:["오늘은 첫 줄부터 놓치셨습니다. 덮기 전에 문제에 나온 이름부터 다시 읽으시지요.","풀이가 맞았습니다. 결론 뒤에 그 근거를 한 줄만 더 적어 두십시오."],
  etiquette:["손님보다 도련님께서 먼저 잔을 드셨습니다. 다음에는 손님 쪽 손을 보십시오.","인사는 적절했습니다. 손님이 고개를 들 때까지 한 박자만 더 기다리시지요."],
  accounts:["전표 한 장이 장부에서 빠졌습니다. 오늘 원장은 제가 묶어 두겠습니다.","합계는 맞았습니다. 내일은 들어올 돈도 별도로 적으시지요."],
  inquiry:["그 봉인은 날짜가 다릅니다. 오늘 본 두 편지는 다시 한 묶음으로 넣지 마십시오.","봉인의 차이를 찾으셨습니다. 누가 같은 초를 썼는지 이제 확인하면 되겠군요."],
  riding:["고삐를 놓기 전에 정지하십시오. 나머지 한 바퀴는 제가 말을 데리고 돌겠습니다.","걸음이 고르게 돌아왔습니다. 다음에는 속도를 올리기 전에 발굽 소리를 들어 보십시오."],
  letters:["봉하기 전에 호칭부터 다시 보지요. 이대로 나가면 상대가 답신을 못 할 겁니다.","답장을 받을 주소까지 적혔습니다. 마지막 문장만 조금 줄이시면 되겠습니다."],
  language:["문장은 짧습니다. 우선 뜻을 옮기기 전에 주어와 동사부터 짚으시지요.","뜻은 통했습니다. 다만 마지막 음절까지 들리면 다시 물을 일이 없겠습니다."],
  music:["활을 내려놓으시지요. 오늘 어려웠던 곳은 악보에 제가 표시해 두겠습니다.","네 마디가 이어졌습니다. 다음에는 셋째 마디에서 활을 조금 남기십시오."],
  dance:["같은 발이 두 번 나갔습니다. 음악 없이 한 걸음씩 돌아 보시지요.","한 곡을 끝까지 돌아오셨습니다. 회전하기 전에 시선을 먼저 옮기십시오."],
  social:["정적을 메우느라 질문을 연달아 하셨습니다. 다음에는 대답을 하나만 기다려 보지요.","상대가 자기 이야기를 꺼냈습니다. 답례할 때 그 이야기를 기억해 두십시오."],
  negotiate:["먼저 제시하신 가격이 상한선이 됐습니다. 다음에는 납기부터 물어보시지요.","가격은 지키셨습니다. 다음에는 지연되었을 때의 책임도 써 두는 편이 좋겠습니다."],
  exercise:["어깨가 너무 일찍 올라갑니다. 다음 한 세트는 앉아서 호흡만 세시지요.","마지막 동작까지 마쳤습니다. 숨을 내쉬는 때가 들쭉날쭉했으니 내일 그 부분부터 보지요.","마지막 동작에서도 보폭과 호흡이 고릅니다. 오늘 기록은 여기에 두겠습니다."]
};
function lessonReview(id,seq){
  return courseFeedback[id]?.[seq.grade]??reviewLines[id];
}

const masteryPaths=[
  ["지성",["study","language","reading"],"책의 여백","어제 배운 라틴어가 서재 수업의 주석에서 다시 나왔습니다. 도련님께서 두 책을 같이 꺼내 두셨더군요."],
  ["기품",["etiquette","music","dance"],"인사와 첫 박자","손님을 맞는 인사와 무도의 첫걸음이 정확히 같은 때에 멈췄습니다. 두 수업을 그렇게 이어 보신 겁니까?"],
  ["매력",["letters","social","reception"],"답장을 받아내는 법","먼저 편지를 보냈던 손님들입니다. 오늘은 먼저 도련님께 말을 걸더군요. 어느 문장부터 고쳐 볼까요?"],
  ["경영",["accounts","negotiate","practicum"],"세 장의 가격표","원가와 납품가, 정산표의 숫자가 드디어 한 장 위에서 맞습니다. 도련님께서 이 원장을 직접 마감하시겠습니까?"],
  ["통찰",["inquiry","casework","developToy"],"맞지 않는 자리","현장의 약도와 장부를 포개어 보십시오. 시제품에서 바퀴가 비틀렸을 때도 딱 이만한 차이가 났지요."],
  ["의지",["inquiry","casework","music"],"마치기로 한 일","장부도 악보도 같은 쪽에 펼쳐져 있군요. 어제 도련님께서 마치겠다고 하신 곳부터 보시겠습니까?"],
  ["체력",["exercise","walk","dance"],"마지막까지 같은 호흡","체조실에서 세던 호흡으로 이제는 정원 한 바퀴와 무도 한 곡을 마치십니다. 다음 목표는 얼마로 적어 둘까요?"]
];
function masteryEvents(){
  return masteryPaths.flatMap(([stat,required,title,line],index)=>[0,1].map(rank=>{
    const threshold=rank?390:140, minimum=rank?3:1, reward=rank?110:70;
    return {id:"mastery-"+index+"-"+rank,title:rank?title+" · 최종 실기":title,text:line,
      speaker:"세바스찬",activitySet:required,
      sees:run=>run.stats[stat]>=threshold&&(!rank||run.flags["mastery-"+index+"-0"])&&required.every(id=>(run.counts[id]||0)>=minimum),
      choices:[
        choice("배운 것을 이어서 실연한다",stat+" 최대 +"+reward,()=>changeStat(stat,reward)),
        choice("짧게 실연하고 일정을 비운다",stat+" 최대 +"+Math.ceil(reward*.7)+" · 스트레스 −12",()=>{changeStat(stat,Math.ceil(reward*.7));shift("stress",-12);})
      ]};
  }));
}
function masteryGuide(){
  return '<details class="notebook-guide"><summary>세바스찬의 응용 실기 수첩</summary><p>능력 140과 지정 활동 각 1회로 응용 실기, 능력 390과 지정 활동 각 3회로 최종 실기가 열립니다. 조건을 갖춘 뒤 관련 활동을 마치면 이달 일정 중에 시험을 볼 수 있습니다.</p>'+
    masteryPaths.map(([stat,ids])=>'<p><b>'+stat+'</b> · '+ids.map(id=>actions[id].name).join(' / ')+'</p>').join("")+'</details>';
}

const birthdayScenes={
  birthday:{
    room:"ballroom",
    lines:[
      ["연출","잠들기 전 마지막 장부를 덮을 때, 복도에서 성냥 긋는 소리가 열한 번 났다."],
      ["시엘","……불을 다 끄라고 한 적은 없는데."],
      ["세바스찬","예. 그래서 도련님 자리에만 남겼습니다."],
      ["연출","식탁의 흰 접시 하나가 비어 있었다. 시엘은 등을 돌렸다가 다시 보았다."],
      ["시엘","저건 왜 뒀지?"],
      ["세바스찬","케이크를 자르실 때 쓸 접시입니다. 제가 들고 있을까요?"],
      ["시엘","그대로 둬. 나중에 한 조각 덜지."],
      ["세바스찬","그럼 먼저 초부터 끄시겠습니까?"],
      ["시엘","……몇 개인지 네가 셌어?"],
      ["세바스찬","예. 내년에도 하나 더 꽂아 두겠습니다."]
    ],
    answers:[["시엘","차도 한 잔 줘. 이번에는 다 마시고 올라갈 테니까."],["시엘","내가 먼저 자를게. 어느 쪽이 덜 무너지지?"]]
  },
  birthday2:{
    room:"ballroom",
    lines:[
      ["연출","설탕으로 만든 체스 말이 열두 개의 초 사이에 놓여 있었다. 검은 왕만 빈 칸을 앞에 두고 있었다."],
      ["시엘","이 배치, 어제 네가 나한테 진 판이잖아."],
      ["세바스찬","덕분에 도안을 따로 그릴 필요가 없었습니다."],
      ["시엘","네 왕을 먹으라는 뜻이야?"],
      ["세바스찬","그러셔도 됩니다. 다만 안에 아몬드가 들었습니다."],
      ["연출","시엘이 포크 끝으로 왕의 바닥을 한 번 밀었다. 설탕에 가느다란 금이 났다."],
      ["시엘","작년에는 초부터 끄라고 했지."],
      ["세바스찬","올해는 도련님이 먼저 순서를 정하실 때까지 기다릴 생각입니다."],
      ["시엘","그럼 식기 여섯 벌 더 가져와. 여기에 앉힐 사람이 늘었어."],
      ["세바스찬","예. 왕이 쓰러지기 전에 불러오겠습니다."]
    ],
    answers:[["시엘","이 수를 봐 둬. 내년에는 이쪽도 막아 보라고."],["시엘","초는 놔둬. 내려오는 사람들이 오면 그때 끌게."]]
  }
};
function eventLines(event){
  return birthdayScenes[event.id]?.lines??event.lines??[];
}
function storyLine(speaker,text,controls,lineAction){
  return '<article class="dialogue"><small>'+escapeHTML(speaker==="연출"?"":speaker)+'</small><p>'+escapeHTML(text)+
    (lineAction?' <button type="button" data-action="'+lineAction+'" class="line-next" aria-label="다음 대사">▼</button>':'')+
    '</p>'+(controls?'<div class="answers">'+controls+'</div>':'')+'</article>';
}
function layeredEvent(event,buttons){
  const birthday=birthdayScenes[event.id], lines=eventLines(event);
  const page=state.eventPage||0, response=state.eventResponse;
  const beat=response?.beat??lines[page]??event.prompt;
  const room=beat?.[2]?.room??birthday?.room??choreography[event.slot]?.[0]??"ballroom";
  if(!beat)return staged(castName(event),event.title,event.text,buttons,"",room);
  const atPrompt=!response&&page>=lines.length;
  const next=response||atPrompt?null:"event-line:"+page;
  const action=response?(response.summary?'<small>'+escapeHTML(response.summary)+'</small>':"")+btn("기록을 덮는다","event-close"):"";
  return '<div class="review-room" style="background-image:url(&quot;'+sceneArt[room]+'&quot;)"></div>'+
    dialogueCast("세바스찬",beat[2]?.cast)+storyLine(beat[0],state.people.tanaka&&beat[2]?.withTanaka?beat[2].withTanaka:beat[1],atPrompt?buttons:action,next);
}
function eventPresentationAction(action,page){
  if(!["slotEvent","event"].includes(state.phase)||tab!=="plan")return false;
  const event=pendingEvent();
  if(action==="event-line"&&event&&!state.eventResponse&&page===(state.eventPage||0)&&page<eventLines(event).length){
    state.eventPage=page+1;persist();render(true);return true;
  }
  if(action==="event-close"&&event&&state.eventResponse){
    closePendingEvent();return true;
  }
  return false;
}
function closePendingEvent(){
  delete state.eventPage;delete state.eventResponse;
  if(state.phase==="slotEvent"){
    state.pending=state.sequence.slotQueue?.shift()||null;
    if(!state.pending){openReview();return;}
  }else{
    state.pending=state.eventQueue?.shift()||(townhouseGuestsDue(state)?"visitPrince":null);
    if(!state.pending&&state.princeFromPlan){delete state.princeFromPlan;state.phase="plan";tab="estate";}
    else state.phase=state.pending?"event":"result";
  }
  persist();render(true);
}
