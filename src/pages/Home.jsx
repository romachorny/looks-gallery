import { useDeferredValue, useMemo, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { templates } from '@/lib/templates';
import ControlPanel from '@/components/ControlPanel';
import TemplateTile from '@/components/TemplateTile';
import TemplateModal from '@/components/TemplateModal';

const DEFAULT_CONFIG = {
  businessName: 'Lumière',
  accent: '#ff5a3c',
  logoStyle: 'two',
  mode: 'dark',
  whatsappNumber: '972500000000'
};

export default function Home() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [openId, setOpenId] = useState(null);
  const deferredConfig = useDeferredValue(config);

  const tilesHtml = useMemo(
    () => templates.map((t) => ({ template: t, html: t.buildHtml(deferredConfig) })),
    [deferredConfig]
  );

  const openTemplate = templates.find((t) => t.id === openId);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-neutral-400 flex items-center justify-center">
              <Sparkles size={16} className="text-neutral-900" />
            </div>
            <div className="leading-none">
              <div className="font-bold tracking-tight text-lg">LOOKS</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Template Gallery</div>
            </div>
          </div>
          <a
            href="https://genvidpro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-colors rounded-full border border-neutral-800 hover:border-neutral-600 px-3 py-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
            GenVidPro
          </a>
        </div>
      </header>

      {/* Body */}
      <main className="flex-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-10">
            <ControlPanel config={config} onChange={setConfig} />

            <section>
              <div className="flex items-end justify-between mb-5">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">12 ready-made looks</h1>
                  <p className="text-sm text-neutral-500 mt-1">Pick one, try it on live, copy the HTML.</p>
                </div>
                <span className="hidden sm:inline text-xs text-neutral-600 font-mono">{templates.length} templates</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                {tilesHtml.map(({ template, html }) => (
                  <TemplateTile
                    key={template.id}
                    template={template}
                    html={html}
                    onClick={() => setOpenId(template.id)}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800/80 py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center text-xs text-neutral-500">
          Made by GenVidPro, AI Creative Studio, Tel Aviv
        </div>
      </footer>

      {openTemplate && (
        <TemplateModal template={openTemplate} config={config} onClose={() => setOpenId(null)} />
      )}
    </div>
  );
}