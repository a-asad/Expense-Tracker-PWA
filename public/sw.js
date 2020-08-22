
var CACHE_NAME = 'expense-tracker-cache-v1';

var urlsToCache = [
  '/static/css/main.b1b794a2.chunk.css',
  '/',
  '/static/js/main.4894409e.chunk.js',
  '/static/js/2.0bf25218.chunk.js',
  '/static/css/main.b1b794a2.chunk.css',
  '/sw.js',
  '/index.html',
  '/et.png',
  '/et1.png',
  '/manifest.json',
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

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         if (response) {
//           return response;
//         }
//         return fetch(event.request)
//         .catch(()=>caches.match('/offline.html'));
//       }
//     )
//   );
// });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
  
          return fetch(event.request).then(
            function(response) {
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              var responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
              return response;
            }
          );
        })
      );
  });