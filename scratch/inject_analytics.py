import os
import sys
import re

base_dir = "/Users/vikasyewle/krisalaaventis"

def inject_ga4(measurement_id):
    if not measurement_id.startswith('G-'):
        print("❌ Error: Invalid GA4 Measurement ID. It must start with 'G-'. Example: G-12345XYZ")
        sys.exit(1)

    ga4_script = f"""
  <!-- Google Analytics 4 (GA4) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id={measurement_id}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){{dataLayer.push(arguments);}}
    gtag('js', new Date());
    gtag('config', '{measurement_id}');
  </script>
"""

    html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]
    files_updated = 0

    for filename in html_files:
        path = os.path.join(base_dir, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if GA4 is already injected
        if "<!-- Google Analytics 4 (GA4) -->" in content:
            # Replace existing GA4 snippet with new ID
            pattern = r'<!-- Google Analytics 4 \(GA4\) -->.*?gtag\(\'config\', \'G-[A-Z0-9]+\'\);\s*</script>'
            content = re.sub(pattern, ga4_script.strip(), content, flags=re.DOTALL)
        else:
            # Inject right before </head>
            content = content.replace('</head>', f'{ga4_script}</head>')
            
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        files_updated += 1

    print(f"✅ GA4 Tracking Script (ID: {measurement_id}) successfully injected across {files_updated} files!")
    print("🚀 Run 'git add . && git commit -m \"analytics: Injected GA4\" && git push origin main' to deploy.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 inject_analytics.py <YOUR-G-ID>")
        print("Example: python3 inject_analytics.py G-1A2B3C4D5E")
    else:
        inject_ga4(sys.argv[1])
