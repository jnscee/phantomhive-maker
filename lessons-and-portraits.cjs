'use strict';
const {chromium,firefox}=require('playwright');
const assert=require('node:assert/strict');
const base='http://127.0.0.1:4173/';
async function check(browserType){
  const browser=await browserType.launch({headless:true});
  try{
    for(const viewport of [{width:1280,height:800},{width:390,height:844}]){
      const page=await browser.newPage({viewport,reducedMotion:'reduce'});
      const errors=[];page.on('pageerror',error=>errors.push(error.message));
      await page.goto(base);
      await page.locator('#dialogue-visibility').click();
      const prologue=await page.locator('#opening-line').textContent();
      assert.equal(await page.locator('#opening-dialogue').isVisible(),false);
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
      await page.locator('#nav [data-action="tab:plan"]').click();
      await page.locator('#system-book').click();
      assert.ok(await page.locator('#sheet').isVisible());
      assert.ok((await page.locator('#sheet').evaluate(e=>+getComputedStyle(e).zIndex))>(await page.locator('#date').evaluate(e=>+getComputedStyle(e).zIndex)));
      await page.evaluate(()=>{tab='market';render();});
      assert.equal(await page.locator('.goods-ticket').count(),7);
      await page.locator('[data-action="goods:weights"]').click();
      await page.locator('[data-action="buy:weights"]').click();
      assert.ok(await page.locator('[data-action="buy:weights"]').isDisabled());
      await page.evaluate(()=>{tab='plan';state.plan=['exercise','study','walk'];state.visit='none';execute();});
      await page.locator('.performer img').evaluate(im=>im.decode());
      assert.equal(await page.locator('.lesson-plane').getAttribute('data-room'),'ballroom');
      assert.ok(await page.locator('.performer').evaluate(e=>e.getBoundingClientRect().height>10&&getComputedStyle(e).animationName!=='none'));
      assert.ok(await page.evaluate(()=>!state.lessonKit.exercise));
      const first=await page.locator('.performer img').getAttribute('src');
      await page.waitForFunction(src=>document.querySelector('.performer img')?.getAttribute('src')!==src,first,{timeout:3800});
      await page.evaluate(()=>{state.phase='plan';tab='save';render();});
      await page.locator('[data-action="motion:reduced"]').click();
      await page.reload();
      assert.equal(await page.locator('html').getAttribute('data-game-motion'),'reduced');
      await page.goto(base+'recruit-preview.html#bard');
      const dialogue=page.locator('#conversation .dialogue');
      const words=await dialogue.innerText();
      const actor=page.locator('.standing-window img').first();
      await actor.evaluate(im=>im.decode());
      const before=await actor.boundingBox();
      await page.locator('#dialogue-visibility').click();
      assert.equal(await dialogue.isVisible(),false);
      assert.deepEqual(await actor.boundingBox(),before);
      await page.keyboard.press('h');
      assert.equal(await dialogue.innerText(),words);
      assert.deepEqual(errors,[]);
      console.log(browserType.name(),viewport.width,'passed jump, ages, motion modes, pose changes, shop, ledger and CG toggle');
      await page.close();
    }
  }finally{await browser.close();}
}
(async()=>{await check(chromium);await check(firefox);})().catch(e=>{console.error(e);process.exitCode=1;});
