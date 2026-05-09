import os
import glob
import re

def performance_mastery():
    html_files = glob.glob('*.html')
    
    commute_matrix_html = """
  <!-- ======== COMMUTE OPTIMIZATION MATRIX (Local Authority SEO) ======== -->
  <section class="section commute-matrix" style="background: var(--clr-onyx); border-top: 1px solid var(--clr-glass-border);">
    <div class="container">
      <div class="section-tag">Transit Intelligence</div>
      <h3>Commute <span class="gold">Optimization Matrix.</span></h3>
      <div class="table-responsive" style="margin-top: 30px; overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; color: var(--clr-silver); font-size: 0.9rem;">
          <thead>
            <tr style="border-bottom: 1px solid var(--clr-gold-dim); text-align: left;">
              <th style="padding: 15px; color: var(--clr-gold);">Strategic Node</th>
              <th style="padding: 15px; color: var(--clr-gold);">Distance</th>
              <th style="padding: 15px; color: var(--clr-gold);">Est. Travel Time</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--clr-glass-border);">
              <td style="padding: 15px;">Hinjewadi IT Park (Phase 1)</td>
              <td style="padding: 15px;">4.2 KM</td>
              <td style="padding: 15px;">10-12 Mins</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--clr-glass-border);">
              <td style="padding: 15px;">Phoenix Mall (Wakad)</td>
              <td style="padding: 15px;">3.8 KM</td>
              <td style="padding: 15px;">08-10 Mins</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--clr-glass-border);">
              <td style="padding: 15px;">Mumbai-Pune-Bangalore Hwy</td>
              <td style="padding: 15px;">0.5 KM</td>
              <td style="padding: 15px;">02 Mins</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--clr-glass-border);">
              <td style="padding: 15px;">JSPM University</td>
              <td style="padding: 15px;">1.8 KM</td>
              <td style="padding: 15px;">05 Mins</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--clr-glass-border);">
              <td style="padding: 15px;">Shakai Circle</td>
              <td style="padding: 15px;">0.3 KM</td>
              <td style="padding: 15px;">01 Mins</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>"""

    conversational_faq = {
        "@type": "Question",
        "name": "Is Krisala Aventis Tathawade a good investment for IT professionals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Krisala Aventis is strategically located just 10 minutes from Hinjewadi IT Park, offering smart study 2 BHK and 3 BHK apartments tailored for the modern 'Work-from-Home' and 'Hybrid' lifestyle. Its proximity to the Mumbai-Pune Expressway and the upcoming metro line makes it a high-yield asset for 2026."
        }
    }

    for file in html_files:
        if file in ['404.html', 'privacy-policy.html', 'terms-conditions.html']:
            continue

        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Inject Commute Matrix (if subpage and not present)
        if file != 'index.html' and 'COMMUTE OPTIMIZATION MATRIX' not in content:
            # Insert before circular silos or footer
            if 'CIRCULAR SILO' in content:
                content = content.replace('<!-- ======== CIRCULAR SILO', commute_matrix_html + '\n  <!-- ======== CIRCULAR SILO')
            else:
                content = content.replace('<footer', commute_matrix_html + '\n<footer')

        # 2. Expand FAQ with Conversational Question
        if '"FAQPage"' in content and conversational_faq['name'] not in content:
             # Find the first mainEntity array and append
             content = re.sub(r'("mainEntity":\s*\[)', r'\1' + json.dumps(conversational_faq, indent=6) + ',', content)

        # 3. CLS Elimination: Ensure images have dimensions
        # We'll target assets/images/hero.png specifically as it's the most common LCP asset
        content = content.replace('src="assets/images/hero.png"', 'src="assets/images/hero.png" width="1024" height="555"')
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Phase 7 Polished {file}")

import json
if __name__ == "__main__":
    performance_mastery()
