const CACHE_NAME = 'krisala-aventis-v2';
const STATIC_ASSETS = [
  '/',
  '/assets/css/style.min.css',
  '/assets/js/script.min.js',
  '/assets/images/hero.webp',
  '/assets/images/logo.jpg',
  '/manifest.json'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((k) => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Only handle GET requests for same-origin static assets, never block HTML/Next chunks
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin)) return;
  if (e.request.url.includes('/_next/')) return;

  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
