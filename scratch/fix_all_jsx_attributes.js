const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../app/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// For line 14: ensure raw HTML has class=
// For lines 16 to 959: ensure JSX has className=
// For line 960: ensure raw HTML has class=

// Let's do a precise split by dangerouslySetInnerHTML blocks:
const parts = content.split(/dangerouslySetInnerHTML=\{\{\s*__html:\s*\`/);

let newContent = parts[0];

for (let i = 1; i < parts.length; i++) {
  const closeIdx = parts[i].indexOf('` }}');
  if (closeIdx !== -1) {
    let rawHtml = parts[i].substring(0, closeIdx);
    let restOfJsx = parts[i].substring(closeIdx);
    
    // In raw HTML: class=
    rawHtml = rawHtml.replace(/\sclassName=/g, ' class=');
    
    // In rest of JSX: className=
    // Note: restOfJsx starts with ` }} ...
    let jsxAfterClose = restOfJsx.substring(4); // after ` }}
    jsxAfterClose = jsxAfterClose.replace(/\sclass=\"([^\"]*)\"/g, ' className="$1"');
    
    newContent += 'dangerouslySetInnerHTML={{ __html: `' + rawHtml + '` }}' + jsxAfterClose;
  } else {
    newContent += 'dangerouslySetInnerHTML={{ __html: `' + parts[i];
  }
}

fs.writeFileSync(pagePath, newContent, 'utf8');
console.log('✅ Synchronized HTML class= and JSX className= attributes across page.tsx');
