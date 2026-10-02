process.env.NODE_ENV='production';
require('@babel/register')({presets:[['@babel/preset-env',{targets:{node:'current'}}]],babelrc:false,configFile:false,ignore:[/node_modules/]});
const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('fs'),path=require('path');
const {SEO_PAGES,SITE_URL,INDEXABLE_ROUTES,getSeoPage,getRobots}=require('../src/seo');
const origin=process.argv[2]||'http://127.0.0.1:5082',output='test-results/'+(origin.includes('127.0.0.1')?'local':'live');
fs.mkdirSync(output,{recursive:true});
const checks=[],errors=[],resourceFailures=[],postRequests=[];
const screenshots=process.env.SEO_SCREENSHOTS!=='0';
(async()=>{
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try {
for (const [route,definition] of Object.entries(SEO_PAGES)) {
 const expected=getSeoPage(route),response=await fetch(origin+route),html=await response.text();
 assert.equal(response.status,200,route+' HTTP status');
 assert.equal((html.match(/<title>/g)||[]).length,1,route+' title count');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,route+' raw H1');
 assert.equal((html.match(/<main[ >]/g)||[]).length,1,route+' raw main');
 assert.ok(html.includes('href="'+expected.url+'"'),route+' raw canonical');
 const schema=JSON.parse(html.match(/<script type="application\/ld\+json" id="site-structured-data">([\s\S]*?)<\/script>/)[1]);
 assert.equal(schema['@context'],'https://schema.org');
 assert.ok(!/aggregateRating|Review|MedicalProcedure|ImageObject/.test(JSON.stringify(schema)),route+' no unsupported review/procedure/image schema');
 assert.equal(schema['@graph'].some(node=>node['@type']==='IndividualPhysician'),!definition.noindex);
 for (const size of [{name:'desktop',width:1440,height:1000},{name:'mobile',width:390,height:844},{name:'narrow',width:320,height:800}]) {
  const context=await browser.newContext({viewport:size});
  const page=await context.newPage();
  page.on('pageerror',error=>errors.push({route,viewport:size.name,error:error.message}));
  page.on('console',message=>{ if(message.type()==='error' && /React|hydration|Minified/.test(message.text())) errors.push({route,viewport:size.name,error:message.text()});});
  page.on('response',res=>{if(res.url().startsWith(origin) && res.status()>=400)resourceFailures.push({route,viewport:size.name,status:res.status(),type:new URL(res.url()).pathname.startsWith('/static/media/')?'existing-media':'site-resource'});});
  await context.route('**/*',request=>{if(request.request().method()==='POST'){if(new URL(request.request().url()).hostname==='formspree.io') postRequests.push({route});return request.abort();}return request.continue();});
  await page.goto(origin+route,{waitUntil:'networkidle'});
  assert.equal(await page.title(),expected.title);
  const metas={'name:description':expected.description,'name:robots':getRobots(expected),'property:og:title':expected.title,'property:og:url':expected.url,'name:twitter:title':expected.title};
  for(const [key,value] of Object.entries(metas)){const i=key.indexOf(':');assert.equal(await page.locator('head meta['+key.slice(0,i)+'="'+key.slice(i+1)+'"]').getAttribute('content'),value,route+' '+key);}
  assert.equal(await page.locator('head link[rel="canonical"]').getAttribute('href'),expected.url);
  assert.equal(await page.locator('main h1').count(),1);
  assert.equal(await page.locator('a a, main main').count(),0);
  const dim=await page.evaluate(()=>({width:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth}));
  assert.ok(dim.scroll<=dim.width+1,route+' '+size.name+' overflow '+JSON.stringify(dim));
  const imageCounts=await page.evaluate(()=>({loaded:[...document.images].filter(img=>img.complete && img.naturalWidth>0).length,broken:[...document.images].filter(img=>img.complete && img.naturalWidth===0).length,missingAlt:[...document.images].filter(img=>!img.hasAttribute('alt')).length}));
  assert.equal(imageCounts.broken,0,route+' initial image loads');
  assert.equal(imageCounts.missingAlt,0,route+' image alternatives');
  const rawForms=await page.locator('form').count();
  if(route==='/') {
    assert.equal(await page.locator('.hero-section a[href^="mailto:"]').count(),0,'preserve hero email removal');
    assert.equal(await page.locator('.hero-section a[href="tel:+15732142000"]').count(),1);
    assert.ok(await page.locator('footer a[href^="mailto:"]').count()>0);
  }
  if(route==='/gallery') {
    assert.ok(await page.locator('.img-slot--sensitive:not(.is-unlocked)').count()>0,'gallery initial sensitive state locked');
    assert.equal(await page.locator('.is-unlocked, .lightbox').count(),0);
  }
  // Save only nonpatient screenshots. Procedure pages mask all images; no gallery/form screenshots.
  if(screenshots && size.name!=='narrow') {
    const stem=route.slice(1)||'home';
    if(route==='/') await page.locator('.whitetoblue').screenshot({path:output+'/'+stem+'-'+size.name+'.png'});
    else if(route==='/contact') await page.screenshot({path:output+'/'+stem+'-'+size.name+'.png',fullPage:true});
    else if(['/face','/eyes','/nose','/non-surgical'].includes(route)) { const privacyStyle=await page.addStyleTag({content:'.header-section::before { background: none !important; }'}); await page.locator('.header-section').screenshot({path:output+'/'+stem+'-'+size.name+'.png',mask:[page.locator('img')],maskColor:'#d3d3d3'}); await privacyStyle.evaluate(element=>element.remove()); }
  }
  if(size.name==='desktop') {
    const face=page.locator('.desktop-nav a[href="/face"]').first();
    await face.focus();
    await page.locator('.desktop-nav a[href="/face#face-lift"]').waitFor({state:'visible'});
    assert.equal(await page.locator('.desktop-nav a[href="/face#face-lift"]').isVisible(),true,route+' keyboard dropdown');
    await page.locator('.desktop-nav a[href="/contact"]').click();
  } else {
    const hamburger=page.locator('.hamburger');
    assert.equal(await hamburger.getAttribute('aria-expanded'),'false');
    assert.equal(await page.locator('#mobile-navigation').isVisible(),false);
    await hamburger.click();
    assert.equal(await hamburger.getAttribute('aria-expanded'),'true');
    await page.locator('button[aria-controls="mobile-submenu-non-surgical"]').click();
    assert.equal(await page.locator('#mobile-submenu-non-surgical').isVisible(),true);
    const cool=page.locator('#mobile-submenu-non-surgical a[href="/non-surgical#coolpeel"]');
    await cool.click();
    await page.waitForURL('**/non-surgical#coolpeel');
    assert.equal(await page.locator('#coolpeel').count(),1);
    assert.equal(await hamburger.getAttribute('aria-expanded'),'false');
    await hamburger.click();
    await page.locator('#mobile-navigation a[href="/contact"]').click();
  }
  await page.waitForURL('**/contact');
  await page.waitForFunction(title=>document.title===title,SEO_PAGES['/contact'].title);
  assert.equal(await page.locator('head link[rel="canonical"]').getAttribute('href'),SITE_URL+'/contact');
  assert.equal(await page.locator('head meta[property="og:title"]').getAttribute('content'),SEO_PAGES['/contact'].title);
  assert.equal(await page.locator('head meta[property="og:url"]').getAttribute('content'),SITE_URL+'/contact');
  assert.equal(await page.locator('head meta[name="twitter:title"]').getAttribute('content'),SEO_PAGES['/contact'].title);
  checks.push({route,viewport:size.name,status:response.status,overflow:false,initialImageErrors:0,forms:rawForms,spaMetadata:'pass'});
  await context.close();
 }
}
const context=await browser.newContext({javaScriptEnabled:false});
const page=await context.newPage();
for(const route of INDEXABLE_ROUTES){await page.goto(origin+route,{waitUntil:'domcontentloaded'});assert.equal(await page.locator('main h1').count(),1);assert.ok((await page.locator('main').innerText()).length>100);}
await context.close();
const missing=await fetch(origin+'/seo-check-nonexistent');assert.equal(missing.status,404);assert.ok((await missing.text()).includes('noindex, follow'));
const robots=await fetch(origin+'/robots.txt');assert.equal(robots.status,200);const txt=await robots.text();assert.ok(txt.includes('Allow: /'));assert.ok(!/Disallow:\s*\/(?:\s|$)/.test(txt));assert.ok(txt.includes(SITE_URL+'/sitemap.xml'));
const sitemap=await fetch(origin+'/sitemap.xml');assert.equal(sitemap.status,200);const xml=await sitemap.text();assert.equal((xml.match(/<loc>/g)||[]).length,7);for(const route of INDEXABLE_ROUTES)assert.ok(xml.includes('<loc>'+SITE_URL+(route==='/'?'/':route)+'</loc>'));for(const route of Object.keys(SEO_PAGES).filter(route=>SEO_PAGES[route].noindex))assert.ok(!xml.includes('<loc>'+SITE_URL+route+'</loc>'));
assert.deepEqual(errors,[],'browser runtime/hydration errors');assert.deepEqual(resourceFailures,[],'site resource failures');assert.deepEqual(postRequests,[],'no form submissions');
fs.writeFileSync(output+'/verification.json',JSON.stringify({origin,checkedAt:new Date().toISOString(),checks,javaScriptDisabledRoutes:7,robots:'pass',sitemap:'pass',missingRoute:404,browserErrors:errors,resourceFailures,formSubmissions:0,patientScreenshots:0},null,2));
console.log(JSON.stringify({origin,routes:10,viewportChecks:checks.length,javaScriptDisabledRoutes:7,robots:'pass',sitemap:'pass',missingRoute:404,browserErrors:0,resourceFailures:0,formSubmissions:0,patientScreenshots:0,evidence:output}));
}finally{await browser.close();}
})().catch(error=>{console.error(error.message);process.exitCode=1;});
