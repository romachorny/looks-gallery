import { renderTemplate, logo, marquee, photoCard, pill } from './sharedKit';

export default {
  id: 'bands',
  name: 'Bands',
  trick: 'Stacked horizontal colour bands that scroll past each other',
  buildHtml(c) {
    const css = `
    .bands{display:flex;flex-direction:column;gap:0;margin-top:10px}
    .band{padding:26px 0;overflow:hidden;white-space:nowrap;position:relative}
    .band b{font-size:clamp(2rem,7vw,5rem);font-weight:900;letter-spacing:-.02em;display:inline-block;animation:slide 18s linear infinite}
    .band:nth-child(odd) b{animation-direction:reverse}
    .band:nth-child(1){background:var(--accent);color:#fff}
    .band:nth-child(2){background:var(--card);color:var(--fg)}
    .band:nth-child(3){background:var(--fg);color:var(--bg)}
    .band:nth-child(4){background:color-mix(in srgb,var(--accent) 30%,var(--card));color:var(--fg)}
    @keyframes slide{to{transform:translateX(-50%)}}
    .hero{text-align:center;padding:30px 0}
    .hero p{color:var(--muted);max-width:520px;margin:14px auto}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}
    @media(max-width:760px){.grid{grid-template-columns:1fr}}
    `;
    const name = (c.businessName || 'BANDS').toUpperCase();
    const row = (t) => `<b>${t} · ${t} · ${t} · ${t} · ${t} · ${t} ·&nbsp;</b>`;
    const body = `
    <header class="site">${logo(c)}${pill(c, 'Book', `Hi ${c.businessName||'there'}, I'd like to book.`)}</header>
    <section class="wrap hero">
      <h1 class="reveal" style="font-size:clamp(2.4rem,7vw,5rem);font-weight:900;letter-spacing:-.03em">${c.businessName || 'Bands'}</h1>
      <p class="reveal">Four bands of colour, four directions of motion. A rhythm section for your brand.</p>
    </section>
    <div class="bands">
      <div class="band reveal">${row(name)}</div>
      <div class="band reveal">${row('EST 2026')}</div>
      <div class="band reveal">${row('OPEN NOW')}</div>
      <div class="band reveal">${row('WALK INS WELCOME')}</div>
    </div>
    ${marquee(c, ['Colour', 'Motion', 'Rhythm', 'Brand'])}
    <section class="wrap"><div class="grid">
      ${photoCard(c, { seed: 'bands-a', label: 'Set A' })}
      ${photoCard(c, { seed: 'bands-b', label: 'Set B' })}
      ${photoCard(c, { seed: 'bands-c', label: 'Set C' })}
    </div></section>
    <div class="reveal" style="text-align:center;padding:30px">${pill(c, 'Get started', `Hi, I want to get started with ${c.businessName||'Bands'}.`)}</div>
    <footer class="site">© ${c.businessName || 'Bands'} — Bands template</footer>`;
    return renderTemplate(c, { css, body });
  }
};