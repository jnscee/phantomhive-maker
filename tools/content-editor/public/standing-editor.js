"use strict";

const standingView={age:10,partner:"auto",device:"desktop"};
const standingDevices={desktop:[1280,800],mobile:[390,844]};
const standingFields=()=>data.groups.filter(g=>g.section==="standing").map(g=>({...g.fields[0],title:g.title}));
const isCielArt=id=>["ciel","ciel11","ciel12"].includes(id);
const roundPoint=n=>Math.round(n*100)/100;
const clampPoint=(n,min,max)=>Math.max(min,Math.min(max,n));

async function standingAsset(path){
  return assetUrls.get(path)??(web?(await web).assetUrl(path):"/media/"+path+"?v="+data.version);
}
function readPicture(url){
  const img=new Image();
  return new Promise((resolve,reject)=>{
    img.onload=()=>resolve(img);
    img.onerror=()=>reject(new Error("그림을 열 수 없습니다. 이미지 형식을 확인해 주세요."));
    img.src=url;
  });
}
let fallbackEncoder;
async function pictureBlob(canvas,type){
  const blob=await new Promise(resolve=>canvas.toBlob(resolve,type,.96));
  if(blob?.type===type)return blob;
  if(type!=="image/webp")throw new Error("이미지를 변환하지 못했습니다.");
  // Safari can return a PNG when asked for WebP. Use libwebp in that case.
  fallbackEncoder??=import("./codec/webp_enc.js").then(module=>module.default());
  const [encoder,{defaultOptions}]=await Promise.all([fallbackEncoder,import("./codec/meta.js")]);
  const pixels=canvas.getContext("2d").getImageData(0,0,canvas.width,canvas.height);
  const bytes=encoder.encode(pixels.data,pixels.width,pixels.height,{...defaultOptions,lossless:1});
  if(!bytes)throw new Error("WebP 이미지를 만들지 못했습니다.");
  return new Blob([bytes],{type});
}
async function storePicture(path,blob){
  if(blob.size>20*1024*1024)throw new Error("변환한 파일이 20 MB를 넘습니다.");
  const encoded=await new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=()=>resolve(reader.result.split(",")[1]);
    reader.onerror=()=>reject(new Error("이미지를 읽지 못했습니다."));
    reader.readAsDataURL(blob);
  });
  const old=assetUrls.get(path);
  if(old)URL.revokeObjectURL(old);
  uploads[path]=encoded;
  assetUrls.set(path,URL.createObjectURL(blob));
  previewedDraft=false;
  updateToolbar();
}
function standingPair(actor){
  const age=standingView.age;
  const partner=standingView.partner==="auto"?(isCielArt(actor)?"seb":cielStandingId(age)):standingView.partner;
  return {age,left:isCielArt(actor)?partner:actor,right:isCielArt(actor)?actor:partner};
}

function drawStandingEditor(panel,field){
  const id=field.actor,roster=standingFields();
  const fields=new Map(roster.map(f=>[f.actor,f]));
  const profile=()=>value(field);
  const ageForCiel={ciel:10,ciel11:11,ciel12:12};
  if(isCielArt(id))standingView.age=ageForCiel[id];
  if(standingView.partner===id||isCielArt(standingView.partner))standingView.partner="auto";
  const root=node("div",undefined,"portrait-editor");
  panel.append(root);
  const stage=node("section",undefined,"portrait-work");
  const board=node("div",undefined,"portrait-board");
  const canvas=node("canvas");
  canvas.setAttribute("aria-label","스탠딩 원본과 눈·턱 기준점");
  board.append(canvas);
  const controls=node("div",undefined,"portrait-controls");
  stage.append(board,controls);
  root.append(stage);
  const upload=node("input");upload.type="file";upload.accept="image/png,image/webp,image/jpeg";upload.hidden=true;
  const title=node("div",undefined,"portrait-section-head");
  title.append(node("h3","스탠딩 원본"),button("이미지 교체",()=>upload.click()),upload);
  controls.append(title,node("small",field.image,"muted"));
  const tools=node("div",undefined,"portrait-tools");
  controls.append(tools,node("small","눈 또는 턱을 선택한 뒤 원본에서 해당 위치를 찍으세요.","muted"));
  let tool="eye",art=null,crop=null,drag=null;
  const toolButtons=new Map();
  for(const [key,label] of [["eye","눈 지정"],["jaw","턱 지정"],["crop","두상 크롭"]]){
    const b=button(label,()=>setTool(key));toolButtons.set(key,b);tools.append(b);
  }
  const measures=node("div",undefined,"portrait-numbers");
  controls.append(measures);
  const inputs={};
  function number(key,label,min,max){
    const el=node("input");el.type="number";el.min=min;el.max=max;el.step=".01";
    el.value=profile()[key];inputs[key]=el;labeled(measures,label,el);
    el.onchange=()=>{
      const n=el.valueAsNumber,p=profile();
      if(!el.checkValidity()||!Number.isFinite(n)||(key==="eye"&&n>p.jaw-1)||(key==="jaw"&&n<p.eye+1)){
        status("턱은 눈보다 1 px 이상 아래에 있어야 합니다. 입력 범위도 확인해 주세요.",true);
        el.value=p[key];return;
      }
      edit({[key]:n});
    };
  }
  number("height","키 (cm)",50,260);
  number("eye","눈 높이 (px)",0,398);
  number("jaw","턱 높이 (px)",1,400);
  const distance=node("p",undefined,"muted");
  controls.append(distance);
  const glow=node("input");glow.type="range";glow.min=0;glow.max=80;glow.step=1;
  const glowRead=node("output");
  const glowRow=node("label","글로우 범위");glowRow.append(glow,glowRead);
  glow.setAttribute("aria-label","글로우 범위");controls.append(glowRow);
  glow.oninput=()=>edit({glow:glow.valueAsNumber});
  const transparency=node("input"),transparencyRead=node("output");
  transparency.type="range";transparency.min=0;transparency.max=100;transparency.step=.1;
  transparency.setAttribute("aria-label","글로우 투명도");
  const transparencyRow=node("label","글로우 투명도");
  transparencyRow.append(transparency,transparencyRead);controls.append(transparencyRow);
  transparency.oninput=()=>edit({glowTransparency:transparency.valueAsNumber});
  controls.append(button("기본 조명 복원",()=>edit({
    glow:isCielArt(id)||id==="seb"||id==="lau"?24:null,glowTransparency:defaultGlowTransparency
  })));
  const cropBox=node("section",undefined,"portrait-crop");
  const headCanvas=node("canvas");headCanvas.width=headCanvas.height=384;
  const cropSize=node("input");cropSize.type="range";cropSize.min=1;cropSize.max=100;cropSize.step=.1;
  const cropState=node("small",undefined,"muted");
  const cropTools=node("div");
  cropTools.append(node("h3","두상 크롭"),node("p","원본에서 두상의 중심을 찍거나 끌어 옮기세요."));
  labeled(cropTools,"크롭 크기 (%)",cropSize);
  cropTools.append(button("이 영역을 두상에 적용",()=>write(async()=>{
    if(!art)return;
    const blob=await pictureBlob(headCanvas,"image/webp");
    await storePicture(field.head,blob);
    edit({crop:{...crop}});
    updateHead();cropState.textContent="두상에 적용됨 · 384 × 384";
    status("두상을 변경 목록에 추가했습니다.");
  })),cropState);
  cropBox.append(headCanvas,cropTools);
  const headArea=node("div",undefined,"portrait-head-row");
  const headImg=node("img");headImg.alt="현재 적용한 두상";
  const headLabel=id==="seb"?"튜토리얼 표시 · 4:5":"적용한 두상";
  const headFrame=node("figure",undefined,id==="seb"?"portrait-guide":"portrait-head");
  const headNote=node("small",id==="seb"?"튜토리얼·월말 결산·작위 심의에 같은 두상 파일을 사용합니다.":"이 인물의 두상은 변경 ZIP에 별도 이미지로 들어갑니다.","muted");
  headFrame.append(headImg,node("figcaption",headLabel));headArea.append(headFrame,headNote);
  root.append(cropBox);
  controls.append(headArea);
  async function updateHead(){
    const available=field.hasHead||Boolean(uploads[field.head]);
    headArea.hidden=!available;
    if(available)headImg.src=await standingAsset(field.head);
  }
  function setTool(next){
    tool=next;
    for(const [key,b] of toolButtons)b.setAttribute("aria-pressed",String(tool===key));
    cropBox.hidden=tool!=="crop";
    paint();
  }
  function edit(patch){
    modify(field,{...profile(),...patch});
    if(Object.hasOwn(patch,"height")){
      drawList();
      $("entry-detail").textContent=sections.standing+" / "+profile().height+" cm";
    }
    sync();paint();compare();
  }
  function sync(){
    const p=profile();
    for(const [key,el] of Object.entries(inputs))el.value=p[key];
    distance.textContent="원본을 높이 400 px로 환산 · 눈에서 턱까지 "+roundPoint(p.jaw-p.eye)+" px";
    transparency.value=p.glowTransparency??defaultGlowTransparency;
    transparency.disabled=p.glow===null;
    transparencyRead.textContent=transparency.disabled?"범위 지정 후 조절":transparency.value+" %";
    glow.value=p.glow??0;glowRead.textContent=p.glow===null?"게임 기본 조명":p.glow+" px";
  }
  function cropRect(){
    const w=art.naturalWidth,h=art.naturalHeight;
    const size=Math.min(w,h)*crop.size/100;
    return {x:clampPoint(w*crop.x/100-size/2,0,w-size),y:clampPoint(h*crop.y/100-size/2,0,h-size),size};
  }
  function paint(){
    if(!art||!crop)return;
    const ctx=canvas.getContext("2d"),w=canvas.width,h=canvas.height;
    ctx.clearRect(0,0,w,h);ctx.drawImage(art,0,0,w,h);
    const rect=cropRect(),s=w/art.naturalWidth;
    const head=headCanvas.getContext("2d");head.clearRect(0,0,384,384);
    head.drawImage(art,rect.x,rect.y,rect.size,rect.size,0,0,384,384);
    if(tool==="crop"){
      ctx.beginPath();ctx.rect(0,0,w,h);ctx.rect(rect.x*s,rect.y*s,rect.size*s,rect.size*s);
      ctx.fillStyle="rgba(9,12,21,.56)";ctx.fill("evenodd");
      ctx.strokeStyle="#ffd693";ctx.lineWidth=2;ctx.strokeRect(rect.x*s,rect.y*s,rect.size*s,rect.size*s);
      return;
    }
    const p=profile();
    for(const [key,color] of [["eye","#79edf1"],["jaw","#ffc782"]]){
      const x=p[key+"X"]*w/100,y=p[key]*h/400;
      ctx.strokeStyle=color;ctx.lineWidth=key===tool?2.5:1.25;
      ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();
      ctx.beginPath();ctx.arc(x,y,6,0,2*Math.PI);ctx.fillStyle="#171820";ctx.fill();ctx.stroke();
      ctx.fillStyle=color;ctx.font="bold 14px sans-serif";ctx.fillText(key==="eye"?"눈":"턱",5,Math.max(15,y-4));
    }
  }
  function place(event){
    if(!art)return;
    const box=canvas.getBoundingClientRect();
    const x=roundPoint(clampPoint((event.clientX-box.left)/box.width*100,0,100));
    const y=clampPoint((event.clientY-box.top)/box.height,0,1);
    if(tool==="crop"){
      crop={...crop,x,y:roundPoint(y*100)};cropState.textContent="적용 전";paint();return;
    }
    const p=profile();
    const v=roundPoint(tool==="eye"?clampPoint(y*400,0,398):clampPoint(y*400,1,400));
    const patch={[tool+"X"]:x,[tool]:v};
    const distance=p.jaw-p.eye;
    if(tool==="eye"&&v>p.jaw-1)patch.jaw=roundPoint(Math.min(400,v+distance));
    if(tool==="jaw"&&v<p.eye+1)patch.eye=roundPoint(Math.max(0,v-distance));
    edit(patch);
  }
  canvas.onpointerdown=e=>{
    if(!art||e.button!==0)return;
    drag=e.pointerId;canvas.setPointerCapture(drag);place(e);
  };
  canvas.onpointermove=e=>{if(e.pointerId===drag)place(e);};
  canvas.onlostpointercapture=()=>{drag=null;};
  cropSize.oninput=()=>{if(crop){crop={...crop,size:cropSize.valueAsNumber};cropState.textContent="적용 전";paint();}};
  async function loadArt(){
    const img=await readPicture(await standingAsset(field.image));
    if(!root.isConnected)return;
    art=img;
    const scale=Math.min(800/img.naturalHeight,1000/img.naturalWidth);
    canvas.width=Math.max(1,Math.round(img.naturalWidth*scale));
    canvas.height=Math.max(1,Math.round(img.naturalHeight*scale));
    const p=profile();
    crop=p.crop?{...p.crop}:{x:p.eyeX,y:roundPoint((p.eye+(p.jaw-p.eye)*.12)/4),size:clampPoint(roundPoint((p.jaw-p.eye)/400*img.naturalHeight*2.9/Math.min(img.naturalWidth,img.naturalHeight)*100),1,100)};
    cropSize.value=crop.size;paint();
  }
  async function write(task){
    if(busy)return;
    busy=true;updateToolbar();root.inert=true;
    try{await task();}catch(e){status(e.message,true);}
    finally{root.inert=false;busy=false;updateToolbar();}
  }
  upload.onchange=()=>write(async()=>{
    const file=upload.files[0];upload.value="";if(!file)return;
    if(file.size>20*1024*1024)throw new Error("파일당 20 MB까지 올릴 수 있습니다.");
    const temp=URL.createObjectURL(file);
    try{
      const picture=await readPicture(temp);
      const type=field.image.endsWith(".png")?"image/png":/\.jpe?g$/i.test(field.image)?"image/jpeg":"image/webp";
      let blob=file;
      if(file.type!==type){
        const out=node("canvas");out.width=picture.naturalWidth;out.height=picture.naturalHeight;
        out.getContext("2d").drawImage(picture,0,0);blob=await pictureBlob(out,type);
      }
      await storePicture(field.image,blob);
      await loadArt();compare();
      status("스탠딩을 교체했습니다. 새 원본에서 눈과 턱 위치를 확인해 주세요.");
    }finally{URL.revokeObjectURL(temp);}
  });

  const comparison=node("section",undefined,"portrait-comparison");
  comparison.append(node("h3","키 비교"));
  const selectors=node("div",undefined,"portrait-selectors");
  const age=select([10,11,12].map(n=>[n,n+"세"]),standingView.age);
  age.disabled=isCielArt(id);
  labeled(selectors,"기준 연령",age);
  const partner=select([["auto",isCielArt(id)?"세바스찬":"시엘 · 기준 연령"],...roster.filter(f=>!isCielArt(f.actor)&&f.actor!==id&&(f.actor!=="seb"||!isCielArt(id))).map(f=>[f.actor,f.title])],standingView.partner);
  labeled(selectors,"비교 인물",partner);
  const cameraLabel=node("output");
  selectors.append(cameraLabel);comparison.append(selectors);
  const lineup=node("div",undefined,"portrait-lineup");
  comparison.append(lineup);root.append(comparison);
  const castElements=new Map();
  function compare(){
    const profiles=Object.fromEntries(roster.map(f=>[f.actor,value(f)]));
    const camera=standingCamera(profiles,standingView.age);
    cameraLabel.textContent="공통 카메라 ×"+camera.toFixed(3);
    const pair=standingPair(id);
    const ids=[...new Set(["ciel","ciel11","ciel12",pair.left,pair.right])];
    for(const [key,figure] of castElements)if(!ids.includes(key)){figure.remove();castElements.delete(key);}
    for(const key of ids){
      const f=fields.get(key),p=profiles[key],fit=standingGeometry(profiles,key,standingView.age);
      let fig=castElements.get(key);
      if(!fig){
        fig=node("figure");const win=node("div");win.append(node("img"));fig.append(win,node("figcaption"));
        castElements.set(key,fig);lineup.append(fig);
      }
      const frame=fig.firstChild,img=frame.firstChild;
      const source=assetUrls.get(f.image)??(data.version+":"+f.image);
      if(img.dataset.source!==source){
        img.dataset.source=source;img.alt=f.title;
        standingAsset(f.image).then(url=>{if(img.dataset.source===source)img.src=url;});
      }
      frame.style.height=(fit.window*camera*200)+"px";
      img.style.height=(fit.scale*camera*200)+"px";
      frame.style.filter=p.glow==null?"none":standingHalo(p.glow,p.glowTransparency);
      fig.lastChild.textContent=f.title+" · "+p.height+" cm";
      fig.classList.toggle("selected",key===id);
    }
  }
  age.onchange=()=>{standingView.age=Number(age.value);compare();};
  partner.onchange=()=>{standingView.partner=partner.value;compare();};
  const actions=node("div",undefined,"portrait-actions");
  for(const [device,label] of [["desktop","데스크톱 대화창"],["mobile","모바일 대화창"]]){
    actions.append(button(label,()=>openStandingPreview(device)));
  }
  comparison.append(actions);
  sync();compare();setTool("eye");
  Promise.all([loadArt(),updateHead()]).catch(e=>status(e.message,true));
}

let standingFrameObserver;
async function openStandingPreview(device=standingView.device){
  if(busy)return;
  standingView.device=device;
  const group=currentGroup(),field=group.fields[0];
  busy=true;updateToolbar();status("현재 편집값으로 대화창을 열고 있습니다.");
  try{
    const body=structuredClone({...payload(),preview:group.preview,standingView:standingPair(field.actor)});
    const result=await queuePreview(()=>api("/api/preview",body));
    const dialog=$("standing-dialog"),frame=dialog.querySelector("iframe"),viewport=frame.parentNode;
    const size=dialog.querySelector("select");
    size.value=device;
    function resize(){
      const [w,h]=standingDevices[size.value];
      const scale=Math.min(1,viewport.clientWidth/w,viewport.clientHeight/h);
      frame.style.width=w+"px";frame.style.height=h+"px";frame.style.transform="translate(-50%, -50%) scale("+scale+")";
    }
    size.onchange=()=>{standingView.device=size.value;resize();};
    dialog.showModal();resize();
    standingFrameObserver=new ResizeObserver(resize);standingFrameObserver.observe(viewport);
    frame.src=result.url;previewedDraft=Boolean(draftCount());
    status("실제 게임 대화창을 열었습니다.");
  }catch(e){status(e.message,true);}
  finally{busy=false;updateToolbar();}
}
