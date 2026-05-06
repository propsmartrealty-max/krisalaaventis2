import os
import re

base_dir = "/Users/vikasyewle/krisalaaventis"
html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]

# The Link Activator Snippet
link_activator_js = """
  <script>
    // --- SOVEREIGN LINK ACTIVATOR (Environment Proxy) ---
    (function() {
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      if (isLocal) {
        console.log('[Sovereign] Local Environment Detected — Activating Extension Proxy');
        document.addEventListener('DOMContentLoaded', () => {
          document.querySelectorAll('a[href^="/"]').forEach(link => {
            const href = link.getAttribute('href');
            // If it's an internal link and doesn't have an extension/hash
            if (href.startsWith('/') && !href.includes('.') && !href.includes('#') && href !== '/') {
              link.setAttribute('href', href + '.html');
            }
          });
        });
      }
    })();
  </script>
"""

def inject_link_activator(filename):
    path = os.path.join(base_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    if "SOVEREIGN LINK ACTIVATOR" not in content:
        # Inject right after the cache kill switch in <head>
        content = content.replace('</script>', '</script>\n' + link_activator_js, 1)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Link Activator Injected: {filename}")

for filename in html_files:
    inject_link_activator(filename)

print("Global Link Activation Proxy Deployed.")
