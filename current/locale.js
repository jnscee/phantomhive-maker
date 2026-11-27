"use strict";

// A language becomes selectable when its game translation is ready to ship.
const gameLanguages = {ko:"한국어", ja:"日本語", en:"English"};
const gameText = {
  ko:{
    title:"팬텀하이브 백작 메이커", menu:"표지 메뉴", start:"게임 시작", continue:"이어하기",
    fanGame:"『흑집사』 비공식 2차 창작 팬게임",
    alternateStory:"원작과 다른 IF 세계관을 다룹니다.",
    aiNotice:"이 게임의 리소스 제작에 생성형 AI를 사용했습니다.",
    fictionNotice:"게임 속 사건과 인물의 행적은 허구이며 현실과 무관합니다.",
    album:"앨범 기록", settings:"설정", exit:"나가기", backToCover:"표지로 돌아가기",
    autoSave:"자동 저장", notebook:"수첩 {number}", noSave:"저장 기록 없음",
    endingCount:"수집한 엔딩 {found} / {total}", emptyAlbum:"첫 엔딩을 맞이하면 이곳에서 다시 볼 수 있습니다.",
    language:"게임 언어", upcoming:"준비 중", exitTitle:"게임을 종료했습니다",
    exitHint:"이제 이 탭을 닫으셔도 됩니다.",
    temporaryExit:"이 브라우저에서는 진행 상황이 임시로만 저장됩니다. 탭을 닫으면 이번 진행을 잃습니다."
  }
};
for(const [code,column] of [["en",0],["ja",1]]) {
  gameText[code]=Object.fromEntries(Object.entries(gameText.ko).map(([key,value])=>[key,editionLines[value][column]]));
}
const languageKey = "earl-phantomhive-maker-language";
let gameLanguage = "ko";
try {
  const saved = localStorage.getItem(languageKey);
  if (Object.hasOwn(gameText,saved)) gameLanguage = saved;
} catch {}
function gameString(key, values = {}) {
  const text = gameText[gameLanguage][key] ?? gameText.ko[key] ?? key;
  return text.replace(/\{(\w+)\}/g, (token,name) => values[name] ?? token);
}
function languageControls(onCover=false) {
  const options = Object.entries(gameLanguages).map(([code,name]) => {
    const ready = Object.hasOwn(gameText,code);
    return '<option lang="'+code+'" value="'+code+'"'+(ready?'':' disabled')+
      (code===gameLanguage?' selected':'')+'>'+name+(ready?'':' · '+gameString("upcoming"))+'</option>';
  }).join("");
  const pending = Object.entries(gameLanguages).filter(([code])=>!Object.hasOwn(gameText,code)).map(([,name])=>name);
  if(onCover)return '<div class="cover-language"><label lang="en" for="game-language">LANGUAGE</label><select id="game-language">'+options+'</select></div>';
  return '<section class="mixer language-setting"><label for="game-language">'+gameString("language")+'</label>'+
    '<select id="game-language">'+options+'</select>'+
    (pending.length?'<small>'+pending.join(" · ")+' — '+gameString("upcoming")+'</small>':'')+'</section>';
}
document.addEventListener("change", event => {
  const field = event.target;
  if (field.id!=="game-language" || !Object.hasOwn(gameText,field.value)) return;
  gameLanguage = field.value;
  document.documentElement.lang = gameLanguage;
  try { localStorage.setItem(languageKey,gameLanguage); } catch {}
  render();
  translateSubtree(document.body);
  document.getElementById("game-language")?.focus({preventScroll:true});
});

// Translate presentation only. Stats, save keys and event conditions stay in Korean.
const localizedNodes = new WeakMap();
const phraseBuckets = new Map();
for (const source of Object.keys(editionLines).sort((a,b)=>b.length-a.length)) {
  const initial=source[0];
  if(!phraseBuckets.has(initial)) phraseBuckets.set(initial,[]);
  phraseBuckets.get(initial).push(source);
}
function translatedLine(value) {
  if(gameLanguage==="ko" || !/[가-힣]/.test(value)) return value;
  const column=gameLanguage==="ja"?1:0;
  const lookup=source=>{
    if(!Object.hasOwn(editionLines,source))return null;
    let text=editionLines[source][column];
    if(gameLanguage==="en"){
      // Dialogue around inline emphasis can occupy separate text nodes.
      if(/^\s/.test(source) && /^[A-Za-z0-9“‘]/.test(text))text=source.match(/^\s+/)[0]+text;
      if(/\s$/.test(source) && /\S$/.test(text))text+=source.match(/\s+$/)[0];
    }
    return text;
  };
  const full=lookup(value);
  if(full)return full;
  const raw=value.trim(), exact=lookup(raw);
  if(exact) return value.replace(raw,()=>exact);
  const date=new Intl.DateTimeFormat(gameLanguage==="ja"?"ja-JP":"en-GB",{year:"numeric",month:"long",timeZone:"UTC"});
  const dynamic=value.replace(/(\d{4})년\s*(\d{1,2})월/g,(_,year,month)=>date.format(new Date(Date.UTC(+year,+month-1,1))))
    .replace(/왕실은 작위 승인을 보류했습니다\. 금고에 남은 돈은 (£[\d,]+)\. 도련님, 가문의 첫 장부는 어느 수첩에 보관하면 되겠습니까\?/g,(_,fund)=>column?`王室は爵位の承認を保留しました。金庫には${fund}。坊ちゃん、最初の帳簿はどの手帳にお納めしますか？`:`The Crown has deferred its decision on your title. The treasury holds ${fund}. Which notebook shall I use for our first ledger, my lord?`);
  let out="";
  for(let i=0;i<dynamic.length;) {
    const key=phraseBuckets.get(dynamic[i])?.find(k=>dynamic.startsWith(k,i));
    if(!key){out+=dynamic[i++];continue;}
    const segment=lookup(key);
    if(!column && /[A-Za-z0-9]$/.test(out) && /^[A-Za-z]/.test(segment))out+=" ";
    out+=segment;i+=key.length;
    // Korean labels can touch a variable amount or level without a space.
    if(!column && /[A-Za-z]$/.test(segment) && /^[0-9£]/.test(dynamic.slice(i,i+1)))out+=" ";
  }
  return out;
}
function translateNode(node) {
  const parent=node.parentElement;
  if(!parent || parent.closest("script,style,textarea,#game-language"))return;
  const previous=localizedNodes.get(node);
  const source=previous && node.data===previous.output?previous.source:node.data;
  const output=translatedLine(source);
  if(output!==node.data)node.data=output;
  if(output!==source)localizedNodes.set(node,{source,output});
  else localizedNodes.delete(node);
}
function translateSubtree(root) {
  if(root.nodeType===Node.TEXT_NODE){translateNode(root);return;}
  if(root.nodeType===Node.ELEMENT_NODE){
    translateAttributes(root);
    root.querySelectorAll("[aria-label],[title],[alt]").forEach(translateAttributes);
  }
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  while(walker.nextNode())translateNode(walker.currentNode);
}
const localizedAttributes = new WeakMap();
function translateAttributes(el){
  if(!el.matches("[aria-label],[title],[alt]"))return;
  const prior=localizedAttributes.get(el)||{};
  for(const attr of ["aria-label","title","alt"]){
    if(!el.hasAttribute(attr))continue;
    const current=el.getAttribute(attr), saved=prior[attr];
    const source=saved?.output===current?saved.source:current;
    const output=translatedLine(source);
    if(current!==output)el.setAttribute(attr,output);
    prior[attr]={source,output};
  }
  localizedAttributes.set(el,prior);
}
const languageObserver=new MutationObserver(records=>{
  if(gameLanguage==="ko")return;
  for(const record of records){
    if(record.type==="characterData")translateNode(record.target);
    else if(record.type==="attributes")translateAttributes(record.target);
    else for(const child of record.addedNodes)translateSubtree(child);
  }
});
if(document.body){
  languageObserver.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:["aria-label","title","alt"]});
  if(gameLanguage!=="ko")translateSubtree(document.body);
}
