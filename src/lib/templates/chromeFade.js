import { renderTemplate, logo, marquee, photoCard, pill } from './sharedKit';

export default {
  id: 'chrome-fade',
  name: 'Chrome Fade',
  trick: 'Polished chrome gradient text that fades up through the metal',
  buildHtml(c) {
    const css = `
    .hero{position:relative;z-index:5;padding:60px 0 30px;text-align:center}
    .chrome{font-size:clamp(3rem,11vw,9rem);font-weight:900;letter-spacing:-.03em;line-height:.9;
      background:linear-gradient(180deg,#fff 0%,#d9d9d9 30%,#7d7d7d 48%,#fff 52%,#bdbdbd 70%,#3a3a3a 100%);
      -webkit-background-clip:text;background-clip:text;color:transparent;
      -webkit-text-fill-color:transparent;background-size:100% 220%;animation:fadeup 1.4s ease both}
    @keyframes fadeup{from{opacity:0;background-position:0 120%}to{opacity:1;background-position:0 0}}
    .sub{color:var(--muted);max-width:560px;margin:18px auto 0;font-size:1.05rem}
    .bento{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:48px}
    .bento .photocard:nth-child(2){grid-row:span 2;aspect-ratio:1/2.1}
    .bento .photocard:nth-child(4){grid-column:span 2;aspect-ratio:2.2/1}
    .cta{margin-top:48px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
    @media(max-width:760px){.bento{grid-template-columns:1fr 1fr}.bento .photocard:nth-child(2){grid-row:auto;aspect-ratio:4/3}.bento .photocard:nth-child(4){grid-column:span 2}}
    `;
    const body = `
    <header class="site">${logo(c)}${pill(c, 'Book now', `Hello ${c.businessName||'there'}, I'd love to book a slot.`)}</header>
    <section class="hero wrap">
      <div class="chrome reveal">${c.businessName || 'CHROME'}</div>
      <p class="sub reveal">A polished, mirror-finish identity that fades up through liquid metal. Built for studios who want to look expensive.</p>
      <div class="cta reveal">${pill(c, 'Start a project', `Hi ${c.businessName||'there'}, I'd like to start a project.`)}${pill(c, 'See work', `Hi, show me your work.`, 'ghost')}</div>
    </section>
    ${marquee(c, ['Branding', 'Web Design', 'Motion', 'Photography'])}
    <section class="wrap" style="padding-top:48px">
      <div class="bento">
        ${photoCard(c, { seed: 'chrome-a', label: 'Identity' })}
        ${photoCard(c, { seed: 'chrome-b', label: 'Motion' })}
        ${photoCard(c, { seed: 'chrome-c', label: 'Web' })}
        ${photoCard(c, { seed: 'chrome-d', label: 'Print' })}
      </div>
    </section>
    <footer class="site">© ${c.businessName || 'Chrome'} — Chrome Fade template</footer>`;
    return renderTemplate(c, { css, body });
  }
};