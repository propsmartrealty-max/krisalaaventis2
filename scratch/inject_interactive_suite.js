const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../app/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// HTML for Tower Inventory Matrix
const towerMatrixHTML = `
<section id="inventory-matrix" class="section tower-matrix-section reveal">
  <div class="container">
    <div class="section-tag">Phase 1 Live Inventory Status</div>
    <div class="section-header center">
      <h2>Krisala Aventis <span class="gold shimmer-text">Tower Inventory Matrix.</span></h2>
      <p>Real-time availability tracker across all 4 iconic high-rise towers. Secure your preferred floor and panoramic view.</p>
    </div>
    <div class="tower-grid">
      <div class="tower-card reveal reveal-3d glass-glow">
        <div class="tower-header">
          <span class="tower-name">Tower A</span>
          <span class="tower-status-badge badge-selling">🔥 86% Booked</span>
        </div>
        <div class="tower-progress-bar">
          <div class="tower-progress-fill" style="width: 86%;"></div>
        </div>
        <ul class="tower-specs-list">
          <li><span>Configuration:</span> <strong>2.25 BHK Smart Study</strong></li>
          <li><span>Floors:</span> <strong>G + 26 Floors</strong></li>
          <li><span>Carpet Area:</span> <strong>839 Sq.ft.</strong></li>
          <li><span>Vista:</span> <strong>Podium Pool &amp; Garden</strong></li>
          <li><span>Available Units:</span> <strong style="color: var(--clr-gold);">Limited (Floors 18-24)</strong></li>
        </ul>
        <a title="Reserve Unit in Tower A" href="#contact" class="btn-primary" style="width: 100%; text-align: center; font-size: 0.85rem; padding: 10px 16px;">Reserve Tower A Unit →</a>
      </div>

      <div class="tower-card reveal reveal-3d glass-glow">
        <div class="tower-header">
          <span class="tower-name">Tower B</span>
          <span class="tower-status-badge badge-limited">⚡ 78% Booked</span>
        </div>
        <div class="tower-progress-bar">
          <div class="tower-progress-fill" style="width: 78%;"></div>
        </div>
        <ul class="tower-specs-list">
          <li><span>Configuration:</span> <strong>2.25 BHK Smart Study</strong></li>
          <li><span>Floors:</span> <strong>G + 26 Floors</strong></li>
          <li><span>Carpet Area:</span> <strong>839 Sq.ft.</strong></li>
          <li><span>Vista:</span> <strong>Expressway Skyline</strong></li>
          <li><span>Available Units:</span> <strong style="color: var(--clr-gold);">Open for Selection</strong></li>
        </ul>
        <a title="Reserve Unit in Tower B" href="#contact" class="btn-primary" style="width: 100%; text-align: center; font-size: 0.85rem; padding: 10px 16px;">Reserve Tower B Unit →</a>
      </div>

      <div class="tower-card reveal reveal-3d glass-glow">
        <div class="tower-header">
          <span class="tower-name">Tower C</span>
          <span class="tower-status-badge badge-selling">🔥 82% Booked</span>
        </div>
        <div class="tower-progress-bar">
          <div class="tower-progress-fill" style="width: 82%;"></div>
        </div>
        <ul class="tower-specs-list">
          <li><span>Configuration:</span> <strong>3.25 BHK Luxury Suite</strong></li>
          <li><span>Floors:</span> <strong>G + 26 Floors</strong></li>
          <li><span>Carpet Area:</span> <strong>1116 Sq.ft.</strong></li>
          <li><span>Vista:</span> <strong>Central Green Courtyard</strong></li>
          <li><span>Available Units:</span> <strong style="color: var(--clr-gold);">Corner Suites Available</strong></li>
        </ul>
        <a title="Reserve Unit in Tower C" href="#contact" class="btn-primary" style="width: 100%; text-align: center; font-size: 0.85rem; padding: 10px 16px;">Reserve Tower C Unit →</a>
      </div>

      <div class="tower-card reveal reveal-3d glass-glow">
        <div class="tower-header">
          <span class="tower-name">Tower D</span>
          <span class="tower-status-badge badge-exclusive">✨ Executive Phase</span>
        </div>
        <div class="tower-progress-bar">
          <div class="tower-progress-fill" style="width: 65%;"></div>
        </div>
        <ul class="tower-specs-list">
          <li><span>Configuration:</span> <strong>3.25 BHK Luxury Suite</strong></li>
          <li><span>Floors:</span> <strong>G + 26 Floors</strong></li>
          <li><span>Carpet Area:</span> <strong>1116 Sq.ft.</strong></li>
          <li><span>Vista:</span> <strong>Panoramic Hinjewadi Hills</strong></li>
          <li><span>Available Units:</span> <strong style="color: var(--clr-gold);">Special Launch Inventory</strong></li>
        </ul>
        <a title="Reserve Unit in Tower D" href="#contact" class="btn-primary" style="width: 100%; text-align: center; font-size: 0.85rem; padding: 10px 16px;">Reserve Tower D Unit →</a>
      </div>
    </div>
  </div>
</section>
`;

// HTML for Interactive Calculators Suite
const calcSuiteHTML = `
<section id="calculators" class="section calc-suite-section reveal">
  <div class="container">
    <div class="section-tag">Interactive Financial &amp; ROI Suite</div>
    <div class="section-header center">
      <h2>Buyer Decision &amp; <span class="gold shimmer-text">Financial Intelligence.</span></h2>
      <p>Estimate your monthly mortgage, 5-year capital appreciation, and PCMC registration charges with 100% transparency.</p>
    </div>

    <div class="calc-tabs">
      <button class="calc-tab-btn active" data-calc="emi-tab" id="tab-emi">🏦 Smart Home Loan EMI Planner</button>
      <button class="calc-tab-btn" data-calc="roi-tab" id="tab-roi">📈 5-Year Capital Growth &amp; Rental Yield</button>
      <button class="calc-tab-btn" data-calc="stamp-tab" id="tab-stamp">🏛️ PCMC Stamp Duty &amp; Registration</button>
    </div>

    <!-- 1. EMI CALCULATOR PANEL -->
    <div class="calc-panel active" id="emi-tab">
      <div class="calc-grid">
        <div class="calc-inputs">
          <div class="calc-input-group">
            <div class="calc-label-row">
              <span class="calc-label">Total Loan Amount (₹)</span>
              <span class="calc-value-badge" id="emi-amount-badge">₹ 85,00,000</span>
            </div>
            <input type="range" class="calc-slider" id="emi-amount-slider" min="3000000" max="20000000" step="100000" value="8500000">
          </div>

          <div class="calc-input-group">
            <div class="calc-label-row">
              <span class="calc-label">Interest Rate (% p.a.)</span>
              <span class="calc-value-badge" id="emi-rate-badge">8.50%</span>
            </div>
            <input type="range" class="calc-slider" id="emi-rate-slider" min="7.0" max="12.0" step="0.05" value="8.50">
            <div class="bank-presets">
              <button class="bank-pill active" data-rate="8.50">SBI (8.50%)</button>
              <button class="bank-pill" data-rate="8.70">HDFC (8.70%)</button>
              <button class="bank-pill" data-rate="8.75">ICICI (8.75%)</button>
              <button class="bank-pill" data-rate="8.80">Axis (8.80%)</button>
            </div>
          </div>

          <div class="calc-input-group">
            <div class="calc-label-row">
              <span class="calc-label">Loan Tenure (Years)</span>
              <span class="calc-value-badge" id="emi-tenure-badge">20 Years</span>
            </div>
            <input type="range" class="calc-slider" id="emi-tenure-slider" min="5" max="30" step="1" value="20">
          </div>
        </div>

        <div class="calc-result-box">
          <div class="result-main">
            <div class="result-sub">Estimated Monthly EMI</div>
            <div class="result-amount" id="emi-monthly-output">₹ 73,745</div>
            <span style="font-size: 0.75rem; color: var(--clr-wa); font-weight: 600;">✓ Pre-Approved with Major Nationalized Banks</span>
          </div>
          <div class="result-breakdown">
            <div class="breakdown-row">
              <span>Principal Amount:</span>
              <span id="emi-principal-output">₹ 85,00,000</span>
            </div>
            <div class="breakdown-row">
              <span>Total Interest Payable:</span>
              <span id="emi-interest-output">₹ 91,98,800</span>
            </div>
            <div class="breakdown-row" style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
              <span>Total Payment (Principal + Interest):</span>
              <span id="emi-total-output" style="color: var(--clr-gold);">₹ 1,76,98,800</span>
            </div>
          </div>
          <a title="Lock Developer Subvention Scheme" href="#contact" class="btn-primary shimmer-btn" style="width: 100%; text-align: center; margin-top: 10px;">Lock Special Home Loan Rates →</a>
        </div>
      </div>
    </div>

    <!-- 2. CAPITAL GROWTH & ROI PANEL -->
    <div class="calc-panel" id="roi-tab">
      <div class="calc-grid">
        <div class="calc-inputs">
          <div class="calc-input-group">
            <div class="calc-label-row">
              <span class="calc-label">Current Property Value (₹)</span>
              <span class="calc-value-badge" id="roi-prop-badge">₹ 95,00,000</span>
            </div>
            <input type="range" class="calc-slider" id="roi-prop-slider" min="6000000" max="20000000" step="500000" value="9500000">
          </div>

          <div class="calc-input-group">
            <div class="calc-label-row">
              <span class="calc-label">Expected Annual Appreciation Rate (%)</span>
              <span class="calc-value-badge" id="roi-rate-badge">12.5%</span>
            </div>
            <input type="range" class="calc-slider" id="roi-rate-slider" min="6.0" max="18.0" step="0.5" value="12.5">
            <div class="bank-presets">
              <button class="bank-pill active" data-roi="12.5">Tathawade IT Corridor (12.5%)</button>
              <button class="bank-pill" data-roi="10.0">Wakad Average (10.0%)</button>
              <button class="bank-pill" data-roi="14.0">Metro Line 3 Boost (14.0%)</button>
            </div>
          </div>

          <div class="calc-input-group">
            <div class="calc-label-row">
              <span class="calc-label">Investment Horizon</span>
              <span class="calc-value-badge" id="roi-years-badge">5 Years</span>
            </div>
            <input type="range" class="calc-slider" id="roi-years-slider" min="1" max="10" step="1" value="5">
          </div>
        </div>

        <div class="calc-result-box">
          <div class="result-main">
            <div class="result-sub">Projected Valuation (in 5 Yrs)</div>
            <div class="result-amount" id="roi-future-output">₹ 1,71,19,450</div>
            <span style="font-size: 0.75rem; color: var(--clr-gold); font-weight: 600;">🔥 +₹ 76.19 Lakh Estimated Capital Gain</span>
          </div>
          <div class="result-breakdown">
            <div class="breakdown-row">
              <span>Expected Monthly Rental:</span>
              <span id="roi-rental-output">₹ 35,000 - ₹ 42,000 / mo</span>
            </div>
            <div class="breakdown-row">
              <span>Gross Rental Yield:</span>
              <span>4.8% - 5.3% p.a.</span>
            </div>
            <div class="breakdown-row" style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
              <span>Total Projected Return:</span>
              <span id="roi-gain-output" style="color: var(--clr-gold);">+80.2% Net Growth</span>
            </div>
          </div>
          <a title="Request Detailed ROI Whitepaper" href="#contact" class="btn-primary shimmer-btn" style="width: 100%; text-align: center; margin-top: 10px;">Download 2026-2031 ROI Whitepaper →</a>
        </div>
      </div>
    </div>

    <!-- 3. PCMC STAMP DUTY & REGISTRATION PANEL -->
    <div class="calc-panel" id="stamp-tab">
      <div class="calc-grid">
        <div class="calc-inputs">
          <div class="calc-input-group">
            <div class="calc-label-row">
              <span class="calc-label">Agreed Property Agreement Value (₹)</span>
              <span class="calc-value-badge" id="stamp-prop-badge">₹ 85,00,000</span>
            </div>
            <input type="range" class="calc-slider" id="stamp-prop-slider" min="5000000" max="25000000" step="500000" value="8500000">
          </div>

          <div class="calc-input-group">
            <div class="calc-label-row">
              <span class="calc-label">Buyer Gender / Ownership Type</span>
              <span class="calc-value-badge" id="stamp-gender-badge">Male / Joint (6%)</span>
            </div>
            <div class="bank-presets" style="margin-top: 5px;">
              <button class="bank-pill active" id="btn-male" data-stamp="6">Male / Joint (6% Total)</button>
              <button class="bank-pill" id="btn-female" data-stamp="5">Female Sole Owner (5% Total)</button>
            </div>
          </div>

          <div class="calc-input-group">
            <span class="calc-label" style="display: block; margin-bottom: 8px;">Applicable Govt Levies (PCMC Jurisdiction):</span>
            <ul style="font-size: 0.8rem; color: var(--clr-silver); list-style: disc; margin-left: 20px; line-height: 1.8;">
              <li>Stamp Duty: <strong>5%</strong> (4% for female owners)</li>
              <li>Local Body / Metro Cess: <strong>1%</strong></li>
              <li>PCMC Registration: <strong>₹ 30,000</strong></li>
            </ul>
          </div>
        </div>

        <div class="calc-result-box">
          <div class="result-main">
            <div class="result-sub">Total Govt Stamp Duty &amp; Registration</div>
            <div class="result-amount" id="stamp-total-output">₹ 5,40,000</div>
            <span style="font-size: 0.75rem; color: var(--clr-silver);">Calculated per Maharashtra Stamp Act 2026</span>
          </div>
          <div class="result-breakdown">
            <div class="breakdown-row">
              <span>Stamp Duty + Metro Cess:</span>
              <span id="stamp-duty-output">₹ 5,10,000</span>
            </div>
            <div class="breakdown-row">
              <span>Govt Registration Fee:</span>
              <span id="stamp-reg-output">₹ 30,000</span>
            </div>
            <div class="breakdown-row" style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
              <span>Total All-Inclusive Property Cost:</span>
              <span id="stamp-allinc-output" style="color: var(--clr-gold); font-size: 1.1rem; font-weight: 700;">₹ 90,40,000</span>
            </div>
          </div>
          <a title="Get Complete All-Inclusive Cost Sheet" href="#contact" class="btn-primary shimmer-btn" style="width: 100%; text-align: center; margin-top: 10px;">Get Official All-Inclusive Cost Sheet →</a>
        </div>
      </div>
    </div>
  </div>
</section>
`;

// Inject into page before #amenities or after #floorplans
if (content.includes('id="floorplans"')) {
  // Insert after floorplans section
  const floorplanEnd = '</section>';
  const fpIndex = content.indexOf('id="floorplans"');
  const insertIndex = content.indexOf(floorplanEnd, fpIndex) + floorplanEnd.length;
  
  content = content.slice(0, insertIndex) + '\n' + towerMatrixHTML + '\n' + calcSuiteHTML + content.slice(insertIndex);
  console.log('✅ Injected Tower Matrix & Calculator Suite after Floor Plans');
}

fs.writeFileSync(pagePath, content, 'utf8');
console.log('✅ Successfully written updated page.tsx with interactive suite!');
