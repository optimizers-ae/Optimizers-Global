const http = require('http');
const path = require('path');
const { spawn } = require('child_process');

async function check() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9222;
  const userDataDir = path.join(process.cwd(), '.chrome-snap-profile');

  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${port}`,
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--window-size=1600,1000',
    `--user-data-dir=${userDataDir}`,
    'http://localhost:5175/'
  ]);

  let wsUrl = null;
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 300));
    try {
      const res = await new Promise((resolve, reject) => {
        http.get(`http://127.0.0.1:${port}/json`, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
      });
      if (res && res[0] && res[0].webSocketDebuggerUrl) {
        wsUrl = res[0].webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  const ws = new globalThis.WebSocket(wsUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  const send = (method, params = {}) => new Promise(resolve => {
    const curId = id++;
    const handler = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === curId) {
        ws.removeEventListener('message', handler);
        resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data);
    if (msg.method === 'Runtime.consoleAPICalled') {
      console.log('CONSOLE:', msg.params.type, msg.params.args.map(a => a.value || a.description).join(' '));
    } else if (msg.method === 'Runtime.exceptionThrown') {
      console.error('EXCEPTION:', JSON.stringify(msg.params.exceptionDetails));
    }
  });

  await send('Page.enable');
  await send('Runtime.enable');

  await new Promise(r => setTimeout(r, 3500));

  const html = await send('Runtime.evaluate', {
    expression: 'document.body.innerHTML',
    returnByValue: true
  });

  console.log('HTML length:', html.result.value.length);
  console.log('Section IDs:', (await send('Runtime.evaluate', {
    expression: 'Array.from(document.querySelectorAll("section")).map(s => s.id || s.className)',
    returnByValue: true
  })).result.value);

  ws.close();
  chrome.kill();
  process.exit(0);
}

check().catch(console.error);
