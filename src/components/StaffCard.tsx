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

export function StaffCard({ icon: Icon, label, title, description, features, ctaText, ctaHref }: Props) {
  return (
    <div className="rounded-3xl p-10 h-full flex flex-col" style={{ background: '#FFF7ED' }}>
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-8 self-start" style={{ background: 'rgba(249,115,22,0.15)', color: '#f97316' }}>
        <Icon className="w-3.5 h-3.5" />
        {label}
      </div>
      <h3 className="text-3xl font-bold leading-tight mb-3" style={{ color: '#1A1A1A' }}>{title}</h3>
      <p className="text-base leading-relaxed mb-8" style={{ color: '#6B7280' }}>{description}</p>
      <ul className="space-y-3 mb-10 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm" style={{ color: '#374151' }}>
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
  );
}