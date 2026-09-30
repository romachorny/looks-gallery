import { renderTemplate, logo, marquee, photoCard, pill } from './sharedKit';

export default {
  id: 'terminal',
  name: 'Terminal',
  trick: 'A typing terminal prompt that boots the brand',
  buildHtml(c) {
    const css = `
    body.mode-dark{}
    .term{max-width:760px;margin:40px auto;background:#0a0a0c;border:1px solid #2a2a30;border-radius:12px;overflow:hidden;box-shadow:0 30px 60px -30px rgba(0,0,0,.7);font-family:ui-monospace,'Courier New',monospace}
    .term .bar{display:flex;align-items:center;gap:7px;padding:12px 16px;background:#15151a;border-bottom:1px solid #2a2a30}
    .term .bar i{width:12px;height:12px;border-radius:50%;display:inline-block}
    .term .bar .t{margin-left:auto;color:#6a6a72;font-size:.74rem}
    .term .body{padding:22px;color:#c8f7c8;font-size:.94rem;line-height:1.7;min-height:220px}
    .term .body .prompt{color:var(--accent)}
    .term .body .cur{display:inline-block;width:9px;height:1.1em;background:#c8f7c8;vertical-align:-2px;animation:blink 1s steps(2) infinite}
    @keyframes blink{50%{opacity:0}}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}
    @media(max-width:760px){.grid{grid-template-columns:1fr}}
    `;
    const lines = [
      `boot ${c.businessName || 'terminal'} v1.0 ...`,
      `loading brand identity ... ok`,
      `mounting services ... ok`,
      `ready.`,
      `${c.businessName || 'user'}@looks:~$ run --live`
    ];
    const body = `
    <header class="site">${logo(c)}${pill(c, 'Run it', `Hi ${c.businessName||'there'}, let's run this live.`)}</header>
    ${marquee(c, ['deploy', 'build', 'ship', 'iterate'])}
    <section class="wrap">
      <div class="term reveal">
        <div class="bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span class="t">${c.businessName || 'terminal'} — bash</span></div>
        <div class="body" id="termout"><span class="cur"></span></div>
      </div>
      <div class="reveal" style="text-align:center;margin-top:24px">${pill(c, 'Deploy', `Hi, I want to deploy ${c.businessName||'this'}.`)}</div>
    </section>
    <section class="wrap"><div class="grid">
      ${photoCard(c, { seed: 'term-a', label: 'Stack' })}
      ${photoCard(c, { seed: 'term-b', label: 'Logs' })}
      ${photoCard(c, { seed: 'term-c', label: 'Ship' })}
    </div></section>
    <footer class="site">© ${c.businessName || 'Terminal'} — Terminal template</footer>
    <script>
    (function(){
      var out=document.getElementById('termout');if(!out)return;
      var lines=${JSON.stringify(lines)};
      var i=0,j=0,cur='';
      function type(){
        if(i>=lines.length){out.innerHTML=cur+'<span class="cur"></span>';return}
        var line=lines[i];
        if(j<line.length){cur+=line[j];j++;out.innerHTML=cur+'<span class="cur"></span>';setTimeout(type,28)}
        else{cur+='<br>';i++;j=0;out.innerHTML=cur+'<span class="cur"></span>';setTimeout(type,260)}
      }
      setTimeout(type,400);
    })();
    <\/script>`;
    return renderTemplate(c, { css, body });
  }
};