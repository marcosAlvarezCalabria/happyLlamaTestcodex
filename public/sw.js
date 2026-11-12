const CACHE = 'happy-llama-reminder-v13';
const CORE = [
  '/',
  '/assets/brand/happy-llama-logo.png',
  '/assets/brand/favicon.svg',
  '/assets/hero/llama.svg',
  '/assets/hero/happy-llama-walk-rest-v2.webp',
  '/assets/llama/cream-cutout-tight.webp',
  '/assets/scenes/galway.webp',
  '/assets/scenes/cusco.webp',
  '/assets/scenes/machupicchu.webp',
  '/assets/scenes/andes.webp',
  '/assets/scenes/moher.webp',
  '/assets/scenes/causeway.webp',
  '/assets/scenes/dublin.webp',
  '/assets/scenes/rainbow.webp'
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
  if (event.request.headers.has('range')) return;
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
