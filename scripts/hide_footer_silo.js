const fs = require('fs');
const filePath = './app/page.tsx';

let content = fs.readFileSync(filePath, 'utf8');

// The original injected ul tag:
const targetUL = `<ul style="list-style: none; padding: 0; font-size: 0.85rem; line-height: 2;">`;

const fullyReplacedUL = `<ul class="trending-silo" style="list-style: none; padding: 0; font-size: 0.85rem; line-height: 2; max-height: 140px; overflow-y: auto; scrollbar-width: none; -ms-overflow-style: none;"><style>.trending-silo::-webkit-scrollbar { display: none; }</style>`;

if (content.includes(targetUL)) {
    content = content.replace(targetUL, fullyReplacedUL);
    fs.writeFileSync(filePath, content);
    console.log("Successfully added max-height to the trending silo.");
} else {
    console.log("Target UL not found. It might have already been modified.");
}
