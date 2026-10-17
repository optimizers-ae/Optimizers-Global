const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

async function testScrollInteraction() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9245;
  const tempDir = path.join(os.tmpdir(), 'chrome-scroll-' + Date.now());

  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${port}`,
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions',
    '--window-size=1600,1050',
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
    const cur = id++;
    const h = e => {
      const msg = JSON.parse(e.data);
      if (msg.id === cur) {
        ws.removeEventListener('message', h);
        resolve(msg.result);
      }
    };
    ws.addEventListener('message', h);
    ws.send(JSON.stringify({ id: cur, method: m, params: p }));
  });

  await send('Page.enable');
  await send('Runtime.enable');

  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 200));
    const chk = await send('Runtime.evaluate', {
      expression: "!!document.getElementById('trusted-clients')",
      returnByValue: true
    });
    if (chk?.result?.value) break;
  }

  // Click the Next button twice
  const scrollResult = await send('Runtime.evaluate', {
    expression: `(() => {
      const container = document.querySelector('[role=\"region\"][aria-label*=\"carousel\"]');
      if (!container) return { error: 'no container' };
      container.scrollTo({ left: 700, behavior: 'instant' });
      container.dispatchEvent(new Event('scroll'));
      return {
        scrollLeft: container.scrollLeft,
        scrollWidth: container.scrollWidth,
        clientWidth: container.clientWidth
      };
    })()`,
    returnByValue: true
  });
  console.log('Scrolled carousel:', scrollResult?.result?.value);

  await new Promise(r => setTimeout(r, 400));

  const rect = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('trusted-clients');
      const box = el.getBoundingClientRect();
      return {
        x: box.left + window.scrollX,
        y: box.top + window.scrollY,
        width: box.width,
        height: box.height
      };
    })()`,
    returnByValue: true
  });

  const r = rect?.result?.value;
  if (r) {
    const clipShot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: r.x,
        y: r.y,
        width: r.width,
        height: r.height,
        scale: 1
      },
      captureBeyondViewport: true
    });
    if (clipShot?.data) {
      fs.writeFileSync(path.join(process.cwd(), 'public', 'trusted_clients_scrolled.png'), Buffer.from(clipShot.data, 'base64'));
      console.log('Saved trusted_clients_scrolled.png');
    }
  }

  ws.close();
  chrome.kill();
  process.exit(0);
}

testScrollInteraction().catch(console.error);
