const http = require('http');
const path = require('path');
const { spawn } = require('child_process');

async function checkScroll() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--remote-debugging-port=9230',
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions',
    '--window-size=1600,1050',
    '--user-data-dir=' + path.join(process.cwd(), '.snap-temp-scroll2'),
    'http://localhost:5175/'
  ]);

  let wsUrl = null;
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const targets = await new Promise((res, rej) => {
        http.get('http://127.0.0.1:9230/json', r => {
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
  
  // Wait until #trusted-clients exists
  console.log('Polling for #trusted-clients...');
  for (let i = 0; i < 60; i++) {
    const r = await send('Runtime.evaluate', {
      expression: "!!document.getElementById('trusted-clients')",
      returnByValue: true
    });
    if (r?.result?.value) {
      console.log(`Found #trusted-clients at attempt ${i}`);
      break;
    }
    await new Promise(res => setTimeout(res, 250));
  }

  const dump = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('trusted-clients');
      return {
        hasTrustedClients: !!el,
        windowScrollY: window.scrollY,
        htmlScrollTop: document.documentElement.scrollTop,
        bodyScrollTop: document.body.scrollTop,
        allScrollParents: (() => {
          const list = [];
          let cur = el;
          while (cur) {
            const cs = getComputedStyle(cur);
            list.push({
              tag: cur.tagName,
              id: cur.id,
              class: cur.className?.slice ? cur.className.slice(0, 40) : '',
              overflowY: cs.overflowY,
              scrollHeight: cur.scrollHeight,
              clientHeight: cur.clientHeight
            });
            cur = cur.parentElement;
          }
          return list;
        })()
      };
    })()`,
    returnByValue: true
  });
  console.log('DOM & Hierarchy dump:', JSON.stringify(dump?.result?.value, null, 2));

  ws.close();
  chrome.kill();
  process.exit(0);
}
checkScroll().catch(console.error);
