const http = require('http');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

async function test() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9200 + Math.floor(Math.random() * 600);
  const tempDir = path.join(os.tmpdir(), 'chrome-dbg-' + Date.now());

  const chrome = spawn(chromePath, [
    '--remote-debugging-port=' + port,
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--window-size=1600,1000',
    '--user-data-dir=' + tempDir,
    'http://localhost:5175/'
  ]);

  let wsUrl = null;
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const targets = await new Promise((res, rej) => {
        http.get('http://127.0.0.1:' + port + '/json', r => {
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
  await new Promise(r => setTimeout(r, 2000));

  // Scroll site-footer into view
  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('site-footer');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'end' });
    })()`,
    returnByValue: true
  });
  await new Promise(r => setTimeout(r, 1200));

  const res = await send('Runtime.evaluate', {
    expression: `(() => {
      const all = Array.from(document.querySelectorAll('*'));
      const scrollable = all.filter(el => el.scrollHeight > el.clientHeight && window.getComputedStyle(el).overflowY !== 'visible');
      return {
        bodyScrollTop: document.body.scrollTop,
        docScrollTop: document.documentElement.scrollTop,
        scrollable: scrollable.map(el => ({
          tag: el.tagName,
          id: el.id,
          class: el.className,
          scrollTop: el.scrollTop,
          scrollHeight: el.scrollHeight,
          clientHeight: el.clientHeight,
          overflowY: window.getComputedStyle(el).overflowY
        }))
      };
    })()`,
    returnByValue: true
  });

  console.log('Scrollable elements:', JSON.stringify(res.result.value, null, 2));

  ws.close();
  chrome.kill();
  process.exit(0);
}
test().catch(console.error);
