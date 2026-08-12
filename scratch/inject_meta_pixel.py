import os
import sys
import re

base_dir = "/Users/vikasyewle/krisalaaventis"

def inject_meta_pixel(pixel_id):
    if not pixel_id.isdigit():
        print("❌ Error: Invalid Meta Pixel ID. It must be numeric. Example: 1234567890")
        sys.exit(1)

    pixel_script = f"""
  <!-- Meta Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {{if(f.fbq)return;n=f.fbq=function(){{n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)}};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '{pixel_id}');
    fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id={pixel_id}&ev=PageView&noscript=1"
  /></noscript>
"""

    html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]
    files_updated = 0

    for filename in html_files:
        path = os.path.join(base_dir, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if Pixel is already injected
        if "<!-- Meta Pixel Code -->" in content:
            # Replace existing Pixel snippet
            pattern = r'<!-- Meta Pixel Code -->.*?</noscript>'
            content = re.sub(pattern, pixel_script.strip(), content, flags=re.DOTALL)
        else:
            # Inject right before </head>
            content = content.replace('</head>', f'{pixel_script}</head>')
            
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        files_updated += 1

    print(f"✅ Meta Pixel (ID: {pixel_id}) successfully injected across {files_updated} files!")
    print("🚀 Run 'git add . && git commit -m \"analytics: Injected Meta Pixel\" && git push origin main' to deploy.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 inject_meta_pixel.py <YOUR-PIXEL-ID>")
        print("Example: python3 inject_meta_pixel.py 123456789012345")
    else:
        inject_meta_pixel(sys.argv[1])
