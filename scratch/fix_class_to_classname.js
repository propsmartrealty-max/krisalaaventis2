const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../app/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// Replace all class=" with className=" in page.tsx
content = content.replace(/\sclass="([^"]*)"/g, ' className="$1"');

// Fix any HTML comment artifacts if any
content = content.replace(/<!--[\s\S]*?-->/g, '');

fs.writeFileSync(pagePath, content, 'utf8');
console.log('✅ Replaced all class= with className= in app/page.tsx');
