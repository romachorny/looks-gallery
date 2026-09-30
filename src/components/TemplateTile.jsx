import ScaledPreview from './ScaledPreview';

export default function TemplateTile({ template, html, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group text-left rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 focus:outline-none focus:ring-2 focus:ring-neutral-400"
    >
      <div className="relative overflow-hidden">
        <ScaledPreview html={html} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-[11px] font-medium text-white/90 bg-white/10 backdrop-blur px-2.5 py-1 rounded-full border border-white/15">
          Open full preview →
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-neutral-100 tracking-tight">{template.name}</h3>
          <span className="text-[10px] uppercase tracking-widest text-neutral-500">{template.id}</span>
        </div>
        <p className="mt-1 text-xs text-neutral-400 leading-relaxed">{template.trick}</p>
      </div>
    </button>
  );
}