import { renderTemplate, logo, marquee, photoCard, pill } from './sharedKit';

export default {
  id: 'the-column',
  name: 'The Column',
  trick: 'A single narrow column with a huge drop cap',
  buildHtml(c) {
    const css = `
    .col{max-width:560px;margin:40px auto;font-family:Georgia,serif}
    .col h1{font-size:clamp(2.2rem,6vw,3.6rem);font-weight:800;letter-spacing:-.02em;line-height:1}
    .col p{font-size:1.12rem;line-height:1.7;margin-top:18px;color:var(--fg)}
    .col p:first-of-type::first-letter{float:left;font-size:5.6rem;line-height:.8;font-weight:900;padding:6px 12px 0 0;color:var(--accent);font-family:Georgia,serif}
    .byline{color:var(--muted);font-size:.82rem;letter-spacing:.18em;text-transform:uppercase;margin-top:8px}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}
    @media(max-width:760px){.grid{grid-template-columns:1fr}}
    `;
    const body = `
    <header class="site">${logo(c)}${pill(c, 'Read more', `Hi ${c.businessName||'there'}, I'd like to read more.`)}</header>
    ${marquee(c, ['Long Read', 'Essays', 'Reporting', 'Weekly'])}
    <section class="wrap">
      <article class="col">
        <div class="byline reveal">Issue 12 · ${c.businessName || 'The Column'}</div>
        <h1 class="reveal">A quiet kind of confidence.</h1>
        <p class="reveal">There is a reason the column never goes out of style. It gives a single voice room to breathe, a single thought room to land, and a single reader the patience to finish. We built our brand the same way — one line at a time, no shouting.</p>
        <p class="reveal">So this is the part where you decide whether to keep reading. We hope you do. There is more below, and a button at the end that does exactly what it says.</p>
        <div class="reveal" style="margin-top:26px">${pill(c, 'Subscribe', `Hi, I'd like to subscribe to ${c.businessName||'the column'}.`)}</div>
      </article>
    </section>
    <section class="wrap"><div class="grid">
      ${photoCard(c, { seed: 'col-a', label: 'Desk' })}
      ${photoCard(c, { seed: 'col-b', label: 'Archive' })}
      ${photoCard(c, { seed: 'col-c', label: 'Press' })}
    </div></section>
    <footer class="site">© ${c.businessName || 'The Column'} — The Column template</footer>`;
    return renderTemplate(c, { css, body });
  }
};