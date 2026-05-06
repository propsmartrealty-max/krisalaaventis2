import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]

# 1. Update style.css with Master Navigation Rules
master_nav_css = """
/* --- Master Navigation & Breadcrumb Reset --- */
.pill-navbar {
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  max-width: 1200px;
  background: rgba(5, 6, 8, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  z-index: 2000;
  padding: 10px 30px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.pill-navbar.scrolled { top: 15px; background: rgba(5, 6, 8, 0.98); }

.nav-container { display: grid; grid-template-columns: auto 1fr auto; align-items: center; width: 100%; gap: 20px; }
.nav-links { display: flex; gap: 30px; align-items: center; justify-content: center; }
.nav-links a { color: #fff; font-size: 0.85rem; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8; white-space: nowrap; transition: 0.3s; }
.nav-links a:hover { opacity: 1; color: var(--clr-gold); }

.breadcrumb-wrapper {
  padding-top: 150px; /* Strong separation from floating navbar */
  padding-bottom: 20px;
  background: transparent;
  z-index: 1000;
  position: relative;
}
.breadcrumb-list { display: flex; align-items: center; gap: 10px; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1.5px; }
.breadcrumb-list a { color: rgba(255,255,255,0.4); text-decoration: none; }
.breadcrumb-list .sep { color: rgba(255,255,255,0.15); }
.breadcrumb-list .active { color: var(--clr-gold); font-weight: 600; }

@media (max-width: 1024px) {
  .breadcrumb-wrapper { padding-top: 110px; padding-left: 20px; }
  .nav-container { display: flex; justify-content: space-between; }
}
"""

style_path = os.path.join(base_dir, "assets/css/style.css")
with open(style_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Remove old blocks and inject new one
css_content = re.sub(r'/\* --- Synchronized Breadcrumbs --- \*/.*?@media', '/* --- Master Navigation & Breadcrumb Reset --- */\n@media', css_content, flags=re.DOTALL)
if "Master Navigation & Breadcrumb Reset" not in css_content:
    css_content += master_nav_css

with open(style_path, 'w', encoding='utf-8') as f:
    f.write(css_content)

# 2. Sanitize all HTML files
def polish_page(filename):
    path = os.path.join(base_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove all <style> blocks that I might have injected
    content = re.sub(r'<style>/\* --- Synchronized Breadcrumbs --- \*/.*?</style>', '', content, flags=re.DOTALL)
    
    # Ensure ONE clean breadcrumb row
    content = re.sub(r'<!-- ======== SOVEREIGN BREADCRUMBS.*?<!-- ======== /SOVEREIGN BREADCRUMBS ======== -->', '', content, flags=re.DOTALL)
    
    if filename != 'index.html':
        title = filename.replace('krisala-aventis-tathawade-', '').replace('.html', '').replace('-', ' ').title()
        if not title or title == 'Index': title = "Overview"
        
        breadcrumb_html = f"""
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
        # Inject after </nav> of main navbar
        content = re.sub(r'(</nav>)', r'\1\n' + breadcrumb_html, content, count=1)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Polished: {filename}")

for filename in html_files:
    polish_page(filename)

print("Final Master Polish Complete.")
