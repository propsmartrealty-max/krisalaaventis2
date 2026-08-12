import os
import glob
import re

def fix_anomalies():
    html_files = glob.glob('*.html')
    
    # 1. Global Meta Description Fix for compliance pages
    meta_fixes = {
        'privacy-policy.html': "Official Privacy Policy for Krisala Aventis Tathawade. Learn how we protect your data and privacy in accordance with IT Act 2000.",
        'terms-conditions.html': "Terms and Conditions for Krisala Aventis Tathawade. Professional service terms for our real estate consultancy and site visit services.",
        '404.html': "Page not found - Krisala Aventis Tathawade. Return to our official homepage to explore luxury 2.25 & 3.25 BHK smart study apartments."
    }

    for file, desc in meta_fixes.items():
        if os.path.exists(file):
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
            if '<meta name="description"' not in content:
                content = content.replace('<head>', f'<head>\n  <meta name="description" content="{desc}">')
                with open(file, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed Meta Description: {file}")

    # 2. Subpage H1 & Breadcrumb Normalization
    for file in html_files:
        if file in ['index.html', '404.html', 'privacy-policy.html', 'terms-conditions.html', 'sitemap-html.html']:
            continue
        
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Detect Title from Meta/Title tag
        title_match = re.search(r'<title>(.*?)</title>', content)
        page_title = title_match.group(1).split('|')[0].strip() if title_match else "Krisala Aventis Intelligence"
        
        # Detect Description for lead text
        desc_match = re.search(r'<meta name="description" content="(.*?)">', content)
        page_desc = desc_match.group(1).split('.')[0].strip() + "." if desc_match else "Explore the official project intelligence for Krisala Aventis in Tathawade."

        # Remove messy/redundant breadcrumbs
        content = re.sub(r'<!-- ======== SOVEREIGN BREADCRUMBS.*?/SOVEREIGN BREADCRUMBS ======== -->', '', content, flags=re.DOTALL)
        content = re.sub(r'<div class="breadcrumb-nav">.*?</div>\s*</div>', '', content, flags=re.DOTALL)
        content = re.sub(r'<div class="breadcrumb-wrapper">.*?</div>\s*</nav>\s*</div>\s*</div>', '', content, flags=re.DOTALL)
        
        # Sometimes they are nested or repeated
        content = re.sub(r'<div class="breadcrumb-nav">.*?</div>', '', content, flags=re.DOTALL)

        # Inject Clean Subpage Hero (with H1)
        hero_html = f"""
  <section class="section subpage-hero" style="background: var(--clr-onyx); padding-top: 160px; border-bottom: 1px solid var(--clr-glass-border);">
    <div class="container">
      <nav class="breadcrumb-list" style="margin-bottom: 30px; font-size: 0.8rem; color: var(--clr-silver);">
        <a href="/">Home</a> <span style="margin: 0 10px; opacity: 0.3;">/</span> <span class="gold">{page_title}</span>
      </nav>
      <div class="section-tag">Official Intelligence</div>
      <h1 style="font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-bottom: 24px; font-weight: 300;">
        {page_title.upper()}
      </h1>
      <p class="lead-text" style="max-width: 800px; color: var(--clr-silver);">{page_desc}</p>
    </div>
  </section>
"""
        # Insert hero after </nav> (the pill navbar)
        if '</nav>' in content:
            # We want to insert after the nav but before the contact section
            # Check if hero already exists to avoid duplication
            if 'subpage-hero' not in content:
                content = content.replace('</nav>', '</nav>\n' + hero_html)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Hardened Subpage Content: {file}")

if __name__ == "__main__":
    fix_anomalies()
