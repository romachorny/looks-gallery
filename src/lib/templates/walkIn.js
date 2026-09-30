import { renderTemplate, logo, marquee, photoCard, pill } from './sharedKit';

export default {
  id: 'walk-in',
  name: 'Walk In',
  trick: 'A glowing OPEN sign beside a street-front hero',
  buildHtml(c) {
    const css = `
    .front{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center;padding:40px 0}
    .openbox{display:inline-flex;align-items:center;gap:14px;padding:14px 20px;border-radius:14px;background:var(--card);border:1px solid var(--line);box-shadow:0 0 50px color-mix(in srgb,var(--accent) 35%,transparent)}
    .openbox .open{font-family:'Courier New',monospace;font-weight:800;font-size:1.6rem;color:var(--accent);text-shadow:0 0 12px var(--accent);animation:pulse 2.4s ease-in-out infinite}
    @keyframes pulse{50%{opacity:.55}}
    .openbox .dot{width:12px;height:12px;border-radius:50%;background:var(--accent);box-shadow:0 0 14px var(--accent);animation:pulse 1.4s infinite}
    .front h1{font-size:clamp(2.4rem,7vw,5rem);font-weight:900;letter-spacing:-.03em;line-height:.92}
    .front p{color:var(--muted);margin-top:14px;max-width:460px}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}
    @media(max-width:760px){.front{grid-template-columns:1fr}.grid{grid-template-columns:1fr}}
    `;
    const body = `
    <header class="site">${logo(c)}${pill(c, 'Walk in', `Hi ${c.businessName||'there'}, I'm walking in today.`)}</header>
    ${marquee(c, ['Walk-ins', 'No Appointment', 'Open Now', 'Corner Block'])}
    <section class="wrap front">
      <div>
        <div class="openbox reveal"><span class="dot"></span><span class="open">OPEN</span></div>
        <h1 class="reveal" style="margin-top:22px">${c.businessName || 'WALK IN'}</h1>
        <p class="reveal">No booking, no fuss. The light's on and the door's unlocked. Turn the corner and we're right here.</p>
        <div class="reveal" style="margin-top:20px;display:flex;gap:12px;flex-wrap:wrap">${pill(c, 'Get directions', `Hi, can you send directions to ${c.businessName||'the shop'}?`)}${pill(c, 'Call ahead', `Hi, I'd like to call ahead.`, 'ghost')}</div>
      </div>
      <div class="reveal">${photoCard(c, { seed: 'walk-a', label: 'Storefront' })}</div>
    </section>
    <section class="wrap"><div class="grid">
      ${photoCard(c, { seed: 'walk-b', label: 'Inside' })}
      ${photoCard(c, { seed: 'walk-c', label: 'Counter' })}
      ${photoCard(c, { seed: 'walk-d', label: 'Street' })}
    </div></section>
    <footer class="site">© ${c.businessName || 'Walk In'} — Walk In template</footer>`;
    return renderTemplate(c, { css, body });
  }
};