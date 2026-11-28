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
const reference=[[140,86,46],[146,79,45],[152,62,46]];
const measurements={seb:[186,68.1,39],agni:[193,53,36],bard:[181,52,46],finny:[163,68,44],
  mey:[165,94,45],owl:[165,77,40],snake:[177,64,45],soma:[171,74,44],tanaka:[166,64,44],
  lau:[178,62,42],liz11:[144,87,39],liz12:[150,78,35],liz13:[156,89,45]};
for(const [i,[cm,eye,chin]] of reference.entries()){
  const age=10+i,base=cm/186,windows=[];
  for(const [id,[h,e,c]] of Object.entries(measurements)){
    const level=base*(1-eye/400)+(h-cm)/215;
    const special=id==="liz12"&&age===11;
    const scale=special?base*chin/c*.93:Math.max(base*chin*(id.startsWith("liz")?1:1.08)/c,level/(1-e/400));
    const height=special?base*1.018:level+scale*e/400;
    const fit=evalModel('standingGeometry(standingProfiles,"'+id+'",'+age+')');
    near(fit.scale,scale);near(fit.window,height);windows.push(height);
  }
  near(evalModel('standingCamera(standingProfiles,'+age+')'),Math.min(1,.91/Math.max(...windows)));
  near(evalModel('standingGeometry(standingProfiles,cielStandingId('+age+'),'+age+').scale'),base);
}
const dir=new URL("../../current/",import.meta.url);
const files=Object.fromEntries(readdirSync(dir).filter(f=>f.endsWith(".js")).map(f=>[f,read(f)]));
const model=catalog(files);
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
