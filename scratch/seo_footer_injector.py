import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]

seo_accordion = """
        <details class="seo-accordion-matrix" style="margin-bottom: 20px; text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
          <summary style="cursor: pointer; font-size: 0.8rem; font-weight: 600; opacity: 0.8; list-style: none;">[+] Pune Real Estate & Krisala Aventis Market Intelligence (Click to Expand)</summary>
          <div style="font-size: 0.75rem; line-height: 1.6; opacity: 0.7; margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1);">
            <h6 style="color: var(--clr-gold); margin-bottom: 5px;">Tathawade Real Estate Market Overview</h6>
            <p>The <strong>Pune Real Estate Market</strong> has witnessed unprecedented growth, positioning <strong>Tathawade Real Estate</strong> as the epicenter of capital appreciation. Situated perfectly in <strong>West Pune</strong>, Tathawade offers unparalleled connectivity to Hinjewadi IT Park, Mumbai-Bengaluru Highway, and Balewadi High Street. Investors looking for robust ROI are heavily targeting this micro-market.</p>
            
            <h6 style="color: var(--clr-gold); margin-top: 15px; margin-bottom: 5px;">Krisala Aventis: 2BHK & 3BHK Luxury Homes in Tathawade</h6>
            <p>At the forefront of this revolution is <strong>Krisala Aventis</strong>, a landmark development offering meticulously crafted <strong>2BHK & 3BHK Luxury Homes in Tathawade</strong> and broader <strong>West Pune</strong>. These ultra-premium residences feature cutting-edge Aluform technology, expansive master layouts, and world-class amenities designed for the modern urban family. Unlike standard projects in <strong>Pune Real Estate</strong>, Krisala Aventis merges architectural brilliance with high-yield investment potential.</p>

            <h6 style="color: var(--clr-gold); margin-top: 15px; margin-bottom: 5px;">Locational Advantage & Connectivity (Artifact Data)</h6>
            <ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 10px;">
              <li><strong>IT Hubs:</strong> 5 mins to Hinjewadi Phase 1, Phase 2, and Wakad IT corridors.</li>
              <li><strong>Transit:</strong> Immediate access to the Mumbai-Pune Expressway and upcoming Metro routes in West Pune.</li>
              <li><strong>Social Infrastructure:</strong> Proximity to Phoenix Mall of the Millennium, Aditya Birla Hospital, and top educational institutions like JSPM.</li>
            </ul>

            <h6 style="color: var(--clr-gold); margin-top: 15px; margin-bottom: 5px;">Frequently Asked Questions (FAQ)</h6>
            <strong style="display:block; margin-top: 10px;">Why is Krisala Aventis the best project in Tathawade?</strong>
            <p>Krisala Aventis delivers unmatched luxury with 2BHK and 3BHK smart study homes, zero space wastage, and over 40 lifestyle amenities. It represents the pinnacle of West Pune luxury living.</p>
            
            <strong style="display:block; margin-top: 10px;">Is Tathawade a good area for real estate investment?</strong>
            <p>Yes, Tathawade Real Estate offers some of the highest historical capital appreciation rates in the Pune Real Estate Market due to infrastructural development and IT sector proximity.</p>
          </div>
        </details>
"""

orphan_link = '          <a title="Krisala Aventis — Regional Review (Hindi/Marathi)" href="/krisala-aventis-tathawade-local-pune-review-hindi-marathi">Regional Reviews</a>\n'

success_count = 0
for file in html_files:
    file_path = os.path.join(base_dir, file)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # 1. Inject the SEO accordion right before the copyright line
    if 'seo-accordion-matrix' not in content:
        # The target string
        target_str = '<p>© 2026 Krisala Legacy'
        if target_str in content:
            content = content.replace(target_str, seo_accordion + '        ' + target_str)
            modified = True

    # 2. Fix the orphan page
    if 'krisala-aventis-tathawade-local-pune-review-hindi-marathi' not in content and 'Market Insights</a>' in content:
        market_str = '<a title="Krisala Aventis — Market Insights" href="/krisala-aventis-tathawade-real-estate-glossary">Market Insights</a>\n'
        if market_str in content:
            content = content.replace(market_str, market_str + orphan_link)
            modified = True
            
    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        success_count += 1

print(f"✅ Injection completed successfully. Modified {success_count} HTML files.")
