import os
import json
import itertools
from string import Template

# Output directories based on implementation plan
OUTPUT_DIRS = {
    'flats': 'seo_generator/output/flats',
    'price': 'seo_generator/output/price',
    'near': 'seo_generator/output/near',
    'market': 'seo_generator/output/market',
    'compare': 'seo_generator/output/compare',
    'feature': 'seo_generator/output/feature',
    'blog': 'seo_generator/output/blog',
    'neighbourhood': 'seo_generator/output/neighbourhood',
    'guide': 'seo_generator/output/guide'
}

for d in OUTPUT_DIRS.values():
    os.makedirs(d, exist_ok=True)

# Data Generators
def generate_location_data():
    landmarks = [
        "Hinjewadi Phase 1", "Hinjewadi Phase 2", "Hinjewadi Phase 3", "Bhujbal Chowk", 
        "Shakai Circle", "Phoenix Mall Wakad", "JSPM University", "Aditya Birla Hospital", 
        "D-Mart Tathawade", "NH-48 Highway", "Mumbai-Pune Expressway", "Bhumkar Chowk", 
        "Indira College", "DY Patil University", "Vibgyor School", "Symbiosis Skills University", 
        "Jupiter Hospital", "Rupee Street", "Vision One Mall", "Balewadi High Street", 
        "Wakad Bridge", "Dange Chowk", "Spine Road", "Mahalunge Village", "Punawale", 
        "Ravet", "Kothrud", "Aundh", "Sus Road", "Pirangut Road", "Pimple Saudagar", "Chinchwad Station"
    ]
    bhk_configs = ["2 BHK", "2.25 BHK", "3 BHK", "3.25 BHK", "4 BHK"]
    years = ["2025", "2026"]
    
    pages = []
    for landmark in landmarks:
        for bhk in bhk_configs:
            for year in years:
                url_slug = f"krisala-aventis-{bhk.replace(' ', '-').replace('.', '-')}-near-{landmark.replace(' ', '-').lower()}-{year}.html"
                pages.append({
                    "url_slug": url_slug,
                    "folder": "near",
                    "title": f"Krisala Aventis Tathawade: {bhk} Flats near {landmark} ({year})",
                    "description": f"Discover {bhk} luxury apartments at Krisala Aventis Tathawade near {landmark}. Launching in {year}. Check floor plans, pricing & distance.",
                    "h1": f"Premium {bhk} Flats Near {landmark}",
                    "content": f"Krisala Aventis Tathawade offers unparalleled connectivity for those looking for {bhk} flats near {landmark} in {year}. Enjoy world-class amenities just minutes away from major hubs.",
                    "landmark": landmark,
                    "bhk": bhk,
                    "year": year,
                    "keywords": f"flats in Tathawade, flats near {landmark}, property near {landmark}, Krisala Aventis {landmark}, {bhk} near {landmark}, apartments near Hinjewadi"
                })
    return pages

def generate_price_data():
    budgets = ["Under 80L", "80L-1Cr", "1Cr-1.25Cr", "1.25Cr-1.5Cr", "1.5Cr-2Cr", "2Cr-2.5Cr", "Above 2.5Cr", "NRI Budget"]
    configs = ["2 BHK", "2.25 BHK", "3 BHK", "3.25 BHK", "4 BHK"]
    locations = ["Tathawade", "Wakad", "Hinjewadi", "Punawale", "Ravet"]
    
    pages = []
    for budget in budgets:
        for config in configs:
            for loc in locations:
                url_slug = f"{config.replace(' ', '-').replace('.', '-')}-flats-in-{loc.lower()}-{budget.replace(' ', '-').lower()}.html"
                pages.append({
                    "url_slug": url_slug,
                    "folder": "price",
                    "title": f"{config} Flats in {loc} | {budget} Budget | Krisala Aventis Tathawade",
                    "description": f"Find your dream {config} in {loc} within {budget}. Krisala Aventis Tathawade offers luxury living with 40+ amenities. Download the cost sheet.",
                    "h1": f"Krisala Aventis Tathawade: {config} in {loc} for {budget}",
                    "content": f"Looking for {config} properties in {loc} within the {budget} range? Krisala Aventis Tathawade brings you premium homes that fit your budget while offering luxurious lifestyle amenities.",
                    "budget": budget,
                    "config": config,
                    "location": loc,
                    "keywords": f"Krisala Aventis price, {budget} flats in {loc}, {config} flats for sale {loc}, Krisala Aventis cost, affordable luxury flats {loc}, Krisala Aventis price list"
                })
    return pages

# Add other data generators (omitting all 9 for brevity, focusing on a few to test the pipeline)
def generate_persona_data():
    personas = ["IT Professional", "NRI Buyer", "First-Time Buyer", "Investor", "Family with Kids", "Senior Citizen", "Working Couple"]
    needs = ["Commute Time", "Rental Yield", "Schools Nearby", "Amenities", "Safety"]
    locations = ["Hinjewadi", "Wakad", "Tathawade", "Punawale", "Baner", "Balewadi"]
    
    pages = []
    for persona in personas:
        for need in needs:
            for loc in locations:
                url_slug = f"{persona.replace(' ', '-').lower()}-guide-{need.replace(' ', '-').lower()}-{loc.lower()}.html"
                pages.append({
                    "url_slug": url_slug,
                    "folder": "guide",
                    "title": f"Krisala Aventis Tathawade for {persona} | {need} in {loc}",
                    "description": f"Are you a {persona} looking for {need} in {loc}? Discover why Krisala Aventis Tathawade is the perfect fit.",
                    "h1": f"The Perfect Home for {persona}s Prioritizing {need} in {loc}",
                    "content": f"For a {persona}, finding the right property in {loc} that offers {need} is crucial. Krisala Aventis Tathawade delivers exactly that, combining luxury living with practical benefits tailored to your lifestyle.",
                    "keywords": f"Krisala Aventis review, {persona} flats {loc}, {need} properties {loc}, buy Krisala Aventis, investment property Tathawade"
                })
    return pages[:200]

def generate_market_data():
    markets = ["Tathawade", "Wakad", "Hinjewadi", "Punawale", "Baner", "Balewadi", "Ravet", "Pimple Saudagar", "Aundh", "Kothrud",
              "Bhumkar Chowk", "Dange Chowk", "Sus", "Mahalunge", "Kiwale", "Moshi", "Chikhali", "Nigdi", "Akurdi", "Chinchwad"]
    topics = ["Price Trends", "Appreciation Rate", "Rental Yield", "Infrastructure Impact", "Metro Impact", 
              "Supply Analysis", "Demand Drivers", "Investment ROI", "Price Forecast", "Market Comparison"]
    year = "2026"
    
    pages = []
    for market in markets:
        for topic in topics:
            url_slug = f"{market.lower()}-real-estate-{topic.replace(' ', '-').lower()}-{year}.html"
            pages.append({
                "url_slug": url_slug,
                "folder": "market",
                "title": f"{market} Real Estate {topic} {year} | Krisala Aventis Tathawade",
                "description": f"In-depth analysis of {market} {topic} in {year}. See why investing near Krisala Aventis Tathawade is a smart choice.",
                "h1": f"{market} Property Market: {topic} ({year})",
                "content": f"Understanding the {topic} in {market} is essential for {year}. With major infrastructure projects underway, Krisala Aventis Tathawade stands out as a prime investment opportunity with excellent ROI potential.",
                "keywords": f"real estate investment {market}, high ROI property Pune, {topic} {market} {year}, Krisala Aventis investment, property for investment Pune West"
            })
    return pages

def generate_compare_data():
    competitors = ["Godrej Evergreen Square", "Kolte-Patil Oakwood", "Lodha Panache", "Gera Joy on the Treetops", 
                   "Pharande Puneville", "Kohinoor West View", "VTP Earth 1", "Mahindra Happinest", "Eisha 33 Central", "Naiknavare"]
    aspects = ["Price Comparison", "Amenities", "Floor Plans", "Location Benefits", "Construction Quality", 
               "Possession Date", "ROI Potential", "Connectivity", "Green Spaces", "Value for Money"]
    
    pages = []
    for comp in competitors:
        for aspect in aspects:
            url_slug = f"krisala-aventis-vs-{comp.replace(' ', '-').lower()}-{aspect.replace(' ', '-').lower()}.html"
            pages.append({
                "url_slug": url_slug,
                "folder": "compare",
                "title": f"Krisala Aventis Tathawade vs {comp} - {aspect}",
                "description": f"Detailed {aspect} comparison between Krisala Aventis Tathawade and {comp}. Make an informed home buying decision.",
                "h1": f"Comparing Krisala Aventis Tathawade vs {comp}: {aspect}",
                "content": f"When evaluating {aspect}, how does Krisala Aventis Tathawade stack up against {comp}? Our detailed analysis shows why Krisala Aventis Tathawade offers superior value in the Tathawade micro-market.",
                "keywords": f"Krisala Aventis vs {comp}, best project in Tathawade, top residential projects Tathawade, best luxury project Tathawade, {comp} alternative"
            })
    return pages

def generate_feature_data():
    features = ["Aluform Technology", "Smart Study Alcove", "Rooftop Pool", "EV Charging", "Solar Heaters",
                "Rainwater Harvesting", "Video Door Phone", "Biometric Lock", "CCTV Security", "Kohler Fittings",
                "Otis Lifts", "UPVC Windows", "Granite Kitchen", "Vitrified Tiles", "Gated Community"]
    variants = ["Family Benefit", "Maintenance Guide", "Safety Features", "ROI Impact", "Lifestyle Upgrade",
               "Tech Deep Dive", "Durability", "Eco-friendly Living", "Convenience", "Premium Feel"]
    
    pages = []
    for feature in features:
        for variant in variants:
            url_slug = f"{feature.replace(' ', '-').lower()}-{variant.replace(' ', '-').lower()}-krisala.html"
            pages.append({
                "url_slug": url_slug,
                "folder": "feature",
                "title": f"{feature} at Krisala Aventis Tathawade | {variant}",
                "description": f"Learn about the {feature} at Krisala Aventis Tathawade and its {variant}. Premium living in Tathawade.",
                "h1": f"Krisala Aventis Tathawade Features: {feature} ({variant})",
                "content": f"Krisala Aventis Tathawade incorporates top-tier {feature} to ensure a {variant}. This commitment to quality and modern living standards sets the project apart in Pune's real estate landscape.",
                "keywords": f"Krisala Aventis amenities, wellness homes Pune, smart homes Tathawade, luxury apartments with {feature}, Krisala Aventis specifications"
            })
    return pages

def generate_blog_data():
    topics = ["Property Taxes PCMC vs PMC", "Stamp Duty Maharashtra", "Hinjewadi Metro Timeline", "ROI Analysis Tathawade",
             "First Home Buyer Guide", "RERA Dispute Resolution", "Home Loan Tax Benefits", "Pune Real Estate Forecast",
             "NRI Remittance Rules", "Construction Quality Guide", "Vastu Shastra Guide", "Co-working vs Smart Study",
             "Rental Income Taxation", "Property Registration Process", "Builder Track Record Checklist"]
    locations = ["Tathawade", "Wakad", "Hinjewadi", "Baner", "Balewadi"]
    years = ["2025", "2026", "2027", "2030"]
    
    pages = []
    for topic in topics:
        for loc in locations:
            for year in years:
                url_slug = f"{topic.replace(' ', '-').lower()}-{loc.lower()}-{year}.html"
                pages.append({
                    "url_slug": url_slug,
                    "folder": "blog",
                    "title": f"{topic} in {loc} ({year}) | Krisala Blog",
                    "description": f"Read our comprehensive guide on {topic} for {loc} property buyers in {year}.",
                    "h1": f"{topic}: {loc} Perspective {year}",
                    "content": f"Our detailed look into {topic} reveals important trends for {loc} in {year}. Stay informed with Krisala Legacy's expert real estate insights.",
                    "keywords": f"Is Krisala Aventis worth buying, Krisala Aventis review, {topic} {loc} {year}, Krisala Aventis investment review, real estate investment Tathawade"
                })
    return pages[:300]

def generate_all_data():
    all_pages = []
    all_pages.extend(generate_location_data())
    all_pages.extend(generate_price_data())
    all_pages.extend(generate_persona_data())
    all_pages.extend(generate_market_data())
    all_pages.extend(generate_compare_data())
    all_pages.extend(generate_feature_data())
    all_pages.extend(generate_blog_data())
    
    with open('seo_generator/data/pages.json', 'w') as f:
        json.dump(all_pages, f, indent=2)
    return all_pages

# Template
BASE_TEMPLATE = """<!DOCTYPE html>
<html lang="en-IN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="$description">
    <meta name="keywords" content="$keywords">
    <title>$title</title>
    <link rel="stylesheet" href="../assets/css/style.min.css">
    <link rel="canonical" href="https://krisalaventis.in/$folder/$url_slug">
</head>
<body class="bg-[#0a0c11] text-white font-['Outfit']">
    <header class="p-6 border-b border-gray-800">
        <nav class="flex justify-between items-center max-w-7xl mx-auto">
            <a href="/" class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Krisala Aventis Tathawade</a>
            <div class="hidden md:flex gap-6">
                <a href="/" class="hover:text-gold-500 transition-colors">Home</a>
                <a href="/#about" class="hover:text-gold-500 transition-colors">About</a>
                <a href="/#floor-plans" class="hover:text-gold-500 transition-colors">Floor Plans</a>
                <a href="/#contact" class="px-6 py-2 bg-gradient-to-r from-gold-600 to-gold-800 rounded-full font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all">Enquire Now</a>
            </div>
        </nav>
    </header>
    
    <main class="max-w-7xl mx-auto p-6 py-12">
        <article class="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
            <h1 class="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-6 text-gold-400">$h1</h1>
            <div class="prose prose-invert prose-gold max-w-none">
                <p class="text-lg text-gray-300 leading-relaxed">$content</p>
                <div class="mt-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                    <h2 class="text-2xl font-bold mb-4">Why Choose Krisala Aventis Tathawade?</h2>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex items-center gap-3">✓ 40+ Premium Amenities</li>
                        <li class="flex items-center gap-3">✓ Prime Location in Tathawade</li>
                        <li class="flex items-center gap-3">✓ Excellent Connectivity to IT Hubs</li>
                        <li class="flex items-center gap-3">✓ Aluform Construction Technology</li>
                    </ul>
                </div>
            </div>
        </article>
    </main>

    <footer class="mt-12 p-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; 2026 Krisala Legacy. All rights reserved. MahaRERA: P52100080336</p>
    </footer>
</body>
</html>
"""

def build_pages():
    pages = generate_all_data()
    template = Template(BASE_TEMPLATE)
    
    print(f"Generating {len(pages)} pages...")
    for i, page in enumerate(pages):
        html_content = template.safe_substitute(
            title=page['title'],
            description=page['description'],
            folder=page['folder'],
            url_slug=page['url_slug'],
            h1=page['h1'],
            content=page['content'],
            keywords=page.get('keywords', '')
        )
        
        output_path = os.path.join(OUTPUT_DIRS[page['folder']], page['url_slug'])
        with open(output_path, 'w') as f:
            f.write(html_content)
            
        if (i+1) % 100 == 0:
            print(f"Generated {i+1} pages...")
            
    print(f"Successfully generated {len(pages)} pages.")

if __name__ == "__main__":
    build_pages()
