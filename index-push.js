const { google } = require('googleapis');
const fs = require('fs');

/**
 * SOVEREIGN INDEXING ENGINE v1.0
 * For Krisala Aventis Search Dominance
 * 
 * Requirement: service-account.json from Google Search Console API
 */

const keyFile = 'service-account.json';
const urls = [
  'https://krisala.com/aventis-2-25-bhk-3-25-bhk-flats-in-tathawade-pune/',
  'https://krisala.com/aventis-2-25-bhk-3-25-bhk-flats-in-tathawade-pune/flats-near-hinjewadi.html',
  'https://krisala.com/aventis-2-25-bhk-3-25-bhk-flats-in-tathawade-pune/2-bhk-flats-tathawade.html',
  'https://krisala.com/aventis-2-25-bhk-3-25-bhk-flats-in-tathawade-pune/3-bhk-luxury-apartments-tathawade.html',
  'https://krisala.com/aventis-2-25-bhk-3-25-bhk-flats-in-tathawade-pune/construction-update-krisala-aventis.html'
];

async function pushToIndex() {
  if (!fs.existsSync(keyFile)) {
    console.error('❌ Error: service-account.json not found.');
    console.log('To activate indexing dominance, please provide your Google Search Console Service Account key.');
    return;
  }

  const jwtClient = new google.auth.JWT(
    null,
    keyFile,
    null,
    ['https://www.googleapis.com/auth/indexing'],
    null
  );

  await jwtClient.authorize();
  console.log('✅ Authorized with Google Indexing API');

  const indexing = google.indexing('v3');

  for (const url of urls) {
    try {
      const res = await indexing.urlNotifications.publish({
        auth: jwtClient,
        requestBody: {
          url: url,
          type: 'URL_UPDATED'
        }
      });
      console.log(`🚀 Indexing Pushed: ${url} [Status: ${res.status}]`);
    } catch (err) {
      console.error(`⚠️ Failed to push ${url}:`, err.message);
    }
  }
}

pushToIndex().catch(console.error);
