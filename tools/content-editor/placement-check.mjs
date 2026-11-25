import assert from "node:assert/strict";
import {readFileSync,readdirSync} from "node:fs";
import {fileURLToPath} from "node:url";
import path from "node:path";
import vm from "node:vm";
import {parse} from "acorn";
import {catalog,applyEdits} from "./catalog.mjs";

const root=fileURLToPath(new URL("../../current/",import.meta.url));
const files=Object.fromEntries(readdirSync(root).filter(name=>name.endsWith(".js"))
  .map(name=>[name,readFileSync(path.join(root,name),"utf8")]));
const archived=Object.keys(JSON.parse(readFileSync(path.join(root,"shared-assets.json"),"utf8")));
const assets=[...new Set([...archived,...readdirSync(path.join(root,"assets"),{recursive:true,withFileTypes:true})
  .filter(entry=>entry.isFile()).map(entry=>path.relative(root,path.join(entry.parentPath,entry.name)).split(path.sep).join("/"))])];
const version="placement-regression";
const modelFor=input=>catalog(input,assets,version);
const model=modelFor(files);
const placement=(model,id)=>{
  const field=model.groups.find(group=>group.preview?.kind==="activity"&&group.preview.id===id)
    ?.fields.find(field=>field.type==="placement");
  assert.ok(field,"Missing placement editor for "+id);
  assert.equal(field.id,"placement:"+id);
  return field;
};
const runtime=input=>{
  const context=vm.createContext({console,courseName:id=>id});
  vm.runInContext(input["content.js"],context,{filename:"content.js"});
  vm.runInContext(input["scenes.js"],context,{filename:"scenes.js"});
  return code=>JSON.parse(vm.runInContext("JSON.stringify("+code+")",context));
};
const original=runtime(files);
const activityIds=original("Object.keys(choreography)");
assert.equal(activityIds.length,23);

// These baselines include the independently reviewed PR #31 positions.
const expected={
  study:{x:50,bottom:50,scale:.255},
  negotiate:{x:43,bottom:48.5,scale:.255},
  inquiry:{x:36,bottom:50,scale:.255},
  walk:{x:50,bottom:46.5,scale:.23},
  exercise:{x:50,bottom:50,scale:.42}
};
for(const id of activityIds){
  const field=placement(model,id),baseline=expected[id]??expected.study;
  assert.deepEqual(field.value,baseline,id+" editor baseline");
  assert.deepEqual(field.defaults,baseline,id+" reset baseline");
  assert.deepEqual(original("lessonPlacement("+JSON.stringify(id)+")"),baseline,id+" runtime baseline");
}

const changedPlacement={x:61.25,bottom:37.75,scale:.333};
const walkPlacement={x:17.8,bottom:63.2,scale:.28};
const negotiateGroup=model.groups.find(group=>group.key==="fx-negotiate");
const room=negotiateGroup.fields.find(field=>field.label==="장면 배경");
const changed=applyEdits(model,{version,changes:{
  [placement(model,"negotiate").id]:changedPlacement,
  [placement(model,"walk").id]:walkPlacement,
  [room.id]:"garden"
}});
assert.deepEqual(Object.keys(changed),["content.js"]);
const updatedFiles={...files,...changed},updated=modelFor(updatedFiles),rendered=runtime(updatedFiles);
assert.deepEqual(placement(updated,"negotiate").value,changedPlacement,"fractional coordinates survive saving");
assert.deepEqual(placement(updated,"walk").value,walkPlacement,"each activity keeps its own placement");
assert.deepEqual(rendered('lessonPlacement("negotiate")'),changedPlacement,"game consumes the saved editor placement");
assert.deepEqual(rendered('lessonPlacement("walk")'),walkPlacement);
const markup=rendered('lessonArtMarkup("negotiate")');
assert.ok(markup.includes('data-activity="negotiate"')&&markup.includes('data-room="garden"'));
assert.ok(markup.includes('src="assets/room-garden.webp"'),"preview uses the selected game background");
assert.ok(markup.includes("--actor-x:61.25%")&&markup.includes("--actor-bottom:37.75%")
  &&markup.includes("--actor-ratio:0.333"),"saved coordinates reach the actual shared game markup");
for(const id of activityIds){
  const before=original("choreography["+JSON.stringify(id)+"].slice(0,5)");
  const after=rendered("choreography["+JSON.stringify(id)+"].slice(0,5)");
  if(id==="negotiate")before[0]="garden";
  assert.deepEqual(after,before,"placement edits preserve frames, movement, effects and prose for "+id);
  if(!["negotiate","walk"].includes(id))assert.deepEqual(placement(updated,id).value,placement(model,id).value);
}
assert.deepEqual(applyEdits(updated,{version,changes:{[placement(updated,"negotiate").id]:changedPlacement}}),{},"unchanged placement adds no source patch");
const precise={x:61.256,bottom:37.754,scale:.3336},normalized={x:61.26,bottom:37.75,scale:.334};
const preciseOutput=applyEdits(model,{version,changes:{"placement:negotiate":precise}});
const preciseFiles={...files,...preciseOutput};
assert.deepEqual(placement(modelFor(preciseFiles),"negotiate").value,normalized,"saved precision matches the runtime precision");
assert.deepEqual(runtime(preciseFiles)('lessonPlacement("negotiate")'),normalized);

// Reset is independent of a previously saved custom value.
assert.deepEqual(placement(updated,"negotiate").defaults,expected.negotiate);
assert.deepEqual(rendered('defaultLessonPlacement("negotiate")'),expected.negotiate);
const reset=applyEdits(updated,{version,changes:{[placement(updated,"negotiate").id]:placement(updated,"negotiate").defaults}});
assert.deepEqual(runtime({...updatedFiles,...reset})('lessonPlacement("negotiate")'),expected.negotiate);

// Match cover sizing for wide and tall stage presets using real background
// dimensions. The capped sprite sizing remains in the shared game stylesheet.
for(const [width,height,naturalWidth,naturalHeight,paintedWidth,paintedHeight] of [
  [480,320,1500,1000,480,320],
  [960,540,1500,1000,960,640],
  [390,520,1500,1000,780,520],
  [960,540,1119,630,960,960*630/1119]
]){
  const geometry=original(`(()=>{
    const painted={};
    const plane={dataset:{room:"library"},style:{setProperty:(key,value)=>painted[key]=parseFloat(value)},
      parentElement:{getBoundingClientRect:()=>({width:${width},height:${height}})}};
    fitLessonRoom({naturalWidth:${naturalWidth},naturalHeight:${naturalHeight},parentElement:plane});
    return painted;
  })()`);
  assert.equal(geometry["--lesson-width"],width,"sprite cap uses the visible stage width, independent of the decorative frame");
  assert.ok(Math.abs(geometry["--painted-width"]-paintedWidth)<.001);
  assert.ok(Math.abs(geometry["--painted-height"]-paintedHeight)<.001);
}

// Older sources may still have five-element choreography rows. Editing two of
// them together must insert the optional placement without damaging the array.
const ast=parse(files["content.js"],{ecmaVersion:"latest"});
const choreography=ast.body.flatMap(node=>node.declarations??[]).find(node=>node.id?.name==="choreography").init;
let legacySource=files["content.js"];
const removed=choreography.properties.filter(property=>["walk","negotiate"].includes(property.key.name??property.key.value))
  .map(property=>property.value.elements).filter(elements=>elements.length>5)
  .map(elements=>({start:elements[4].end,end:elements[5].end})).sort((a,b)=>b.start-a.start);
assert.equal(removed.length,2);
for(const {start,end} of removed)legacySource=legacySource.slice(0,start)+legacySource.slice(end);
const legacyFiles={...files,"content.js":legacySource},legacy=modelFor(legacyFiles);
assert.deepEqual(placement(legacy,"negotiate").value,expected.negotiate);
assert.deepEqual(placement(legacy,"walk").value,expected.walk);
assert.deepEqual(runtime(legacyFiles)('lessonPlacement("walk")'),expected.walk);
const migrated=applyEdits(legacy,{version,changes:{"placement:walk":walkPlacement,"placement:negotiate":changedPlacement}});
const migratedModel=modelFor({...legacyFiles,...migrated});
assert.deepEqual(placement(migratedModel,"walk").value,walkPlacement);
assert.deepEqual(placement(migratedModel,"negotiate").value,changedPlacement);

const malformed=[null,[],{},
  {x:50,bottom:50},
  {x:50,bottom:50,scale:.255,unexpected:1},
  {x:"50",bottom:50,scale:.255},
  {x:-.01,bottom:50,scale:.255},
  {x:100.01,bottom:50,scale:.255},
  {x:50,bottom:-.01,scale:.255},
  {x:50,bottom:100.01,scale:.255},
  {x:50,bottom:50,scale:.049},
  {x:50,bottom:50,scale:1.001},
  {x:NaN,bottom:50,scale:.255},
  {x:50,bottom:Infinity,scale:.255},
  {x:50,bottom:50,scale:NaN}
];
for(const input of malformed)assert.throws(()=>applyEdits(model,{version,changes:{"placement:negotiate":input}}),"reject malformed placement "+JSON.stringify(input));
for(const boundary of [{x:0,bottom:0,scale:.05},{x:100,bottom:100,scale:1}]){
  const output=applyEdits(model,{version,changes:{"placement:negotiate":boundary}});
  assert.deepEqual(placement(modelFor({...files,...output}),"negotiate").value,boundary);
}
assert.throws(()=>applyEdits(model,{version:"old",changes:{"placement:negotiate":changedPlacement}}));
assert.throws(()=>applyEdits(model,{version,changes:{"placement:missing":changedPlacement}}));
console.log("PASS placement: 23 activity baselines, PR #31, fractional save/runtime markup, background cover geometry, independent values, reset, legacy insertion, malformed values and boundaries");
