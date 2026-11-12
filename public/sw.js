const CACHE = 'happy-llama-keepsake-v1';
const CORE = [
  '/',
  '/assets/brand/happy-llama-logo.png',
  '/assets/brand/favicon.svg',
  '/assets/hero/llama.svg',
  '/assets/llama/base.svg',
  '/assets/scenes/galway-market.svg',
  '/assets/scenes/cusco.svg',
  '/assets/scenes/machu-picchu.svg',
  '/assets/scenes/andes.svg',
  '/assets/scenes/irish-coast.svg',
  '/assets/scenes/warm-weave.svg',
  '/assets/accessories/hat.svg',
  '/assets/accessories/glasses.svg',
  '/assets/accessories/scarf.svg',
  '/assets/accessories/headphones.svg',
  '/assets/accessories/pendant.svg',
  '/assets/accessories/flowers.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).catch(() => caches.match('/')));
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(event.request, copy));
      return response;
    }))
  );
});
