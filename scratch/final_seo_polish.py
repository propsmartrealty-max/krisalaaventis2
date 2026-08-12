import os
import glob
import re

def final_polish():
    html_files = glob.glob('*.html')
    for file in html_files:
        if file == '404.html':
            continue

        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. Title Hardening: Inject "Official Site" and "Tathawade Pune"
        if file == 'index.html':
            new_title = "Krisala Aventis Tathawade Official Site | 2.25 & 3.25 BHK Luxury Flats Pune"
        else:
            current_title_match = re.search(r'<title>(.*?)</title>', content)
            if current_title_match:
                title = current_title_match.group(1).split('|')[0].strip()
                if "Official" not in title:
                    new_title = f"{title} | Official Krisala Aventis Tathawade"
                else:
                    new_title = current_title_match.group(1)
            else:
                new_title = "Krisala Aventis Tathawade | Luxury Real Estate Pune"
        
        content = re.sub(r'<title>.*?</title>', f'<title>{new_title}</title>', content)

        # 2. Meta Description Hardening (ensure ~160 chars and high intent)
        desc_match = re.search(r'<meta name="description" content="(.*?)">', content)
        if desc_match:
            desc = desc_match.group(1)
            if "Official Site" not in desc:
                new_desc = f"Official Site: {desc}"
                if len(new_desc) < 140:
                    new_desc += " Get the latest Krisala Aventis price list, floor plans, and brochure PDF directly from the developer legacy portal."
                content = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="{new_desc[:160]}">', content)

        # 3. Heading Hardening: Ensure H1 has "Krisala Aventis Tathawade"
        h1_match = re.search(r'<h1>(.*?)</h1>', content, re.DOTALL)
        if h1_match:
            h1_text = h1_match.group(1)
            if "Krisala Aventis" not in h1_text:
                 # Fixed: Use capturing group in the search pattern
                 content = re.sub(r'<h1>(.*?)</h1>', r'<h1>Krisala Aventis Tathawade — \1</h1>', content, flags=re.DOTALL)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Polished {file}")

if __name__ == "__main__":
    final_polish()
