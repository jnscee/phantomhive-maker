"use strict";

// Vertical anchors are measured from the top at 400 px high. Horizontal anchors are percentages.
const standingProfiles={
  ciel:{"height":140,"eye":86,"jaw":132,"eyeX":50,"jawX":50,"glow":24,"crop":null},
  ciel11:{"height":146,"eye":79,"jaw":124,"eyeX":50,"jawX":50,"glow":24,"crop":null},
  ciel12:{"height":152,"eye":62,"jaw":108,"eyeX":50,"jawX":50,"glow":24,"crop":null},
  seb:{"height":186,"eye":68.1,"jaw":107.1,"eyeX":50,"jawX":50,"glow":24,"crop":{"x":44.41,"y":17.44,"size":51.52}},
  agni:{"height":193,"eye":53,"jaw":89,"eyeX":50,"jawX":50,"glow":null,"crop":null},
  bard:{"height":181,"eye":52,"jaw":98,"eyeX":50,"jawX":50,"glow":null,"crop":null},
  finny:{"height":163,"eye":68,"jaw":112,"eyeX":50,"jawX":50,"glow":null,"crop":null},
  mey:{"height":165,"eye":94,"jaw":139,"eyeX":50,"jawX":50,"glow":null,"crop":null},
  owl:{"height":165,"eye":77,"jaw":117,"eyeX":50,"jawX":50,"glow":null,"crop":null},
  snake:{"height":177,"eye":64,"jaw":109,"eyeX":50,"jawX":50,"glow":null,"crop":null},
  soma:{"height":171,"eye":74,"jaw":118,"eyeX":50,"jawX":50,"glow":null,"crop":null},
  tanaka:{"height":166,"eye":64,"jaw":108,"eyeX":50,"jawX":50,"glow":null,"crop":null},
  lau:{"height":178,"eye":62,"jaw":100.85,"eyeX":50,"jawX":50.61,"glow":24,"crop":null},
  liz11:{"height":144,"eye":87,"jaw":126,"eyeX":50,"jawX":50,"glow":null,"crop":null},
  liz12:{"height":150,"eye":78,"jaw":113,"eyeX":50,"jawX":50,"glow":null,"crop":null},
  liz13:{"height":156,"eye":89,"jaw":134,"eyeX":50,"jawX":50,"glow":null,"crop":null}
};
const guestStandingArt={lau:"assets/npc-lau.webp",liz11:"assets/npc-lizzy-11.webp",liz12:"assets/portraits/elizabeth-12.webp",liz13:"assets/npc-lizzy.webp"};
function cielStandingId(age){return age>=12?"ciel12":age===11?"ciel11":"ciel";}
function standingGeometry(profiles,id,age){
  const ref=profiles[cielStandingId(age)];
  const actor=profiles[id]??profiles.seb;
  const referenceScale=ref.height/186;
  if(["ciel","ciel11","ciel12"].includes(id)){
    const scale=actor.height/186;
    return {scale,window:scale};
  }
  const faceScale=referenceScale*(ref.jaw-ref.eye)/(actor.jaw-actor.eye);
  // In this pairing Elizabeth's crown sits just above Ciel's.
  if(id==="liz12"&&age===11)return {scale:faceScale*.93,window:referenceScale*1.018};
  const eyeLevel=referenceScale*(1-ref.eye/400)+(actor.height-ref.height)/215;
  const scale=Math.max(faceScale*(id.startsWith("liz")?1:1.08),eyeLevel/(1-actor.eye/400));
  return {scale,window:eyeLevel+scale*actor.eye/400};
}
function standingCamera(profiles,age){
  const heights=Object.keys(profiles).filter(id=>!["ciel","ciel11","ciel12"].includes(id))
    .map(id=>standingGeometry(profiles,id,age).window);
  return Math.min(1,.91/Math.max(...heights));
}
function standingHalo(radius){
  if(!radius)return "drop-shadow(0 0 0 transparent)";
  return "drop-shadow(0 0 "+(radius*7/24)+"px #eff8ff16) drop-shadow(0 0 "+radius+"px #c1e4ff27)";
}
