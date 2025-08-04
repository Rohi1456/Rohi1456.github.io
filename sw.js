self.addEventListener('install', event => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated');
  return self.clients.claim();
});

self.addEventListener('message', event => {
  console.log('SW received:', event.data);
  event.source.postMessage('Reply from SW: ' + event.data);
});
