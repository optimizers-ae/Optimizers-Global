const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

async function testResponsive(w, h, outName) {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9200 + Math.floor(Math.random() * 600);
  const tempDir = path.join(os.tmpdir(), 'chrome-resp-' + Date.now());

  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${port}`,
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions',
    `--window-size=${w},${h}`,
    `--user-data-dir=${tempDir}`,
    'http://localhost:5175/'
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

  if (!wsUrl) {
    chrome.kill();
    return;
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

  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 200));
    const chk = await send('Runtime.evaluate', {
      expression: "!!document.getElementById('hero-section')",
      returnByValue: true
    });
    if (chk?.result?.value) break;
  }

  await new Promise(r => setTimeout(r, 1200));

  const shot = await send('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 0, width: w, height: h, scale: 1 },
    captureBeyondViewport: true
  });

  if (shot?.data) {
    const out = path.join(process.cwd(), 'public', outName);
    fs.writeFileSync(out, Buffer.from(shot.data, 'base64'));
    console.log(`Saved ${outName} (${w}x${h})`);
  }

  ws.close();
  chrome.kill();
}

async function run() {
  await testResponsive(390, 844, 'hero_mobile.png');
  await testResponsive(768, 1024, 'hero_tablet.png');
  process.exit(0);
}

run().catch(console.error);
