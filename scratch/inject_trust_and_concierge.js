const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../app/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// 1. Legal Trust Vault HTML
const trustVaultHTML = `
<section id="rera-vault" class="section trust-vault-section reveal">
  <div class="container">
    <div class="section-tag" style="background: rgba(46, 213, 115, 0.15); color: #2ed573; border-color: rgba(46, 213, 115, 0.3);">🏛️ 100% Legally Verified &amp; Compliant</div>
    <div class="section-header center">
      <h2>Official MahaRERA &amp; <span class="gold shimmer-text">Legal Compliance Vault.</span></h2>
      <p>Total transparency is the cornerstone of Krisala Legacy. Verify all statutory government sanctions, RERA certificates, and bank consortium pre-approvals.</p>
    </div>

    <div class="vault-grid">
      <div class="vault-card reveal reveal-3d glass-glow">
        <div class="vault-icon">📜</div>
        <h4>MahaRERA Registered</h4>
        <div class="vault-meta">Reg No: <strong>P52100080336</strong></div>
        <p>Officially registered with Maharashtra Real Estate Regulatory Authority. All project phases and disclosures are public record.</p>
        <a title="Verify on MahaRERA Portal" href="https://maharera.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer" class="vault-link">Verify on Official MahaRERA Portal ↗</a>
      </div>

      <div class="vault-card reveal reveal-3d glass-glow">
        <div class="vault-icon">🏛️</div>
        <h4>PCMC Sanctioned Plans</h4>
        <div class="vault-meta">Commencement Cert (CC) Approved</div>
        <p>Full architectural, structural, and town planning clearances obtained from Pimpri Chinchwad Municipal Corporation (PCMC).</p>
        <a title="Request Sanction Copies" href="#contact" class="vault-link">Request Sanction Copies ↗</a>
      </div>

      <div class="vault-card reveal reveal-3d glass-glow">
        <div class="vault-icon">⚖️</div>
        <h4>Clear Marketable Title</h4>
        <div class="vault-meta">30-Year Search Report Clear</div>
        <p>Title verification conducted by senior real estate advocates with zero legal encumbrance and absolute land ownership.</p>
        <a title="View Title Certificate" href="#contact" class="vault-link">View Legal Title Report ↗</a>
      </div>

      <div class="vault-card reveal reveal-3d glass-glow">
        <div class="vault-icon">🏦</div>
        <h4>Bank Consortium Approved</h4>
        <div class="vault-meta">APF Codes Generated</div>
        <p>Pre-approved for maximum home loan funding (up to 85-90%) with SBI, HDFC, ICICI, Bank of Baroda, Axis, and Kotak Mahindra.</p>
        <a title="Check Loan Eligibility" href="#calculators" class="vault-link">Check Bank Loan Rates ↗</a>
      </div>
    </div>
  </div>
</section>
`;

// 2. Competitor Comparison Matrix HTML
const competitorMatrixHTML = `
<section id="comparison" class="section comparison-section reveal">
  <div class="container">
    <div class="section-tag">Market Benchmark Analysis</div>
    <div class="section-header center">
      <h2>Krisala Aventis vs. <span class="gold shimmer-text">Tathawade Competitors.</span></h2>
      <p>A transparent comparative breakdown of construction technology, space efficiency, and value proposition in West Pune.</p>
    </div>

    <div class="table-responsive" style="margin-top: 40px; border-radius: 20px; overflow: hidden; border: 1px solid var(--clr-glass-border);">
      <table class="sge-table" style="width: 100%; border-collapse: collapse; text-align: left; background: rgba(5,6,8,0.7); backdrop-filter: blur(20px);">
        <thead>
          <tr style="background: rgba(202, 163, 80, 0.15); border-bottom: 2px solid var(--clr-gold);">
            <th style="padding: 18px 20px; color: var(--clr-gold); font-size: 0.95rem; text-transform: uppercase;">Key Parameter</th>
            <th style="padding: 18px 20px; color: #fff; font-size: 1rem; font-weight: 700; background: rgba(202, 163, 80, 0.25);">⭐ Krisala Aventis</th>
            <th style="padding: 18px 20px; color: var(--clr-silver); font-size: 0.9rem;">Godrej Tathawade</th>
            <th style="padding: 18px 20px; color: var(--clr-silver); font-size: 0.9rem;">Kohinoor Courtyard</th>
            <th style="padding: 18px 20px; color: var(--clr-silver); font-size: 0.9rem;">Typical Market Project</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
            <td style="padding: 16px 20px; font-weight: 600; color: var(--clr-silk);">Construction Tech</td>
            <td style="padding: 16px 20px; color: #2ed573; font-weight: 700; background: rgba(46, 213, 115, 0.05);">✓ 100% Aluform Shuttering</td>
            <td style="padding: 16px 20px; color: var(--clr-silver);">Aluform</td>
            <td style="padding: 16px 20px; color: var(--clr-silver);">Conventional / Aluform</td>
            <td style="padding: 16px 20px; color: #ff4757;">Conventional Brickwork</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
            <td style="padding: 16px 20px; font-weight: 600; color: var(--clr-silk);">Smart Study Room</td>
            <td style="padding: 16px 20px; color: #2ed573; font-weight: 700; background: rgba(46, 213, 115, 0.05);">✓ Included (2.25 &amp; 3.25 BHK)</td>
            <td style="padding: 16px 20px; color: #ff4757;">✗ Standard Only</td>
            <td style="padding: 16px 20px; color: #ff4757;">✗ Standard Only</td>
            <td style="padding: 16px 20px; color: #ff4757;">✗ Extra Cost for Study</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
            <td style="padding: 16px 20px; font-weight: 600; color: var(--clr-silk);">Lifestyle Amenities</td>
            <td style="padding: 16px 20px; color: #2ed573; font-weight: 700; background: rgba(46, 213, 115, 0.05);">✓ 40+ Rooftop &amp; Podium</td>
            <td style="padding: 16px 20px; color: var(--clr-silver);">25+ Club Amenities</td>
            <td style="padding: 16px 20px; color: var(--clr-silver);">20+ Amenities</td>
            <td style="padding: 16px 20px; color: var(--clr-silver);">12-15 Basic Podiums</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
            <td style="padding: 16px 20px; font-weight: 600; color: var(--clr-silk);">Expressway Access</td>
            <td style="padding: 16px 20px; color: #2ed573; font-weight: 700; background: rgba(46, 213, 115, 0.05);">✓ 2 Mins Direct Highway</td>
            <td style="padding: 16px 20px; color: var(--clr-silver);">6-8 Mins</td>
            <td style="padding: 16px 20px; color: var(--clr-silver);">10 Mins</td>
            <td style="padding: 16px 20px; color: #ff4757;">15+ Mins Interior Traffic</td>
          </tr>
          <tr>
            <td style="padding: 16px 20px; font-weight: 600; color: var(--clr-silk);">Pre-Launch ROI Potential</td>
            <td style="padding: 16px 20px; color: var(--clr-gold); font-weight: 700; background: rgba(202, 163, 80, 0.1);">🔥 Highest Capital Growth Index</td>
            <td style="padding: 16px 20px; color: var(--clr-silver);">Moderate (Matured Pricing)</td>
            <td style="padding: 16px 20px; color: var(--clr-silver);">Moderate</td>
            <td style="padding: 16px 20px; color: var(--clr-silver);">Standard Market Average</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
`;

// 3. Smart WhatsApp Concierge Widget HTML
const waConciergeHTML = `
<!-- Smart WhatsApp Concierge Floating Widget -->
<div id="waConcierge" class="wa-concierge-widget">
  <div id="waDrawer" class="wa-drawer">
    <div class="wa-drawer-header">
      <div class="wa-avatar">💬</div>
      <div>
        <div class="wa-title">Krisala Sales Concierge</div>
        <div class="wa-status"><span class="wa-online-dot"></span> Online | Instant Response</div>
      </div>
      <button id="closeWaDrawer" class="wa-close-btn" aria-label="Close Concierge">✕</button>
    </div>
    <div class="wa-drawer-body">
      <p class="wa-intro">Hello! Welcome to <strong>Krisala Aventis Tathawade</strong>. How can our team assist you today?</p>
      <div class="wa-quick-actions">
        <a href="https://api.whatsapp.com/send?phone=917744009295&text=Hi%2C%20please%20send%20me%20the%20Krisala%20Aventis%202.25%20%26%203.25%20BHK%20Cost%20Sheet%20PDF%20and%20Price%20List." target="_blank" rel="noopener noreferrer" class="wa-action-pill">📄 Send Cost Sheet PDF</a>
        <a href="https://api.whatsapp.com/send?phone=917744009295&text=Hi%2C%20I%20would%20like%20to%20book%20a%20Complimentary%20Cab%20for%20a%20Site%20Visit%20to%20Krisala%20Aventis%20Tathawade." target="_blank" rel="noopener noreferrer" class="wa-action-pill">🚗 Book Free Site Visit Cab</a>
        <a href="https://api.whatsapp.com/send?phone=917744009295&text=Hi%2C%20please%20share%20the%20Exclusive%20Pre-Launch%20Spot-Booking%20Discount%20details%20for%20Krisala%20Aventis." target="_blank" rel="noopener noreferrer" class="wa-action-pill">💰 Claim Pre-Launch Discount</a>
        <a href="https://api.whatsapp.com/send?phone=917744009295&text=Hi%2C%20I%20am%20an%20NRI%20investor%20interested%20in%20Krisala%20Aventis%20Tathawade.%20Please%20connect%20me%20with%20your%20NRI%20Wealth%20Desk." target="_blank" rel="noopener noreferrer" class="wa-action-pill">🌍 NRI Investment Desk (USD/AED)</a>
      </div>
    </div>
  </div>

  <button id="toggleWaConcierge" class="wa-floating-btn" aria-label="Open WhatsApp Concierge">
    <span class="wa-btn-icon">💬</span>
    <span class="wa-btn-text">Chat with Sales</span>
  </button>
</div>
`;

// Inject before #contact or after #calculators
if (content.includes('id="calculators"')) {
  const calcEnd = '</section>';
  const calcIndex = content.indexOf('id="calculators"');
  const insertIndex = content.indexOf(calcEnd, calcIndex) + calcEnd.length;
  
  content = content.slice(0, insertIndex) + '\n' + trustVaultHTML + '\n' + competitorMatrixHTML + content.slice(insertIndex);
  console.log('✅ Injected Trust Vault & Competitor Matrix after Calculators');
}

// Inject WhatsApp widget before closing main/div
if (!content.includes('id="waConcierge"')) {
  const footerIndex = content.lastIndexOf('</main>');
  if (footerIndex !== -1) {
    content = content.slice(0, footerIndex) + '\n' + waConciergeHTML + '\n' + content.slice(footerIndex);
    console.log('✅ Injected WhatsApp Concierge Widget before </main>');
  }
}

fs.writeFileSync(pagePath, content, 'utf8');
console.log('✅ Successfully updated page.tsx with Trust Vault, Competitor Matrix, and WhatsApp Concierge!');
