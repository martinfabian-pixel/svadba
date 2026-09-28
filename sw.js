const CACHE = 'sm-wedding-v27';
const BASE = new URL('.', self.registration.scope);
const INDEX = new URL('index.html', BASE).pathname;
const CORE = ['index.html', 'manifest.webmanifest', 'icons/icon.svg', 'assets/sm-logo.jpg', 'assets/invite-wordmark.png', 'src/main.js', 'src/config.js', 'src/style.css'].map(path => new URL(path, BASE).pathname);
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(Promise.all([caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))), self.clients.claim()])));
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response.ok) { const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(request, copy)); }
    return response;
  }).catch(() => request.mode === 'navigate' ? caches.match(INDEX) : Promise.reject(new Error('Offline resource unavailable')))));
});
