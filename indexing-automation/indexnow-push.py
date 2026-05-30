import os
import json
import urllib.request
import urllib.error

base_dir = "/Users/vikasyewle/krisalaaventis"
base_url = "https://krisalaventis.in"
indexnow_key = "2f5a8b79d63c4e10b2f18394a7d65b2f"

def push_to_indexnow():
    # Gather all HTML files (excluding 404, privacy, terms)
    html_files = [f for f in os.listdir(base_dir) if f.endswith('.html') and f not in ['404.html', 'privacy-policy.html', 'terms-conditions.html']]
    
    url_list = []
    for filename in html_files:
        if filename == 'index.html':
            url_list.append(f"{base_url}/")
        else:
            url_list.append(f"{base_url}/{filename.replace('.html', '')}")

    payload = {
        "host": "krisalaventis.in",
        "key": indexnow_key,
        "keyLocation": f"https://krisalaventis.in/{indexnow_key}.txt",
        "urlList": url_list
    }

    req = urllib.request.Request(
        'https://api.indexnow.org/indexnow',
        data=json.dumps(payload).encode('utf-8'),
        headers={'Content-Type': 'application/json; charset=utf-8'}
    )

    import ssl
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    try:
        response = urllib.request.urlopen(req, context=ctx)
        if response.status == 200 or response.status == 202:
            print(f"✅ IndexNow Protocol Execution SUCCESS.")
            print(f"🚀 Blasted {len(url_list)} URLs to Bing, Yahoo, DuckDuckGo, and Yandex.")
        else:
            print(f"⚠️ IndexNow returned status code {response.status}")
    except urllib.error.HTTPError as e:
        print(f"❌ IndexNow API Error: {e.code} - {e.reason}")
        print(e.read().decode('utf-8'))
    except Exception as e:
        print(f"❌ Unexpected Error: {str(e)}")

if __name__ == "__main__":
    push_to_indexnow()
