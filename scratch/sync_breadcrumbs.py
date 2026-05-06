import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]

# Clean Breadcrumb Component (Non-distorting)
def get_breadcrumb_html(filename):
    if filename == 'index.html':
        return "" # No breadcrumbs on home
    
    # Extract Title from filename
    title = filename.replace('krisala-aventis-tathawade-', '').replace('.html', '').replace('-', ' ').title()
    if not title or title == 'Index':
        title = "Overview"

    return f"""
  <!-- ======== SOVEREIGN BREADCRUMBS (Synchronized) ======== -->
  <div class="breadcrumb-wrapper">
    <div class="container">
      <nav class="breadcrumbs-nav" aria-label="Breadcrumb">
        <ol class="breadcrumb-list">
          <li><a href="/">Home</a></li>
          <li class="separator">/</li>
          <li class="current">{title}</li>
        </ol>
      </nav>
    </div>
  </div>
"""

# Styles for clean integration
breadcrumb_styles = """
/* --- Synchronized Breadcrumbs --- */
.breadcrumb-wrapper {
  padding-top: 140px; /* Space for floating navbar */
  padding-bottom: 20px;
  background: transparent;
  animation: fadeIn 1s ease both;
}
.breadcrumb-list {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 12px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.breadcrumb-list a {
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  transition: 0.3s;
}
.breadcrumb-list a:hover { color: var(--clr-gold); }
.breadcrumb-list .separator { color: rgba(255,255,255,0.2); }
.breadcrumb-list .current { color: var(--clr-gold); font-weight: 600; }

@media (max-width: 1024px) {
  .breadcrumb-wrapper { padding-top: 100px; padding-left: 20px; }
}
"""

def sync_page(filename):
    path = os.path.join(base_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Inject Styles into Head (if not exists)
    if "Synchronized Breadcrumbs" not in content:
        content = content.replace('</head>', f'<style>{breadcrumb_styles}</style>\n</head>', 1)

    # 2. Inject Breadcrumb HTML after </nav>
    bc_html = get_breadcrumb_html(filename)
    if bc_html and "SOVEREIGN BREADCRUMBS" not in content:
        # Replace the first occurrence of </nav> with </nav> + bc_html
        content = content.replace('</nav>', '</nav>\n' + bc_html, 1)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Breadcrumbs Synced: {filename}")

for filename in html_files:
    sync_page(filename)

print("Global Breadcrumb Synchronization Complete.")
