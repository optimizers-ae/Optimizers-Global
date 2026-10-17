const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9235;
  const tempDir = path.join(process.cwd(), '.chrome-bp-snap');

  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${port}`,
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions',
    '--window-size=1600,1050',
    `--user-data-dir=${tempDir}`
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
      const t = targets.find(t => t.type === 'page');
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
  const send = (m, p = {}) => new Promise((resolve, reject) => {
    const cur = id++;
    const h = e => {
      const msg = JSON.parse(e.data);
      if (msg.id === cur) {
        ws.removeEventListener('message', h);
        if (msg.error) console.error('CDP Error:', m, msg.error);
        resolve(msg.result);
      }
    };
    ws.addEventListener('message', h);
    ws.send(JSON.stringify({ id: cur, method: m, params: p }));
  });

  await send('Page.enable');
  await send('Runtime.enable');

  console.log('Navigating to http://localhost:5175/ ...');
  await send('Page.navigate', { url: 'http://localhost:5175/' });

  // Wait for #trusted-clients
  console.log('Waiting for #trusted-clients...');
  for (let i = 0; i < 80; i++) {
    await new Promise(r => setTimeout(r, 250));
    const chk = await send('Runtime.evaluate', {
      expression: "!!document.getElementById('trusted-clients')",
      returnByValue: true
    });
    if (chk?.result?.value) {
      console.log(`Element found after ${(i + 1) * 250}ms!`);
      break;
    }
  }

  // Check element metrics and scroll containers
  const evalMetrics = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('trusted-clients');
      if (!el) return { error: 'not mounted' };
      
      const r = el.getBoundingClientRect();
      return {
        top: r.top,
        left: r.left,
        width: r.width,
        height: r.height,
        windowScrollY: window.scrollY,
        htmlScrollTop: document.documentElement.scrollTop,
        bodyScrollTop: document.body.scrollTop
      };
    })()`,
    returnByValue: true
  });
  console.log('Metrics before scroll:', evalMetrics?.result?.value);

  // Now scroll element into view
  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('trusted-clients');
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    })()`
  });

  await new Promise(r => setTimeout(r, 1500));

  const afterMetrics = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('trusted-clients');
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        top: r.top,
        left: r.left,
        width: r.width,
        height: r.height,
        windowScrollY: window.scrollY,
        htmlScrollTop: document.documentElement.scrollTop
      };
    })()`,
    returnByValue: true
  });
  console.log('Metrics after scrollIntoView:', afterMetrics?.result?.value);

  // Capture screenshot of viewport
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  if (shot && shot.data) {
    const out = path.join(process.cwd(), 'public', 'trusted_clients_view.png');
    fs.writeFileSync(out, Buffer.from(shot.data, 'base64'));
    console.log('Saved viewport screenshot:', out);
  }

  // Also capture exact element bounding box screenshot
  if (afterMetrics?.result?.value) {
    const m = afterMetrics.result.value;
    const clipShot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: Math.max(0, m.left),
        y: Math.max(0, m.top),
        width: Math.min(1600, m.width),
        height: Math.min(1050, m.height),
        scale: 1
      }
    });
    if (clipShot && clipShot.data) {
      const clipOut = path.join(process.cwd(), 'public', 'trusted_clients_clip.png');
      fs.writeFileSync(clipOut, Buffer.from(clipShot.data, 'base64'));
      console.log('Saved clipped screenshot:', clipOut);
    }
  }

  ws.close();
  chrome.kill();
  process.exit(0);
}

run().catch(console.error);
