const fs=require('fs'),path=require('path'),crypto=require('crypto'),assert=require('assert/strict'),{execFileSync}=require('child_process');
const origin=process.argv[2]||'https://drhanick.com',root=path.resolve(__dirname,'..'),build=path.join(root,'build');
const sha=data=>crypto.createHash('sha256').update(data).digest('hex');
const release=JSON.parse(fs.readFileSync(path.join(build,'release.json'),'utf8'));
const commit=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
assert.equal(release.commit,commit,'build must identify the source commit');
const files=fs.readdirSync(build).filter(file=>fs.statSync(path.join(build,file)).isFile()&&!file.endsWith('.map'));
function visit(directory){for(const file of fs.readdirSync(path.join(build,directory))){const relative=directory+'/'+file;if(fs.statSync(path.join(build,relative)).isDirectory())visit(relative);else if(!file.endsWith('.map'))files.push(relative);}}
visit('static/js');visit('static/css');
// Existing patient media are deliberately excluded from artifact-download evidence.
(async()=>{
const matched=[];
for(const relative of files){
 const local=fs.readFileSync(path.join(build,relative));
 const pathname=relative==='index.html'?'/':relative.endsWith('.html')&&relative!=='404.html'?'/'+relative.slice(0,-5):'/'+relative;
 const response=await fetch(origin+pathname,{cache:'no-store'}),live=Buffer.from(await response.arrayBuffer());
 assert.equal(response.status,200,pathname+' status');assert.equal(sha(live),sha(local),pathname+' deployed bytes');
 matched.push({path:pathname,sha256:sha(local),bytes:local.length,cacheControl:response.headers.get('cache-control')});
}
const liveRelease=await (await fetch(origin+'/release.json',{cache:'no-store'})).json();assert.equal(liveRelease.commit,commit);
const aliases=[];
for(const alias of ['https://mo-ent.web.app']){
 for(const route of ['/','/contact','/nose']){
  const res=await fetch(alias+route),html=await res.text();assert.equal(res.status,200);assert.ok(html.includes('href="https://drhanick.com'+(route==='/'?'/':route)+'"'));
  const local=fs.readFileSync(path.join(build,route==='/'?'index.html':route.slice(1)+'.html'),'utf8');assert.equal(sha(html),sha(local));
  aliases.push({url:alias+route,status:res.status,canonical:'https://drhanick.com'+(route==='/'?'/':route)});
 }
}
const redirects=[];
for(const pathname of ['/contact/','/contact.html']){
 const response=await fetch(origin+pathname,{redirect:'manual'});assert.equal(response.status,301,pathname+' clean URL redirect');assert.equal(response.headers.get('location'),'/contact');redirects.push({path:pathname,status:response.status,location:'/contact'});
}
const http=await fetch(origin.replace('https:','http:'),{redirect:'manual'});assert.ok([301,302,307,308].includes(http.status));redirects.push({path:'http primary',status:http.status,location:http.headers.get('location')});
const evidence={origin,checkedAt:new Date().toISOString(),commit,matchedFiles:matched.length,files:matched,aliases,redirects,existingPatientMediaDownloaded:0};
fs.mkdirSync(path.join(root,'test-results','live'),{recursive:true});fs.writeFileSync(path.join(root,'test-results','live','deployment-verification.json'),JSON.stringify(evidence,null,2));
console.log(JSON.stringify({origin,commit,matchedFiles:matched.length,aliases:aliases.length,redirects:redirects.length,existingPatientMediaDownloaded:0,evidence:'test-results/live/deployment-verification.json'}));
})().catch(error=>{console.error(error.message);process.exitCode=1;});
