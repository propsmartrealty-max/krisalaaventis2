const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

/**
 * ==============================================================================
 * KRISALA AVENTIS TATHAWADE — SOVEREIGN GOOGLE INDEXING ENGINE v3.0
 * Multi-Dataset URL Extraction | Persistent State & Quota Management
 * ==============================================================================
 */

const BASE_URL = 'https://krisalaventis.in';
const keyFile = path.join(__dirname, 'service-account.json');
const stateFile = path.join(__dirname, 'indexing-state.json');
const rootDir = path.join(__dirname, '..');

function getAllUrls() {
  const urls = new Set();
  
  // 1. Homepage & Root Pages
  urls.add(`${BASE_URL}/`);

  // Helper to load and add JSON data
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
            urls.add(`${BASE_URL}/${cleanFolder}/${cleanSlug}`);
          } else if (item && item.slug) {
            urls.add(`${BASE_URL}/${item.slug.replace(/^\/+/, '')}`);
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

function loadState() {
  if (fs.existsSync(stateFile)) {
    try {
      return JSON.parse(fs.readFileSync(stateFile, 'utf8'));
    } catch (e) {
      // ignore
    }
  }
  return {
    lastRun: null,
    currentIndex: 0,
    totalSubmitted: 0,
    history: []
  };
}

function saveState(state) {
  fs.writeFileSync(stateFile, JSON.stringify(state, null, 2), 'utf8');
}

async function getJwtClient() {
  let credentials;
  if (process.env.GCP_SA_KEY) {
    try {
      credentials = JSON.parse(process.env.GCP_SA_KEY);
    } catch (err) {
      throw new Error('GCP_SA_KEY is not valid JSON string');
    }
  } else if (fs.existsSync(keyFile)) {
    credentials = JSON.parse(fs.readFileSync(keyFile, 'utf8'));
  } else {
    throw new Error('Service account key not found. Place service-account.json in indexing-automation/ or set GCP_SA_KEY.');
  }

  const jwtClient = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ['https://www.googleapis.com/auth/indexing'],
    null
  );

  await jwtClient.authorize();
  return { jwtClient, email: credentials.client_email, projectId: credentials.project_id };
}

async function run() {
  const args = process.argv.slice(2);
  const isStatus = args.includes('--status');
  const isReset = args.includes('--reset');
  const isAll = args.includes('--all');
  
  let limitArg = 200; // Google default daily quota limit
  const limitIdx = args.indexOf('--limit');
  if (limitIdx !== -1 && args[limitIdx + 1]) {
    limitArg = parseInt(args[limitIdx + 1], 10) || 200;
  }

  const allUrls = getAllUrls();
  let state = loadState();

  if (isReset) {
    state = {
      lastRun: null,
      currentIndex: 0,
      totalSubmitted: 0,
      history: []
    };
    saveState(state);
    console.log('\x1b[32m✅ Indexing state has been successfully reset to 0.\x1b[0m');
    return;
  }

  if (isStatus) {
    console.log('\n📊 \x1b[1mKrisala Aventis Google Indexing Status\x1b[0m');
    console.log('─────────────────────────────────────────────');
    console.log(`Total URLs in Catalog:    ${allUrls.length}`);
    console.log(`Current Progress Index:   ${state.currentIndex} / ${allUrls.length} (${Math.round((state.currentIndex / allUrls.length) * 100)}%)`);
    console.log(`Total URLs Submitted:     ${state.totalSubmitted}`);
    console.log(`Last Push Timestamp:      ${state.lastRun || 'Never'}`);
    console.log('─────────────────────────────────────────────\n');
    return;
  }

  console.log('\n🚀 \x1b[1mKrisala Aventis Sovereign Indexing Engine\x1b[0m');
  console.log(`Total catalog URLs detected: \x1b[36m${allUrls.length}\x1b[0m`);
  console.log(`Resuming from URL index: \x1b[33m${state.currentIndex}\x1b[0m`);

  let authInfo;
  try {
    authInfo = await getJwtClient();
    console.log(`\x1b[32m✅ Authenticated with GCP Project [${authInfo.projectId}] as ${authInfo.email}\x1b[0m`);
  } catch (err) {
    console.error(`\x1b[31m❌ Authentication Error:\x1b[0m ${err.message}`);
    console.log('\x1b[33m💡 Please check indexing-automation/service-account.json or set GCP_SA_KEY.\x1b[0m\n');
    return;
  }

  const indexing = google.indexing('v3');
  const startIndex = state.currentIndex;
  const countToProcess = isAll ? (allUrls.length - startIndex) : Math.min(limitArg, allUrls.length - startIndex);

  if (countToProcess <= 0) {
    console.log('\x1b[32m🎉 100% of all catalog URLs have already been submitted! Use --reset to re-index.\x1b[0m\n');
    return;
  }

  const batchUrls = allUrls.slice(startIndex, startIndex + countToProcess);
  console.log(`Preparing to publish \x1b[36m${batchUrls.length}\x1b[0m URLs to Google Indexing API...\n`);

  let successful = 0;
  let failed = 0;

  for (let i = 0; i < batchUrls.length; i++) {
    const url = batchUrls[i];
    const itemNum = startIndex + i + 1;
    try {
      const res = await indexing.urlNotifications.publish({
        auth: authInfo.jwtClient,
        requestBody: {
          url: url,
          type: 'URL_UPDATED'
        }
      });
      console.log(`[${itemNum}/${allUrls.length}] 🚀 \x1b[32mOK (${res.status})\x1b[0m ${url}`);
      successful++;
    } catch (apiErr) {
      console.error(`[${itemNum}/${allUrls.length}] ❌ \x1b[31mFAIL:\x1b[0m ${url} — ${apiErr.message}`);
      failed++;
      if (apiErr.code === 429 || apiErr.message.includes('Quota exceeded')) {
        console.warn('\n\x1b[33m⚠️ Daily quota limit reached from Google Indexing API (200 requests/day default).\x1b[0m');
        console.log('State saved. You can rerun tomorrow to process the next batch.\n');
        break;
      }
    }

    // Rate limiting delay
    await new Promise(resolve => setTimeout(resolve, 150));
  }

  // Update State
  const newIndex = startIndex + successful;
  state.currentIndex = newIndex;
  state.totalSubmitted = (state.totalSubmitted || 0) + successful;
  state.lastRun = new Date().toISOString();
  state.history.push({
    date: state.lastRun,
    attempted: batchUrls.length,
    successful,
    failed,
    range: [startIndex, newIndex]
  });

  saveState(state);

  console.log('\n─────────────────────────────────────────────');
  console.log(`✨ Batch complete! Successfully submitted: \x1b[32m${successful}\x1b[0m URLs (Failed: ${failed})`);
  console.log(`Overall progress: \x1b[36m${state.currentIndex} / ${allUrls.length}\x1b[0m (${Math.round((state.currentIndex / allUrls.length) * 100)}%)`);
  console.log('─────────────────────────────────────────────\n');
}

run().catch(err => {
  console.error('Fatal execution error:', err);
});
