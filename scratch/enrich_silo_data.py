import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"

def enrich_silos():
    html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]
    
    for filename in html_files:
        path = os.path.join(base_dir, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Update internal links to new legal URLs
        content = content.replace('href="/privacy-policy"', 'href="/krisala-aventis-tathawade-privacy-policy"')
        content = content.replace('href="/terms-conditions"', 'href="/krisala-aventis-tathawade-terms-conditions"')
        content = content.replace('href="privacy-policy.html"', 'href="krisala-aventis-tathawade-privacy-policy.html"')
        content = content.replace('href="terms-conditions.html"', 'href="krisala-aventis-tathawade-terms-conditions.html"')

        # 2. Inject Floor Plans into Configuration Silos
        if '2-bhk-flats' in filename or '3-bhk-luxury-apartments' in filename:
            if '<div class="floorplan-block">' not in content:
                config_type = "2.25 BHK" if "2-bhk" in filename else "3.25 BHK"
                img_src = "assets/images/floorplan-2bhk.png" if "2-bhk" in filename else "assets/images/floorplan-3bhk.png"
                
                fp_section = f"""
      <!-- ======== FLOOR PLAN DATA HARDENING ======== -->
      <div class="floorplan-block reveal" style="margin-top: 50px; background: rgba(255,255,255,0.03); border-radius: 20px; padding: 40px; border: 1px solid var(--clr-glass-border);">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
          <div class="fp-visual">
            <img decoding="async" src="{img_src}" alt="Krisala Aventis {config_type} Official Floor Plan" style="width: 100%; border-radius: 12px; border: 1px solid var(--clr-gold-dim);">
          </div>
          <div class="fp-details">
            <h4 style="color: var(--clr-gold); margin-bottom: 15px;">{config_type} Smart Study Layout</h4>
            <ul style="list-style: none; padding: 0; line-height: 2.2; font-size: 0.95rem;">
              <li>⚡ <strong>Carpet Area:</strong> Optimized for spaciousness</li>
              <li>⚡ <strong>Study Space:</strong> Dedicated work-from-home zone</li>
              <li>⚡ <strong>Ventilation:</strong> Cross-ventilated living & master suites</li>
              <li>⚡ <strong>Fittings:</strong> Kohler/Jaquar premium fittings</li>
            </ul>
            <a href="#contact" class="submit-btn" style="display: inline-block; margin-top: 25px; text-decoration: none;">Request Detailed Cost Sheet →</a>
          </div>
        </div>
      </div>
"""
                # Insert inside the silo-content-block
                content = content.replace('</p>\n        <div style="background: rgba(255,255,255,0.02)', fp_section + '\n        <div style="background: rgba(255,255,255,0.02)')

        # 3. Inject Layout Data (Table) into relevant silos
        if 'layout' in filename or 'price' in filename or 'cost-sheet' in filename:
            if '<table' not in content:
                table_html = """
      <div class="layout-data reveal" style="margin-top: 40px;">
        <h4 style="color: #fff; margin-bottom: 20px;">Configuration & Pricing Matrix</h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; color: var(--clr-silver);">
          <thead>
            <tr style="border-bottom: 1px solid var(--clr-gold); text-align: left;">
              <th style="padding: 12px;">Typology</th>
              <th style="padding: 12px;">Configuration</th>
              <th style="padding: 12px;">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--clr-glass-border);">
              <td style="padding: 12px;">2.25 BHK</td>
              <td style="padding: 12px;">Smart Study</td>
              <td style="padding: 12px; color: var(--clr-gold);">Limited Availability</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--clr-glass-border);">
              <td style="padding: 12px;">3.25 BHK</td>
              <td style="padding: 12px;">Premium Study</td>
              <td style="padding: 12px; color: var(--clr-gold);">New Launch</td>
            </tr>
          </tbody>
        </table>
      </div>
"""
                content = content.replace('</p>\n        <div style="background: rgba(255,255,255,0.02)', table_html + '\n        <div style="background: rgba(255,255,255,0.02)')

        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Enriched: {filename}")

if __name__ == "__main__":
    enrich_silos()
