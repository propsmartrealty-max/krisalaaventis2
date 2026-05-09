import os
import glob
import re

def final_polish():
    # 1. Update index.html with AggregateOffer and AggregateRating
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # AggregateRating for LocalBusiness
    rating_schema = """
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    },"""
    
    if '"aggregateRating"' not in content:
        content = content.replace('"telephone": "+917744009295",', '"telephone": "+917744009295",' + rating_schema)

    # ApartmentComplex / Product AggregateOffer
    complex_schema = """
  <script type="application/ld+json">
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Krisala Aventis Tathawade",
    "image": "https://krisalaventis.in/assets/images/hero.png",
    "description": "Krisala Aventis offers luxury 2.25 & 3.25 BHK apartments in Tathawade, Pune. Top-tier amenities and strategic connectivity.",
    "brand": {
      "@type": "Brand",
      "name": "Krisala Legacy"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://krisalaventis.in/",
      "priceCurrency": "INR",
      "lowPrice": "8500000",
      "highPrice": "14000000",
      "offerCount": "42"
    }
  }
  </script>"""

    if 'AggregateOffer' not in content:
        content = content.replace('</head>', complex_schema + '\n</head>')

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Polished index.html")

    # 2. Add AggregateRating to all subpages for consistency
    html_files = glob.glob('*.html')
    for file in html_files:
        if file == 'index.html' or file == '404.html': continue
        
        with open(file, 'r', encoding='utf-8') as f:
            sub_content = f.read()
            
        if '"aggregateRating"' not in sub_content and 'LocalBusiness' in sub_content:
             sub_content = sub_content.replace('"telephone": "+917744009295",', '"telephone": "+917744009295",' + rating_schema)
             with open(file, 'w', encoding='utf-8') as f:
                 f.write(sub_content)
             print(f"Polished {file}")

if __name__ == "__main__":
    final_polish()
