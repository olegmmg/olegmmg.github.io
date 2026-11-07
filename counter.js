(function () {
  'use strict';
  const FIREBASE_DB_URL =
    'https://database-52a2b-default-rtdb.europe-west1.firebasedatabase.app';

  function getPageKey() {
    let path = window.location.pathname
      .replace(/\/index\.html$/, '/')
      .replace(/\/$/, '') || '/';
    return path.replace(/[.#$[\]/]/g, '_');
  }

  function getDateKey() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  async function increment(ref) {
    const url = `${FIREBASE_DB_URL}/${ref}.json`;
    try {
      const r = await fetch(url);
      const val = (await r.json()) || 0;
      await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(val + 1),
      });
      return val + 1;
    } catch (e) {
      console.warn('[counter] increment failed:', ref, e);
      return null;
    }
  }

  async function set(ref, value) {
    const url = `${FIREBASE_DB_URL}/${ref}.json`;
    try {
      await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value),
      });
    } catch (e) {
      console.warn('[counter] set failed:', ref, e);
    }
  }

  async function get(ref) {
    try {
      const r = await fetch(`${FIREBASE_DB_URL}/${ref}.json`);
      return await r.json();
    } catch (e) {
      console.warn('[counter] get failed:', ref, e);
      return null;
    }
  }

  function alreadyCounted(pageKey) {
    const sk = `_cv_${pageKey}`;
    if (sessionStorage.getItem(sk)) return true;
    sessionStorage.setItem(sk, '1');
    return false;
  }

  function renderAll(vals) {
    const map = {
      'visit-count': vals.pageTotal,
      'visit-count-total': vals.siteTotal,
      'visit-count-today': vals.pageToday,
      'visit-count-total-today': vals.siteToday,
    };
    Object.entries(map).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el && val !== null && val !== undefined) el.textContent = val;
    });
  }

  async function showCurrentValues(pageKey, dateKey) {
    const pageRef = `visits/pages/${pageKey}`;
    const [pageTotal, siteTotal, pageToday, siteToday] = await Promise.all([
      get(`${pageRef}/total`),
      get('visits/total'),
      get(`${pageRef}/daily/${dateKey}/total`),
      get(`visits/daily/${dateKey}/total`),
    ]);
    renderAll({ pageTotal, siteTotal, pageToday, siteToday });
  }

  async function track() {
    const pageKey = getPageKey();
    const dateKey = getDateKey();

    if (alreadyCounted(pageKey)) {
      // ”же считали в этой сессии Ч просто показываем текущие значени€ из Ѕƒ
      await showCurrentValues(pageKey, dateKey);
      return;
    }

    const pageRef = `visits/pages/${pageKey}`;
    const [pageTotal, siteTotal, pageToday, siteToday] = await Promise.all([
      increment(`${pageRef}/total`),
      increment('visits/total'),
      increment(`${pageRef}/daily/${dateKey}/total`),
      increment(`visits/daily/${dateKey}/total`),
      set(`${pageRef}/last`, Date.now()),
      set(`${pageRef}/path`, window.location.pathname),
    ]);

    renderAll({ pageTotal, siteTotal, pageToday, siteToday });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', track);
  } else {
    track();
  }
})();