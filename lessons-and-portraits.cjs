'use strict';
const {chromium,firefox}=require('playwright');
const assert=require('node:assert/strict');
const base='http://127.0.0.1:4173/';
async function check(browserType){
  const browser=await browserType.launch({headless:true,...(browserType===chromium&&process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
  try{
    await require("./tools/content-editor/story-flow-check.cjs")(browser,base);
    for(const viewport of [{width:1280,height:800},{width:390,height:844}]){
      const page=await browser.newPage({viewport,reducedMotion:'reduce'});
      const errors=[];page.on('pageerror',error=>{errors.push(error.message);console.error('Browser error:',error.message);});
      page.setDefaultTimeout(12000); console.log(browserType.name(),viewport.width);
      await page.goto(base);
      await page.locator('#dialogue-visibility').click();
      const prologue=await page.locator('#opening-line').textContent();
      assert.equal(await page.locator('#opening-dialogue').isVisible(),false,JSON.stringify(await page.evaluate(()=>({state:document.getElementById('scene').dataset.artOnly,pressed:document.getElementById('dialogue-visibility').getAttribute('aria-pressed'),mat:document.querySelector('.opening-mat').hidden,errors:document.getElementById('launch-help').hidden}))));
      await page.locator('#dialogue-visibility').click();
      assert.equal(await page.locator('#opening-line').textContent(),prologue);
      assert.equal(await page.evaluate(()=>openingAuto),false);
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
      await page.evaluate(()=>{state.flags.townhouse=true;recruit('soma');recruit('agni');render();});
      await londonTab.click();
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
          state.flags.deed=false;state.hp=45;state.fund=2500;state.royal=approved?15:0;state.renown=70;
          Object.assign(state.level,{parlor:3,library:3});state.shop.works=3;
          talkTrust('mey');
          advance();
        },{will,approved});
        if(approved)await page.locator('[data-action="read-verdict"]').click();
        assert.equal(await page.locator('.ending-cg').getAttribute('data-ending'),id);
        await page.locator('.ending-cg').evaluate(im=>im.decode());
        await page.locator('#conversation [data-read="next"]').click();
        const line=await page.locator('#conversation .dialogue p').textContent();
        await page.reload();assert.equal(await page.locator('#conversation .dialogue p').textContent(),line);
        await page.locator('#dialogue-visibility').click();await page.locator('#conversation .dialogue').waitFor({state:'hidden'});
        await page.locator('#dialogue-visibility').click();
        await page.locator('#conversation [data-read="skip"]').click();
        await page.locator('#conversation [data-read="finish"]').click();
        if(id==='vowTitle'){
          await page.locator('.growth-backdrop').evaluate(im=>im.decode());
          assert.deepEqual(await page.locator('.growth-cast strong').allTextContents(),['메이린']);
          await page.locator('.growth-cast img').evaluate(im=>im.decode());
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
      await page.locator('[data-action="ending-art:ill"]').click();
      await page.locator('.ending-cg').evaluate(im=>im.decode());await page.locator('#system-back').click();
      assert.equal(await page.evaluate(()=>tab),'record');
      await page.evaluate(async()=>{
        if(Object.keys(endingScenes).length!==9)throw Error('Ending catalog mismatch');
        const unique=new Set(Object.values(choreography).map(row=>row[1]));
        if(unique.size!==Object.keys(actions).length)throw Error('Reused activity loop');
        await Promise.all([...Object.keys(endingScenes).map(id=>'assets/endings/'+id+'.webp'),...Object.values(actors)].map(src=>{
          const im=new Image();im.src=src;return im.decode();
        }));
      });
      // An old save can resume on the outdoor cutaway. The maid uniform is a separate asset.
      await page.evaluate(()=>{
        state=initial();state.month=state.planMonth=15;state.phase='event';state.pending='maid';state.eventQueue=['cook'];
        recruit('finny');state.recruitPage={id:'maid',version:2,at:4};tab='plan';render();
      });
      const owl=page.getByRole('img',{name:'올빼미',exact:true});
      assert.equal(await owl.getAttribute('src'),'assets/portraits/mey-owl.webp');
      await owl.evaluate(im=>im.decode());
      await page.getByRole('button',{name:'다음 대사'}).click();
      assert.equal(await owl.count(),0);
      await page.getByRole('button',{name:'건너뛰기'}).click();
      await owl.evaluate(im=>im.decode());
      await page.getByRole('button',{name:'영입 확정'}).click();
      const impact=page.locator('#choice-impact');
      assert.ok(await impact.isVisible());
      assert.match(await impact.innerText(),/메이린 합류/);
      await impact.getByRole('button',{name:'계속'}).click();
      assert.ok(await page.evaluate(()=>Boolean(state.people.mey)));
      await page.evaluate(()=>{state.phase='plan';state.pending=null;tab='staffing';render();});
      assert.equal(await page.locator('[data-employee=mey] img').getAttribute('src'),'assets/npc-mey.webp');
      await page.evaluate(()=>openRecruitMemory('maid'));
      await page.getByRole('button',{name:'건너뛰기'}).click();
      await owl.evaluate(im=>im.decode());
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
