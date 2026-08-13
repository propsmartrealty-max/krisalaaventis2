const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Reconstruct the master data
const coreData = require('../data.json');
const nriData = require('../data/global-nri-seo.json');
const dominationData = require('../data/krisala-domination-seo.json');

const BASE_URL = 'https://krisalaventis.in';

async function generateUrls() {
  const urls = [];
  
  // 1. Home Page
  urls.push(BASE_URL);

  // 2. Core SEO Pages
  coreData.forEach(page => {
    urls.push(`${BASE_URL}/${page.folder}/${page.url_slug.replace('.html', '')}`);
  });

  // 3. NRI SEO Pages
  nriData.forEach(page => {
    urls.push(`${BASE_URL}/${page.folder}/${page.url_slug.replace('.html', '')}`);
  });

  // 4. Domination SEO Pages
  dominationData.forEach(page => {
    urls.push(`${BASE_URL}/${page.folder}/${page.url_slug.replace('.html', '')}`);
  });

  return urls;
}

async function runIndexer() {
  console.log('[Google Indexing API] Starting batch indexer...');
  
  if (!process.env.GCP_SA_KEY) {
    console.error('❌ Error: GCP_SA_KEY environment variable is missing.');
    process.exit(1);
  }

  // Parse Service Account Key from env
  let credentials;
  try {
    credentials = JSON.parse(process.env.GCP_SA_KEY);
  } catch (err) {
    console.error('❌ Error: GCP_SA_KEY is not a valid JSON string.', err);
    process.exit(1);
  }

  // Authenticate
  const jwtClient = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ['https://www.googleapis.com/auth/indexing'],
    null
  );

  console.log('Authenticating with Google Cloud...');
  await jwtClient.authorize();
  console.log('✅ Authenticated successfully.');

  const urls = await generateUrls();
  console.log(`Total URLs to process: ${urls.length}`);

  const BATCH_SIZE = 100; // Keep safely below 200 Google limit per request
  
  // Google restricts indexing to 200 requests per day per service account by default (unless quota is raised).
  // We will process the first 200 urls for immediate injection, but log warnings.
  const quotaLimit = 200;
  const urlsToSubmit = urls.slice(0, quotaLimit);
  
  console.log(`Submitting ${urlsToSubmit.length} URLs (Free Quota Limit)...`);

  for (let i = 0; i < urlsToSubmit.length; i += BATCH_SIZE) {
    const batch = urlsToSubmit.slice(i, i + BATCH_SIZE);
    console.log(`Processing batch ${i / BATCH_SIZE + 1}...`);

    for (const url of batch) {
      try {
        const response = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtClient.credentials.access_token}`
          },
          body: JSON.stringify({
            url: url,
            type: 'URL_UPDATED'
          })
        });

        if (response.ok) {
          console.log(`✅ Submitted: ${url}`);
        } else {
          const errText = await response.text();
          console.error(`❌ Failed: ${url} - ${errText}`);
        }
      } catch (err) {
        console.error(`❌ Error submitting ${url}:`, err.message);
      }
      
      // Delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  console.log('[Google Indexing API] Batch complete.');
}

runIndexer().catch(console.error);
