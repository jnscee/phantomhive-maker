"use strict";

for(const card of visitEncounterCards){
  for(const row of authoredOptions[card.id]??[]){
    const authored=authoredChoice(row);
    card.choices.push({label:authored.label,reply:[card.npc,authored.response],authored});
  }
}

function visitorEvents(){
  return visitEncounterCards.map(card=>({
    id:card.id, title:card.title, speaker:card.npc, text:card.lines[0][1], visitPlace:card.place,
    visitOnly:true, source:"저택과 런던의 방문 기록",
    sees:run=>run.visit===card.place && card.condition(run) &&
      (card.place!=="quarters" || visitName(visitPerson("quarters"))===card.npc),
    choices:card.choices.map(answer=>answer.authored??({
      label:answer.label, result:answer.reply[1],
      effect(){
        if(answer.trust)talkTrust(answer.trust);
        if(answer.stat)shift(answer.stat,answer.amount);
      }
    }))
  }));
}
function encounterPage(seq,room){
  const card=visitEncounterCards.find(item=>item.id===seq.visitEvent);
  if(!card)return "";
  const page=Math.min(seq.encounterPage||0,card.lines.length-1);
  const [who,line]=card.lines[page];
  const controls=page===card.lines.length-1
    ?card.choices.map((answer,index)=>{
      const locked=answer.authored?.when&&!answer.authored.when(state);
      return btn(answer.label+(locked?" · "+answer.authored.hint:""),"visit-choice:"+index,Boolean(locked));
    }).join("")
    :btn("다음 대사","encounter-next:"+page);
  return staged(who,card.title,line,controls,"자유행동",room,card.npc);
}
function encounterAction(action,argument){
  if(action!=="encounter-next")return false;
  const seq=state.sequence;
  const card=visitEncounterCards.find(item=>item.id===seq?.visitEvent);
  if(state.phase==="visit" && card && Number(argument)===(seq.encounterPage||0) && Number(argument)<card.lines.length-1){
    seq.encounterPage=Number(argument)+1;
    persist();render(true);
  }
  return true;
}

function openContests(run){
  return contests.filter(fair=>run.duration===35 && (run.month===fair.month-1 || run.month===fair.month) && !run.fairBook?.[fair.id]);
}
const contestSlot=2;
function reservedContest(run){
  return openContests(run).find(fair=>fair.month===run.month&&contestTicket(run,fair));
}
function contestCutoffs(fair){
  if(fair.warrant)return [[55,82],[62,90],[68,96]][fair.year];
  if(fair.company)return fair.month===5?[37,62]:fair.month===18?[48,76]:[55,84];
  const targets={1:[[24,46],[115,195],[235,365]],4:[[37,73],[145,230],[260,390]],9:[[63,115],[185,275],[295,420]]};
  return targets[(fair.month-1)%12+1][fair.year];
}
function contestPurse(fair){
  const first=fair.warrant?65:fair.company?55:36+fair.year*10;
  return [0,Math.floor(first*0.55),first];
}
function availableSample(run,id){
  const producing=id===run.product&&run.qty>0;
  return {
    ready:producing||(run.stock[id]||0)>0,
    fine:(producing&&run.quality==="fine")||(run.fineStock[id]||0)>0
  };
}
function contestTicket(run,fair){
  const entry=run.fairTickets?.[fair.id];
  if(entry?.product||!fair.company||!entry)return entry;
  // Older London registrations chose a demonstration with an associated product.
  const old=legacyLondonFestivals.find(f=>f.id===fair.id);
  return {product:old?.options[entry.index]?.product};
}
function festivalNotice(){
  return openContests(state).map(fair=>{
    const ticket=contestTicket(state,fair),selected=fair.company?ticket?.product:ticket?.index;
    const choices=fair.company?Object.keys(products).filter(id=>state.unlocked.includes(id)).map(id=>{
      const lot=availableSample(state,id);
      return [id,products[id].name,lot.ready?(lot.fine?"고급 견본 가능":"일반 견본 가능"):"생산 또는 재고 필요"];
    }):fair.options.map((o,i)=>[i,o.label,"심사 · "+o.stat]);
    const buttons=choices.map(([id,label,note])=>option('<b>'+(selected===id?'✓ ':'')+label+'</b>'+(note?'<small>'+note+'</small>':''),
      'fair-entry:'+fair.id+':'+id,selected===id,false,"option")).join("");
    const when=(state.month===fair.month?"이달":"다음 달")+" 하순";
    const criteria=fair.company?[
      ["견본","생산품·재고에서 1개를 빌려 심사 후 반환"],
      ["평가 항목","견본 등급, 제품 평판, 판매·납품 실적, 설계·제작 시설"],
      ...(fair.warrant?[["인증 요건","출품 전 누적 판매·납품 18개 이상"]]:[])
    ]:[
      ["기본 점수","경연 당일 해당 종목의 능력치"],
      ["참가 조건","병중에는 개인 경연에 출전할 수 없습니다."]
    ];
    const ruleRows=criteria.map(([label,value])=>'<div><dt>'+label+'</dt><dd>'+value+'</dd></div>').join("");
    return '<details class="fair-notice" data-fair="'+fair.id+'"><summary><small>'+when+'</small><b>'+fair.title+'</b><span>'+(selected!=null?'✓ 참가 확정':'참가 접수 중')+' ▾</span></summary><div class="fair-body">'+
      '<p class="invite-intro">'+fair.invitation+'</p>'+
      '<div class="schedule-strip" aria-label="행사 달의 일정"><span>상순</span><span>중순</span><strong>하순 · 경연</strong></div>'+
      '<section><h3>'+(fair.company?'출품할 제품':'참가 종목')+'</h3><div class="fair-options" role="group" aria-label="'+(fair.company?'출품할 제품':'참가 종목')+'">'+buttons+'</div></section>'+
      '<details class="fair-rules"><summary>심사 기준</summary><dl class="rule-table">'+ruleRows+
      '<div><dt>당일 대응</dt><dd>심사평에 맞으면 <b>+8점</b> · 그 외 <b>+2점</b></dd></div></dl>'+
      (fair.date?'<p>'+fair.date+'</p>':'')+'</details>'+
      (selected!=null?'<small>실행 전에 취소하면 원래 하순 일정으로 돌아갑니다.</small>':'')+
      (selected!=null?btn("참가 취소","fair-entry:"+fair.id+":cancel"):'')+'</div></details>';
  }).join("");
}
function openFairNotices(activeId,focusKey){
  const modal=$("picker");
  pendingConfirmation=null;
  delete modal.dataset.confirmation;
  modal.innerHTML='<section class="fair-dialog"><header><h2 id="picker-title">경연 초대장</h2>'+btn("닫기","close")+'</header><div class="invitation-pages">'+festivalNotice()+'</div></section>';
  const notices=Array.from(modal.querySelectorAll(".fair-notice"));
  const active=notices.find(el=>el.dataset.fair===activeId)||notices[0];
  if(active)active.open=true;
  if(!modal.open){if(tourSession)modal.show();else modal.showModal();}
  if(focusKey)focusAction(focusKey);
}
function selectFestival(id,value){
  const fair=openContests(state).find(f=>f.id===id);
  if(tab!=="plan"||state.phase!=="plan"||!fair)return;
  state.fairTickets??={};
  if(value==="cancel")delete state.fairTickets[id];
  else if(fair.company){
    if(!Object.hasOwn(products,value)||!state.unlocked.includes(value))return;
    state.fairTickets[id]={product:value};
  }else{
    const index=Number(value),o=fair.options[index];
    if(!o||contestTicket(state,fair)?.index===index)return;
    state.fairTickets[id]={index};
  }
  persist();render();
  if($("picker").open&&$("picker").querySelector(".fair-dialog")){
    openFairNotices(id,value==="cancel"?null:"fair-entry:"+id+":"+value);
    if(value==="cancel")$("picker").querySelector(".fair-notice[open]>summary")?.focus();
  }
}
function contestSpread(fair){return fair.company?4:Math.round(contestCutoffs(fair)[1]*.06);}

function prepareContest(run){
  const seq=run.sequence;
  const fair=contests.find(f=>f.id===seq.contest);
  if(!fair||run.fairBook?.[fair.id]||seq.duel)return false;
  const ticket=contestTicket(run,fair);
  if(!ticket||judgeContest(run,fair,ticket).reason)return false;
  const target=contestCutoffs(fair)[1],spread=contestSpread(fair);
  seq.duel={focus:Math.floor(monthlyDraw(run,0x435545)*2),
    rivalScore:target-spread+Math.floor(monthlyDraw(run,0x46414952)*(2*spread+1))};
  run.pending="contest-"+fair.id;run.phase="event";
  persist();render(true);return true;
}
function judgeContest(run,fair,ticket,duel){
  const [silver,target]=contestCutoffs(fair),gold=duel?.rivalScore??target,o=fair.options?.[ticket.index];
  const bonus=Number.isInteger(duel?.choice)?(duel.choice===duel.focus?8:2):0;
  const note=bonus?" + 심사 대응 "+bonus:"";
  const base={index:ticket.index,product:ticket.product,rank:0,purse:0};
  if(o){
    if(run.ill)return {...base,reason:"병중으로 불참"};
    const ability=run.stats[o.stat],score=ability+bonus;
    return {...base,score,rank:score>=gold?2:score>=silver?1:0,scoreNote:o.stat+" "+ability+note};
  }
  const id=ticket.product;
  if(!id||!run.unlocked.includes(id))return {...base,reason:"출품 가능한 품목 없음"};
  const lot=availableSample(run,id);
  if(!lot.ready)return {...base,reason:"생산품 및 재고 부족"};
  const history=productHistory(run,id),design=run.productNotes?.[id];
  const parts=[
    ["견본",lot.fine?50:25],
    ["제품 평판",Math.min(30,history.reputation*2)],
    ["판매·납품 실적",Math.min(16,Math.floor(history.units/6)+history.orders*3)],
    ["설비·기획",3*(run.shop.design+run.shop.works-2)+(design?.material==="select"?6:0)+(design?.reworked?4:0)]
  ];
  const score=parts.reduce((sum,[,n])=>sum+n,bonus);
  const goldEligible=!fair.warrant||history.units>=18;
  return {...base,score,rank:score>=gold&&goldEligible?2:score>=silver?1:0,
    scoreNote:parts.map(([label,n])=>label+" "+n).join(" + ")+note+(!goldEligible?" · 금상 실적 요건 미달":"")};
}
function settleFestival(run,duel){
  const fair=contests.find(f=>f.month===run.month&&run.duration===35);
  const ticket=fair&&contestTicket(run,fair);
  if(!ticket||run.fairBook?.[fair.id])return null;
  const entry=judgeContest(run,fair,ticket,duel);
  if(duel&&!entry.reason){entry.duel={...duel};entry.revealed=true;}
  const rank=entry.rank;
  entry.purse=contestPurse(fair)[rank];
  entry.prize=rank===2?fair.prize:rank===1?fair.ribbon:"";
  if(fair.company&&!fair.warrant&&!entry.reason)entry.demand=[0,2,4][rank];
  if(!entry.reason)run.renown+=rank;
  if(fair.warrant&&rank===2){
    run.royalWarrants??={};
    if(!run.royalWarrants[entry.product]){
      run.royalWarrants[entry.product]=run.month;
      if(Object.keys(run.royalWarrants).length===1)run.royal+=3;
    }
  }
  if(fair.id==="jubilee1887")run.royal+=[0,2,3][rank];
  if(duel&&!entry.reason){
    const subjects=fair.company?[["경영",10],["지성",8]]:[[fair.options[ticket.index].stat,10],["의지",6]];
    entry.growth=subjects.map(([name,base])=>{
      const gain=lessonGain(name,run.stats[name],base,run.month,run.flags);
      run.stats[name]+=gain;
      return name+" +"+gain;
    });
  }
  run.fund+=entry.purse;
  run.fairBook??={};
  run.fairBook[fair.id]=entry;
  run.log.push(fair.title+" · "+contestRank(entry)+(entry.purse?" · 상금 "+money(entry.purse):""));
  return fair;
}
function fairDemand(run,product){
  const fair=contests.find(f=>f.month+1===run.month);
  const entry=fair&&run.fairBook?.[fair.id];
  const warrant=run.royalWarrants?.[product];
  const bonus=warrant&&warrant<run.month?2:0;
  if(!entry)return bonus;
  if(Number.isInteger(entry.rank))return bonus+(entry.product===product?(entry.demand||0):0);
  const former=legacyLondonFestivals.find(f=>f.id===fair.id)?.options[entry.index];
  return bonus+(entry.outcome!=="absent"&&former?.product===product?(entry.outcome==="success"?4:2):0);
}
function contestRank(entry){
  return entry.reason||["입상권 밖","은상","금상"][entry.rank];
}
function contestEntryName(fair,entry){
  return (fair.company?products[entry.product]?.name:fair.options[entry.index]?.label)||"견본 출품";
}
function fairReport(fair){
  const entry=state.fairBook?.[fair.id];
  if(!entry)return "";
  const date=monthText(fair.month);
  if(!Number.isInteger(entry.rank)){
    const legacy=legacyLondonFestivals.find(f=>f.id===fair.id),o=legacy?.options[entry.index];
    if(!o)return "";
    const label={absent:"요양으로 불참",success:"호평",practice:"참가"}[entry.outcome];
    return '<article class="fair-report"><small>'+date+' · '+label+'</small><h4>'+legacy.title+'</h4>'+
      (entry.outcome==="absent"?"":'<p>'+o.line+'</p>')+'<p>'+escapeHTML(entry.result)+'</p>'+
      (entry.outcome==="absent"?"":'<b>다음 달 '+products[o.product].name+' 수요 +'+(entry.outcome==="success"?4:2)+'개</b>')+'</article>';
  }
  return '<article class="fair-report"><small>'+date+' · '+contestRank(entry)+'</small><h4>'+fair.title+'</h4>'+
    '<p>'+contestEntryName(fair,entry)+(entry.score==null?'':' · '+entry.score+'점')+
    (entry.purse?' · 상금 '+money(entry.purse)+' · '+entry.prize:'')+'</p>'+
    (entry.duel?'<p>'+contestOpponent(fair).name+' '+entry.duel.rivalScore+'점 · '+(entry.growth||[]).join(' · ')+'</p>':'')+
    (entry.demand?'<b>다음 달 '+products[entry.product].name+' 수요 +'+entry.demand+'개</b>':'')+'</article>';
}
function thisMonthFairReport(){
  const fair=contests.find(f=>f.month===state.month);
  return fair?fairReport(fair):"";
}
function contestEvent(fair){
  return {id:"contest-"+fair.id,title:fair.title,speaker:"세바스찬",track:fair.track,contest:fair,sees:()=>false,choices:[]};
}
function duelScene(fair,ticket,duel,entry){
  const rival=contestOpponent(fair),act=contestDemonstration(fair,ticket),option=fair.options?.[ticket.index];
  const responded=Number.isInteger(duel.choice),done=Boolean(entry);
  const poses=option?.poses||["inspect","write"];
  const sample=id=>'<img class="duel-sample" src="assets/map-cart-'+id+'.png" alt="'+products[id].name+'">';
  const rivalArt=rival.actor==="lizzy"?'<img class="duel-portrait" src="'+portraits.엘리자베스+'" alt="">':
    '<i class="duel-sprite" style="background-image:url(assets/staff/'+rival.actor+'.png)" aria-hidden="true"></i>';
  const actor='<div class="contest-actor" aria-hidden="true"><img src="'+actors[poses[0]]+'" alt=""><img src="'+actors[poses[1]]+'" alt=""></div>';
  function side(name,caption,art,score,active){
    return '<div class="duel-side'+(active?' performing':'')+'"><div class="duel-art">'+art+'</div><div class="duel-plate"><b>'+name+'</b><small>'+caption+'</small><strong>'+score+'</strong></div></div>';
  }
  const title=done?contestRank(entry):responded?"시엘의 차례":"상대의 차례";
  let body,buttons;
  if(done){
    const margin=entry.score-duel.rivalScore;
    const verdict=margin===0?"동점":(margin>0?"시엘":rival.name)+" 승리 · "+Math.abs(margin)+"점 차";
    body='<p><b>'+verdict+'</b> · '+(option?(entry.rank?option.placed:option.missed):entry.rank?"심사위원이 팬텀사의 견본 옆에 상장을 놓습니다.":"담당관이 견본을 돌려줍니다. 시엘은 심사표의 낮은 항목에 밑줄을 긋습니다.")+'</p>'+
      '<p class="duel-detail">'+entry.scoreNote+'</p><p class="duel-detail">경연 경험 · '+entry.growth.join(" · ")+'</p>'+
      (entry.purse?'<p class="contest-prize">상금 '+money(entry.purse)+' · '+entry.prize+'</p>':'')+
      (fair.warrant&&entry.rank===2?'<p>인증 품목 수요 매달 +2개</p>':'');
    buttons=btn("행사 마치기","fair-close",false,"primary");
  }else if(responded){
    body='<p>'+(option?option.line:"시엘이 팬텀사의 상표를 심사위원 쪽으로 돌립니다. 담당관이 견본과 거래 기록을 받아 듭니다.")+'</p><p class="duel-detail">시엘의 대응 · '+act[2+duel.choice*2]+'</p>';
    buttons=btn("최종 점수 보기","fair-reveal",false,"primary");
  }else{
    body='<p class="duel-quote">“'+rival.quote+'”</p><p>'+act[0]+'</p><p class="duel-cue">심사위원이 짚은 항목 <b>'+act[1+duel.focus*2]+'</b></p>';
    buttons=btn(act[2],"fair-play:0")+btn(act[4],"fair-play:1");
  }
  return '<section class="contest-screen duel-screen" aria-labelledby="contest-title" style="--contest-art:url(&quot;'+new URL(sceneArt[fair.room],document.baseURI).href+'&quot;)">'+
    '<header><span>'+monthText(fair.month)+' · '+(fair.company?'출품 심사':option.label)+'</span><h2 id="contest-title">'+fair.title+'</h2></header>'+
    '<div class="duel-stage'+(done?' is-revealed':'')+'">'+
    side(rival.name,fair.company?products[rival.product].name:rival.role,rivalArt+(fair.company?sample(rival.product):''),duel.rivalScore+"점",!responded)+
    '<b class="duel-vs" lang="en">vs.</b>'+
    side("시엘 팬텀하이브",fair.company?products[ticket.product].name:option.label,actor+(fair.company?sample(ticket.product):''),done?entry.score+"점":"심사 중",responded&&!done)+'</div>'+
    '<div class="contest-slip" aria-live="polite"><h3>'+title+'</h3>'+body+'<div class="duel-controls">'+buttons+'</div></div></section>';
}

function contestScene(event){
  const fair=event.contest,entry=state.fairBook?.[fair.id];
  const duel=entry?.duel||state.sequence?.duel;
  if(duel){
    const scene=duelScene(fair,entry||contestTicket(state,fair),duel,entry);
    if(!previewFair)return scene;
    const options=contests.map(f=>'<option value="'+f.id+'"'+(f.id===fair.id?' selected':'')+'>'+monthText(f.month)+' · '+f.title+'</option>').join("");
    return '<nav class="preview-fairs" aria-label="경연 미리보기"><label>경연 미리보기 <select id="preview-fair">'+options+'</select></label>'+
      (!fair.company?'<a href="?fair-preview='+fair.id+'&amp;entry='+(contestTicket(state,fair).index===0?1:0)+'">다른 종목</a>':'')+
      '<a href="?fair-preview='+fair.id+'&amp;entry='+String(contestTicket(state,fair).index||0)+'">다시 보기</a><a href="./">게임 표지</a></nav>'+scene;
  }
  const o=fair.options?.[entry.index],label=contestEntryName(fair,entry);
  const revealed=entry.revealed||entry.reason;
  const heading=revealed?contestRank(entry):label;
  const line=entry.reason?"세바스찬이 접수처에서 돌려받은 참가표를 수첩에 끼워 둡니다.":
    o?(revealed?(entry.rank?o.placed:o.missed):o.line):
    revealed?(entry.rank?"심사위원이 견본 옆에 상장을 놓습니다. 세바스찬은 품목을 확인하고 상금을 받아 장부의 빈 줄을 채웁니다.":"담당관이 견본을 돌려줍니다. 시엘은 심사표에서 점수가 낮았던 항목에 연필로 줄을 긋습니다."):
    "팬텀사의 상표를 단 견본을 흰 천 위에 올립니다. 심사위원이 견본을 들어 마감을 살피고 납품 기록을 펼칩니다.";
  const poses=o?.poses||["inspect","write"];
  const display=entry.reason?"":'<div class="contest-display'+(revealed?" is-revealed":"")+'">'+
    (entry.product?'<img class="contest-sample" src="assets/map-cart-'+entry.product+'.png" alt="'+label+' 견본">':'')+
    '<div class="contest-actor" role="img" aria-label="경연에 참가한 시엘"><img src="'+actors[poses[0]]+'" alt=""><img src="'+actors[poses[1]]+'" alt=""></div></div>';
  const numbers=revealed&&entry.score!=null?'<div class="contest-score"><b>'+entry.score+'점</b><span>'+entry.scoreNote+'</span></div>':'';
  return '<section class="contest-screen" aria-labelledby="contest-title" style="--contest-art:url(&quot;'+new URL(sceneArt[fair.room],document.baseURI).href+'&quot;)">'+
    '<header><span>'+monthText(fair.month)+'</span><h2 id="contest-title">'+fair.title+'</h2></header>'+display+
    '<div class="contest-slip"><h3>'+heading+'</h3><p>'+line+'</p>'+numbers+
    (revealed&&entry.purse?'<p class="contest-prize">상금 '+money(entry.purse)+' · '+entry.prize+'</p>':'')+
    (revealed&&fair.warrant&&entry.rank===2?'<p>인증 품목 수요 매달 +2개</p>':'')+
    btn(revealed?"행사 마치기":"심사 결과 보기",revealed?"fair-close":"fair-reveal",false,"primary")+'</div></section>';
}
function festivalAction(action,id){
  if(!["fair-play","fair-reveal","fair-close"].includes(action))return false;
  if(tab!=="plan"||state.phase!=="event")return true;
  const event=pendingEvent(),fair=event?.contest;
  const duel=state.sequence?.duel;
  if(fair&&duel){
    if(action==="fair-play" && !Number.isInteger(duel.choice) && ["0","1"].includes(id)){
      duel.choice=Number(id);persist();render(true);
    }else if(action==="fair-reveal" && Number.isInteger(duel.choice)){
      settleMonth();
    }
    return true;
  }
  const entry=fair&&state.fairBook?.[fair.id];
  if(!entry)return true;
  if(action==="fair-reveal"&&!entry.revealed&&!entry.reason){
    entry.revealed=true;persist();render(true);
  }else if(action==="fair-close"&&(entry.revealed||entry.reason))finishEventChoice(event);
  return true;
}
function filedSection(title,body,count){
  return '<details class="file-section"><summary><span>'+title+'</span><small>'+count+'</small></summary><div>'+body+'</div></details>';
}
function courtFolio(rows){
  const stages=["관심 밖","가문에 주목","왕실 검토","재가 가능"];
  const complete=rows.filter(row=>row[1]).length;
  const approved=isApprovedEnding(state.ending);
  const held=["vowNoTitle","releaseNoTitle"].includes(state.ending);
  const stage=approved||complete===rows.length?3:state.royal>0&&complete>=rows.length*0.7?2:state.royal>0||state.renown>0||complete>=rows.length*.4?1:0;
  const wording=["왕실 서신에 가문의 이름이 아직 오르지 않았습니다.","궁정에서 팬텀하이브의 근황을 묻기 시작했습니다.","왕실 서기관이 가문의 평판과 살림을 함께 검토하고 있습니다.","작위 회복에 필요한 조건을 모두 갖췄습니다."];
  const priority=courtEducationPriority();
  const pending=rows.find(row=>!row[1]);
  const advice=priority?priority+" "+state.stats[priority]+"/"+courtEducation[priority][0]+" · 다음 일정 추천: "+courtEducation[priority][1]:pending?.[2];
  const title=approved?"작위 회복":held?"이번 심의 유보":stages[stage];
  const description=approved?"왕실이 백작 작위를 승인했습니다.":held?"이번 회차의 작위 승인이 유보되었습니다.":wording[stage];
  const steps=stages.map((label,index)=>
    '<li'+(index<=stage?' class="reached"':'')+(index===stage?' aria-current="step"':'')+'><i aria-hidden="true"></i>'+label+'</li>').join("");
  const checks=rows.map(([label,ok,hint])=>
    '<li><div><b>'+label+'</b><small>'+hint+'</small></div><span class="court-status'+(ok?' met':'')+'">'+(ok?'✓ 충족':'미충족')+'</span></li>').join("");
  return '<section class="court-folio"><div class="court-ruling"><header><span>왕실 작위 심의</span><small>'+monthText(state.month)+'</small></header>'+
    '<h3>'+title+'</h3><p>'+description+'</p><ol class="court-stages" aria-label="왕실 평가 단계">'+steps+'</ol></div>'+
    '<details class="court-register" open><summary><b>작위 회복 요건</b></summary>'+
    (pending&&!state.ending?'<p class="court-next"><b>다음 준비</b> '+advice+'</p>':'')+
    '<ul class="court-checks">'+checks+'</ul></details></section>';
}
function familyFolio(rows,history,album,extra=""){
  const allies=peopleInHouse();
  const relations=allies.length?allies.map(id=>{
    const trust=state.people[id].toward,tier=trustTier(trust);
    const marks=[0,1,2,3].map(n=>'<i class="'+(n<=tier?'filled':'')+'"></i>').join("");
    return '<div class="trust-entry" data-tier="'+tier+'"><img src="assets/staff/'+id+'.png" alt=""><b>'+servants[id].name+'</b><span class="trust-stage"><span aria-hidden="true">'+marks+'</span>'+rank(trust)+'</span></div>';
  }).join(""):"아직 기록된 인물이 없습니다.";
  const fairHistory=[...contests].reverse().map(fairReport).filter(Boolean);
  const warrants=Object.keys(state.royalWarrants||{}).map(id=>products[id].name).join(" · ");
  return '<div class="family-folio">'+courtFolio(rows)+'<aside class="folio-files"><dl class="folio-finance"><div><dt>가문 자금</dt><dd>'+money(state.fund)+'</dd></div><div><dt>남은 채무</dt><dd>'+money(state.debt)+'</dd></div></dl>'+
    filedSection("인물 관계",'<p>각 인물이 시엘에게 보내는 신뢰입니다.</p>'+relations,allies.length+"명")+
    filedSection("사건 기록",history||"첫 사건을 마치면 선택이 기록됩니다.",state.events.length+"건")+
    filedSection("계절 경연 · 박람회",(warrants?'<p><b>왕실 납품 인증</b> '+warrants+'</p>':"")+(fairHistory.join("")||"참가한 행사의 결과가 기록됩니다."),fairHistory.length+"건")+
    filedSection("엔딩 도감",album,Object.keys(endingScenes).filter(hasEndingRecord).length+"개 기록")+extra+'</aside></div>';
}
function relapseNotice(run){
  if(!run.relapseStage)return "";
  const care=plannedCareLevel(run);
  if(run.phase==="plan"&&care===2)return "회복 일정 확보 · 이번 달에는 병중 결석도 정상적으로 요양합니다.";
  const advice="스트레스가 10 이상 오르는 수업은 건강을 더 소모합니다. 건강이 50 미만이면 휴식 한 순으로는 부족할 수 있습니다. 두 순을 쉬거나 요양 한 순 또는 왕진을 선택하세요.";
  return run.relapseStage===1?"재발 주의 · 무리한 일정이 이어지면 결석해도 건강이 더디게 회복됩니다. "+advice
    :"지병 악화 · 지병이 깊어져 병중 결석 때도 건강이 떨어질 수 있습니다. "+advice;
}
function healthNotice(run){
  const relapse=relapseNotice(run);
  if(relapse)return relapse;
  if(run.ill??run.illness)return "병중 · 수업은 요양으로 바뀌며 예약한 수업료는 전액 지불합니다. 건강 50 이상·스트레스 60 이하에서 복귀합니다.";
  const {onset}=illnessLimits(run);
  if(run.stress>=onset-12)return "병환 주의 · 스트레스 "+run.stress+" / 발병 기준 "+onset+"입니다. 한 순 쉬면 스트레스를 낮출 수 있습니다.";
  return "";
}
