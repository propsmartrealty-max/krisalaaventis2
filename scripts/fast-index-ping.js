const https = require('https');
const fs = require('fs');
const path = require('path');

const HOST = 'krisalaventis.in';
const KEY = 'krisalaaventis2026indexnow';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Read URLs from sitemap or data
const coreData = require('../data.json');
const nriData = require('../data/global-nri-seo.json');

const urlList = [
  `https://${HOST}`,
  `https://${HOST}/#floorplans`,
  `https://${HOST}/#calculators`,
  `https://${HOST}/#inventory-matrix`,
  `https://${HOST}/#amenities`,
  `https://${HOST}/#location`,
  `https://${HOST}/#contact`,
  `https://${HOST}/sitemap.xml`
];

// Add first 100 core URLs for high-priority fast indexing
for (let i = 0; i < Math.min(100, coreData.length); i++) {
  urlList.push(`https://${HOST}/${coreData[i].folder}/${coreData[i].url_slug.replace('.html', '')}`);
}

for (let i = 0; i < Math.min(20, nriData.length); i++) {
  urlList.push(`https://${HOST}/${nriData[i].folder}/${nriData[i].url_slug.replace('.html', '')}`);
}

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList
});

console.log(`🚀 Preparing IndexNow Fast-Indexing dispatch for ${urlList.length} high-priority URLs on ${HOST}...`);

const endpoints = [
  { hostname: 'api.indexnow.org', path: '/indexnow' },
  { hostname: 'www.bing.com', path: '/indexnow' },
  { hostname: 'yandex.com', path: '/indexnow' }
];

async function pingEndpoint(ep) {
  return new Promise((resolve) => {
    const req = https.request({
      hostname: ep.hostname,
      port: 443,
      path: ep.path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 8000
    }, (res) => {
      console.log(`✅ [IndexNow] Response from ${ep.hostname}: HTTP ${res.statusCode}`);
      resolve({ host: ep.hostname, status: res.statusCode });
    });

    req.on('error', (err) => {
      console.warn(`⚠️ [IndexNow] Ping to ${ep.hostname} warning: ${err.message}`);
      resolve({ host: ep.hostname, error: err.message });
    });

    req.write(payload);
    req.end();
  });
}

(async () => {
  for (const ep of endpoints) {
    await pingEndpoint(ep);
  }
  console.log('🎉 IndexNow Fast-Indexing batch successfully dispatched!');
})();
