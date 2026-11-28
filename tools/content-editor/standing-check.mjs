// Protect the shared framing against changes to the age reference, camera pool, or face-size exception.
import assert from "node:assert/strict";
import {readFileSync,readdirSync} from "node:fs";
import vm from "node:vm";
import {catalog,applyEdits} from "./catalog.mjs";

const read=name=>readFileSync(new URL("../../current/"+name,import.meta.url),"utf8");
const src=read("standing.js"),context=vm.createContext({});
vm.runInContext(src,context);
const evalModel=code=>vm.runInContext(code,context);
const near=(actual,expected)=>assert.ok(Math.abs(actual-expected)<1e-9,actual+" differs from "+expected);
const dir=new URL("../../current/",import.meta.url);
const files=Object.fromEntries(readdirSync(dir).filter(f=>f.endsWith(".js")).map(f=>[f,read(f)]));
const model=catalog(files);
const measurement=id=>model.fields.get("portrait:"+id).field.value;
const npcs=["seb","agni","bard","finny","mey","owl","snake","soma","tanaka","lau","liz11","liz12","liz13"];
for(const [i,ciel] of ["ciel","ciel11","ciel12"].entries()){
  const ref=measurement(ciel),age=10+i,base=ref.height/186,windows=[];
  assert.equal(evalModel('cielStandingId('+age+')'),ciel);
  for(const id of npcs){
    const actor=measurement(id);
    const faceScale=base*(ref.jaw-ref.eye)/(actor.jaw-actor.eye);
    const level=base*(1-ref.eye/400)+(actor.height-ref.height)/215;
    const special=id==="liz12"&&age===11;
    const scale=special?faceScale*.93:Math.max(faceScale*(id.startsWith("liz")?1:1.08),level/(1-actor.eye/400));
    const height=special?base*1.018:level+scale*actor.eye/400;
    const fit=evalModel('standingGeometry(standingProfiles,"'+id+'",'+age+')');
    near(fit.scale,scale);near(fit.window,height);windows.push(height);
  }
  near(evalModel('standingCamera(standingProfiles,'+age+')'),Math.min(1,.91/Math.max(...windows)));
  near(evalModel('standingGeometry(standingProfiles,cielStandingId('+age+'),'+age+').scale'),base);
}
const profiles=model.groups.filter(g=>g.section==="standing");
assert.equal(profiles.length,16);
const seb=model.fields.get("portrait:seb").field;
const change={...seb.value,height:190,eye:69.75,glow:0,crop:{x:45,y:20,size:37}};
const updated=applyEdits(model,{version:model.version,changes:{[seb.id]:change}});
assert.deepEqual(Object.keys(updated),["standing.js"]);
assert.deepEqual(catalog({...files,...updated}).fields.get(seb.id).field.value,change);
for(const invalid of [{eye:change.jaw},{jaw:401},{height:0},{crop:{x:-1,y:20,size:37}},{glow:81}]){
  assert.throws(()=>applyEdits(model,{version:model.version,changes:{[seb.id]:{...change,...invalid}}}));
}
console.log("PASS standing: all original ages, NPC proportions, shared camera, Elizabeth pairing and edit round trip");

assert.equal(evalModel("standingHalo(24)"),"drop-shadow(0 0 7px #eff8ff16) drop-shadow(0 0 24px #c1e4ff27)");
assert.equal(evalModel("standingHalo(48,84.7)"),"drop-shadow(0 0 14px #eff8ff16) drop-shadow(0 0 48px #c1e4ff27)");
assert.equal(evalModel("standingHalo(24,100)"),"drop-shadow(0 0 7px #eff8ff00) drop-shadow(0 0 24px #c1e4ff00)");
assert.equal(evalModel("standingHalo(24,0)"),"drop-shadow(0 0 7px #eff8ff90) drop-shadow(0 0 24px #c1e4ffff)");
for(const glow of [null,0,80]){
  const profile={...change,glow,glowTransparency:0};
  const output=applyEdits(model,{version:model.version,changes:{[seb.id]:profile}});
  assert.deepEqual(catalog({...files,...output}).fields.get(seb.id).field.value,profile);
}
for(const glowTransparency of [null,-1,101,"80",NaN]){
  assert.throws(()=>applyEdits(model,{version:model.version,changes:{[seb.id]:{...change,glowTransparency}}}));
}
console.log("PASS halo: public defaults, independent radius and transparency, legacy and boundary values");
