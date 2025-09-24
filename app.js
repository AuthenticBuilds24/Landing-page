// Register service worker for offline capabilities (Progressive Web App)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js').catch(function(err) {
      console.warn('Service Worker registration failed:', err);
    });
  });
}
