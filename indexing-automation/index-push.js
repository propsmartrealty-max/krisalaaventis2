const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

/**
 * SOVEREIGN INDEXING ENGINE v2.0
 * Optimized for Krisala Aventis Rationalized Apex Infrastructure
 * 
 * Target: 100% Indexing Coverage in 24 Hours
 */

const keyFile = path.join(__dirname, 'service-account.json');
const baseDir = path.join(__dirname, '..');

// Dynamically read and parse clean URLs for all HTML files except 404.html
const htmlFiles = fs.readdirSync(baseDir).filter(file => {
  return file.endsWith('.html') && file.toLowerCase() !== '404.html';
});

const urls = htmlFiles.map(file => {
  if (file.toLowerCase() === 'index.html') {
    return 'https://krisalaventis.in/';
  } else {
    return `https://krisalaventis.in/${file.replace('.html', '')}`;
  }
});


async function pushToIndex() {
  if (!fs.existsSync(keyFile)) {
    console.error('\x1b[31m❌ Error: service-account.json not found.\x1b[0m');
    console.log('\x1b[33mTo activate indexing dominance, please follow the setup guide and deploy your Google JSON key.\x1b[0m');
    return;
  }

  const jwtClient = new google.auth.JWT(
    null,
    keyFile,
    null,
    ['https://www.googleapis.com/auth/indexing'],
    null
  );

  try {
    await jwtClient.authorize();
    console.log('\x1b[32m✅ Authorized with Google Indexing API\x1b[0m');

    const indexing = google.indexing('v3');

    for (const url of urls) {
      const res = await indexing.urlNotifications.publish({
        auth: jwtClient,
        requestBody: {
          url: url,
          type: 'URL_UPDATED'
        }
      });
      console.log(`🚀 \x1b[36mIndexing Pushed:\x1b[0m ${url} [Status: ${res.status}]`);
      
      // Delay to respect API quota
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log('\x1b[32m✨ All high-intent URLs pushed to Google Search Console.\x1b[0m');
  } catch (err) {
    console.error('\x1b[31m⚠️ Fatal API Error:\x1b[0m', err.message);
  }
}

pushToIndex().catch(console.error);
