const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://krisalaventis.in';
const today = new Date().toISOString().split('T')[0];

// Load Data Sources
const coreData = require('../data.json');
const nriData = require('../data/global-nri-seo.json');
const dominationData = require('../data/krisala-domination-seo.json');
const puneMarketKeywords = require('../data/pune-market-keywords.json');

// --- XML Schema Declarations ---
const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">`;

const xmlFooter = `\n</urlset>`;

// Images definitions for rich image indexing
const masterImages = [
  {
    loc: `${DOMAIN}/assets/images/hero.webp`,
    title: 'Krisala Aventis Tathawade Elevation & High Rise Architecture',
    caption: 'Krisala Aventis Tathawade luxury 2.25 & 3.25 BHK apartments near Hinjewadi IT Park Pune'
  },
  {
    loc: `${DOMAIN}/assets/images/interior.webp`,
    title: 'Krisala Aventis 3.25 BHK Luxury Living Room & Smart Study Pod',
    caption: 'Ultra-luxurious spacious living room with panoramic balcony vista at Krisala Aventis Tathawade'
  },
  {
    loc: `${DOMAIN}/assets/images/master-layout.webp`,
    title: 'Krisala Aventis Tathawade Master Site Layout & 4 Towers Plan',
    caption: '3+ Acres master layout campus plan with 40+ rooftop & podium amenities in Tathawade Pune'
  },
  {
    loc: `${DOMAIN}/assets/images/floorplan-2bhk.webp`,
    title: 'Krisala Aventis 2.25 BHK Floor Plan with Smart Study Pod',
    caption: '839 Sq.ft carpet area 2.25 BHK floor plan layout with dedicated work-from-home study pod'
  },
  {
    loc: `${DOMAIN}/assets/images/floorplan-3bhk.webp`,
    title: 'Krisala Aventis 3.25 BHK Floor Plan with Smart Study Suite',
    caption: '1116 Sq.ft carpet area 3.25 BHK floor plan layout with master suite in Tathawade Pune'
  }
];

function buildUrlEntry(loc, priority, changeFreq, images = []) {
  let imgTags = '';
  if (images && images.length > 0) {
    imgTags = images.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title.replace(/&/g, '&amp;')}</image:title>
      <image:caption>${img.caption.replace(/&/g, '&amp;')}</image:caption>
    </image:image>`).join('');
  }

  // Multilingual hreflang alternates
  const alternates = `
    <xhtml:link rel="alternate" hreflang="en-IN" href="${loc}" />
    <xhtml:link rel="alternate" hreflang="mr-IN" href="${loc}" />
    <xhtml:link rel="alternate" hreflang="hi-IN" href="${loc}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />`;

  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>${alternates}${imgTags}
  </url>`;
}

// 1. SITEMAP 1: Core Landing Pages & Micro-Silos (sitemap-core.xml)
let coreSitemapContent = xmlHeader;

// Flagship Homepage & Pillar Pages
coreSitemapContent += buildUrlEntry(DOMAIN, '1.0', 'daily', masterImages);
coreSitemapContent += buildUrlEntry(`${DOMAIN}/pricing`, '0.98', 'daily', [masterImages[0]]);
coreSitemapContent += buildUrlEntry(`${DOMAIN}/floor-plans`, '0.98', 'daily', [masterImages[3], masterImages[4]]);
coreSitemapContent += buildUrlEntry(`${DOMAIN}/location`, '0.95', 'weekly', [masterImages[0], masterImages[2]]);
coreSitemapContent += buildUrlEntry(`${DOMAIN}/amenities`, '0.95', 'weekly', [masterImages[1]]);
coreSitemapContent += buildUrlEntry(`${DOMAIN}/maharera`, '0.95', 'monthly', [masterImages[0]]);
coreSitemapContent += buildUrlEntry(`${DOMAIN}/tathawade-vs-wakad`, '0.95', 'weekly', [masterImages[0]]);

// Core URLs
for (const page of coreData) {
  const slug = page.url_slug.replace('.html', '');
  let priority = '0.85';
  let freq = 'weekly';
  if (slug.includes('2-bhk') || slug.includes('3-bhk') || slug.includes('price') || slug.includes('cost-sheet') || slug.includes('brochure') || slug.includes('hinjewadi')) {
    priority = '0.95';
    freq = 'daily';
  }
  coreSitemapContent += buildUrlEntry(`${DOMAIN}/${page.folder}/${slug}`, priority, freq, masterImages.slice(0, 2));
}

coreSitemapContent += xmlFooter;
fs.writeFileSync(path.join(__dirname, '../public/sitemap-core.xml'), coreSitemapContent, 'utf8');

// 2. SITEMAP 2: Global NRI Investor Hub (sitemap-nri.xml)
let nriSitemapContent = xmlHeader;
for (const page of nriData) {
  const slug = page.url_slug.replace('.html', '');
  nriSitemapContent += buildUrlEntry(`${DOMAIN}/${page.folder}/${slug}`, '0.80', 'weekly', [masterImages[0]]);
}
nriSitemapContent += xmlFooter;
fs.writeFileSync(path.join(__dirname, '../public/sitemap-nri.xml'), nriSitemapContent, 'utf8');

// 3. SITEMAP 3: Pune Real Estate & Krisala Domination Network (sitemap-pune.xml)
let puneSitemapContent = xmlHeader;
for (const page of dominationData) {
  const slug = page.url_slug.replace('.html', '');
  let priority = '0.75';
  if (slug.includes('krisala') || slug.includes('tathawade') || slug.includes('wakad') || slug.includes('hinjewadi')) {
    priority = '0.85';
  }
  puneSitemapContent += buildUrlEntry(`${DOMAIN}/${page.folder}/${slug}`, priority, 'weekly');
}
puneSitemapContent += xmlFooter;
fs.writeFileSync(path.join(__dirname, '../public/sitemap-pune.xml'), puneSitemapContent, 'utf8');

// 4. MASTER SITEMAP INDEX (sitemap-index.xml & main sitemap.xml)
const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${DOMAIN}/sitemap-core.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-nri.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-pune.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap-index.xml'), sitemapIndexContent, 'utf8');
// Keep public/sitemap.xml as master index or unified schema
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapIndexContent, 'utf8');

console.log('✅ Generated Ultra-Advanced Modular Sitemaps:');
console.log('  1. public/sitemap-core.xml (Core + Master Images + Hreflang)');
console.log('  2. public/sitemap-nri.xml (NRI Global Hub)');
console.log('  3. public/sitemap-pune.xml (Pune Market Domination)');
console.log('  4. public/sitemap-index.xml (Master XML Sitemap Index)');
console.log('  5. public/sitemap.xml (Root Canonical Index)');
