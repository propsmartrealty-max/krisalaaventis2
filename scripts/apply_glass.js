const fs = require('fs');
const cssPath = './public/assets/css/animations.css';

const glassCSS = `
/* =========================================
   8. STRATEGIC GLASSMORPHISM ENGINE
   ========================================= */

/* Frosted Glass Base Utility */
.glass-panel {
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

/* Navbar Scrolled Override */
.pill-navbar.scrolled {
  background: rgba(8, 9, 12, 0.65) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

/* Feature Cards Override */
.portfolio-card, .spec-card, .zone-card, .cluster-card, .amenity-cat {
  background: rgba(255, 255, 255, 0.02) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Enquiry Form Float */
.enquiry-left, .enquiry-right {
  background: rgba(255, 255, 255, 0.02) !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 24px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Sticky Ribbon Overlay */
.sticky-ribbon {
  background: rgba(202, 163, 80, 0.15) !important;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(202, 163, 80, 0.3);
}
`;

fs.appendFileSync(cssPath, glassCSS);
console.log("Glassmorphism CSS appended to animations.css");

// Now we need to append it to style.css as well, since animations.css was previously cat'd into style.css
const stylePath = './public/assets/css/style.css';
fs.appendFileSync(stylePath, glassCSS);
console.log("Glassmorphism CSS appended to style.css");
