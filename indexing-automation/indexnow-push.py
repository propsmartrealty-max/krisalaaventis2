import os
import re
import json
import urllib.request
import urllib.error
import ssl

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
base_url = "https://krisalaventis.in"
indexnow_key = "krisalaaventis2026indexnow"
key_location = f"{base_url}/{indexnow_key}.txt"

def get_all_urls():
    urls = set()
    urls.add(f"{base_url}/")

    # 1. Extract from Sitemaps if available
    sitemaps = [
        os.path.join(base_dir, "public", "sitemap-core.xml"),
        os.path.join(base_dir, "public", "sitemap-nri.xml"),
        os.path.join(base_dir, "public", "sitemap-pune.xml")
    ]
    for sm in sitemaps:
        if os.path.exists(sm):
            try:
                with open(sm, "r", encoding="utf-8") as f:
                    content = f.read()
                    matches = re.findall(r"<loc>(.*?)</loc>", content)
                    for m in matches:
                        m_clean = m.strip()
                        if not m_clean.endswith(".xml"):
                            urls.add(m_clean)
            except Exception as e:
                print(f"⚠️ Error reading sitemap {sm}: {e}")

    # 2. Fallback / supplement from JSON datasets
    data_files = [
        "data.json",
        "data/global-nri-seo.json",
        "data/krisala-domination-seo.json",
        "data/pune-market-keywords.json"
    ]
    for rel_path in data_files:
        full_path = os.path.join(base_dir, rel_path)
        if os.path.exists(full_path):
            try:
                with open(full_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    if isinstance(data, list):
                        for item in data:
                            if isinstance(item, dict):
                                if item.get("folder") and item.get("url_slug"):
                                    folder = item["folder"].strip("/")
                                    slug = item["url_slug"].replace(".html", "").strip("/")
                                    urls.add(f"{base_url}/{folder}/{slug}")
                                elif item.get("slug"):
                                    slug = item["slug"].strip("/")
                                    urls.add(f"{base_url}/{slug}")
            except Exception as e:
                print(f"⚠️ Error reading {rel_path}: {e}")

    return sorted(list(urls))

def push_batch(batch_urls, batch_idx, total_batches):
    payload = {
        "host": "krisalaventis.in",
        "key": indexnow_key,
        "keyLocation": key_location,
        "urlList": batch_urls
    }

    req = urllib.request.Request(
        "https://api.indexnow.org/indexnow",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json; charset=utf-8"}
    )

    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    try:
        response = urllib.request.urlopen(req, context=ctx, timeout=30)
        if response.status in (200, 202):
            print(f"✅ Batch {batch_idx}/{total_batches}: Blasted {len(batch_urls)} URLs to IndexNow (Status: {response.status}).")
            return True
        else:
            print(f"⚠️ Batch {batch_idx}/{total_batches}: IndexNow returned status code {response.status}")
            return False
    except urllib.error.HTTPError as e:
        print(f"❌ Batch {batch_idx}/{total_batches} API Error: {e.code} - {e.reason}")
        try:
            print(e.read().decode("utf-8"))
        except Exception:
            pass
        return False
    except Exception as e:
        print(f"❌ Batch {batch_idx}/{total_batches} Unexpected Error: {str(e)}")
        return False

def push_to_indexnow():
    all_urls = get_all_urls()
    total_urls = len(all_urls)
    print(f"\n🚀 Krisala Aventis IndexNow Sweep Initiated")
    print(f"Total URLs to Submit: {total_urls}")
    print(f"Using Key: {indexnow_key}")
    print(f"Key Location: {key_location}\n")

    if total_urls == 0:
        print("❌ No URLs found to submit.")
        return

    # Chunk into batches of 2000 (IndexNow accepts up to 10,000 per request)
    batch_size = 2000
    batches = [all_urls[i:i + batch_size] for i in range(0, total_urls, batch_size)]
    total_batches = len(batches)

    success_count = 0
    for idx, batch in enumerate(batches, 1):
        if push_batch(batch, idx, total_batches):
            success_count += len(batch)

    print(f"\n✨ IndexNow Sweep Completed: Successfully submitted {success_count}/{total_urls} URLs to Bing, Yahoo, DuckDuckGo, and Yandex.\n")

if __name__ == "__main__":
    push_to_indexnow()
