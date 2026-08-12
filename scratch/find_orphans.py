import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]

# Map of file -> list of links it contains
link_map = {}
for file in html_files:
    with open(os.path.join(base_dir, file), 'r', encoding='utf-8') as f:
        content = f.read()
        # Find all href="/filename" or href="filename.html"
        links = re.findall(r'href=["\'](?:/)?([a-zA-Z0-9_-]+(?:\.html)?)["\']', content)
        # Normalize: remove .html if present
        links = [l.replace('.html', '') for l in links if l not in ['#', 'javascript:void(0)', '', '/']]
        link_map[file] = set(links)

# Gather all unique internal links that are referenced anywhere
all_referenced = set()
for links in link_map.values():
    all_referenced.update(links)

# Check which files are NOT referenced by any other file (Orphans)
print("=== ORPHAN PAGE AUDIT ===")
orphans = []
for file in html_files:
    base_name = file.replace('.html', '')
    if base_name == 'index': continue
    if base_name not in all_referenced:
        orphans.append(file)

if not orphans:
    print("✅ No orphan pages found. All files are linked internally.")
else:
    print(f"❌ Found {len(orphans)} ORPHAN pages (not linked from anywhere):")
    for o in orphans:
        print(f"  - {o}")
