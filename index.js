if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/PRJ/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}