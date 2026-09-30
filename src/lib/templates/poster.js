import { renderTemplate, logo, marquee, photoCard, pill } from './sharedKit';

export default {
  id: 'poster',
  name: 'Poster',
  trick: 'Diagonal clip-path stripes cutting across the headline',
  buildHtml(c) {
    const css = `
    .poster{position:relative;min-height:62vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;overflow:hidden;padding:50px 24px}
    .poster h1{font-size:clamp(3rem,12vw,10rem);font-weight:900;letter-spacing:-.04em;line-height:.86;position:relative;z-index:3}
    .poster h1 .cut{color:var(--accent);-webkit-background-clip:text;background-clip:text}
    .stripe{position:absolute;inset:0;background:var(--accent);clip-path:polygon(0 38%,100% 18%,100% 46%,0 66%);opacity:.9;z-index:1;mix-blend-mode:multiply}
    .stripe.two{background:var(--fg);clip-path:polygon(0 60%,100% 40%,100% 64%,0 84%);opacity:.85}
    .poster p{position:relative;z-index:3;color:var(--muted);max-width:520px;margin-top:18px}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}
    @media(max-width:760px){.grid{grid-template-columns:1fr}}
    `;
    const body = `
    <header class="site">${logo(c)}${pill(c, 'Get tickets', `Hi ${c.businessName||'there'}, I want tickets.`)}</header>
    ${marquee(c, ['Live', 'Loud', 'Limited Run', 'Doors 8pm'])}
    <section class="poster">
      <div class="stripe"></div><div class="stripe two"></div>
      <h1 class="reveal">${c.businessName || 'POSTER'}<br><span class="cut">LIVE</span></h1>
      <p class="reveal">One night. One wall of sound. A poster so loud you can hear it.</p>
      <div class="reveal" style="margin-top:22px;z-index:3;position:relative">${pill(c, 'Reserve spot', `Hi, reserve me a spot at ${c.businessName||'the show'}.`)}</div>
    </section>
    <section class="wrap"><div class="grid">
      ${photoCard(c, { seed: 'poster-a', label: 'Stage' })}
      ${photoCard(c, { seed: 'poster-b', label: 'Crowd' })}
      ${photoCard(c, { seed: 'poster-c', label: 'Backstage' })}
    </div></section>
    <footer class="site">© ${c.businessName || 'Poster'} — Poster template</footer>`;
    return renderTemplate(c, { css, body });
  }
};