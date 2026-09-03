const fs = require('fs');
const path = require('path');

/**
 * Cloudflare Pages Distribution Optimizer & Compliance Validator
 * - Prunes redundant .txt RSC payloads from out/
 * - Injects _redirects & _headers into out/
 * - Validates file counts against Cloudflare 20,000 threshold
 */

const outDir = path.join(__dirname, '..', 'out');
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(outDir)) {
  console.error('\x1b[31m❌ Error: out/ directory does not exist. Run next build with OUTPUT_EXPORT=true first.\x1b[0m');
  process.exit(1);
}

console.log('\n🚀 \x1b[1mOptimizing Static Distribution for Cloudflare Pages...\x1b[0m');

// 1. Copy _redirects, _headers and _routes.json
['_redirects', '_headers', '_routes.json'].forEach(name => {
  const cleanName = name.trim();
  const src = path.join(publicDir, cleanName);
  const dest = path.join(outDir, cleanName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Injected ${cleanName} into out/`);
  }
});

// 2. Prune .txt files to stay under Cloudflare 20,000 file ceiling
let prunedCount = 0;
let prunedBytes = 0;

function pruneRscTxt(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      pruneRscTxt(full);
    } else if (item.isFile() && item.name.endsWith('.txt') && item.name !== 'robots.txt' && item.name !== 'humans.txt' && item.name !== 'llms.txt' && item.name !== 'llms-full.txt' && !item.name.includes('indexnow')) {
      const size = fs.statSync(full).size;
      fs.unlinkSync(full);
      prunedCount++;
      prunedBytes += size;
    }
  }
}

pruneRscTxt(outDir);
console.log(`🧹 Pruned \x1b[33m${prunedCount}\x1b[0m redundant .txt RSC payloads (${(prunedBytes / (1024 * 1024)).toFixed(2)} MB saved)`);

// 3. Final Audit
let finalCount = 0;
let finalSize = 0;
let largestFile = { name: '', size: 0 };
const extCounts = {};

function scan(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      scan(full);
    } else if (item.isFile()) {
      finalCount++;
      const size = fs.statSync(full).size;
      finalSize += size;
      const ext = path.extname(item.name) || '(no ext)';
      extCounts[ext] = (extCounts[ext] || 0) + 1;
      if (size > largestFile.size) {
        largestFile = { name: path.relative(outDir, full), size };
      }
    }
  }
}

scan(outDir);

console.log('\n📊 \x1b[1mFinal Cloudflare Distribution Compliance Report\x1b[0m');
console.log('────────────────────────────────────────────────────────────');
console.log(`Total Files in out/:        \x1b[32m${finalCount}\x1b[0m (Limit: 20,000 — \x1b[32m${Math.round((finalCount / 20000) * 100)}% of quota used\x1b[0m)`);
console.log(`Total Distribution Size:    \x1b[32m${(finalSize / (1024 * 1024)).toFixed(2)} MB\x1b[0m (Limit: 1,000 MB)`);
console.log(`Largest Single File:        \x1b[32m${largestFile.name} (${(largestFile.size / (1024 * 1024)).toFixed(2)} MB)\x1b[0m (Limit: 25 MB)`);
console.log('File Types Breakdown:      ', extCounts);
console.log('────────────────────────────────────────────────────────────');

if (finalCount <= 20000 && largestFile.size <= 25 * 1024 * 1024) {
  console.log('\x1b[32m✨ 100% COMPLIANT: Ready for instant Cloudflare Pages deployment!\x1b[0m\n');
} else {
  console.warn('\x1b[31m⚠️ WARNING: Distribution exceeds Cloudflare thresholds.\x1b[0m\n');
}
