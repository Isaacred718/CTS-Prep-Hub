/* sw.js — offline service worker (v6). Topic-agnostic engine file.

   Network-first for the app's own files: online you always get the latest
   deploy (no version bump needed for content updates); offline, or on a
   connection slower than NET_TIMEOUT_MS, the cached copy answers. Every
   successful fetch refreshes the cache. The versioned Firebase SDK files
   are cache-first since their URLs never change. Firebase API traffic is
   never touched.

   Caches are named "<topic id>-prep-*" and cleanup only removes those, so
   several apps on one site (username.github.io/app-a, /app-b) never wipe
   each other's offline copies. */
importScripts('topic.js');
var ID = (self.TOPIC && self.TOPIC.id) || 'study';
var PREFIX = ID + '-prep-';
var CACHE = PREFIX + 'v6';
var NET_TIMEOUT_MS = 4000;
var ASSETS = [
  './',
  './index.html',
  './styles.css',
  './topic.js',
  './settings.js',
  './app.js',
  './auth.js',
  './forge.js',
  './data/questions.js',
  './data/cards.js',
  './data/guides.js',
  './data/drills.js',
  './data/forge.js',
  './data/ctsd-challenges.js',
  // Document library: official AVIXA PDFs, cached so they open offline.
  './data/docs/cts_handbook_august_2026.pdf',
  './data/docs/cts_exam_content_outline_2024.pdf',
  './data/docs/code_of_ethics.pdf',
  './data/docs/cts-d_handbook_august_2026.pdf',
  './data/docs/cts-d_exam_content_outline.pdf',
  './data/docs/ctsd_math_formulas_2024.pdf',
  './data/docs/cts-i_handbook_august_2026.pdf',
  './data/docs/cts-i_exam_content_outline.pdf',
  './data/docs/anp_handbook_2026.pdf',
  './data/docs/anp-exam-content-outline-october-2023.pdf',
  './data/docs/certification_fee_schedule_2025.pdf',
  './data/docs/ru_options_chart_2023.pdf'
];
var SDK = [
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js'
];
var SDK_PREFIX = 'https://www.gstatic.com/firebasejs/';
// Firebase backend hosts: auth + firestore APIs, and the OAuth handler.
var API_RE = /firestore\.googleapis\.com|identitytoolkit\.googleapis\.com|securetoken\.googleapis\.com|firebaseapp\.com\/__\/auth|accounts\.google\.com/;

self.addEventListener('install', function (e) {
  var list = ASSETS.concat(self.TOPIC && self.TOPIC.sync ? SDK : []);
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      // one file failing (say, an optional data file) must not void the rest
      return Promise.all(list.map(function (u) {
        return c.add(new Request(u, { cache: 'reload' })).catch(function (err) { console.warn('[sw] precache skipped', u, err); });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k.indexOf(PREFIX) === 0 && k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function offlineFallback(req) {
  if (req.mode === 'navigate' || req.destination === 'document') {
    return caches.match('./index.html', { ignoreSearch: true }).then(function (r) {
      return r || caches.match('./', { ignoreSearch: true });
    });
  }
  return Response.error();
}

// Revalidate with the server on every load (a cheap 304 when nothing
// changed), so a new deploy shows up at once instead of after the HTTP
// cache's max-age, and the app's files never mix two versions.
function revalidate(req) {
  try { return fetch(new Request(req.url, { cache: 'no-cache', credentials: 'same-origin' })); }
  catch (e) { return fetch(req); }
}

function networkFirst(req) {
  return caches.open(CACHE).then(function (cache) {
    var net = revalidate(req).then(function (res) {
      if (res && res.ok && !res.redirected) cache.put(req.url, res.clone());
      return res;
    });
    var timeout = new Promise(function (resolve) { setTimeout(resolve, NET_TIMEOUT_MS); });
    return Promise.race([net.catch(function () {}), timeout]).then(function (res) {
      if (res) return res;
      // offline or slow: answer from cache; if nothing is cached, keep waiting on the network
      return cache.match(req, { ignoreSearch: true }).then(function (hit) {
        return hit || net.catch(function () { return offlineFallback(req); });
      });
    });
  });
}

function cacheFirst(req) {
  return caches.match(req).then(function (hit) {
    return hit || fetch(req).then(function (res) {
      if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return res;
    });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || req.cache === 'no-store') return; // no-store = an explicit live check
  var url = req.url;
  if (API_RE.test(url)) return; // let auth/API traffic go straight to network
  if (url.indexOf(SDK_PREFIX) === 0) { e.respondWith(cacheFirst(req)); return; }
  // only this app's own files: same origin and inside this worker's scope
  if (url.indexOf(self.registration.scope) !== 0) return;
  e.respondWith(networkFirst(req));
});
