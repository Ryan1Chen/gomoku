// Service Worker — 讓五子棋可以離線遊玩
const CACHE_NAME = 'gomoku-v2';
const ASSETS = [
  '/gomoku/',
  '/gomoku/index.html',
  '/gomoku/manifest.json',
  '/gomoku/icon-192.png',
  '/gomoku/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(r => r || fetch(event.request))
  );
});
