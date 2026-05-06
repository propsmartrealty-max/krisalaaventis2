import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]

def realign_page(filename):
    path = os.path.join(base_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Strip redundant "Krisala Aventis" from Navbar Links
    # Matches: <a href="...">Krisala Aventis Overview</a> -> <a href="...">Overview</a>
    content = re.sub(r'(<nav.*?>.*?)Krisala Aventis (Overview|Floor Plans|Amenities|Location|Insight|Legacy|Master Plan)(.*?<\/nav>)', r'\1\2\3', content, flags=re.DOTALL)
    
    # Second pass for remaining links in the container
    content = content.replace('Krisala Aventis Overview', 'Overview')
    content = content.replace('Krisala Aventis Legacy', 'Legacy')
    content = content.replace('Krisala Aventis Master Plan', 'Master Plan')
    content = content.replace('Krisala Aventis Floor Plans', 'Floor Plans')
    content = content.replace('Krisala Aventis Amenities', 'Amenities')
    content = content.replace('Krisala Aventis Location', 'Location')
    content = content.replace('Krisala Aventis Tathawade Insight', 'Insight')

    # 2. Remove duplicate breadcrumb rows
    # If there's an existing <div class="breadcrumbs">... before my new Sovereign breadcrumbs, remove it.
    # Matches old breadcrumb patterns
    content = re.sub(r'<div class="breadcrumbs".*?</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'<nav class="breadcrumb-nav".*?</nav>', '', content, flags=re.DOTALL)

    # 3. Fix Navbar Alignment Styles (Force Balance)
    realignment_styles = """
/* --- Structural Realignment --- */
.nav-container {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  width: 100%;
}
.nav-links {
  justify-self: center;
  display: flex;
  gap: 20px;
}
@media (max-width: 1024px) {
  .nav-container { display: flex; justify-content: space-between; }
}
"""
    if "Structural Realignment" not in content:
        content = content.replace('</style>', realignment_styles + '\n</style>', 1)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Realignment Applied: {filename}")

for filename in html_files:
    realign_page(filename)

print("Global Structural Realignment Complete.")
