const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const sitemapPath = path.join(rootDir, 'sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const urls = sitemap.match(/<loc>(.*?)<\/loc>/g).map(u => u.replace(/<\/?loc>/g, ''));

console.log(`Checking ${urls.length} URLs...`);

urls.forEach(url => {
  const relativePath = url.replace('https://krisalaventis.in/', '').replace(/\/$/, '');
  let filePath = '';
  
  if (relativePath === '') {
    filePath = 'index.html';
  } else {
    filePath = relativePath + '.html';
  }
  
  const fullPath = path.join(rootDir, filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ Missing: ${url} (Expected: ${filePath})`);
  } else {
    console.log(`✅ Found: ${url}`);
  }
});
