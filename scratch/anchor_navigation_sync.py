import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]

# The Master Anchor Mapping
anchor_map = {
    'Overview': '#overview',
    'Legacy': '#legacy',
    'Master Plan': '#masterlayout',
    'Floor Plans': '#floorplans',
    'Amenities': '#amenities',
    'Location': '#location',
    'Insight': '#blog'
}

def sync_anchors(filename):
    path = os.path.join(base_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Determine prefix (if index.html, no prefix. If others, need /#)
    is_home = filename == 'index.html'
    prefix = "" if is_home else "/"

    # 1. Update the mainNav links
    # Matches: <a href="/...">Overview</a>
    for label, anchor in anchor_map.items():
        # Match the link with the specific label
        pattern = rf'href="[^"]+"(>{label}</a>)'
        replacement = f'href="{prefix}{anchor}"\\1'
        content = re.sub(pattern, replacement, content)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Anchors Synced: {filename}")

for filename in html_files:
    sync_anchors(filename)

print("Global Anchor Navigation Synchronization Complete.")
