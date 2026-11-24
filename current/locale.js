"use strict";

// A language becomes selectable when its game translation is ready to ship.
const gameLanguages = {ko:"한국어", ja:"日本語", en:"English"};
const gameText = {
  ko:{
    title:"팬텀하이브 백작 메이커", menu:"표지 메뉴", start:"게임 시작", continue:"이어하기",
    album:"앨범 기록", settings:"설정", exit:"나가기", backToCover:"표지로 돌아가기",
    autoSave:"자동 저장", notebook:"수첩 {number}", noSave:"저장 기록 없음",
    endingCount:"수집한 엔딩 {found} / {total}", emptyAlbum:"첫 엔딩을 맞이하면 이곳에서 다시 볼 수 있습니다.",
    language:"게임 언어", upcoming:"준비 중", exitTitle:"게임을 종료했습니다",
    exitHint:"이제 이 탭을 닫으셔도 됩니다.",
    temporaryExit:"이 브라우저에서는 진행 상황이 임시로만 저장됩니다. 탭을 닫으면 이번 진행을 잃습니다."
  }
};
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
  document.getElementById("game-language")?.focus({preventScroll:true});
});
