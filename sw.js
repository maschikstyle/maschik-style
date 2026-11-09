// Guarda la página para que abra rápido y funcione sin señal.
// Cuando cambies config.js o index.html, sube el número de versión.
const VERSION = 'ms-v1';
const ARCHIVOS = ['./', 'index.html', 'config.js', 'logo.jpg', 'icon-192.png', 'manifest.webmanifest'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== VERSION).map(x => caches.delete(x))))); self.clients.claim(); });
// Primero busca en internet (para tener siempre los precios al día) y si no hay conexión usa la copia guardada.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(fetch(e.request).then(r => { const copia = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copia)); return r; }).catch(() => caches.match(e.request)));
});
