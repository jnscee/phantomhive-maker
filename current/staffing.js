"use strict";
const dutyPins = {library:[50,25], kitchen:[23,60], parlor:[72,60], garden:[20,87], guard:[75,87]};
let selectedEmployee=null;
let estateReturnScroll=0;
function dutyName(room){
  return (facilities[room]||annex[room])?.name||"대기";
}
function staffBoard(){
  const staff=peopleInHouse().filter(id=>servants[id].job);
  const locked=state.phase!=="plan";
  const roster=staff.map(id=>{
    const name=servants[id].name;
    return '<button type="button" class="staff-card" data-employee="'+id+'" aria-pressed="'+(id===selectedEmployee)+'" '+(locked?'disabled':'')+'><img draggable="false" src="'+portraits[name]+'" alt=""><span><b>'+name+'</b><small>'+dutyName(state.jobs[id])+' · 숙련도 '+(state.people[id].skill||0)+'/30</small></span></button>';
  }).join("");
  const zone=(id,coords)=>{
    const names=staff.filter(p=>state.jobs[p]===id).map(p=>servants[p].name);
    const faces=names.map(name=>'<img src="'+portraits[name]+'" alt="" draggable="false">').join("");
    return '<button type="button" data-duty="'+id+'" '+(coords?'style="left:'+coords[0]+'%;top:'+coords[1]+'%"':'')+(locked?' disabled':'')+'><b>'+dutyName(id)+'</b>'+(names.length?'<span class="duty-faces">'+faces+'</span><small>'+names.join(" · ")+'</small>':'')+'</button>';
  };
  return '<div class="property-grid staff-board"><div class="property-grounds"><div class="property-map staff-map" aria-label="저택 근무지"><img class="map-base" src="'+businessArt.estate+'" alt="팬텀하이브 저택 단면도">'+Object.entries(dutyPins).map(([id,coords])=>zone(id,coords)).join("")+'</div></div><section class="property-desk staff-roster"><div class="work-title"><h3>고용인 명단</h3></div><p>'+(!staff.length?'사건을 통해 영입한 사용인이 이곳에 표시됩니다.':locked?'근무지는 월간 계획을 세울 때 변경할 수 있습니다.':'사용인을 근무지로 끌어 놓으세요. 사용인과 근무지를 차례로 눌러도 됩니다.')+'</p>'+roster+(staff.length?zone("off",null):'')+'</section></div>';
}
function placeEmployee(id,room){
  if(tab!=="staffing"||state.phase!=="plan"||!state.people[id]||!servants[id]?.job)return;
  if(room!=="off"&&!Object.hasOwn(dutyPins,room))return;
  if(room==="off")delete state.jobs[id];
  else state.jobs[id]=room;
  if(id==="tanaka")state.staff=facilities[room]?room:null;
  selectedEmployee=null;
  persist();render();
  document.querySelector('[data-employee="'+id+'"]')?.focus({preventScroll:true});
  announce(servants[id].name+" · "+dutyName(room));
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
    d.ghost.textContent=servants[d.card.dataset.employee].name;
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
    else announce("먼저 배치할 사용인을 선택해 주세요.");
  }
});
