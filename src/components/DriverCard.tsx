import { Check, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export function DriverCard({ icon: Icon, label, title, description, features, ctaText, ctaHref }: Props) {
  return (
    <div className="rounded-3xl p-10 h-full flex flex-col" style={{ background: '#1A1A1A', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(to right, transparent, #f97316, transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="flex flex-col h-full" style={{ position: 'relative' }}>
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-8 self-start" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
          <Icon className="w-3.5 h-3.5" />
          {label}
        </div>
        <h3 className="text-3xl font-bold text-white leading-tight mb-3">{title}</h3>
        <p className="text-base leading-relaxed mb-8" style={{ color: '#A0A0A0' }}>{description}</p>
        <ul className="space-y-3 mb-10 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-sm" style={{ color: '#D0D0D0' }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(249,115,22,0.2)' }}>
                <Check className="w-3 h-3" style={{ color: '#f97316' }} />
              </span>
              {f}
            </li>
          ))}
        </ul>
        <a href={ctaHref} className="inline-flex items-center gap-2 text-sm font-semibold self-start" style={{ color: '#f97316' }}>
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}