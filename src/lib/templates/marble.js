import { renderTemplate, logo, marquee, photoCard, pill } from './sharedKit';

export default {
  id: 'marble',
  name: 'Marble',
  trick: 'Foil gradient text wrapped on a circular path',
  buildHtml(c) {
    const css = `
    .seal{position:relative;width:300px;height:300px;margin:0 auto}
    .seal svg{width:100%;height:100%;animation:rot 26s linear infinite}
    @keyframes rot{to{transform:rotate(360deg)}}
    .seal .foil text{fill:url(#fo);font-family:Georgia,serif;font-size:13px;letter-spacing:4px;text-transform:uppercase}
    .seal .core{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column}
    .seal .core b{font-size:2.4rem;font-weight:900;background:linear-gradient(120deg,#fff,#c9a76a,#fff,#8a6a2a,#fff);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}
    .hero{text-align:center;padding:40px 0}
    .hero h1{font-size:clamp(2.4rem,7vw,5rem);font-weight:800;letter-spacing:-.02em}
    .hero p{color:var(--muted);max-width:540px;margin:16px auto}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}
    @media(max-width:760px){.grid{grid-template-columns:1fr}}
    `;
    const name = (c.businessName || 'MARBLE').toUpperCase();
    const body = `
    <header class="site">${logo(c)}${pill(c, 'Enquire', `Hi ${c.businessName||'there'}, I'd like to enquire.`)}</header>
    <section class="wrap hero">
      <div class="seal reveal">
        <svg viewBox="0 0 300 300">
          <defs><linearGradient id="fo" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#fff"/><stop offset=".4" stop-color="#d9b878"/><stop offset=".7" stop-color="#8a6a2a"/><stop offset="1" stop-color="#fff"/>
          </linearGradient></defs>
          <path id="circ" d="M150,150 m-118,0 a118,118 0 1,1 236,0 a118,118 0 1,1 -236,0" fill="none"/>
          <text><textPath href="#circ" startOffset="0">${name} • PREMIUM • STUDIO • EST. 2026 • </textPath></text>
        </svg>
        <div class="core"><b>${name.slice(0,1)}</b><span style="color:var(--muted);font-size:.7rem;letter-spacing:.2em">SINCE 2026</span></div>
      </div>
      <h1 class="reveal" style="margin-top:30px">${c.businessName || 'Marble'}</h1>
      <p class="reveal">Cool stone, warm gold. A studio identity carved for permanence, wrapped in a turning seal.</p>
      <div class="reveal" style="margin-top:22px">${pill(c, 'Book a consult', `Hi, I'd like a consultation with ${c.businessName||'the studio'}.`)}</div>
    </section>
    ${marquee(c, ['Interiors', 'Styling', 'Consulting', 'Bespoke'])}
    <section class="wrap"><div class="grid">
      ${photoCard(c, { seed: 'marble-a', label: 'Lobby' })}
      ${photoCard(c, { seed: 'marble-b', label: 'Suite' })}
      ${photoCard(c, { seed: 'marble-c', label: 'Detail' })}
    </div></section>
    <footer class="site">© ${c.businessName || 'Marble'} — Marble template</footer>`;
    return renderTemplate(c, { css, body });
  }
};