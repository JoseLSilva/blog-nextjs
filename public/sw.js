console.log("service worker");

var CACHE_NAME = "blog-next";
var urlsToCache = ["/"];

self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// self.addEventListener("install", event => {
//   const preLoaded = caches.open(CACHE_NAME)
//       .then(cache => cache.addAll(urlsToCache))
//   event.waitUntil(preLoaded);
// });

self.addEventListener("fetch", event => {
  const response = caches
    .match(event.request)
    .then(match => match || fetch(event.request));
  event.respondWith(response);
});
