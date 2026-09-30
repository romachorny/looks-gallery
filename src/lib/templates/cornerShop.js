import { renderTemplate, logo, marquee, photoCard, pill } from './sharedKit';

export default {
  id: 'corner-shop',
  name: 'Corner Shop',
  trick: 'A ticket card with perforated edge',
  buildHtml(c) {
    const css = `
    .ticket{position:relative;background:var(--card);border-radius:14px;max-width:680px;margin:40px auto;padding:34px 38px;box-shadow:0 30px 60px -30px rgba(0,0,0,.5);border:1.5px dashed var(--line)}
    .ticket::before,.ticket::after{content:"";position:absolute;top:50%;width:26px;height:26px;border-radius:50%;background:var(--bg);transform:translateY(-50%)}
    .ticket::before{left:-13px}.ticket::after{right:-13px}
    .ticket .row{display:flex;justify-content:space-between;align-items:center;border-bottom:1px dashed var(--line);padding:10px 0;font-size:.9rem}
    .ticket .row span{color:var(--muted);text-transform:uppercase;letter-spacing:.1em;font-size:.72rem}
    .ticket h1{font-size:clamp(2rem,6vw,3.4rem);font-weight:900;letter-spacing:-.02em;margin:14px 0}
    .stub{display:flex;gap:14px;flex-wrap:wrap;align-items:center;margin-top:18px}
    .hero{text-align:center;padding:30px 0}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}
    @media(max-width:760px){.grid{grid-template-columns:1fr}}
    `;
    const body = `
    <header class="site">${logo(c)}${pill(c, 'Order', `Hi ${c.businessName||'there'}, I'd like to place an order.`)}</header>
    ${marquee(c, ['Fresh Daily', 'Local', 'Takeaway', 'Loyalty Stamps'])}
    <section class="wrap hero">
      <div class="ticket reveal">
        <div class="row"><span>Admit One</span><span style="color:var(--accent);font-weight:800">№ 0426</span></div>
        <h1>${c.businessName || 'Corner Shop'}</h1>
        <p style="color:var(--muted)">Your neighbourhood spot. Coffee, pastries, and a warm seat by the window — ticket stubs welcome.</p>
        <div class="row" style="border-bottom:none"><span>Open 7am – 6pm</span><span>Walk-ins welcome</span></div>
        <div class="stub">${pill(c, 'Reserve a table', `Hi, I'd like to reserve a table at ${c.businessName||'the shop'}.`)}${pill(c, 'Menu', `Hi, can you send the menu?`, 'ghost')}</div>
      </div>
    </section>
    <section class="wrap"><div class="grid">
      ${photoCard(c, { seed: 'shop-a', label: 'Counter' })}
      ${photoCard(c, { seed: 'shop-b', label: 'Pastry' })}
      ${photoCard(c, { seed: 'shop-c', label: 'Window' })}
    </div></section>
    <footer class="site">© ${c.businessName || 'Corner Shop'} — Corner Shop template</footer>`;
    return renderTemplate(c, { css, body });
  }
};