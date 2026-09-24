const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://krisalaventis.in';
const publicDir = path.join(__dirname, '..', 'public');
const rootDir = path.join(__dirname, '..');

const coreData = require(path.join(rootDir, 'data.json'));
const nriData = require(path.join(rootDir, 'data', 'global-nri-seo.json'));
const dominationData = require(path.join(rootDir, 'data', 'krisala-domination-seo.json'));

const now = new Date().toUTCString();

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const items = [];

// 1. Core Pillar Pages
const pillarPages = [
  {
    title: 'Krisala Aventis Tathawade — Official New Launch 2026',
    link: `${BASE_URL}/`,
    desc: 'Official portal for Krisala Aventis Tathawade. Ultra-luxury 2.25 and 3.25 BHK Smart Study homes in West Pune beside Shakai Circle near Hinjewadi Phase 1.'
  },
  {
    title: 'Krisala Aventis Tathawade Price List & All-Inclusive Cost Sheet 2026',
    link: `${BASE_URL}/pricing`,
    desc: 'Verified 2026 pricing, floor-wise cost sheets, payment milestones, and stamp duty estimates for 2.25 and 3.25 BHK apartments.'
  },
  {
    title: 'Krisala Aventis Floor Plans — 2.25 & 3.25 BHK Smart Study Layouts',
    link: `${BASE_URL}/floor-plans`,
    desc: 'Carpet area certifications (839 sq.ft & 1116 sq.ft) with dedicated acoustic Smart Study pods and master layouts.'
  },
  {
    title: 'Krisala Aventis Location Map & Hinjewadi Connectivity 2026',
    link: `${BASE_URL}/location`,
    desc: 'Strategic location intelligence beside Shakai Circle, Mumbai-Pune Expressway service road. 7 mins to Hinjewadi IT Park.'
  },
  {
    title: 'Krisala Aventis 40+ Luxury Rooftop & Podium Amenities',
    link: `${BASE_URL}/amenities`,
    desc: 'Podium horizon pool, indoor gymnasium, co-working club, futsal turf, and 40+ lifestyle amenities across 3 acres.'
  },
  {
    title: 'Krisala Aventis MahaRERA P52100080336 Registration & Legal Clearances',
    link: `${BASE_URL}/maharera`,
    desc: 'Official MahaRERA registration verification (P52100080336), title certificate, and bank loan approvals.'
  },
  {
    title: 'Tathawade vs Wakad Real Estate Comparison 2026 — Price, ROI & Lifestyle',
    link: `${BASE_URL}/tathawade-vs-wakad`,
    desc: 'Objective 2026 comparative analysis: why Tathawade offers 25% larger carpet area and higher rental yields than Wakad.'
  }
];

pillarPages.forEach(p => {
  items.push(`    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${p.link}</link>
      <guid isPermaLink="true">${p.link}</guid>
      <description>${escapeXml(p.desc)}</description>
      <pubDate>${now}</pubDate>
    </item>`);
});

// 2. Topical Category Pillar Hubs
const hubs = [
  { name: 'Connectivity & Proximity Hub', path: 'near', desc: 'Travel times and commute corridors to Hinjewadi Phase 1, 2, 3 and Mumbai-Pune Expressway.' },
  { name: 'Pricing & Cost Sheet Intelligence Hub', path: 'price', desc: 'Pre-launch pricing, all-inclusive payment schedules, and cost sheet breakdowns.' },
  { name: 'Buyer & Homeowner Due Diligence Guide', path: 'guide', desc: 'Legal verification, home loan pre-approvals, and construction timelines.' },
  { name: 'Tathawade Real Estate Market Trends', path: 'market', desc: 'Micro-market capital appreciation index, rental yields, and Pune Metro Line 3 impact.' },
  { name: 'Micro-Market Comparison Matrix', path: 'compare', desc: 'Competitive benchmark of Krisala Aventis vs other West Pune developments.' },
  { name: 'Architectural Specifications & Aluform Engineering', path: 'feature', desc: 'German Aluform monolithic construction, acoustic study pods, and green specifications.' },
  { name: 'Real Estate Editorial & Thought Leadership', path: 'blog', desc: 'Property investment advice, neighborhood insights, and lifestyle reports.' },
  { name: 'NRI Global Real Estate Investment Desk', path: 'invest', desc: 'Offshore investor portfolio guidance, high-yield leasing, and USD/AED remittances.' }
];

hubs.forEach(h => {
  const link = `${BASE_URL}/${h.path}`;
  items.push(`    <item>
      <title>${escapeXml(`Krisala Aventis Tathawade — ${h.name}`)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(h.desc)}</description>
      <pubDate>${now}</pubDate>
    </item>`);
});

// 3. Programmatic High-Priority Articles (Top 100)
const allProgrammatic = [...dominationData, ...nriData, ...coreData];
const sampledArticles = allProgrammatic.slice(0, 100);

sampledArticles.forEach(art => {
  const cleanFolder = (art.folder || '').trim().replace(/^\/+|\/+$/g, '');
  const cleanSlug = (art.url_slug || art.slug || '').replace('.html', '').replace(/^\/+|\/+$/g, '');
  if (!cleanFolder || !cleanSlug) return;

  const link = `${BASE_URL}/${cleanFolder}/${cleanSlug}`;
  items.push(`    <item>
      <title>${escapeXml(art.title || `Krisala Aventis Tathawade | ${cleanFolder}`)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(art.description || `Comprehensive real estate intelligence on Krisala Aventis Tathawade Pune.`)}</description>
      <pubDate>${now}</pubDate>
    </item>`);
});

const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Krisala Aventis Tathawade — Real Estate Syndication Feed</title>
    <link>${BASE_URL}/</link>
    <description>Official real estate syndication feed for Krisala Aventis Tathawade by Krisala Legacy. Premium 2.25 and 3.25 BHK Smart Study homes in West Pune.</description>
    <language>en-in</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items.join('\n')}
  </channel>
</rss>
`;

fs.writeFileSync(path.join(publicDir, 'feed.xml'), rssXml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssXml, 'utf8');
console.log(`✅ Generated RSS 2.0 Syndication Feeds:`);
console.log(`   - public/feed.xml (${items.length} items)`);
console.log(`   - public/rss.xml (${items.length} items)`);
