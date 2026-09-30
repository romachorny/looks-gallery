// Shared kit: grain, auras, reveal, neon, pill, marquee, ken-burns photo cards.
// Every template composes these helpers so the whole gallery moves together.

const GRAIN_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E`;

export function waLink(config, message) {
  const digits = (config.whatsappNumber || '').replace(/\D/g, '');
  const text = encodeURIComponent(message || `Hi ${config.businessName || 'there'}, I'd like to know more.`);
  return `https://wa.me/${digits}?text=${text}`;
}

export function logo(config) {
  const name = config.businessName || 'Your Brand';
  const parts = name.split(' ');
  const first = parts[0];
  const rest = parts.slice(1).join(' ') || first;
  switch (config.logoStyle) {
    case 'two':
      return `<span class="logo lg-two"><b style="color:var(--fg)">${first}</b> <b style="color:var(--accent)">${rest}</b></span>`;
    case 'fonts':
      return `<span class="logo lg-fonts"><b style="font-family:Georgia,serif;font-weight:400">${first}</b><b style="font-family:'Helvetica Neue',sans-serif;font-weight:800;letter-spacing:-.02em">${rest}</b></span>`;
    case 'outline':
      return `<span class="logo lg-outline" style="color:transparent;-webkit-text-stroke:1.6px var(--fg)">${name}</span>`;
    default:
      return `<span class="logo lg-one" style="color:var(--fg)">${name}</span>`;
  }
}

export function grain() {
  return `<div class="grain" aria-hidden="true"></div>`;
}

export function auras(config) {
  const a = config.accent || '#ff5a3c';
  return `<div class="aura" style="width:46vw;height:46vw;left:-12vw;top:-10vh;background:${a}"></div>
  <div class="aura" style="width:38vw;height:38vw;right:-10vw;bottom:-12vh;background:${a};animation-delay:-7s"></div>`;
}

export function marquee(config, services) {
  const list = services || ['Open Daily', 'Walk-ins Welcome', 'Bookings Open', 'Local Favourite'];
  const items = [...list, ...list].map((s) => `<span>${s}</span><i>✦</i>`).join('');
  return `<div class="marquee" aria-hidden="true"><div class="marquee-track">${items}</div></div>`;
}

export function photoCard(config, opts) {
  const { src, label, seed } = opts;
  const url = src || `https://picsum.photos/seed/${seed || 'looks'}/800/600`;
  return `<div class="photocard reveal">
    <img src="${url}" alt="${label || ''}" loading="lazy"/>
    <div class="video-badge">◉ LOOP</div>
    <div class="timecode">00:00:00</div>
    <div class="progress"><div class="progress-bar"></div></div>
    ${label ? `<div class="pc-label">${label}</div>` : ''}
  </div>`;
}

export function pill(config, label, msg) {
  return `<a class="pill" href="${waLink(config, msg)}" target="_blank" rel="noopener"><span>${label}</span></a>`;
}

export function sharedCss(config) {
  const accent = config.accent || '#ff5a3c';
  return `
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%}
  body{font-family:'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden;line-height:1.5}
  body.mode-light{--bg:#f3efe8;--fg:#15120d;--card:#fffdf9;--muted:#6c6457;--line:rgba(0,0,0,.12)}
  body.mode-dark{--bg:#070708;--fg:#f3efe8;--card:#121216;--muted:#8b8b94;--line:rgba(255,255,255,.12)}
  body{background:var(--bg);color:var(--fg)}
  :root{--accent:${accent}}
  a{color:inherit}
  img{display:block;max-width:100%}
  .wrap{max-width:1180px;margin:0 auto;padding:0 24px}
  .grain{position:fixed;inset:0;pointer-events:none;z-index:9990;opacity:.05;mix-blend-mode:overlay;background-image:url("${GRAIN_SVG}");background-size:160px 160px;animation:grain 1.1s steps(3) infinite}
  @keyframes grain{0%{transform:translate(0,0)}33%{transform:translate(-4%,3%)}66%{transform:translate(3%,-2%)}100%{transform:translate(0,0)}}
  .aura{position:fixed;border-radius:50%;filter:blur(90px);opacity:.32;pointer-events:none;z-index:0;animation:drift 19s ease-in-out infinite}
  @keyframes drift{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(6vw,4vh) scale(1.15)}}
  .reveal{opacity:0;transform:translateY(26px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}
  .reveal.in{opacity:1;transform:none}
  .neon{color:var(--accent);text-shadow:0 0 6px var(--accent),0 0 18px var(--accent),0 0 42px color-mix(in srgb,var(--accent) 60%,transparent)}
  .pill{display:inline-flex;align-items:center;gap:.5rem;padding:.85rem 1.5rem;border-radius:999px;background:var(--accent);color:#fff;text-decoration:none;font-weight:700;font-size:.92rem;letter-spacing:.02em;position:relative;overflow:hidden;transition:transform .25s ease}
  .pill:hover{transform:translateY(-2px)}
  .pill::after{content:"";position:absolute;inset:0;background:linear-gradient(120deg,transparent 20%,rgba(255,255,255,.55) 50%,transparent 80%);transform:translateX(-130%);transition:transform .7s ease}
  .pill:hover::after{transform:translateX(130%)}
  .pill.ghost{background:transparent;color:var(--fg);box-shadow:inset 0 0 0 1.5px var(--fg)}
  .marquee{overflow:hidden;white-space:nowrap;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:14px 0;background:color-mix(in srgb,var(--accent) 8%,transparent)}
  .marquee-track{display:inline-flex;gap:22px;align-items:center;animation:scroll 26s linear infinite;font-weight:700;letter-spacing:.18em;font-size:.82rem;text-transform:uppercase}
  .marquee-track i{color:var(--accent);font-style:normal}
  @keyframes scroll{to{transform:translateX(-50%)}}
  .photocard{position:relative;overflow:hidden;border-radius:16px;aspect-ratio:4/3;background:var(--card);box-shadow:0 30px 60px -30px rgba(0,0,0,.5)}
  .photocard img{width:100%;height:100%;object-fit:cover;animation:kenburns 14s ease-in-out infinite alternate}
  @keyframes kenburns{from{transform:scale(1.02) translate(0,0)}to{transform:scale(1.16) translate(-3%,-3%)}}
  .video-badge{position:absolute;top:12px;left:12px;background:rgba(0,0,0,.6);color:#fff;font-size:.62rem;font-weight:800;letter-spacing:.14em;padding:5px 9px;border-radius:999px;backdrop-filter:blur(4px)}
  .timecode{position:absolute;top:12px;right:12px;background:rgba(0,0,0,.6);color:#0f0;font-family:ui-monospace,monospace;font-size:.62rem;padding:5px 8px;border-radius:6px;backdrop-filter:blur(4px)}
  .progress{position:absolute;left:12px;right:12px;bottom:12px;height:3px;background:rgba(255,255,255,.25);border-radius:999px;overflow:hidden}
  .progress-bar{height:100%;width:0;background:var(--accent);transition:width .2s linear}
  .pc-label{position:absolute;left:14px;bottom:22px;color:#fff;font-weight:800;text-shadow:0 1px 8px rgba(0,0,0,.6);font-size:1.05rem}
  header.site{position:relative;z-index:5;display:flex;align-items:center;justify-content:space-between;padding:22px 24px}
  .logo{font-weight:800;font-size:1.15rem;letter-spacing:-.01em;display:inline-flex;gap:.35em;align-items:baseline}
  footer.site{position:relative;z-index:5;padding:40px 24px;text-align:center;color:var(--muted);font-size:.82rem;border-top:1px solid var(--line);margin-top:60px}
  `;
}

export function sharedJs() {
  return `
  (function(){
    var io=new IntersectionObserver(function(es){es.forEach(function(e,i){if(e.isIntersecting){setTimeout(function(){e.target.classList.add('in')},i*90);io.unobserve(e.target)}})},{threshold:.12});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
    var bar=document.querySelector('.progress-bar');var tc=document.querySelector('.timecode');
    if(bar||tc){var f=0;setInterval(function(){f=(f+1)%1000;if(bar)bar.style.width=(f/10)+'%';if(tc){var m=String(Math.floor(f/600)%60).padStart(2,'0');var s=String(Math.floor(f/10)%60).padStart(2,'0');var fr=String(f%10).padStart(2,'0');tc.textContent=m+':'+s+':'+fr}},100)}
  })();
  `;
}

export function renderTemplate(config, { css = '', body = '' }) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${config.businessName || 'LOOKS'}</title>
  <style>${sharedCss(config)}${css}</style></head>
  <body class="mode-${config.mode || 'dark'}">${grain()}${auras(config)}${body}<script>${sharedJs()}<\/script></body></html>`;
}