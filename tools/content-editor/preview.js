"use strict";

// This file is served only by the local editor. Test runs stay in memory.
persist = () => {};
storageOk = false;
saves = {};
state = initial();
tab = "plan";

if (editorPreview?.kind === "opening") {
  openingSession=true;
  openingAuto=false;
  state.openingLine=openingLines.findIndex(line=>line.sceneIndex===editorPreview.scene);
} else if (editorPreview?.kind === "ending") {
  replayEnding=editorPreview.id;
  endingPage=endings[replayEnding].scenes.slice(0,editorPreview.scene)
    .reduce((count,[,lines])=>count+lines.length,0);
} else if (["event","snake"].includes(editorPreview?.kind)) {
  const event=events.find(candidate=>candidate.id===editorPreview.id);
  if(event) {
    state.phase=event.slot?"slotEvent":"event";
    state.pending=event.id;
    state.sequence={index:0,slotQueue:[],grade:1};
    state.eventQueue=[];
    closePendingEvent=()=>{
      state.phase="plan";
      state.pending=null;
      delete state.eventResponse;
      delete state.eventPage;
      tab="home";
      render(true);
    };
    if(editorPreview.kind==="snake") {
      state.eventPage=event.sceneLengths.slice(0,editorPreview.scene)
        .reduce((count,length)=>count+length,0);
    }
  }
} else if (editorPreview?.kind === "london") {
  state.phase="plan";
  state.month=editorPreview.month;
  state.planMonth=state.month;
  state.flags.townhouse=true;
  state.flags.agni=true;
  state.people.soma={toward:2};
  const [soma,agni]=londonRequests[state.month-1].rooms;
  state.london={jobs:{soma,agni}};
  settleLondon(state);
  tab="townhouse";
} else if (editorPreview?.kind === "activity") {
  state.phase="plan";
  state.visit="none";
  state.plan=[editorPreview.id,"rest","rest"];
  execute();
}
render();
