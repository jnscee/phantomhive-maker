// Check the camera formula against the editable cast, including Elizabeth's age-specific pairing.
import assert from "node:assert/strict";
import {readFileSync,readdirSync} from "node:fs";
import vm from "node:vm";
import {catalog,applyEdits} from "./catalog.mjs";

const dir=new URL("../../current/",import.meta.url);
const files=Object.fromEntries(readdirSync(dir).filter(f=>f.endsWith(".js")).map(f=>[f,readFileSync(new URL(f,dir),"utf8")]));
const near=(actual,expected)=>assert.ok(Math.abs(actual-expected)<1e-9,actual+" differs from "+expected);

function checkFraming(source){
  const runtime=vm.createContext({});
  vm.runInContext(source,runtime);
  const {profiles,fit,camera}=vm.runInContext("({profiles:standingProfiles,fit:standingGeometry,camera:standingCamera})",runtime);
  const ages=["ciel","ciel11","ciel12"];
  for(const [i,id] of ages.entries()){
    const age=10+i,ref=profiles[id],base=ref.height/186,windows=[];
    near(fit(profiles,id,age).scale,base);
    for(const [actor,p] of Object.entries(profiles)){
      if(ages.includes(actor))continue;
      const level=base*(1-ref.eye/400)+(p.height-ref.height)/215;
      const special=actor==="liz12"&&age===11;
      const face=base*(ref.jaw-ref.eye)/(p.jaw-p.eye);
      const scale=special?face*.93:Math.max(face*(actor.startsWith("liz")?1:1.08),level/(1-p.eye/400));
      const height=special?base*1.018:level+scale*p.eye/400;
      const actual=fit(profiles,actor,age);
      near(actual.scale,scale);near(actual.window,height);windows.push(height);
    }
    near(camera(profiles,age),Math.min(1,.91/Math.max(...windows)));
  }
  return Object.keys(profiles);
}

const model=catalog(files);
for(const id of checkFraming(files["standing.js"]))assert.ok(model.fields.has("portrait:"+id),id);
const lau=model.fields.get("portrait:lau").field;
const change={...lau.value,height:lau.value.height===182?183:182,eye:65,jaw:106.5,glow:0,crop:{x:45,y:20,size:37}};
const updated=applyEdits(model,{version:model.version,changes:{[lau.id]:change}});
assert.deepEqual(Object.keys(updated),["standing.js"]);
assert.deepEqual(catalog({...files,...updated}).fields.get(lau.id).field.value,change);
checkFraming(updated["standing.js"]);
for(const invalid of [{eye:change.jaw},{jaw:401},{height:0},{crop:{x:-1,y:20,size:37}},{glow:81}]){
  assert.throws(()=>applyEdits(model,{version:model.version,changes:{[lau.id]:{...change,...invalid}}}));
}
console.log("PASS standing: editable cast, shared camera, Elizabeth pairing and Lau edit round trip");
