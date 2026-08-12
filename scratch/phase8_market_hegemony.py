import os
import glob
import re
import json

def market_hegemony():
    html_files = glob.glob('*.html')
    
    # Hyper-Local Entity Mapping
    entities = [
        {"@type": "Landmark", "name": "Phoenix Mall of the Millennium Wakad", "url": "https://www.phoenixmarketcity.com/pune"},
        {"@type": "EducationalOrganization", "name": "JSPM University Tathawade", "url": "https://jspm.edu.in/"},
        {"@type": "Hospital", "name": "Aditya Birla Memorial Hospital", "url": "https://www.adityabirlahospital.com/"},
        {"@type": "PublicToilet", "name": "Shakai Circle Tathawade"},
        {"@type": "Place", "name": "Mumbai-Pune Expressway Entrance"}
    ]

    rating_json = {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1250"
    }

    local_keywords = "Jeevan Nagar Tathawade, Shakai Circle Pune, Wakad-Tathawade corridor, Bhujbal Chowk, flats near Phoenix Mall Wakad, apartments near JSPM Tathawade, West Pune property market"

    for file in html_files:
        if file in ['404.html', 'privacy-policy.html', 'terms-conditions.html']:
            continue

        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Propagate AggregateRating to Organization/LocalBusiness
        if '"Organization"' in content and '"aggregateRating"' not in content:
            content = content.replace('"name": "Krisala Legacy",', '"name": "Krisala Legacy",\n    "aggregateRating": ' + json.dumps(rating_json) + ',')
        
        # 2. Inject Hyper-Local Keywords
        if 'meta name="keywords"' in content:
             content = re.sub(r'(<meta name="keywords" content=".*?)(")', r'\1, ' + local_keywords + r'\2', content)

        # 3. Add 'about' and 'mentions' to WebPage schema
        if '"WebPage"' in content and '"about"' not in content:
            about_mentions = f"""
    "about": {{
      "@type": "Place",
      "name": "Tathawade, Pune",
      "sameAs": "https://en.wikipedia.org/wiki/Tathawade"
    }},
    "mentions": {json.dumps(entities)},"""
            content = content.replace('"@type": "WebPage",', '"@type": "WebPage",\n' + about_mentions)

        # 4. Harden Tables for SGE
        if '<table' in content and 'summary=' not in content:
            content = content.replace('<table', '<table summary="Strategic Data Matrix for Krisala Aventis Tathawade Project Intelligence"')
            if '<caption' not in content:
                content = content.replace('<thead>', '<caption style="display:none">Krisala Aventis Tathawade Market Data</caption>\n<thead>')

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Phase 8 Hardened {file}")

if __name__ == "__main__":
    market_hegemony()
