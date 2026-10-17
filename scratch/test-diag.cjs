const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

async function test() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--remote-debugging-port=9224',
    '--headless=new',
    '--no-sandbox',
    '--window-size=1600,1050',
    '--user-data-dir=' + path.join(__dirname, '.snap-diag-2'),
    'http://localhost:5175/'
  ]);

  let wsUrl = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9224/json', r => {
          let d = '';
          r.on('data', c => d += c);
          r.on('end', () => resolve(JSON.parse(d)));
        }).on('error', reject);
      });
      if (res && res[0] && res[0].webSocketDebuggerUrl) {
        wsUrl = res[0].webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  if (!wsUrl) {
    console.error('No WS URL');
    chrome.kill();
    return;
  }

  const ws = new globalThis.WebSocket(wsUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  const send = (m, p = {}) => new Promise(res => {
    const cur = id++;
    const h = e => {
      const msg = JSON.parse(e.data);
      if (msg.id === cur) { ws.removeEventListener('message', h); res(msg.result); }
    };
    ws.addEventListener('message', h);
    ws.send(JSON.stringify({ id: cur, method: m, params: p }));
  });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Log.enable');

  // Listen for console logs
  ws.addEventListener('message', e => {
    const msg = JSON.parse(e.data);
    if (msg.method === 'Runtime.consoleAPICalled') {
      console.log('CONSOLE:', msg.params.type, msg.params.args.map(a => a.value || a.description).join(' '));
    }
    if (msg.method === 'Runtime.exceptionThrown') {
      console.error('EXCEPTION:', msg.params.exceptionDetails);
    }
  });

  console.log('Waiting 3.5s for page to mount...');
  await new Promise(r => setTimeout(r, 3500));

  const diag = await send('Runtime.evaluate', {
    expression: JSON.stringify(`
      ({
        title: document.title,
        url: window.location.href,
        hasClientSection: !!document.getElementById('trusted-clients'),
        clientRect: document.getElementById('trusted-clients')?.getBoundingClientRect(),
        scrollY: window.scrollY,
        bodyHeight: document.body.scrollHeight
      })
    `),
    eval: true
  });

  const evalResult = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('trusted-clients');
      return {
        title: document.title,
        url: window.location.href,
        hasClientSection: !!el,
        rect: el ? { top: el.offsetTop, height: el.offsetHeight } : null,
        bodyHeight: document.body.scrollHeight
      };
    })()`,
    returnByValue: true
  });
  console.log('Page state:', evalResult?.result?.value);

  // Scroll to trusted-clients
  await send('Runtime.evaluate', {
    expression: `
      const el = document.getElementById('trusted-clients');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    `
  });
  await new Promise(r => setTimeout(r, 1000));

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  if (shot && shot.data) {
    const out = path.join(__dirname, 'client-section-diag.png');
    fs.writeFileSync(out, Buffer.from(shot.data, 'base64'));
    console.log('Captured screenshot to:', out);
  }

  ws.close();
  chrome.kill();
}

test().catch(console.error);
