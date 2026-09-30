import { renderTemplate, logo, marquee, photoCard, pill } from './sharedKit';

export default {
  id: 'barber-pole',
  name: 'Barber Pole',
  trick: 'A rotating candy-stripe barber pole beside the name',
  buildHtml(c) {
    const css = `
    .pole{width:64px;height:200px;border-radius:999px;overflow:hidden;border:3px solid var(--fg);position:relative;box-shadow:0 0 40px color-mix(in srgb,var(--accent) 40%,transparent)}
    .pole i{position:absolute;inset:-50%;background:repeating-linear-gradient(115deg,var(--accent) 0 22px,#fff 22px 44px,var(--accent) 44px 66px);animation:spin 1.6s linear infinite}
    @keyframes spin{to{transform:translateX(-50%) rotate(0)}from{transform:translateX(0) rotate(0)}}
    .pole i{animation:pole 1.4s linear infinite}
    @keyframes pole{from{transform:translateX(-33%)}to{transform:translateX(0)}}
    .hero{display:grid;grid-template-columns:200px 1fr;gap:30px;align-items:center;padding:50px 0}
    .hero h1{font-size:clamp(2.6rem,8vw,6rem);font-weight:900;letter-spacing:-.03em;line-height:.92}
    .hero p{color:var(--muted);margin-top:14px;max-width:520px}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}
    @media(max-width:760px){.hero{grid-template-columns:1fr;text-align:center}.pole{margin:0 auto}.grid{grid-template-columns:1fr}}
    `;
    const body = `
    <header class="site">${logo(c)}${pill(c, 'Book a cut', `Hi ${c.businessName||'there'}, I'd like to book a haircut.`)}</header>
    ${marquee(c, ['Cuts', 'Shaves', 'Beards', 'Walk-ins Welcome'])}
    <section class="wrap hero">
      <div class="pole reveal"><i></i></div>
      <div>
        <h1 class="reveal">${c.businessName || 'BARBER'}</h1>
        <p class="reveal">Sharp cuts, hot towels, and a pole that never stops turning. Pull up, sit down, leave fresh.</p>
        <div style="margin-top:20px;display:flex;gap:12px;flex-wrap:wrap" class="reveal">${pill(c, 'Reserve chair', `Hi, I'd like to reserve a chair at ${c.businessName||'the shop'}.`)}${pill(c, 'Gift card', `Hi, do you sell gift cards?`, 'ghost')}</div>
      </div>
    </section>
    <section class="wrap"><div class="grid">
      ${photoCard(c, { seed: 'barber-a', label: 'Fade' })}
      ${photoCard(c, { seed: 'barber-b', label: 'Beard' })}
      ${photoCard(c, { seed: 'barber-c', label: 'Hot Towel' })}
    </div></section>
    <footer class="site">© ${c.businessName || 'Barber'} — Barber Pole template</footer>`;
    return renderTemplate(c, { css, body });
  }
};