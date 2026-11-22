import { parse } from "acorn";
import { createHash } from "node:crypto";

const propertyName = property => property.key?.name ?? property.key?.value;
const prop = (node, key) => node?.properties?.find(row => propertyName(row) === key)?.value;
const rows = node => node?.elements ?? [];
const properties = node => node?.properties ?? [];
const strings = node => node?.type === "Literal" && typeof node.value === "string";
const value = node => node?.value;
const hangul = /[가-힣]/;
const hash = data => createHash("sha256").update(data).digest("hex");
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

export function catalog(files, publishedAssets = []) {
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

  function group(section, key, title, detail="", preview=null) {
    const g = {section,key,title,detail,preview,fields:[]};
    groups.push(g);
    return g;
  }

  function add(g, file, node, label, type="text", options, extra={}) {
    if (!node || (type !== "lines" && !["Literal","UnaryExpression"].includes(node.type))) return;
    if (["text","prologue","ending","image","audio","select"].includes(type) && !strings(node)) return;
    const id = file + ":" + node.start;
    if (fields.has(id)) return;
    let initial = value(node);
    if (type === "number" && node.type === "UnaryExpression") initial = Number(files[file].slice(node.start,node.end));
    if (type === "lines") {
      const list = rows(node);
      if (!list.length || !list.every(line => rows(line).length === 2 && rows(line).every(strings))) return;
      initial = list.map(line => rows(line).map(value));
      for (const line of list) for (const element of rows(line)) covered.add(file+":"+element.start);
    }
    const field = {id,label,type,value:initial,file,line:node.loc.start.line,options,...extra};
    g.fields.push(field);
    fields.set(id,{field,node});
    covered.add(id);
  }

  function event(id,title,detail="") {
    if (!eventGroups.has(id))
      eventGroups.set(id,group("events","event-"+id,title,detail,{kind:"event",id}));
    return eventGroups.get(id);
  }

  function eventOption(g,id,defaultValue) {
    const map = variable("audio.js","eventTracks");
    const node = prop(map,id);
    const opts = [["","기본 음악 · "+defaultValue],...trackOptions];
    const field = {id:"cue:"+id,label:id.startsWith("season-")?"이벤트 BGM · "+id.slice(7)+"개월차":"이벤트 BGM",type:"cue",value:value(node)??"",options:opts,file:"audio.js"};
    fields.set(field.id, {field,node,cue:id});
    g.fields.push(field);
  }

  const opening = rows(variable("prologue.js","openingScenes"));
  opening.forEach((scene,i)=>{
    const art = prop(scene,"art");
    const g = group("story","opening-"+i,"프롤로그 · "+(i+1),value(art),{kind:"opening",scene:i});
    // Art IDs also control scene-specific transitions and voice-only scenes.
    add(g,"prologue.js",art,"CG","prologue",undefined,{fixed:true});
    add(g,"prologue.js",prop(scene,"alt"),"CG 대체 설명");
    add(g,"prologue.js",prop(scene,"lines"),"대사 순서","lines");
  });

  const endingArt = properties(variable("endings.js","endingArt"));
  const artOptions = endingArt.map(p=>[propertyName(p),value(rows(p.value)[1])]);
  const endingLabels = {vowTitle:"복수 계속 · 작위 회복",vowNoTitle:"복수 계속 · 작위 보류",releaseTitle:"복수 포기 · 작위 회복",releaseNoTitle:"복수 포기 · 작위 보류",title:"작위 회복",business:"팬텀사",defer:"작위 보류",ill:"병환",broke:"파산"};
  for (const p of properties(variable("endings.js","endings"))) {
    const id=propertyName(p);
    const title=endingLabels[id]??id;
    const g=group("story","ending-"+id,"엔딩 · "+title,id,{kind:"ending",id,scene:0});
    add(g,"endings.js",prop(p.value,"track"),"엔딩 BGM","select",trackOptions,{media:"track"});
    add(g,"endings.js",prop(p.value,"flavor"),"마지막 문장");
    rows(prop(p.value,"scenes")).forEach((scene,i)=>{
      const part=group("story","ending-"+id+"-"+i,title+" · 장면 "+(i+1),id,{kind:"ending",id,scene:i});
      add(part,"endings.js",rows(scene)[0],"장면 CG","select",artOptions,{media:"endingKey"});
      add(part,"endings.js",rows(scene)[1],"대사 순서","lines");
    });
  }
  for (const p of properties(variable("endings.js","shortEndings"))) {
    const id=propertyName(p);
    const g=group("story","ending-"+id,"엔딩 · "+(endingLabels[id]??id),id,{kind:"ending",id,scene:0});
    const [art,bgm,title,lines,flavor]=rows(p.value);
    add(g,"endings.js",art,"장면 CG","select",artOptions,{media:"endingKey"});
    add(g,"endings.js",bgm,"엔딩 BGM","select",trackOptions,{media:"track"});
    add(g,"endings.js",title,"장면 제목");
    add(g,"endings.js",lines,"대사 순서","lines");
    add(g,"endings.js",flavor,"마지막 문장");
  }
  inventory.ending = Object.fromEntries(endingArt.map(p=>[propertyName(p),"assets/endings/"+value(rows(p.value)[0])+".webp"]));
  for (const p of endingArt) {
    const id=propertyName(p);
    const g=group("assets","cg-"+id,"엔딩 CG · "+id);
    add(g,"endings.js",rows(p.value)[0],"CG 파일","ending",undefined,{fixed:true});
    add(g,"endings.js",rows(p.value)[1],"대체 설명");
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
  for (const file of ["story.js","chapters.js","snake.js"]) walk(roots[file], [],node=>{
    if (node.type!=="ObjectExpression" || !strings(prop(node,"id")) || !strings(prop(node,"title"))) return;
    const id=value(prop(node,"id"));
    const g=event(id,value(prop(node,"title")),id==="snakeArrival"?"타운하우스 보유 · 소마·아그니 교류 후 발생":"기존 발생 조건");
    for (const [key,label] of [["title","제목"],["speaker","화자"],["text","이벤트 본문"],["source","출처"]]) add(g,file,prop(node,key),label);
    literalChoices(g,file,prop(node,"choices"));
    const prompt=rows(prop(node,"prompt"));
    add(g,file,prompt[0],"마지막 화자");
    add(g,file,prompt[1],"마지막 대사");
    add(g,file,prop(prompt[2],"room"),"마지막 배경","select",roomOptions,{media:"room"});
  });

  for (const p of properties(variable("lessons.js","birthdayScenes"))) {
    const g=event(propertyName(p),propertyName(p));
    add(g,"lessons.js",prop(p.value,"room"),"장면 배경","select",roomOptions,{media:"room"});
    add(g,"lessons.js",prop(p.value,"lines"),"대사 순서","lines");
    rows(prop(p.value,"answers")).forEach((row,i)=>{
      add(g,"lessons.js",rows(row)[0],"응답 "+(i+1)+" 화자");
      add(g,"lessons.js",rows(row)[1],"응답 "+(i+1));
    });
  }
  rows(variable("snake.js","scenes")).forEach((scene,i)=>{
    const g=group("story","snake-"+i,"스네이크 영입 · 장면 "+(i+1),"봉투에 적힌 이름",{kind:"snake",id:"snakeArrival",scene:i});
    add(g,"snake.js",prop(scene,"room"),"배경","select",roomOptions,{media:"room"});
    rows(prop(scene,"cast")).forEach((actor,i)=>add(g,"snake.js",actor,"등장인물 "+(i+1),"select",
      [["시엘","시엘"],...properties(variable("chapters.js","portraits")).map(p=>[propertyName(p),propertyName(p)]).filter(([name])=>name!=="시엘")]));
    add(g,"snake.js",prop(scene,"lines"),"대사 순서","lines");
  });

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
    const g=event("season-"+months[0],value(title),"반복 발생 월 · "+months.join(", "));
    for (const [label,n] of [["제목",title],["화자",speaker],["본문",text],["선택지 1",a],["선택지 2",b],["출처",source]]) add(g,"chapters.js",n,label);
    g.cueMonths=months;
  });
  for (const [id,g] of eventGroups) {
    if (g.cueMonths) g.cueMonths.forEach(month=>eventOption(g,"season-"+month,"cheerful"));
    else eventOption(g,id,id.startsWith("exam-")?"test":"daily");
  }

  const authored=variable("story.js","authoredEvents");
  const customIds=[];
  for (const node of rows(authored)) {
    const id=value(prop(node,"id"));
    customIds.push(id);
    const g=event(id,value(prop(node,"title")),"추가한 월말 이벤트");
    add(g,"story.js",prop(node,"title"),"제목");
    add(g,"story.js",prop(node,"month"),"발생 월","number",undefined,{min:1,max:35});
    add(g,"story.js",prop(node,"room"),"배경","select",roomOptions,{media:"room"});
    add(g,"story.js",prop(node,"track"),"BGM","select",trackOptions,{media:"track"});
    add(g,"story.js",prop(node,"lines"),"대사 순서","lines");
    add(g,"story.js",prop(node,"label"),"마무리 버튼");
    add(g,"story.js",prop(node,"result"),"마지막 대사");
    g.removable=true;
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

  for(const path of publishedAssets.filter(path=>path.startsWith("assets/sprites/") && /\.png$/i.test(path))) {
    const g=group("assets","sprite-"+path,"동작 프레임 · "+path.split("/").at(-1));
    g.asset=path;
  }

  for (const p of properties(variable("content.js","choreography"))) {
    const id=propertyName(p);
    const [room,,movement,fx,text]=rows(p.value);
    const title=value(prop(prop(variable("content.js","actions"),id),"name"))??value(rows(prop(variable("content.js","extraActivities"),id))[0])??id;
    const g=group("fx","fx-"+id,title,id,{kind:"activity",id});
    add(g,"content.js",room,"장면 배경","select",roomOptions,{media:"room"});
    add(g,"content.js",movement,"동작 패턴","select",
      [...new Set(properties(variable("content.js","choreography")).map(row=>value(rows(row.value)[2])))].map(key=>[key,key]));
    add(g,"content.js",fx,"화면 효과","select",fxOptions);
    add(g,"content.js",text,"장면 설명");
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
  const extraDialogue = {
    "chapters.js":["visitsVN","examEvents","guide"], "lessons.js":["courseFeedback","masteryPaths"],
    "snake.js":["snakeRounds"], "scenes.js":["lines"], "game.js":["homeRemarks","marketGoods"],
    "content.js":["visiting"], "reports.js":["reviewLines"]
  };
  for (const [file,names] of Object.entries(extraDialogue)) {
    for (const name of names) {
      const root = variable(file,name) ?? roots[file].body.find(node=>node.type==="FunctionDeclaration"&&node.id.name===name);
      if (!root) continue;
      const labels={guide:"첫 조작 안내",visitsVN:"자유행동 대화",examEvents:"세바스찬 시험 대사",courseFeedback:"수업 성과 대사",masteryPaths:"응용 실기",snakeRounds:"스네이크 순찰 대사",lines:"시엘과의 대화",homeRemarks:"시엘의 메인 화면 대사",marketGoods:"상점 대사",visiting:"방문 장소 안내",reviewLines:"일정 총평"};
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
  const version = hash(JSON.stringify(files));
  return {files,groups:groups.filter(g=>g.fields.length||g.asset),fields,inventory,version,trackOptions,roomOptions,assetSet,eventGroups,customIds,authored,cueMap:variable("audio.js","eventTracks")};
}

function textValue(input, limit=5000) {
  if(typeof input!=="string" || !input.trim() || input.length>limit || /[<>\u0000]/.test(input))
    throw new Error("빈 문구, < 또는 >, 길이 제한을 확인해 주세요.");
  return input;
}

function lineValues(input) {
  if(!Array.isArray(input)||!input.length||input.length>250) throw new Error("대사는 1~250줄이어야 합니다.");
  return input.map(row=>{
    if(!Array.isArray(row)||row.length!==2) throw new Error("화자와 대사를 입력해 주세요.");
    return [textValue(row[0],80),textValue(row[1])];
  });
}

function statementValue(field, input, assetSet) {
  switch(field.type) {
    case "number":
      if(!Number.isInteger(input)||input<field.min||input>field.max) throw new Error(field.label+"의 입력 범위를 확인해 주세요.");
      return input;
    case "select": case "cue":
      if(!field.options.some(([id])=>id===input)) throw new Error(field.label+" 목록에서 선택해 주세요.");
      return input;
    case "image": case "audio":
      if(!field.paths.includes(input)||!assetSet.has(input)) throw new Error("등록된 리소스를 선택해 주세요.");
      return input;
    case "lines": return lineValues(input);
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
  const cues={};
  for(const p of properties(model.cueMap)) cues[propertyName(p)]=value(p.value);
  let cuesChanged=false;
  for(const [id,input] of Object.entries(request.changes??{})) {
    const entry=model.fields.get(id);
    if(!entry) throw new Error("항목을 찾을 수 없습니다. 편집기를 새로 열어 주세요.");
    const {field,node,cue}=entry;
    if(JSON.stringify(field.value)===JSON.stringify(input)) continue;
    const checked=statementValue(field,input,model.assetSet);
    if (cue) {
      if(checked) cues[cue]=checked;
      else delete cues[cue];
      cuesChanged=true;
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
    } else {
      const input=request.newEvent;
      const id="custom-"+input.id;
      if(!/^[a-z0-9][a-z0-9-]{0,47}$/.test(input.id)||model.eventGroups.has(id)) throw new Error("영문 소문자·숫자·하이픈으로 고유한 이벤트 ID를 입력해 주세요.");
      if(!Number.isInteger(input.month)||input.month<1||input.month>35) throw new Error("발생 월은 1~35 사이여야 합니다.");
      const row={
        id,month:input.month,title:textValue(input.title,200),
        room:statementValue({type:"select",label:"배경",options:model.roomOptions},input.room),
        track:statementValue({type:"select",label:"BGM",options:model.trackOptions},input.track),
        lines:lineValues(input.lines),label:textValue(input.label,120),result:textValue(input.result)
      };
      const at=existing.at(-1)?.end??model.authored.start+1;
      replace(file,at,at,(existing.length?",":"")+"\n  "+quoted(row)+(existing.length?"":"\n"));
    }
  }
  const output={};
  for(const [file,replacements] of edits) {
    let text=model.files[file];
    for(const patch of replacements.sort((a,b)=>b.start-a.start||b.end-a.end))
      text=text.slice(0,patch.start)+patch.text+text.slice(patch.end);
    parse(text,{ecmaVersion:"latest"});
    output[file]=text;
  }
  return output;
}
