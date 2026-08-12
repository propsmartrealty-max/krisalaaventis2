import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
index_path = os.path.join(base_dir, "index.html")

def inject_homepage_keywords():
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update H1
    # Current: <h1>KRISALA AVENTIS TATHAWADE — <span class="gold">KRISALA NEW LAUNCH</span></h1>
    new_h1 = '<h1>Krisala Aventis Tathawade — <span class="gold">Premium 2.25 & 3.25 BHK New Launch</span></h1>'
    content = re.sub(r'<h1>.*?</h1>', new_h1, content, count=1)

    # 2. Inject LSI into Overview Paragraphs (if "located in Pune" exists)
    # Searching for general text to enhance
    content = content.replace("located in Pune.", "located in Tathawade, near Hinjewadi IT Park.")
    content = content.replace("Welcome to Krisala Aventis", "Welcome to Krisala Aventis Tathawade")
    
    # 3. Enhance Image ALTs (already mostly enhanced in earlier passes, but we can ensure "Krisala Aventis Tathawade" prefix)
    # Let's target specific images if they lack "Tathawade"
    
    # 4. Enhance Footer Keyword Block
    # Current: Beside Shakai Circle, Mumbai-Pune-Bangalore Highway, Tathawade, Pune 411033
    new_footer_addr = "Krisala Aventis Sales Experience Center, Beside Shakai Circle, Mumbai-Pune-Bangalore Highway, Tathawade, Pune 411033"
    content = content.replace("Beside Shakai Circle, Mumbai-Pune-Bangalore Highway", new_footer_addr)
    
    # 5. Fix some H2s globally on homepage
    content = content.replace('<h2>Amenities</h2>', '<h2>Krisala Aventis Tathawade <span class="gold">Amenities</span></h2>')
    content = content.replace('<h2>Master <span class="gold">Layout</span></h2>', '<h2>Krisala Aventis <span class="gold">Master Layout</span></h2>')

    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✅ Homepage Keywords Enhanced.")

def inject_silo_keywords():
    html_files = [f for f in os.listdir(base_dir) if f.endswith('.html') and f != 'index.html']
    
    for filename in html_files:
        path = os.path.join(base_dir, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Update H2 tags structurally
        # Replace generic "<h2>Key Features</h2>" with "<h2>Krisala Aventis Tathawade - Key Features</h2>"
        content = content.replace('<h2>Key Features</h2>', '<h2>Krisala Aventis Tathawade — Key Features</h2>')
        content = content.replace('<h2>Overview</h2>', '<h2>Krisala Aventis Project Overview</h2>')
        
        # Update Cross-linking anchors
        # Currently: <a ...>3 BHK Luxury Apartments →</a>
        # New: <a ...>Explore 3 BHK Luxury Apartments in Tathawade →</a>
        content = content.replace('>3 BHK Luxury Apartments →</a>', '>Explore 3 BHK Luxury Apartments in Tathawade →</a>')
        content = content.replace('>Price List →</a>', '>View Krisala Aventis Price List →</a>')
        content = content.replace('>Cost Sheet Estimator →</a>', '>Krisala Aventis Cost Sheet Estimator →</a>')
        content = content.replace('>Brochure Download →</a>', '>Download Krisala Aventis Brochure →</a>')
        content = content.replace('>2 BHK Flats →</a>', '>Explore 2 BHK Flats in Tathawade →</a>')

        # Inject LSI into footer of silos
        new_footer_addr = "Krisala Aventis Sales Experience Center, Beside Shakai Circle, Mumbai-Pune-Bangalore Highway, Tathawade, Pune 411033"
        content = content.replace("Beside Shakai Circle, Mumbai-Pune-Bangalore Highway, Tathawade, Pune 411033", new_footer_addr)

        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
            
    print(f"✅ {len(html_files)} Silos Keyword-Enhanced.")

if __name__ == "__main__":
    inject_homepage_keywords()
    inject_silo_keywords()
