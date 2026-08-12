const fs = require('fs');
const pagePath = './app/page.tsx';

let pageContent = fs.readFileSync(pagePath, 'utf8');

const oldLogoHTML = 'class="logo" style="display:flex; align-items:center; gap:8px;"><img src="/assets/images/logo.jpg" alt="Krisala Logo" style="height:24px; width:auto;" /> <span style="font-weight:300; letter-spacing:2px;"';

const newLogoHTML = 'class="logo" style="display:flex; align-items:center; gap:8px;"><img src="/assets/images/logo.jpg" alt="Krisala Logo" style="height:32px; width:auto; mix-blend-mode: screen;" /> <span style="font-weight:300; letter-spacing:2px; font-size:1.1rem; color:#fff;"';

if (pageContent.includes(oldLogoHTML)) {
    pageContent = pageContent.replace(oldLogoHTML, newLogoHTML);
    fs.writeFileSync(pagePath, pageContent);
    console.log("Successfully added mix-blend-mode to the logo image in page.tsx");
} else {
    console.log("Could not find the logo HTML in page.tsx");
}
