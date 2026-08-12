import os
import glob
import json
import requests
from google.oauth2 import service_account
from google.auth.transport.requests import Request

# KRISALA AVENTIS — PROGRAMMATIC INDEXING ENGINE
# This script uses the Google Indexing API to notify Google of updates in real-time.

def get_access_token(credentials_path):
    scopes = ["https://www.googleapis.com/auth/indexing"]
    credentials = service_account.Credentials.from_service_account_file(credentials_path, scopes=scopes)
    credentials.refresh(Request())
    return credentials.token

def notify_google(url, type="URL_UPDATED", token=None):
    endpoint = "https://indexing.googleapis.com/v3/urlNotifications:publish"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}"
    }
    body = {
        "url": url,
        "type": type
    }
    response = requests.post(endpoint, headers=headers, json=body)
    return response.json()

def indexing_supremacy():
    # PATH TO SERVICE ACCOUNT JSON (USER TO PROVIDE)
    creds_path = "/Users/vikasyewle/krisalaaventis/indexing-automation/service-account.json"
    
    if not os.path.exists(creds_path):
        print("❌ [Indexing Engine] Credentials not found. Please provide service-account.json in /indexing-automation/")
        return

    try:
        token = get_access_token(creds_path)
        print("✅ [Indexing Engine] OAuth2 Token Secured.")
        
        html_files = glob.glob('*.html')
        for file in html_files:
            if file == '404.html': continue
            
            url_path = file.replace('.html', '')
            if url_path == 'index': url_path = ''
            full_url = f"https://krisalaventis.in/{url_path}"
            
            response = notify_google(full_url, token=token)
            print(f"🚀 [Indexing Engine] Pushed {full_url}: {response}")
            
    except Exception as e:
        print(f"❌ [Indexing Engine] Error: {e}")

if __name__ == "__main__":
    indexing_supremacy()
