const http = require('http');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

async function testReducedMotion() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9400 + Math.floor(Math.random() * 400);
  const tempDir = path.join(os.tmpdir(), 'chrome-rm-' + Date.now());

  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${port}`,
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions',
    '--window-size=1600,900',
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
  await send('Emulation.setEmulatedMedia', {
    features: [{ name: 'prefers-reduced-motion', value: 'reduce' }]
  });

  await send('Page.navigate', { url: 'http://localhost:5175/' });
  
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 100));
    const r = await send('Runtime.evaluate', {
      expression: '!!document.querySelector("#root > *")',
      returnByValue: true
    });
    if (r?.result?.value) break;
  }

  const check = await send('Runtime.evaluate', {
    expression: `(() => {
      return {
        overlayInDOM: !!document.querySelector('.curtain-overlay'),
        bodyOverflow: document.body.style.overflow,
        heroMounted: !!document.querySelector('#hero-section')
      };
    })()`,
    returnByValue: true
  });

  console.log('Reduced motion check:', check?.result?.value);
  ws.close();
  chrome.kill();
  process.exit(0);
}

testReducedMotion().catch(console.error);
