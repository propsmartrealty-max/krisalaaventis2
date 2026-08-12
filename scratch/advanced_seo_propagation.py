import os
import glob
import re

def advanced_propagate():
    html_files = glob.glob('*.html')
    
    # 1. Preloads & Fetchpriority
    preloads = """
  <!-- Preloads & Fonts -->
  <link rel="preload" as="image" href="assets/images/hero.png" type="image/png" fetchpriority="high">
  <link rel="preload" as="style" href="assets/css/style.css">
  <link rel="preload" as="script" href="assets/js/script.js">"""

    # 2. Speakable Schema (Voice Search)
    speakable_schema = """
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "xpath": [
        "/html/head/title",
        "/html/head/meta[@name='description']/@content"
      ]
    }
  }
  </script>"""

    # 3. ImageObject Schema (High-Authority Imagery)
    image_schema = """
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://krisalaventis.in/assets/images/hero.png",
    "license": "https://krisalaventis.in/terms-conditions",
    "creditText": "Krisala Legacy",
    "creator": {
      "@type": "Organization",
      "name": "Krisala Legacy"
    },
    "copyrightNotice": "Krisala Legacy 2026"
  }
  </script>"""

    for file in html_files:
        if file == '404.html':
            continue

        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Update Preloads
        if 'fetchpriority="high"' not in content:
            # Replace old preload block if exists, or insert after charset
            if '<!-- Preloads & Fonts -->' in content:
                 content = re.sub(r'<!-- Preloads & Fonts -->.*?<link rel="preconnect"', preloads + '\n  <link rel="preconnect"', content, flags=re.DOTALL)
            else:
                 content = content.replace('<meta name="viewport"', preloads + '\n  <meta name="viewport"')

        # Inject Advanced Schemas
        if 'SpeakableSpecification' not in content:
            content = content.replace('</head>', speakable_schema + '\n' + image_schema + '\n</head>')

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Advanced Hardened {file}")

if __name__ == "__main__":
    advanced_propagate()
