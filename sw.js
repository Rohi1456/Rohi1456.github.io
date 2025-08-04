// sw.js

self.addEventListener('install', event => {
  console.log('✅ Service Worker installed');
  self.skipWaiting(); // Forces waiting SW to activate
});

self.addEventListener('activate', event => {
  console.log('✅ Service Worker activated');
  return self.clients.claim(); // Takes control of uncontrolled clients
});

self.addEventListener('message', event => {
  console.log('📩 SW received message from page or Android:', event.data);

  // Reply back to the sender (could be Android or page)
  if (event.source) {
    event.source.postMessage('Reply from SW: ' + event.data);
  } else if (event.ports && event.ports[0]) {
    event.ports[0].postMessage('Reply from SW (via port): ' + event.data);
  }
});
