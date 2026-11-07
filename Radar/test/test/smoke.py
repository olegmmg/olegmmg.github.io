"""Browser regression checks using local, synthetic API responses; no production writes.
Run: python -B Radar-frontend/test/smoke.py (requires playwright and installed Edge).
"""
import json
import threading
from datetime import datetime, timezone, timedelta
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
class Handler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass

server = ThreadingHTTPServer(('127.0.0.1', 0), partial(Handler, directory=str(ROOT)))
threading.Thread(target=server.serve_forever, daemon=True).start()
base = f'http://127.0.0.1:{server.server_port}'
now = lambda: datetime.now(timezone.utc).isoformat()
state = {'region': 'drone_danger', 'airport': 'restricted', 'bridge': 'open', 'fail': False}
counts = {}
errors = []

def handle(route):
    url = route.request.url
    path = url.split(base)[-1]
    counts[path] = counts.get(path, 0) + 1
    if '/api/' in url:
        if state['fail']:
            route.fulfill(status=503, body='Unavailable')
            return
        if path == '/api/statuses':
            data = {'regions': {'Московская область': {'status': state['region'], 'message': '<img src=x onerror=alert(1)>', 'alerts_last_hour': 2}}, 'last_updated': now()}
        elif path == '/api/airports':
            data = {'airports': [{'code': 'SVO', 'iata': 'SVO', 'lat': 55.97, 'lon': 37.41, 'name': 'Test Airport', 'city': 'Moscow', 'status': state['airport'], 'message': 'Test', 'updated_at': now()}]}
        elif path == '/api/bridge':
            data = {'status': state['bridge'], 'updated_at': now(), 'checked_at': now(), 'source_available': True, 'stale': False, 'message': '<b>Road traffic report</b>', 'source_url': 'https://t.me/most_official/123', 'max_age_seconds': 21600}
        else:
            data = {}
        route.fulfill(content_type='application/json', body=json.dumps(data))
    elif 'cartocdn.com' in url:
        route.fulfill(status=204)
    elif 'fonts.googleapis.com' in url or 'fonts.gstatic.com' in url:
        route.fulfill(status=204)
    elif path == '/counter.js':
        route.fulfill(content_type='application/javascript', body='')
    else:
        route.continue_()

try:
    with sync_playwright() as p:
        browser = p.chromium.launch(channel='msedge', headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800}, service_workers='block')
        context.route('**/*', handle)
        page = context.new_page()
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.goto(base, wait_until='domcontentloaded', timeout=60000)
        page.wait_for_selector('.leaflet-overlay-pane path', state='attached', timeout=20000)
        page.wait_for_function("document.getElementById('loadingOverlay').style.display === 'none'")
        page.locator('#monitorTitle').click()
        page.wait_for_function("!document.getElementById('refreshBtn').disabled")
        assert page.locator('#bridgeStatus').get_attribute('data-status') == 'open'
        assert page.locator('#bridgeMessage b').count() == 0
        assert 'Связь с сервером есть' in page.locator('#connectionStatus').inner_text()
        initial_paths = page.locator('.leaflet-overlay-pane path').count()
        page.evaluate("window.originalPaths = [...document.querySelectorAll('.leaflet-overlay-pane path')]; window.originalAirport = document.querySelector('.airport-marker-mask')")
        def refresh():
            target = counts.get('/api/statuses', 0) + 1
            page.locator('#refreshBtn').click()
            page.wait_for_function("!document.getElementById('refreshBtn').disabled")
            assert counts['/api/statuses'] == target
        refresh()
        assert page.evaluate("originalPaths.every(p => p.isConnected)")
        assert page.evaluate("originalAirport === document.querySelector('.airport-marker-mask')")
        assert page.locator('.leaflet-overlay-pane path').count() == initial_paths
        assert counts.get('/regions-display.geojson') == 1
        assert counts.get('/regions-extra-display.geojson') == 1
        state.update(region='missile_alert', airport='closed', bridge='closed')
        refresh()
        assert page.evaluate("originalPaths.every(p => p.isConnected)")
        assert page.locator('.airport-marker-mask.status-closed').count() == 1
        assert page.locator('#bridgeStatus').get_attribute('data-status') == 'closed'
        page.locator('#langToggle').click()
        assert 'Crimean Bridge' in page.locator('#monitorTitle').inner_text()
        page.locator('#performanceMode').select_option('low')
        assert page.locator('html').evaluate("e => e.classList.contains('low-power')")
        page.locator('#monitorTitle').click()
        page.locator('#rulerToggleBtn').click()
        page.locator('#map').click(position={'x': 470, 'y': 400})
        page.locator('#map').click(position={'x': 680, 'y': 480})
        assert float(page.locator('#distKm').inner_text()) > 0
        page.locator('#closeRulerPanel').click()
        page.locator('#monitorTitle').click()
        state['fail'] = True
        refresh()
        assert page.locator('#bridgeStatus').get_attribute('data-status') == 'unknown'
        assert 'failed' in page.locator('#connectionStatus').inner_text()
        state['fail'] = False
        refresh()
        assert page.locator('#bridgeStatus').get_attribute('data-status') == 'closed'
        context.set_offline(True)
        page.wait_for_function("document.getElementById('connectionStatus').textContent === 'Offline'")
        assert page.locator('#bridgeStatus').get_attribute('data-status') == 'unknown'
        context.set_offline(False)
        page.wait_for_function("document.getElementById('bridgeStatus').dataset.status === 'closed'")
        page.set_viewport_size({'width': 360, 'height': 740})
        panel = page.locator('#monitorPanel').bounding_box()
        assert panel['x'] >= 0 and panel['x'] + panel['width'] <= 360
        page.screenshot(path=str(ROOT / 'test' / 'mobile-smoke.png'))
        assert not errors, errors
        print(json.dumps({'passed': True, 'region_paths': initial_paths, 'geometry_requests': {k:v for k,v in counts.items() if 'geojson' in k}, 'browser_errors': errors}, ensure_ascii=False))
        browser.close()
finally:
    server.shutdown()
