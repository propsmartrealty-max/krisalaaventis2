import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]

seo_accordion = """
  <footer class="footer" style="padding: 40px 0 24px; background: var(--clr-onyx); border-top: 1px solid var(--clr-glass-border); margin-top: 80px;">
    <div class="container" style="text-align: center; max-width: 1380px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 60px);">
      <details class="seo-accordion-matrix" style="margin-bottom: 20px; text-align: left; background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; border: 1px solid var(--clr-glass-border);">
        <summary style="cursor: pointer; font-size: 0.85rem; font-weight: 600; opacity: 0.9; list-style: none; color: var(--clr-silk);">[+] Pune Real Estate & Krisala Aventis Market Intelligence (Click to Expand)</summary>
        <div style="font-size: 0.75rem; line-height: 1.6; opacity: 0.7; margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); color: var(--clr-silver);">
          <h6 style="color: var(--clr-gold); margin-bottom: 5px; font-size: 0.9rem; font-weight: 600;">Tathawade Real Estate Market Overview — Pune's #1 Investment Zone</h6>
          <p style="margin-bottom: 15px;">The <strong>Pune Real Estate Market</strong> has witnessed unprecedented growth, positioning <strong>Tathawade Real Estate</strong> as the epicenter of capital appreciation in West Pune. Tathawade offers unparalleled connectivity to <strong>Hinjewadi IT Park</strong> (5 mins), Mumbai-Bengaluru Highway, Balewadi High Street, and the upcoming Metro network. Investors seeking maximum ROI in Pune in 2026 are actively targeting this micro-market.</p>

          <h6 style="color: var(--clr-gold); margin-top: 15px; margin-bottom: 5px; font-size: 0.9rem; font-weight: 600;">Krisala Aventis — 2BHK & 3BHK Luxury Homes in Tathawade, West Pune</h6>
          <p style="margin-bottom: 15px;"><strong>Krisala Aventis Tathawade</strong> is a landmark luxury residential development by Krisala Legacy offering premium <strong>2.25 BHK and 3.25 BHK smart study apartments</strong> in West Pune. Featuring cutting-edge Aluform RCC technology, Vastu-compliant east-facing towers, rooftop infinity pool, 40+ amenities, and zero space wastage — it is the definitive benchmark for <strong>luxury flats in Tathawade Pune</strong>. RERA No: P52100080336.</p>

          <h6 style="color: var(--clr-gold); margin-top: 15px; margin-bottom: 5px; font-size: 0.9rem; font-weight: 600;">Locational Advantage — Why Tathawade is Pune's Golden Corridor</h6>
          <ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 15px;">
            <li style="margin-bottom: 5px;"><strong>IT Hubs:</strong> 5 mins to Hinjewadi IT Park Phase 1, Phase 2 & Phase 3 — Pune's largest IT employment zone</li>
            <li style="margin-bottom: 5px;"><strong>Highway:</strong> Direct access to Mumbai-Pune Expressway via Shakai Circle</li>
            <li style="margin-bottom: 5px;"><strong>Metro:</strong> Upcoming Pune Metro Line 3 connectivity — Hinjewadi to Shivajinagar corridor</li>
            <li style="margin-bottom: 5px;"><strong>Retail:</strong> 3 mins to Phoenix Mall of the Millennium, Wakad High Street</li>
            <li style="margin-bottom: 5px;"><strong>Healthcare:</strong> Aditya Birla Hospital, Ruby Hall Clinic (Wakad) within 5 mins</li>
            <li style="margin-bottom: 5px;"><strong>Education:</strong> JSPM, MIT, Symbiosis within 10 mins drive</li>
          </ul>

          <h6 style="color: var(--clr-gold); margin-top: 15px; margin-bottom: 5px; font-size: 0.9rem; font-weight: 600;">Pune Real Estate Market Article — Capital Appreciation in Tathawade</h6>
          <p style="margin-bottom: 15px;">Tathawade has recorded <strong>18–22% capital appreciation</strong> over the last 3 years, outperforming Baner, Balewadi, and Wakad in ROI metrics. The <strong>West Pune property market</strong> is driven by IT sector demand, infrastructure upgrades, and chronic undersupply of premium residential inventory. Krisala Aventis, with its strategic location and luxury credentials, is projected to deliver <strong>25–30% appreciation</strong> over the next 3 years.</p>

          <h6 style="color: var(--clr-gold); margin-top: 15px; margin-bottom: 5px; font-size: 0.9rem; font-weight: 600;">Frequently Asked Questions — Krisala Aventis & Tathawade Real Estate</h6>
          <strong style="display:block; margin-top: 10px; color: var(--clr-silk);">Why is Krisala Aventis the best project in Tathawade Pune?</strong>
          <p style="margin-bottom: 10px;">Krisala Aventis delivers unmatched luxury with Smart Study 2BHK & 3BHK homes, zero space wastage floor plans, 40+ lifestyle amenities, Aluform construction quality, and Vastu compliance. It is the top-rated luxury project in West Pune 2026.</p>

          <strong style="display:block; margin-top: 10px; color: var(--clr-silk);">What is the price of 2 BHK in Tathawade Pune?</strong>
          <p style="margin-bottom: 10px;">2.25 BHK Smart Study apartments at Krisala Aventis Tathawade start from ₹89 Lakhs*. Contact the official sales team for the current cost sheet and floor plan details.</p>

          <strong style="display:block; margin-top: 10px; color: var(--clr-silk);">Is Tathawade a good area for real estate investment in Pune?</strong>
          <p style="margin-bottom: 10px;">Absolutely. Tathawade Real Estate offers 18–22% capital appreciation, IT-driven demand, and premium infrastructure. It is ranked among the top 3 investment zones in Pune 2026.</p>

          <strong style="display:block; margin-top: 10px; color: var(--clr-silk);">What is the RERA number of Krisala Aventis Tathawade?</strong>
          <p style="margin-bottom: 10px;">RERA Registration Number: <strong>P52100080336</strong> — registered with MahaRERA. Verify at maharera.mahaonline.gov.in.</p>
        </div>
      </details>
      <p style="font-size: 0.75rem; color: var(--clr-muted); margin-top: 20px;">© 2026 Krisala Legacy. All Rights Reserved. | Disclaimer: Indicative renders. Actual specifications subject to agreement.</p>
    </div>
  </footer>
"""

success_count = 0
for file in html_files:
    file_path = os.path.join(base_dir, file)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'seo-accordion-matrix' in content:
        continue

    modified = False

    # Target points: either <!-- Internal SEO Silo Links --> or </body>
    if '<!-- Internal SEO Silo Links -->' in content:
        content = content.replace('<!-- Internal SEO Silo Links -->', seo_accordion + '\n  <!-- Internal SEO Silo Links -->', 1)
        modified = True
    elif '</body>' in content:
        content = content.replace('</body>', seo_accordion + '\n</body>', 1)
        modified = True

    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        success_count += 1
        print(f"✅ Injected: {file}")

print(f"\n🚀 Complete! Injected accordion footer into {success_count} pages.")
