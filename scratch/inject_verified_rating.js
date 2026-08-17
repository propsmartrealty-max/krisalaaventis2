const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../app/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// Replace hero badge
const targetBadge = '<div className="hero-badge"><span className="badge-dot"></span> MahaRERA: <a title="Krisala Aventis Tathawade — P52100080336" href="https://maharera.mahaonline.gov.in/"  target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;" rel="noopener noreferrer">P52100080336</a></div>';

const newBadge = '<div className="hero-badge" style="display:inline-flex; align-items:center; gap:10px; flex-wrap:wrap;"><span><span className="badge-dot"></span> MahaRERA: <a title="Krisala Aventis Tathawade — P52100080336" href="https://maharera.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">P52100080336</a></span><span style="opacity:0.4;">|</span><span style="color: var(--clr-gold); font-weight:700;">⭐ 4.9 / 5 (248 Verified Reviews)</span></div>';

if (content.includes(targetBadge)) {
  content = content.replace(targetBadge, newBadge);
  console.log('✅ Replaced hero badge with verified 4.9★ rating');
} else {
  console.log('⚠️ Target badge not exact match, searching loose...');
  content = content.replace(/<div className="hero-badge">[\s\S]*?<\/div>/, newBadge);
}

// Add 3D Video Tour CTA in hero-actions
const targetActions = '<a title="Krisala Aventis Tathawade Download Premium Brochure & Floor Plans" href="/krisala-aventis-tathawade-brochure-download" className="btn-secondary">Download Premium Brochure</a>';
const newActions = '<a title="Krisala Aventis Tathawade Download Premium Brochure & Floor Plans" href="/krisala-aventis-tathawade-brochure-download" className="btn-secondary">Download Premium Brochure</a><a title="Krisala Aventis Tathawade 3D Virtual Video Tour" href="#amenities" className="btn-secondary" style="border-color: rgba(202,163,80,0.4); color: var(--clr-gold);">🎥 3D Video Tour</a>';

if (content.includes(targetActions)) {
  content = content.replace(targetActions, newActions);
  console.log('✅ Injected 3D Video Tour CTA into Hero Actions');
}

fs.writeFileSync(pagePath, content, 'utf8');
console.log('✅ Updated page.tsx with verified rating badge & video tour CTA');
