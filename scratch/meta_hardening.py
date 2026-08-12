import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"

def harden_meta():
    html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]
    
    for filename in html_files:
        path = os.path.join(base_dir, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        topic = filename.replace('krisala-aventis-tathawade-', '').replace('.html', '').replace('-', ' ').title()
        if filename == 'index.html':
            topic = "Official Launch Phase"
            
        # Detailed & Lengthy Meta Description (targeting ~160 chars)
        new_desc = f"Official Krisala Aventis Tathawade: Explore {topic}. Premium 2.25 & 3.25 BHK smart study flats near Hinjewadi IT Park. Get official price list, floor plans, and site visit passes now."
        
        # Ensure it's not too long or too short
        if len(new_desc) > 165:
            new_desc = new_desc[:162] + "..."
            
        # Regex to find meta description
        content = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{new_desc}">', content)
        
        # Also update OG description
        content = re.sub(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{new_desc}">', content)
        
        # Update Title to be more detailed if needed
        # We already have good titles, but let's ensure "Krisala Aventis Tathawade" is prominent
        if "Krisala Aventis" not in content[:content.find('</title>')]:
             content = re.sub(r'<title>(.*?)</title>', r'<title>Krisala Aventis Tathawade | \1</title>', content)

        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Meta Hardened: {filename}")

if __name__ == "__main__":
    harden_meta()
