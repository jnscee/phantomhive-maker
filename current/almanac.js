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
      (card.place!=="quarters" || visitName(visitPerson("quarters",run))===card.npc),
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
    :"";
  return staged(who,"",line,controls,"",room,card.npc,"encounter-next:"+page);
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
  if(run.duration!==35)return [];
  const booked=retiredContests.filter(f=>f.id!=="newYear-1886"&&run.fairTickets?.[f.id]);
  return [...booked,...contests].filter(fair=>
    (run.month===fair.month-1||run.month===fair.month) &&
    !contestArchive.some(f=>f.month===fair.month&&run.fairBook?.[f.id]) &&
    !booked.some(f=>f.month===fair.month&&f.id!==fair.id));
}
const contestSlot=2;
function reservedContest(run){
  return openContests(run).find(fair=>fair.month===run.month&&contestTicket(run,fair));
}
function contestRivalAbility(fair){
  if(fair.warrant)return [110,132,148][fair.year];
  if(fair.company)return Math.max(fair.month===5?84:fair.month===18?116:132,...(fair.exhibitors||[]).map(entrant=>entrant.score));
  const levels={1:[28,275,490],4:[112,365,515],9:[155,370,515]};
  return levels[(fair.month-1)%12+1][fair.year];
}
function winningPurse(fair){return fair.warrant?65:fair.company?55:36+fair.year*10;}
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
      ["평가 항목","견본 등급, 제품 평판, 판매·납품 실적, 설계·제작 시설"+(fair.warrant?", 시엘의 경영":"")],
      ...(fair.warrant?[["인증 요건","출품 전 누적 판매·납품 18개 이상"]]:[])
    ]:[
      ["심사","종목 능력치에 그날의 컨디션·의욕·스트레스가 반영됩니다."],
      ["참가 조건","병중에는 개인 경연에 출전할 수 없습니다."]
    ];
    criteria.push(["승패","심사 점수가 높은 쪽이 우승합니다. 동점이면 양측이 함께 우승합니다."]);
    const ruleRows=criteria.map(([label,value])=>'<div><dt>'+label+'</dt><dd>'+value+'</dd></div>').join("");
    return '<details class="fair-notice" data-fair="'+fair.id+'"><summary><small>'+when+'</small><b>'+fair.title+'</b><span>'+(selected!=null?'✓ 참가 확정':'참가 접수 중')+' ▾</span></summary><div class="fair-body">'+
      '<p class="invite-intro">'+fair.invitation+'</p>'+
      '<div class="schedule-strip" aria-label="행사 달의 일정"><span>상순</span><span>중순</span><strong>하순 · 경연</strong></div>'+
      '<section><h3>'+(fair.company?'출품할 제품':'참가 종목')+'</h3><div class="fair-options" role="group" aria-label="'+(fair.company?'출품할 제품':'참가 종목')+'">'+buttons+'</div></section>'+
      '<details class="fair-rules"><summary>심사 기준</summary><dl class="rule-table">'+ruleRows+
      '</dl>'+
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
function prepareContest(run){
  const seq=run.sequence;
  const fair=contestArchive.find(f=>f.id===seq.contest);
  if(!fair||run.fairBook?.[fair.id]||seq.duel)return false;
  const ticket=contestTicket(run,fair);
  if(!ticket)return false;
  const judgment=judgeContest(run,fair,ticket);
  if(judgment.reason)return false;
  seq.duel={fairId:fair.id,rivalScore:contestRivalAbility(fair),judgment};
  run.pending="contest-"+fair.id;run.phase="event";
  persist();render(true);return true;
}
// Freeze the score before month-end settlement changes the entrant's stats and sales.
function judgeContest(run,fair,ticket){
  const base={index:ticket.index,product:ticket.product,match:true,purse:0};
  const o=fair.options?.[ticket.index];
  let basis,factors,condition="";
  if(o){
    if(run.ill??run.illness)return {...base,reason:"병중으로 불참"};
    basis=[o.stat,run.stats[o.stat]];
    factors=[["컨디션",.85+.002*run.hp],["의욕",.86+.002*run.motivation],["스트레스",1.04-.002*run.stress]];
  }else{
    const id=ticket.product;
    if(!id||!run.unlocked.includes(id))return {...base,reason:"출품 가능한 품목 없음"};
    const lot=availableSample(run,id);
    if(!lot.ready)return {...base,reason:"생산품 및 재고 부족"};
    const history=productHistory(run,id),design=run.productNotes?.[id];
    basis=[lot.fine?"고급 견본":"일반 견본",lot.fine?50:25];
    const equipment=3*(run.shop.design+run.shop.works-2)+(design?.material==="select"?6:0)+(design?.reworked?4:0);
    factors=[["평판",1+Math.min(30,history.reputation*2)/50],
      ["실적",1+Math.min(16,Math.floor(history.units/6)+history.orders*3)/50],["설비·기획",1+equipment/50]];
    if(fair.warrant&&history.units<18)condition="누적 판매·납품 18개 미달";
  }
  const strength=factors.reduce((n,[,factor])=>n*factor,basis[1]);
  const managementBonus=fair.warrant?Math.floor(cap(Number(run.stats?.경영)||0,500)/50):0;
  const score=Math.round(strength)+managementBonus,ratio=score/contestRivalAbility(fair);
  return {...base,score,speechTier:ratio<.7?0:ratio<1.1?1:2,
    scoreParts:[basis],factors,scoreCondition:condition,...(managementBonus?{managementBonus}:{})};
}
function matchAssessment(run,fair,ticket,duel){
  return duel?.judgment?.match?duel.judgment:judgeContest(run,fair,ticket);
}
function settleFestival(run,duel){
  const scheduled=duel?.fairId||run.sequence?.contest;
  const fair=run.duration===35&&contestArchive.find(f=>f.month===run.month&&(f.id!=="newYear-1886"||scheduled===f.id)&&contestTicket(run,f)&&(!scheduled||scheduled===f.id));
  const ticket=fair&&contestTicket(run,fair);
  if(!ticket||contestArchive.some(f=>f.month===run.month&&run.fairBook?.[f.id]))return null;
  const assessment=matchAssessment(run,fair,ticket,duel);
  const rivalScore=duel?.rivalScore??contestRivalAbility(fair);
  const won=!assessment.reason&&!assessment.scoreCondition&&assessment.score>=rivalScore;
  const rank=won?2:0;
  const entry={...assessment,rank,purse:won?winningPurse(fair):0,prize:won?fair.prize:""};
  if(won&&assessment.score===rivalScore)entry.tied=true;
  if(duel&&!entry.reason){entry.duel={rivalScore};entry.revealed=true;}
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
  if(duel&&won){
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
  if(run===state)rememberFairScript(fair,entry);
  run.log.push(fair.title+" · "+contestRank(entry)+(entry.purse?" · 상금 "+money(entry.purse):""));
  return fair;
}
function fairDemand(run,product){
  const fair=contestArchive.find(f=>f.month+1===run.month&&run.fairBook?.[f.id]);
  const entry=fair&&run.fairBook?.[fair.id];
  const warrant=run.royalWarrants?.[product];
  const bonus=warrant&&warrant<run.month?2:0;
  if(!entry)return bonus;
  if(Number.isInteger(entry.rank))return bonus+(entry.product===product?(entry.demand||0):0);
  const former=legacyLondonFestivals.find(f=>f.id===fair.id)?.options[entry.index];
  return bonus+(entry.outcome!=="absent"&&former?.product===product?(entry.outcome==="success"?4:2):0);
}
function contestRank(entry){
  if(entry.reason)return entry.reason;
  if(entry.match&&entry.scoreCondition)return "인증 요건 미달";
  if(entry.tied)return "공동 우승";
  return entry.match?(entry.rank===2?"승리":"패배"):["입상권 밖","은상","금상"][entry.rank];
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
    (entry.duel?'<p>'+contestOpponent(fair).name+' '+entry.duel.rivalScore+'점'+(entry.growth?.length?' · '+entry.growth.join(' · '):'')+'</p>':'')+
    (entry.scoreCondition?'<p>'+escapeHTML(entry.scoreCondition)+'</p>':'')+
    (entry.demand?'<b>다음 달 '+products[entry.product].name+' 수요 +'+entry.demand+'개</b>':'')+'</article>';
}
function thisMonthFairReport(){
  const fair=contestArchive.find(f=>f.month===state.month&&state.fairBook?.[f.id]);
  return fair?fairReport(fair):"";
}
function contestEvent(fair){
  return {id:"contest-"+fair.id,title:fair.title,speaker:"세바스찬",track:fair.track,contest:fair,sees:()=>false,choices:[]};
}
// Reading a result never changes its saved score, outcome, or rewards.
const contestResultPages=new WeakMap();
function contestResultOutcome(fair,entry){
  if(entry?.reason)return "absent";
  if(entry?.scoreCondition)return "qualification";
  if(entry?.tied)return fair.company?"tied_company":"tied_personal";
  if(!entry?.match)return "legacy";
  const won=entry.rank===2;
  if(entry.rank!==0&&!won)return "unknown";
  const score=entry.score,rival=entry.duel?.rivalScore;
  if(!Number.isFinite(score)||score<0||!Number.isFinite(rival)||rival<=0)
    return won?"win_even":"loss_even";
  // A completed result from older rules remains final, including an upset or a tie.
  if(won&&score<=rival)return "win_even";
  if(!won&&score>=rival)return "loss_even";
  // These thresholds select wording only; the original settlement determines victory.
  return won?(score/rival>=1.1?"win_prepared":"win_close"):
    (score>=rival*.95?"loss_close":"loss_under");
}
function contestResultScene(fair,entry){
  const kind=fair.id.split("-")[0];
  const group=fair.warrant?"warrant":kind==="newYear"?"edward":kind==="easter"?"elizabeth":null;
  if(!group||!entry||(!entry.match&&!entry.reason))return null;
  const key=group==="warrant"?"standard":
    (group==="edward"?["greeting","tea"]:["music","eggs"])[entry.index];
  const subject=contestResultDialogue[group][key];
  if(!subject)return null;
  const outcome=contestResultOutcome(fair,entry);
  return contestResultDialogue.special[outcome]||subject[outcome]||null;
}
function contestResultPage(entry,scene){
  const page=contestResultPages.get(entry);
  return Math.max(0,Math.min(Number.isInteger(page)?page:0,scene.lines.length-1));
}
function contestResultDialogueMarkup(fair,entry){
  const scene=contestResultScene(fair,entry);
  if(!scene)return "";
  const page=contestResultPage(entry,scene),[speaker,line]=scene.lines[page];
  return '<section class="award-dialogue" aria-label="결과 대사">'+
    sceneLine(escapeHTML(speaker),escapeHTML(line),"",'aria-live="polite" aria-atomic="true"')+
    '<span class="award-page">'+(page+1)+' / '+scene.lines.length+'</span>'+
    '<nav class="award-dialogue-controls" aria-label="결과 대사 넘기기">'+
    btn("이전 대사","fair-result-prev:"+page,page===0)+
    btn(page===scene.lines.length-1?"마지막 대사":"다음 대사","fair-result-next:"+page,page===scene.lines.length-1)+
    btn("다시 보기","fair-result-restart:"+page,page===0)+'</nav></section>';
}
const openContestClosings=new WeakSet();
function contestClosingLines(fair,entry){
  if(!entry || entry.reason || !Number.isFinite(entry.score))return null;
  const authored=contestResultScene(fair,entry);
  if(authored)return [["",authored.narration],...authored.lines];
  const historicalTie=!entry.match && entry.duel?.rivalScore===entry.score;
  const narration=contestResultLine(fair,historicalTie?{...entry,tied:true}:entry);
  let dialogue;
  if(entry.tied||historicalTie){
    dialogue=fair.company
      ? [["세바스찬","두 견본의 심사표에 같은 점수가 적혔군요."],["시엘","우리 표도 챙겨 둬. 다음 견본을 만들 때 꺼내 보게."]]
      : [["세바스찬","도련님의 성함도 함께 불렸습니다."],["시엘","들었어. 같이 인사하고 올게."]];
  }else if(entry.rank===2&&!entry.scoreCondition){
    dialogue=fair.company
      ? [["세바스찬","팬텀사의 이름이 불렸습니다, 도련님."],["시엘","상장은 제작실에 걸어 둬. 견본을 만든 직원들도 봐야지."]]
      : [["세바스찬","축하드립니다, 도련님."],["시엘","상장을 잘 챙겨 둬, 세바스찬."]];
  }else if(!entry.match&&entry.rank===1){
    dialogue=[["세바스찬","은상입니다, 도련님."],["시엘","심사표도 함께 챙겨 둬."]];
  }else{
    dialogue=fair.company
      ? [["시엘","우리 견본은 내가 가져가지. 심사표는 네가 챙겨."],["세바스찬","예. 제작실에서 함께 보실 수 있도록 준비하겠습니다."]]
      : [["세바스찬","마차를 부를까요, 도련님?"],["시엘","잠깐만. 심사위원에게 한 가지만 묻고 갈 거야."]];
  }
  return [["",narration],...dialogue];
}
function contestResultSlip(fair,entry){
  const lines=contestClosingLines(fair,entry);
  if(lines && openContestClosings.has(entry)){
    const page=contestResultPage(entry,{lines}),last=page===lines.length-1;
    const [speaker,text]=lines[page];
    const next='<button type="button" class="line-next" data-action="fair-closing-next:'+page+'" aria-label="'+(last?'행사 마치기':'다음 대사')+'"><span aria-hidden="true">▼</span></button>';
    return sceneLine(escapeHTML(speaker),escapeHTML(text),next,'aria-live="polite"');
  }
  const duel=entry.duel;
  const margin=duel&&!entry.match?entry.score-duel.rivalScore:null;
  const rank=margin===0&&entry.rank===2?"공동 금상":contestRank(entry);
  const entrant=fair.entrant||(fair.company?"팬텀사":"시엘 팬텀하이브");
  let verdict="심사 결과";
  if(entry.match&&entry.scoreCondition)verdict="왕실 인증 보류";
  else if(entry.tied||margin===0)verdict="동점";
  else if(entry.match||margin!==null){
    const won=entry.match?entry.rank===2:margin>0;
    verdict=(won?entrant:contestOpponent(fair).name)+" 승리";
  }
  const growth=(entry.growth||[]).map(change=>{
    const match=/^(.*) ([+-]\d+)$/.exec(change);
    return '<span class="award-gain">'+(match?escapeHTML(match[1])+' <b>'+escapeHTML(match[2])+'</b>':escapeHTML(change))+'</span>';
  }).join("");
  return '<article class="contest-slip award-sheet" data-rank="'+entry.rank+'" aria-label="경연 결과" aria-live="polite">'+
    '<header class="award-head"><h3>'+escapeHTML(rank)+'</h3><strong>'+escapeHTML(verdict)+'</strong>'+
    (margin?'<span>'+Math.abs(margin)+'점 차</span>':'')+
    btn("결과창 닫기","fair-close",false,"award-dismiss")+'</header>'+
    '<div class="award-body"><dl class="award-ledger">'+
    '<div><dt>심사 점수</dt><dd><strong class="award-total">'+(Number.isFinite(entry.score)?entry.score+'점':'—')+'</strong>'+
    (entry.scoreCondition?'<small>'+escapeHTML(entry.scoreCondition)+'</small>':'')+'</dd></div>'+
    '<div><dt>능력 변화</dt><dd>'+(growth||'—')+'</dd></div>'+
    (entry.match||entry.purse||entry.prize||fair.exhibitors?'<div><dt>'+(entry.rank===0?'보상':entry.match?'승리 보상':'입상 보상')+'</dt><dd>'+
    (entry.purse?'<strong class="award-purse">상금 '+money(entry.purse)+'</strong>':'')+
    (entry.prize?'<span>'+escapeHTML(entry.prize)+'</span>':'')+
    (!entry.purse&&!entry.prize?'—':'')+'</dd></div>':'')+
    (fair.warrant&&entry.rank===2?'<div class="award-certification"><dt>왕실 인증</dt><dd>인증 품목 수요 매달 +2개</dd></div>':'')+
    '</dl></div></article>';
}
function contestAppearance(fair){
  return fair.id.startsWith("newYear-")?Math.max(0,fair.year-1):fair.year;
}
function contestResultLine(fair,entry){
  const scene=contestResultScene(fair,entry);
  if(scene)return scene.narration;
  if(entry.match&&entry.scoreCondition)return "담당관이 납품 장부의 수량을 짚습니다. 시엘은 인증에 필요한 열여덟 개까지 몇 개가 남았는지 확인합니다.";
  if(entry.tied)return fair.company?"담당관이 같은 점수를 받은 두 상회의 이름을 나란히 적고 양쪽 견본 앞에 상장을 놓습니다.":"심사위원이 같은 점수를 받은 두 사람의 이름을 차례로 부릅니다. 시엘이 상대와 나란히 서서 인사합니다.";
  const option=fair.options?.[entry.index];
  if(option){
    if(entry.match&&!entry.rank&&entry.duel&&entry.score>=entry.duel.rivalScore*.95)
      return "심사위원이 상대의 이름을 부릅니다. 시엘은 자리에서 일어나 먼저 박수를 보냅니다.";
    return entry.rank?option.placed:option.missed;
  }
  return entry.rank?"심사위원이 팬텀사의 견본 옆에 상장을 놓습니다.":"시엘은 심사표를 접어 견본 상자에 넣고, 상장을 받는 상대에게 고개를 숙입니다.";
}
function duelScene(fair,ticket,duel,entry){
  const rival=contestOpponent(fair),option=fair.options?.[ticket.index];
  const turn=duel.page??(Number.isInteger(duel.choice)?1:0),done=Boolean(entry);
  const appearance=contestAppearance(fair),reply=rival.replies?.[appearance];
  const handoff=duel.announcing&&option?.handoff;
  const waiting=option?.handoff&&(handoff||turn<(reply?2:1));
  const poses=option?.poses||["inspect","write"];
  const showSamples=fair.company&&!fair.warrant;
  const sample=id=>'<img class="duel-sample" src="assets/map-cart-'+id+'.png" alt="'+products[id].name+'">';
  function rivalArtwork(exhibitor){
    const portrait=exhibitor.poses?.[ticket.index]||exhibitor.portrait;
    return portrait?'<img class="duel-portrait" src="'+portrait+'" alt="">':
      '<i class="duel-sprite" style="background-image:url(assets/staff/'+exhibitor.actor+'.png)" aria-hidden="true"></i>';
  }
  const actor='<div class="contest-actor" aria-hidden="true"><img src="'+actors[poses[0]]+'" alt=""><img src="'+actors[poses[1]]+'" alt=""></div>';
  function side(name,caption,art,score,active){
    return '<div class="duel-side'+(active?' performing':'')+'"><div class="duel-art">'+art+'</div><div class="duel-plate"><b>'+name+'</b><small>'+caption+'</small><strong>'+score+'</strong></div></div>';
  }
  const exhibition=fair.exhibitors?.map(exhibitor=>side(exhibitor.name,products[exhibitor.product].name,
    rivalArtwork(exhibitor)+sample(exhibitor.product),exhibitor.score+"점",false)).join("")||"";
  let slip;
  if(done){
    slip=contestResultSlip(fair,entry);
  }else{
    const speaker=handoff?"":turn?(fair.entrant||"시엘"):rival.name;
    const line=handoff||(turn===0?(rival.laterQuotes?.[appearance-1]??rival.quote):
      turn===1&&reply?reply:contestSpeech(fair,ticket,matchAssessment(state,fair,ticket,duel).speechTier));
    const next='<button type="button" class="line-next" aria-label="다음 대사" data-action="fair-next:'+(handoff?'handoff':turn)+'"><span aria-hidden="true">▼</span></button>';
    slip=sceneLine(escapeHTML(speaker),escapeHTML(line),next,'aria-live="polite"');
  }
  return '<section class="contest-screen duel-screen'+(done&&!openContestClosings.has(entry)?' duel-result':'')+'" aria-labelledby="contest-title" style="--contest-art:url(&quot;'+new URL(sceneArt[fair.room],document.baseURI).href+'&quot;)">'+
    '<header><span>'+monthText(fair.month)+' · '+(fair.company?'출품 심사':option.label)+'</span><h2 id="contest-title">'+fair.title+'</h2></header>'+
    '<div class="duel-stage'+(fair.exhibitors?" exhibition-stage":"")+(done?' is-revealed':'')+'">'+
    side(rival.name,fair.company?products[rival.product].name:rival.role,rivalArtwork(rival)+(showSamples?sample(rival.product):''),(duel.rivalScore??contestRivalAbility(fair))+"점",!turn&&!done)+
    (fair.exhibitors?exhibition:'<b class="duel-vs" lang="en">VS</b>')+
    side(fair.entrant||(fair.warrant?"팬텀사":"시엘 팬텀하이브"),fair.company?products[ticket.product].name:"팬텀하이브의 당주",actor+(showSamples?sample(ticket.product):''),done?entry.score+"점":waiting?"차례 대기":"심사 중",turn&&!done&&!waiting)+'</div>'+
    slip+'</section>';
}

function contestScene(event){
  const fair=event.contest,entry=state.fairBook?.[fair.id];
  const duel=entry?.duel||state.sequence?.duel;
  if(duel){
    const scene=duelScene(fair,entry||contestTicket(state,fair),duel,entry);
    if(!previewFair)return scene;
    const fairs=contests.includes(fair)?contests:[...contests,fair].sort((a,b)=>a.month-b.month);
    const options=fairs.map(f=>'<option value="'+f.id+'"'+(f.id===fair.id?' selected':'')+'>'+monthText(f.month)+' · '+f.title+'</option>').join("");
    return '<nav class="preview-fairs" aria-label="경연 미리보기"><label>경연 미리보기 <select id="preview-fair">'+options+'</select></label>'+
      (!fair.company?'<a href="?fair-preview='+fair.id+'&amp;entry='+(contestTicket(state,fair).index===0?1:0)+'">다른 종목</a>':'')+
      '<a href="?fair-preview='+fair.id+'&amp;entry='+String(contestTicket(state,fair).index||0)+'">다시 보기</a><a href="./">게임 표지</a></nav>'+scene;
  }
  const o=fair.options?.[entry.index],label=contestEntryName(fair,entry);
  const revealed=entry.revealed||entry.reason;
  const heading=revealed?contestRank(entry):label;
  const line=entry.reason?(contestResultScene(fair,entry)?.narration??"세바스찬이 접수처에서 돌려받은 참가표를 수첩에 끼워 둡니다."):
    revealed?contestResultLine(fair,entry):o?.line??"팬텀사의 상표를 단 견본을 흰 천 위에 올립니다. 심사위원이 견본을 들어 마감을 살피고 납품 기록을 펼칩니다.";
  const poses=o?.poses||["inspect","write"];
  const display=entry.reason?"":'<div class="contest-display'+(revealed?" is-revealed":"")+'">'+
    (entry.product?'<img class="contest-sample" src="assets/map-cart-'+entry.product+'.png" alt="'+label+' 견본">':'')+
    '<div class="contest-actor" role="img" aria-label="경연에 참가한 시엘"><img src="'+actors[poses[0]]+'" alt=""><img src="'+actors[poses[1]]+'" alt=""></div></div>';
  if(revealed&&!entry.reason&&entry.score!=null){
    return '<section class="contest-screen'+(openContestClosings.has(entry)?'':' duel-result')+'" aria-labelledby="contest-title" style="--contest-art:url(&quot;'+new URL(sceneArt[fair.room],document.baseURI).href+'&quot;)">'+
      '<header><span>'+monthText(fair.month)+'</span><h2 id="contest-title">'+fair.title+'</h2></header>'+display+contestResultSlip(fair,entry)+'</section>';
  }
  return '<section class="contest-screen" aria-labelledby="contest-title" style="--contest-art:url(&quot;'+new URL(sceneArt[fair.room],document.baseURI).href+'&quot;)">'+
    '<header><span>'+monthText(fair.month)+'</span><h2 id="contest-title">'+fair.title+'</h2></header>'+display+
    '<div class="contest-slip"><h3>'+heading+'</h3><p>'+escapeHTML(line)+'</p>'+
    (revealed?contestResultDialogueMarkup(fair,entry):'')+
    (revealed&&entry.purse?'<p class="contest-prize">상금 '+money(entry.purse)+' · '+entry.prize+'</p>':'')+
    (revealed&&fair.warrant&&entry.rank===2?'<p>인증 품목 수요 매달 +2개</p>':'')+
    btn(revealed?"행사 마치기":"심사 결과 보기",revealed?"fair-close":"fair-reveal",false,"primary")+'</div></section>';
}
function festivalAction(action,id){
  if(!["fair-next","fair-reveal","fair-close","fair-closing-next","fair-result-prev","fair-result-next","fair-result-restart"].includes(action))return false;
  if(tab!=="plan"||state.phase!=="event")return true;
  const event=pendingEvent(),fair=event?.contest;
  if(!fair)return true;
  const entry=state.fairBook?.[fair.id],duel=state.sequence?.duel;
  if(!entry&&duel){
    const page=duel.page??(Number.isInteger(duel.choice)?1:0);
    const handoff=fair.options?.[contestTicket(state,fair)?.index]?.handoff;
    const announcing=duel.announcing&&handoff;
    if(action!=="fair-next"||id!==(announcing?"handoff":String(page)))return true;
    const finalPage=contestOpponent(fair).replies?.[contestAppearance(fair)]?2:1;
    if(announcing||page<finalPage){
      if(announcing)delete duel.announcing;
      else{
        duel.page=page+1;
        if(duel.page===finalPage&&handoff)duel.announcing=true;
      }
      persist();render(true);
    }
    else if(previewFair){settleFestival(state,duel);render(true);}
    else settleMonth();
    return true;
  }
  if(!entry)return true;
  const lines=contestClosingLines(fair,entry);
  if(lines && (entry.revealed||entry.duel)){
    if(action==="fair-close"){
      if(!openContestClosings.has(entry)){
        openContestClosings.add(entry);contestResultPages.set(entry,0);
        render(true);focusAction("fair-closing-next:0");
      }
      return true;
    }
    if(action==="fair-closing-next"){
      const page=contestResultPage(entry,{lines});
      if(!openContestClosings.has(entry)||id!==String(page))return true;
      if(page===lines.length-1){
        openContestClosings.delete(entry);
        if(previewFair)location.reload();else finishEventChoice(event);
      }else{
        contestResultPages.set(entry,page+1);render();focusAction("fair-closing-next:"+(page+1));
      }
      return true;
    }
    if(action.startsWith("fair-result-"))return true;
  }
  if(action.startsWith("fair-result-")){
    const scene=contestResultScene(fair,entry);
    if(!scene||!(entry.duel||entry.revealed||entry.reason))return true;
    const page=contestResultPage(entry,scene);
    if(id!==String(page))return true;
    const next=action==="fair-result-restart"?0:page+(action==="fair-result-next"?1:-1);
    if(next<0||next>=scene.lines.length||next===page)return true;
    const scroll=document.querySelector("#conversation .contest-screen")?.scrollTop||0;
    contestResultPages.set(entry,next);
    render();
    const screen=document.querySelector("#conversation .contest-screen");
    if(screen)screen.scrollTop=scroll;
    const focus=action==="fair-result-prev"&&next>0?"fair-result-prev":
      next===scene.lines.length-1?"fair-result-restart":"fair-result-next";
    focusAction(focus+":"+next);
    return true;
  }
  if(action==="fair-reveal"&&!entry.revealed&&!entry.reason){
    entry.revealed=true;persist();render(true);
  }else if(action==="fair-close"&&(entry.revealed||entry.reason))finishEventChoice(event);
  return true;
}
function filedSection(title,body,count,icon){
  return '<details class="file-section"><summary><img src="assets/planner-icons/'+icon+'.png" alt=""><span>'+title+'</span><small>'+count+'</small></summary><div>'+body+'</div></details>';
}
function courtFolio(){
  const criteria=courtRows();
  const metAll=criteria.every(([,met])=>met);
  const renownScale=40;
  const renown=Math.min(renownScale,Math.max(0,Number(state.renown)||0));
  const recorded=isApprovedEnding(state.ending)?"작위 회복":
    ["vowNoTitle","releaseNoTitle"].includes(state.ending)?"이번 심의 유보":"";
  const checks=criteria.filter(([label])=>label!=="가문 명성").map(([label,met])=>
    '<div><dt>'+label+'</dt><dd><span class="court-check-status" data-met="'+met+'">'+(met?"충족":"미충족")+'</span></dd></div>'
  ).join("");
  return '<section class="court-folio"><div class="court-ruling"><header><span class="court-portrait" aria-hidden="true"><img src="assets/portraits/sebastian-head.webp" alt=""></span><div><small>'+monthText(state.month)+'</small><h3>왕실 작위 심의</h3></div>'+
    '<strong class="court-verdict">'+(recorded||(metAll?"충족":"미충족"))+'</strong></header>'+
    '<div class="court-renown-row"><span>가문 명성</span><meter class="court-renown" aria-label="가문 명성" min="0" max="'+renownScale+'" value="'+renown+'"></meter></div>'+
    '<dl class="court-checks" aria-label="작위 심의 기준">'+checks+'</dl><footer class="court-signature"><span>확인 · 집사 세바스찬</span><i lang="en" aria-hidden="true">S. Michaelis</i></footer></div></section>';
}
function familyFolio(history,album,extra=""){
  const allies=peopleInHouse();
  const relations=allies.map(id=>({name:servants[id].name,trust:state.people[id].toward,icon:"assets/staff/"+id+".png"}));
  const affinity=elizabethAffinity(state);
  relations.push({name:"엘리자베스",trust:affinity,icon:elizabethPortrait(),affinity:true});
  const relationshipRows=relations.map(({name,trust,icon,affinity})=>{
    const tier=trustTier(trust);
    const marks=[0,1,2,3].map(n=>'<i class="'+(n<=tier&&(!affinity||trust>0)?'filled':'')+'"></i>').join("");
    return '<div class="trust-entry" data-tier="'+tier+'"><img src="'+icon+'" alt=""><b>'+name+'</b><span class="trust-stage">'+
      '<span aria-hidden="true">'+marks+'</span>'+(affinity?"호감도 "+trust:rank(trust))+'</span></div>';
  }).join("")||"아직 기록된 인물이 없습니다.";
  const fairHistory=[...contestArchive].reverse().map(fairReport).filter(Boolean);
  const warrants=Object.keys(state.royalWarrants||{}).map(id=>products[id].name).join(" · ");
  return '<div class="family-folio">'+courtFolio()+'<aside class="folio-files"><dl class="folio-finance"><div><dt>가문 자금</dt><dd>'+money(state.fund)+'</dd></div><div><dt>남은 채무</dt><dd>'+money(state.debt)+'</dd></div></dl>'+
    filedSection("인물 관계",'<p>각 인물이 시엘에게 보내는 신뢰와 호감도입니다.</p>'+relationshipRows,relations.length+"명","social")+
    filedSection("사건 기록",history||"첫 사건을 마치면 선택이 기록됩니다.",state.events.length+"건","casework")+
    filedSection("계절 경연 · 박람회",(warrants?'<p><b>왕실 납품 인증</b> '+warrants+'</p>':"")+(fairHistory.join("")||"참가한 행사의 결과가 기록됩니다."),fairHistory.length+"건","reception")+
    filedSection("엔딩 도감",album,endingGalleryEntries().length+"개 기록","reading")+extra+'</aside></div>';
}
function relapseNotice(run){
  if(!run.relapseStage)return "";
  if(run.phase==="plan"&&plannedCareLevel(run)===2)return "도련님께서 안정을 취하실 시간을 마련했습니다.";
  return run.relapseStage===1?"도련님의 기침이 다시 잦아졌습니다.":"지병이 깊어져 도련님께서 자리를 뜨기 어렵습니다.";
}
function healthNotice(run){
  const relapse=relapseNotice(run);
  if(relapse)return relapse;
  if(run.ill??run.illness)return "도련님은 요양 중입니다. 예약한 수업료는 그대로 지급됩니다.";
  if(run.stress>70)return "도련님, 손이 떨리십니다. 다음 일정까지 밀어붙이면 몸이 더 상할 겁니다.";
  const {onset}=illnessLimits(run);
  if(run.stress>=onset-12)return "도련님 얼굴에 피로가 짙습니다.";
  return "";
}
