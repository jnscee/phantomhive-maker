"use strict";
const dutyPins = {library:[50,14], kitchen:[23,45], parlor:[74,45], garden:[19,78], guard:[79,78]};
const dutyFloors={library:[48,58,35],kitchen:[26,34,74],parlor:[61,69,72],garden:[21,30,97],guard:[77,86,97]};
function estateWalkers(){
  const staff=peopleInHouse().filter(id=>servants[id].job);
  return Object.entries(dutyFloors).map(([room,[left,right,feet]])=>{
    const team=staff.filter(id=>state.jobs[id]===room);
    return team.map((id,i)=>{
      const width=(right-left)/team.length;
      return '<span class="duty-lane" aria-hidden="true" style="left:'+(left+width*i)+'%;width:'+width+'%;top:'+feet+'%;--pace:'+(8+i*.7)+'s;--delay:-'+(Object.keys(servants).indexOf(id)*1.7)+'s"><span class="duty-walker" data-servant="'+id+'"><img alt="" src="assets/staff/'+id+'.png"></span></span>';
    }).join("");
  }).join("");
}
let selectedEmployee=null;
let estateReturnScroll=0;
function dutyName(room){
  return (facilities[room]||annex[room])?.name||"대기";
}
function staffCard(id,name,assignment,bonus,locked){
  return '<button type="button" class="staff-card" data-employee="'+id+'" aria-pressed="'+(id===selectedEmployee)+'" '+(locked?'disabled':'')+'><img draggable="false" src="'+portraits[name]+'" alt=""><span><b>'+name+'</b><small>'+assignment+'</small><small>'+bonus+'</small></span></button>';
}
const londonHosts={soma:{name:"소마",role:"왕자",specialty:"salon"},agni:{name:"아그니",role:"집사",specialty:"kitchen"}};
const londonRooms={
  salon:{name:"응접실",work:"팬텀사 견본 소개",effect:"소매 수요",unit:"개",image:"room-ballroom.webp"},
  kitchen:{name:"주방",work:"본저택으로 보낼 식사 준비",effect:"시엘 컨디션",unit:"",image:"goods-tea.webp"},
  post:{name:"서신실",work:"시엘에게 보낼 런던 소식 정리",effect:"시엘 통찰",unit:"",image:"room-office.webp"}
};
const londonRequests=[
  {name:"완구상 초청 다과회",rooms:["salon","kitchen"],result:"찻잔을 거둔 뒤에도 손님들은 자리를 뜨지 않았다. 마지막 태엽이 다 풀릴 때까지 견본 둘레에 서 있었다."},
  {name:"런던 상인 간담회",rooms:["post","salon"],result:"회신을 보내 온 상인들의 명함이 은쟁반에 쌓였다. 다음 모임의 날짜는 손님들 쪽에서 먼저 물었다."},
  {name:"자선병원 식사 후원",rooms:["post","kitchen"],result:"병동마다 필요한 식사 수를 확인하고 따뜻한 그릇을 보냈다. 저녁 우편에 빈 바구니와 간호사의 답장이 함께 돌아왔다."}
];
function londonResidents(run){
  if(!run.flags.townhouse)return [];
  return Object.keys(londonHosts).filter(id=>run.people[id]||(id==="agni"&&run.flags.agni&&run.people.soma));
}
function londonPlan(run){
  const power={salon:0,kitchen:0,post:0};
  const request=londonRequests[(run.month-1)%londonRequests.length];
  for(const id of londonResidents(run)){
    const room=run.london?.jobs?.[id];
    if(!Object.hasOwn(londonRooms,room))continue;
    const skill=run.london.skill?.[id]||0;
    power[room]+=2+Number(londonHosts[id].specialty===room)+Math.floor(skill/10);
  }
  return {power,request,ready:request.rooms.every(room=>power[room]>0)};
}
function settleLondon(run){
  const residents=londonResidents(run);
  const office=run.london;
  if(!residents.length||!office||office.book?.at(-1)?.month===run.month)return;
  const working=residents.filter(id=>Object.hasOwn(londonRooms,office.jobs?.[id]));
  if(!working.length)return;
  const {power,request,ready}=londonPlan(run);
  const health=Math.min(100-run.hp,power.kitchen);
  const insight=ordinaryAbilityGain(run.stats.통찰,power.post);
  run.hp+=health;
  run.stats.통찰+=insight;
  if(ready)run.renown++;
  office.skill??={};
  for(const id of working)office.skill[id]=Math.min(30,(office.skill[id]||0)+1);
  const summary=[power.salon?"팬텀사 소매 수요 +"+power.salon+"개":"",power.kitchen?"컨디션 +"+health:"",power.post?"통찰 +"+insight:"",ready?request.name+" · 가문 명성 +1":""].filter(Boolean).join(" / ");
  (office.book??=[]).push({month:run.month,summary,story:ready?request.result:""});
  run.log.push("타운하우스 · "+summary);
}
const londonLayout={post:{pin:[50,20],floor:[42,58,43]},salon:{pin:[26,59],floor:[25,38,83]},kitchen:{pin:[74,59],floor:[65,77,83]}};
let selectedLondonRoom="salon";
function londonBoard(){
  const {power,request,ready}=londonPlan(state);
  const ids=londonResidents(state);
  const jobs=state.london?.jobs||{};
  const locked=state.phase!=="plan";
  const roomButtons=Object.entries(londonRooms).map(([id,room])=>{
    const {pin:[x,y],floor:[left,right,feet]}=londonLayout[id];
    const team=ids.filter(person=>jobs[person]===id);
    const walkers=team.map((person,i)=>{
      const span=(right-left)/team.length;
      return '<span aria-hidden="true" class="duty-lane" style="left:'+(left+i*span)+'%;width:'+span+'%;top:'+feet+'%;--pace:11s;--delay:-'+(i+1)*3+'s"><span class="duty-walker" data-servant="'+person+'"><img alt="" src="assets/staff/'+person+'.png"></span></span>';
    }).join("");
    const names=team.map(person=>londonHosts[person].name).join(" · ")||"미배치";
    return walkers+'<button type="button" class="map-pin" data-duty="'+id+'" style="left:'+x+'%;top:'+y+'%" aria-pressed="'+(selectedLondonRoom===id)+'"><b>'+room.name+'</b><em>'+names+'</em></button>';
  }).join("");
  const room=londonRooms[selectedLondonRoom];
  const roster=ids.map(id=>{
    const host=londonHosts[id];
    const skill=state.london?.skill?.[id]||0;
    return staffCard(id,host.name,host.role+" · "+(londonRooms[jobs[id]]?.name||"대기")+" · 숙련도 "+skill+"/30","특기 "+londonRooms[host.specialty].name+" +1 · 숙련 보너스 +"+Math.floor(skill/10),locked);
  }).join("");
  const records=(state.london?.book||[]).slice().reverse().map(entry=>'<p><b>'+monthText(entry.month)+'</b><br>'+statResultText(entry.summary)+(entry.story?'<br>'+entry.story:'')+'</p>').join("");
  return '<div class="property-grid staff-board london-board"><section class="property-grounds london-rooms"><div class="property-map staff-map london-map" role="group" aria-label="런던 타운하우스 근무지"><img alt="" class="map-base" src="assets/map-london.webp">'+roomButtons+'</div><div class="london-duty-info" aria-live="polite"><b>'+room.name+'</b><span>'+room.work+'</span><strong>'+room.effect+' +'+power[selectedLondonRoom]+room.unit+'</strong></div></section>'+
    '<section class="property-desk staff-roster"><div class="work-title"><h3>이번 달 배치</h3></div>'+
    (ids.length?'<p>'+(locked?'일정을 마치면 다음 달 배치를 바꿀 수 있습니다.':'인물을 누른 뒤 방을 선택하세요. 두 사람이 한 방을 맡으면 효과가 합산됩니다.')+'</p>':'')+roster+
    (ids.length?'<button type="button" data-duty="off" '+(locked?'disabled':'')+'>대기 배치</button>':'')+
    '<p>배치한 달마다 숙련도 +1. 숙련도 10마다 맡은 업무의 효과가 1씩 늘어납니다.</p>'+
    '<section class="budget-book london-request"><h3>'+request.name+'</h3><p>'+request.rooms.map(id=>londonRooms[id].name).join(" + ")+'에 각각 한 명을 배치하면 월말에 가문 명성 +1</p><b>'+(ready?'준비 완료':'준비 중')+'</b></section>'+
    '<details class="annexes london-book"><summary>런던 운영 일지</summary>'+(records||'<p>첫 근무를 마치면 여기에 결과가 기록됩니다.</p>')+'</details></section></div>';
}
function staffBoard(){
  const staff=peopleInHouse().filter(id=>servants[id].job);
  const locked=state.phase!=="plan";
  const roster=staff.map(id=>{
    const name=servants[id].name;
    const skill=state.people[id].skill||0, room=state.jobs[id];
    const metric=staffDutyMetric[room];
    return staffCard(id,name,(servants[id].role?servants[id].role+" · ":"")+dutyName(room)+" · 숙련도 "+skill+"/30",metric?metric+" +"+Math.floor(skill/5)+" (숙련도 5당 +1)":"배치하면 시설 관리 수치가 오릅니다.",locked);
  }).join("");
  const zone=(id,coords)=>{
    const names=staff.filter(p=>state.jobs[p]===id).map(p=>servants[p].name);
    return '<button type="button" data-duty="'+id+'" '+(coords?'style="left:'+coords[0]+'%;top:'+coords[1]+'%"':'')+(locked?' disabled':'')+'><b>'+dutyName(id)+'</b>'+(names.length?'<small>'+names.join(" · ")+'</small>':'')+'</button>';
  };
  return '<div class="property-grid staff-board"><div class="property-grounds"><div class="property-map staff-map" aria-label="저택 근무지"><img class="map-base" src="'+businessArt.estate+'" alt="팬텀하이브 저택 단면도">'+estateWalkers()+Object.entries(dutyPins).map(([id,coords])=>zone(id,coords)).join("")+'</div></div><section class="property-desk staff-roster"><div class="work-title"><h3>고용인 명단</h3></div><p>'+(!staff.length?'사건을 통해 영입한 사용인이 이곳에 표시됩니다.':locked?'근무지는 월간 계획을 세울 때 변경할 수 있습니다.':'사용인을 근무지로 끌어 놓으세요. 사용인과 근무지를 차례로 눌러도 됩니다.')+'</p>'+roster+(staff.length?zone("off",null):'')+'</section></div>';
}
function placeEmployee(id,room){
  if(state.phase!=="plan")return;
  let name,assignment;
  if(tab==="townhouse"){
    if(!londonResidents(state).includes(id)||(room!=="off"&&!Object.hasOwn(londonRooms,room)))return;
    state.london??={};state.london.jobs??={};
    if(room==="off")delete state.london.jobs[id];
    else state.london.jobs[id]=room;
    if(room!=="off")selectedLondonRoom=room;
    name=londonHosts[id].name;
    assignment=londonRooms[room]?.name||"대기";
  }else{
    if(tab!=="staffing"||!state.people[id]||!servants[id]?.job)return;
    if(room!=="off"&&!Object.hasOwn(dutyPins,room))return;
    if(room==="off")delete state.jobs[id];
    else state.jobs[id]=room;
    if(id==="tanaka")state.staff=facilities[room]?room:null;
    name=servants[id].name;
    assignment=dutyName(room);
  }
  selectedEmployee=null;
  persist();render();
  document.querySelector('[data-employee="'+id+'"]')?.focus({preventScroll:true});
  announce(name+" · "+assignment);
}
let staffDrag=null;
document.addEventListener("pointerdown",event=>{
  const card=event.target.closest(".staff-card:not(:disabled)");
  if(!card||!event.isPrimary||event.button!==0)return;
  card.setPointerCapture(event.pointerId);
  staffDrag={card,id:event.pointerId,x:event.clientX,y:event.clientY};
});
document.addEventListener("pointermove",event=>{
  const d=staffDrag;
  if(!d||d.id!==event.pointerId)return;
  if(!d.ghost && Math.hypot(event.clientX-d.x,event.clientY-d.y)<6)return;
  if(!d.ghost){
    d.ghost=document.createElement("span");
    d.ghost.className="staff-ghost";
    d.ghost.textContent=d.card.querySelector("b").textContent;
    document.body.append(d.ghost);
  }
  d.ghost.style.left=event.clientX+"px";d.ghost.style.top=event.clientY+"px";
  d.zone?.classList.remove("drop-active");
  d.zone=document.elementFromPoint(event.clientX,event.clientY)?.closest("[data-duty]");
  d.zone?.classList.add("drop-active");
});
function endStaffDrag(event){
  const d=staffDrag;
  if(!d||d.id!==event.pointerId)return;
  staffDrag=null;
  d.ghost?.remove();d.zone?.classList.remove("drop-active");
  if(event.type==="pointerup"&&d.ghost){
    const zone=document.elementFromPoint(event.clientX,event.clientY)?.closest("[data-duty]");
    if(zone)placeEmployee(d.card.dataset.employee,zone.dataset.duty);
  }
}
for(const type of ["pointerup","pointercancel","lostpointercapture"])document.addEventListener(type,endStaffDrag);
document.addEventListener("click",event=>{
  const card=event.target.closest(".staff-card:not(:disabled)");
  if(card){
    selectedEmployee=card.dataset.employee;
    for(const node of document.querySelectorAll(".staff-card"))node.setAttribute("aria-pressed",String(node===card));
  }
  const zone=event.target.closest("[data-duty]:not(:disabled)");
  if(zone){
    if(selectedEmployee)placeEmployee(selectedEmployee,zone.dataset.duty);
    else if(tab==="townhouse"&&Object.hasOwn(londonRooms,zone.dataset.duty)){
      selectedLondonRoom=zone.dataset.duty;
      const scroll=$("panel").scrollTop;render();$("panel").scrollTop=scroll;
      document.querySelector('[data-duty="'+selectedLondonRoom+'"]').focus({preventScroll:true});
    }else announce("먼저 배치할 사용인을 선택해 주세요.");
  }
});
