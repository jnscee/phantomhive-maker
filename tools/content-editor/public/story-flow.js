"use strict";

function storyRouteScenes(){
  return data.groups.filter(group=>["event","visit"].includes(group.preview?.kind)).map(group=>{
    const trigger=group.fields.find(field=>field.trigger);
    const title=group.fields.find(field=>field.label==="제목");
    const choices=group.fields.find(field=>field.type==="choices");
    return {id:group.preview.id,group,title:title?value(title):group.title,
      linked:Boolean(trigger&&value(trigger)===0),choices:choices?value(choices):[]};
  });
}

function openFlowGroup(group,pane="flow"){
  selected=group.key;
  section=group.section;
  activePane=pane;
  $("search").value="";
  drawList();
  drawDesk();
}

function focusFlowField(group,field,{index,choice,branch,control}={}){
  openFlowGroup(group,paneFor(field));
  const block=Array.from($("fields").children).find(item=>item.dataset.field===field.id);
  let scope=choice===undefined?block:block?.querySelectorAll(".choice-row")[choice];
  if(branch&&scope){
    const details=scope.querySelector("details");
    if(details){details.open=true;scope=details;}
  }
  if(index!==undefined)scope=scope?.querySelectorAll(".line")[index];
  const target=scope?.querySelector(control??(index!==undefined?"textarea":"input,textarea,select,button"));
  if(target){
    target.focus({preventScroll:true});
    target.scrollIntoView({block:"center"});
  }
}

function flowCard(kind,label,body,action){
  const card=action?button("",action,"flow-card"):node("div",undefined,"flow-card");
  card.dataset.kind=kind;
  card.append(node("small",label),node("span",body));
  return card;
}

function drawStoryFlow(panel,group){
  const {kind,id}=group.preview;
  const byLabel=label=>group.fields.find(field=>field.label===label);
  const fieldText=field=>field?value(field):"";
  const fields=group.fields;
  const scenes=storyRouteScenes();
  const scene=scenes.find(item=>item.group===group);
  const byId=new Map(scenes.map(item=>[item.id,item]));
  const choicesField=fields.find(field=>field.type==="choices");
  const choices=choicesField?value(choicesField):[];
  const issues=[];
  const check=(message,action)=>issues.push({message,action});
  const fieldCard=(field,label,kind="dialogue")=>flowCard(kind,label,fieldText(field)||"내용 입력",()=>focusFlowField(group,field));
  function dialogue(field,lines,choice){
    const list=node("ol",undefined,"flow-lines");
    const key=field.id+"/"+(choice??"main");
    list.dataset.flowLines=key;
    function save(next){
      if(choice===undefined)modify(field,next);
      else{
        const updated=structuredClone(value(field));
        updated[choice][4]=next;
        modify(field,updated);
      }
    }
    function insert(at){
      if(lines.length>=250)return;
      const next=lines.slice();
      next.splice(at,0,["",""]);save(next);
      focusFlowField(group,field,{index:at,choice,branch:choice!==undefined});
      status((at+1)+"번째에 대사를 추가했습니다.");
    }
    function move(from,to){
      if(from===to)return;
      const next=lines.slice();
      next.splice(to,0,next.splice(from,1)[0]);save(next);
      drawDesk();
      const fresh=Array.from(panel.querySelectorAll("[data-flow-lines]")).find(item=>item.dataset.flowLines===key);
      const target=fresh?.children[to]?.querySelector(".flow-card");
      for(let el=target;el;el=el.parentElement)if(el.tagName==="DETAILS")el.open=true;
      target?.focus({preventScroll:true});target?.scrollIntoView({block:"nearest"});
      status((from+1)+"번 대사를 "+(to+1)+"번째로 옮겼습니다.");
    }
    lines.forEach(([who,text,metadata,cue],index)=>{
      const speaker=who?.trim();
      const name=speaker&&speaker!=="장면"?speaker:"내레이션";
      const jump=()=>focusFlowField(group,field,{index,choice,branch:choice!==undefined});
      if(!text?.trim())check((choice===undefined?"대사":"추가 선택지 "+(choice+1)+" 후속 대사")+" "+(index+1)+"번이 비어 있습니다.",jump);
      const row=node("li");
      const card=flowCard("dialogue",name,text||"대사 입력",jump);
      const tags=[];
      if(cue?.cg||field.metadata==="illustration"&&metadata)tags.push("CG");
      if(cue?.left||cue?.right||cue?.standing)tags.push("스탠딩");
      if(cue?.leftExpression||cue?.rightExpression)tags.push("표정");
      if(cue?.bgm)tags.push("BGM");
      if(cue?.se)tags.push("효과음");
      if(cue?.fx)tags.push("화면 전환");
      if(tags.length)card.append(node("em",tags.join(" · ")));
      const tools=node("div",undefined,"flow-row-tools");
      const grip=button("⠿ 이동",()=>chooseLinePosition(lines,index,move),"line-grip");
      grip.setAttribute("aria-label",(index+1)+"번 대사 위치 선택");
      lineDrop(list,row,grip,index,move);
      tools.append(grip);
      function addAt(at,label){
        const add=button(label,()=>insert(at));
        add.disabled=lines.length>=250;
        tools.append(add);
      }
      if(index===0)addAt(0,"＋ 맨 앞");
      addAt(index+1,"＋ 다음 대사");
      row.append(card,tools);list.append(row);
    });
    return list;
  }
  const board=node("section",undefined,"flow-board");
  panel.append(board);
  const header=node("header",undefined,"flow-head");
  header.append(node("h3","장면 흐름도"));
  if(choicesField)header.append(button("＋ 선택지 추가",()=>{
    openFlowGroup(group,"choices");
    const block=Array.from($("fields").children).find(item=>item.dataset.field===choicesField.id);
    block?.querySelector(".add-line")?.click();
  }));
  const audit=node("details",undefined,"flow-audit");
  board.append(header,audit);
  if(kind==="opening"||kind==="recruit"){
    const sequence=data.groups.filter(g=>g.preview?.kind===kind&&(kind==="opening"||g.preview.id===id)&&g.fields.some(field=>field.type==="lines"));
    if(sequence.length){
      const rail=node("nav",undefined,"flow-scenes");
      rail.setAttribute("aria-label","장면 재생 순서");
      sequence.forEach((g,i)=>{
        const title=g.fields.find(field=>field.label==="장면 제목");
        const tab=button((i+1)+". "+(fieldText(title)||g.detail||g.title),()=>openFlowGroup(g));
        if(g===group)tab.setAttribute("aria-current","step");
        rail.append(tab);
      });
      board.append(rail);
      const active=rail.querySelector("[aria-current]");
      if(active)requestAnimationFrame(()=>{rail.scrollLeft=active.offsetLeft-rail.offsetLeft-16;});
    }
  }
  if(scene)drawSceneConnectionMap(board,scenes,scene);
  if(scene?.linked){
    const incoming=scenes.flatMap(source=>source.choices.filter(choice=>choice[5]?.next===id).map(choice=>[source,choice[0]]));
    const parents=node("div",undefined,"flow-incoming");
    parents.append(node("strong","이 장면으로 오는 선택지"));
    if(!incoming.length)parents.append(node("span","연결 대기"));
    for(const [source,label] of incoming)parents.append(button(source.title+" · "+label,()=>openFlowGroup(source.group)));
    board.append(parents);
  }
  const trunk=node("div",undefined,"flow-trunk");
  const mainLines=fields.find(field=>field.type==="lines"&&!/^선택지/.test(field.label));
  const body=byLabel("이벤트 본문")??byLabel("본문")??byLabel("시험 질문")??byLabel("마지막 대사");
  if(mainLines){
    const lines=value(mainLines);
    const sequence=dialogue(mainLines,lines);
    if(lines.length>4){
      const fold=node("details",undefined,"flow-fold");
      fold.open=true;
      fold.append(node("summary","장면 대사 "+lines.length+"줄 · "+(lines[0][1]||"대사 입력")),sequence);
      trunk.append(fold);
    }else trunk.append(sequence);
  }
  else if(body)trunk.append(fieldCard(body,"장면 본문"));
  else trunk.append(flowCard("scene","장면",group.title));
  board.append(trunk);

  const lanes=node("ol",undefined,"flow-branches");
  function lane(){
    const branch=node("li",undefined,"flow-lane");
    lanes.append(branch);
    return branch;
  }
  const defaults=fields.filter(field=>/^선택지 \d+$/.test(field.label)||field.label==="마무리 버튼");
  for(const field of defaults){
    const branch=lane(),n=field.label.split(" ")[1];
    branch.append(fieldCard(field,"기본 선택지","choice"));
    const gate=byLabel("조건 안내 "+n);
    if(gate)branch.append(fieldCard(gate,"게임 조건 안내","condition"));
    const replyLines=byLabel("선택지 "+n+" 이후 대사");
    const reply=field.label==="마무리 버튼"?byLabel("마지막 대사"):byLabel("응답 "+n)??byLabel("결과 문구 "+n);
    if(replyLines)branch.append(dialogue(replyLines,value(replyLines)));
    else if(reply)branch.append(fieldCard(reply,field.label==="마무리 버튼"?"마지막 대사":"결과"));
    branch.append(flowCard("exit","이후 진행","이벤트 마치기"));
  }
  choices.forEach(([label,response,,amount,lines,route],i)=>{
    const branch=lane();
    const go=control=>()=>focusFlowField(group,choicesField,{choice:i,control});
    const jump=go('input[aria-label="버튼 문구"]');
    if(!label?.trim())check("추가 선택지 "+(i+1)+"의 버튼 문구가 비어 있습니다.",jump);
    if(!response?.trim())check("추가 선택지 "+(i+1)+"의 결과 문구가 비어 있습니다.",go('textarea[aria-label="선택 후 대사"]'));
    if(!Number.isInteger(amount)||Math.abs(amount)>100)check("선택지 효과 수치를 확인해 주세요.",go('input[aria-label="증감량"]'));
    branch.append(flowCard("choice","추가 선택지 "+(i+1),label||"버튼 문구 입력",jump));
    if(route?.stat){
      const edit=go('select[aria-label="선택 조건"]');
      branch.append(flowCard("condition","선택 조건",route.stat+" "+(route.min??"…")+" 이상",edit));
      if(!Number.isInteger(route.min)||route.min<0||route.min>500)check("조건 수치는 0~500 사이의 정수여야 합니다.",edit);
    }
    if(lines?.length)branch.append(dialogue(choicesField,lines,i));
    else branch.append(flowCard("dialogue","선택 후 대사",response||"내용 입력",go('textarea[aria-label="선택 후 대사"]')));
    const target=byId.get(route?.next);
    if(!route?.next)branch.append(flowCard("exit","이후 진행","이벤트 마치기"));
    if(target?.linked)branch.append(flowCard("link","연결 장면 열기",target.title,()=>openFlowGroup(target.group)));
    if(choicesField.cues)branch.append(button("연결 편집",go('select[aria-label="다음 장면"]'),"flow-edit-link"));
  });
  if(lanes.childElementCount){
    board.append(node("h4","선택에 따른 진행"),lanes);
  }
  if(scene){
    for(const issue of inspectStoryRoutes(scenes)){
      if(issue.id!==id)continue;
      const action=issue.index===undefined?null:()=>focusFlowField(group,choicesField,{choice:issue.index,control:'select[aria-label="다음 장면"]'});
      check(issue.message,action);
    }
  }
  audit.append(node("summary",issues.length?"확인할 항목 "+issues.length+"개":"흐름 점검 완료"));
  audit.dataset.issues=String(Boolean(issues.length));
  if(issues.length){
    audit.open=true;
    const list=node("ul");
    for(const {message,action} of issues){
      const li=node("li");
      li.append(action?button(message,action):node("span",message));list.append(li);
    }
    audit.append(list);
  }else audit.append(node("p","이 장면에서 편집할 수 있는 대사와 연결을 확인했습니다."));
}

let flowMapResize;
function drawSceneConnectionMap(board,scenes,current){
  const byId=new Map(scenes.map(scene=>[scene.id,scene]));
  const edges=scenes.flatMap(source=>source.choices.flatMap((choice,index)=>{
    const target=byId.get(choice[5]?.next);
    return target?[{source,target,index,label:choice[0]}]:[];
  }));
  const connected=new Set([current]);
  for(const scene of connected){
    for(const {source,target} of edges){
      if(source===scene)connected.add(target);
      if(target===scene)connected.add(source);
    }
  }
  const links=edges.filter(edge=>connected.has(edge.source));
  if(!links.length)return;

  // Put a shared destination after all its parents, with one card per scene.
  const remaining=new Set(connected),levels=[];
  while(remaining.size){
    const level=[...remaining].filter(scene=>!links.some(edge=>edge.target===scene&&remaining.has(edge.source)));
    if(!level.length){levels.push([...remaining]);break;}
    levels.push(level);
    for(const scene of level)remaining.delete(scene);
  }
  const fold=node("details",undefined,"connection-map");
  fold.open=true;
  fold.append(node("summary","장면 연결 지도 · "+connected.size+"장면"));
  const scroll=node("div",undefined,"map-scroll");
  const canvas=node("div",undefined,"map-canvas");
  const makeSVG=name=>document.createElementNS("http://www.w3.org/2000/svg",name);
  const wires=makeSVG("svg");
  wires.setAttribute("aria-hidden","true");
  canvas.append(wires);
  const ins=new Map(),outs=new Map();
  for(const level of levels){
    const column=node("div",undefined,"map-level");
    for(const scene of level){
      const card=node("div",undefined,"map-node");
      const title=button(scene.title||"제목 입력",()=>openFlowGroup(scene.group));
      if(scene===current)title.setAttribute("aria-current","location");
      card.append(title);ins.set(scene,title);
      for(const edge of links.filter(item=>item.source===scene)){
        const field=scene.group.fields.find(item=>item.type==="choices");
        const port=button(edge.label||"선택지 입력",()=>focusFlowField(scene.group,field,{choice:edge.index,control:'select[aria-label="다음 장면"]'}));
        port.className="map-port";
        port.setAttribute("aria-label",(edge.label||"선택지")+" · "+edge.target.title+" 연결 편집");
        card.append(port);outs.set(edge,port);
      }
      column.append(card);
    }
    canvas.append(column);
  }
  scroll.append(canvas);fold.append(scroll);
  function paint(){
    if(!fold.open||!canvas.isConnected)return;
    const origin=canvas.getBoundingClientRect();
    wires.replaceChildren();
    for(const edge of links){
      const from=outs.get(edge).getBoundingClientRect(),to=ins.get(edge.target).getBoundingClientRect();
      const x=from.right-origin.left,y=from.top+from.height/2-origin.top;
      const end=to.left-origin.left,ey=to.top+to.height/2-origin.top;
      const d=Math.max(12,(end-x)/2);
      const path=makeSVG("path");
      path.setAttribute("d",`M ${x} ${y} C ${x+d} ${y} ${end-d} ${ey} ${end} ${ey}`);
      wires.append(path);
    }
  }
  flowMapResize=new ResizeObserver(paint);
  flowMapResize.observe(canvas);
  for(const title of ins.values())flowMapResize.observe(title);
  fold.addEventListener("toggle",paint);
  board.append(fold);
  paint();
}
