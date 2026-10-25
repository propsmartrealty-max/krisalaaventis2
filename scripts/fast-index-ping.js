const https = require('https');
const fs = require('fs');
const path = require('path');

const HOST = 'krisalaventis.in';
const KEY = 'krisalaaventis2026indexnow';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const rootDir = path.join(__dirname, '..');

function getAllUrls() {
  const urls = new Set();

  // Core Pillars & Silo Hubs
  const corePaths = [
    '',
    '/pricing',
    '/floor-plans',
    '/location',
    '/amenities',
    '/maharera',
    '/tathawade-vs-wakad',
    '/near',
    '/price',
    '/guide',
    '/market',
    '/compare',
    '/feature',
    '/blog',
    '/invest'
  ];
  corePaths.forEach(p => urls.add(`https://${HOST}${p}`));

  function addFromJson(relativeFilePath) {
    const fullPath = path.join(rootDir, relativeFilePath);
    if (!fs.existsSync(fullPath)) return;
    try {
      const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
      if (Array.isArray(data)) {
        data.forEach(item => {
          if (item && item.folder && item.url_slug) {
            const cleanSlug = item.url_slug.replace('.html', '').replace(/^\/+/, '');
            const cleanFolder = item.folder.replace(/^\/+/, '').replace(/\/+$/, '');
            urls.add(`https://${HOST}/${cleanFolder}/${cleanSlug}`);
          } else if (item && item.slug) {
            urls.add(`https://${HOST}/${item.slug.replace(/^\/+/, '')}`);
          }
        });
      }
    } catch (e) {
      console.warn(`[Warning] Could not parse ${relativeFilePath}:`, e.message);
    }
  }

  addFromJson('data.json');
  addFromJson('data/global-nri-seo.json');
  addFromJson('data/krisala-domination-seo.json');
  addFromJson('data/pune-market-keywords.json');

  return Array.from(urls);
}

const allUrls = getAllUrls();
console.log(`🚀 Total URLs detected for Fast-Indexing: ${allUrls.length}`);

// Chunk into batches of up to 5,000 URLs (IndexNow limit is 10,000 per request)
const CHUNK_SIZE = 5000;
const batches = [];
for (let i = 0; i < allUrls.length; i += CHUNK_SIZE) {
  batches.push(allUrls.slice(i, i + CHUNK_SIZE));
}

const endpoints = [
  { hostname: 'api.indexnow.org', path: '/indexnow' },
  { hostname: 'www.bing.com', path: '/indexnow' },
  { hostname: 'yandex.com', path: '/indexnow' }
];

async function pingEndpoint(ep, urlList, batchIndex, totalBatches) {
  const payload = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList
  });

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
      timeout: 15000
    }, (res) => {
      console.log(`✅ [IndexNow Batch ${batchIndex + 1}/${totalBatches}] ${ep.hostname}: HTTP ${res.statusCode} (${urlList.length} URLs)`);
      resolve({ host: ep.hostname, status: res.statusCode });
    });

    req.on('error', (err) => {
      console.warn(`⚠️ [IndexNow Batch ${batchIndex + 1}/${totalBatches}] ${ep.hostname} warning: ${err.message}`);
      resolve({ host: ep.hostname, error: err.message });
    });

    req.write(payload);
    req.end();
  });
}

(async () => {
  for (let b = 0; b < batches.length; b++) {
    const batch = batches[b];
    console.log(`\n📦 Dispatched Batch ${b + 1}/${batches.length} containing ${batch.length} URLs...`);
    for (const ep of endpoints) {
      await pingEndpoint(ep, batch, b, batches.length);
    }
  }
  console.log('\n🎉 ALL Catalog URLs successfully pushed to IndexNow consortium (Bing, Yandex, IndexNow.org)!');
  process.exit(0);
})();
