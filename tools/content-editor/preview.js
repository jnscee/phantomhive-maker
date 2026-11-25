"use strict";

// This game instance is isolated from player saves in both editors.
persist=()=>{};
storageOk=false;
saves={};
state=initial();
tab="plan";

const previewCut=length=>Math.min(Math.max(0,length-1),Math.max(0,editorPreview?.cut||0));
if(editorPreview?.kind==="opening"){
  openingSession=true;
  openingAuto=false;
  state.contractFiled=Boolean(editorPreview.handoff);
  state.openingLine=openingLines.findIndex(line=>line.sceneIndex===editorPreview.scene)+previewCut(openingPlayback[editorPreview.scene].lines.length);
}else if(editorPreview?.kind==="ending"){
  endingReplay={id:editorPreview.id,at:previewCut(endingScenes[editorPreview.id].lines.length),origin:"record"};
  if(editorPreview.career){
    saves.londonCareer=editorPreview.career;
    const act=londonEndingScenes[editorPreview.career];
    endingReplay.at=endingScenes.vowNoTitle.lines.length-act.length+previewCut(act.length);
  }
  if(editorPreview.person){
    saves.farewellGallery={[editorPreview.id]:{age:12,cast:[[editorPreview.person,editorPreview.tier]]}};
    endingReplay.farewell=0;
  }
  state.phase="plan";
  tab="endingMemory";
}else if(["event","recruit"].includes(editorPreview?.kind)){
  const event=events.find(candidate=>candidate.id===editorPreview.id);
  if(event){
    state.phase=event.slot?"slotEvent":"event";
    state.pending=event.id;
    state.sequence={index:0,slotQueue:[],grade:1};
    state.eventQueue=[];
    if(Object.hasOwn(recruitScenes,event.id)){
      const book=recruitScenes[event.id];
      const pages=book.lines.filter(line=>line.i===(editorPreview.scene??0));
      const at=book.lines.indexOf(pages[previewCut(pages.length)]);
      state.recruitPage={id:event.id,at:Math.max(0,at),version:3};
      if(event.id==="visitPrince")state.people.tanaka={toward:2};
    }
    finishEventChoice=()=>{
      state.phase="plan";
      state.pending=null;
      delete state.termOutcome;
      delete state.termPage;
      tab="home";
      render(true);
    };
  }
}else if(editorPreview?.kind==="visit"){
  const card=visitEncounterCards.find(item=>item.id===editorPreview.id);
  state.phase="visit";
  state.visit=card.place;
  state.sequence={index:2,visitEvent:card.id,visitBefore:snapStats(state)};
  finishVisit=()=>{state.phase="plan";tab="home";render(true);};
}else if(editorPreview?.kind==="fair"){
  state.phase="plan";
  state.month=state.planMonth=editorPreview.month;
  tab="plan";
}else if(editorPreview?.kind==="london"){
  state.phase="plan";
  state.month=editorPreview.month;
  state.planMonth=state.month;
  state.flags.townhouse=true;
  recruit("soma");
  recruit("agni");
  const [soma,agni]=londonRequests[state.month-1].rooms;
  state.london={jobs:{soma,agni}};
  settleLondon(state);
  tab="townhouse";
}else if(editorPreview?.kind==="weather"){
  state.month=state.planMonth=editorPreview.id==="heat"?6:12;
  state.weather=editorPreview.id;
  state.phase="weatherBriefing";
}else if(editorPreview?.kind==="activity"){
  state.phase="plan";
  state.visit="none";
  state.plan=[editorPreview.id,"rest","rest"];
  execute();
}
render();
