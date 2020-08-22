
var CACHE_NAME = 'expense-tracker-cache-v1';

var urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  '/sockjs-node',
  '/et.png',
  '/manifest.json',
  '/sw.js',
  '/offline.html',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      }).catch((err)=>{console.log('error:',err);})
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request)
        .catch(()=>caches.match('offline.html'));
      }
    )
  );
});

  // self.addEventListener('fetch', function(event) {
  //   event.respondWith(
  //     caches.match(event.request)
  //       .then(function(response) {
  //         if (response) {
  //           return response;
  //         }
  
  //         return fetch(event.request).then(
  //           function(response) {
  //             if(!response || response.status !== 200 || response.type !== 'basic') {
  //               return response;
  //             }
  //             var responseToCache = response.clone();
  //             caches.open(CACHE_NAME)
  //               .then(function(cache) {
  //                 cache.put(event.request, responseToCache);
  //               });
  //             return response;
  //           }
  //         );
  //       })
  //     );
  // });