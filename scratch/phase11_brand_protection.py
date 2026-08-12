import os
import glob
import re

def brand_protection_audit():
    html_files = glob.glob('*.html')
    
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Secure all external links with rel="noopener noreferrer"
        # Only target links that start with http but are not the current domain
        content = re.sub(r'<a\s+([^>]*href="http(s)?://(?!krisalaventis\.in)[^"]*")([^>]*)>', 
                         r'<a \1 \3 rel="noopener noreferrer">', content)
        
        # Clean up double rel if it happens
        content = content.replace('rel="noopener noreferrer" rel="noopener noreferrer"', 'rel="noopener noreferrer"')

        # 2. Optimize navigation titles for Sitelinks
        # Ensure all project detail links have clear, authoritative title attributes
        nav_replacements = {
            'href="/krisala-aventis-tathawade-price-list"': 'href="/krisala-aventis-tathawade-price-list" title="Krisala Aventis Official Pricing"',
            'href="/krisala-aventis-tathawade-2-bhk-flats"': 'href="/krisala-aventis-tathawade-2-bhk-flats" title="Krisala Aventis 2 BHK Flats"',
            'href="/krisala-aventis-tathawade-3-bhk-luxury-apartments"': 'href="/krisala-aventis-tathawade-3-bhk-luxury-apartments" title="Krisala Aventis 3 BHK Luxury Apartments"',
            'href="/krisala-aventis-tathawade-brochure-download"': 'href="/krisala-aventis-tathawade-brochure-download" title="Krisala Aventis Official Brochure"'
        }

        for old, new in nav_replacements.items():
            if old in content and 'title=' not in content[content.find(old):content.find(old)+100]:
                 content = content.replace(old, new)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Brand Protection Hardened: {file}")

if __name__ == "__main__":
    brand_protection_audit()
