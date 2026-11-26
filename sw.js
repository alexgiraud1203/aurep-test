// Service worker : enregistre l'app dans l'iPhone pour qu'elle marche hors ligne.
// A CHAQUE MISE A JOUR DU CONTENU, augmente ce numero (v1 -> v2 -> v3...).
const VERSION = 'v3';
const FICHIERS = ['./', './index.html', './contenu.js', './manifest.json', './icone-180.png', './icone-512.png', './fira-sans.css', './fira-sans-400.woff2', './fira-sans-500.woff2', './fira-sans-600.woff2']
// Le logo (logo.png) est mis en mémoire automatiquement à la première ouverture.;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(cles => Promise.all(cles.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Cherche d'abord dans la memoire du telephone, sinon sur internet (et garde une copie, ex. la police).
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, {ignoreSearch: true}).then(rep => rep || fetch(e.request).then(r => {
    if (r.ok) { const copie = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copie)); } return r;
  }).catch(() => caches.match('./index.html'))));
});
