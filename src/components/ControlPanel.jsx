import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const LOGO_STYLES = [
  { value: 'one', label: 'One colour' },
  { value: 'two', label: 'Two colours' },
  { value: 'fonts', label: 'Two fonts' },
  { value: 'outline', label: 'Outline' }
];

const ACCENT_SWATCHES = ['#ff5a3c', '#6ee7b7', '#60a5fa', '#f472b6', '#fbbf24', '#a78bfa', '#f87171', '#22d3ee'];

function Field({ label, children }) {
  return (
    <div className="space-y-2">
      <Label className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">{label}</Label>
      {children}
    </div>
  );
}

export default function ControlPanel({ config, onChange }) {
  const set = (key) => (e) => onChange({ ...config, [key]: e.target.value });
  const setVal = (key, value) => onChange({ ...config, [key]: value });

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start space-y-5">
      <div>
        <h2 className="text-sm font-semibold text-neutral-200">Brand controls</h2>
        <p className="text-xs text-neutral-500 mt-0.5">Edits apply live to every preview.</p>
      </div>

      <Field label="Business name">
        <Input
          value={config.businessName}
          onChange={set('businessName')}
          placeholder="Your Brand"
          className="bg-neutral-900 border-neutral-800 text-neutral-100 placeholder:text-neutral-600"
        />
      </Field>

      <Field label="Accent colour">
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={config.accent}
            onChange={(e) => setVal('accent', e.target.value)}
            className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 cursor-pointer p-1"
            aria-label="Accent colour picker"
          />
          <Input
            value={config.accent}
            onChange={set('accent')}
            className="bg-neutral-900 border-neutral-800 text-neutral-100 font-mono text-xs"
          />
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {ACCENT_SWATCHES.map((c) => (
            <button
              key={c}
              onClick={() => setVal('accent', c)}
              className="w-6 h-6 rounded-full border border-white/10 hover:scale-110 transition-transform"
              style={{ background: c }}
              aria-label={`Accent ${c}`}
            />
          ))}
        </div>
      </Field>

      <Field label="Logo style">
        <Select value={config.logoStyle} onValueChange={(v) => setVal('logoStyle', v)}>
          <SelectTrigger className="bg-neutral-900 border-neutral-800 text-neutral-100">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-neutral-900 border-neutral-800 text-neutral-100">
            {LOGO_STYLES.map((s) => (
              <SelectItem key={s.value} value={s.value} className="focus:bg-neutral-800">
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field label="Theme">
        <div className="flex items-center justify-between rounded-lg bg-neutral-900 border border-neutral-800 px-3 py-2.5">
          <span className="text-sm text-neutral-300">{config.mode === 'dark' ? 'Dark' : 'Light'}</span>
          <Switch
            checked={config.mode === 'dark'}
            onCheckedChange={(checked) => setVal('mode', checked ? 'dark' : 'light')}
            aria-label="Toggle dark mode"
          />
        </div>
      </Field>

      <Field label="WhatsApp number">
        <Input
          value={config.whatsappNumber}
          onChange={set('whatsappNumber')}
          placeholder="972500000000"
          className="bg-neutral-900 border-neutral-800 text-neutral-100 placeholder:text-neutral-600 font-mono text-sm"
        />
        <p className="text-[11px] text-neutral-500">Country code, no plus. Buttons open a prefilled chat.</p>
      </Field>
    </aside>
  );
}