import { renderTemplate, logo, marquee, photoCard, pill } from './sharedKit';

export default {
  id: 'night-shift',
  name: 'Night Shift',
  trick: 'A flickering neon sign with a wet reflection',
  buildHtml(c) {
    const css = `
    body.mode-dark{} 
    .sign{font-family:'Courier New',monospace;font-size:clamp(2.6rem,9vw,6rem);font-weight:700;letter-spacing:.04em;color:#fff;text-shadow:0 0 6px var(--accent),0 0 18px var(--accent),0 0 40px var(--accent),0 0 80px var(--accent);animation:flick 3.6s infinite}
    @keyframes flick{0%,18%,22%,25%,53%,57%,100%{opacity:1}20%,24%,55%{opacity:.35}23%{opacity:.7}}
    .reflect{transform:scaleY(-1);opacity:.25;filter:blur(2px);-webkit-mask-image:linear-gradient(transparent 10%,#000 60%);mask-image:linear-gradient(transparent 10%,#000 60%);margin-top:-10px}
    .hero{text-align:center;padding:50px 0;position:relative;z-index:5}
    .hero p{color:var(--muted);max-width:520px;margin:18px auto}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}
    @media(max-width:760px){.grid{grid-template-columns:1fr}}
    `;
    const body = `
    <header class="site">${logo(c)}${pill(c, 'After dark', `Hi ${c.businessName||'there'}, I'm coming through tonight.`)}</header>
    ${marquee(c, ['Open Late', 'Cocktails', 'Music', 'Kitchen till 2am'])}
    <section class="wrap hero">
      <div class="sign reveal">${c.businessName || 'NIGHT SHIFT'}</div>
      <div class="sign reflect reveal" aria-hidden="true">${c.businessName || 'NIGHT SHIFT'}</div>
      <p class="reveal">Doors open when the sun goes down. Neon hum, low light, and a reflection that never quite sits still.</p>
      <div class="reveal" style="margin-top:22px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">${pill(c, 'Reserve a booth', `Hi, I'd like a booth at ${c.businessName||'the bar'} tonight.`)}${pill(c, 'Guest list', `Hi, add me to the guest list.`, 'ghost')}</div>
    </section>
    <section class="wrap"><div class="grid">
      ${photoCard(c, { seed: 'night-a', label: 'Bar' })}
      ${photoCard(c, { seed: 'night-b', label: 'Neon' })}
      ${photoCard(c, { seed: 'night-c', label: 'Booth' })}
    </div></section>
    <footer class="site">© ${c.businessName || 'Night Shift'} — Night Shift template</footer>`;
    return renderTemplate(c, { css, body });
  }
};