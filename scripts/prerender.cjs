process.env.NODE_ENV = 'production';
const fs = require('fs'), path = require('path'), crypto = require('crypto'), { execFileSync } = require('child_process');
const root = path.resolve(__dirname, '..'), build = path.join(root, 'build');
const sha = data => crypto.createHash('sha256').update(data).digest('hex');
const manifest = JSON.parse(fs.readFileSync(path.join(build, 'asset-manifest.json'), 'utf8'));
const assets = new Map();
for (const url of Object.values(manifest.files)) {
  const file = path.join(build, url.replace(/^\//, ''));
  if (fs.existsSync(file) && fs.statSync(file).isFile()) assets.set(sha(fs.readFileSync(file)), url);
}
require.extensions['.css'] = () => {};
const mime = { '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.png':'image/png', '.gif':'image/gif', '.webp':'image/webp', '.svg':'image/svg+xml', '.pdf':'application/pdf' };
for (const [extension,type] of Object.entries(mime)) require.extensions[extension] = (module, filename) => {
  const data = fs.readFileSync(filename), url = assets.get(sha(data));
  if (!url && (extension === '.pdf' || data.length >= 10000)) throw new Error('Source asset missing from the production build');
  module.exports = url || 'data:' + type + ';base64,' + data.toString('base64');
};
require('@babel/register')({ extensions:['.js','.jsx'], presets:[['@babel/preset-env',{targets:{node:'current'}}],['@babel/preset-react',{runtime:'automatic'}]], babelrc:false, configFile:false, ignore:[/node_modules/] });
const React = require('react'), {renderToString} = require('react-dom/server'), {StaticRouter} = require('react-router-dom/server');
const {AppContent} = require('../src/App'), {SEO_PAGES,INDEXABLE_ROUTES,SITE_URL,getSeoPage,getMetadata,getStructuredData} = require('../src/seo');
const template = fs.readFileSync(path.join(build, 'index.html'), 'utf8');
const escape = value => String(value).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function render(route, filename) {
  const page = getSeoPage(route), body = renderToString(React.createElement(StaticRouter,{location:route},React.createElement(AppContent)));
  const tags = ['<title>' + escape(page.title) + '</title>', '<link rel="canonical" href="' + escape(page.url) + '"/>'];
  for (const [key,value] of Object.entries(getMetadata(page))) {
    const colon=key.indexOf(':');
    tags.push('<meta ' + key.slice(0,colon) + '="' + escape(key.slice(colon+1)) + '" content="' + escape(value) + '"/>');
  }
  tags.push('<script type="application/ld+json" id="site-structured-data">' + JSON.stringify(getStructuredData(page)).replace(/</g,'\\u003c') + '</script>');
  const html=template.replace(/<title>[\s\S]*?<\/title>/,'').replace(/<meta name="description"[^>]*>/,'').replace('</head>',tags.join('')+'</head>').replace('<div id="root"></div>','<div id="root">'+body+'</div>');
  if (!html.includes(body) || !/<main\b/.test(body)) throw new Error('Static root insertion failed');
  fs.writeFileSync(path.join(build,filename),html);
}
for (const route of Object.keys(SEO_PAGES)) render(route,route==='/'?'index.html':route.slice(1)+'.html');
render('/404','404.html');
fs.writeFileSync(path.join(build,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+INDEXABLE_ROUTES.map(route=>'<url><loc>'+SITE_URL+(route==='/'?'/':route)+'</loc></url>').join('\n')+'\n</urlset>\n');
fs.writeFileSync(path.join(build,'robots.txt'),'User-agent: *\nAllow: /\n\nSitemap: '+SITE_URL+'/sitemap.xml\n');
const commit=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
fs.writeFileSync(path.join(build,'release.json'),JSON.stringify({commit,builtAt:new Date().toISOString(),routes:Object.keys(SEO_PAGES),indexableRoutes:INDEXABLE_ROUTES},null,2)+'\n');
console.log('Prerendered '+Object.keys(SEO_PAGES).length+' routes, HTTP 404 page, robots.txt and '+INDEXABLE_ROUTES.length+'-URL sitemap.');
