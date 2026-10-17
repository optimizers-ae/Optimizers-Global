const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

async function testEcosystemCapture() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9200 + Math.floor(Math.random() * 600);
  const tempDir = path.join(os.tmpdir(), 'chrome-eco-' + Date.now());

  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${port}`,
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions',
    '--window-size=1672,941',
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

  ws.addEventListener('message', e => {
    try {
      const m = JSON.parse(e.data);
      if (m.method === 'Runtime.exceptionThrown') {
        console.error('BROWSER EXCEPTION:', m.params.exceptionDetails?.exception?.description || m.params.exceptionDetails?.text);
      }
    } catch (err) {}
  });

  let id = 1;
  const send = (m, p = {}) => new Promise((resolve) => {
    const curId = id++;
    const h = e => {
      const msg = JSON.parse(e.data);
      if (msg.id === curId) {
        ws.removeEventListener('message', h);
        if (msg.error) console.error('CDP Error [' + m + ']:', msg.error);
        resolve(msg.result);
      }
    };
    ws.addEventListener('message', h);
    ws.send(JSON.stringify({ id: curId, method: m, params: p }));
  });

  await send('Page.enable');
  await send('Runtime.enable');

  console.log('Waiting for #hero-section in DOM...');
  let mounted = false;
  for (let i = 0; i < 60; i++) {
    await new Promise(r => setTimeout(r, 300));
    const chk = await send('Runtime.evaluate', {
      expression: "!!document.getElementById('hero-section')",
      returnByValue: true
    });
    if (chk?.result?.value) {
      console.log(`Element mounted after ${(i + 1) * 300}ms!`);
      mounted = true;
      break;
    }
  }

  if (!mounted) {
    console.error('Did not mount');
    ws.close();
    chrome.kill();
    return;
  }

  // Scroll to top
  await send('Runtime.evaluate', {
    expression: `window.scrollTo(0, 0)`,
    returnByValue: true
  });

  // Allow animations and fonts to settle
  await new Promise(r => setTimeout(r, 1600));

  // Capture hero viewport
  const clipShot = await send('Page.captureScreenshot', {
    format: 'png',
    clip: {
      x: 0,
      y: 0,
      width: 1672,
      height: 941,
      scale: 1
    },
    captureBeyondViewport: true
  });

  if (clipShot?.data) {
    const out = path.join(process.cwd(), 'public', 'hero_capture.png');
    fs.writeFileSync(out, Buffer.from(clipShot.data, 'base64'));
    console.log('SUCCESS! Saved to:', out);
  } else {
    console.error('Failed to capture clipShot');
  }

  ws.close();
  chrome.kill();
  process.exit(0);
}

testEcosystemCapture().catch(console.error);
