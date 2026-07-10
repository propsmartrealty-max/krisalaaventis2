import os
import json
import random
from string import Template

OUTPUT_DIRS = {
    'flats': 'seo_generator/output/flats',
    'price': 'seo_generator/output/price',
    'near': 'seo_generator/output/near',
    'market': 'seo_generator/output/market',
    'compare': 'seo_generator/output/compare',
    'feature': 'seo_generator/output/feature',
    'blog': 'seo_generator/output/blog',
    'guide': 'seo_generator/output/guide'
}

for d in OUTPUT_DIRS.values():
    os.makedirs(d, exist_ok=True)

def generate_location_data():
    landmarks = ["Hinjewadi Phase 1", "Hinjewadi Phase 2", "Hinjewadi Phase 3", "Bhujbal Chowk", "Shakai Circle", "Phoenix Mall Wakad", "JSPM University", "Aditya Birla Hospital", "D-Mart Tathawade", "NH-48 Highway", "Mumbai-Pune Expressway", "Bhumkar Chowk", "Indira College", "DY Patil University", "Vibgyor School", "Symbiosis Skills University", "Jupiter Hospital", "Rupee Street", "Vision One Mall", "Balewadi High Street", "Wakad Bridge", "Dange Chowk", "Spine Road", "Mahalunge Village", "Punawale", "Ravet", "Kothrud", "Aundh", "Sus Road", "Pirangut Road", "Pimple Saudagar", "Chinchwad Station"]
    bhk_configs = ["2 BHK", "2.25 BHK", "3 BHK", "3.25 BHK", "4 BHK"]
    years = ["2025", "2026"]
    
    pages = []
    for landmark in landmarks:
        for bhk in bhk_configs:
            for year in years:
                url_slug = f"krisala-aventis-{bhk.replace(' ', '-').replace('.', '-')}-near-{landmark.replace(' ', '-').lower()}-{year}.html"
                
                faqs = [
                    {"q": f"How far is Krisala Aventis Tathawade from {landmark}?", "a": f"Krisala Aventis Tathawade is strategically located just a short drive from {landmark}, ensuring you spend less time commuting and more time with your family in {year}."},
                    {"q": f"Are {bhk} flats available near {landmark} at Krisala Aventis Tathawade?", "a": f"Yes, we offer premium {bhk} configurations with smart study spaces, perfect for professionals working near {landmark}."},
                    {"q": "What amenities are provided?", "a": "Residents enjoy 40+ world-class amenities including a rooftop swimming pool, co-working spaces, a fully equipped gym, and beautifully landscaped gardens."},
                    {"q": "Is the project MahaRERA registered?", "a": "Absolutely. Krisala Aventis Tathawade is fully MahaRERA registered (P52100080336), ensuring transparency and timely delivery."}
                ]
                
                content = f"Krisala Aventis Tathawade offers unparalleled connectivity for those looking for premium {bhk} flats near {landmark} in {year}. With the rapid infrastructure development in Tathawade and Wakad, properties near {landmark} are seeing excellent appreciation. Our {bhk} residences are designed using advanced Aluform technology, ensuring zero leakage and a flawless finish. Beyond the four walls, Krisala Aventis Tathawade brings you a vibrant community lifestyle with 40+ premium amenities. Whether you are an IT professional commuting to Hinjewadi or a family looking for top-tier schools nearby, this location offers the perfect balance of serenity and urban convenience."

                pages.append({
                    "url_slug": url_slug,
                    "folder": "near",
                    "title": f"Krisala Aventis Tathawade: {bhk} Flats near {landmark} ({year})",
                    "description": f"Discover {bhk} luxury apartments at Krisala Aventis Tathawade near {landmark}. Launching in {year}. Check floor plans, pricing & premium amenities.",
                    "h1": f"Premium {bhk} Flats Near {landmark}",
                    "content": content,
                    "faqs": faqs
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
                
                faqs = [
                    {"q": f"Can I get a {config} in {loc} for {budget}?", "a": f"Yes, Krisala Aventis Tathawade offers competitive pricing for {config} apartments in {loc}, specifically catering to the {budget} segment without compromising on luxury."},
                    {"q": "What is the booking amount?", "a": "The initial booking amount is nominal. Please connect with our sales team for the detailed cost sheet and customized payment plans."},
                    {"q": "Are there any hidden charges?", "a": "No, Krisala Legacy believes in absolute transparency. All costs, including GST and stamp duty, are clearly explained before booking."},
                    {"q": "Is home loan assistance provided?", "a": "Yes, our project is approved by all major nationalized and private banks, ensuring a smooth and hassle-free loan process for our buyers."}
                ]
                
                content = f"Looking for {config} properties in {loc} within the {budget} range? Krisala Aventis Tathawade brings you premium homes that fit your financial planning while offering unmatched luxurious lifestyle amenities. The Tathawade real estate market is booming, and securing a {config} at this price point is a solid investment. We have optimized our layouts to ensure maximum usable carpet area, meaning you pay for actual living space. Download our official cost sheet today to see the complete breakdown for {budget} budgets."

                pages.append({
                    "url_slug": url_slug,
                    "folder": "price",
                    "title": f"{config} Flats in {loc} | {budget} Budget | Krisala Aventis Tathawade",
                    "description": f"Find your dream {config} in {loc} within {budget}. Krisala Aventis Tathawade offers luxury living with 40+ amenities. Download the cost sheet.",
                    "h1": f"Krisala Aventis Tathawade: {config} in {loc} for {budget}",
                    "content": content,
                    "faqs": faqs
                })
    return pages

def generate_persona_data():
    personas = ["IT Professional", "NRI Buyer", "First-Time Buyer", "Investor", "Family with Kids", "Senior Citizen", "Working Couple"]
    needs = ["Commute Time", "Rental Yield", "Schools Nearby", "Amenities", "Safety"]
    locations = ["Hinjewadi", "Wakad", "Tathawade", "Punawale", "Baner", "Balewadi"]
    
    pages = []
    for persona in personas:
        for need in needs:
            for loc in locations:
                url_slug = f"{persona.replace(' ', '-').lower()}-guide-{need.replace(' ', '-').lower()}-{loc.lower()}.html"
                
                faqs = [
                    {"q": f"Why is Krisala Aventis Tathawade ideal for a {persona}?", "a": f"Our project is uniquely tailored to meet the demands of a {persona}, specifically focusing on {need} in the {loc} area."},
                    {"q": "What makes the location safe and secure?", "a": "We provide multi-tier security, including biometric access, 24/7 CCTV surveillance, and highly trained security personnel."},
                    {"q": "Is the community vibrant?", "a": "Absolutely. With 40+ amenities, our community fosters a vibrant, inclusive, and engaging lifestyle for all age groups."},
                    {"q": "What is the future potential of this area?", "a": "Tathawade is one of Pune's fastest-growing corridors, ensuring excellent long-term appreciation and rental yields."}
                ]
                
                content = f"For a {persona}, finding the right property in {loc} that offers {need} is crucial. Krisala Aventis Tathawade delivers exactly that, combining luxury living with practical benefits tailored to your lifestyle. We understand that as a {persona}, your time and investment are valuable. That's why our smart-study homes are designed to maximize productivity and comfort. From robust connectivity to Hinjewadi IT hubs to proximity to top-tier educational institutions, Krisala Aventis Tathawade ensures your core requirement of {need} is perfectly met."

                pages.append({
                    "url_slug": url_slug,
                    "folder": "guide",
                    "title": f"Krisala Aventis Tathawade for {persona} | {need} in {loc}",
                    "description": f"Are you a {persona} looking for {need} in {loc}? Discover why Krisala Aventis Tathawade is the perfect fit.",
                    "h1": f"The Perfect Home for {persona}s Prioritizing {need} in {loc}",
                    "content": content,
                    "faqs": faqs
                })
    return pages[:200]

def generate_market_data():
    markets = ["Tathawade", "Wakad", "Hinjewadi", "Punawale", "Baner", "Balewadi", "Ravet", "Pimple Saudagar", "Aundh", "Kothrud"]
    topics = ["Price Trends", "Appreciation Rate", "Rental Yield", "Infrastructure Impact", "Metro Impact"]
    year = "2026"
    
    pages = []
    for market in markets:
        for topic in topics:
            url_slug = f"{market.lower()}-real-estate-{topic.replace(' ', '-').lower()}-{year}.html"
            faqs = [
                {"q": f"What is the expected {topic} in {market} for {year}?", "a": f"Experts predict strong growth in {market} for {year}, driven by ongoing infrastructure developments and IT corridor expansion."},
                {"q": "Is Krisala Aventis Tathawade a good investment?", "a": "Yes, given its prime location and premium build quality, it offers an excellent hedge against inflation and strong rental demand."},
                {"q": "How does the upcoming metro affect property prices?", "a": "The Pune Metro line 3 extension will drastically reduce commute times, historically leading to a 15-20% surge in property values in nearby areas."},
                {"q": "Are 2 BHK or 3 BHK units better for rental yield?", "a": "Both perform well, but 2 BHK units typically see higher liquidity, whereas 3 BHK units attract long-term corporate tenants."}
            ]
            content = f"Understanding the {topic} in {market} is essential for {year}. With major infrastructure projects underway, Krisala Aventis Tathawade stands out as a prime investment opportunity with excellent ROI potential. Real estate dynamics in {market} have shifted significantly, favoring premium gated communities that offer self-sustained ecosystems. By analyzing the {topic}, investors can clearly see why early entry into Krisala Aventis Tathawade guarantees superior capital appreciation over the next 5 years."
            pages.append({
                "url_slug": url_slug,
                "folder": "market",
                "title": f"{market} Real Estate {topic} {year} | Krisala Aventis Tathawade",
                "description": f"In-depth analysis of {market} {topic} in {year}. See why investing near Krisala Aventis Tathawade is a smart choice.",
                "h1": f"{market} Property Market: {topic} ({year})",
                "content": content,
                "faqs": faqs
            })
    return pages

def generate_all_data():
    all_pages = []
    all_pages.extend(generate_location_data())
    all_pages.extend(generate_price_data())
    all_pages.extend(generate_persona_data())
    all_pages.extend(generate_market_data())
    all_pages.extend(generate_compare_data())
    all_pages.extend(generate_feature_data())
    all_pages.extend(generate_blog_data())
    return all_pages

BASE_TEMPLATE = """<!DOCTYPE html>
<html lang="en-IN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="$description">
    <title>$title</title>
    
    <!-- Open Graph / Social -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://krisalaventis.in/$folder/$url_slug_clean">
    <meta property="og:title" content="$title">
    <meta property="og:description" content="$description">
    <meta property="og:image" content="https://krisalaventis.in/assets/images/hero.webp">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://krisalaventis.in/$folder/$url_slug_clean">
    <meta property="twitter:title" content="$title">
    <meta property="twitter:description" content="$description">
    <meta property="twitter:image" content="https://krisalaventis.in/assets/images/hero.webp">

    <link rel="stylesheet" href="../assets/css/style.min.css">
    <link rel="canonical" href="https://krisalaventis.in/$folder/$url_slug_clean">
    
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        $faq_schema
      ]
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://krisalaventis.in/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "$folder_caps",
        "item": "https://krisalaventis.in/$folder"
      },{
        "@type": "ListItem",
        "position": 3,
        "name": "$title"
      }]
    }
    </script>
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
        <article class="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div class="w-full h-64 md:h-96 relative overflow-hidden">
                <img src="../assets/images/hero.webp" alt="Krisala Aventis Tathawade - $h1" class="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0a0c11] to-transparent"></div>
                <div class="absolute bottom-8 left-8 right-8">
                    <h1 class="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-gold-400">$h1</h1>
                </div>
            </div>
            
            <div class="p-8">
                <div class="prose prose-invert prose-gold max-w-none">
                    <p class="text-lg text-gray-300 leading-relaxed mb-8">$content</p>
                    
                    <div class="grid md:grid-cols-2 gap-8 my-12">
                        <div class="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                            <h2 class="text-2xl font-bold mb-4">Why Choose Krisala Aventis Tathawade?</h2>
                            <ul class="space-y-3 text-gray-300">
                                <li class="flex items-center gap-3">✓ 40+ Premium Lifestyle Amenities</li>
                                <li class="flex items-center gap-3">✓ Prime Location in Tathawade</li>
                                <li class="flex items-center gap-3">✓ Unmatched Connectivity to Hinjewadi IT Hubs</li>
                                <li class="flex items-center gap-3">✓ Advanced Aluform Construction Technology</li>
                                <li class="flex items-center gap-3">✓ Smart Study Spaces in Every Home</li>
                            </ul>
                        </div>
                        
                        <div class="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                            <h2 class="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                            <div class="space-y-4">
                                $faq_html
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Internal Linking Widget -->
                <div class="mt-16 border-t border-gray-800 pt-8">
                    <h3 class="text-xl font-bold mb-6 text-gold-500">Explore More Related Searches</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        $related_links_html
                    </div>
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
    
    print(f"Generating {len(pages)} SEO compliant pages...")
    
    for i, page in enumerate(pages):
        # Generate JSON-LD FAQ Schema
        faq_schema_items = []
        faq_html_items = []
        for faq in page.get('faqs', []):
            # Escape quotes for JSON
            safe_q = faq['q'].replace('"', '\\"')
            safe_a = faq['a'].replace('"', '\\"')
            faq_schema_items.append(f'{{"@type": "Question", "name": "{safe_q}", "acceptedAnswer": {{"@type": "Answer", "text": "{safe_a}"}}}}')
            
            # HTML for FAQ section
            faq_html_items.append(f"""
                <details class="group cursor-pointer">
                    <summary class="font-medium text-gray-200 hover:text-gold-400 transition-colors list-none flex justify-between items-center">
                        {faq['q']}
                        <span class="text-gold-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p class="text-gray-400 mt-2 pl-4 border-l-2 border-gold-600/30">{faq['a']}</p>
                </details>
            """)
            
        faq_schema_str = ",\n        ".join(faq_schema_items)
        faq_html_str = "\n".join(faq_html_items)
        
        # Pick 4 random related pages for internal linking
        related_pages = random.sample(pages, min(4, len(pages)))
        related_links_html = ""
        for rp in related_pages:
            related_links_html += f'<a href="/{rp['folder']}/{rp['url_slug'].replace('.html', '')}" class="block p-4 bg-gray-900/40 rounded-lg border border-gray-800 hover:border-gold-600/50 hover:bg-gray-800/60 transition-all text-sm text-gray-300 hover:text-white truncate" title="{rp["title"]}">{rp["title"]}</a>\n'

        html_content = template.safe_substitute(
            title=page['title'],
            description=page['description'],
            folder=page['folder'],
            folder_caps=page['folder'].capitalize(),
            url_slug=page['url_slug'],
            url_slug_clean=page['url_slug'].replace('.html', ''),
            h1=page['h1'],
            content=page['content'],
            faq_schema=faq_schema_str,
            faq_html=faq_html_str,
            related_links_html=related_links_html
        )
        
        output_path = os.path.join(OUTPUT_DIRS[page['folder']], page['url_slug'])
        with open(output_path, 'w') as f:
            f.write(html_content)
            
        if (i+1) % 100 == 0:
            print(f"Generated {i+1} pages...")
            
    print(f"Successfully generated {len(pages)} pages.")

def generate_compare_data():
    competitors = ["Godrej Evergreen Square", "Kolte-Patil Oakwood", "Lodha Panache", "Gera Joy on the Treetops", 
                   "Pharande Puneville", "Kohinoor West View", "VTP Earth 1", "Mahindra Happinest", "Eisha 33 Central", "Naiknavare"]
    aspects = ["Price Comparison", "Amenities", "Floor Plans", "Location Benefits", "Construction Quality", 
               "Possession Date", "ROI Potential", "Connectivity", "Green Spaces", "Value for Money"]
    
    pages = []
    for comp in competitors:
        for aspect in aspects:
            url_slug = f"krisala-aventis-vs-{comp.replace(' ', '-').lower()}-{aspect.replace(' ', '-').lower()}.html"
            faqs = [
                {"q": f"How does Krisala Aventis Tathawade compare to {comp} in terms of {aspect}?", "a": f"When it comes to {aspect}, Krisala Aventis Tathawade stands out by offering superior value and uncompromising quality compared to {comp}."},
                {"q": "Which project offers better long-term ROI?", "a": "Thanks to our strategic location and premium amenities, early investors in Krisala Aventis Tathawade consistently see robust appreciation."},
                {"q": "Are the floor plans more spacious?", "a": "Yes, our smart study layouts are intelligently designed to ensure zero space wastage, providing highly functional living areas."}
            ]
            content = f"When evaluating {aspect}, how does Krisala Aventis Tathawade stack up against {comp}? Our detailed analysis shows why Krisala Aventis Tathawade offers superior value in the Tathawade micro-market. Buyers prioritizing {aspect} consistently find that Krisala Aventis Tathawade delivers exactly what they need without the hidden compromises often found elsewhere."
            pages.append({
                "url_slug": url_slug,
                "folder": "compare",
                "title": f"Krisala Aventis Tathawade vs {comp} - {aspect}",
                "description": f"Detailed {aspect} comparison between Krisala Aventis Tathawade and {comp}. Make an informed home buying decision.",
                "h1": f"Comparing Krisala Aventis Tathawade vs {comp}: {aspect}",
                "content": content,
                "faqs": faqs
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
            faqs = [
                {"q": f"What is the {variant} of {feature}?", "a": f"The {feature} at Krisala Aventis Tathawade provides a direct {variant} by enhancing your daily living experience and reducing long-term costs."},
                {"q": "Is this a standard inclusion?", "a": "Yes, Krisala Legacy ensures that premium features are standard inclusions rather than paid upgrades."}
            ]
            content = f"Krisala Aventis Tathawade incorporates top-tier {feature} to ensure a {variant}. This commitment to quality and modern living standards sets the project apart in Pune's real estate landscape. By integrating {feature}, residents enjoy unparalleled convenience and luxury."
            pages.append({
                "url_slug": url_slug,
                "folder": "feature",
                "title": f"{feature} at Krisala Aventis Tathawade | {variant}",
                "description": f"Learn about the {feature} at Krisala Aventis Tathawade and its {variant}. Premium living in Tathawade.",
                "h1": f"Krisala Aventis Tathawade Features: {feature} ({variant})",
                "content": content,
                "faqs": faqs
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
                faqs = [
                    {"q": f"How does {topic} apply to {loc}?", "a": f"For buyers in {loc}, understanding {topic} is critical in {year} to maximize investment potential."},
                    {"q": "Where can I get expert advice?", "a": "The Krisala Legacy team offers expert guidance on all aspects of real estate purchasing."}
                ]
                content = f"Our detailed look into {topic} reveals important trends for {loc} in {year}. Stay informed with Krisala Legacy's expert real estate insights. As the market evolves, understanding {topic} will give buyers in {loc} a distinct advantage when securing their dream home."
                pages.append({
                    "url_slug": url_slug,
                    "folder": "blog",
                    "title": f"{topic} in {loc} ({year}) | Krisala Blog",
                    "description": f"Read our comprehensive guide on {topic} for {loc} property buyers in {year}.",
                    "h1": f"{topic}: {loc} Perspective {year}",
                    "content": content,
                    "faqs": faqs
                })
    return pages[:300]
if __name__ == "__main__":
    build_pages()

