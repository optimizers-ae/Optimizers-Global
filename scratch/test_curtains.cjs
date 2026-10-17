const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

async function testCurtains() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9200 + Math.floor(Math.random() * 600);
  const tempDir = path.join(os.tmpdir(), 'chrome-curt-' + Date.now());

  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${port}`,
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions',
    '--window-size=1600,900',
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

  console.log('1. Navigating with ?replay=true...');
  await send('Page.navigate', { url: 'http://localhost:5175/?replay=true' });

  // Wait for timeline to be attached
  for (let i = 0; i < 50; i++) {
    await new Promise(r => setTimeout(r, 60));
    const res = await send('Runtime.evaluate', {
      expression: '!!window.__curtainsTimeline',
      returnByValue: true
    });
    if (res?.result?.value === true) {
      console.log('Timeline attached at check ' + i);
      break;
    }
  }

  // ── Test Phase 1 (0.15s) ──
  console.log('Pausing at Phase 1 (0.15s)...');
  await send('Runtime.evaluate', { expression: 'window.__curtainsTimeline && window.__curtainsTimeline.pause(0.15)' });
  await new Promise(r => setTimeout(r, 100));
  const shotP1 = await send('Page.captureScreenshot', { format: 'png' });
  if (shotP1?.data) {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'curtains_phase1_held.png'), Buffer.from(shotP1.data, 'base64'));
    console.log('Saved curtains_phase1_held.png');
  }

  // ── Test Phase 2 & 3 (0.75s: Curtains Parting + Wipe + Dissolve) ──
  console.log('Seeking to Phase 2 & 3 (0.75s)...');
  await send('Runtime.evaluate', { expression: 'window.__curtainsTimeline && window.__curtainsTimeline.pause(0.75)' });
  await new Promise(r => setTimeout(r, 100));
  const shotP2 = await send('Page.captureScreenshot', { format: 'png' });
  if (shotP2?.data) {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'curtains_phase2_parting.png'), Buffer.from(shotP2.data, 'base64'));
    console.log('Saved curtains_phase2_parting.png');
  }

  // ── Test Phase 4 (1.25s: Hero Reveal) ──
  console.log('Seeking to Phase 4 (1.25s)...');
  await send('Runtime.evaluate', { expression: 'window.__curtainsTimeline && window.__curtainsTimeline.pause(1.25)' });
  await new Promise(r => setTimeout(r, 100));
  const shotP4 = await send('Page.captureScreenshot', { format: 'png' });
  if (shotP4?.data) {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'curtains_phase4_revealed.png'), Buffer.from(shotP4.data, 'base64'));
    console.log('Saved curtains_phase4_revealed.png');
  }

  // ── Test Phase 5 (Complete & Cleanup) ──
  console.log('Resuming to end...');
  await send('Runtime.evaluate', { expression: 'window.__curtainsTimeline && window.__curtainsTimeline.play()' });
  await new Promise(r => setTimeout(r, 1200));

  const shotDone = await send('Page.captureScreenshot', { format: 'png' });
  if (shotDone?.data) {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'curtains_phase5_completed.png'), Buffer.from(shotDone.data, 'base64'));
    console.log('Saved curtains_phase5_completed.png');
  }

  // Check DOM state
  const evalCheck = await send('Runtime.evaluate', {
    expression: `(() => {
      return {
        overlayInDOM: !!document.querySelector('.curtain-overlay'),
        bodyOverflow: document.body.style.overflow,
        sessionStorageVal: sessionStorage.getItem('optimizers_curtains_played'),
        heroMounted: !!document.querySelector('#hero-section')
      };
    })()`,
    returnByValue: true
  });
  console.log('Post-animation state:', evalCheck?.result?.value);

  // ── Test Session Storage Revisit ──
  console.log('2. Reloading in same session without ?replay=true...');
  await send('Page.navigate', { url: 'http://localhost:5175/' });
  await new Promise(r => setTimeout(r, 800));

  const evalRevisit = await send('Runtime.evaluate', {
    expression: `(() => {
      return {
        overlayInDOMOnRevisit: !!document.querySelector('.curtain-overlay'),
        bodyOverflowOnRevisit: document.body.style.overflow,
        heroMountedOnRevisit: !!document.querySelector('#hero-section')
      };
    })()`,
    returnByValue: true
  });
  console.log('Revisit state (should NOT replay):', evalRevisit?.result?.value);

  ws.close();
  chrome.kill();
  console.log('All tests finished successfully!');
  process.exit(0);
}

testCurtains().catch(err => {
  console.error(err);
  process.exit(1);
});
