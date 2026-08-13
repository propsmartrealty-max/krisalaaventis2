const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://krisalaventis.in';

// Load Data Sources
const coreData = require('../data.json');
const nriData = require('../data/global-nri-seo.json');
const dominationData = require('../data/krisala-domination-seo.json');

const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
const sitemapFooter = `\n</urlset>`;

let sitemapContent = sitemapHeader;

function addUrl(loc, priority, changeFreq) {
    const today = new Date().toISOString().split('T')[0];
    sitemapContent += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// 1. Homepage
addUrl(DOMAIN, '1.0', 'daily');

// 2. Core Pages
for (const page of coreData) {
    addUrl(`${DOMAIN}/${page.folder}/${page.url_slug.replace('.html', '')}`, '0.8', 'weekly');
}

// 3. NRI Pages
for (const page of nriData) {
    addUrl(`${DOMAIN}/${page.folder}/${page.url_slug.replace('.html', '')}`, '0.7', 'weekly');
}

// 4. Domination Pages
for (const page of dominationData) {
    addUrl(`${DOMAIN}/${page.folder}/${page.url_slug.replace('.html', '')}`, '0.6', 'weekly');
}

sitemapContent += sitemapFooter;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemapContent, 'utf8');

console.log(`✅ Successfully generated massive static sitemap at public/sitemap.xml with ${1 + coreData.length + nriData.length + dominationData.length} URLs!`);
