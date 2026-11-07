/* Web Push is enabled only after both browser and server confirm subscription. */
window.setupRadarNotifications = async function (regions, showError) {
  const button = document.getElementById('notifyBtn');
  const select = document.getElementById('myRegionSelect');
  const testButton = document.getElementById('testNotifyBtn');
  const status = document.getElementById('notifyStatus');
  const read = key => { try { return localStorage.getItem(key); } catch (_) { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  let region = read('radar_my_region') || '';
  let enabled = false, busy = false;
  for (const name of ['all', ...new Set(regions.sort())]) {
    const option = new Option(name === 'all' ? 'Все регионы' : name, name);
    select.add(option);
  }
  select.value = region;
  region = select.value;
  function render(text = '') {
    button.disabled = busy;
    select.disabled = busy;
    testButton.disabled = busy || !enabled;
    button.classList.toggle('active', enabled);
    button.textContent = busy ? '⏳' : enabled ? '🔔 Вкл' : '🔕 Выкл';
    button.setAttribute('aria-pressed', String(enabled));
    status.textContent = text || (enabled ? 'Подписка подтверждена сервером' : 'Уведомления выключены');
  }
  render();
  const supported = window.isSecureContext && 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  if (!supported) {
    button.disabled = true;
    status.textContent = 'Для push нужен HTTPS и поддержка браузера. На iPhone откройте установленное приложение с экрана «Домой».';
    return;
  }
  async function api(path, data) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch(path, { method: data ? 'POST' : 'GET', cache: 'no-store', signal: controller.signal,
        ...(data ? { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) } : {}) });
      const body = await response.json();
      if (!response.ok || body.success === false) throw new Error(body.error || body.message || `HTTP ${response.status}`);
      return body;
    } finally { clearTimeout(timeout); }
  }
  const registration = navigator.serviceWorker.register('./sw.js').then(async reg => {
    if (reg.active) return reg;
    let timer;
    try { return await Promise.race([navigator.serviceWorker.ready, new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('Service Worker не готов')), 10000); })]); }
    finally { clearTimeout(timer); }
  });
  // Attach a rejection handler immediately, including when permission has not been requested.
  registration.catch(error => { render('Не удалось запустить фоновые уведомления'); console.warn(error); });
  const decode = key => Uint8Array.from(atob(key.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - key.length % 4) % 4)), c => c.charCodeAt(0));
  async function enable(permission) {
    if (await permission !== 'granted') throw new Error('Разрешите уведомления в настройках браузера');
    const reg = await registration;
    const config = await api('/api/push/config');
    if (!config.enabled || !config.public_key) throw new Error('Web Push не настроен на сервере');
    const key = decode(config.public_key);
    let sub = await reg.pushManager.getSubscription();
    if (sub?.options.applicationServerKey && !new Uint8Array(sub.options.applicationServerKey).every((v, i) => v === key[i])) {
      await sub.unsubscribe();
      sub = null;
    }
    sub = sub || await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: key });
    try { await api('/api/subscribe', { subscription: sub.toJSON(), region }); }
    catch (error) { await sub.unsubscribe().catch(() => {}); throw error; }
    enabled = true;
    save('radar_notify', 'true');
  }
  async function disable() {
    const sub = await (await registration).pushManager.getSubscription();
    if (sub) {
      let serverRemoved = false;
      try { await api('/api/unsubscribe', { subscription: sub.toJSON() }); serverRemoved = true; } catch (_) {}
      const browserRemoved = await sub.unsubscribe().catch(() => false);
      if (!serverRemoved && !browserRemoved) throw new Error('Не удалось отключить подписку. Повторите при наличии связи.');
    }
    enabled = false;
    save('radar_notify', 'false');
  }
  button.addEventListener('click', async () => {
    if (busy) return;
    if (!enabled && !region) { showError('Сначала выберите регион'); return; }
    // Keep requestPermission in the click gesture, before any network awaits.
    const permission = !enabled ? (Notification.permission === 'granted' ? Promise.resolve('granted') : Notification.requestPermission()) : null;
    busy = true; render();
    let errorText = '';
    try { if (enabled) await disable(); else await enable(permission); }
    catch (error) { errorText = error.message; showError(errorText); }
    finally { busy = false; render(errorText); }
  });
  select.addEventListener('change', async () => {
    const previous = region;
    const next = select.value;
    busy = true; render();
    let errorText = '';
    try {
      if (enabled) {
        if (!next) await disable();
        else {
          const sub = await (await registration).pushManager.getSubscription();
          if (!sub) throw new Error('Подписка истекла. Включите уведомления повторно.');
          await api('/api/subscribe', { subscription: sub.toJSON(), region: next });
        }
      }
      region = next;
      save('radar_my_region', region);
    } catch (error) { select.value = previous; errorText = error.message; showError(errorText); }
    finally { busy = false; render(errorText); }
  });
  testButton.addEventListener('click', async () => {
    busy = true; render();
    let result;
    try {
      const sub = await (await registration).pushManager.getSubscription();
      if (!sub) throw new Error('Подписка истекла');
      await api('/api/push/test', { subscription: sub.toJSON() });
      result = 'Push-сервис принял тест. Проверьте системное уведомление.';
    } catch (error) { result = error.message; showError(result); }
    finally { busy = false; render(result); }
  });
  busy = true; render();
  let initialError = '';
  try {
    const sub = await (await registration).pushManager.getSubscription();
    if (sub && Notification.permission === 'granted' && region && read('radar_notify') === 'true') {
      await api('/api/subscribe', { subscription: sub.toJSON(), region });
      enabled = true;
    } else if (sub) await disable();
    else save('radar_notify', 'false');
  } catch (error) { initialError = 'Подписка не подтверждена: ' + error.message; }
  finally { busy = false; render(initialError); }
};
