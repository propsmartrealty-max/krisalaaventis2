const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../app/page.tsx');
const keywordsData = require('../data/pune-market-keywords.json');
let content = fs.readFileSync(pagePath, 'utf8');

function renderKeywords(list) {
  return list.map(item => `
    <a title="${item.term} — ${item.intent}" href="${item.url}" class="authority-keyword-chip">
      <span class="kw-text">${item.term}</span>
      <span class="kw-intent">${item.intent}</span>
    </a>
  `).join('');
}

const authorityIndexHTML = `
<section id="pune-real-estate-index" class="section pune-authority-section reveal">
  <div class="container">
    <div class="section-tag" style="background: rgba(202, 163, 80, 0.15); color: var(--clr-gold); border-color: rgba(202, 163, 80, 0.3);">🏛️ Google Knowledge Graph &amp; Market Directory</div>
    <div class="section-header center">
      <h2>Master Pune Real Estate &amp; <span class="gold shimmer-text">Krisala Legacy Index.</span></h2>
      <p>Comprehensive geographic authority directory spanning all Pune micro-markets, IT corridors, PCMC growth nodes, and Krisala residential landmarks.</p>
    </div>

    <div class="authority-tabs">
      <button class="auth-tab-btn active" data-auth="auth-krisala">🏢 Krisala Legacy Portfolio (${keywordsData.krisala_brand_hierarchy.length})</button>
      <button class="auth-tab-btn" data-auth="auth-west">💼 West Pune IT Corridor (${keywordsData.west_pune_it_corridor.length})</button>
      <button class="auth-tab-btn" data-auth="auth-pcmc">🏛️ PCMC Growth Nodes (${keywordsData.pcmc_growth_nodes.length})</button>
      <button class="auth-tab-btn" data-auth="auth-central">🌆 Prime Central &amp; East (${keywordsData.central_east_south_pune.length})</button>
      <button class="auth-tab-btn" data-auth="auth-intent">🎯 High-Intent Buyer Silos (${keywordsData.high_intent_buyer_silos.length})</button>
    </div>

    <div class="authority-panels">
      <div class="authority-panel active" id="auth-krisala">
        <div class="authority-chips-grid">
          ${renderKeywords(keywordsData.krisala_brand_hierarchy)}
        </div>
      </div>

      <div class="authority-panel" id="auth-west">
        <div class="authority-chips-grid">
          ${renderKeywords(keywordsData.west_pune_it_corridor)}
        </div>
      </div>

      <div class="authority-panel" id="auth-pcmc">
        <div class="authority-chips-grid">
          ${renderKeywords(keywordsData.pcmc_growth_nodes)}
        </div>
      </div>

      <div class="authority-panel" id="auth-central">
        <div class="authority-chips-grid">
          ${renderKeywords(keywordsData.central_east_south_pune)}
        </div>
      </div>

      <div class="authority-panel" id="auth-intent">
        <div class="authority-chips-grid">
          ${renderKeywords(keywordsData.high_intent_buyer_silos)}
        </div>
      </div>
    </div>
  </div>
</section>
`;

// Insert before the footer section (<section className="seo-matrix-section")
if (content.includes('className="seo-matrix-section"') || content.includes('class="seo-matrix-section"')) {
  const targetStr = content.includes('className="seo-matrix-section"') ? '<section className="seo-matrix-section"' : '<section class="seo-matrix-section"';
  const insertIndex = content.indexOf(targetStr);
  content = content.slice(0, insertIndex) + '\n' + authorityIndexHTML + '\n' + content.slice(insertIndex);
  console.log('✅ Injected Master Pune Real Estate Authority Index before seo-matrix-section');
}

// Convert any class= to className=
content = content.replace(/\sclass="([^"]*)"/g, ' className="$1"');

fs.writeFileSync(pagePath, content, 'utf8');
console.log('✅ Successfully updated page.tsx with Master Authority Index!');
