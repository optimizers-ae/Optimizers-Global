const http = require('http');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

async function testAllBreakpoints() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9620 + Math.floor(Math.random() * 200);
  const tempDir = path.join(os.tmpdir(), 'chrome-widths-' + Date.now());

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
  await send('Page.navigate', { url: 'http://localhost:5175/?skip=true' });

  // Wait for hero
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 100));
    const res = await send('Runtime.evaluate', {
      expression: '!!document.getElementById("hero-section")',
      returnByValue: true
    });
    if (res?.result?.value) break;
  }

  const widths = [320, 360, 375, 390, 414, 430];
  const results = {};

  for (const w of widths) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: w,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await new Promise(r => setTimeout(r, 250));

    const check = await send('Runtime.evaluate', {
      expression: `(() => {
        const bodyWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        const heading = document.querySelector('#hero-section h1');
        const headlineText = heading ? heading.innerText : '';
        return {
          windowWidth: winWidth,
          scrollWidth: bodyWidth,
          hasHorizontalOverflow: bodyWidth > winWidth,
          standardFits: !headlineText.includes('STAND\\nARD')
        };
      })()`,
      returnByValue: true
    });
    results[w] = check?.result?.value;
  }

  console.log('Breakpoint Validation Results:');
  console.log(JSON.stringify(results, null, 2));

  ws.close();
  chrome.kill();
  process.exit(0);
}

testAllBreakpoints().catch(console.error);
