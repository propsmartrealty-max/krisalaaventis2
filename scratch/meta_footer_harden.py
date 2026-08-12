#!/usr/bin/env python3
"""
Krisala Aventis — Master Meta & Footer Synchronizer / SEO Hardener v2.0
Cleans head meta tags, injects reciprocal hreflangs, removes hidden nav blocks,
and injects the standardized visible footer site-wide.
"""

import re
from pathlib import Path

ROOT = Path('/Users/vikasyewle/krisalaaventis')

STANDARDIZED_FOOTER = """  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a title="Krisala Aventis — KRISALA AVENTIS" href="/" class="logo">KRISALA <span>AVENTIS</span></a>
          <p>Next-generation luxury living in Tathawade. Trusted by 5000+ happy families. Top builders in Pune since 2010.</p>
          <div class="social-links">
            <a title="Krisala Aventis — FB" href="https://www.facebook.com/KrisalaLegacy" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
            <a title="Krisala Aventis — IG" href="https://www.instagram.com/krisala_legacy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a title="Krisala Aventis — IN" href="https://www.linkedin.com/company/krisala-legacy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">IN</a>
            <a title="Krisala Aventis — YT" href="javascript:void(0)" aria-label="YouTube">YT</a>
          </div>
        </div>
        <div class="footer-links">
          <h5>Project Explorer</h5>
          <a title="Krisala Aventis — Overview" href="/">Overview</a>
          <a title="View Latest Krisala Aventis Cost Sheet & Pricing Details" href="/krisala-aventis-tathawade-price-list">Price List</a>
          <a title="Download Official Krisala Aventis Brochure & Floor Plans" href="/krisala-aventis-tathawade-brochure-download">Brochure Download</a>
          <a title="Book Site Visit at Krisala Aventis" href="/krisala-aventis-tathawade-site-visit-book">Book Site Visit</a>
          <a title="Explore 2.25 BHK Smart Study Apartments at Krisala Aventis" href="/krisala-aventis-tathawade-2-bhk-flats">2 BHK Smart Study</a>
          <a title="Premium 3.25 BHK Luxury Homes in Tathawade Pune" href="/krisala-aventis-tathawade-3-bhk-luxury-apartments">3 BHK Luxury</a>
        </div>
        <div class="footer-links">
          <h5>Knowledge Silos</h5>
          <a title="Krisala Aventis — Construction Status" href="/krisala-aventis-tathawade-construction-status">Construction Status</a>
          <a title="Krisala Aventis — Construction Tech" href="/krisala-aventis-tathawade-aluform-technology">Construction Tech</a>
          <a title="Krisala Aventis — Vastu Compliance" href="/krisala-aventis-tathawade-vastu-compliance">Vastu Compliance</a>
          <a title="Krisala Aventis — Flat Buying Guide" href="/how-to-buy-flat-in-west-pune-guide-2026">Flat Buying Guide</a>
          <a title="Krisala Aventis — Market Insights" href="/krisala-aventis-tathawade-real-estate-glossary">Market Insights</a>
          <a title="Krisala Aventis — Regional Review (Hindi/Marathi)" href="/krisala-aventis-tathawade-local-pune-review-hindi-marathi">Regional Reviews</a>
        </div>
        <div class="footer-links">
          <h5>Market Intelligence</h5>
          <a title="Krisala Aventis — ROI Analysis" href="/krisala-aventis-tathawade-investment-roi">ROI Analysis</a>
          <a title="Tathawade Real Estate Investment Guide" href="/tathawade-real-estate-investment-guide">Tathawade Investment Guide</a>
          <a title="Wakad vs Tathawade Property Analysis" href="/wakad-vs-tathawade-property-analysis">Wakad vs Tathawade</a>
          <a title="Tathawade vs Baner Property Analysis" href="/tathawade-vs-baner-property-2026">Tathawade vs Baner</a>
          <a title="Krisala Aventis Premium Living Review" href="/krisala-aventis-premium-living-review">Project Review</a>
          <a title="PCMC Luxury Apartments" href="/pcmc-luxury-apartments-tathawade-2026">PCMC Luxury Flats</a>
        </div>
        <div class="footer-links">
          <h5>Competitor Insights</h5>
          <a title="Krisala Aventis vs Godrej Properties Tathawade" href="/krisala-aventis-vs-godrej-tathawade">Krisala vs Godrej</a>
          <a title="Krisala Aventis vs Kolte-Patil Tathawade" href="/krisala-aventis-vs-kolte-patil-tathawade">Krisala vs Kolte-Patil</a>
          <a title="Best 3 BHK Under 1.5 Crore in Pune" href="/best-3-bhk-under-1-5-crore-pune-2026">3 BHK Under 1.5Cr</a>
          <a title="Flats Near Hinjewadi IT Park" href="/krisala-aventis-tathawade-flats-near-hinjewadi">Near Hinjewadi</a>
          <a title="Flats Near Hinjewadi Phase 3" href="/residential-flats-near-hinjewadi-phase-3">Near Hinjewadi Phase 3</a>
          <a title="Krisala Aventis — Competitor Comparison" href="/krisala-aventis-tathawade-competitor-comparison">Competitor Comparison</a>
        </div>
        <div class="footer-links">
          <h5>Official Location &amp; Connect</h5>
          <p style="font-size: 0.8rem; opacity: 0.7; margin-bottom: 10px;">Krisala Aventis Sales Experience Center, Beside Shakai Circle, Mumbai-Pune-Bangalore Highway, Tathawade, Pune 411033</p>
          <a title="Krisala Aventis — Get Directions on Google Maps" href="https://maps.app.goo.gl/TathawadeLocation" target="_blank" rel="noopener noreferrer" style="color: var(--clr-gold); font-weight: 600; display: block; margin-bottom: 15px;">📍 Get Directions on Google Maps →</a>
          <a title="Krisala Aventis — 💬 WhatsApp Enquiry" href="https://api.whatsapp.com/send?phone=917744009295&text=Hi%2C%20I%20visited%20krisalaventis.in%20and%20would%20like%20to%20know%20more%20about%20Krisala%20Aventis%20Tathawade%20—%20pricing%2C%20availability%2C%20and%20site%20visit%20schedule.%20Please%20connect." target="_blank" rel="noopener noreferrer" class="wa-enquiry-btn" style="font-size: 1rem; font-weight: 600;">💬 WhatsApp Enquiry</a>
          <p style="font-size: 0.8rem; opacity: 0.6; margin-top: 10px;">Official Sales Experience Center, Tathawade, Pune.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="keyword-cluster" style="font-size: 0.75rem; line-height: 1.6; opacity: 0.6; margin-bottom: 20px;">
          <strong>Popular Searches:</strong> 
          <span>Krisala Aventis Tathawade</span> • <span>Krisala Aventis Pune</span> • <span>Krisala Aventis Wakad</span> • 
          <span>Tathawade Real Estate</span> • <span>Wakad Property Market</span> • <span>Pune West Luxury Homes</span> • 
          <span>Best Property In Tathawade</span> • <span>Luxury Flats In Wakad</span> • <span>Investment Property Pune West</span> • 
          <span>Flats Near Hinjewadi IT Park</span> • <span>Krisala Aventis New Launch</span> • <span>Tathawade Ready Possession</span> • 
          <span>Krisala Aventis 2 BHK</span> • <span>Krisala Aventis 3 BHK</span> • <span>Krisala Legacy Projects</span> • 
          <span>Baner Balewadi Real Estate</span> • <span>Flats Near Metro Pune</span> • <span>High Appreciation Property Pune</span>
        </div>
        
        <details class="seo-accordion-matrix" style="margin-bottom: 20px; text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
          <summary style="cursor: pointer; font-size: 0.8rem; font-weight: 600; opacity: 0.8; list-style: none;">[+] Pune Real Estate &amp; Krisala Aventis Market Intelligence (Click to Expand)</summary>
          <div style="font-size: 0.75rem; line-height: 1.6; opacity: 0.7; margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1);">
            <h6 style="color: var(--clr-gold); margin-bottom: 5px;">Tathawade Real Estate Market Overview</h6>
            <p>The <strong>Pune Real Estate Market</strong> has witnessed unprecedented growth, positioning <strong>Tathawade Real Estate</strong> as the epicenter of capital appreciation. Situated perfectly in <strong>West Pune</strong>, Tathawade offers unparalleled connectivity to Hinjewadi IT Park, Mumbai-Bengaluru Highway, and Balewadi High Street. Investors looking for robust ROI are heavily targeting this micro-market.</p>
            
            <h6 style="color: var(--clr-gold); margin-top: 15px; margin-bottom: 5px;">Krisala Aventis: 2BHK &amp; 3BHK Luxury Homes in Tathawade</h6>
            <p>At the forefront of this revolution is <strong>Krisala Aventis</strong>, a landmark development offering meticulously crafted <strong>2BHK &amp; 3BHK Luxury Homes in Tathawade</strong> and broader <strong>West Pune</strong>. These ultra-premium residences feature cutting-edge Aluform technology, expansive master layouts, and world-class amenities designed for the modern urban family. Unlike standard projects in <strong>Pune Real Estate</strong>, Krisala Aventis merges architectural brilliance with high-yield investment potential.</p>

            <h6 style="color: var(--clr-gold); margin-top: 15px; margin-bottom: 5px;">Locational Advantage &amp; Connectivity</h6>
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
        <p>© 2026 Krisala Legacy. All Rights Reserved. | Disclaimer: Indicative renders. Actual specifications subject to agreement.</p>
      </div>
    </div>
  </footer>"""

RECIPROCAL_HREFLANG_MAIN = """  <link rel="alternate" hreflang="en" href="https://krisalaventis.in/">
  <link rel="alternate" hreflang="hi" href="https://krisalaventis.in/krisala-aventis-tathawade-hindi-janakari">
  <link rel="alternate" hreflang="mr" href="https://krisalaventis.in/krisala-aventis-tathawade-marathi-mahiti">
  <link rel="alternate" hreflang="x-default" href="https://krisalaventis.in/">"""

RECIPROCAL_HREFLANG_REVIEW = """  <link rel="alternate" hreflang="hi" href="https://krisalaventis.in/krisala-aventis-tathawade-local-pune-review-hindi-marathi">
  <link rel="alternate" hreflang="mr" href="https://krisalaventis.in/krisala-aventis-tathawade-local-pune-review-hindi-marathi">
  <link rel="alternate" hreflang="en" href="https://krisalaventis.in/">
  <link rel="alternate" hreflang="x-default" href="https://krisalaventis.in/">"""

def process_file(filepath):
    content = filepath.read_text(encoding='utf-8')
    name = filepath.name

    # 1. Update/Inject robots meta tag
    if name == '404.html':
        robots_tag = '<meta name="robots" content="noindex, follow">'
    else:
        robots_tag = '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">'

    # Clean existing robots tags
    content = re.sub(r'<meta\s+name=["\']robots["\']\s+content=["\'][^"\']+["\']\s*/?>', '', content, flags=re.IGNORECASE)
    # Inject new robots tag right after <head>
    content = re.sub(r'(<head\b[^>]*>)', r'\1\n  ' + robots_tag, content, count=1, flags=re.IGNORECASE)

    # 2. Update/Inject og:locale meta tag
    if 'hindi-janakari' in name or 'local-pune-review-hindi-marathi' in name:
        locale = 'hi_IN'
    elif 'marathi-mahiti' in name:
        locale = 'mr_IN'
    else:
        locale = 'en_IN'
    
    locale_tag = f'<meta property="og:locale" content="{locale}" />'
    # Clean existing og:locale
    content = re.sub(r'<meta\s+property=["\']og:locale["\']\s+content=["\'][^"\']+["\']\s*/?>', '', content, flags=re.IGNORECASE)
    # Inject og:locale right before </head>
    content = content.replace('</head>', f'  {locale_tag}\n</head>', 1)

    # 3. Reciprocal Hreflangs
    # First, strip out all existing hreflang link tags to avoid duplicates
    content = re.sub(r'<link\s+rel=["\']alternate["\']\s+hreflang=["\'][^"\']+["\']\s+href=["\'][^"\']+["\']\s*/?>', '', content, flags=re.IGNORECASE)

    if name in ['index.html', 'krisala-aventis-tathawade-hindi-janakari.html', 'krisala-aventis-tathawade-marathi-mahiti.html']:
        content = content.replace('</head>', f'{RECIPROCAL_HREFLANG_MAIN}\n</head>', 1)
    elif name == 'krisala-aventis-tathawade-local-pune-review-hindi-marathi.html':
        content = content.replace('</head>', f'{RECIPROCAL_HREFLANG_REVIEW}\n</head>', 1)

    # 4. Remove hidden "Related Pages" nav tags
    content = re.sub(r'<nav\s+aria-label=["\']Related Pages["\']\s+style=["\']display:none;?["\']\s*>.*?</nav>', '', content, flags=re.DOTALL | re.IGNORECASE)

    # 5. Overwrite the entire <footer> block with the standardized visible footer
    footer_pattern = r'<footer\b[^>]*>.*?</footer>'
    content, count = re.subn(footer_pattern, STANDARDIZED_FOOTER, content, count=1, flags=re.DOTALL)
    
    filepath.write_text(content, encoding='utf-8')
    return count > 0

def main():
    html_files = list(ROOT.glob('*.html'))
    print(f"Total HTML files found: {len(html_files)}")
    print("=" * 60)
    
    footer_synced = 0
    for filepath in sorted(html_files):
        synced = process_file(filepath)
        if synced:
            footer_synced += 1
            print(f"  ✅ Complete Footer Hardening: {filepath.name}")
        else:
            print(f"  ⚠️  Meta updated but footer missing/unmatched: {filepath.name}")
            
    print("=" * 60)
    print(f"Audit & Standardisation Complete!")
    print(f"  Total files updated: {len(html_files)}")
    print(f"  Footers fully synced: {footer_synced}/{len(html_files)}")
    print("=" * 60)

if __name__ == '__main__':
    main()
