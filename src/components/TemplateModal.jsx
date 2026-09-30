import { useEffect, useMemo, useState } from 'react';
import { X, Copy, Check, ExternalLink } from 'lucide-react';
import ScaledPreview from './ScaledPreview';

export default function TemplateModal({ template, config, onClose }) {
  const [copied, setCopied] = useState(false);

  const html = useMemo(() => template.buildHtml(config), [template, config]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const copyHtml = async () => {
    try {
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const openInTab = () => {
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-neutral-800">
          <div className="min-w-0">
            <h2 className="font-semibold text-neutral-100 tracking-tight truncate">{template.name}</h2>
            <p className="text-xs text-neutral-500 truncate">{template.trick}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={copyHtml}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-100 transition-colors"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy HTML'}
            </button>
            <button
              onClick={openInTab}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors"
            >
              <ExternalLink size={14} />
              Open in new tab
            </button>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto bg-neutral-900 p-4 sm:p-6">
          <div className="mx-auto" style={{ maxWidth: 1100 }}>
            <ScaledPreview html={html} width={1280} className="rounded-xl border border-neutral-800 shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}