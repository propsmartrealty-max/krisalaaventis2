import os
import re
from datetime import datetime

OUTPUT_DIR = "west-pune"

MARKETS = [
    # Hinjewadi Corridor
    "Hinjewadi Phase 1", "Hinjewadi Phase 2", "Hinjewadi Phase 3", "Maan", "Marunji", "Rajiv Gandhi Infotech Park",
    # Wakad & Surrounds
    "Wakad", "Kaspate Wasti", "Bhujbal Chowk Wakad", "Datta Mandir Road Wakad", "Pink City Road Wakad",
    # Punawale & Ravet
    "Punawale", "Malwadi Punawale", "Koyte Vasti Punawale", "Kate Wasti Punawale", "Ravet", "Kiwale", "Mukai Chowk Ravet", "Ravet BRTS Road",
    # Baner & Balewadi
    "Baner", "Baner Pashan Link Road", "Pan Card Club Road Baner", "Balewadi", "Balewadi High Street", "Balewadi Stadium Area", "Dasra Chowk Balewadi",
    # Pimpri-Chinchwad Core (PCMC)
    "Pimple Saudagar", "Pimple Nilakh", "Pimple Gurav", "Thergaon", "Kalewadi", "Rahatani", "Chinchwad", "Akurdi", "Nigdi", "Talawade IT Park", "Pradhikaran",
    # PMC West Suburbs
    "Bavdhan", "Bavdhan Khurd", "Bavdhan Budruk", "Sus", "Sus Gaon", "Mahalunge", "Aundh", "Pashan", "Kothrud", "Karve Nagar", "Warje"
]

ANGLES = [
    {
        "slug_pattern": "luxury-2-bhk-flats-near-{slug}",
        "title": "Luxury 2 BHK Flats Near {market}",
        "h1": "Premium 2 BHK Apartments Near {market}",
        "desc": "Looking for luxury 2 BHK flats near {market}? Discover Krisala Aventis Tathawade — 2.25 BHK Smart Study homes at ₹89 Lakhs* with 40+ amenities.",
        "benefit": "Superior carpet area and dedicated WFH smart study alcove at a competitive entry price."
    },
    {
        "slug_pattern": "premium-3-bhk-flats-near-{slug}",
        "title": "Premium 3 BHK Flats Near {market}",
        "h1": "Luxury 3 BHK Residences Near {market}",
        "desc": "Upgrade to a 3.25 BHK near {market}. Krisala Aventis Tathawade offers spacious dual-balcony homes starting ₹1.30 Cr* with infinity pool access.",
        "benefit": "Spacious living with premium monolithic Aluform construction and seamless highway access."
    },
    {
        "slug_pattern": "{slug}-real-estate-property-prices",
        "title": "{market} Real Estate Property Prices & Trends (2026)",
        "h1": "{market} Property Price Trends (2026)",
        "desc": "Analyze the latest real estate property prices in {market}. Compare per sq.ft rates with Tathawade's high-appreciation market (starting ₹89 Lakhs*).",
        "benefit": "Maximize capital appreciation by investing in Tathawade, saving ₹15L–₹35L+ compared to neighboring saturated micro-markets."
    },
    {
        "slug_pattern": "flats-for-it-professionals-in-{slug}",
        "title": "Flats for IT Professionals in {market}",
        "h1": "Best Flats for IT Professionals Near {market}",
        "desc": "Ideal homes for IT professionals near {market}. Krisala Aventis offers 10-min Hinjewadi commute, co-working spaces, and WFH study rooms from ₹89 Lakhs*.",
        "benefit": "10-minute signal-free commute to Hinjewadi IT Park and dedicated business lounge."
    },
    {
        "slug_pattern": "{slug}-vs-tathawade-property-comparison",
        "title": "{market} vs Tathawade Property Comparison",
        "h1": "{market} vs Tathawade: Where Should You Buy?",
        "desc": "Compare real estate ROI in {market} vs Tathawade. Learn why IT families prefer Krisala Aventis (₹89L*) for better connectivity and luxury amenities.",
        "benefit": "Lower entry price, higher rental yields, and superior infrastructure growth in Tathawade."
    },
    {
        "slug_pattern": "new-launch-projects-in-{slug}",
        "title": "New Launch Projects in {market}",
        "h1": "Top New Launch Projects Near {market}",
        "desc": "Explore new launch luxury projects near {market}. Krisala Aventis Tathawade is the #1 MahaRERA registered new launch starting at ₹89 Lakhs*.",
        "benefit": "Fresh inventory, early-bird pricing, and flexible payment plans under MahaRERA safety."
    },
    {
        "slug_pattern": "best-residential-projects-{slug}",
        "title": "Best Residential Projects in {market}",
        "h1": "Top Residential Projects Near {market}",
        "desc": "Searching for the best residential projects near {market}? Krisala Aventis Tathawade ranks #1 for IT professionals. 2.25 & 3.25 BHK from ₹89 Lakhs*.",
        "benefit": "Voted #1 luxury project in West Pune for lifestyle amenities and build quality."
    },
    {
        "slug_pattern": "flats-near-{slug}-metro-station",
        "title": "Flats Near {market} Metro Station",
        "h1": "Properties Near {market} Metro Connectivity",
        "desc": "Looking for flats near {market} metro? Krisala Aventis Tathawade offers seamless access to Hinjewadi metro line & highway from ₹89 Lakhs*.",
        "benefit": "Future-proof investment with upcoming metro infrastructure driving 20-30% capital appreciation."
    },
    {
        "slug_pattern": "nri-property-investment-in-{slug}",
        "title": "NRI Property Investment in {market}",
        "h1": "NRI Investment Opportunities Near {market}",
        "desc": "The ultimate NRI guide to investing in {market} real estate. Discover Krisala Aventis Tathawade — high rental yield 2.25 BHK flats from ₹89 Lakhs*.",
        "benefit": "High NRI rental yields (10-12%), FEMA compliance, and completely transparent online booking."
    },
    {
        "slug_pattern": "top-builders-in-{slug}",
        "title": "Top Builders & Developers in {market}",
        "h1": "Trusted Real Estate Builders Near {market}",
        "desc": "Compare top builders in {market}. Krisala Legacy offers unparalleled trust, Aluform technology, and on-time delivery at Krisala Aventis Tathawade.",
        "benefit": "Proven track record of thousands of happy families and strict adherence to RERA timelines."
    }
]

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} — West Pune Real Estate ⭐</title>
    <meta name="description" content="{desc}">
    <meta name="keywords" content="{market} real estate, {market} flats, {market} property, 2 BHK near {market}, Krisala Aventis Tathawade">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <link rel="canonical" href="https://krisalaventis.in/west-pune/{slug}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{desc}">
    <meta property="og:url" content="https://krisalaventis.in/west-pune/{slug}">
    <meta property="og:type" content="article">
    <meta property="og:image" content="https://krisalaventis.in/assets/images/hero.webp">
    
    <!-- Tailwind & Custom CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {{
            theme: {{
                extend: {{
                    colors: {{
                        gold: {{ 400: '#D4AF37', 500: '#C59B27', 600: '#AA820A' }},
                        dark: '#0B0F19'
                    }},
                    fontFamily: {{ sans: ['Outfit', 'sans-serif'] }}
                }}
            }}
        }}
    </script>

    <!-- Structured Data JSON-LD -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Krisala Aventis Tathawade Near {market}",
      "image": ["https://krisalaventis.in/assets/images/hero.webp"],
      "description": "{desc}",
      "sku": "KRISALA-WESTPUNE-{sku_market}",
      "brand": {{
        "@type": "Brand",
        "name": "Krisala Legacy Pune"
      }},
      "offers": {{
        "@type": "AggregateOffer",
        "url": "https://krisalaventis.in/west-pune/{slug}",
        "priceCurrency": "INR",
        "lowPrice": "8900000",
        "highPrice": "15000000",
        "offerCount": "150"
      }},
      "aggregateRating": {{
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "1340",
        "reviewCount": "1340"
      }}
    }}
    </script>
    
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {{
          "@type": "Question",
          "name": "What is the starting price for properties near {market} at Krisala Aventis?",
          "acceptedAnswer": {{
            "@type": "Answer",
            "text": "At Krisala Aventis Tathawade, located conveniently near {market}, luxury 2.25 BHK smart study homes start at just ₹89 Lakhs* onwards."
          }}
        }},
        {{
          "@type": "Question",
          "name": "Why is Tathawade a better investment than {market}?",
          "acceptedAnswer": {{
            "@type": "Answer",
            "text": "Tathawade offers superior capital appreciation, direct access to the Mumbai-Bangalore highway, and a 10-minute commute to Hinjewadi IT Park. It provides better layout efficiencies at ₹89 Lakhs* compared to the saturated property rates in {market}."
          }}
        }}
      ]
    }}
    </script>
</head>
<body class="bg-dark text-gray-200 antialiased selection:bg-gold-500 selection:text-black font-sans">
    
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-dark/90 backdrop-blur-md border-b border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="https://krisalaventis.in/" class="flex items-center gap-2">
                <span class="text-2xl font-bold tracking-tight text-white">KRISALA <span class="text-gold-400 font-normal">AVENTIS</span></span>
                <span class="text-xs uppercase tracking-widest bg-gold-500/10 text-gold-400 px-2 py-0.5 rounded border border-gold-500/20">WEST PUNE</span>
            </a>
            <div class="flex items-center gap-4">
                <a href="https://krisalaventis.in/sitemap.html" class="hidden md:inline-flex text-sm text-gray-400 hover:text-gold-400 transition">Micro-Market Directory</a>
                <a href="https://krisalaventis.in/#contact" class="bg-gold-500 hover:bg-gold-400 text-black font-semibold px-5 py-2.5 rounded-full text-sm transition shadow-lg shadow-gold-500/10">
                    Get Official Price List
                </a>
            </div>
        </div>
    </header>

    <!-- Breadcrumb -->
    <nav class="border-b border-gray-800/60 bg-gray-900/40">
        <div class="max-w-7xl mx-auto px-4 py-3 text-xs text-gray-400 flex items-center gap-2">
            <a href="https://krisalaventis.in/" class="hover:text-gold-400">Home</a>
            <span>/</span>
            <a href="https://krisalaventis.in/sitemap.html" class="hover:text-gold-400">West Pune Property</a>
            <span>/</span>
            <span class="text-gray-200 font-medium">{market}</span>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="py-16 md:py-24 border-b border-gray-800 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-transparent pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="max-w-3xl">
                <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-6">
                    <i class="fa-solid fa-map-marker-alt"></i> West Pune Market Intelligence (2026)
                </span>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-6">
                    {h1}
                </h1>
                <p class="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                    {desc}
                </p>
                <div class="flex flex-wrap gap-4">
                    <a href="https://krisalaventis.in/#contact" class="bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition shadow-xl shadow-gold-500/20 flex items-center gap-3">
                        <span>Download Cost Sheet (₹89 Lakhs*)</span>
                        <i class="fa-solid fa-download"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=917744009295&text=Hi%2C%20I%20am%20looking%20for%20property%20near%20{market_url}." target="_blank" class="bg-green-600 hover:bg-green-500 text-white font-semibold px-7 py-4 rounded-full transition flex items-center gap-2">
                        <i class="fa-brands fa-whatsapp text-lg"></i>
                        <span>WhatsApp Local Expert</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- The Tathawade Advantage -->
    <section class="py-16 bg-gray-900/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-white mb-10 text-center">
                Why Buyers in <span class="text-gold-400">{market}</span> Choose <span class="text-gray-200">Krisala Aventis Tathawade</span>
            </h2>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Box 1 -->
                <div class="p-8 rounded-2xl border border-gray-800 bg-dark shadow-2xl hover:border-gold-500/50 transition">
                    <div class="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-400 text-xl mb-6">
                        <i class="fa-solid fa-chart-line"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Superior ROI & Pricing</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">
                        While property rates in {market} have peaked, Tathawade offers a lucrative entry point starting at just <strong>₹89 Lakhs*</strong> for a 2.25 BHK. Maximize your capital appreciation over the next 3–5 years.
                    </p>
                </div>
                
                <!-- Box 2 -->
                <div class="p-8 rounded-2xl border border-gray-800 bg-dark shadow-2xl hover:border-gold-500/50 transition">
                    <div class="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-400 text-xl mb-6">
                        <i class="fa-solid fa-car-side"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Hinjewadi Commute</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">
                        Enjoy a signal-free, 10-minute commute to Hinjewadi IT Park Phase 1 directly via the Mumbai-Bangalore Highway. Save hours in traffic compared to inner routes in {market}.
                    </p>
                </div>

                <!-- Box 3 -->
                <div class="p-8 rounded-2xl border border-gray-800 bg-dark shadow-2xl hover:border-gold-500/50 transition">
                    <div class="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-400 text-xl mb-6">
                        <i class="fa-solid fa-gem"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">40+ Luxury Amenities</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">
                        Why compromise? Krisala Aventis offers an infinity pool, dedicated WFH business lounge, and smart study alcoves designed specifically for modern IT families.
                    </p>
                </div>
            </div>
            
            <div class="mt-12 text-center">
                <span class="inline-block bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm font-semibold">
                    ⭐ Key Advantage: {benefit}
                </span>
            </div>
        </div>
    </section>

    <!-- Lead Generation -->
    <section class="py-16 bg-gradient-to-t from-dark to-gray-900 text-center">
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Looking in <span class="text-gold-400">{market}</span>? Compare Krisala Aventis Today.
            </h2>
            <p class="text-gray-400 text-lg mb-8">
                Request our complete inventory, floor plans, and MahaRERA-verified cost sheets (starting ₹89 Lakhs*).
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="https://krisalaventis.in/#contact" class="bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition shadow-xl shadow-gold-500/20">
                    Get E-Brochure & Pricing
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-800 py-8 text-center text-xs text-gray-500">
        <div class="max-w-7xl mx-auto px-4">
            <p>© 2026 Krisala Aventis Tathawade — Official West Pune Marketing Partner. MahaRERA ID: P52100080336.</p>
            <div class="flex justify-center gap-6 mt-4">
                <a href="https://krisalaventis.in/sitemap.html" class="hover:text-gold-400">Universal Sitemap</a>
                <a href="https://krisalaventis.in/" class="hover:text-gold-400">Official Homepage</a>
            </div>
        </div>
    </footer>

</body>
</html>
"""

def generate_west_pune_silo():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    total_generated = 0

    for market in MARKETS:
        market_slug = re.sub(r'[^a-z0-9]+', '-', market.lower()).strip('-')
        market_url = market.replace(" ", "%20")
        sku_market = market_slug.upper()

        for angle in ANGLES:
            slug = angle["slug_pattern"].format(slug=market_slug)
            filepath = os.path.join(OUTPUT_DIR, f"{slug}.html")

            title = angle["title"].format(market=market)
            h1 = angle["h1"].format(market=market)
            desc = angle["desc"].format(market=market)
            benefit = angle["benefit"]

            html = HTML_TEMPLATE.format(
                market=market,
                market_url=market_url,
                sku_market=sku_market,
                title=title,
                h1=h1,
                desc=desc,
                benefit=benefit,
                slug=slug
            )

            with open(filepath, "w", encoding="utf-8") as f:
                f.write(html)
            total_generated += 1

    print(f"Successfully generated {total_generated} West Pune Hyper-Local pages in '{OUTPUT_DIR}/'.")

if __name__ == "__main__":
    generate_west_pune_silo()
