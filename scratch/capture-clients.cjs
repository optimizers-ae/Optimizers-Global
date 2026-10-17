const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

async function capture() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9227;
  const tempProfile = path.join(process.cwd(), '.chrome-snap-clean2');

  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${port}`,
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions',
    '--window-size=1600,1050',
    `--user-data-dir=${tempProfile}`,
    'http://localhost:5175/'
  ]);

  let wsUrl = null;
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 250));
    try {
      const targets = await new Promise((resolve, reject) => {
        http.get(`http://127.0.0.1:${port}/json`, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
      });
      
      const pageTarget = targets.find(t => t.type === 'page');
      if (pageTarget && pageTarget.webSocketDebuggerUrl) {
        wsUrl = pageTarget.webSocketDebuggerUrl;
        console.log('Connected to target:', pageTarget.url);
        break;
      }
    } catch (e) {}
  }

  if (!wsUrl) {
    console.error('Could not find active page tab');
    chrome.kill();
    process.exit(1);
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
        if (msg.error) {
          console.error('CDP ERROR [' + method + ']:', JSON.stringify(msg.error));
        }
        resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('DOM.enable');

  // Listen for console logs
  ws.addEventListener('message', e => {
    const msg = JSON.parse(e.data);
    if (msg.method === 'Runtime.consoleAPICalled') {
      console.log('BROWSER CONSOLE:', msg.params.type, msg.params.args.map(a => a.value || a.description).join(' '));
    }
  });

  console.log('Waiting for #trusted-clients element to mount in DOM...');
  let mounted = false;
  for (let i = 0; i < 50; i++) {
    const check = await send('Runtime.evaluate', {
      expression: "!!document.getElementById('trusted-clients')",
      returnByValue: true
    });
    if (check && check.result && check.result.value) {
      mounted = true;
      console.log(`Mounted after ${i * 200}ms`);
      break;
    }
    await new Promise(r => setTimeout(r, 200));
  }

  const pageMetrics = await send('Runtime.evaluate', {
    expression: `({
      url: window.location.href,
      title: document.title,
      scrollHeight: document.documentElement.scrollHeight,
      clientHeight: document.documentElement.clientHeight,
      trustedClientsTop: document.getElementById('trusted-clients')?.getBoundingClientRect().top + window.scrollY,
      trustedClientsHeight: document.getElementById('trusted-clients')?.offsetHeight
    })`,
    returnByValue: true
  });
  console.log('Page metrics:', pageMetrics?.result?.value);

  // Take top screenshot first to see if anything is rendering at all!
  const topShot = await send('Page.captureScreenshot', { format: 'png' });
  if (topShot && topShot.data) {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'test_top.png'), Buffer.from(topShot.data, 'base64'));
    console.log('Saved test_top.png');
  }

  // Scroll to trusted-clients
  const targetTop = pageMetrics?.result?.value?.trustedClientsTop || 0;
  console.log('Scrolling window to:', targetTop);
  await send('Runtime.evaluate', {
    expression: `window.scrollTo({ top: ${targetTop}, behavior: 'instant' })`
  });

  await new Promise(r => setTimeout(r, 1500));

  const afterScrollMetrics = await send('Runtime.evaluate', {
    expression: `({
      scrollY: window.scrollY,
      trustedClientsBounding: document.getElementById('trusted-clients')?.getBoundingClientRect()
    })`,
    returnByValue: true
  });
  console.log('After scroll metrics:', afterScrollMetrics?.result?.value);

  const sectionShot = await send('Page.captureScreenshot', { format: 'png' });
  if (sectionShot && sectionShot.data) {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'trusted_clients_viewport.png'), Buffer.from(sectionShot.data, 'base64'));
    console.log('Saved trusted_clients_viewport.png');
  }

  ws.close();
  chrome.kill();
  process.exit(0);
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
