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

// 1. Flagship Homepage
addUrl(DOMAIN, '1.0', 'daily');

// 2. Core High-Intent Pages
for (const page of coreData) {
    const slug = page.url_slug.replace('.html', '');
    let priority = '0.8';
    let freq = 'weekly';
    if (slug.includes('2-bhk') || slug.includes('3-bhk') || slug.includes('price') || slug.includes('cost-sheet') || slug.includes('brochure') || slug.includes('hinjewadi')) {
        priority = '0.9';
        freq = 'daily';
    }
    addUrl(`${DOMAIN}/${page.folder}/${slug}`, priority, freq);
}

// 3. Global NRI Investor Pages
for (const page of nriData) {
    const slug = page.url_slug.replace('.html', '');
    addUrl(`${DOMAIN}/${page.folder}/${slug}`, '0.75', 'weekly');
}

// 4. Domination Long-Tail Pune & Krisala Keyword Pages
for (const page of dominationData) {
    const slug = page.url_slug.replace('.html', '');
    let priority = '0.7';
    if (slug.includes('krisala') || slug.includes('tathawade') || slug.includes('wakad') || slug.includes('hinjewadi')) {
        priority = '0.8';
    }
    addUrl(`${DOMAIN}/${page.folder}/${slug}`, priority, 'weekly');
}

sitemapContent += sitemapFooter;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemapContent, 'utf8');

console.log(`✅ Successfully generated hardened static sitemap at public/sitemap.xml with ${1 + coreData.length + nriData.length + dominationData.length} URLs!`);
