const fs = require('fs');
const filePath = './app/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Inject script
if (!content.includes('cinematic.js')) {
    content = content.replace(
        '<Script src="/assets/js/oracle.js" strategy="lazyOnload" />',
        '<Script src="/assets/js/oracle.js" strategy="lazyOnload" />\n      <Script src="/assets/js/cinematic.js" strategy="lazyOnload" />'
    );
}

// 2. Add Magnetic and Shimmer to Primary Buttons
content = content.replace(/class="btn-primary"/g, 'class="btn-primary shimmer-btn magnetic"');
content = content.replace(/class="cta-pill"/g, 'class="cta-pill magnetic"');
content = content.replace(/id="hero-cta"/g, 'id="hero-cta"'); // Keep as is, it got magnetic from above

// 3. Add 3D Reveal to specific cards (replace standard reveal)
content = content.replace(/class="portfolio-card reveal"/g, 'class="portfolio-card reveal reveal-3d glass-glow"');
content = content.replace(/class="spec-card reveal"/g, 'class="spec-card reveal reveal-3d glass-glow"');
content = content.replace(/class="zone-card reveal"/g, 'class="zone-card reveal reveal-3d glass-glow"');
content = content.replace(/class="overview-left reveal"/g, 'class="overview-left reveal reveal-3d"');
content = content.replace(/class="overview-right reveal"/g, 'class="overview-right reveal reveal-3d"');
content = content.replace(/class="blog-card reveal"/g, 'class="blog-card reveal reveal-3d glass-glow"');
content = content.replace(/class="blog-card featured reveal"/g, 'class="blog-card featured reveal reveal-3d glass-glow"');

// 4. Add Shimmer text to gold spans in headers
content = content.replace(/<span class="gold">/g, '<span class="gold shimmer-text">');

// 5. Add floating icons
content = content.replace(/class="feature-icon"/g, 'class="feature-icon floating-icon"');
content = content.replace(/class="spec-icon"/g, 'class="spec-icon floating-icon"');
content = content.replace(/class="zone-icon"/g, 'class="zone-icon floating-icon"');

fs.writeFileSync(filePath, content);
console.log("Successfully injected cinematic classes into page.tsx");
