const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../app/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// Find the dangerouslySetInnerHTML block on line 14
const targetStart = '<div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `';
const targetEnd = '` }}></div>';

const startIndex = content.indexOf(targetStart);
if (startIndex !== -1) {
  const endIndex = content.indexOf(targetEnd, startIndex);
  if (endIndex !== -1) {
    let innerHTML = content.substring(startIndex + targetStart.length, endIndex);
    
    // Convert unclosed <img> or <br> to self-closing in JSX
    innerHTML = innerHTML.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
    innerHTML = innerHTML.replace(/<br>/g, '<br />');
    innerHTML = innerHTML.replace(/<br\s*>/g, '<br />');

    // Convert style="...;" strings to style={{ ... }} in JSX
    // Or keep them as clean JSX style objects where needed
    // Let's replace simple styles:
    innerHTML = innerHTML.replace(/style="display:flex; align-items:center; gap:8px;"/g, 'style={{ display: "flex", alignItems: "center", gap: "8px" }}');
    innerHTML = innerHTML.replace(/style="height:32px; width:auto; mix-blend-mode: screen;"/g, 'style={{ height: "32px", width: "auto", mixBlendMode: "screen" }}');
    innerHTML = innerHTML.replace(/style="font-weight:300; letter-spacing:2px; font-size:1.1rem; color:#fff;"/g, 'style={{ fontWeight: 300, letterSpacing: "2px", fontSize: "1.1rem", color: "#fff" }}');
    innerHTML = innerHTML.replace(/style="color: inherit; text-decoration: underline;"/g, 'style={{ color: "inherit", textDecoration: "underline" }}');
    innerHTML = innerHTML.replace(/style="display:inline-flex; align-items:center; gap:10px; flex-wrap:wrap;"/g, 'style={{ display: "inline-flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}');
    innerHTML = innerHTML.replace(/style="opacity:0.4;"/g, 'style={{ opacity: 0.4 }}');
    innerHTML = innerHTML.replace(/style="color: var\(--clr-gold\); font-weight:700;"/g, 'style={{ color: "var(--clr-gold)", fontWeight: 700 }}');
    innerHTML = innerHTML.replace(/style="text-transform: uppercase"/g, 'style={{ textTransform: "uppercase" }}');
    innerHTML = innerHTML.replace(/style="border-color: rgba\(202,163,80,0.4\); color: var\(--clr-gold\);"/g, 'style={{ borderColor: "rgba(202,163,80,0.4)", color: "var(--clr-gold)" }}');
    innerHTML = innerHTML.replace(/style="background: rgba\(255,255,255,0.02\); border-top: 1px solid var\(--clr-glass-border\);"/g, 'style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid var(--clr-glass-border)" }}');
    innerHTML = innerHTML.replace(/style="width: 100%; border-collapse: collapse; margin-top: 20px;"/g, 'style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}');
    innerHTML = innerHTML.replace(/style="border-bottom: 1px solid var\(--clr-glass-border\);"/g, 'style={{ borderBottom: "1px solid var(--clr-glass-border)" }}');
    innerHTML = innerHTML.replace(/style="padding: 15px; color: var\(--clr-gold\); font-weight: 600;"/g, 'style={{ padding: "15px", color: "var(--clr-gold)", fontWeight: 600 }}');
    innerHTML = innerHTML.replace(/style="padding: 15px; color: var\(--clr-silver\);"/g, 'style={{ padding: "15px", color: "var(--clr-silver)" }}');
    innerHTML = innerHTML.replace(/style="background: var\(--clr-gold\); color: #000; border: none;"/g, 'style={{ background: "var(--clr-gold)", color: "#000", border: "none" }}');

    // Replace class= with className=
    innerHTML = innerHTML.replace(/\sclass=/g, ' className=');

    // Remove duplicate attributes if any
    innerHTML = innerHTML.replace(/width="1024"\s+height="555"\s+alt="([^"]*)"\s+width="1024"\s+height="555"/g, 'width="1024" height="555" alt="$1"');

    content = content.substring(0, startIndex) + innerHTML + content.substring(endIndex + targetEnd.length);
    console.log('✅ Converted dangerouslySetInnerHTML to native Next.js JSX!');
  }
}

// Convert any remaining class= in the whole file to className=
content = content.replace(/\sclass="([^"]*)"/g, ' className="$1"');

fs.writeFileSync(pagePath, content, 'utf8');
console.log('✅ Successfully wrote clean JSX to app/page.tsx');
