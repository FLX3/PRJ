var APP_PREFIX = 'CarShare'
var VERSION = 'v1'           
var CACHE_NAME = APP_PREFIX + VERSION

var URLS = [
    '/PRJ/',
    '/PRJ/index.html',
    '/PRJ/script.js',
    '/PRJ/style.css',
    '/PRJ/icon/icon192.webp',
    '/PRJ/icon/icon128.webp',
    '/PRJ/icon/icon144.webp',
    '/PRJ/icon/icon152.webp',
    '/PRJ/icon/icon256.webp',
    '/PRJ/icon/icon512.webp',
    'https://my-json-server.typicode.com/FLX3/DB/db'
];
self.addEventListener('fetch', function (e) {
  console.log('fetch request : ' + e.request.url)
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        console.log('responding with cache : ' + e.request.url)
        return request
      } else {    
        console.log('file is not cached, fetching : ' + e.request.url)
        return fetch(e.request)
      }
    })
  )
})
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(URLS)
    })
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME)

      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i] )
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})