const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../app/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

const configuratorAndMilestonesHTML = `
{/* ==============================================================================
   INTERACTIVE ROOM-BY-ROOM UNIT CONFIGURATOR
   ============================================================================== */}
<section id="unit-configurator" className="section unit-configurator-section reveal">
  <div className="container">
    <div className="section-tag">🛋️ Interactive Floor Plan Explorer</div>
    <div className="section-header center">
      <h2>Room-by-Room <span className="gold shimmer-text">Unit Configurator.</span></h2>
      <p>Explore precise dimensions, smart work pods, and lifestyle features for our 2.25 and 3.25 BHK configurations.</p>
    </div>

    <div className="configurator-wrapper glass-glow">
      <div className="configurator-controls">
        <div className="config-unit-tabs">
          <button className="config-unit-btn active" data-unit="2bhk" id="cfg-btn-2bhk">2.25 BHK Smart Study (839 Sq.ft)</button>
          <button className="config-unit-btn" data-unit="3bhk" id="cfg-btn-3bhk">3.25 BHK Luxury Suite (1116 Sq.ft)</button>
        </div>

        <div className="room-hotspots-nav">
          <button className="room-btn active" data-room="study">🖥️ Smart Study Pod</button>
          <button className="room-btn" data-room="living">🛋️ Living &amp; Dining</button>
          <button className="room-btn" data-room="master">🛏️ Master Suite</button>
          <button className="room-btn" data-room="kitchen">🍳 Modular Kitchen</button>
          <button className="room-btn" data-room="balcony">🌅 Sunrise Deck</button>
        </div>
      </div>

      <div className="configurator-display-grid">
        <div className="config-visual-panel">
          <img id="configMainImg" src="/assets/images/floorplan-2bhk.webp" alt="Krisala Aventis Unit Layout" className="config-img" />
          <div className="active-room-tag" id="activeRoomTag">Active Focus: Smart Study Pod</div>
        </div>

        <div className="config-details-panel">
          <div className="room-badge" id="roomCategoryBadge">Exclusive Feature</div>
          <h3 id="roomTitle" className="room-title">Dedicated +0.25 Smart Study Pod</h3>
          <p id="roomDesc" className="room-desc">A custom-engineered ergonomic work cubicle designed for remote IT professionals. Features acoustic isolation, dual-monitor desktop provision, high-speed fiber internet point, and ambient task lighting.</p>
          
          <div className="room-specs-grid">
            <div className="r-spec-item">
              <span className="r-spec-label">Carpet Area:</span>
              <strong id="roomCarpet" className="r-spec-val">58 Sq.ft.</strong>
            </div>
            <div className="r-spec-item">
              <span className="r-spec-label">Flooring:</span>
              <strong id="roomFlooring" className="r-spec-val">1600x800mm Vitrified Tiles</strong>
            </div>
            <div className="r-spec-item">
              <span className="r-spec-label">Electrical:</span>
              <strong id="roomElectrical" className="r-spec-val">Schneider Modular + USB Points</strong>
            </div>
            <div className="r-spec-item">
              <span className="r-spec-label">Ventilation:</span>
              <strong id="roomVentilation" className="r-spec-val">Dedicated Window Cross-Breeze</strong>
            </div>
          </div>

          <div className="config-cta-box">
            <a title="Request Complete Specification Sheet" href="#contact" className="btn-primary" style="width: 100%; text-align: center;">Download Full Unit Specs PDF →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ==============================================================================
   LIVE CONSTRUCTION MILESTONES & ALGORITHM TRACKER
   ============================================================================== */}
<section id="construction-status" className="section construction-section reveal">
  <div className="container">
    <div className="section-tag" style="background: rgba(37, 211, 102, 0.15); color: #25D366; border-color: rgba(37, 211, 102, 0.3);">🏗️ Live Site Engineering Tracker</div>
    <div className="section-header center">
      <h2>Aluform Construction <span className="gold shimmer-text">Milestone Status.</span></h2>
      <p>Track live engineering milestones, structural inspections, and MahaRERA compliance progress in real time.</p>
    </div>

    <div className="milestones-timeline-wrapper glass-glow">
      <div className="milestone-step completed">
        <div className="milestone-marker">
          <span className="marker-icon">✓</span>
          <span className="marker-line"></span>
        </div>
        <div className="milestone-content">
          <div className="milestone-status-tag">Completed (100%)</div>
          <h4>Site Excavation &amp; Substructure RCC</h4>
          <p>Deep rock foundation excavation, seismic pile caps, and dual-basement waterproofing completed with PCMC certification.</p>
          <span className="milestone-date">Phase 1 Foundation Sign-off</span>
        </div>
      </div>

      <div className="milestone-step active">
        <div className="milestone-marker">
          <span className="marker-icon pulse-marker">⚙️</span>
          <span className="marker-line"></span>
        </div>
        <div className="milestone-content">
          <div className="milestone-status-tag tag-active">In Active Progress (85%)</div>
          <h4>Aluform Monolithic Wall &amp; Slab Pouring</h4>
          <p>Full aluminium formwork casting underway across Towers A &amp; B with zero-brickwork precision and earthquake resistance.</p>
          <span className="milestone-date">Current Active Stage (2026)</span>
        </div>
      </div>

      <div className="milestone-step upcoming">
        <div className="milestone-marker">
          <span className="marker-icon">🏢</span>
          <span className="marker-line"></span>
        </div>
        <div className="milestone-content">
          <div className="milestone-status-tag tag-upcoming">Upcoming Phase</div>
          <h4>Podium Amenities &amp; Rooftop Clubhouse</h4>
          <p>Installation of elevated podium swimming pool, landscaped meditation gardens, and high-speed OTIS elevators.</p>
          <span className="milestone-date">Target: Q4 2026</span>
        </div>
      </div>

      <div className="milestone-step upcoming">
        <div className="milestone-marker">
          <span className="marker-icon">🔑</span>
        </div>
        <div className="milestone-content">
          <div className="milestone-status-tag tag-upcoming">Final Handover</div>
          <h4>Internal Finishing &amp; MahaRERA Possession</h4>
          <p>Kohler sanitary fittings, digital biometric lock setup, final PCMC Occupancy Certificate (OC), and key handover.</p>
          <span className="milestone-date">MahaRERA Schedule: 2027</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const exitVoucherModalHTML = `
{/* ==============================================================================
   SMART EXIT-INTENT VIP SPOT-BOOKING VOUCHER MODAL
   ============================================================================== */}
<div id="exitVoucherModal" className="exit-voucher-modal" style="display:none;">
  <div className="exit-modal-backdrop" id="closeExitModalBackdrop"></div>
  <div className="exit-modal-card glass-glow">
    <button className="exit-modal-close" id="closeExitModalBtn" aria-label="Close Voucher Modal">✕</button>
    <div className="exit-badge">🎁 Exclusive Pre-Launch Opportunity</div>
    <h3>Wait! Unlock Your <span className="gold shimmer-text">₹1.5 Lakh Instant Voucher</span></h3>
    <p>Lock your VIP Pre-Launch Spot-Booking Privilege before leaving. Valid for Towers A, B, C &amp; D for the next 48 hours.</p>

    <div className="voucher-code-box">
      <span className="voucher-label">YOUR EXCLUSIVE VOUCHER CODE:</span>
      <span className="voucher-code" id="dynamicVoucherCode">AVENTIS-VIP-7744</span>
    </div>

    <div className="exit-actions-row">
      <a id="claimVoucherBtn" target="_blank" rel="noopener noreferrer" href="https://wa.me/917744009295?text=Hi%20Krisala%20Team%2C%20I%20want%20to%20claim%20my%20VIP%20Pre-Launch%20Voucher%20code%20AVENTIS-VIP-7744%20for%20Krisala%20Aventis%20Tathawade." className="btn-primary shimmer-btn" style="width: 100%; text-align: center;">Claim ₹1.5 Lakh Voucher on WhatsApp →</a>
      <button className="btn-secondary" id="dismissExitBtn" style="width: 100%; text-align: center; margin-top: 8px;">No thanks, I will explore later</button>
    </div>
  </div>
</div>
`;

// Insert configurator and milestones before the calculators section
if (content.includes('id="calculators"')) {
  const insertIndex = content.indexOf('<section id="calculators"');
  content = content.slice(0, insertIndex) + '\n' + configuratorAndMilestonesHTML + '\n' + content.slice(insertIndex);
  console.log('✅ Injected Unit Configurator & Milestones before Calculators section');
}

// Append exit voucher modal right before closing main wrapper
content = content.replace('</div>\n    </main>', '\n' + exitVoucherModalHTML + '\n      </div>\n    </main>');

// Convert class= to className=
content = content.replace(/\sclass="([^"]*)"/g, ' className="$1"');

fs.writeFileSync(pagePath, content, 'utf8');
console.log('✅ Successfully updated page.tsx with Unit Configurator, Milestones, and Exit Voucher Modal!');
