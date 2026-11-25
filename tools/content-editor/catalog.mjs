import {inspectRoutes} from "./public/story-routes.mjs";
export {inspectRoutes};
import { parse } from "acorn";

const propertyName = property => property.key?.name ?? property.key?.value;
const prop = (node, key) => node?.properties?.find(row => propertyName(row) === key)?.value;
const rows = node => node?.elements ?? [];
const properties = node => node?.properties ?? [];
const readLines=node=>rows(node).map(line=>rows(line).map((part,index)=>index===3
  ?Object.fromEntries(properties(part).map(entry=>[propertyName(entry),value(entry.value)])):value(part)));
const strings = node => node?.type === "Literal" && typeof node.value === "string";
const value = node => node?.value;
const hangul = /[가-힣]/;
const quoted = input => JSON.stringify(input).replaceAll("\u2028","\\u2028").replaceAll("\u2029","\\u2029");

function walk(node, ancestors, visit) {
  if (!node?.type) return;
  visit(node, ancestors);
  const lineage = [...ancestors, node];
  for (const child of Object.values(node)) {
    if (Array.isArray(child)) child.forEach(item => walk(item, lineage, visit));
    else if (child?.type) walk(child, lineage, visit);
  }
}

export function catalog(files, publishedAssets = [], version = "") {
  const groups = [];
  const fields = new Map();
  const roots = {};
  const covered = new Set();
  const assetSet = new Set(publishedAssets);
  const eventGroups = new Map();
  const inventory = {};
  const nodes = {};

  for (const [file, text] of Object.entries(files)) {
    roots[file] = parse(text, {ecmaVersion:"latest", locations:true});
    walk(roots[file], [], node => {
      if (node.type === "VariableDeclarator" && node.id.type === "Identifier")
        nodes[file + ":" + node.id.name] = node.init;
    });
  }

  const variable = (file, name) => nodes[file + ":" + name];
  const trackRows = properties(variable("audio.js","musicTracks"));
  const trackOptions = trackRows.map(p => [propertyName(p), value(prop(p.value,"title"))]);
  const roomOptions = properties(variable("content.js","sceneArt")).map(p => {
    const key=propertyName(p);
    return [key, value(prop(variable("content.js","stageNames"),key)) ?? key];
  });
  const fxOptions = properties(variable("scenes.js","motionObjects")).map(p => [propertyName(p), propertyName(p)+" · "+value(p.value)]);

  const registers={musicTracks:["audio.js",variable("audio.js","musicTracks")],recruitCast:["recruit.js",variable("recruit.js","recruitCast")],
    recruitNames:["recruit.js",variable("recruit.js","recruitNames")],endingArtDescriptions:["chapters.js",variable("chapters.js","endingArtDescriptions")],
    sceneArt:["content.js",variable("content.js","sceneArt")],stageNames:["content.js",variable("content.js","stageNames")],
    recruitArt:["recruit.js",variable("recruit.js","recruitArt")],motionObjects:["scenes.js",variable("scenes.js","motionObjects")],
    novelExpressions:["recruit.js",variable("recruit.js","novelExpressions")],
    authoredOptions:["story.js",variable("story.js","authoredOptions")]};
  const recruitTargets=new Map();

  function group(section, key, title, detail="", preview=null) {
    const g = {section,key,title,detail,preview,fields:[]};
    groups.push(g);
    return g;
  }

  const cueFields={
    fx:[["fade","검게 페이드"],["dissolve","부드럽게 나타남"],["slide","옆으로 밀기"],["shake","화면 흔들림"]],
    animations:Object.fromEntries(properties(variable("recruit.js","novelEffects")).map(effect=>[
      propertyName(effect),rows(effect.value).map(frame=>Object.fromEntries(
        properties(frame).map(entry=>[propertyName(entry),value(entry.value)])))
    ])),
    cg:[],
    standing:[],
    bgm:trackOptions,
    se:publishedAssets.filter(path=>/^assets\/[\w./ -]+\.(mp3|ogg|wav)$/i.test(path))
      .map(path=>[path,path.split("/").at(-1)])
  };
  function add(g, file, node, label, type="text", options, extra={}) {
    if (!node || (type !== "lines" && !["Literal","UnaryExpression"].includes(node.type))) return;
    if (["text","prologue","ending","image","audio","select"].includes(type) && !strings(node)) return;
    const id = file + ":" + node.start;
    if (fields.has(id)) return;
    let initial = value(node);
    if (type === "number" && node.type === "UnaryExpression") initial = Number(files[file].slice(node.start,node.end));
    if (type === "lines") {
      const list = rows(node);
      if (!list.length || !list.every(line => {
        const parts=rows(line);
        return parts.length>=2 && parts.length<=(extra.cues?4:extra.metadata?3:2) && parts.slice(0,2).every(strings)
          && (parts.length===2 || (extra.cues&&parts.length===4&&value(parts[2])===null)
            || (extra.metadata==="tanaka"?(typeof value(parts[2])==="boolean"||strings(parts[2])):extra.metadata==="illustration"&&strings(parts[2])))
          && (parts.length!==4||parts[3].type==="ObjectExpression");
      })) return;
      initial = readLines(node);
      for (const line of list) for (const element of rows(line)) covered.add(file+":"+element.start);
    }
    const field = {id,label,type,value:initial,file,line:node.loc.start.line,options,...extra,...(extra.cues?{cues:cueFields}:{})};
    g.fields.push(field);
    fields.set(id,{field,node});
    covered.add(id);
  }

  function event(id,title,detail="") {
    if (!eventGroups.has(id))
      eventGroups.set(id,group("events","event-"+id,title,detail,{kind:"event",id}));
    return eventGroups.get(id);
  }

  const cueMap=variable("audio.js","bgmAssignments");
  const eventDefaults=variable("audio.js","eventTracks");
  function assignMusic(g,kind,id,fallback,note="") {
    const key=kind+":"+id;
    const node=prop(cueMap,key);
    const title=trackOptions.find(([track])=>track===fallback)?.[1]??fallback;
    const opts=[["","기본 음악 · "+(note||title)],...trackOptions];
    const field={id:"cue:"+key,label:kind==="activity"?"일정 BGM":"이벤트 BGM",type:"cue",
      value:value(node)??"",defaultTrack:fallback,options:opts,file:"audio.js",assignment:true};
    fields.set(field.id,{field,node,cue:key});
    g.fields.push(field);
  }

  const descriptions = properties(variable("chapters.js","endingArtDescriptions"));
  const endingLabels = properties(variable("game.js","endingLabels"));
  const availableCG = publishedAssets.filter(path=>/^assets\/endings\/[^/]+\.webp$/.test(path));
  const artOptions = availableCG.map(path=>{
    const id=path.split("/").at(-1).slice(0,-5);
    return [id,value(prop(variable("chapters.js","endingArtDescriptions"),id))??id];
  });
  cueFields.cg=artOptions;
  inventory.ending=Object.fromEntries(artOptions.map(([id])=>[id,"assets/endings/"+id+".webp"]));
  const openingScenes=variable("prologue.js","openingScenes");
  const opening = rows(openingScenes);
  opening.forEach((scene,i)=>{
    const art = prop(scene,"art");
    const g = group("story","opening-"+i,"프롤로그 · "+(i+1),value(prop(scene,"title"))??value(art),{kind:"opening",scene:i});
    // Art IDs also control scene-specific transitions and voice-only scenes.
    if(prop(scene,"title")){
      add(g,"prologue.js",prop(scene,"title"),"장면 제목");
      add(g,"prologue.js",art,"CG","select",artOptions,{media:"ending"});
      add(g,"prologue.js",prop(scene,"music"),"장면 BGM","select",[["","프롤로그 기본 음악"],...trackOptions],{media:"track"});
    }else add(g,"prologue.js",art,"CG","prologue",undefined,{fixed:true});
    add(g,"prologue.js",prop(scene,"alt"),"CG 대체 설명");
    add(g,"prologue.js",prop(scene,"lines"),"대사 순서","lines",undefined,{cues:true});
  });

  const handoff=variable("prologue.js","openingHandoffScene");
  if(handoff){
    const g=group("story","opening-handoff","프롤로그 · 집사장의 회중시계","수첩을 고른 뒤",{kind:"opening",scene:opening.length,handoff:true});
    add(g,"prologue.js",prop(handoff,"room"),"배경","select",roomOptions,{media:"room"});
    add(g,"prologue.js",prop(handoff,"music"),"장면 BGM","select",trackOptions,{media:"track"});
    add(g,"prologue.js",prop(handoff,"alt"),"배경 대체 설명");
    add(g,"prologue.js",prop(handoff,"lines"),"대사 순서","lines",undefined,{cues:true});
  }

  const careerArt=variable("chapters.js","londonEndingCGs");
  const finalArt=career=>value(prop(prop(careerArt,career),"id"));
  for (const p of properties(variable("chapters.js","endingScenes"))) {
    const id=propertyName(p);
    const title=value(rows(endingLabels.find(label=>propertyName(label)===id)?.value)[0])??id;
    const g=group("story","ending-"+id,"엔딩 · "+title,id,{kind:"ending",id});
    add(g,"audio.js",prop(variable("audio.js","endingTracks"),id),"엔딩 BGM","select",trackOptions,{media:"track"});
    add(g,"chapters.js",prop(p.value,"alt"),"대표 CG 대체 설명");
    add(g,"chapters.js",prop(p.value,"lines"),"대사 순서","lines",undefined,{metadata:"illustration",artOptions,defaultArt:id,finalArt:id==="vowNoTitle"?finalArt("pursuit"):undefined,cues:true});
  }
  for (const route of properties(variable("chapters.js","londonEndingScenes"))) {
    const career=propertyName(route);
    const g=group("story","career-"+career,"문장 없는 마차 · "+(career==="merchant"?"사업가":"정보상"),"런던 진로",{kind:"ending",id:"vowNoTitle",career});
    add(g,"chapters.js",route.value,"대사 순서","lines",undefined,{metadata:"illustration",artOptions,defaultArt:"vowNoTitle",finalArt:finalArt(career),careerRoom:career==="broker"?"street":"library",cues:true});
  }
  for (const entry of properties(variable("chapters.js","endingFarewells"))) {
    const person=propertyName(entry), name=value(prop(variable("recruit.js","recruitNames"),person))??person;
    for (const mode of properties(entry.value)) {
      const mourning=propertyName(mode)==="mourning";
      rows(mode.value).forEach((line,tier)=>{
        const g=group("story",["farewell",person,propertyName(mode),tier].join("-"),name+" · "+(mourning?"추모":"배웅")+" · 신뢰 "+tier,"엔딩 인사",{kind:"ending",id:mourning?"ill":"vowNoTitle",person,tier});
        add(g,"chapters.js",line,"대사");
      });
    }
  }
  for (const [id,title] of artOptions) {
    const g=group("assets","cg-"+id,"CG · "+title,id);
    g.asset=inventory.ending[id];
    add(g,"chapters.js",descriptions.find(p=>propertyName(p)===id)?.value,"CG 대체 설명");
  }

  const recruitArt = properties(variable("recruit.js","recruitArt"));
  const recruitArtOptions=recruitArt.map(p=>[propertyName(p),roomOptions.find(([id])=>id===propertyName(p))?.[1]??propertyName(p)]);
  const recruitCast=properties(variable("recruit.js","recruitCast"));
  const recruitCastOptions=recruitCast.filter(p=>!["ciel11","ciel12"].includes(propertyName(p))).map(p=>{
    const id=propertyName(p);
    return [id,value(prop(variable("recruit.js","recruitNames"),id))??id];
  });
  cueFields.standing=recruitCastOptions;
  cueFields.expressions=Object.fromEntries(properties(registers.novelExpressions[1]).map(property=>{
    const id=propertyName(property);
    const actor=value(prop(property.value,"actor"));
    const name=value(prop(property.value,"name"));
    const path=value(prop(property.value,"file"));
    const owner=recruitCastOptions.find(([key])=>key===actor)?.[1]??actor;
    const entry=group("assets","expression-"+id,owner+" · "+name,"표정 스탠딩");
    entry.asset=path;
    return [id,{actor,name,file:path}];
  }));
  inventory.standing=Object.fromEntries(recruitCast.map(p=>[propertyName(p),value(p.value)]));
  for(const [id,title] of recruitCastOptions){
    if(!id.startsWith("extra-"))continue;
    group("assets","standing-"+id,"스탠딩 · "+title,id).asset=inventory.standing[id];
  }
  inventory.recruitArt=Object.fromEntries(recruitArt.map(p=>[propertyName(p),value(prop(p.value,"bg"))]));
  const recruitBooks=properties(variable("recruit.js","recruitScenes"));
  for(const book of recruitBooks) {
    const id=propertyName(book);
    const file=id==="visitPrince"?"prince.js":"recruit.js";
    const definition=id==="visitPrince"?variable(file,"princeChapter"):book.value;
    const name=value(prop(definition,"name"));
    recruitTargets.set(id,[file,prop(definition,"scenes")]);
    const g=group("story","recruit-"+id,name+" 영입",value(prop(definition,"title")),{kind:"recruit",id,scene:0});
    assignMusic(g,"event",id,"","영입 장면별 음악");
    add(g,file,prop(definition,"title"),"영입 제목");
    add(g,file,prop(definition,"result"),"영입 기록");
    for(const [i,scene] of rows(prop(definition,"scenes")).entries()){
      const title=prop(scene,"title");
      const sceneGroup=group("story","recruit-"+id+"-"+i,name+" · "+value(title),"영입 장면 "+(i+1),{kind:"recruit",id,scene:i});
      add(sceneGroup,file,title,"장면 제목");
      add(sceneGroup,file,prop(scene,"art"),"장면 배경","select",recruitArtOptions,{media:"recruitArt"});
      add(sceneGroup,file,prop(scene,"music"),"장면 BGM","select",trackOptions,{media:"track"});
      if(!prop(scene,"music")){
        const field={id:file+":"+scene.start+":music",label:"장면 BGM",type:"select",value:"",options:[["","기본 음악"],...trackOptions],file,media:"track"};
        fields.set(field.id,{field,node:scene,insert:"music"});
        sceneGroup.fields.push(field);
      }
      const picture=prop(scene,"picture");
      const pictures=[["","사용 안 함"],...artOptions];
      if(picture)add(sceneGroup,file,picture,"장면 CG","select",pictures,{media:"ending"});
      else {
        const field={id:file+":"+scene.start+":picture",label:"장면 CG",type:"select",value:"",options:pictures,file,media:"ending"};
        fields.set(field.id,{field,node:scene,insert:"picture"});
        sceneGroup.fields.push(field);
      }
      const cast=prop(scene,"cast");
      const field={id:file+":"+scene.start+":cast",label:"등장인물",type:"cast",
        value:rows(cast).map(value),options:recruitCastOptions,file};
      fields.set(field.id,{field,node:cast??scene,insert:cast?undefined:"cast"});
      sceneGroup.fields.push(field);
      add(sceneGroup,file,prop(scene,"lines"),"대사 순서","lines",undefined,{metadata:"tanaka",hasTanaka:id==="visitPrince",cues:true});
    }
  }
  for (const p of recruitArt) {
    const g=group("assets","recruit-art-"+propertyName(p),"영입 배경 · "+propertyName(p));
    add(g,"recruit.js",prop(p.value,"bg"),"이미지 파일","image",undefined,{paths:publishedAssets.filter(file=>/\.(webp|png|jpe?g|gif|avif)$/i.test(file))});
  }

  for (const section of ["timed","local"]) {
    for (const row of rows(variable("story.js",section))) {
      const local=section==="local";
      const r=rows(row);
      const [id,title,text]=r.slice(local?2:1);
      const g=event(value(id),value(title),local?"활동 완료 후 · "+value(r[0]):"월말에 발생");
      add(g,"story.js",title,"제목");
      add(g,"story.js",text,"이벤트 본문");
      add(g,"story.js",r[local?1:0],local?"필요 활동 횟수":"최초 발생 월","number",undefined,{min:1,max:35});
      if (local) {
        for (const [choiceIndex,amountIndex,n] of [[5,7,1],[8,10,2]]) {
          add(g,"story.js",r[choiceIndex],"선택지 "+n);
          add(g,"story.js",r[amountIndex],"선택지 "+n+" 보상 · "+value(r[amountIndex-1]),"number",undefined,{min:-500,max:500});
        }
      } else for (const [n,option] of r.slice(4).entries()) {
        const [label,result,,,hint]=rows(option);
        add(g,"story.js",label,"선택지 "+(n+1));
        add(g,"story.js",result,"결과 문구 "+(n+1));
        add(g,"story.js",hint,"조건 안내 "+(n+1));
      }
    }
  }

  function literalChoices(g,file,choiceList) {
    rows(choiceList).forEach((option,i)=>{
      add(g,file,option.arguments?.[0]??prop(option,"label"),"선택지 "+(i+1));
      add(g,file,option.arguments?.[1]??prop(option,"result"),"결과 문구 "+(i+1));
      add(g,file,option.arguments?.[4]??prop(option,"hint"),"조건 안내 "+(i+1));
    });
  }
  for (const file of ["story.js","chapters.js"]) walk(roots[file], [],node=>{
    if (node.type!=="ObjectExpression" || !strings(prop(node,"id")) || !strings(prop(node,"title"))) return;
    const id=value(prop(node,"id"));
    const g=event(id,value(prop(node,"title")),id==="snakeArrival"?"타운하우스 보유 · 소마·아그니 교류 후 발생":"기존 발생 조건");
    for (const [key,label] of [["title","제목"],["speaker","화자"],["text","이벤트 본문"],["source","출처"]]) add(g,file,prop(node,key),label);
    add(g,file,prop(node,"lines"),"대사 순서","lines",undefined,{cues:true});
    if(prop(node,"evidence")&&prop(node,"answers")){
      g.detail="팬텀사 경영 추리 · "+value(prop(node,"month"))+"개월차부터";
      add(g,file,prop(node,"question"),"추리 질문");
      for(const [i,row] of rows(prop(node,"evidence")).entries()){
        const [label,clue]=rows(row);
        add(g,file,label,"단서 "+(i+1)+" · 자료명");
        add(g,file,clue,"단서 "+(i+1)+" · 내용");
      }
      for(const [i,row] of rows(prop(node,"answers")).entries()){
        const [label,response]=rows(row);
        const outcome=i===value(prop(node,"correct"))?"정답 · 가문 명성 +"+value(prop(node,"award")):"오답 · 명성 변화 없음";
        add(g,file,label,"판단 "+(i+1),"text",undefined,{caseOutcome:outcome});
        add(g,file,response,"판단 "+(i+1)+" · 후일담","text",undefined,{caseReply:true});
      }
    }
    literalChoices(g,file,prop(node,"choices"));
    if(value(prop(node,"visitOnly"))===true){
      rows(prop(node,"responses")).forEach((response,i)=>add(g,file,response,"응답 "+(i+1)));
    }
    const prompt=rows(prop(node,"prompt"));
    add(g,file,prompt[0],"마지막 화자");
    add(g,file,prompt[1],"마지막 대사");
    add(g,file,prop(prompt[2],"room"),"마지막 배경","select",roomOptions,{media:"room"});
  });

  for (const p of properties(variable("term-events.js","birthdayDialogue"))) {
    const g=event(propertyName(p),propertyName(p));
    add(g,"term-events.js",prop(p.value,"room"),"장면 배경","select",roomOptions,{media:"room"});
    add(g,"term-events.js",prop(p.value,"lines"),"대사 순서","lines");
    rows(prop(p.value,"replies")).forEach((reply,i)=>
      add(g,"term-events.js",reply,"선택지 "+(i+1)+" 이후 대사","lines"));
  }

  rows(variable("chapters.js","exams")).forEach(row=>{
    const [slot,,title,text,a,b]=rows(row);
    const g=event("exam-"+value(slot),value(title),"수업 후 실기");
    for (const [label,node] of [["제목",title],["시험 질문",text],["선택지 1",a],["선택지 2",b]]) add(g,"chapters.js",node,label);
  });
  const seasons={1:[1,13,25],4:[4,16,28],9:[9,21,33]};
  walk(roots["chapters.js"],[],node=>{
    if (node.type!=="IfStatement" || node.test.left?.name!=="month" || node.consequent.expression?.left?.name!=="data") return;
    const months=seasons[value(node.test.right)];
    if (!months) return;
    const [title,speaker,text,a,,b,,source]=rows(node.consequent.expression.right);
    for(const month of months){
      const g=event("season-"+month,value(title),month+"개월차 · 계절 행사");
      g.seasonMonth=month;
    }
    const g=eventGroups.get("season-"+months[0]);
    for (const [label,n] of [["제목",title],["화자",speaker],["본문",text],["선택지 1",a],["선택지 2",b],["출처",source]]) add(g,"chapters.js",n,label);
  });
  for(const row of rows(variable("chapters.js","cases"))){
    const [id,count,text]=rows(row);
    event(value(id),"종합 실기 · "+value(count)+"과목 합격",value(text));
  }
  const ranks=rows(variable("term-events.js","portfolioRanks"));
  for(const [i,row] of rows(variable("term-events.js","portfolios")).entries()){
    const [,title,description]=rows(row);
    ranks.forEach((rank,n)=>event("portfolio-"+i+"-"+n,value(title)+" · "+value(prop(rank,"name")),value(rows(rows(description)[n]??rows(description)[0])[0])));
  }
  const authored=variable("story.js","authoredEvents");
  const customIds=[];
  for (const node of rows(authored)) {
    const id=value(prop(node,"id"));
    customIds.push(id);
    const g=event(id,value(prop(node,"title")));
    g.detail=value(prop(node,"month"))===0?"선택지 연결 전용 장면":"추가한 월말 이벤트";
    add(g,"story.js",prop(node,"title"),"제목");
    add(g,"story.js",prop(node,"month"),"발생 방식","number",undefined,{min:0,max:35,trigger:true});
    add(g,"story.js",prop(node,"room"),"배경","select",roomOptions,{media:"room"});
    add(g,"story.js",prop(node,"track"),"이벤트 BGM","select",[["","기본 음악 · "+(trackOptions.find(([id])=>id==="daily")?.[1]??"daily")],...trackOptions],
      {media:"track",defaultTrack:"daily",assignment:true});
    add(g,"story.js",prop(node,"lines"),"대사 순서","lines",undefined,{cues:true,manual:true});
    add(g,"story.js",prop(node,"label"),"마무리 버튼");
    add(g,"story.js",prop(node,"result"),"마지막 대사");
    for(const [key,label,options,media] of [
      ["picture","장면 CG",artOptions,"ending"],["standing","스탠딩",recruitCastOptions,"standing"]
    ]){
      const asset=prop(node,key);
      const opts=[["","사용 안 함"],...options];
      if(asset)add(g,"story.js",asset,label,"select",opts,{media});
      else {
        const field={id:"story.js:"+node.start+":"+key,label,type:"select",value:"",options:opts,file:"story.js",media};
        g.fields.push(field);fields.set(field.id,{field,node,insert:key});
      }
    }
    g.removable=true;
  }

  for (const [id,g] of eventGroups) {
    if(customIds.includes(id)||recruitTargets.has(id))continue;
    const month=g.seasonMonth%12;
    const fallback=g.seasonMonth?(month===1?"newYear":month===9?"harvest":"cheerful"):
      id.startsWith("exam-")||id.startsWith("portfolio-")?"test":"daily";
    assignMusic(g,"event",id,value(prop(eventDefaults,id))??fallback,id==="birthday"?"생일 장면별 음악":"");
  }

  const rewardOptions=[["","변화 없음"],...["지성","기품","매력","경영","통찰","의지","체력"].map(stat=>[stat,stat==="체력"?"지구력":stat]),["hp","컨디션"],["stress","스트레스"],["motivation","의욕"]];
  function addChoices(g,id){
    const optionNode=prop(registers.authoredOptions[1],id);
    const field={id:"options:"+id,label:"추가 선택지",type:"choices",file:"story.js",options:rewardOptions,
      cues:cueFields,
      value:rows(optionNode).map(row=>rows(row).map((part,index)=>index===4?(part.type==="ArrayExpression"?readLines(part):null):
        index===5?Object.fromEntries(properties(part).map(p=>[propertyName(p),value(p.value)])):
        part.type==="UnaryExpression"?-value(part.argument):value(part)))};
    g.fields.push(field);
    fields.set(field.id,{field,node:optionNode,optionId:id});
  }
  for(const [id,g] of eventGroups){
    if(!recruitTargets.has(id)&&!g.seasonMonth)addChoices(g,id);
  }

  inventory.track=Object.fromEntries(trackRows.map(p=>[propertyName(p),value(prop(p.value,"file"))]));
  for (const p of trackRows) {
    const id=propertyName(p);
    const g=group("audio","music-"+id,value(prop(p.value,"title")),id);
    add(g,"audio.js",prop(p.value,"title"),"트랙 이름");
    add(g,"audio.js",prop(p.value,"file"),"오디오 파일","audio",undefined,{paths:publishedAssets.filter(file=>/\.(mp3|ogg|wav)$/i.test(file))});
  }
  walk(roots["audio.js"],[],node=>{
    if(node.type==="VariableDeclarator"&&node.id.name==="clickFile") {
      const g=group("audio","sound-click","클릭 효과음");
      add(g,"audio.js",node.init,"효과음 파일","audio",undefined,{paths:publishedAssets.filter(file=>/\.(mp3|ogg|wav)$/i.test(file))});
    }
  });

  inventory.room=Object.fromEntries(properties(variable("content.js","sceneArt")).map(p=>[propertyName(p),value(p.value)]));
  for (const [key,map] of [["sceneArt","배경"],["actors","시엘 동작"],["portraits","인물 스탠딩"]]) {
    const file=key==="portraits"?"chapters.js":"content.js";
    for (const p of properties(variable(file,key))) {
      const id=propertyName(p);
      const g=group("assets",key+"-"+id,map+" · "+(key==="sceneArt"?roomOptions.find(([k])=>k===id)?.[1]??id:id));
      add(g,file,p.value,"이미지 파일","image",undefined,{paths:publishedAssets.filter(file=>/\.(webp|png|jpe?g|gif|avif)$/i.test(file))});
    }
  }

  for(const path of publishedAssets.filter(path=>path.startsWith("assets/lessons/") && /\.png$/i.test(path))) {
    const g=group("assets","sprite-"+path,"동작 프레임 · "+path.split("/").at(-1));
    g.asset=path;
  }

  const categories=rows(variable("content.js","categories"));
  const activityDefaults=variable("audio.js","activityTrackDefaults");
  const placementDefaults=variable("content.js","lessonPlacementDefaults");
  for (const p of properties(variable("content.js","choreography"))) {
    const id=propertyName(p);
    const [room,,movement,fx,text]=rows(p.value);
    const title=value(prop(prop(variable("content.js","actions"),id),"name"))??value(rows(prop(variable("content.js","extraActivities"),id))[0])??id;
    const category=categories.find(row=>rows(rows(row)[1]).some(item=>value(item)===id));
    const categoryName=value(rows(category)[0])??"일정";
    const g=group("fx","fx-"+id,title,categoryName,{kind:"activity",id});
    assignMusic(g,"activity",id,value(prop(activityDefaults,id))??value(prop(activityDefaults,categoryName))??"study");
    add(g,"content.js",room,"장면 배경","select",roomOptions,{media:"room"});
    add(g,"content.js",movement,"동작 패턴","select",
      [...new Set(properties(variable("content.js","choreography")).map(row=>value(rows(row.value)[2])))].map(key=>[key,key]));
    add(g,"content.js",fx,"화면 효과","select",fxOptions);
    add(g,"content.js",text,"장면 설명");
    if(placementDefaults){
      const placementNode=rows(p.value)[5];
      const defaults=Object.fromEntries(["x","bottom","scale"].map(key=>[key,
        value(prop(prop(placementDefaults,id),key))??value(prop(prop(placementDefaults,"default"),key))]));
      const placement=Object.fromEntries(Object.entries(defaults).map(([key,fallback])=>[key,value(prop(placementNode,key))??fallback]));
      const field={id:"placement:"+id,label:"시엘 도트 배치",type:"placement",value:placement,defaults,
        file:"content.js",line:(placementNode??p.value).loc.start.line,activity:id};
      g.fields.push(field);
      fields.set(field.id,{field,node:placementNode,placementRow:p.value});
    }
  }
  const fx=group("fx","fx-symbols","효과 기호");
  for (const p of properties(variable("scenes.js","motionObjects"))) add(fx,"scenes.js",p.value,propertyName(p));

  rows(variable("tour.js","tourSteps")).forEach((row,i)=>{
    const g=group("dialogue","tutorial-"+i,"튜토리얼 "+(i+1)+" · "+value(rows(row)[2]),"세바스찬");
    add(g,"tour.js",rows(row)[2],"안내 제목");
    add(g,"tour.js",rows(row)[3],"세바스찬 대사");
  });
  rows(variable("staffing.js","londonRequests")).forEach((row,i)=>{
    const title=prop(row,"name");
    const g=group("events","london-"+i,value(title),"타운하우스 월말 업무 기록",{kind:"london",month:i+1});
    add(g,"staffing.js",title,"업무 제목");
    add(g,"staffing.js",prop(row,"result"),"업무 완료 문구");
  });
  for(const card of rows(variable("visitors.js","visitEncounterCards"))){
    const id=value(prop(card,"id"));
    const g=group("events","visitor-"+id,value(prop(card,"title")),"자유행동 · "+value(prop(card,"place")),{kind:"visit",id});
    assignMusic(g,"event",id,value(prop(eventDefaults,id))??"daily");
    add(g,"visitors.js",prop(card,"title"),"방문 사건 제목");
    add(g,"visitors.js",prop(card,"lines"),"대사 순서","lines");
    rows(prop(card,"choices")).forEach((choice,i)=>{
      add(g,"visitors.js",prop(choice,"label"),"선택지 "+(i+1));
      add(g,"visitors.js",rows(prop(choice,"reply"))[1],"응답 "+(i+1));
    });
    addChoices(g,id);
  }
  for(const entry of [...rows(variable("festivals.js","annualContests")),...rows(variable("festivals.js","historicalContests")),variable("festivals.js","easterFair"),variable("festivals.js","harvestWarrant")].filter(Boolean)){
    const id=value(prop(entry,"id"));
    const g=group("events","fair-"+id,value(prop(entry,"title")),"런던 행사",{kind:"fair",month:id==="newYear"?13:value(prop(entry,"month"))});
    for(const [key,label] of [["title","행사 제목"],["date","날짜 표기"],["historical","역사 소개"],["invitation","참여 안내"]])
      add(g,"festivals.js",prop(entry,key),label);
    rows(prop(entry,"options")).forEach((option,i)=>{
      for(const [key,label] of [["label","종목"],["line","참여 지문"],["placed","입상 결과"],["missed","참가 결과"]])
        add(g,"festivals.js",prop(option,key),label+" "+(i+1));
    });
  }
  for(const property of properties(variable("content.js","seasonalWeather"))){
    const id=propertyName(property),weather=property.value;
    const g=group("events","weather-"+id,value(prop(weather,"name")),"계절 날씨 · 월초 보고",{kind:"weather",id});
    add(g,"content.js",prop(weather,"scene"),"날씨 지문");
    add(g,"content.js",prop(weather,"charge"),"추가 관리비 항목");
  }
  const opponents=variable("festivals.js","contestOpponents");
  const speeches=variable("festivals.js","contestSpeeches");
  for(const [id,rival] of [["newYear","newYear"],["easter","easter"],["royalWarrant","warrant"]]){
    const g=groups.find(item=>item.key==="fair-"+id);
    if(!g)continue;
    const opponent=prop(opponents,rival);
    add(g,"festivals.js",prop(opponent,"quote"),"상대 · 첫 인사");
    for(const [key,label,start] of [["laterQuotes","상대 인사",2],["replies","시엘의 답",1]]){
      rows(prop(opponent,key)).slice(0,(id==="newYear"?2:3)-start+1).forEach((line,i)=>
        add(g,"festivals.js",line,label+" · "+(start+i)+"번째 행사"));
    }
    rows(prop(speeches,rival)).forEach((entry,i)=>rows(entry).forEach((line,tier)=>
      add(g,"festivals.js",line,"시엘 · 종목 "+(i+1)+" · "+["열세","접전","우세"][tier])));
  }
  for(const item of properties(variable("term-events.js","middleObservations"))){
    const id=propertyName(item),g=eventGroups.get(id);
    if(!g)continue;
    const replies=rows(prop(variable("term-events.js","observationReplies"),id));
    properties(item.value).forEach((variant,i)=>{
      const stat=propertyName(variant);
      add(g,"term-events.js",variant.value,stat+" · 시엘의 관찰");
      const [speaker,line]=rows(replies[i]);
      add(g,"term-events.js",speaker,stat+" · 응답 화자");
      add(g,"term-events.js",line,stat+" · 응답");
    });
  }
  const extraDialogue = {
    "chapters.js":["visitsVN","examEvents","guide","trustedGreetings"], "story.js":["visitRecollections"], "term-events.js":["examDialogue","portfolios"],
    "scenes.js":["lines","butlerGreetings","butlerReplies"], "game.js":["homeRemarks","marketGoods"],
    "content.js":["visiting"], "reports.js":["reviewLines"]
  };
  for (const [file,names] of Object.entries(extraDialogue)) {
    for (const name of names) {
      const root = variable(file,name) ?? roots[file].body.find(node=>node.type==="FunctionDeclaration"&&node.id.name===name);
      if (!root) continue;
      const labels={trustedGreetings:"인물별 신뢰도 대사",visitRecollections:"방문 회상",examDialogue:"실기 장면 대사",portfolios:"응용·최종 실기",butlerGreetings:"세바스찬의 인사",butlerReplies:"세바스찬의 답변",guide:"첫 조작 안내",visitsVN:"자유행동 대화",examEvents:"세바스찬 시험 대사",courseFeedback:"수업 성과 대사",masteryPaths:"응용 실기",snakeRounds:"스네이크 순찰 대사",lines:"시엘과의 대화",homeRemarks:"시엘의 메인 화면 대사",marketGoods:"상점 대사",visiting:"방문 장소 안내",reviewLines:"일정 총평"};
      const g=group("dialogue",name,labels[name],file);
      walk(root,[],(node,parents)=>{
        if(!strings(node)||!hangul.test(node.value)||node.value.length<4||/[<>]/.test(node.value)||covered.has(file+":"+node.start)) return;
        const parent=parents.at(-1);
        if(parent?.type==="Property" && parent.key===node) return;
        if(name==="marketGoods" && propertyName(parent)!=="line") return;
        add(g,file,node,"문구 "+(g.fields.length+1));
      });
    }
  }
  return {files,groups:groups.filter(g=>g.fields.length||g.asset),fields,inventory,version,trackOptions,roomOptions,assetSet,eventGroups,customIds,authored,openingScenes,cueFields,registers,recruitTargets,rewardOptions,recruitCastOptions,recruitArtOptions,artOptions,cueMap};
}

function textValue(input, limit=5000) {
  if(typeof input!=="string" || !input.trim() || input.length>limit || /[<>\u0000]/.test(input))
    throw new Error("빈 문구, < 또는 >, 길이 제한을 확인해 주세요.");
  return input;
}

function lineValues(input, field = {}) {
  if(!Array.isArray(input)||!input.length||input.length>250) throw new Error("대사는 1~250줄이어야 합니다.");
  return input.map(row=>{
    if(!Array.isArray(row)||row.length<2||row.length>(field.cues?4:field.metadata?3:2))
      throw new Error("화자와 대사를 입력해 주세요.");
    const line=[typeof row[0]==="string"&&!row[0].trim()?"":textValue(row[0],80),textValue(row[1])];
    if(row.length>=3){
      const extra=row[2];
      if(row.length===4&&extra===null)line.push(null);
      else if(field.metadata==="tanaka" && typeof extra==="boolean") line.push(extra);
      else if(field.metadata==="tanaka" && typeof extra==="string") line.push(textValue(extra));
      else if(field.metadata==="illustration" && field.artOptions.some(([id])=>id===extra)) line.push(extra);
      else throw new Error("대사에 연결된 연출 값을 확인해 주세요.");
    }
    if(row.length===4){
      const cue=row[3];
      if(!cue||typeof cue!=="object"||Array.isArray(cue))throw new Error("연출 설정을 확인해 주세요.");
      const entries=Object.entries(cue);
      for(const [key,setting] of entries){
        const side=key==="leftExpression"?"left":key==="rightExpression"?"right":null;
        const valid=side?Boolean(cue[side]&&field.cues.expressions?.[setting]?.actor===cue[side])
          :key==="wait"?Number.isInteger(setting)&&setting>=0&&setting<=10000
          :key==="hideCast"?setting===true:["left","right","standing","fx","cg","bgm","se"].includes(key)&&field.cues[["left","right"].includes(key)?"standing":key]?.some(([id])=>id===setting);
        if(!valid)throw new Error("연출 항목이나 리소스가 유효하지 않습니다.");
      }
      if(entries.length)line.push(Object.fromEntries(entries));
      else if(line[2]===null)line.pop();
    }
    return line;
  });
}

function statementValue(field, input, assetSet) {
  switch(field.type) {
    case "placement": {
      const limits={x:[0,100],bottom:[0,100],scale:[0.05,1]};
      if(!input||typeof input!=="object"||Array.isArray(input)||Object.keys(input).length!==3
        ||Object.entries(limits).some(([key,[min,max]])=>!Object.hasOwn(input,key)
          ||typeof input[key]!=="number"||!Number.isFinite(input[key])||input[key]<min||input[key]>max))
        throw new Error("도트 위치는 0~100%, 크기는 배경 높이의 5~100%로 입력해 주세요.");
      return {x:Math.round(input.x*100)/100,bottom:Math.round(input.bottom*100)/100,scale:Math.round(input.scale*1000)/1000};
    }
    case "number":
      if(!Number.isInteger(input)||input<field.min||input>field.max) throw new Error(field.label+"의 입력 범위를 확인해 주세요.");
      return input;
    case "select": case "cue":
      if(!field.options.some(([id])=>id===input)) throw new Error(field.label+" 목록에서 선택해 주세요.");
      return input;
    case "image": case "audio":
      if(!field.paths.includes(input)||!assetSet.has(input)) throw new Error("등록된 리소스를 선택해 주세요.");
      return input;
    case "lines": return lineValues(input,field);
    case "cast":
      if(!Array.isArray(input)||input.length>2||input.some(id=>!field.options.some(([key])=>key===id))||new Set(input).size!==input.length)
        throw new Error("서로 다른 등장인물을 최대 두 명까지 선택해 주세요.");
      return input;
    case "choices":
      if(!Array.isArray(input)||input.length>20)throw new Error("추가 선택지는 최대 20개까지 만들 수 있습니다.");
      return input.map(([label,response,stat,amount,branch,route])=>{
        if(!field.options.some(([key])=>key===stat)||!Number.isInteger(amount)||Math.abs(amount)>100)
          throw new Error("선택지 효과는 −100에서 100 사이의 정수로 입력해 주세요.");
        const result=[textValue(label,120),textValue(response),stat,stat?amount:0];
        if(branch?.length){
          if(!field.cues)throw new Error("이 선택지에는 후속 장면을 연결할 수 없습니다.");
          result.push(lineValues(branch,field));
        }
        if(route!=null){
          if(!field.cues||typeof route!=="object"||Array.isArray(route))throw new Error("선택지 연결 방식을 확인해 주세요.");
          const checked={};
          if(route.next){
            if(typeof route.next!=="string"||!/^custom-[a-z0-9][a-z0-9-]{0,47}$/.test(route.next))throw new Error("다음 장면을 다시 선택해 주세요.");
            checked.next=route.next;
          }
          if(route.stat){
            if(!["지성","기품","매력","경영","통찰","의지","체력"].includes(route.stat)||!Number.isInteger(route.min)||route.min<0||route.min>500)
              throw new Error("선택지 조건에는 0~500 사이의 정수가 필요합니다.");
            checked.stat=route.stat;
            checked.min=route.min;
          }
          if(Object.keys(checked).length){
            if(result.length===4)result.push(null);
            result.push(checked);
          }
        }
        return result;
      });
    default:
      if(field.fixed) throw new Error("이 항목은 파일 교체로 수정할 수 있습니다.");
      return textValue(input);
  }
}

export function applyEdits(model, request) {
  if(request.version!==model.version) throw new Error("게임 파일이 변경되었습니다. 편집기를 새로 열어 주세요.");
  const edits = new Map();
  function replace(file,start,end,text) {
    if(!edits.has(file)) edits.set(file,[]);
    edits.get(file).push({start,end,text});
  }
  const insertions=new Map();
  function insertProperty(register,key,value){
    const [file,node]=model.registers[register];
    if(prop(node,key))throw new Error("이미 같은 ID가 있습니다. 다른 ID를 입력해 주세요.");
    if(!insertions.has(register))insertions.set(register,[]);
    insertions.get(register).push(quoted(key)+":"+quoted(value));
  }
  const cues={};
  for(const p of properties(model.cueMap)) cues[propertyName(p)]=value(p.value);
  let cuesChanged=false;
  for(const [id,input] of Object.entries(request.changes??{})) {
    const entry=model.fields.get(id);
    if(!entry) throw new Error("항목을 찾을 수 없습니다. 편집기를 새로 열어 주세요.");
    const {field,node,cue,insert,optionId,placementRow}=entry;
    if(JSON.stringify(field.value)===JSON.stringify(input)) continue;
    const checked=statementValue(field,input,model.assetSet);
    if(optionId&&optionId===request.deleteEvent) throw new Error("삭제할 이벤트의 편집 내용을 먼저 적용하거나 취소해 주세요.");
    if(placementRow&&!node){
      const last=rows(placementRow).at(-1);
      replace(field.file,last?.end??placementRow.start+1,last?.end??placementRow.start+1,(last?",":"")+quoted(checked));
    }
    else if(optionId&&!node)insertProperty("authoredOptions",optionId,checked);
    else if (cue) {
      if(checked) cues[cue]=checked;
      else delete cues[cue];
      cuesChanged=true;
    } else if(insert) {
      if(checked)replace(field.file,node.start+1,node.start+1,insert+":"+quoted(checked)+",");
    } else {
      let text=quoted(checked);
      if(field.type==="lines") {
        const source=model.files[field.file];
        const indent=source.slice(source.lastIndexOf("\n",node.start)+1,node.start).match(/^\s*/)[0];
        text="[\n"+checked.map(row=>indent+"  "+quoted(row)).join(",\n")+"\n"+indent+"]";
      }
      replace(field.file,node.start,node.end,text);
    }
  }
  if(cuesChanged) replace("audio.js",model.cueMap.start,model.cueMap.end,JSON.stringify(cues,null,2));
  const deleted = request.deleteEvent;
  if (deleted && !model.customIds.includes(deleted)) throw new Error("편집기에서 추가한 이벤트만 삭제할 수 있습니다.");
  if (request.newEvent || deleted) {
    if (request.newEvent && deleted) throw new Error("이벤트 추가와 삭제는 따로 적용해 주세요.");
    const file="story.js";
    const existing=rows(model.authored);
    if (deleted) {
      const idx=existing.findIndex(row=>value(prop(row,"id"))===deleted);
      const node=existing[idx];
      if(edits.get(file)?.some(edit=>edit.start>=node.start&&edit.end<=node.end))
        throw new Error("삭제할 이벤트의 편집 내용을 먼저 적용하거나 취소해 주세요.");
      const start=idx ? existing[idx-1].end : node.start;
      const end=idx ? node.end : (existing[1]?.start??node.end);
      replace(file,start,end,"");
      const options=prop(model.registers.authoredOptions[1],deleted);
      if(options)replace(file,options.start,options.end,"[]");
    } else {
      const input=request.newEvent;
      const id="custom-"+input.id;
      if(!/^[a-z0-9][a-z0-9-]{0,47}$/.test(input.id)||model.eventGroups.has(id)) throw new Error("영문 소문자·숫자·하이픈으로 고유한 이벤트 ID를 입력해 주세요.");
      if(!Number.isInteger(input.month)||input.month<0||input.month>35) throw new Error("발생 방식에서 연결 전용 또는 1~35개월을 골라 주세요.");
      const row={
        id,month:input.month,title:textValue(input.title,200),
        room:statementValue({type:"select",label:"배경",options:model.roomOptions},input.room),
        track:statementValue({type:"select",label:"BGM",options:model.trackOptions},input.track),
        lines:lineValues(input.lines,{cues:model.cueFields}),label:textValue(input.label,120),result:textValue(input.result),
        picture:statementValue({type:"select",label:"CG",options:[["",""],...model.artOptions]},input.picture??""),
        standing:statementValue({type:"select",label:"스탠딩",options:[["",""],...model.recruitCastOptions]},input.standing??"")
      };
      const at=existing.at(-1)?.end??model.authored.start+1;
      replace(file,at,at,(existing.length?",":"")+"\n  "+quoted(row)+(existing.length?"":"\n"));
    }
  }
  const addition=request.addition;
  if(addition){
    const {id,name,kind}=addition;
    if(kind==="opening"){
      const title=textValue(name,120);
      const art=statementValue({type:"select",label:"CG",options:model.artOptions},addition.picture);
      const music=statementValue({type:"select",label:"BGM",options:[["",""],...model.trackOptions]},addition.music??"");
      const scenes=model.openingScenes;
      const last=rows(scenes).at(-1);
      const at=last?.end??scenes.start+1;
      replace("prologue.js",at,at,(last?",":"")+"\n  "+quoted({title,art,alt:title,music,lines:lineValues(addition.lines,{cues:model.cueFields})}));
    }else if(kind==="scene"){
      const target=model.recruitTargets.get(addition.target);
      if(!target)throw new Error("영입 이벤트를 선택해 주세요.");
      const [source,scenes]=target;
      const scene={title:textValue(name,150),art:statementValue({type:"select",label:"배경",options:model.recruitArtOptions},addition.art),
        music:statementValue({type:"select",label:"BGM",options:[["",""],...model.trackOptions]},addition.music),
        lines:lineValues(addition.lines,{cues:model.cueFields}),
        cast:statementValue({type:"cast",options:model.recruitCastOptions},addition.cast??[]),
        picture:statementValue({type:"select",label:"CG",options:[["",""],...model.artOptions]},addition.picture??"")};
      if(!scene.music)delete scene.music;
      if(!scene.picture)delete scene.picture;
      const last=rows(scenes).at(-1);
      replace(source,last?.end??scenes.start+1,last?.end??scenes.start+1,(last?",":"")+"\n    "+quoted(scene));
    }else{
      if(!/^[a-z][a-z0-9-]{0,39}$/.test(id??""))throw new Error("ID는 영문 소문자로 시작하고 소문자·숫자·하이픈만 사용해 주세요.");
      const title=kind==="fx"?"":textValue(name,120);
      const key="extra-"+id;
      if(kind==="fx")insertProperty("motionObjects",key,textValue(addition.symbol,20));
      else{
        const path=additionPath(addition);
        if(model.assetSet.has(path)||!Object.hasOwn(request.uploads??{},path))throw new Error("새 이름과 등록할 파일을 확인해 주세요.");
        if(kind==="bgm")insertProperty("musicTracks",key,{title,file:path});
        if(kind==="expression"){
          if(!model.recruitCastOptions.some(([actor])=>actor===addition.actor))throw new Error("표정을 사용할 인물을 선택해 주세요.");
          insertProperty("novelExpressions",key,{actor:addition.actor,name:title,file:path});
        }
        if(kind==="standing"){
          insertProperty("recruitCast",key,path);
          insertProperty("recruitNames",key,title);
        }
        if(kind==="cg")insertProperty("endingArtDescriptions",key,title);
        if(kind==="background"){
          insertProperty("sceneArt",key,path);
          insertProperty("stageNames",key,title);
          insertProperty("recruitArt",key,{bg:path});
        }
      }
    }
  }
  for(const [register,entries] of insertions){
    const [file,node]=model.registers[register];
    replace(file,node.start+1,node.start+1,"\n  "+entries.join(",\n  ")+(node.properties.length?",":"")+"\n");
  }
  const output={};
  for(const [file,replacements] of edits) {
    let text=model.files[file];
    for(const patch of replacements.sort((a,b)=>b.start-a.start||b.end-a.end))
      text=text.slice(0,patch.start)+patch.text+text.slice(patch.end);
    parse(text,{ecmaVersion:"latest"});
    output[file]=text;
  }
  if(output["story.js"]){
    const updated=catalog({...model.files,...output},[...model.assetSet]);
    const routes=updated.groups.filter(group=>["event","visit"].includes(group.preview?.kind)).map(group=>({
      id:group.preview.id,title:group.title,linked:group.fields.some(field=>field.trigger&&field.value===0),
      choices:group.fields.find(field=>field.type==="choices")?.value??[]
    }));
    const issue=inspectRoutes(routes).find(item=>item.level==="error");
    if(issue)throw new Error((routes.find(scene=>scene.id===issue.id)?.title??issue.id)+" · 추가 선택지 "+(issue.index+1)+" · "+issue.message);
  }
  return output;
}


export function additionPath({kind,id,extension}){
  const locations={bgm:["audio",/^(mp3|ogg|wav)$/],expression:["expressions",/^(webp|png|jpg|jpeg|gif)$/],standing:["portraits",/^(webp|png|jpg|jpeg)$/],
    cg:["endings",/^webp$/],background:["backgrounds",/^(webp|png|jpg|jpeg)$/]};
  const spec=locations[kind];
  if(!spec||!/^([a-z][a-z0-9-]{0,39})$/.test(id??"")||!spec[1].test(extension??""))
    throw new Error(kind==="cg"?"CG 파일은 WebP 형식으로 추가해 주세요.":"파일 형식과 ID를 확인해 주세요.");
  return "assets/"+spec[0]+"/extra-"+id+"."+extension;
}
