const fs = require('fs');
const dominationData = require('../data/krisala-domination-seo.json');

const filePath = './app/page.tsx';
let pageContent = fs.readFileSync(filePath, 'utf-8');

// Extract the first 30 links
const entryLinks = dominationData.slice(0, 30).map(page => {
    return `<li><a title="${page.title}" href="/${page.folder}/${page.url_slug.replace('.html', '')}" style="color: #888; text-decoration: none;">${page.h1}</a></li>`;
}).join('');

const newSiloBlock = `
<div>
<h5 style="color: #caa350; margin-bottom: 1rem; font-size: 0.9rem; text-transform: uppercase;">Trending Real Estate Searches</h5>
<ul style="list-style: none; padding: 0; font-size: 0.85rem; line-height: 2;">
${entryLinks}
</ul>
</div>
`;

// Insert the new block into the External Web Resources grid section.
// Looking for: <div><h5 style="color: #caa350; margin-bottom: 1rem; font-size: 0.9rem; text-transform: uppercase;">External Web Resources</h5>
const searchTarget = `<div><h5 style="color: #caa350; margin-bottom: 1rem; font-size: 0.9rem; text-transform: uppercase;">External Web Resources</h5>`;
const replacement = newSiloBlock.replace(/\n/g, '') + searchTarget;

if (pageContent.includes(searchTarget)) {
    pageContent = pageContent.replace(searchTarget, replacement);
    fs.writeFileSync(filePath, pageContent);
    console.log("Successfully injected PageRank bridge into homepage.");
} else {
    console.log("Target block not found.");
}
