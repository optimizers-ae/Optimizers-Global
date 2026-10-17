const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

async function capture() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9580 + Math.floor(Math.random() * 200);
  const tempDir = path.join(os.tmpdir(), 'chrome-mobhero-' + Date.now());

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

  // Set device metrics for mobile 390px
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });

  console.log('Navigating to http://localhost:5175/?skip=true...');
  await send('Page.navigate', { url: 'http://localhost:5175/?skip=true' });

  // Wait for React app to mount
  for (let i = 0; i < 60; i++) {
    await new Promise(r => setTimeout(r, 100));
    const res = await send('Runtime.evaluate', {
      expression: '!!document.getElementById("hero-section")',
      returnByValue: true
    });
    if (res?.result?.value) {
      console.log('Hero section mounted in DOM at check ' + i);
      break;
    }
  }

  // Fast forward or finish curtains if present
  await send('Runtime.evaluate', {
    expression: 'if (window.__curtainsTimeline) { window.__curtainsTimeline.progress(1); }'
  });
  await new Promise(r => setTimeout(r, 800));

  // 1. Capture 390px Viewport (Above the Fold)
  const shot390 = await send('Page.captureScreenshot', { format: 'png' });
  if (shot390?.data) {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'mobile_hero_390.png'), Buffer.from(shot390.data, 'base64'));
    console.log('Saved mobile_hero_390.png');
  }

  // 2. Capture Full Scroll of Mobile Hero
  const heroDim = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('hero-section');
      if (!el) return null;
      return { width: el.offsetWidth, height: el.offsetHeight };
    })()`,
    returnByValue: true
  });
  console.log('Hero dimensions on mobile:', heroDim?.result?.value);

  if (heroDim?.result?.value) {
    const dim = heroDim.result.value;
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: Math.ceil(dim.height) + 20,
      deviceScaleFactor: 2,
      mobile: true
    });
    await new Promise(r => setTimeout(r, 400));

    const shotFullHero = await send('Page.captureScreenshot', { format: 'png' });
    if (shotFullHero?.data) {
      fs.writeFileSync(path.join(process.cwd(), 'public', 'mobile_hero_390_full.png'), Buffer.from(shotFullHero.data, 'base64'));
      console.log('Saved mobile_hero_390_full.png');
    }
  }

  // 3. Capture Desktop at 1440x900 to ensure desktop layout remains untouched
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });
  await new Promise(r => setTimeout(r, 600));

  const shotDesktop = await send('Page.captureScreenshot', { format: 'png' });
  if (shotDesktop?.data) {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'desktop_hero_verify.png'), Buffer.from(shotDesktop.data, 'base64'));
    console.log('Saved desktop_hero_verify.png');
  }

  ws.close();
  chrome.kill();
  process.exit(0);
}

capture().catch(console.error);
