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

export function CompanyCard({ icon: Icon, label, title, description, features, ctaText, ctaHref }: Props) {
  return (
    <div className="flex flex-col lg:flex-row bg-[#111111] rounded-3xl overflow-hidden">
      <div className="flex-1 p-10 lg:p-14" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-8" style={{ background: 'rgba(249,115,22,0.2)', color: '#f97316' }}>
            <Icon className="w-3.5 h-3.5" />
            {label}
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">{title}</h3>
          <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: '#A0A0A0' }}>{description}</p>
          <a href={ctaHref} className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full transition-all duration-300" style={{ background: '#f97316', color: '#fff' }}>
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="lg:w-[340px] p-10 lg:p-12 flex flex-col justify-center" style={{ background: 'rgba(255,255,255,0.05)', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
        <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#666' }}>What's included</p>
        <ul className="space-y-4">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-sm" style={{ color: '#D0D0D0' }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(249,115,22,0.2)' }}>
                <Check className="w-3 h-3" style={{ color: '#f97316' }} />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}