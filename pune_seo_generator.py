import os
import json
import random
from string import Template

OUTPUT_DIR = 'seo_generator/output/pune-market'
os.makedirs(OUTPUT_DIR, exist_ok=True)

PUNE_LOCALITIES = {
    "Baner": {"avg_price": 12500, "commute": "25 mins", "landmark": "Baner High Street", "savings": "₹38–₹45 Lakhs"},
    "Balewadi": {"avg_price": 11500, "commute": "20 mins", "landmark": "Balewadi High Street", "savings": "₹28–₹35 Lakhs"},
    "Wakad": {"avg_price": 9500, "commute": "15 mins", "landmark": "Phoenix Mall Wakad", "savings": "₹12–₹18 Lakhs"},
    "Hinjewadi": {"avg_price": 8800, "commute": "10 mins", "landmark": "Rajiv Gandhi IT Park", "savings": "₹8–₹12 Lakhs"},
    "Punawale": {"avg_price": 7800, "commute": "15 mins", "landmark": "Punawale Bridge", "savings": "Superior 40+ Amenities"},
    "Ravet": {"avg_price": 7500, "commute": "20 mins", "landmark": "Mukai Chowk", "savings": "Closer Hinjewadi Access"},
    "Pimpri Chinchwad": {"avg_price": 8500, "commute": "25 mins", "landmark": "PCMC Metro Station", "savings": "₹10–₹15 Lakhs"},
    "Aundh": {"avg_price": 13500, "commute": "30 mins", "landmark": "Aundh Parihar Chowk", "savings": "₹45–₹55 Lakhs"},
    "Pimple Saudagar": {"avg_price": 9800, "commute": "25 mins", "landmark": "Linear Garden", "savings": "₹15–₹20 Lakhs"},
    "Kothrud": {"avg_price": 15000, "commute": "40 mins", "landmark": "Chandni Chowk", "savings": "₹60–₹75 Lakhs"},
    "Shivaji Nagar": {"avg_price": 16500, "commute": "45 mins", "landmark": "FC Road", "savings": "₹70–₹89 Lakhs"},
    "Kharadi": {"avg_price": 11000, "commute": "75 mins", "landmark": "EON IT Park", "savings": "₹25–₹30 Lakhs"},
    "Viman Nagar": {"avg_price": 13000, "commute": "70 mins", "landmark": "Phoenix Marketcity", "savings": "₹40–₹50 Lakhs"},
    "Kalyani Nagar": {"avg_price": 14500, "commute": "65 mins", "landmark": "Trump Towers", "savings": "₹55–₹65 Lakhs"},
    "Magarpatta": {"avg_price": 10500, "commute": "70 mins", "landmark": "Cybercity Magarpatta", "savings": "₹20–₹25 Lakhs"},
    "Hadapsar": {"avg_price": 8200, "commute": "75 mins", "landmark": "Amanora Mall", "savings": "Hinjewadi IT Proximity"},
    "NIBM Road": {"avg_price": 9200, "commute": "65 mins", "landmark": "NIBM Institute", "savings": "₹10–₹15 Lakhs"},
    "Undri": {"avg_price": 6800, "commute": "70 mins", "landmark": "Bishops School", "savings": "3x IT Rental Demand"},
    "Bavdhan": {"avg_price": 9500, "commute": "25 mins", "landmark": "Bavdhan NDA Road", "savings": "₹12–₹18 Lakhs"},
    "Sus Road": {"avg_price": 9000, "commute": "20 mins", "landmark": "Sunny's World", "savings": "₹8–₹12 Lakhs"},
    "Pashan": {"avg_price": 10500, "commute": "25 mins", "landmark": "Pashan Lake", "savings": "₹20–₹25 Lakhs"},
    "Akurdi": {"avg_price": 8000, "commute": "20 mins", "landmark": "DY Patil Akurdi", "savings": "Direct Highway Access"},
    "Chinchwad": {"avg_price": 8800, "commute": "22 mins", "landmark": "Chinchwad Station", "savings": "₹8–₹12 Lakhs"},
    "Nigdi": {"avg_price": 7800, "commute": "25 mins", "landmark": "Bhakti Shakti", "savings": "Better Hinjewadi Commute"},
    "Kalewadi": {"avg_price": 8200, "commute": "20 mins", "landmark": "Kalewadi Phata", "savings": "Premium Aluform Towers"}
}

INVESTMENT_ANGLES = [
    "Price Appreciation Forecast 2026",
    "Rental Yield and ROI Comparison",
    "IT Professional Housing Guide",
    "Luxury 2 BHK vs 3 BHK Flats",
    "Metro Connectivity Impact",
    "PCMC Infrastructure Growth Plan",
    "NRI Investment ROI Advantage",
    "Luxury Gated Community Comparison",
    "Smart Study Homes Trend",
    "Real Estate Appreciation Index"
]

BASE_TEMPLATE = """<!DOCTYPE html>
<html lang="en-IN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="$description">
    <meta name="keywords" content="$keywords">
    <title>$title</title>
    
    <!-- Open Graph / Social -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://krisalaventis.in/pune-market/$url_slug_clean">
    <meta property="og:title" content="$title">
    <meta property="og:description" content="$description">
    <meta property="og:image" content="https://krisalaventis.in/assets/images/hero.webp">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://krisalaventis.in/pune-market/$url_slug_clean">
    <meta property="twitter:title" content="$title">
    <meta property="twitter:description" content="$description">
    <meta property="twitter:image" content="https://krisalaventis.in/assets/images/hero.webp">

    <link rel="stylesheet" href="../assets/css/style.min.css">
    <link rel="canonical" href="https://krisalaventis.in/pune-market/$url_slug_clean">
    
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
        "name": "Pune Real Estate Market",
        "item": "https://krisalaventis.in/pune-market"
      },{
        "@type": "ListItem",
        "position": 3,
        "name": "$h1"
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
                <img src="../assets/images/hero.webp" alt="$title" title="$h1" class="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0a0c11] to-transparent"></div>
                <div class="absolute bottom-8 left-8 right-8">
                    <span class="inline-block px-4 py-1 mb-3 text-xs font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/30 rounded-full">Pune Market Analysis 2026</span>
                    <h1 class="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-gold-400">$h1</h1>
                </div>
            </div>
            
            <div class="p-8">
                <div class="prose prose-invert prose-gold max-w-none mb-10">
                    <p class="text-lg text-gray-300 leading-relaxed">$content_intro</p>
                    <p class="text-base text-gray-400 leading-relaxed mt-4">$content_body</p>
                </div>
                
                <!-- Dynamic Comparative Market Data Table -->
                <div class="my-10 bg-gray-900/80 rounded-2xl border border-gray-800 p-6 overflow-x-auto shadow-xl">
                    <h2 class="text-2xl font-bold mb-6 text-gold-400">Market Price & ROI Comparison: $locality vs. Tathawade</h2>
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="border-b border-gray-800 text-gray-400 text-sm">
                                <th class="pb-4 font-semibold">Location / Project</th>
                                <th class="pb-4 font-semibold">Avg. Price / Sq.Ft</th>
                                <th class="pb-4 font-semibold">Commute to Hinjewadi IT</th>
                                <th class="pb-4 font-semibold">Expected ROI (2030)</th>
                                <th class="pb-4 font-semibold">Key Financial Advantage</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-800 text-sm md:text-base">
                            <tr class="text-gray-300">
                                <td class="py-4 font-medium">$locality (Avg. Residential)</td>
                                <td class="py-4 text-red-400 font-semibold">₹$locality_price / sq.ft</td>
                                <td class="py-4">$locality_commute</td>
                                <td class="py-4">12–15% Total Growth</td>
                                <td class="py-4 text-gray-500">Traditional Market Average</td>
                            </tr>
                            <tr class="bg-gold-500/10 text-white font-medium">
                                <td class="py-4 pl-2 text-gold-400 font-bold">Krisala Aventis Tathawade ⭐</td>
                                <td class="py-4 pl-2 text-green-400 font-bold">₹8,500* / sq.ft</td>
                                <td class="py-4 pl-2 font-semibold">10 Mins (Gateway Access)</td>
                                <td class="py-4 pl-2 text-green-400 font-bold">25–35% Capital Growth</td>
                                <td class="py-4 pl-2 text-gold-400 font-bold">$locality_savings</td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="text-xs text-gray-500 mt-4">*Indicative pricing based on current launch estimates. MahaRERA: P52100080336.</p>
                </div>

                <!-- Why Tathawade & FAQs Grid -->
                <div class="grid md:grid-cols-2 gap-8 my-12">
                    <div class="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                        <h2 class="text-2xl font-bold mb-4 text-gold-400">Why Pune Buyers are Choosing Krisala Aventis Tathawade</h2>
                        <ul class="space-y-3 text-gray-300 text-sm md:text-base">
                            <li class="flex items-center gap-3">✓ <strong>Aluform Monolithic Technology</strong> — Zero seepage & structural durability</li>
                            <li class="flex items-center gap-3">✓ <strong>Smart Study Alcove</strong> — WFH & hybrid work space in every 2 & 3 BHK</li>
                            <li class="flex items-center gap-3">✓ <strong>40+ Lifestyle Amenities</strong> — Rooftop Infinity Pool, Gym & Co-working lounge</li>
                            <li class="flex items-center gap-3">✓ <strong>Gateway Connectivity</strong> — 2 mins to Highway, 10 mins to Hinjewadi IT</li>
                            <li class="flex items-center gap-3">✓ <strong>MahaRERA Verified</strong> — Full legal transparency & on-time delivery</li>
                        </ul>
                        <div class="mt-6 pt-4 border-t border-gray-700">
                            <a href="/krisala-aventis-tathawade-price-list" class="inline-block px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-800 rounded-lg font-medium text-white hover:shadow-lg transition-all">Check Current Cost Sheet</a>
                        </div>
                    </div>
                    
                    <div class="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                        <h2 class="text-2xl font-bold mb-4 text-gold-400">Frequently Asked Questions</h2>
                        <div class="space-y-4">
                            $faq_html
                        </div>
                    </div>
                </div>
                
                <!-- Internal Linking Widget -->
                <div class="mt-16 border-t border-gray-800 pt-8">
                    <h3 class="text-xl font-bold mb-6 text-gold-500">Explore More Pune Real Estate Guides & Micro-Markets</h3>
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

def build_pune_pages():
    pages = []
    
    for locality, data in PUNE_LOCALITIES.items():
        for angle in INVESTMENT_ANGLES:
            url_slug = f"pune-real-estate-{locality.lower().replace(' ', '-')}-{angle.lower().replace(' ', '-')}-2026.html"
            url_slug_clean = url_slug.replace('.html', '')
            
            title = f"{locality} Pune Real Estate {angle} (2026) | Krisala Aventis Tathawade"
            description = f"Comprehensive 2026 real estate guide for {locality} Pune: {angle}. Compare prices per sq.ft, ROI, and commute times against Krisala Aventis Tathawade."
            h1 = f"{locality} Pune Real Estate: {angle} (2026)"
            
            content_intro = (
                f"When evaluating Pune's dynamic property market in 2026, homebuyers searching across {locality} are increasingly shifting their focus toward the Wakad-Tathawade growth corridor. "
                f"While {locality} remains an established residential pocket near {data['landmark']}, property prices averaging ₹{data['avg_price']}/sq.ft often force buyers to compromise on layout size or lifestyle amenities. "
                f"In contrast, Krisala Aventis Tathawade offers luxury 2.25 BHK and 3.25 BHK smart study homes starting at ₹89 Lakhs*, delivering superior capital appreciation and connectivity."
            )
            
            content_body = (
                f"For buyers analyzing '{angle}' in {locality}, the financial and lifestyle advantages of Krisala Aventis Tathawade are undeniable. "
                f"With daily commute times to Hinjewadi IT Park of approximately {data['commute']} from {locality}, Tathawade's strategic 10-minute proximity saves working professionals hundreds of hours annually. "
                f"Built using advanced 100% monolithic Aluform technology with 40+ world-class amenities and dedicated smart study rooms, Krisala Aventis Tathawade offers an unmatched lifestyle and investment hedge in West Pune."
            )
            
            faqs = [
                {
                    "q": f"How does {locality} compare to Tathawade for real estate investment in 2026?",
                    "a": f"While {locality} average residential prices command ₹{data['avg_price']}/sq.ft, Krisala Aventis Tathawade offers luxury Aluform towers from ~₹8,500/sq.ft*, providing a significant financial advantage with 40+ premium amenities."
                },
                {
                    "q": f"What is the daily commute time from {locality} vs Tathawade to Hinjewadi IT Park?",
                    "a": f"Commuting from {locality} to Hinjewadi IT Park typically takes {data['commute']}, whereas residents of Krisala Aventis Tathawade reach Hinjewadi Phase 1 in just 5–10 minutes via direct highway access."
                },
                {
                    "q": f"Why is Krisala Aventis Tathawade ideal for homebuyers searching in {locality}?",
                    "a": f"Buyers searching in {locality} choose Krisala Aventis Tathawade to gain extra carpet area, a dedicated 'Smart Study' work-from-home room, and superior 2026 capital appreciation without paying inflated city-center prices."
                },
                {
                    "q": "Is Krisala Aventis Tathawade MahaRERA registered and approved by banks?",
                    "a": "Yes, Krisala Aventis Tathawade is fully MahaRERA registered under P52100080336 and approved for home loans by all leading nationalized and private banks."
                }
            ]
            
            pages.append({
                "url_slug": url_slug,
                "url_slug_clean": url_slug_clean,
                "locality": locality,
                "locality_price": f"{data['avg_price']:,}",
                "locality_commute": data['commute'],
                "locality_savings": data['savings'],
                "title": title,
                "description": description,
                "h1": h1,
                "content_intro": content_intro,
                "content_body": content_body,
                "faqs": faqs,
                "keywords": f"Tathawade Pune property, {locality} real estate, {angle} {locality}, flats near Hinjewadi, Pune West real estate investment"
            })
            
    print(f"Generating {len(pages)} enhanced Pune Real Estate market pages...")
    template = Template(BASE_TEMPLATE)
    
    for i, page in enumerate(pages):
        faq_schema_items = []
        faq_html_items = []
        for faq in page['faqs']:
            safe_q = faq['q'].replace('"', '\\"')
            safe_a = faq['a'].replace('"', '\\"')
            faq_schema_items.append(f'{{"@type": "Question", "name": "{safe_q}", "acceptedAnswer": {{"@type": "Answer", "text": "{safe_a}"}}}}')
            
            faq_html_items.append(f"""
                <details class="group cursor-pointer">
                    <summary class="font-medium text-gray-200 hover:text-gold-400 transition-colors list-none flex justify-between items-center py-2">
                        <span>{faq['q']}</span>
                        <span class="text-gold-500 group-open:rotate-180 transition-transform ml-2">▼</span>
                    </summary>
                    <p class="text-gray-400 mt-2 pl-4 border-l-2 border-gold-600/30 text-sm">{faq['a']}</p>
                </details>
            """)
            
        faq_schema_str = ",\n        ".join(faq_schema_items)
        faq_html_str = "\n".join(faq_html_items)
        
        # Pick 4 random related pages
        related_pages = random.sample(pages, min(4, len(pages)))
        related_links_html = ""
        for rp in related_pages:
            related_links_html += f'<a href="/pune-market/{rp["url_slug_clean"]}" class="block p-4 bg-gray-900/40 rounded-lg border border-gray-800 hover:border-gold-600/50 hover:bg-gray-800/60 transition-all text-sm text-gray-300 hover:text-white truncate" title="{rp["title"]}">{rp["title"]}</a>\n'
            
        html_content = template.safe_substitute(
            title=page['title'],
            description=page['description'],
            url_slug_clean=page['url_slug_clean'],
            h1=page['h1'],
            content_intro=page['content_intro'],
            content_body=page['content_body'],
            locality=page['locality'],
            locality_price=page['locality_price'],
            locality_commute=page['locality_commute'],
            locality_savings=page['locality_savings'],
            faq_schema=faq_schema_str,
            faq_html=faq_html_str,
            related_links_html=related_links_html,
            keywords=page.get('keywords', '')
        )
        
        output_path = os.path.join(OUTPUT_DIR, page['url_slug'])
        with open(output_path, 'w') as f:
            f.write(html_content)
            
        if (i+1) % 50 == 0:
            print(f"Generated {i+1} pages...")
            
    print(f"Successfully generated {len(pages)} enhanced Pune Real Estate market pages.")

if __name__ == "__main__":
    build_pune_pages()
