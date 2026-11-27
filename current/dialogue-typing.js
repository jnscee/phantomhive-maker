"use strict";

// Paint only the unread text transparent. Layout, Korean syllables, buttons and
// the complete sentence exposed to assistive technology stay intact.
(()=>{
  if(!globalThis.CSS?.highlights || !globalThis.Highlight || !Intl.Segmenter)return;
  const scene=document.getElementById("scene");
  const selector=[
    "#overture:not([hidden]) #opening-line",
    "#conversation:not([hidden]) .dialogue > p",
    "#conversation:not([hidden]) .award-dialogue-line > p",
    "#conversation:not([hidden]) .farewell-bubble > p",
    "#sheet:not([hidden]) .shop-talk > p",
    "#ciel-aside:not(:empty)"
  ].join(",");
  const segmenter=new Intl.Segmenter("ko",{granularity:"grapheme"});
  const highlightName="dialogue-unread";
  let line=null, textNode=null, displayedText="", signature="", started=0, frame=0;
  function reveal(){
    cancelAnimationFrame(frame);
    frame=0;
    CSS.highlights.delete(highlightName);
  }
  function sync(){
    const next=scene.querySelector(selector);
    if(!next||motionReduced()){
      reveal();line=textNode=null;signature="";return;
    }
    // A settings change may re-render the same passage, including the prologue
    // which keeps its span and replaces only its text node.
    // Localisation may update the same Text node in place. Its live Range then
    // collapses, so rebuild the grapheme offsets for the newly displayed text.
    const content=next.textContent;
    if(next===line && next.firstChild===textNode && content===displayedText)return;
    const key=next.id+"|"+next.parentElement.textContent;
    const same=key===signature;
    const complete=same&&!frame;
    reveal();
    line=next;textNode=next.firstChild;displayedText=content;signature=key;
    if(complete)return;
    if(!same)started=performance.now();
    const unread=new Highlight(),letters=[];
    const walker=document.createTreeWalker(line,NodeFilter.SHOW_TEXT);
    for(let node=walker.nextNode();node;node=walker.nextNode()){
      if(node.parentElement.closest("button,a")||!node.textContent.trim())continue;
      const range=document.createRange();
      range.selectNodeContents(node);unread.add(range);
      for(const {index,segment} of segmenter.segment(node.data)){
        letters.push([range,node,index+segment.length]);
      }
    }
    if(!letters.length)return;
    CSS.highlights.set(highlightName,unread);
    let shown=0;
    function tick(now){
      const count=Math.min(letters.length,1+Math.floor(Math.max(0,now-started)/24));
      while(shown<count){
        const [range,node,end]=letters[shown++];
        range.setStart(node,end);
      }
      if(count===letters.length)reveal();
      else frame=requestAnimationFrame(tick);
    }
    tick(performance.now());
  }
  const watch=new MutationObserver(sync);
  for(const id of ["conversation","overture","panel","ciel-aside"]){
    watch.observe(document.getElementById(id),{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:["hidden"]});
  }
  watch.observe(document.getElementById("sheet"),{attributes:true,attributeFilter:["hidden"]});
  watch.observe(document.documentElement,{attributes:true,attributeFilter:["data-game-motion"]});
  function finishOnInput(event){
    if(!frame||!line?.isConnected||window.getSelection()?.toString())return;
    const within=event.target.closest(".dialogue, .award-dialogue, .farewell-bubble, .shop-talk, #ciel-aside");
    const control=event.target.closest("button");
    const advance=control?.matches(".answers button,.line-next,#opening-read,#ciel-greet,[data-farewell=next],[data-action^='fair-result-next']");
    if(!(within?.contains(line)||advance||event.key==="ArrowRight"&&inOpening()))return;
    if(control&&!advance)return;
    reveal();
    if(inOpening()&&openingAuto){
      stopOpeningAuto();
      const auto=document.getElementById("opening-auto");
      auto.textContent="자동 재생";auto.setAttribute("aria-pressed","false");
    }
    if(recruitAuto){
      stopRecruitAuto();
      const auto=scene.querySelector('[data-read="auto"]');
      if(auto){auto.textContent="자동 재생";auto.setAttribute("aria-pressed","false");}
    }
    event.preventDefault();event.stopImmediatePropagation();
    if(event.isTrusted)musicPlayer.unlock();
  }
  document.addEventListener("click",finishOnInput,true);
  document.addEventListener("keydown",event=>{
    if(event.key==="ArrowRight"&&!event.altKey&&!event.ctrlKey&&!event.metaKey)finishOnInput(event);
  },true);
  sync();
})();
