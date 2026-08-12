import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
gmb_link = "https://maps.app.goo.gl/TathawadeLocation"
address_text = "Beside Shakai Circle, Mumbai-Pune-Bangalore Highway, Tathawade, Pune 411033"

all_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]

local_business_schema = f"""
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Krisala Aventis Tathawade Official Launch",
    "image": "https://krisalaventis.in/assets/images/hero.png",
    "@id": "https://krisalaventis.in/#localbusiness",
    "url": "https://krisalaventis.in/",
    "telephone": "+917744009295",
    "priceRange": "₹89L - ₹1.40Cr",
    "address": {{
      "@type": "PostalAddress",
      "streetAddress": "Beside Shakai, Mumbai-Pune Highway",
      "addressLocality": "Tathawade",
      "addressRegion": "Maharashtra",
      "postalCode": "411033",
      "addressCountry": "IN"
    }},
    "geo": {{
      "@type": "GeoCoordinates",
      "latitude": 18.6298,
      "longitude": 73.756
    }},
    "hasMap": "{gmb_link}",
    "openingHoursSpecification": {{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "19:00"
    }}
  }}
  </script>
"""

directions_html = f"""
        <div class="footer-links">
          <h5>Official Location</h5>
          <p style="font-size: 0.8rem; opacity: 0.7; margin-bottom: 10px;">{address_text}</p>
          <a title="Krisala Aventis — Get Directions on Google Maps" href="{gmb_link}" target="_blank" rel="noopener noreferrer" style="color: var(--clr-gold); font-weight: 600;">📍 Get Directions on Google Maps →</a>
        </div>
"""

for filename in all_files:
    path = os.path.join(base_dir, filename)
    with open(path, 'r') as f:
        content = f.read()
    
    # 1. Inject/Update LocalBusiness Schema in <head>
    if '<script type="application/ld+json">' in content:
        # Check if #localbusiness already exists to avoid duplicates
        if '"@id": "https://krisalaventis.in/#localbusiness"' not in content:
             content = content.replace('</head>', local_business_schema + '\n</head>')
    
    # 2. Inject Directions into Footer
    # We look for footer-contact or footer-links and prepend/append
    if 'footer-contact' in content and '📍 Get Directions' not in content:
        content = content.replace('<div class="footer-contact">', directions_html + '\n        <div class="footer-contact">')

    with open(path, 'w') as f:
        f.write(content)

print(f"GMB Signals Injected into {len(all_files)} files.")
