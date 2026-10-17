const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

async function testMobile() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9300 + Math.floor(Math.random() * 500);
  const tempDir = path.join(os.tmpdir(), 'chrome-mob-' + Date.now());

  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${port}`,
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions',
    '--window-size=390,844',
    `--user-data-dir=${tempDir}`,
    'about:blank'
  ]);

  let wsUrl = null;
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const targets = await new Promise((res, rej) => {
        http.get(`http://127.0.0.1:${port}/json`, r => {
          let d = '';
          r.on('data', c => d += c);
          r.on('end', () => res(JSON.parse(d)));
        }).on('error', rej);
      });
      const t = targets.find(t => t.type === 'page' && !t.url.startsWith('chrome-extension'));
      if (t && t.webSocketDebuggerUrl) {
        wsUrl = t.webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  const ws = new globalThis.WebSocket(wsUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  const send = (m, p = {}) => new Promise((resolve) => {
    const curId = id++;
    const h = e => {
      const msg = JSON.parse(e.data);
      if (msg.id === curId) {
        ws.removeEventListener('message', h);
        resolve(msg.result);
      }
    };
    ws.addEventListener('message', h);
    ws.send(JSON.stringify({ id: curId, method: m, params: p }));
  });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });

  await send('Page.navigate', { url: 'http://localhost:5175/?replay=true' });

  // Wait for timeline
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 60));
    const res = await send('Runtime.evaluate', {
      expression: '!!window.__curtainsTimeline',
      returnByValue: true
    });
    if (res?.result?.value) break;
  }

  // Phase 1 mobile
  await send('Runtime.evaluate', { expression: 'window.__curtainsTimeline && window.__curtainsTimeline.pause(0.15)' });
  await new Promise(r => setTimeout(r, 100));
  const shotMobP1 = await send('Page.captureScreenshot', { format: 'png' });
  if (shotMobP1?.data) {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'curtains_mobile_p1.png'), Buffer.from(shotMobP1.data, 'base64'));
    console.log('Saved curtains_mobile_p1.png');
  }

  // Phase 2 mobile parting
  await send('Runtime.evaluate', { expression: 'window.__curtainsTimeline && window.__curtainsTimeline.pause(0.75)' });
  await new Promise(r => setTimeout(r, 100));
  const shotMobP2 = await send('Page.captureScreenshot', { format: 'png' });
  if (shotMobP2?.data) {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'curtains_mobile_p2.png'), Buffer.from(shotMobP2.data, 'base64'));
    console.log('Saved curtains_mobile_p2.png');
  }

  // Check no horizontal scrollbar / overflow
  const overflowCheck = await send('Runtime.evaluate', {
    expression: 'document.documentElement.scrollWidth <= window.innerWidth',
    returnByValue: true
  });
  console.log('Mobile no horizontal overflow:', overflowCheck?.result?.value);

  ws.close();
  chrome.kill();
  process.exit(0);
}

testMobile().catch(console.error);
