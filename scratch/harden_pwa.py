import os

silos = [
    "index.html",
    "krisala-aventis-tathawade-2-bhk-flats.html",
    "krisala-aventis-tathawade-3-bhk-luxury-apartments.html",
    "krisala-aventis-tathawade-flats-near-hinjewadi.html",
    "krisala-aventis-tathawade-construction-status.html",
    "tathawade-real-estate-investment-roi.html",
    "lifestyle-amenities-shopping-tathawade.html",
    "educational-hubs-near-krisala-aventis.html",
    "tathawade-connectivity-it-hubs.html",
    "krisala-legacy-pune-track-record-completed-projects.html",
    "aluform-technology-construction-quality-krisala-aventis.html",
    "public-transport-connectivity-tathawade-pune.html",
    "tathawade-real-estate-glossary.html",
    "tathawade-market-growth-calculator.html"
]

base_dir = "/Users/vikasyewle/krisalaaventis"

pwa_tags = """
  <!-- PWA & Mobile Web App Meta Tags -->
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#caa350">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="Krisala Aventis">
  <link rel="apple-touch-icon" href="/favicon.png">
  
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(reg => console.log('Sovereign Service Worker Active:', reg.scope))
          .catch(err => console.warn('Service Worker Failed:', err));
      });
    }
  </script>
"""

def inject_pwa(filename):
    path = os.path.join(base_dir, filename)
    if not os.path.exists(path): return

    with open(path, 'r') as f:
        content = f.read()

    if 'manifest.json' not in content:
        content = content.replace('</head>', pwa_tags + '</head>')
        with open(path, 'w') as f:
            f.write(content)
        print(f"PWA Hardened: {filename}")

for silo in silos:
    inject_pwa(silo)
