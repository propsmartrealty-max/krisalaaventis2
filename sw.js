const CACHE_NAME = 'krisala-aventis-sovereign-v4';
const ASSETS = [
  '/',
  '/assets/css/style.css',
  '/assets/js/script.js',
  '/assets/js/config.js',
  '/assets/images/logo.png',
  '/favicon.png'
];

// Install Event — Pre-cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching Core Assets');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Event — Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Deleting Old Cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event — Stale-While-Revalidate Strategy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchedResponse = fetch(event.request).then((networkResponse) => {
          // Update cache with fresh version
          if (networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
            // Fallback for navigation requests
            if (event.request.mode === 'navigate') {
                return cache.match('/');
            }
        });

        // Return cached version immediately, or wait for network
        return cachedResponse || fetchedResponse;
      });
    })
  );
});
