import os

silos = {
    "index.html": "Krisala Aventis Tathawade — Official New Launch",
    "krisala-aventis-tathawade-2-bhk-flats.html": "Krisala Aventis 2.25 BHK Flats in Tathawade",
    "krisala-aventis-tathawade-3-bhk-luxury-apartments.html": "Krisala Aventis 3.25 BHK Luxury Apartments Tathawade",
    "krisala-aventis-tathawade-flats-near-hinjewadi.html": "Krisala Aventis Luxury Flats Near Hinjewadi IT Park",
    "krisala-aventis-tathawade-construction-status.html": "Krisala Aventis Construction Progress & Status Tathawade",
    "tathawade-real-estate-investment-roi.html": "Tathawade Real Estate ROI & Krisala Aventis Investment",
    "lifestyle-amenities-shopping-tathawade.html": "Krisala Aventis Lifestyle & Neighborhood Connectivity",
    "educational-hubs-near-krisala-aventis.html": "Schools & Colleges Near Krisala Aventis Tathawade",
    "tathawade-connectivity-it-hubs.html": "Krisala Aventis Connectivity & IT Hub Proximity",
    "krisala-legacy-pune-track-record-completed-projects.html": "Krisala Legacy Pune — Track Record & Completed Projects",
    "aluform-technology-construction-quality-krisala-aventis.html": "Aluform Technology & Krisala Aventis Construction Quality",
    "public-transport-connectivity-tathawade-pune.html": "Tathawade Public Transport & Krisala Aventis Commute",
    "tathawade-real-estate-glossary.html": "Krisala Aventis Real Estate Glossary & Property Terms",
    "tathawade-market-growth-calculator.html": "Krisala Aventis Market Predictor & Tathawade ROI Calculator",
    "nri-investment-krisala-aventis-tathawade.html": "NRI Investment Portal — Krisala Aventis Tathawade Pune"
}

prime_keywords = "Krisala Aventis, Krisala Aventis Tathawade, Krisala Tathawade, Krisala Project Tathawade, Krisaala Tathawade, Krisala Legacy Pune, 2 BHK in Tathawade, 3 BHK in Tathawade Pune, New Launch Tathawade, Property in Tathawade Pimpri Chinchwad, Krisala Aventis Price List, Krisala Aventis Floor Plan, Krisala Aventis Brochure PDF"

base_dir = "/Users/vikasyewle/krisalaaventis"

def harden_prime_keywords(filename, h1_text):
    path = os.path.join(base_dir, filename)
    if not os.path.exists(path): return

    with open(path, 'r') as f:
        content = f.read()

    # 1. Inject Meta Keywords
    meta_keywords = f'<meta name="keywords" content="{prime_keywords}">'
    if 'name="keywords"' not in content:
        content = content.replace('</title>', '</title>\n  ' + meta_keywords)

    # 2. Hard-Incorporate Prime Keywords into H1
    # We replace <h1>...</h1> with our new optimized H1
    if '<h1>' in content:
        # Find the H1 block and replace it
        import re
        content = re.sub(r'<h1>.*?</h1>', f'<h1>{h1_text}</h1>', content, flags=re.DOTALL)

    with open(path, 'w') as f:
        f.write(content)
    print(f"Prime Hardened: {filename}")

for silo, h1 in silos.items():
    harden_prime_keywords(silo, h1)
