const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

async function testFooterRevealCapture() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9200 + Math.floor(Math.random() * 600);
  const tempDir = path.join(os.tmpdir(), 'chrome-rev-' + Date.now());

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

  if (!wsUrl) {
    console.error('No WS found');
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

  console.log('Waiting for #site-footer-reveal-container...');
  for (let i = 0; i < 50; i++) {
    await new Promise(r => setTimeout(r, 300));
    const chk = await send('Runtime.evaluate', {
      expression: "!!document.getElementById('site-footer-reveal-container')",
      returnByValue: true
    });
    if (chk?.result?.value) break;
  }

  // Scroll reveal container into view
  const scrollRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('site-footer-reveal-container');
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'end' });
        return { scrolled: true, top: el.getBoundingClientRect().top, scrollY: window.scrollY };
      }
      return { scrolled: false };
    })()`,
    returnByValue: true
  });
  console.log('Scroll Result:', scrollRes?.result?.value);
  await new Promise(r => setTimeout(r, 1200));

  // Capture viewport at current scroll position
  const shotBottom = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false
  });

  if (shotBottom?.data) {
    const out = path.join(process.cwd(), 'public', 'footer_reveal_bottom.png');
    fs.writeFileSync(out, Buffer.from(shotBottom.data, 'base64'));
    console.log('SUCCESS! Saved footer_reveal_bottom.png');
  }

  ws.close();
  chrome.kill();
  process.exit(0);
}

testFooterRevealCapture().catch(console.error);
