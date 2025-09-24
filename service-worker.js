const CACHE_NAME = 'affiliate-gadgets-cache-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './bbq.html',
  './kitchen.html',
  './style.css',
  './app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
