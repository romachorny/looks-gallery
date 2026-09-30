import { renderTemplate, logo, marquee, photoCard, pill } from './sharedKit';

export default {
  id: 'zine',
  name: 'Zine',
  trick: 'A xerox zine look with strips of tape',
  buildHtml(c) {
    const css = `
    body.mode-light{--bg:#e9e6df}
    .zine{font-family:'Courier New',monospace;padding:40px 24px;max-width:760px;margin:0 auto}
    .tape{position:absolute;width:120px;height:30px;background:rgba(255,235,120,.7);box-shadow:0 2px 8px rgba(0,0,0,.2);transform:rotate(-4deg)}
    .page{position:relative;background:#fffdf6;color:#111;padding:30px;border:2px solid #111;box-shadow:14px 14px 0 #111;transform:rotate(-.6deg)}
    .page .tape.t1{top:-16px;left:30%}.page .tape.t2{bottom:-14px;right:18%;transform:rotate(5deg);background:rgba(120,200,255,.6)}
    .zine h1{font-size:clamp(2.2rem,7vw,4rem);text-transform:uppercase;letter-spacing:-.02em;line-height:.9}
    .zine h1 span{background:var(--accent);color:#111;padding:0 6px}
    .cols{column-count:2;column-gap:20px;margin-top:18px;font-size:.86rem;line-height:1.5}
    .cols p{margin-bottom:10px}
    @media(max-width:620px){.cols{column-count:1}}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:34px}
    @media(max-width:760px){.grid{grid-template-columns:1fr}}
    `;
    const body = `
    <header class="site">${logo(c)}${pill(c, 'Submit', `Hi ${c.businessName||'there'}, I'd like to submit.`)}</header>
    ${marquee(c, ['DIY', 'Photocopy', 'Independent', 'No Ads'])}
    <section class="zine">
      <div class="page reveal">
        <div class="tape t1"></div>
        <h1>${c.businessName || 'ZINE'}<br><span>ISSUE 01</span></h1>
        <div class="cols">
          <p>Photocopied, stapled, handed out the back door. No gloss, no algorithm, just ink on paper and a point to make.</p>
          <p>We print what the others won't. Send us your roughest cut and we'll run it.</p>
          <p>Tape on the spine. Coffee on the cover. That's the whole aesthetic.</p>
        </div>
        <div class="tape t2"></div>
      </div>
      <div class="reveal" style="margin-top:24px;text-align:center">${pill(c, 'Order a copy', `Hi, I want a copy of issue 01 from ${c.businessName||'the zine'}.`)}</div>
    </section>
    <section class="wrap"><div class="grid">
      ${photoCard(c, { seed: 'zine-a', label: 'Cover' })}
      ${photoCard(c, { seed: 'zine-b', label: 'Spread' })}
      ${photoCard(c, { seed: 'zine-c', label: 'Stack' })}
    </div></section>
    <footer class="site">© ${c.businessName || 'Zine'} — Zine template</footer>`;
    return renderTemplate(c, { css, body });
  }
};