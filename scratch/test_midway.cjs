const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

async function testPartial() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9200 + Math.floor(Math.random() * 600);
  const tempDir = path.join(os.tmpdir(), 'chrome-mid-' + Date.now());

  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${port}`,
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions',
    '--window-size=1600,1000',
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

  await new Promise(r => setTimeout(r, 1500));

  // Scroll midway through reveal (450px above bottom)
  await send('Runtime.evaluate', {
    expression: `window.scrollTo(0, 13457 - 450)`,
    returnByValue: true
  });
  await new Promise(r => setTimeout(r, 800));

  const shot = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false
  });

  if (shot?.data) {
    const out = path.join(process.cwd(), 'public', 'footer_reveal_midway.png');
    fs.writeFileSync(out, Buffer.from(shot.data, 'base64'));
    console.log('Saved footer_reveal_midway.png');
  }

  ws.close();
  chrome.kill();
  process.exit(0);
}

testPartial().catch(console.error);
