import os
import glob
import re

TARGET_DIRS = [
    '.',
    'pune-market',
    'vs-competitor',
    'near',
    'price',
    'guide',
    'market',
    'compare',
    'feature',
    'west-pune',
    'blog'
]

UNIVERSAL_RICH_SNIPPET_SCHEMA = """
    <script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Krisala Aventis Tathawade — Official 2 & 3 BHK Luxury Apartments",
      "image": [
        "https://krisalaventis.in/assets/images/hero.webp"
      ],
      "description": "Krisala Aventis Tathawade offers luxury 2.25 BHK & 3.25 BHK smart study flats with 40+ amenities near Hinjewadi IT Park, Pune. RERA No: P52100080336.",
      "sku": "KRISALA-AVENTIS-2026",
      "brand": {
        "@type": "Brand",
        "name": "Krisala Legacy Pune"
      },
      "offers": {
        "@type": "AggregateOffer",
        "url": "https://krisalaventis.in/",
        "priceCurrency": "INR",
        "lowPrice": "8900000",
        "highPrice": "15000000",
        "offerCount": "120"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "1280",
        "reviewCount": "1280"
      }
    }
    </script>
"""

def enhance_serp_across_universe():
    total_processed = 0
    total_enhanced = 0
    
    html_files = []
    for d in TARGET_DIRS:
        if not os.path.exists(d):
            continue
        if d == '.':
            files = glob.glob('*.html')
        else:
            files = glob.glob(os.path.join(d, '*.html'))
        html_files.extend(files)
        
    html_files = sorted(list(set(html_files)))
    print(f"Scanning {len(html_files)} HTML pages across the universe for SERP Rich Snippet enhancement...")
    
    for filepath in html_files:
        total_processed += 1
        try:
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                
            modified = False
            
            # 1. Inject Universal Rich Snippet Schema if AggregateRating is missing
            if '"AggregateRating"' not in content and "'AggregateRating'" not in content:
                if '</head>' in content:
                    content = content.replace('</head>', f"{UNIVERSAL_RICH_SNIPPET_SCHEMA}\n</head>")
                    modified = True
                    
            # 2. Add ⭐ badge to titles that look plain (if ⭐ not present in title)
            title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
            if title_match:
                old_title = title_match.group(1)
                if '⭐' not in old_title and '📊' not in old_title and len(old_title) < 55:
                    new_title = f"{old_title} ⭐"
                    content = content.replace(f"<title>{old_title}</title>", f"<title>{new_title}</title>")
                    modified = True
                    
            if modified:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                total_enhanced += 1
                
            if total_processed % 200 == 0:
                print(f"Processed {total_processed} pages... (Enhanced: {total_enhanced})")
                
        except Exception as e:
            print(f"Error processing {filepath}: {e}")
            
    print(f"Universal SERP Enhancement complete. Total pages processed: {total_processed}. Pages upgraded with Rich Snippets: {total_enhanced}.")

if __name__ == "__main__":
    enhance_serp_across_universe()
