const https = require('https');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local if available
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  content.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, '');
      if (!process.env[key]) process.env[key] = value;
    }
  });
}

const email = process.env.CLOUDFLARE_EMAIL || 'propsmartrealty@gmail.com';
const key = process.env.CLOUDFLARE_GLOBAL_KEY;
const zoneId = process.env.CLOUDFLARE_ZONE_ID || '8cd67eee52fb1e1b53fe8a6b59dcdc13';

if (!key) {
  console.error('❌ Error: CLOUDFLARE_GLOBAL_KEY not found in environment or .env.local');
  process.exit(1);
}

console.log('🚀 Purging entire Cloudflare Edge Cache for zone:', zoneId);
const data = JSON.stringify({ purge_everything: true });

const req = https.request(`https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`, {
  method: 'POST',
  headers: {
    'X-Auth-Key': key,
    'X-Auth-Email': email,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
}, res => {
  let responseData = '';
  res.on('data', chunk => responseData += chunk);
  res.on('end', () => {
    try {
      const parsed = JSON.parse(responseData);
      if (parsed.success) {
        console.log('✅ Successfully purged entire Cloudflare Edge Cache globally (HTTP 200).');
      } else {
        console.error('❌ Cloudflare API Error:', parsed.errors);
      }
    } catch (e) {
      console.log('Response:', responseData);
    }
  });
});

req.on('error', err => {
  console.error('❌ Network error during cache purge:', err.message);
});

req.write(data);
req.end();
