import os
import glob
import re

CATEGORIES = [
    {"dir": "vs-competitor", "name": "Competitor Comparisons", "icon": "fa-balance-scale", "desc": "Side-by-side analysis of Krisala Aventis vs West Pune competitors."},
    {"dir": "pune-market", "name": "Pune Micro-Market Analysis", "icon": "fa-map-marked-alt", "desc": "Real estate forecast, price appreciation, and IT commute across 25 Pune localities."},
    {"dir": "near", "name": "Near IT Parks & Landmarks", "icon": "fa-building", "desc": "Flats near Hinjewadi IT Park, Mumbai-Bangalore Highway, Wakad, and Baner."},
    {"dir": "price", "name": "Price Lists & Budget Plans", "icon": "fa-tags", "desc": "Official 2.25 BHK & 3.25 BHK cost sheets, EMI plans, and RERA pricing."},
    {"dir": "guide", "name": "Homebuyer & NRI Guides", "icon": "fa-book-open", "desc": "Vastu Shastra, NRI remittance rules, rental yield, and Aluform construction."},
    {"dir": "compare", "name": "Property Type Comparisons", "icon": "fa-columns", "desc": "2 BHK vs 3 BHK, co-working vs smart study homes, high-floor vs low-floor flats."},
    {"dir": "market", "name": "Market Forecasts & Appreciation", "icon": "fa-chart-line", "desc": "West Pune infrastructure growth, metro connectivity impact, and ROI index."},
    {"dir": "feature", "name": "Luxury Amenities & Specifications", "icon": "fa-star", "desc": "Rooftop infinity pool, smart study alcoves, and monolithic Aluform durability."},
    {"dir": "blog", "name": "Real Estate Insights Blog", "icon": "fa-newspaper", "desc": "In-depth articles and annual forecasts from 2025 to 2030 across Pune."}
]

SITEMAP_HEADER = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Universal Sitemap & Directory — Krisala Aventis Tathawade Pune ⭐</title>
    <meta name="description" content="Explore all 1,850+ official pages of Krisala Aventis Tathawade Pune. Search competitor comparisons, Pune market guides, price sheets, and floor plans.">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://krisalaventis.in/sitemap">
    
    <!-- Tailwind & Custom CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        gold: { 400: '#D4AF37', 500: '#C59B27', 600: '#AA820A' },
                        dark: '#0B0F19'
                    },
                    fontFamily: { sans: ['Outfit', 'sans-serif'] }
                }
            }
        }
    </script>
</head>
<body class="bg-dark text-gray-200 antialiased selection:bg-gold-500 selection:text-black font-sans min-h-screen flex flex-col">
    
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-dark/90 backdrop-blur-md border-b border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="https://krisalaventis.in/" class="flex items-center gap-2">
                <span class="text-2xl font-bold tracking-tight text-white">KRISALA <span class="text-gold-400 font-normal">AVENTIS</span></span>
                <span class="text-xs uppercase tracking-widest bg-gold-500/10 text-gold-400 px-2 py-0.5 rounded border border-gold-500/20">DIRECTORY</span>
            </a>
            <div class="flex items-center gap-4">
                <a href="https://krisalaventis.in/nri-investor-hub.html" class="text-sm text-gray-400 hover:text-gold-400 transition">NRI Hub</a>
                <a href="https://krisalaventis.in/#contact" class="bg-gold-500 hover:bg-gold-400 text-black font-semibold px-5 py-2.5 rounded-full text-sm transition">
                    Enquire Now
                </a>
            </div>
        </div>
    </header>

    <!-- Hero Search Banner -->
    <section class="py-12 bg-gray-900/50 border-b border-gray-800">
        <div class="max-w-5xl mx-auto px-4 text-center">
            <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Official Universal <span class="text-gold-400">Sitemap & Knowledge Directory</span>
            </h1>
            <p class="text-gray-400 text-sm md:text-base mb-8">
                Search across 1,850+ official comparative guides, Pune locality analyses, floor plans, and investment benchmarks.
            </p>
            <div class="max-w-2xl mx-auto relative">
                <i class="fa-solid fa-search absolute left-5 top-4 text-gray-400 text-lg"></i>
                <input type="text" id="searchInput" onkeyup="filterDirectory()" placeholder="Search any keyword (e.g. 'Baner', 'Kohinoor', 'Price', '2 BHK', 'NRI')..." class="w-full bg-dark border border-gray-700 rounded-full py-3.5 pl-14 pr-6 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition shadow-xl">
            </div>
        </div>
    </section>

    <!-- Directory Content -->
    <main class="flex-grow py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="directoryContainer">
"""

SITEMAP_FOOTER = """        </div>
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800 py-8 text-center text-xs text-gray-500">
        <div class="max-w-7xl mx-auto px-4">
            <p>© 2026 Krisala Aventis Tathawade — Official Marketing Partner. All Rights Reserved. MahaRERA ID: P52100080336.</p>
        </div>
    </footer>

    <!-- Instant Search Script -->
    <script>
        function filterDirectory() {
            const input = document.getElementById('searchInput').value.toLowerCase();
            const cards = document.querySelectorAll('.dir-link-item');
            const sections = document.querySelectorAll('.category-section');

            cards.forEach(card => {
                const text = card.innerText.toLowerCase();
                if (text.includes(input)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });

            // Hide empty sections during search
            sections.forEach(section => {
                const visibleCards = section.querySelectorAll('.dir-link-item[style="display: block;"], .dir-link-item:not([style*="display: none"])');
                if (visibleCards.length === 0 && input !== '') {
                    section.style.display = 'none';
                } else {
                    section.style.display = 'block';
                }
            });
        }
    </script>
</body>
</html>
"""

def generate_html_sitemap():
    total_links = 0
    html_sections = []

    for cat in CATEGORIES:
        dir_path = cat["dir"]
        if not os.path.exists(dir_path):
            continue

        files = sorted(glob.glob(os.path.join(dir_path, "*.html")))
        if not files:
            continue

        links_html = []
        for filepath in files:
            filename = os.path.basename(filepath)
            clean_slug = filename.replace(".html", "")
            
            # Extract clean readable title from slug
            readable_name = clean_slug.replace("-", " ").title()
            readable_name = readable_name.replace("Krisala Aventis", "Krisala Aventis").replace("2026", "(2026)").replace("2030", "(2030)")
            
            url = f"https://krisalaventis.in/{dir_path}/{clean_slug}"
            
            links_html.append(f"""                <li class="dir-link-item">
                    <a href="{url}" class="block p-3 rounded-lg bg-gray-900/60 border border-gray-800/80 hover:border-gold-500/50 hover:bg-gray-800/80 transition text-sm text-gray-300 hover:text-gold-400">
                        <i class="fa-solid fa-chevron-right text-xs text-gold-400/60 mr-2"></i>
                        <span>{readable_name}</span>
                    </a>
                </li>""")
            total_links += 1

        section_html = f"""            <div class="category-section">
                <div class="flex items-center gap-3 border-b border-gray-800 pb-4 mb-6">
                    <div class="w-10 h-10 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center text-lg">
                        <i class="fa-solid {cat['icon']}"></i>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-white">{cat['name']}</h2>
                        <p class="text-xs text-gray-400">{cat['desc']} ({len(files)} official articles & guides)</p>
                    </div>
                </div>
                <ul class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
{chr(10).join(links_html)}
                </ul>
            </div>"""
        html_sections.append(section_html)

    full_html = SITEMAP_HEADER + "\n".join(html_sections) + SITEMAP_FOOTER

    with open("sitemap.html", "w", encoding="utf-8") as f:
        f.write(full_html)

    print(f"Successfully generated sitemap.html with {total_links} links categorized across 9 silos.")

if __name__ == "__main__":
    generate_html_sitemap()
