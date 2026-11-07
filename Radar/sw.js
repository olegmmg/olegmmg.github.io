self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('push', event => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (_) { data = {body: event.data?.text()}; }
  const scope = self.registration.scope;
  event.waitUntil(self.registration.showNotification(data.title || 'Radar', {
    body: data.body || 'Обновление статуса',
    icon: new URL('icon.png', scope).href,
    badge: new URL('icon.png', scope).href,
    tag: data.tag || 'radar-alert', renotify: true,
    vibrate: [300, 150, 300], requireInteraction: true,
    timestamp: Number.isFinite(data.timestamp) ? data.timestamp : Date.now(),
    data: { url: scope, region: data.region || null }
  }));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil((async () => {
    const scope = self.registration.scope;
    const clients = await self.clients.matchAll({type: 'window', includeUncontrolled: true});
    for (const client of clients) {
      if (client.url.startsWith(scope) && 'focus' in client) return client.focus();
    }
    return self.clients.openWindow(scope);
  })());
