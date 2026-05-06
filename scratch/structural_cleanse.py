import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]

def deep_cleanse(filename):
    path = os.path.join(base_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Clean up Navbar Links (Distilled)
    # Remove all "Krisala Aventis" or "Krisala" prefixes from navbar <a> tags
    # First, find the mainNav content
    nav_match = re.search(r'<nav id="mainNav".*?</nav>', content, flags=re.DOTALL)
    if not nav_match:
        nav_match = re.search(r'<nav class="pill-navbar".*?</nav>', content, flags=re.DOTALL)
    
    if nav_match:
        nav_content = nav_match.group(0)
        # Simplify common links
        nav_content = nav_content.replace('Krisala Aventis Overview', 'Overview')
        nav_content = nav_content.replace('Krisala Aventis Floor Plans', 'Floor Plans')
        nav_content = nav_content.replace('Krisala Aventis Amenities', 'Amenities')
        nav_content = nav_content.replace('Krisala Aventis Location', 'Location')
        nav_content = nav_content.replace('Krisala Aventis Insight', 'Insight')
        nav_content = nav_content.replace('Krisala Aventis Legacy', 'Legacy')
        nav_content = nav_content.replace('Krisala Aventis Master Plan', 'Master Plan')
        nav_content = nav_content.replace('Krisala Legacy', 'Legacy')
        nav_content = nav_content.replace('Home Home', 'Home')
        
        # Replace the nav in the original content
        content = content.replace(nav_match.group(0), nav_content)

    # 2. Exorcise ALL Breadcrumb Variants (Deep Cleanse)
    # Remove any div/nav with classes like 'breadcrumb', 'breadcrumbs', 'breadcrumbs-nav', 'breadcrumb-wrapper'
    content = re.sub(r'<!-- ======== SOVEREIGN BREADCRUMBS.*?<!-- ======== /SOVEREIGN BREADCRUMBS ======== -->', '', content, flags=re.DOTALL)
    content = re.sub(r'<div class="breadcrumb-wrapper".*?</div>\s*</div>\s*</div>', '', content, flags=re.DOTALL) # Attempt to catch nested ones
    content = re.sub(r'<div class="breadcrumb-wrapper".*?</div>\s*</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'<div class="breadcrumb-container".*?</div>\s*</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'<div class="breadcrumbs".*?</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'<nav class="breadcrumbs".*?</nav>', '', content, flags=re.DOTALL)
    content = re.sub(r'<nav class="breadcrumbs-nav".*?</nav>', '', content, flags=re.DOTALL)
    
    # 3. Standardize Single Breadcrumb Row (Fresh Injection)
    if filename != 'index.html':
        title = filename.replace('krisala-aventis-tathawade-', '').replace('.html', '').replace('-', ' ').title()
        if not title or title == 'Index': title = "Overview"
        
        fresh_breadcrumb = f"""
  <!-- ======== SOVEREIGN BREADCRUMBS (Synchronized) ======== -->
  <div class="breadcrumb-wrapper">
    <div class="container">
      <nav class="breadcrumb-list" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span class="sep">/</span>
        <span class="active">{title}</span>
      </nav>
    </div>
  </div>
  <!-- ======== /SOVEREIGN BREADCRUMBS ======== -->
"""
        # Inject after the closing </nav> of the main navbar
        content = re.sub(r'(</nav>)', r'\1\n' + fresh_breadcrumb, content, count=1)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Deep Cleanse Applied: {filename}")

for filename in html_files:
    deep_cleanse(filename)

print("Global Structural Cleanse Complete.")
