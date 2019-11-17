self.addEventListener('install', function(event) {
   event.waitUntil(
   caches.open('web-store').then(function(cache) {
     return cache.addAll([
       
     ]);
   })
 );
  console.log('[Service Worker] Install Service Worker ....', event);
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activate Service Worker ....', event);
  return self.clients.claim(); 
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fething Something ....', event);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
