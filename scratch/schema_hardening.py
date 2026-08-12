import os
import re
import json

base_dir = "/Users/vikasyewle/krisalaaventis"

def extract_faqs(html_content):
    faqs = []
    # Pattern to match details tag and extract summary and p
    pattern = r'<details[^>]*faq-item[^>]*>\s*<summary>(.*?)</summary>\s*<p>(.*?)</p>\s*</details>'
    matches = re.findall(pattern, html_content, flags=re.DOTALL | re.IGNORECASE)
    for q, a in matches:
        # Clean HTML tags from question and answer
        clean_q = re.sub(r'<[^>]+>', '', q).strip()
        clean_a = re.sub(r'<[^>]+>', '', a).strip()
        if clean_q and clean_a:
            faqs.append({"question": clean_q, "answer": clean_a})
    return faqs

def build_faq_schema(faqs):
    if not faqs:
        return ""
    
    schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    }
    for faq in faqs:
        schema["mainEntity"].append({
            "@type": "Question",
            "name": faq["question"],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq["answer"]
            }
        })
    
    return f'\n  <script type="application/ld+json">\n  {json.dumps(schema, indent=4)}\n  </script>\n'

def build_breadcrumb_schema(filename):
    if filename == 'index.html':
        return "" # No breadcrumb for home page usually, or just root.
        
    slug = filename.replace('.html', '')
    title = slug.replace('-', ' ').title()
    
    schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://krisalaventis.in/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": f"https://krisalaventis.in/{slug}"
            }
        ]
    }
    
    return f'\n  <script type="application/ld+json">\n  {json.dumps(schema, indent=4)}\n  </script>\n'

def harden_schema():
    html_files = [f for f in os.listdir(base_dir) if f.endswith('.html')]
    
    for filename in html_files:
        path = os.path.join(base_dir, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        faqs = extract_faqs(content)
        faq_schema_script = build_faq_schema(faqs)
        breadcrumb_schema_script = build_breadcrumb_schema(filename)

        # Remove existing FAQPage and BreadcrumbList if they exist so we don't duplicate
        # We'll use a regex to carefully strip out old schemas of these types
        content = re.sub(r'<script type="application/ld\+json">\s*{\s*"@context":\s*"https://schema.org",\s*"@type":\s*"FAQPage".*?</script>', '', content, flags=re.DOTALL)
        content = re.sub(r'<script type="application/ld\+json">\s*{\s*"@context":\s*"https://schema.org",\s*"@type":\s*"BreadcrumbList".*?</script>', '', content, flags=re.DOTALL)

        # Find the closing </head> to inject our new schemas
        schemas_to_inject = faq_schema_script + breadcrumb_schema_script
        
        if schemas_to_inject:
            content = content.replace('</head>', schemas_to_inject + '</head>')
            
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
                
    print("✅ Schema Injection (FAQ & Breadcrumb) Complete.")

if __name__ == "__main__":
    harden_schema()
