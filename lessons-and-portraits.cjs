'use strict';
const {chromium,firefox}=require('playwright');
const assert=require('node:assert/strict');
const base='http://127.0.0.1:4173/';
async function openGame(page){
  // Exercise the bundled assets and fallback fonts without depending on a public font service.
  await page.route(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\//,route=>route.abort());
  await page.goto(base,{waitUntil:"domcontentloaded"});
}

async function dialogueAppearance(card){
  return card.evaluate(el=>{
    const properties=(node,keys)=>keys.map(key=>getComputedStyle(node)[key]);
    const typography=['fontFamily','fontSize','fontWeight','lineHeight','color'];
    return {
      surface:properties(el,['backgroundImage','borderTopColor','borderRadius','boxShadow','backdropFilter','paddingTop','paddingInlineStart']),
      speaker:properties(el.querySelector('small'),typography),
      body:properties(el.querySelector('p'),[...typography,'marginTop']),
      next:properties(el.querySelector('.line-next'),['fontSize','color','backgroundColor','borderWidth','minWidth','minHeight','padding'])
    };
  });
}
// Read a pixel of the actual composited glass with the scene art alternately black and white.
async function dialogueTransmission(card,contest){
  const page=card.page(),box=await card.boundingBox();
  const clip={x:Math.floor(box.x+box.width-25),y:Math.floor(box.y+box.height-12),width:1,height:1};
  const samples=[];
  for(const color of ['black','white']){
    const style=await page.addStyleTag({content:contest
      ? '.contest-screen {--contest-art:linear-gradient('+color+','+color+')!important}'
      : '#conversation > .review-room {background:'+color+'!important;filter:none!important} #conversation > .cast {visibility:hidden}'});
    try{
      const png=await page.screenshot({clip,animations:'disabled'});
      samples.push(await page.evaluate(async data=>{
        const img=await createImageBitmap(await (await fetch('data:image/png;base64,'+data)).blob());
        const canvas=document.createElement('canvas');canvas.width=canvas.height=1;
        const ctx=canvas.getContext('2d');ctx.drawImage(img,0,0);img.close();
        return Array.from(ctx.getImageData(0,0,1,1).data).slice(0,3);
      },png.toString('base64')));
    }finally{await style.evaluate(s=>s.remove());}
  }
  const transmission=samples[1].map((value,i)=>value-samples[0][i]);
  const theme=await page.locator('html').getAttribute('data-dialogue-theme');
  const [min,max]=theme==='dark'?[65,90]:[53,73];
  assert.ok(transmission.every(value=>value>=min&&value<=max),theme+' scene transmission through dialogue: '+JSON.stringify(samples));
  const ink=await card.evaluate(el=>['p','small'].map(tag=>getComputedStyle(el.querySelector(tag)).color.match(/[\d.]+/g).slice(0,3).map(Number)));
  const luminance=rgb=>rgb.map(channel=>{
    const n=channel/255;
    return n<=.04045?n/12.92:((n+.055)/1.055)**2.4;
  }).reduce((total,value,i)=>total+value*[.2126,.7152,.0722][i],0);
  for(const foreground of ink)for(const backdrop of samples){
    const [low,high]=[luminance(foreground),luminance(backdrop)].sort((a,b)=>a-b);
    assert.ok((high+.05)/(low+.05)>=4.5,'Text must remain legible over the glass: '+JSON.stringify([foreground,backdrop]));
  }
  return transmission;
}
async function checkMemoryAndWarning(browser,viewport){
  const page=await browser.newPage({viewport,reducedMotion:'reduce'});
  try{
    await openGame(page);
    const saved=await page.evaluate(()=>{
      const visit={kind:"visit",id:"visitGardenMorning",index:1,age:11};
      localStorage.setItem(scriptPrefix+JSON.stringify(visit),"1");
      return JSON.stringify([state,saves,Object.entries(localStorage).sort()]);
    });
    await page.locator('[data-action="cover:album"]').click();
    await page.getByRole('button',{name:'인물별 회상'}).click();
    await page.getByRole('button',{name:'피니안'}).click();
    assert.equal(await page.getByRole('button',{name:'대화록'}).count(),0);
    const event=page.locator('[data-action^="script-entry:"]');
    await event.click();
    await page.getByRole('button',{name:'건너뛰기'}).click();
    const choices=page.locator('#conversation > .answers');
    assert.equal(await choices.locator('button').count(),2);
    assert.equal(await choices.locator('.visit-chosen').getAttribute('data-action'),'script-choice:1');
    const replies=await page.evaluate(()=>scriptReplay.group.card.choices.map(c=>c.reply[1]));
    for(const index of [0,1]){
      await choices.locator('button').nth(index).click();
      assert.ok((await page.locator('#conversation .dialogue p').innerText()).includes(replies[index]));
      if(index===0)await page.getByRole('button',{name:'이전',exact:true}).click();
    }
    await page.getByRole('button',{name:'회상 마치기'}).click();
    assert.ok(await event.isVisible());
    assert.equal(await page.evaluate(()=>JSON.stringify([state,saves,Object.entries(localStorage).sort()])),saved);
    for(const [label,activity] of [['저택에서 쉰다','rest'],['예정대로 진행한다','study']]){
      await page.evaluate(()=>{
        state=initial();state.phase="plan";state.stress=72;state.plan=["study","rest","inquiry"];
        state.visit="none";tab="plan";execute();
      });
      const dialogue=page.locator('#conversation > .dialogue');
      assert.match(await dialogue.innerText(),/같은 줄/);
      assert.equal(await choices.count(),0);
      await dialogue.getByRole('button',{name:'다음 대사'}).click();
      assert.match(await dialogue.innerText(),/상순.*서재 수업/);
      assert.deepEqual(await page.evaluate(()=>[state.fund,state.stress]),[500,72]);
      await choices.getByRole('button',{name:label,exact:true}).click();
      assert.deepEqual(await page.evaluate(()=>[state.phase,state.sequence.activity,...state.plan]),
        ['scene',activity,activity,'rest','inquiry']);
    }
  }finally{await page.close();}
}
async function checkNotebook(page){
  await page.locator('#system-save').click();
  assert.equal(await page.locator('#sheet-title').innerText(),'저장 · 설정');
  assert.equal(await page.locator('.slot-save').count(),4);
  const slot=page.getByRole('group',{name:'저장 칸 1',exact:true});
  const load=slot.getByRole('button',{name:'불러오기'});
  assert.ok(await load.isDisabled());
  await slot.getByRole('button',{name:'저장',exact:true}).click();
  assert.equal(await slot.getAttribute('data-filled'),'true');
  assert.ok(await load.isEnabled());
  const storedBook=await page.evaluate(()=>localStorage.getItem(storageKey));
  for(const [code,heading] of [['en','Save & Settings'],['ja','セーブ・設定'],['ko','저장 · 설정']]){
    await page.locator('#game-language').selectOption(code);
    await page.waitForFunction(title=>document.getElementById('sheet-title').textContent===title,heading);
    assert.equal(await page.locator('html').getAttribute('lang'),code);
    assert.equal(await page.evaluate(()=>localStorage.getItem(storageKey)),storedBook);
  }
  await slot.getByRole('button',{name:'저장',exact:true}).click();
  assert.ok(await page.locator('#picker [data-action="confirm"]').isVisible());
  await page.getByRole('button',{name:'취소',exact:true}).click();

  for(const [kind,label] of [['bgm','배경음악'],['sfx','효과음']]){
    const slider=page.getByRole('slider',{name:label+' 음량'});
    await slider.press('Home');
    await slider.press('ArrowRight');
    assert.equal(await page.locator('#'+kind+'-value').innerText(),'1%');
    assert.equal(await slider.evaluate(e=>e.style.getPropertyValue('--volume')),'1%');
    const mute=page.locator('#toggle-'+kind);
    const before=await mute.getAttribute('aria-pressed');
    await mute.click();
    assert.notEqual(await mute.getAttribute('aria-pressed'),before);
    assert.equal(await slider.inputValue(),'1');
  }

  const layout=await page.locator('.motion-options').evaluate(options=>{
    const buttons=[...options.children];
    const rects=buttons.map(b=>b.getBoundingClientRect());
    return {fits:buttons.every(b=>b.scrollWidth<=b.clientWidth+1),
      rowGap:rects[1].top-rects[0].bottom,columnGap:rects[2].left-rects[1].right,
      overflow:document.querySelector('#panel').scrollWidth-document.querySelector('#panel').clientWidth};
  });
  assert.ok(layout.fits&&layout.rowGap>=6&&layout.columnGap>=6&&layout.overflow<=1,JSON.stringify(layout));
  await page.locator('[data-action="motion:reduced"]').click();
  assert.equal(await page.locator('[data-action="motion:reduced"]').getAttribute('aria-pressed'),'true');
  const light=page.getByRole('button',{name:'화이트',exact:true});
  assert.equal(await page.getByRole('button',{name:'다크',exact:true}).getAttribute('aria-pressed'),'true');
  assert.equal(await page.locator('html').getAttribute('data-dialogue-theme'),'dark');
  await light.click();
  const book=page.locator('.notebook-guide');
  await book.locator(':scope > summary').click();
  assert.equal(await book.locator('.guide-topic').count(),9);
  assert.equal(await book.getByText('왕실 심의와 교육',{exact:true}).count(),1);
  await book.locator('.guide-topic > summary').first().click();
  assert.ok(await book.locator('.guide-topic p').first().isVisible());
  const saved=await page.evaluate(()=>localStorage.getItem(storageKey));
  await book.locator('[data-action="open-guide"]').click();
  assert.ok(await page.locator('#guide-replay').isVisible());
  await page.locator('[data-action="guide-close"]').click();
  assert.equal(await page.evaluate(()=>localStorage.getItem(storageKey)),saved);
  await page.locator('.game-references summary').click();
  assert.deepEqual(await page.locator('.game-references li').allTextContents(),
    ['프린세스 메이커 3','카모카테 시리즈','카이로소프트 ‘○○○ 스토리’ 시리즈']);
  await load.click();
  await page.locator('#picker [data-action="confirm"]').click();
  assert.equal(await page.evaluate(()=>state.month),14);
}

async function checkClosingCredits(page){
  const roll=page.locator('.growth-roll');
  const references=roll.locator('section').filter({has:page.getByRole('heading',{name:'참고작품',exact:true})});
  assert.deepEqual(await references.locator('p').allTextContents(),['「Princess Maker 3」','「관을 가진 신의 손」','「Kairosoft 사 스토리 시리즈」']);
  assert.equal(await roll.locator('header img').count(),0);
  for(const year of await roll.locator('.growth-year').all()){
    const age=await year.locator('h3 small').textContent();
    assert.equal(await year.locator('h3 + img').getAttribute('alt'),age+'의 시엘');
  }
  const seal=roll.getByRole('img',{name:'만년필로 그린 붉은 하나마루'});
  assert.equal(await seal.locator('mask .ink-guide').count(),2);
  assert.ok(await seal.evaluate(svg=>Array.from(svg.querySelectorAll('path[mask]')).every(path=>{
    const reference=path.getAttribute('mask').slice(5,-1);
    return svg.querySelector('mask[id="'+reference+'"]')!==null;
  })));
  const thanks=roll.locator('section').filter({has:page.getByRole('heading',{name:'SPECIAL THANKS',exact:true})});
  assert.deepEqual(await thanks.locator('p').allTextContents(),['꼬','또쥐','Hato','우유']);
  assert.equal(await roll.locator(':scope > :last-child').textContent(),'끝');
}

async function checkRoomCamera(page,activity){
  await page.evaluate(id=>{
    state=initial();state.phase="plan";tab="plan";state.plan=[id,"study","walk"];state.visit="none";
    execute();stopPlayback();
  },activity);
  const image=page.locator("#playback .stage-room");
  await image.evaluate(async im=>{
    await im.decode();
    await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
  });
  const lesson=await image.evaluate(im=>{
    const box=e=>e.getBoundingClientRect().toJSON();
    return {fit:getComputedStyle(im).objectFit,position:getComputedStyle(im).objectPosition,file:im.src,aspect:im.naturalWidth/im.naturalHeight,art:box(im),actor:box(document.querySelector(".performer")),
      crop:box(document.querySelector(".lesson-art")),filter:getComputedStyle(im).filter};
  });
  await page.evaluate(()=>{state.phase="review";render();});
  const review=await page.locator("#conversation .review-room").evaluate(el=>({
    box:el.getBoundingClientRect().toJSON(),image:getComputedStyle(el).backgroundImage,
    size:getComputedStyle(el).backgroundSize,position:getComputedStyle(el).backgroundPosition,filter:getComputedStyle(el).filter
  }));
  assert.ok(review.image.includes(lesson.file));
  assert.equal(review.size,"cover");assert.equal(review.position,"50% 50%");
  assert.equal(lesson.filter,review.filter);
  const {box}=review;
  assert.equal(lesson.fit,review.size);assert.equal(lesson.position,review.position);
  for(const axis of ["x","y","width","height"]){
    assert.ok(Math.abs(lesson.art[axis]-box[axis])<2,JSON.stringify({activity,lesson,review,axis}));
  }
  const paintedHeight=Math.max(box.height,box.width/lesson.aspect);
  const actorRatio=activity==="exercise" ? .42 : .255;
  assert.ok(Math.abs(lesson.actor.height-Math.min(paintedHeight*actorRatio,lesson.crop.width*.82))<2,JSON.stringify({activity,lesson,review}));
  assert.ok(lesson.actor.left>=lesson.crop.left-1&&lesson.actor.right<=lesson.crop.right+1);
}

async function checkMonthlyScreens(page){
  await page.evaluate(()=>{
    state=initial();tab="plan";state.phase="plan";
    state.month=state.planMonth=2;state.salesBook.push({month:1,product:"toys",sold:2,revenue:20,cost:10});
    state.plan=["exercise","exercise","exercise"];state.visit="company";
    execute();stopPlayback();state.sequence.index=2;state.phase="review";render();
  });
  const review=page.locator(".review-slip");
  assert.match(await review.innerText(),/지구력/);
  assert.match(await review.innerText(),/컨디션/);
  assert.equal(await review.locator("button").innerText(),"자유행동으로");
  await review.locator("button").click();
  await page.evaluate(()=>{state.sequence.visitEvent="visitCompanyBox";state.sequence.encounterPage=0;render();});
  const dialogue=page.locator("#conversation article.dialogue"), toggle=page.locator("#dialogue-visibility");
  await dialogue.locator(".line-next").click();
  assert.equal(await dialogue.locator("small").innerText(),"시엘");
  assert.equal(await dialogue.locator("h2").count(),0);
  const date=await page.locator("#date").boundingBox(),control=await toggle.boundingBox();
  assert.ok(control);
  if(date)assert.ok(control.x+control.width<=date.x||control.x>=date.x+date.width||control.y>=date.y+date.height||control.y+control.height<=date.y);
  await toggle.click();assert.ok(!await dialogue.isVisible());await toggle.click();
  await dialogue.locator("p").click();
  assert.equal(await dialogue.locator("small").innerText(),"세바스찬");
  await dialogue.locator(".line-next").click();
  assert.equal(await page.locator("#conversation .answers [data-action^='visit-choice:']").count(),2);
  await page.evaluate(()=>{
    state=initial();state.phase="plan";state.shop.works=2;tab="company";selectedDepartment="works";render();
  });
  await page.locator('[data-action="station:design"]').click();
  const plan=page.locator('.prototype-plan');
  assert.equal(await plan.locator('fieldset').count(),3);
  await plan.locator('[data-action="brief:gift"]').click();
  assert.equal(await plan.locator('[data-action="brief:gift"]').getAttribute('aria-pressed'),'true');
  await page.locator('[data-action="develop:sweets"]').click();
  assert.equal(await plan.locator('.prototype-spec').count(),3);
  assert.match(await plan.innerText(),/월말 검수 예정/);
  assert.ok(await plan.evaluate(el=>el.scrollWidth<=el.clientWidth+1));
  await page.locator('[data-action="station:works"]').click();
  const box=page.locator(".facility-actions");
  const sale=await box.locator('[data-action^="liquidate:"]').boundingBox(),row=await box.boundingBox();
  assert.ok(Math.abs(sale.x+sale.width-row.x-row.width)<2);
  await box.locator('[data-action^="liquidate:"]').click();
  const buttons=await page.locator("#picker .panel-body>.inline>button").evaluateAll(items=>items.map(e=>[e.offsetWidth,e.offsetHeight]));
  assert.equal(buttons.length,2);
  assert.ok(Math.abs(buttons[0][0]-buttons[1][0])<=1&&buttons[0][1]===buttons[1][1]);
  await page.locator('#picker .panel-body [data-action="close"]').click();
  await page.evaluate(()=>{tab="home";render();});
  const mark=await page.locator("#money .sign-mark").evaluate(el=>{
    const glyph=getComputedStyle(el,"::after");
    return [parseFloat(glyph.width),parseFloat(glyph.height)];
  });
  assert.ok(mark.every(size=>Math.abs(size-13.6)<.1),JSON.stringify(mark));
}

async function check(browserType){
  const browser=await browserType.launch({headless:true,...(browserType===chromium&&process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
  try{
    await require("./tools/content-editor/story-flow-check.cjs")(browser,base);
    for(const viewport of [{width:1280,height:800},{width:390,height:844}]){
      await checkMemoryAndWarning(browser,viewport);
      const page=await browser.newPage({viewport,reducedMotion:'reduce'});
      const errors=[];page.on('pageerror',error=>{errors.push(error.message);console.error('Browser error:',error.message);});
      page.setDefaultTimeout(12000); console.log(browserType.name(),viewport.width);
      await openGame(page);
      assert.ok(await page.locator('.book-cover').isVisible());
      const notice=page.locator('.book-cover .cover-notice');
      const aiNotice=page.locator('.cover-ai-notice');
      assert.ok(await aiNotice.isVisible());
      assert.match(await aiNotice.innerText(),/생성형 AI/);
      assert.match(await notice.innerText(),/『흑집사』 비공식 2차 창작 팬게임/);
      assert.match(await notice.innerText(),/원작과 다른 IF 세계관/);
      assert.match(await notice.innerText(),/허구이며 현실과 무관합니다/);
      const coverFits=await notice.evaluate(el=>{
        const bounds=document.querySelector('#panel').getBoundingClientRect();
        const note=el.getBoundingClientRect();
        return note.left>=bounds.left-1 && note.right<=bounds.right+1 &&
          note.top>=bounds.top-1 && note.bottom<=bounds.bottom+1;
      });
      assert.ok(coverFits,'The fan game notice must be visible when the cover opens');
      await page.locator('[data-action="cover:settings"]').click();
      assert.equal(await page.getByRole('button',{name:'다크',exact:true}).getAttribute('aria-pressed'),'true');
      await page.getByRole('button',{name:'화이트',exact:true}).click();
      await page.reload({waitUntil:'domcontentloaded'});
      assert.equal(await page.locator('html').getAttribute('data-dialogue-theme'),'light');
      await page.locator('[data-action="cover:settings"]').click();
      assert.equal(await page.getByRole('button',{name:'화이트',exact:true}).getAttribute('aria-pressed'),'true');
      await page.locator('.cover-leaf [data-action="back"]').click();
      const storyAppearance={},storyTransmission={};
      const weatherPage=await browser.newPage({viewport});
      await openGame(weatherPage);
      for(const [month,weather,label] of [[6,"heat","폭염"],[12,"cold","한파"]]){
        await weatherPage.evaluate(({month,weather})=>{
          state=initial();state.month=state.planMonth=month;state.weather=weather;
          state.phase="weatherBriefing";tab="plan";render();
        },{month,weather});
        const dialogue=weatherPage.locator('#conversation .dialogue');
        assert.equal(await dialogue.locator('small').innerText(),'세바스찬');
        assert.equal(await dialogue.locator('h2').innerText(),label);
        if(await weatherPage.evaluate(()=>Boolean(CSS.highlights && globalThis.Highlight))){
          await weatherPage.waitForFunction(()=>CSS.highlights.has('dialogue-unread'));
          await dialogue.locator('p').click({position:{x:4,y:4}});
          assert.equal(await weatherPage.evaluate(()=>state.phase),"weatherBriefing");
          assert.ok(await weatherPage.evaluate(()=>!CSS.highlights.has('dialogue-unread')));
        }
        if(weather==='heat'){
          for(const theme of ['dark','light']){
            await weatherPage.evaluate(theme=>document.documentElement.dataset.dialogueTheme=theme,theme);
            storyAppearance[theme]=await dialogueAppearance(dialogue);
            if(viewport.width===1280)storyTransmission[theme]=await dialogueTransmission(dialogue,false);
          }
        }
        await dialogue.getByRole('button',{name:'다음 대사'}).press('Enter');
        assert.equal(await weatherPage.evaluate(()=>state.phase),"plan");
        await weatherPage.evaluate(()=>{tab="plan";render();});
        await weatherPage.getByRole('button',{name:label+' 소식'}).click();
        const bulletin=weatherPage.locator('#season-bulletin');
        assert.ok(await bulletin.isVisible());
        assert.equal(await bulletin.locator('small').innerText(),'세바스찬');
        assert.match(await bulletin.locator('p').innerText(),/도련님/);
        assert.equal(await bulletin.locator('dl').count(),0);
        assert.doesNotMatch(await bulletin.innerText(),/×|£|스트레스/);
        await bulletin.getByRole('button',{name:'닫기'}).click();
        assert.ok(await bulletin.isHidden());
      }
      await weatherPage.evaluate(()=>{
        state=initial();state.month=state.planMonth=26;state.phase="plan";tab="plan";editingVisit=true;
        state.visit="parlor";state.flags.audience=true;state.plan=["rest","dance","rest"];render();
      });
      const visitNote=weatherPage.locator("#calendar .visit-note");
      assert.equal(await visitNote.innerText(),"만날 수 있는 사람: 세바스찬 / 교류 시 가능 · 엘리자베스 「반주자가 없는 왈츠」");
      assert.ok(await visitNote.evaluate(note=>{
        const frame=note.closest("#calendar").getBoundingClientRect();
        const text=document.createRange();text.selectNodeContents(note);
        return [...text.getClientRects()].every(r=>r.left>=frame.left-1 && r.right<=frame.right+1 && r.top>=frame.top-1 && r.bottom<=frame.bottom+1);
      }),"The visit forecast must fit the calendar at "+viewport.width+"px");
      await weatherPage.close();
      const creditPage=await browser.newPage({viewport});
      await openGame(creditPage);
      await creditPage.evaluate(()=>{
        state=initial();state.fund=-10;state.phase="plan";state.plan=["study","study","study"];state.visit="none";tab="plan";render();
      });
      const forecast=await creditPage.locator("#calendar .calendar-note").innerText();
      assert.match(forecast,/지구력\s*↓/);
      assert.doesNotMatch(forecast,/기준|[+−-]\d/);
      assert.match(await creditPage.evaluate(()=>statusPanel()),/aria-label="(?:소폭|중간|대폭) 상승">↑/);
      await creditPage.locator('.calendar-run').click();
      assert.match(await creditPage.locator('#picker').innerText(),/외상/);
      await creditPage.locator('#picker [data-action="confirm"]').click();
      assert.equal(await creditPage.evaluate(()=>state.phase),"scene");
      assert.equal(await creditPage.evaluate(()=>state.fund),-30);
      await creditPage.close();
      const fairPage=await browser.newPage({viewport});
      await fairPage.goto(base+'?fair-preview=newYear-1887&entry=1');
      await fairPage.evaluate(()=>{
        state.stats.매력=300;
        delete state.sequence.duel;
        prepareContest(state);
      });
      assert.equal(await fairPage.locator('.duel-plate b').first().textContent(),'에드워드 미드포드');
      for(const theme of ['dark','light']){
        await fairPage.evaluate(theme=>document.documentElement.dataset.dialogueTheme=theme,theme);
        assert.deepEqual(await dialogueAppearance(fairPage.locator('.duel-screen .dialogue')),storyAppearance[theme],
          'Contest and story dialogue must share their reading styles in '+theme+' at '+viewport.width+'px');
        if(viewport.width===1280){
          const sample=await dialogueTransmission(fairPage.locator('.duel-screen .dialogue'),true);
          assert.ok(sample.every((value,i)=>Math.abs(value-storyTransmission[theme][i])<=4),'Contest glass should transmit as much of the set as ordinary dialogue');
        }
      }
      await fairPage.emulateMedia({reducedMotion:'reduce'});
      await fairPage.waitForFunction(()=>document.documentElement.dataset.gameMotion==='gentle' && !CSS.highlights?.has('dialogue-unread'));
      await fairPage.locator('.duel-portrait').evaluate(img=>img.decode());
      assert.equal(await fairPage.locator('[data-action^="fair-play"]').count(),0);
      await fairPage.locator('.dialogue [data-action="fair-next:0"]').click();
      assert.equal(await fairPage.locator('.duel-screen .dialogue small').textContent(),'시엘');
      assert.match(await fairPage.locator('.duel-screen .dialogue p').innerText(),/인정해 달랬어/);
      await fairPage.locator('.dialogue [data-action="fair-next:1"]').click();
      const cue=fairPage.locator('.duel-screen .dialogue');
      assert.match(await cue.innerText(),/사회자가 다음 차례인 시엘을 부릅니다/);
      assert.equal(await cue.locator('small').count(),0);
      assert.equal(await fairPage.locator('.duel-side:last-child .duel-plate strong').innerText(),'차례 대기');
      const checkReadingInset=async()=>{
        const inset=await cue.evaluate(card=>{
          const stage=document.getElementById('scene');
          const actual=stage.getBoundingClientRect().bottom-card.getBoundingClientRect().bottom;
          const expected=matchMedia('(max-width:960px) and (orientation:portrait),(max-width:540px)').matches?16:stage.clientHeight*.065;
          return {actual,expected};
        });
        assert.ok(Math.abs(inset.actual-inset.expected)<=3,'Contest dialogue frame inset: '+JSON.stringify(inset));
      };
      await checkReadingInset();
      if(viewport.width===1280){
        await fairPage.setViewportSize({width:940,height:644});
        await fairPage.waitForFunction(()=>{
          const stage=document.getElementById('scene');
          const card=stage.querySelector('.duel-screen .dialogue');
          const inset=stage.getBoundingClientRect().bottom-card.getBoundingClientRect().bottom;
          return Math.abs(inset-stage.clientHeight*.065)<=3;
        });
        await checkReadingInset();
        await fairPage.setViewportSize(viewport);
      }
      await cue.locator('[data-action="fair-next:handoff"]').click();
      assert.equal(await fairPage.locator('.duel-side:last-child .duel-plate strong').innerText(),'심사 중');
      assert.match(await fairPage.locator('.duel-screen .dialogue p').innerText(),/그 잔은|우유를|첫 잔은/);
      await fairPage.locator('.dialogue [data-action="fair-next:2"]').click();
      assert.ok(await fairPage.locator('[data-action="fair-close"]').isVisible());
      const award=fairPage.getByRole('article',{name:'경연 결과'});
      assert.equal(await award.locator('h3').innerText(),'승리');
      assert.match(await award.locator('.award-total').innerText(),/\d+점/);
      assert.equal(await award.locator('.award-parts').count(),0);
      assert.doesNotMatch(await award.innerText(),/승률|[×]/);
      assert.equal(await award.locator('.award-gain').count(),2);
      assert.match(await award.locator('.award-purse').innerText(),/상금 £/);
      // The public fair-preview route must allow result pagination without settling again.
      const awardLayout=await fairPage.locator('.duel-result').evaluate(screen=>{
        const card=screen.querySelector('.award-sheet');
        const side=screen.querySelector('.duel-side:last-child');
        const plate=side.querySelector('.duel-plate').getBoundingClientRect();
        const sprite=side.querySelector('.contest-actor img').getBoundingClientRect();
        return card.scrollWidth<=card.clientWidth+1&&sprite.bottom<=plate.top+1&&
          plate.bottom<=card.getBoundingClientRect().top+1;
      });
      assert.ok(awardLayout,'Result card and character nameplates must remain unobstructed');
      assert.equal(await award.locator('.award-dialogue').count(),0);
      const lines=await fairPage.evaluate(()=>contestClosingLines(pendingEvent().contest,state.fairBook[pendingEvent().contest.id]));
      const narration=await fairPage.evaluate(()=>contestResultLine(pendingEvent().contest,state.fairBook[pendingEvent().contest.id]));
      assert.deepEqual(lines[0],["",narration]);
      assert.ok(!(await award.innerText()).includes(narration));
      await award.getByRole('button',{name:'결과창 닫기',exact:true}).click();
      const reading=fairPage.locator('#conversation > article.dialogue');
      assert.ok(await reading.isVisible());
      assert.equal(await reading.locator('p').evaluate(e=>getComputedStyle(e).color),'rgb(23, 45, 70)');
      assert.equal(await fairPage.locator('#conversation .duel-stage').count(),0);
      assert.ok(await fairPage.locator('#conversation > .review-room').isVisible());
      for(const [page,[speaker,line]] of lines.entries()){
        assert.equal(await award.count(),0);
        if(speaker)assert.equal(await reading.locator('small').innerText(),speaker);
        else assert.equal(await reading.locator('small').count(),0);
        assert.ok((await reading.locator('p').innerText()).includes(line));
        await reading.locator('[data-action="fair-closing-next:'+page+'"]').click();
      }
      assert.equal(await reading.locator('[data-action^="fair-closing-next"]').count(),0);
      for(const [margin,label] of [[-8,'패배'],[0,'공동 우승']]){
        await fairPage.goto(base+'?fair-preview=newYear-1887&entry=0');
        const expected=await fairPage.evaluate(margin=>{
          const fair=pendingEvent().contest,duel=state.sequence.duel;
          duel.judgment.score=duel.rivalScore+margin;
          settleFestival(state,duel);render(true);
          const script=contestResultScene(fair,state.fairBook[fair.id]);
          return [["",script.narration],...script.lines];
        },margin);
        assert.equal(await award.locator('h3').innerText(),label);
        assert.equal(await award.locator('.dialogue').count(),0);
        await award.getByRole('button',{name:'결과창 닫기'}).click();
        for(const [index,[speaker,line]] of expected.entries()){
          assert.equal(await award.count(),0);
          assert.equal(await reading.locator('small').allTextContents().then(names=>names.join('')),speaker);
          assert.ok((await reading.innerText()).includes(line));
          await reading.locator('[data-action="fair-closing-next:'+index+'"]').click();
        }
        assert.equal(await reading.locator('[data-action^="fair-closing-next"]').count(),0);
      }
      await fairPage.close();
      assert.equal(await page.locator('#overture').isVisible(),false);
      await page.locator('.book-cover [data-action="reset"]').click();
      await page.locator('#dialogue-visibility').click();
      const prologue=await page.locator('#opening-line').textContent();
      assert.equal(await page.locator('#opening-dialogue').isVisible(),false,JSON.stringify(await page.evaluate(()=>({state:document.getElementById('scene').dataset.artOnly,pressed:document.getElementById('dialogue-visibility').getAttribute('aria-pressed'),mat:document.querySelector('.opening-mat').hidden,errors:document.getElementById('launch-help').hidden}))));
      await page.locator('#dialogue-visibility').click();
      assert.equal(await page.locator('#opening-line').textContent(),prologue);
      assert.equal(await page.evaluate(()=>openingAuto),false);
      await page.locator('#opening-skip').click();
      assert.match(await page.locator('#opening-line').textContent(),/어느 수첩에 보관/);
      await page.locator('#opening-slots [data-action="contract-slot:1"]').click();
      assert.match(await page.locator('#opening-line').textContent(),/타나카가 서재 문을 두드렸다/);
      assert.equal(await page.locator('#opening-slots').isVisible(),false);
      assert.deepEqual(await page.evaluate(()=>[state.phase,saves[1].phase]),['contract','contract']);
      await page.locator('#opening-next').click();
      assert.equal(await page.locator('#opening-speaker').textContent(),'타나카');
      await page.locator('#opening-next').click();
      const handoffLine=await page.locator('#opening-line').textContent();
      assert.match(handoffLine,/회중시계/);
      await page.evaluate(()=>{state=normalizeSave(saves.auto);render();});
      assert.equal(await page.locator('#opening-line').textContent(),handoffLine);
      const remaining=await page.evaluate(()=>openingLines.length-openingIndex());
      for(let i=0;i<remaining;i++)await page.locator('#opening-next').click();
      assert.ok(await page.locator('#guide-replay').isVisible());
      assert.deepEqual(await page.evaluate(()=>[tourSession.saves.auto.phase,tourSession.saves[1].phase]),['guide','guide']);
      const forward=page.locator('#guide-replay [data-action="guide-forward"]');
      await forward.click();
      await forward.click();
      const checkpoint=await page.locator('#guide-replay-title').innerText();
      for(const slot of ['1','auto']){
        await page.reload();
        await page.locator('[data-action="cover:continue"]').click();
        await page.locator(slot==='auto'?'[data-action="resume"]':'[data-action="load:1"]').click();
        if(slot!=='auto')await page.locator('#picker [data-action="confirm"]').click();
        assert.equal(await page.locator('#guide-replay-title').innerText(),checkpoint);
        assert.deepEqual(await page.evaluate(()=>[tourPage,tourSession.state.guideStep]),[2,2]);
        assert.equal(await page.evaluate(()=>tourSession.state.people.mey),undefined);
      }
      assert.equal(await page.evaluate(()=>recruitScenes.homecoming.lines.some(line=>line.text.includes('회중시계'))),false);
      await page.locator('#guide-replay [data-action="guide-close"]').click();
      if(viewport.width===390){
        for(const [width,height,month] of [[319,866,14],[375,667,1],[390,844,26],[430,932,14]]){
          const phone=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
          await openGame(phone);
          await phone.evaluate(month=>{
            state=initial();state.month=state.planMonth=month;state.phase='plan';tab='home';render();
          },month);
          await phone.locator('#home-standing').evaluate(im=>im.decode());
          await phone.locator('#nav button').first().click({trial:true});
          const geometry=await phone.evaluate(async()=>{
            await document.fonts.ready;
            await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
            const box=e=>e.getBoundingClientRect();
            const scene=box(document.querySelector('#scene')),menu=box(document.querySelector('#nav'));
            const keys=[...document.querySelectorAll('#nav button')],rail=[...document.querySelectorAll('#system-menu button')];
            const rects=rail.map(box),portrait=box(document.querySelector('#home-standing'));
            const centerHits=keys.every(key=>{
              const b=box(key);return document.elementFromPoint(b.x+b.width/2,b.y+b.height/2)?.closest('button')===key;
            });
            return {
              left:menu.left-scene.left,right:scene.right-menu.right,join:portrait.bottom-menu.top,
              centerHits,rows:rects.map(b=>Math.round(b.top)),widths:rects.map(b=>Math.round(b.width)),
              smallest:Math.min(...[...keys,...rail].map(b=>box(b).height)),rightEdge:Math.max(...rects.map(r=>r.right))
            };
          });
          assert.ok(Math.abs(geometry.left-geometry.right)<2&&geometry.left>=0&&geometry.left<12,JSON.stringify(geometry));
          assert.ok(geometry.join>=-1&&geometry.join<=10&&geometry.centerHits,JSON.stringify(geometry));
          assert.equal(geometry.rows.length,6);
          assert.deepEqual(geometry.rows,[...Array(3).fill(geometry.rows[0]),...Array(3).fill(geometry.rows[5])]);
          assert.ok(geometry.rows[5]>geometry.rows[0]&&Math.max(...geometry.widths)-Math.min(...geometry.widths)<=1);
          assert.ok(geometry.smallest>=44&&geometry.rightEdge<=width);
          if(width===319){
            await checkNotebook(phone);
            await checkRoomCamera(phone,"study");
            await checkRoomCamera(phone,"exercise");
          }
          await phone.close();
        }
      }
      for(const activity of ["study","exercise"])await checkRoomCamera(page,activity);
      await checkMonthlyScreens(page);
      for(const [month,age] of [[1,10],[14,11],[26,12]]){
        await page.evaluate(month=>{state=initial();state.month=month;state.planMonth=month;state.phase='plan';tab='home';render();},month);
        const portrait=page.locator('#ciel-greet > #home-standing');
        await portrait.evaluate(im=>im.decode());
        const file=age===10?'ciel.png':'ciel-'+age+'.webp';
        assert.ok((await portrait.getAttribute('src')).endsWith(file));
        if(age===10)assert.doesNotMatch(await portrait.evaluate(im=>getComputedStyle(im).filter),/ciel-tailoring/);
        await page.locator('#system-save').click();
        await page.locator('[data-action="motion:full"]').click();
        await page.locator('#system-back').click();
        const geometry=await portrait.evaluate(im=>{
          const r=im.getBoundingClientRect(),b=im.parentElement.getBoundingClientRect();
          const point={x:r.x+r.width*.52,y:r.y+r.height*.32};
          return {point,w:r.width,h:r.height,bw:b.width,bh:b.height,aspect:im.naturalWidth/im.naturalHeight,
            hit:document.elementFromPoint(point.x,point.y)?.closest('button')?.id};
        });
        assert.ok(geometry.w>30&&geometry.h>50);
        assert.ok(Math.abs(geometry.w-geometry.bw)<1&&Math.abs(geometry.h-geometry.bh)<1);
        assert.ok(Math.abs(geometry.w-geometry.h*geometry.aspect)<1,JSON.stringify(geometry));
        assert.equal(geometry.hit,'ciel-greet');
        await page.mouse.click(geometry.point.x,geometry.point.y);
        assert.ok(await page.locator('#ciel-aside').textContent());
        assert.equal(await portrait.evaluate(e=>getComputedStyle(e).animationName),'ciel-greeting-hop');
        await page.locator('#ciel-greet').press('Enter');
        await page.locator('#nav [data-action="tab:plan"]').click();
        const planned=await page.evaluate(()=>JSON.stringify(state.plan));
        const statusButton=page.locator('#system-status'),drawer=page.locator('#status-drawer');
        await statusButton.click();
        assert.equal(await page.evaluate(()=>tab),'plan');
        assert.equal(await statusButton.getAttribute('aria-expanded'),'true');
        assert.ok((await drawer.innerText()).includes('편성한 일정의 예상 변동'));
        assert.equal(await drawer.locator('.attribute:not(.attr-label)').count(),7);
        const changes=await drawer.locator('.meter em, .attribute:not(.attr-label) em').allTextContents();
        assert.ok(changes.length===10&&changes.every(value=>/^(↑{1,3}|↓{1,3}|–)$/.test(value)),JSON.stringify(changes));
        await statusButton.click();
        assert.equal(await drawer.isVisible(),false);
        await statusButton.click();
        await page.locator('#system-back').click();
        assert.equal(await drawer.isVisible(),false);
        assert.equal(await page.evaluate(()=>tab),'plan');
        assert.equal(await page.evaluate(()=>JSON.stringify(state.plan)),planned);
        await page.locator('#system-save').click();
        await page.locator('.notebook-guide > summary').click();
        await page.locator('.notebook-guide [data-action="open-guide"]').click();
        assert.ok((await page.locator('#home-standing').getAttribute('src')).endsWith(file));
        await page.locator('[data-action="guide-close"]').click();
        assert.equal(await page.evaluate(()=>state.month),month);
      }
      await page.evaluate(()=>{state=initial();state.phase='plan';tab='estate';render();});
      const londonTab=page.getByRole('button',{name:'타운하우스',exact:true});
      assert.equal(await londonTab.count(),0);
      await page.evaluate(()=>{state.flags.townhouse=true;render();});
      await londonTab.click();
      assert.doesNotMatch(await page.locator('.london-board').innerText(),/소마|아그니|합류/);
      assert.equal(await page.evaluate(()=>sourceNote({id:'visitPrince'})),'');
      await page.evaluate(()=>{recruit('soma');recruit('agni');render();});
      for(const id of ['soma','agni']){
        const host=page.locator('[data-employee="'+id+'"] img');
        assert.equal(await host.getAttribute('src'),'assets/portraits/'+id+'.webp');
        await host.evaluate(im=>im.decode());
      }
      await page.locator('[data-employee="soma"]').click();
      await page.locator('[data-duty="salon"]').click();
      await page.locator('[data-employee="agni"]').click();
      await page.locator('[data-duty="kitchen"]').click();
      assert.ok((await page.locator('.london-request').innerText()).includes('준비 완료'));
      await page.reload();
      await page.locator('[data-action="cover:continue"]').click();await page.locator('[data-action="resume"]').click();
      await page.locator('#nav [data-action="tab:estate"]').click();
      assert.equal(await page.locator('[data-duty="salon"] em').textContent(),'소마');
      assert.equal(await page.locator('[data-duty="kitchen"] em').textContent(),'아그니');
      await page.evaluate(()=>{state=initial();state.phase='plan';tab='home';render();});
      await page.locator('#nav [data-action="tab:plan"]').click();
      const buttonFinish=button=>button.evaluate(el=>{
        const css=getComputedStyle(el);
        return [css.backgroundImage,css.color,css.borderTopColor,css.borderRadius,css.boxShadow,css.backdropFilter];
      });
      const activity=page.locator('#calendar .lesson[aria-pressed="false"]:enabled').first();
      await page.mouse.move(0,0);
      const baseFinish=await buttonFinish(activity);
      await activity.click();
      await page.mouse.move(0,0);
      const activeFinish=await buttonFinish(page.locator('#calendar .lesson[aria-pressed="true"]').first());
      await page.locator('#system-book').click();
      assert.ok(await page.locator('#sheet').isVisible());
      assert.ok((await page.locator('#sheet').evaluate(e=>+getComputedStyle(e).zIndex))>(await page.locator('#date').evaluate(e=>+getComputedStyle(e).zIndex)));
      await page.evaluate(()=>{tab='market';render();});
      assert.equal(await page.locator('.goods-ticket').count(),await page.evaluate(()=>Object.keys(marketGoods).length));
      const lauFit=await page.locator('.lau-standing img').evaluate(async image=>{
        await image.decode();
        const art=image.getBoundingClientRect(),frame=image.parentElement.getBoundingClientRect();
        const shelf=document.querySelector('.goods-list').getBoundingClientRect();
        const phone=matchMedia('(orientation:portrait) and (max-width:650px)').matches;
        const floor=phone?document.querySelector('.shop-purchase').getBoundingClientRect().top:
          document.querySelector('.shop-talk').getBoundingClientRect().top;
        const css=getComputedStyle(image);
        return {width:art.width,contained:css.objectFit==='contain',bottomAligned:css.objectPosition==='50% 100%',
          fits:art.left>=frame.left-1&&art.right<=frame.right+1,atFloor:Math.abs(Math.min(art.bottom,frame.bottom)-floor)<=2,
          clearOfShelf:phone?frame.top>=shelf.bottom-1:frame.left>=shelf.right-1};
      });
      assert.ok(lauFit.width>0&&lauFit.contained&&lauFit.fits,JSON.stringify(lauFit));
      assert.ok(lauFit.bottomAligned&&lauFit.atFloor&&lauFit.clearOfShelf,JSON.stringify(lauFit));
      await page.mouse.move(0,0);
      assert.deepEqual(await buttonFinish(page.locator('.goods-ticket[aria-pressed="false"]').first()),baseFinish);
      assert.deepEqual(await buttonFinish(page.locator('.goods-ticket[aria-pressed="true"]')),activeFinish);
      const charmBefore=await page.evaluate(()=>state.stats.매력);
      await page.locator('[data-action="goods:birds"]').click();
      await page.locator('[data-action="buy:birds"]').click();
      assert.ok(await page.evaluate(()=>state.stats.매력)>charmBefore);
      assert.equal(await page.locator('[data-action="shop-mode:sell"], [data-action^="shop-sell:"]').count(),0);
      await page.evaluate(()=>{tab='plan';state.plan=['exercise','study','walk'];state.visit='none';execute();});
      await page.locator('.performer img').evaluate(im=>im.decode());
      assert.equal(await page.locator('.lesson-plane').getAttribute('data-room'),await page.evaluate(()=>choreography.exercise[0]));
      assert.ok(await page.locator('.performer').evaluate(e=>e.getBoundingClientRect().height>10&&getComputedStyle(e).animationName!=='none'));
      assert.ok(await page.evaluate(()=>!state.lessonKit?.exercise));
      const first=await page.locator('.performer img').getAttribute('src');
      await page.waitForFunction(src=>document.querySelector('.performer img')?.getAttribute('src')!==src,first,{timeout:3800});
      await page.evaluate(()=>{state.phase='plan';tab='save';render();});
      await page.locator('[data-action="motion:reduced"]').click();
      await page.reload();
      assert.equal(await page.locator('html').getAttribute('data-game-motion'),'reduced');
      // Enter the normal last month at either side of the will boundary and with either royal verdict.
      const vowThreshold=await page.evaluate(()=>vengeanceWill);
      for(const [will,approved,id] of [
        [vowThreshold-1,true,'releaseTitle'],[vowThreshold,true,'vowTitle'],
        [vowThreshold-1,false,'releaseNoTitle'],[vowThreshold,false,'vowNoTitle']
      ]){
        await page.evaluate(({will,approved})=>{
          state=initial();state.month=state.planMonth=35;state.phase='result';tab='plan';
          for(const person of ['finny','mey','bard','tanaka','snake'])recruit(person);
          Object.assign(state.stats,Object.fromEntries(stats.map(s=>[s,500])));state.stats.의지=will;state.advancedStudy={study:2,social:2,accounts:2};
          state.flags.deed=false;state.hp=45;state.fund=2500;state.motivation=50;state.renown=approved?70:0;
          Object.assign(state.level,{parlor:3,library:3});state.shop.works=3;state.royal=approved?12:0;state.events=Array.from({length:6},(_,i)=>({id:"portfolio-"+i+"-1",index:0,month:30}));state.salesBook=Array.from({length:14},()=>({revenue:50,cost:10}));
          talkTrust('mey');
          advance();
        },{will,approved});
        if(approved)await page.locator('[data-action="read-verdict"]').click();
        assert.equal(await page.locator('.ending-cg').getAttribute('data-ending'),id);
        assert.equal(await page.locator('.ending-cg').getAttribute('src'),await page.evaluate(id=>{const first=endingScenes[id].lines[0];return 'assets/endings/'+(first[3]?.cg||first[2]||id)+'.webp';},id));
        await page.locator('.ending-cg').evaluate(im=>im.decode());
        await page.locator('#conversation [data-read="next"]').click();
        const line=await page.locator('#conversation .dialogue p').textContent();
        await page.reload();await page.locator('[data-action="cover:continue"]').click();await page.locator('[data-action="resume"]').click(); assert.equal(await page.locator('#conversation .dialogue p').textContent(),line);
        await page.locator('#dialogue-visibility').click();await page.locator('#conversation .dialogue').waitFor({state:'hidden'});
        await page.locator('#dialogue-visibility').click();
        await page.locator('#conversation [data-read="skip"]').click();
        if(id==="releaseNoTitle"||id==="releaseTitle")assert.equal(await page.locator('.ending-cg').getAttribute('src'),'assets/endings/black.webp');
        await page.locator('#conversation [data-read="finish"]').click();
        const farewell=page.locator('.ending-farewells');
        assert.equal(await farewell.locator('.farewell-bubble strong').textContent(),'타나카');
        await farewell.locator('[data-farewell="next"]').click();
        assert.equal(await farewell.locator('.farewell-bubble strong').textContent(),'피니안');
        await farewell.locator('[data-farewell="next"]').click();
        const farewellLine=await page.evaluate(id=>endingFarewells.mey[
          ["releaseTitle","releaseNoTitle"].includes(id)?"mourning":"parting"
        ][trustTier(state.people.mey.toward)],id);
        assert.equal(await farewell.locator('.farewell-bubble p').textContent(),farewellLine);
        await page.reload();
        await page.locator('[data-action="cover:continue"]').click();await page.locator('[data-action="resume"]').click();
        assert.equal(await farewell.locator('.farewell-bubble p').textContent(),farewellLine);
        await farewell.locator('.farewell-person').evaluate(im=>im.decode());
        await farewell.locator('[data-farewell="skip"]').click();
        const backdrop=page.locator('.growth-backdrop');
        const endingImage=id==='vowNoTitle'?'london-merchant':id;
        assert.equal(await page.evaluate(()=>musicTracks[creditTracks[trackForView()]].file),
          'assets/audio/'+(approved?'title-approval':'good-ending')+'.mp3');
        assert.equal(await backdrop.getAttribute('src'),'assets/endings/'+endingImage+'.webp');
        await backdrop.evaluate(im=>im.decode());
        assert.equal(await page.locator('.growth-staff-row').count(),5);
        assert.equal(await page.locator('.growth-staff-row .staff-headshot img').count(),5);
        assert.match(await page.locator('.growth-staff-row').filter({hasText:'메이린'}).innerText(),/시엘/);
        assert.equal(await page.getByText('엘리자베스와 만남',{exact:true}).count(),0);
        await checkClosingCredits(page);
        await page.locator('.growth-end').click();
        assert.ok(await page.locator('#sheet').isVisible());
        assert.equal(await page.locator('#sheet .ending-thumb img').getAttribute('src'),'assets/endings/'+endingImage+'.webp');
        assert.equal(await page.locator('#sheet .growth-final-stats dt').count(),7);
        assert.equal(await page.locator('#sheet .ending-summary-record summary').innerText(),'연도별 성장 기록');
      }
      await page.evaluate(()=>{
        state=initial();state.phase='plan';tab='record';saves.gallery={ill:'건강 악화로 종료'};
        delete saves.growthGallery.ill;delete saves.cgSeen;
        saves[1]={...initial(),month:4,phase:'ending',ending:'broke',past:[{month:4,plan:['accounts','walk','rest']}]};delete saves.auto;delete saves[2];delete saves[3];render();
      });
      assert.equal(await page.locator('.ending-thumb').count(),2);
      const gallery=page.locator('.file-section').filter({has:page.getByText('엔딩 도감',{exact:true})});
      assert.match(await gallery.locator('summary').innerText(),/2개 기록/);
      await gallery.locator('summary').click();
      for(const ending of ['ill','broke']){
        await page.locator('[data-action="ending-art:'+ending+'"]').click();
        await page.locator('.ending-cg').evaluate(im=>im.decode());
        await page.evaluate(id=>{
          const host=document.querySelector('#conversation');
          const lines=endingScenes[id].lines;
          for(const [beat,[,,picture,cue]] of lines.entries()){
            if(host.querySelector('.ending-cg').dataset.picture!==(cue?.cg||picture))throw Error(id+' ending CG at line '+(beat+1));
            if(beat<lines.length-1)host.querySelector('[data-read="next"]').click();
          }
        },ending);
        await page.locator('#conversation [data-read="finish"]').click();
        assert.equal(await page.locator('.growth-backdrop').getAttribute('src'),'assets/endings/'+ending+'.webp');
        assert.equal(await page.evaluate(()=>musicTracks[creditTracks[trackForView()]].file),'assets/audio/good-ending.mp3');
        assert.match(await page.locator('.growth-roll').innerText(),ending==='ill'?/세부 장부는 남아 있지 않습니다/:/팬텀사 회계/);
        await checkClosingCredits(page);
        await page.locator('.growth-end').click();
        assert.equal(await page.evaluate(()=>tab),'record');
        if(await gallery.locator('summary').evaluate(el=>!el.parentElement.open))await gallery.locator('summary').click();
      }
      await page.evaluate(async()=>{
        if(Object.keys(endingScenes).length!==6)throw Error('Ending catalog mismatch');
        const unique=new Set(Object.values(choreography).map(row=>row[1]));
        if(unique.size!==Object.keys(actions).length)throw Error('Reused activity loop');
        await Promise.all([...Object.keys(endingScenes).map(id=>'assets/endings/'+id+'.webp'),...Object.values(actors)].map(src=>{
          const im=new Image();im.src=src;return im.decode();
        }));
      });
      // An old save can resume on the outdoor cutaway. The maid uniform is a separate asset.
      await page.evaluate(()=>{
        state=initial();state.month=state.planMonth=15;state.phase='event';state.pending='maid';state.eventQueue=['cook'];
        recruit('finny');delete state.storyPageEdition;state.recruitPage={id:'maid',version:2,at:4};state=normalizeSave(state);tab='plan';render();
      });
      const owl=page.getByRole('img',{name:'올빼미',exact:true});
      assert.equal(await owl.getAttribute('src'),'assets/portraits/mey-owl.webp');
      await owl.evaluate(im=>im.decode());
      await page.getByRole('button',{name:'다음 대사'}).press('Enter');
      assert.equal(await owl.count(),0);
      await page.getByRole('button',{name:'건너뛰기'}).click();
      const speakerPortrait=page.locator('#conversation .standing-window img[alt="세바스찬"]');
      await speakerPortrait.evaluate(im=>im.decode());
      await page.getByRole('button',{name:'영입 확정'}).click();
      const impact=page.locator('#impact-summary');
      assert.ok(await impact.isVisible());
      assert.match(await impact.innerText(),/메이린 합류/);
      await impact.getByRole('button',{name:'확인'}).click();
      assert.ok(await page.evaluate(()=>Boolean(state.people.mey)));
      await page.evaluate(()=>{state.phase='plan';state.pending=null;tab='staffing';render();});
      assert.equal(await page.locator('[data-employee=mey] img').getAttribute('src'),'assets/npc-mey.webp');
      await page.evaluate(()=>openRecruitMemory('maid'));
      await page.getByRole('button',{name:'건너뛰기'}).click();
      await speakerPortrait.evaluate(im=>im.decode());
      await page.addInitScript(()=>{
        window.playedMusic=[];
        window.Audio=new Proxy(window.Audio,{construct(Audio,args){
          const el=new Audio(...args);
          el.addEventListener('playing',()=>window.playedMusic.push(new URL(el.currentSrc).pathname.split('/').pop()));
          return el;
        }});
      });
      const hearsCurrent=async(id,at)=>{
        const path=await page.evaluate(([id,at])=>musicTracks[recruitTrack(id,at)].file.split('/').pop(),[id,at]);
        await page.waitForFunction(file=>window.playedMusic.includes(file),path,{timeout:12000});
      };
      await page.goto(base+'recruit-preview.html#snake');
      const nextLine=page.locator('#conversation [data-read="next"]');
      const pages=await page.evaluate(()=>recruitScenes.circus.lines.length);
      if(pages>1)await nextLine.click();
      else await page.locator('#conversation [data-read="finish"]').click();
      await hearsCurrent('circus',Math.min(1,pages-1));
      const skip=page.getByRole('button',{name:'건너뛰기'});
      if(pages>2)await skip.click();
      if(pages>1)await hearsCurrent('circus',pages-1);
      for(const [id,name] of [['visitPrince','소마·아그니'],['cook','바르도']]){
        await page.getByRole('button',{name}).click();
        const last=await page.evaluate(id=>recruitScenes[id].lines.length-1,id);
        if(last)await skip.click();
        await hearsCurrent(id,last);
      }
      await page.getByRole('button',{name:'바르도'}).click();
      const dialogue=page.locator('#conversation .dialogue');
      assert.equal(await dialogue.evaluate(el=>getComputedStyle(el).backdropFilter),'blur(12px)');
      const words=await dialogue.innerText();
      const actor=page.locator('.standing-window img').first();
      if(await actor.count())await actor.evaluate(im=>im.decode());
      const before=await actor.count()?await actor.boundingBox():null;
      await page.locator('#dialogue-visibility').click();
      assert.equal(await dialogue.isVisible(),false,JSON.stringify(await page.evaluate(()=>({state:document.getElementById('scene').dataset.artOnly,pressed:document.getElementById('dialogue-visibility').getAttribute('aria-pressed'),vis:getComputedStyle(document.querySelector('#conversation .dialogue')).visibility}))));
      const restored=before?await actor.boundingBox():null; if(before)for(const k of ['x','y','width','height'])assert.ok(Math.abs(restored[k]-before[k])<1,'CG viewing shifted the portrait on '+k+': '+JSON.stringify({before,restored,layout:await actor.evaluate(e=>({grid:getComputedStyle(e.closest('#conversation')).gridTemplateRows,wrapper:e.parentElement.getAttribute('style'),rect:e.parentElement.getBoundingClientRect().toJSON()}))}));
      await page.keyboard.press('h');
      assert.equal(await dialogue.innerText(),words);
      assert.deepEqual(errors,[]);
      console.log(browserType.name(),viewport.width,'passed jump, ages, motion modes, pose changes, shop, ledger and CG toggle');
      await page.close();
    }
  }finally{await browser.close();}
}
(async()=>{await check(chromium);await check(firefox);})().catch(e=>{console.error(e);process.exitCode=1;});
