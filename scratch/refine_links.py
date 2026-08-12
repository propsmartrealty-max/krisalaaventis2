import os
import glob
import re

def refine_links():
    html_files = glob.glob('*.html')
    
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Enforce Clean URLs (Remove .html from internal links)
        # Regex: find href="something.html" but not external links
        content = re.sub(r'href="/([^"]*)\.html"', r'href="/\1"', content)
        # Also handle links without the leading slash if they are internal
        # content = re.sub(r'href="([^/][^"]*)\.html"', r'href="/\1"', content)

        # 2. Refine Title Attributes (Neat and Clean as per Google)
        # Ensure all project detail links have clear, non-repetitive titles
        link_refinements = {
            'href="/krisala-aventis-tathawade-price-list"': 'href="/krisala-aventis-tathawade-price-list" title="View Latest Krisala Aventis Cost Sheet & Pricing Details"',
            'href="/krisala-aventis-tathawade-2-bhk-flats"': 'href="/krisala-aventis-tathawade-2-bhk-flats" title="Explore 2.25 BHK Smart Study Apartments at Krisala Aventis"',
            'href="/krisala-aventis-tathawade-3-bhk-luxury-apartments"': 'href="/krisala-aventis-tathawade-3-bhk-luxury-apartments" title="Premium 3.25 BHK Luxury Homes in Tathawade Pune"',
            'href="/krisala-aventis-tathawade-brochure-download"': 'href="/krisala-aventis-tathawade-brochure-download" title="Download Official Krisala Aventis Brochure & Floor Plans"',
            'href="/krisala-aventis-tathawade-connectivity-it-hubs"': 'href="/krisala-aventis-tathawade-connectivity-it-hubs" title="Check Connectivity to Hinjewadi IT Park & Mumbai Highway"',
            'href="/krisala-aventis-tathawade-amenities-lifestyle"': 'href="/krisala-aventis-tathawade-amenities-lifestyle" title="Explore 40+ World-Class Amenities at Krisala Aventis"'
        }

        for old, new in link_refinements.items():
            if old in content:
                # Replace with the new version if it doesn't already have a more complex title
                content = content.replace(old, new)

        # 3. Clean up generic anchor text
        # Replace "Download" with "Download Brochure" etc if needed
        # (Already mostly good in footer)

        # 4. Remove any remaining trailing .html in canonical tags
        content = re.sub(r'<link rel="canonical" href="([^"]*)\.html"', r'<link rel="canonical" href="\1"', content)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Refined Links: {file}")

if __name__ == "__main__":
    refine_links()
