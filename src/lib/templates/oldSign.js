import { renderTemplate, logo, marquee, photoCard, pill } from './sharedKit';

export default {
  id: 'old-sign',
  name: 'Old Sign',
  trick: 'A weathered, peeling painted sign with rust edges',
  buildHtml(c) {
    const css = `
    .signboard{max-width:720px;margin:40px auto;position:relative;padding:50px 40px;text-align:center;background:color-mix(in srgb,var(--accent) 14%,var(--card));border-radius:10px;box-shadow:inset 0 0 0 4px color-mix(in srgb,var(--fg) 80%,transparent),inset 0 0 0 10px var(--card),inset 0 0 0 14px color-mix(in srgb,var(--fg) 60%,transparent),0 30px 60px -30px rgba(0,0,0,.6);overflow:hidden}
    .signboard::before{content:"";position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='r'%3E%3CfeTurbulence baseFrequency='0.6' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23r)'/%3E%3C/svg%3E");opacity:.18;mix-blend-mode:multiply;pointer-events:none}
    .signboard h1{font-family:'Georgia',serif;font-size:clamp(2.4rem,8vw,5.4rem);font-weight:800;letter-spacing:-.01em;color:var(--fg);text-shadow:1px 1px 0 color-mix(in srgb,var(--fg) 40%,transparent);position:relative;z-index:2}
    .signboard .est{color:var(--muted);letter-spacing:.3em;font-size:.74rem;text-transform:uppercase;margin-top:10px;position:relative;z-index:2}
    .nail{position:absolute;width:10px;height:10px;border-radius:50%;background:color-mix(in srgb,var(--fg) 70%,transparent);box-shadow:inset 0 1px 2px rgba(255,255,255,.4)}
    .nail.tl{top:14px;left:14px}.nail.tr{top:14px;right:14px}.nail.bl{bottom:14px;left:14px}.nail.br{bottom:14px;right:14px}
    .hero p{color:var(--muted);max-width:520px;margin:18px auto 0;text-align:center}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}
    @media(max-width:760px){.grid{grid-template-columns:1fr}}
    `;
    const body = `
    <header class="site">${logo(c)}${pill(c, 'Step in', `Hi ${c.businessName||'there'}, I'm stepping in.`)}</header>
    ${marquee(c, ['Since 1962', 'Family Run', 'Same Spot', 'Honest Work'])}
    <section class="wrap hero">
      <div class="signboard reveal">
        <span class="nail tl"></span><span class="nail tr"></span><span class="nail bl"></span><span class="nail br"></span>
        <h1>${c.businessName || 'OLD SIGN'}</h1>
        <div class="est">Est. 1962 · Same Corner</div>
      </div>
      <p class="reveal">Hand-painted, a little faded, still swinging on the same hook. Some signs just don't need replacing.</p>
      <div class="reveal" style="text-align:center;margin-top:22px">${pill(c, 'Come by', `Hi, I'd like to come by ${c.businessName||'the shop'}.`)}</div>
    </section>
    <section class="wrap"><div class="grid">
      ${photoCard(c, { seed: 'sign-a', label: 'Front' })}
      ${photoCard(c, { seed: 'sign-b', label: 'Workshop' })}
      ${photoCard(c, { seed: 'sign-c', label: 'Detail' })}
    </div></section>
    <footer class="site">© ${c.businessName || 'Old Sign'} — Old Sign template</footer>`;
    return renderTemplate(c, { css, body });
  }
};