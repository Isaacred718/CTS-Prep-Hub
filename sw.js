/* sw.js — retired. CTS Prep Hub was merged into CTS Prep; this worker removes
   itself so the old offline copy stops answering and the redirect in
   index.html takes over. It leaves all caches alone: they share a prefix
   with the merged app on the same site. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(self.registration.unregister().then(function () {
    return self.clients.matchAll({ type: 'window' });
  }).then(function (clients) {
    clients.forEach(function (c) { c.navigate(c.url); });
  }));
});
