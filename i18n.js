/**
 * i18n.js — Shared localization for olegmmg.github.io
 * Supports: ru (Russian), en (English)
 * Auto-detects browser language, allows manual override saved to localStorage
 */

const I18N = {
  ru: {
    // Nav
    nav_back: 'Назад',
    nav_github: 'GitHub',

    // Footer
    footer_copy: '© 2026 olegmmg.github.io',
    footer_home: '← Главная',

    // Shared UI
    btn_open: 'Открыть →',
    btn_details: 'Подробнее →',
    btn_view: 'Смотреть →',
    btn_play: 'Играть →',
    btn_add: 'Добавить →',
    btn_go: 'Перейти →',
    btn_download_apk: 'Скачать APK',
    btn_download: 'Скачать →',
    btn_copy: 'copy',
    btn_copied: '✓',
    lang_toggle: 'English',

    // Status chips
    status_active: '● активно',
    status_works: '● работает',
    status_wip: '◐ в разработке',
    status_updating: '◐ обновляется',
    status_stable: '● стабильно',
    status_available: '● доступно',
    status_archive: '● архив',
    status_repo: '◉ репозиторий',
    status_soon: 'скоро',

    // ── index.html ──
    index_title: 'olegmmg — экосистема проектов',
    index_hero_tag: '6 активных проектов',
    index_h1: 'разработка',
    index_sub: 'Игры, мессенджер, прошивки, iOS-твики, прокси и серверы — всё в одном месте.',
    index_stat1_n: '11',
    index_stat1_l: 'проектов',
    index_stat2_n: '5+',
    index_stat2_l: 'направлений',
    index_stat3_l: 'приватность',
    index_feat_t: '💬 TelegramWhite — приватный мессенджер',
    index_feat_s: 'Ваш сервер, полный контроль, веб-версия, Android, десктоп и голосовые звонки.',
    index_sec: 'ключевые проекты',

    // Project cards on index
    vpn_name: 'VPN',
    vpn_type: 'VPN',
    vpn_desc: 'Бесплатный впн с множеством локаций',
    vpn_tags: 'VPN,HAPP,xRAY',
    
    radar_name: 'Радар',
    radar_type: 'Радар',
    radar_desc: 'Карта радара по России',
    radar_tags: 'UAVs,Radar,Дроны',
    
    geogame_name: 'GeoGame',
    geogame_type: 'Игра',
    geogame_desc: '2D шутер на реальной карте мира',
    geogame_tags: 'Game,2D,Шутер',
    
    magnet_name: 'Project Magnet',
    magnet_type: 'шутер / Android',
    magnet_desc: 'Мобильный шутер по мотивам Standoff 2 с уникальным оружием и механиками.',
    magnet_tags: 'Unity,Android,3D',
    
    proxy_name: 'Proxy',
    proxy_type: 'прокси-решения',
    proxy_desc: 'Инструменты для обхода блокировок и приватного серфинга.',
    proxy_tags: 'WARP,WireGuard,Shadowsocks',
    
    tgw_name: 'TelegramWhite',
    tgw_type: 'приватный мессенджер',
    tgw_desc: 'Собственный мессенджер с возможностью хостинга приватного сервера.',
    tgw_tags: 'Android,Windows,Web',
    
    samsung_name: 'Samsung ROMs',
    samsung_type: 'прошивки / рекавери',
    samsung_desc: 'Кастомные и стоковые прошивки для Samsung Galaxy. TWRP, OrangeFox.',
    samsung_tags: 'Samsung,OneUI,AOSP',
    
    quantum_name: 'QuantumProject',
    quantum_type: 'AOSP кастомная прошивка',
    quantum_desc: 'Чистая кастомная прошивка на базе AOSP с упором на стабильность и приватность.',
    quantum_tags: 'Android,AOSP,Samsung',
    
    ios_repo_name: 'iOS Tweaks Repo',
    ios_repo_type: 'jailbreak репозиторий',
    ios_repo_desc: 'Репозиторий с кастомными твиками для кастомизации iOS.',
    ios_repo_tags: 'iOS,Cydia,Sileo',
    
    custom_roms_name: 'Custom ROMs',
    custom_roms_type: 'LineageOS / DerpFest / UN1CA',
    custom_roms_desc: 'Большой каталог прошивок для Samsung, Xiaomi, Pixel, OnePlus.',
    custom_roms_tags: 'Android,Custom ROM',
    
    recovery_name: 'Recovery',
    recovery_type: 'TWRP / OrangeFox / PitchBlack',
    recovery_desc: 'Кастомные рекавери для разблокированных Android-устройств.',
    recovery_tags: 'TWRP,Recovery',
    
    stock_name: 'Сток прошивки',
    stock_type: 'официальные сборки',
    stock_desc: 'Оригинальные стоковые прошивки для восстановления устройств.',
    stock_tags: 'Samsung,Xiaomi,Google',

    // ── 404 ──
    p404_title: '404 — Не найдено — olegmmg',
    p404_nav: '404 — Не найдено',
    p404_h1: '404 — Не найдено',
    p404_sub: 'Страница в разработке. Контент появится скоро.',
    p404_back: '← На главную',

    // ── privacy_policy ──
    privacy_title: 'Privacy Policy — olegmmg',
    privacy_nav: 'Privacy Policy',
    privacy_h1: 'Privacy Policy',
    privacy_sub: 'Страница в разработке. Контент появится скоро.',
  },

  en: {
    // Nav
    nav_back: 'Back',
    nav_github: 'GitHub',

    // Footer
    footer_copy: '© 2026 olegmmg.github.io',
    footer_home: '← Home',

    // Shared UI
    btn_open: 'Open →',
    btn_details: 'Details →',
    btn_view: 'View →',
    btn_play: 'Play →',
    btn_add: 'Add →',
    btn_go: 'Go →',
    btn_download_apk: 'Download APK',
    btn_download: 'Download →',
    btn_copy: 'copy',
    btn_copied: '✓',
    lang_toggle: 'Русский',

    // Status chips
    status_active: '● active',
    status_works: '● working',
    status_wip: '◐ in development',
    status_updating: '◐ updating',
    status_stable: '● stable',
    status_available: '● available',
    status_archive: '● archive',
    status_repo: '◉ repository',
    status_soon: 'soon',

    // ── index.html ──
    index_title: 'olegmmg — project ecosystem',
    index_hero_tag: '6 active projects',
    index_h1: 'dev',
    index_sub: 'Games, messenger, firmware, iOS tweaks, proxy and servers — all in one place.',
    index_stat1_n: '11',
    index_stat1_l: 'projects',
    index_stat2_n: '5+',
    index_stat2_l: 'directions',
    index_stat3_l: 'privacy',
    index_feat_t: '💬 TelegramWhite — private messenger',
    index_feat_s: 'Your server, full control, web version, Android, desktop and voice calls.',
    index_sec: 'key projects',

    // Project cards on index
    vpn_name: 'VPN',
    vpn_type: 'VPN',
    vpn_desc: 'Free VPN with multiple server locations',
    vpn_tags: 'VPN,HAPP,xRAY',
    
    radar_name: 'Radar',
    radar_type: 'Radar',
    radar_desc: 'Drone radar map of Russia',
    radar_tags: 'UAVs,Radar,Drones',
    
    geogame_name: 'GeoGame',
    geogame_type: 'Game',
    geogame_desc: '2D shooter on a real world map',
    geogame_tags: 'Game,2D,Shooter',
    
    magnet_name: 'Project Magnet',
    magnet_type: 'shooter / Android',
    magnet_desc: 'Mobile shooter inspired by Standoff 2 with unique weapons and mechanics.',
    magnet_tags: 'Unity,Android,3D',
    
    proxy_name: 'Proxy',
    proxy_type: 'proxy tools',
    proxy_desc: 'Tools for bypassing restrictions and private browsing.',
    proxy_tags: 'WARP,WireGuard,Shadowsocks',
    
    tgw_name: 'TelegramWhite',
    tgw_type: 'private messenger',
    tgw_desc: 'Self-hosted messenger with your own private server.',
    tgw_tags: 'Android,Windows,Web',
    
    samsung_name: 'Samsung ROMs',
    samsung_type: 'firmware / recovery',
    samsung_desc: 'Custom and stock firmware for Samsung Galaxy. TWRP, OrangeFox.',
    samsung_tags: 'Samsung,OneUI,AOSP',
    
    quantum_name: 'QuantumProject',
    quantum_type: 'AOSP custom ROM',
    quantum_desc: 'Clean AOSP-based custom ROM focused on stability and privacy.',
    quantum_tags: 'Android,AOSP,Samsung',
    
    ios_repo_name: 'iOS Tweaks Repo',
    ios_repo_type: 'jailbreak repository',
    ios_repo_desc: 'Repository with custom tweaks for iOS customization.',
    ios_repo_tags: 'iOS,Cydia,Sileo',
    
    custom_roms_name: 'Custom ROMs',
    custom_roms_type: 'LineageOS / DerpFest / UN1CA',
    custom_roms_desc: 'Large ROM catalog for Samsung, Xiaomi, Pixel, OnePlus.',
    custom_roms_tags: 'Android,Custom ROM',
    
    recovery_name: 'Recovery',
    recovery_type: 'TWRP / OrangeFox / PitchBlack',
    recovery_desc: 'Custom recoveries for unlocked Android devices.',
    recovery_tags: 'TWRP,Recovery',
    
    stock_name: 'Stock Firmware',
    stock_type: 'official builds',
    stock_desc: 'Original stock firmware for device restoration.',
    stock_tags: 'Samsung,Xiaomi,Google',

    // ── 404 ──
    p404_title: '404 — Not Found — olegmmg',
    p404_nav: '404 — Not Found',
    p404_h1: '404 — Not Found',
    p404_sub: 'Page under development. Content coming soon.',
    p404_back: '← Back to Home',

    // ── privacy_policy ──
    privacy_title: 'Privacy Policy — olegmmg',
    privacy_nav: 'Privacy Policy',
    privacy_h1: 'Privacy Policy',
    privacy_sub: 'Page under development. Content coming soon.',
  }
};

/**
 * Detect language: localStorage → browser preference → 'ru' fallback
 */
function detectLang() {
  const saved = localStorage.getItem('oleg_lang');
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || navigator.userLanguage || 'ru').toLowerCase();
  if (nav.startsWith('ru') || nav.startsWith('uk') || nav.startsWith('be')) return 'ru';
  return 'en';
}

function setLang(lang) {
  localStorage.setItem('oleg_lang', lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLangToggle(lang);
  // Dispatch custom event for other scripts
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function t(key) {
  const lang = detectLang();
  return (I18N[lang] && I18N[lang][key]) || (I18N['ru'][key]) || key;
}

/**
 * Apply all data-i18n attributes on the page
 * Usage in HTML: <span data-i18n="key"></span>
 * For attributes: <element data-i18n-attr="placeholder:key,title:key2">
 */
function applyTranslations(lang) {
  const dict = I18N[lang] || I18N['ru'];

  // Translate regular text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // Translate attributes
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const pairs = el.getAttribute('data-i18n-attr').split(',');
    pairs.forEach(pair => {
      const [attr, key] = pair.split(':');
      if (dict[key] !== undefined) el.setAttribute(attr.trim(), dict[key]);
    });
  });

  // Update page title
  const page = document.body.getAttribute('data-page');
  if (page && dict[page + '_title']) {
    document.title = dict[page + '_title'];
  }
  
  // Update chips and tags dynamically
  document.querySelectorAll('[data-i18n-tags]').forEach(el => {
    const key = el.getAttribute('data-i18n-tags');
    if (dict[key] !== undefined) {
      const tags = dict[key].split(',');
      el.innerHTML = tags.map(tag => `<span class="chip">${tag.trim()}</span>`).join('');
    }
  });
  
  // Update status chips
  document.querySelectorAll('[data-i18n-status]').forEach(el => {
    const key = el.getAttribute('data-i18n-status');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
}

function updateLangToggle(lang) {
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'ru' ? 'English' : 'Русский';
  });
}

function toggleLang() {
  const current = detectLang();
  setLang(current === 'ru' ? 'en' : 'ru');
}

// Auto-run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLang();
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLangToggle(lang);
});

// Export for use in other scripts
window.i18n = { t, detectLang, setLang, toggleLang };/**
 * i18n.js — Shared localization for olegmmg.github.io
 * Supports: ru (Russian), en (English)
 * Auto-detects browser language, allows manual override saved to localStorage
 */

const I18N = {
  ru: {
    // Nav
    nav_back: 'Назад',
    nav_github: 'GitHub',

    // Footer
    footer_copy: '© 2026 olegmmg.github.io',
    footer_home: '← Главная',

    // Shared UI
    btn_open: 'Открыть →',
    btn_details: 'Подробнее →',
    btn_view: 'Смотреть →',
    btn_play: 'Играть →',
    btn_add: 'Добавить →',
    btn_go: 'Перейти →',
    btn_download_apk: 'Скачать APK',
    btn_download: 'Скачать →',
    btn_copy: 'copy',
    btn_copied: '✓',
    lang_toggle: 'English',

    // Status chips
    status_active: '● активно',
    status_works: '● работает',
    status_wip: '◐ в разработке',
    status_updating: '◐ обновляется',
    status_stable: '● стабильно',
    status_available: '● доступно',
    status_archive: '● архив',
    status_repo: '◉ репозиторий',
    status_soon: 'скоро',

    // ── index.html ──
    index_title: 'olegmmg — экосистема проектов',
    index_hero_tag: '6 активных проектов',
    index_h1: 'разработка',
    index_sub: 'Игры, мессенджер, прошивки, iOS-твики, прокси и серверы — всё в одном месте.',
    index_stat1_n: '11',
    index_stat1_l: 'проектов',
    index_stat2_n: '5+',
    index_stat2_l: 'направлений',
    index_stat3_l: 'приватность',
    index_feat_t: '💬 TelegramWhite — приватный мессенджер',
    index_feat_s: 'Ваш сервер, полный контроль, веб-версия, Android, десктоп и голосовые звонки.',
    index_sec: 'ключевые проекты',

    // Project cards on index
    vpn_name: 'VPN',
    vpn_type: 'VPN',
    vpn_desc: 'Бесплатный впн с множеством локаций',
    geogame_name: 'GeoGame',
    geogame_type: 'Игра',
    geogame_desc: '2D шутер на реальной карте мира',
    magnet_name: 'Project Magnet',
    magnet_type: 'шутер / Android',
    magnet_desc: 'Мобильный шутер по мотивам Standoff 2 с уникальным оружием и механиками.',
    proxy_name: 'Proxy',
    proxy_type: 'прокси-решения',
    proxy_desc: 'Инструменты для обхода блокировок и приватного серфинга.',
    tgw_name: 'TelegramWhite',
    tgw_type: 'приватный мессенджер',
    tgw_desc: 'Собственный мессенджер с возможностью хостинга приватного сервера.',
    samsung_name: 'Samsung ROMs',
    samsung_type: 'прошивки / рекавери',
    samsung_desc: 'Кастомные и стоковые прошивки для Samsung Galaxy. TWRP, OrangeFox.',
    quantum_name: 'QuantumProject',
    quantum_type: 'AOSP кастомная прошивка',
    quantum_desc: 'Чистая кастомная прошивка на базе AOSP с упором на стабильность и приватность.',
    ios_repo_name: 'iOS Tweaks Repo',
    ios_repo_type: 'jailbreak репозиторий',
    ios_repo_desc: 'Репозиторий с кастомными твиками для кастомизации iOS.',
    custom_roms_name: 'Custom ROMs',
    custom_roms_type: 'LineageOS / DerpFest / UN1CA',
    custom_roms_desc: 'Большой каталог прошивок для Samsung, Xiaomi, Pixel, OnePlus.',
    recovery_name: 'Recovery',
    recovery_type: 'TWRP / OrangeFox / PitchBlack',
    recovery_desc: 'Кастомные рекавери для разблокированных Android-устройств.',
    stock_name: 'Сток прошивки',
    stock_type: 'официальные сборки',
    stock_desc: 'Оригинальные стоковые прошивки для восстановления устройств.',

    // ── 404 ──
    p404_title: '404 — Не найдено — olegmmg',
    p404_nav: '404 — Не найдено',
    p404_h1: '404 — Не найдено',
    p404_sub: 'Страница в разработке. Контент появится скоро.',
    p404_back: '← На главную',

    // ── privacy_policy ──
    privacy_title: 'Privacy Policy — olegmmg',
    privacy_nav: 'Privacy Policy',
    privacy_h1: 'Privacy Policy',
    privacy_sub: 'Страница в разработке. Контент появится скоро.',

    // ── project-magnet ──
    magnet_title: 'Project Magnet — olegmmg',
    magnet_hero_tag: 'Мобильный шутер',
    magnet_h1: 'Project Magnet',
    magnet_sub: '3D-шутер по мотивам Standoff 2. Уникальное оружие, быстрый геймплей, оптимизация под Android.',
    magnet_dl_t: 'Скачать APK',
    magnet_dl_s: 'Последняя версия для Android',
    magnet_sec_platforms: 'платформы',
    magnet_plat_android_s: 'текущая',
    magnet_plat_windows_s: 'планируется',
    magnet_plat_ios_s: 'не поддерж.',
    magnet_sec_features: 'возможности',
    magnet_sec_screens: 'скриншоты',

    // ── project-magnet features ──
    magnet_feat1_t: 'Уникальное оружие',
    magnet_feat1_s: 'Эксклюзивное оружие с кастомными механиками стрельбы.',
    magnet_feat2_s: 'Управление и UI оптимизированы для сенсорных экранов.',
    magnet_feat3_t: 'Производительность',
    magnet_feat3_s: 'Работает на широком спектре Android-устройств.',
    magnet_feat4_t: 'Карты',
    magnet_feat4_s: 'Несколько карт с разными тактическими сценариями.',
    magnet_notice_t: '⚠ Установка APK',
    magnet_notice_b: 'Включите «Установку из неизвестных источников» в настройках Android перед установкой.',

    // ── proxy ──
    proxy_title: 'WebFilter Proxy — olegmmg',
    proxy_nav: 'WebFilter Proxy',
    proxy_h1: 'WebFilter Proxy',
    proxy_sub: 'Локальный прокси-сервер с фильтрацией сайтов по блок-листу. MITM-инспекция HTTPS, автообновление списка, автозапуск на Windows / Linux / macOS.',
    proxy_dl_t: 'Скачать',
    proxy_dl_s: 'Исходный код и конфиг',
    proxy_sec_platforms: 'платформы',
    proxy_sec_features: 'возможности',
    proxy_sec_install: 'установка',
    proxy_sec_blocklist: 'блок-лист — категории',

    // ── telegramwhite ──
    tgw_title: 'TelegramWhite — olegmmg',
    tgw_hero_tag: 'приватный мессенджер',
    tgw_h1: 'TelegramWhite',
    tgw_sub: 'Приватный мессенджер на собственном сервере. Полный контроль над данными.',
    tgw_sec_download: 'скачать / открыть',
    tgw_sec_features: 'возможности',

    // ── repo ──
    repo_title: 'iOS Repo — olegmmg',
    repo_h1: 'iOS Tweaks Repository',
    repo_sub: 'Jailbreak-инструменты для 32-битных iOS устройств · Cydia / Sileo / Zebra',
    repo_copy_btn: 'Копировать',
    repo_how_title: 'Как добавить репозиторий',
    repo_step1: 'Открой <strong>Sileo</strong>, <strong>Cydia</strong> или <strong>Zebra</strong> на jailbroken устройстве',
    repo_step2: 'Перейди во вкладку <strong>Sources</strong> (Sileo) или <strong>Manage → Sources</strong> (Cydia)',
    repo_step3: 'Нажми <strong>+</strong> и вставь URL репозитория',
    repo_theme_btn: 'Светлая',

    // ── roms ──
    roms_title: 'Кастомные ROM | olegmmg',
    roms_h1: 'Кастомные ROM',
    roms_nav_stock: 'Сток',

    // ── recovery ──
    recovery_title: 'Recovery (TWRP / OrangeFox) | olegmmg',
    recovery_h1: 'Recovery',

    // ── samsung ──
    samsung_title: 'Samsung прошивки | olegmmg',
    samsung_h1: 'Samsung',

    // ── stock ──
    stock_title: 'Сток прошивки | olegmmg',
    stock_h1: 'Сток прошивки',

    // ── QuantumProject ──
    quantum_title: 'QuantumProject — AOSP ROM | olegmmg',
  },

  en: {
    // Nav
    nav_back: 'Back',
    nav_github: 'GitHub',

    // Footer
    footer_copy: '© 2026 olegmmg.github.io',
    footer_home: '← Home',

    // Shared UI
    btn_open: 'Open →',
    btn_details: 'Details →',
    btn_view: 'View →',
    btn_play: 'Play →',
    btn_add: 'Add →',
    btn_go: 'Go →',
    btn_download_apk: 'Download APK',
    btn_download: 'Download →',
    btn_copy: 'copy',
    btn_copied: '✓',
    lang_toggle: 'Русский',

    // Status chips
    status_active: '● active',
    status_works: '● working',
    status_wip: '◐ in development',
    status_updating: '◐ updating',
    status_stable: '● stable',
    status_available: '● available',
    status_archive: '● archive',
    status_repo: '◉ repository',
    status_soon: 'soon',

    // ── index.html ──
    index_title: 'olegmmg — project ecosystem',
    index_hero_tag: '6 active projects',
    index_h1: 'dev',
    index_sub: 'Games, messenger, firmware, iOS tweaks, proxy and servers — all in one place.',
    index_stat1_n: '11',
    index_stat1_l: 'projects',
    index_stat2_n: '5+',
    index_stat2_l: 'directions',
    index_stat3_l: 'privacy',
    index_feat_t: '💬 TelegramWhite — private messenger',
    index_feat_s: 'Your server, full control, web version, Android, desktop and voice calls.',
    index_sec: 'key projects',

    // Project cards on index
    vpn_name: 'VPN',
    vpn_type: 'VPN',
    vpn_desc: 'Free VPN with multiple server locations',
    geogame_name: 'GeoGame',
    geogame_type: 'Game',
    geogame_desc: '2D shooter on a real world map',
    magnet_name: 'Project Magnet',
    magnet_type: 'shooter / Android',
    magnet_desc: 'Mobile shooter inspired by Standoff 2 with unique weapons and mechanics.',
    proxy_name: 'Proxy',
    proxy_type: 'proxy tools',
    proxy_desc: 'Tools for bypassing restrictions and private browsing.',
    tgw_name: 'TelegramWhite',
    tgw_type: 'private messenger',
    tgw_desc: 'Self-hosted messenger with your own private server.',
    samsung_name: 'Samsung ROMs',
    samsung_type: 'firmware / recovery',
    samsung_desc: 'Custom and stock firmware for Samsung Galaxy. TWRP, OrangeFox.',
    quantum_name: 'QuantumProject',
    quantum_type: 'AOSP custom ROM',
    quantum_desc: 'Clean AOSP-based custom ROM focused on stability and privacy.',
    ios_repo_name: 'iOS Tweaks Repo',
    ios_repo_type: 'jailbreak repository',
    ios_repo_desc: 'Repository with custom tweaks for iOS customization.',
    custom_roms_name: 'Custom ROMs',
    custom_roms_type: 'LineageOS / DerpFest / UN1CA',
    custom_roms_desc: 'Large ROM catalog for Samsung, Xiaomi, Pixel, OnePlus.',
    recovery_name: 'Recovery',
    recovery_type: 'TWRP / OrangeFox / PitchBlack',
    recovery_desc: 'Custom recoveries for unlocked Android devices.',
    stock_name: 'Stock Firmware',
    stock_type: 'official builds',
    stock_desc: 'Original stock firmware for device restoration.',

    // ── 404 ──
    p404_title: '404 — Not Found — olegmmg',
    p404_nav: '404 — Not Found',
    p404_h1: '404 — Not Found',
    p404_sub: 'Page under development. Content coming soon.',
    p404_back: '← Back to Home',

    // ── privacy_policy ──
    privacy_title: 'Privacy Policy — olegmmg',
    privacy_nav: 'Privacy Policy',
    privacy_h1: 'Privacy Policy',
    privacy_sub: 'Page under development. Content coming soon.',

    // ── project-magnet ──
    magnet_title: 'Project Magnet — olegmmg',
    magnet_hero_tag: 'Mobile Shooter',
    magnet_h1: 'Project Magnet',
    magnet_sub: '3D shooter inspired by Standoff 2. Unique weapons, fast gameplay, optimized for Android.',
    magnet_dl_t: 'Download APK',
    magnet_dl_s: 'Latest version for Android',
    magnet_sec_platforms: 'platforms',
    magnet_plat_android_s: 'current',
    magnet_plat_windows_s: 'planned',
    magnet_plat_ios_s: 'unsupported',
    magnet_sec_features: 'features',
    magnet_sec_screens: 'screenshots',

    // ── project-magnet features ──
    magnet_feat1_t: 'Unique Weapons',
    magnet_feat1_s: 'Exclusive weapons with custom shooting mechanics.',
    magnet_feat2_s: 'Controls and UI optimized for touchscreens.',
    magnet_feat3_t: 'Performance',
    magnet_feat3_s: 'Runs on a wide range of Android devices.',
    magnet_feat4_t: 'Maps',
    magnet_feat4_s: 'Multiple maps with different tactical scenarios.',
    magnet_notice_t: '⚠ APK Installation',
    magnet_notice_b: 'Enable "Install from unknown sources" in Android settings before installing.',

    // ── proxy ──
    proxy_title: 'WebFilter Proxy — olegmmg',
    proxy_nav: 'WebFilter Proxy',
    proxy_h1: 'WebFilter Proxy',
    proxy_sub: 'Local proxy server with website blocklist filtering. HTTPS MITM inspection, auto-update blocklist, autostart on Windows / Linux / macOS.',
    proxy_dl_t: 'Download',
    proxy_dl_s: 'Source code and config',
    proxy_sec_platforms: 'platforms',
    proxy_sec_features: 'features',
    proxy_sec_install: 'installation',
    proxy_sec_blocklist: 'blocklist — categories',

    // ── telegramwhite ──
    tgw_title: 'TelegramWhite — olegmmg',
    tgw_hero_tag: 'private messenger',
    tgw_h1: 'TelegramWhite',
    tgw_sub: 'Private messenger on your own server. Full control over your data.',
    tgw_sec_download: 'download / open',
    tgw_sec_features: 'features',

    // ── repo ──
    repo_title: 'iOS Repo — olegmmg',
    repo_h1: 'iOS Tweaks Repository',
    repo_sub: 'Jailbreak tools for 32-bit iOS devices · Cydia / Sileo / Zebra',
    repo_copy_btn: 'Copy',
    repo_how_title: 'How to add the repository',
    repo_step1: 'Open <strong>Sileo</strong>, <strong>Cydia</strong> or <strong>Zebra</strong> on a jailbroken device',
    repo_step2: 'Go to <strong>Sources</strong> tab (Sileo) or <strong>Manage → Sources</strong> (Cydia)',
    repo_step3: 'Tap <strong>+</strong> and paste the repository URL',
    repo_theme_btn: 'Light',

    // ── roms ──
    roms_title: 'Custom ROMs | olegmmg',
    roms_h1: 'Custom ROMs',
    roms_nav_stock: 'Stock',

    // ── recovery ──
    recovery_title: 'Recovery (TWRP / OrangeFox) | olegmmg',
    recovery_h1: 'Recovery',

    // ── samsung ──
    samsung_title: 'Samsung Firmware | olegmmg',
    samsung_h1: 'Samsung',

    // ── stock ──
    stock_title: 'Stock Firmware | olegmmg',
    stock_h1: 'Stock Firmware',

    // ── QuantumProject ──
    quantum_title: 'QuantumProject — AOSP ROM | olegmmg',
  }
};

/**
 * Detect language: localStorage → browser preference → 'ru' fallback
 */
function detectLang() {
  const saved = localStorage.getItem('oleg_lang');
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || navigator.userLanguage || 'ru').toLowerCase();
  if (nav.startsWith('ru') || nav.startsWith('uk') || nav.startsWith('be')) return 'ru';
  return 'en';
}

function setLang(lang) {
  localStorage.setItem('oleg_lang', lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLangToggle(lang);
}

function t(key) {
  const lang = detectLang();
  return (I18N[lang] && I18N[lang][key]) || (I18N['ru'][key]) || key;
}

/**
 * Apply all data-i18n attributes on the page
 * Usage in HTML: <span data-i18n="key"></span>
 * For attributes: <element data-i18n-attr="placeholder:key,title:key2">
 */
function applyTranslations(lang) {
  const dict = I18N[lang] || I18N['ru'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const pairs = el.getAttribute('data-i18n-attr').split(',');
    pairs.forEach(pair => {
      const [attr, key] = pair.split(':');
      if (dict[key] !== undefined) el.setAttribute(attr.trim(), dict[key]);
    });
  });

  // Update page title if defined
  const titleKey = el => {
    const body = document.body.getAttribute('data-page');
    return body ? body + '_title' : null;
  };
  const page = document.body.getAttribute('data-page');
  if (page && dict[page + '_title']) {
    document.title = dict[page + '_title'];
  }
}

function updateLangToggle(lang) {
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'ru' ? 'English' : 'Русский';
  });
}

function toggleLang() {
  const current = detectLang();
  setLang(current === 'ru' ? 'en' : 'ru');
}

// Auto-run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLang();
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLangToggle(lang);
});
