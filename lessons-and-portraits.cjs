'use strict';
const {chromium,firefox}=require('playwright');
const assert=require('node:assert/strict');
const base='http://127.0.0.1:4173/';
async function openGame(page){
  // Exercise the bundled assets and fallback fonts without depending on a public font service.
  await page.route(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\//,route=>route.abort());
  await page.goto(base,{waitUntil:"domcontentloaded"});
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
  const book=page.locator('.notebook-guide');
  await book.locator(':scope > summary').click();
  assert.equal(await book.locator('.guide-topic').count(),8);
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
  assert.ok(Math.abs(lesson.actor.height/paintedHeight-.255)<.01,JSON.stringify({activity,lesson,review}));
  assert.ok(lesson.actor.left>=lesson.crop.left-1&&lesson.actor.right<=lesson.crop.right+1);
}

async function check(browserType){
  const browser=await browserType.launch({headless:true,...(browserType===chromium&&process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
  try{
    await require("./tools/content-editor/story-flow-check.cjs")(browser,base);
    for(const viewport of [{width:1280,height:800},{width:390,height:844}]){
      const page=await browser.newPage({viewport,reducedMotion:'reduce'});
      const errors=[];page.on('pageerror',error=>{errors.push(error.message);console.error('Browser error:',error.message);});
      page.setDefaultTimeout(12000); console.log(browserType.name(),viewport.width);
      await openGame(page);
      assert.ok(await page.locator('.book-cover').isVisible());
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
      for(const [month,age] of [[1,10],[14,11],[26,12]]){
        await page.evaluate(month=>{state=initial();state.month=month;state.planMonth=month;state.phase='plan';tab='home';render();},month);
        const portrait=page.locator('#ciel-greet > #home-standing');
        await portrait.evaluate(im=>im.decode());
        const file=age===10?'ciel.png':'ciel-'+age+'.webp';
        assert.ok((await portrait.getAttribute('src')).endsWith(file));
        await page.locator('#system-save').click();
        await page.locator('[data-action="motion:full"]').click();
        await page.locator('#system-back').click();
        const geometry=await portrait.evaluate(im=>{
          const r=im.getBoundingClientRect(),b=im.parentElement.getBoundingClientRect();
          const point={x:r.x+r.width*.52,y:r.y+r.height*.32};
          return {point,w:r.width,h:r.height,bw:b.width,bh:b.height,hit:document.elementFromPoint(point.x,point.y)?.closest('button')?.id};
        });
        assert.ok(geometry.w>30&&geometry.h>50);
        assert.ok(Math.abs(geometry.w-geometry.bw)<1&&Math.abs(geometry.h-geometry.bh)<1);
        assert.equal(geometry.hit,'ciel-greet');
        await page.mouse.click(geometry.point.x,geometry.point.y);
        assert.ok(await page.locator('#ciel-aside').textContent());
        assert.equal(await portrait.evaluate(e=>getComputedStyle(e).animationName),'ciel-greeting-hop');
        await page.locator('#ciel-greet').press('Enter');
        await page.locator('[data-action="open-guide"]').click();
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
      await page.locator('.book-cover [data-action="resume"]').click();
      await page.locator('#nav [data-action="tab:estate"]').click();
      assert.equal(await page.locator('[data-duty="salon"] em').textContent(),'소마');
      assert.equal(await page.locator('[data-duty="kitchen"] em').textContent(),'아그니');
      await page.evaluate(()=>{state=initial();state.phase='plan';tab='home';render();});
      await page.locator('#nav [data-action="tab:plan"]').click();
      await page.locator('#system-book').click();
      assert.ok(await page.locator('#sheet').isVisible());
      assert.ok((await page.locator('#sheet').evaluate(e=>+getComputedStyle(e).zIndex))>(await page.locator('#date').evaluate(e=>+getComputedStyle(e).zIndex)));
      await page.evaluate(()=>{tab='market';render();});
      assert.equal(await page.locator('.goods-ticket').count(),13);
      await page.locator('[data-action="goods:weights"]').click();
      await page.locator('[data-action="buy:weights"]').click();
      assert.ok(await page.locator('[data-action="buy:weights"]').isDisabled());
      await page.evaluate(()=>{tab='plan';state.plan=['exercise','study','walk'];state.visit='none';execute();});
      await page.locator('.performer img').evaluate(im=>im.decode());
      assert.equal(await page.locator('.lesson-plane').getAttribute('data-room'),await page.evaluate(()=>choreography.exercise[0]));
      assert.ok(await page.locator('.performer').evaluate(e=>e.getBoundingClientRect().height>10&&getComputedStyle(e).animationName!=='none'));
      assert.ok(await page.evaluate(()=>!state.lessonKit.exercise));
      const first=await page.locator('.performer img').getAttribute('src');
      await page.waitForFunction(src=>document.querySelector('.performer img')?.getAttribute('src')!==src,first,{timeout:3800});
      await page.evaluate(()=>{state.phase='plan';tab='save';render();});
      await page.locator('[data-action="motion:reduced"]').click();
      await page.reload();
      assert.equal(await page.locator('html').getAttribute('data-game-motion'),'reduced');
      // Enter the normal last month at either side of the will boundary and with either royal verdict.
      for(const [will,approved,id] of [[349,true,'releaseTitle'],[350,true,'vowTitle'],[349,false,'releaseNoTitle'],[350,false,'vowNoTitle']]){
        await page.evaluate(({will,approved})=>{
          state=initial();state.month=state.planMonth=35;state.phase='result';tab='plan';
          for(const person of ['finny','mey','bard','tanaka','snake'])recruit(person);
          Object.assign(state.stats,Object.fromEntries(stats.map(s=>[s,500])));state.stats.의지=will;
          state.flags.deed=false;state.hp=45;state.fund=2500;state.royal=will<350&&approved?15:0;state.renown=approved?70:0;
          Object.assign(state.level,{parlor:3,library:3});state.shop.works=3;
          talkTrust('mey');
          advance();
        },{will,approved});
        if(approved)await page.locator('[data-action="read-verdict"]').click();
        assert.equal(await page.locator('.ending-cg').getAttribute('data-ending'),id);
        assert.equal(await page.locator('.ending-cg').getAttribute('src'),'assets/endings/royal-letter.webp');
        await page.locator('.ending-cg').evaluate(im=>im.decode());
        await page.locator('#conversation [data-read="next"]').click();
        const line=await page.locator('#conversation .dialogue p').textContent();
        await page.reload();await page.locator('.book-cover [data-action="resume"]').click(); assert.equal(await page.locator('#conversation .dialogue p').textContent(),line);
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
        await page.locator('.book-cover [data-action="resume"]').click();
        assert.equal(await farewell.locator('.farewell-bubble p').textContent(),farewellLine);
        await farewell.locator('.farewell-person').evaluate(im=>im.decode());
        await farewell.locator('[data-farewell="skip"]').click();
        if(id==='vowTitle'){
          await page.locator('.growth-backdrop').evaluate(im=>im.decode());
          await page.locator('.growth-end').click();
        }
        assert.ok(await page.locator('#sheet').isVisible());
      }
      await page.evaluate(()=>{
        state=initial();state.phase='plan';tab='record';saves.gallery={ill:'건강 악화로 종료'};
        saves[1]={...initial(),phase:'ending',ending:'broke'};delete saves.auto;delete saves[2];delete saves[3];render();
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
        await page.locator('#system-back').click();
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
      await page.getByRole('button',{name:'다음 대사'}).click();
      assert.equal(await owl.count(),0);
      await page.getByRole('button',{name:'건너뛰기'}).click();
      const speakerPortrait=page.locator('#conversation .standing-window img[alt="세바스찬"]');
      await speakerPortrait.evaluate(im=>im.decode());
      await page.getByRole('button',{name:'영입 확정'}).click();
      const impact=page.locator('#choice-impact');
      assert.ok(await impact.isVisible());
      assert.match(await impact.innerText(),/메이린 합류/);
      assert.equal(await impact.getByRole('button').count(),0);
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
