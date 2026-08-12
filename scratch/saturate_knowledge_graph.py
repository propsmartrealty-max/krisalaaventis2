import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
same_as_links = [
    "https://maharera.mahaonline.gov.in/Project?projectReraNo=P52100080336",
    "https://en.wikipedia.org/wiki/Tathawade",
    "https://en.wikipedia.org/wiki/Hinjewadi",
    "https://www.facebook.com/KrisalaLegacy",
    "https://www.instagram.com/krisala_legacy",
    "https://www.linkedin.com/company/krisala-legacy",
    "https://www.wikidata.org/wiki/Q116447814",
    "https://www.wikidata.org/wiki/Q11062"
]

all_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]

for filename in all_files:
    path = os.path.join(base_dir, filename)
    with open(path, 'r') as f:
        content = f.read()
    
    # Identify Organization or RealEstateAgent schema and inject SameAs
    # We look for "sameAs": [...] and replace it or add it
    if '"@type": "Organization"' in content or '"@type": "RealEstateAgent"' in content:
        # If sameAs already exists, we replace the list
        if '"sameAs": [' in content:
            links_str = '",\n      "'.join(same_as_links)
            pattern = r'"sameAs":\s*\[[^\]]+\]'
            replacement = f'"sameAs": [\n      "{links_str}"\n    ]'
            content = re.sub(pattern, replacement, content)
        else:
            # If it doesn't exist, we add it after the name
            links_str = '",\n      "'.join(same_as_links)
            insertion = f',\n    "sameAs": [\n      "{links_str}"\n    ]'
            content = content.replace('"name": "Krisala Legacy"', f'"name": "Krisala Legacy"{insertion}')
            content = content.replace('"name": "Krisala Aventis Tathawade"', f'"name": "Krisala Aventis Tathawade"{insertion}')

    with open(path, 'w') as f:
        f.write(content)

print(f"Knowledge Graph Saturated in {len(all_files)} files.")
