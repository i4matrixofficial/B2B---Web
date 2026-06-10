import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className="feat-card group relative rounded-2xl p-7 cursor-default overflow-hidden transition-all duration-500"
      style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}
    >
      <style>{`
        .feat-card:hover .feat-fill { transform: translateY(0%) !important; }
        .feat-card:hover .feat-num { color: rgba(255,255,255,0.2) !important; }
        .feat-card:hover .feat-icon-wrap { background: rgba(255,255,255,0.2) !important; }
        .feat-card:hover .feat-icon { color: #fff !important; }
        .feat-card:hover .feat-title { color: #fff !important; }
        .feat-card:hover .feat-desc { color: rgba(255,255,255,0.75) !important; }
        .feat-card:hover { border-color: #f97316 !important; }
      `}</style>

      {/* Orange fill slides up on hover */}
      <div
        className="feat-fill absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, #f97316 0%, #ea6010 100%)',
          transform: 'translateY(100%)',
          transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Number watermark */}
      <span
        className="feat-num absolute top-5 right-6 font-bold select-none transition-colors duration-500"
        style={{ fontSize: 48, lineHeight: 1, color: 'rgba(0,0,0,0.05)', zIndex: 1 }}
      >
        {num}
      </span>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="feat-icon-wrap w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500"
          style={{ background: 'rgba(249,115,22,0.1)' }}
        >
          <Icon
            className="feat-icon w-5 h-5 transition-colors duration-500"
            style={{ color: '#f97316' }}
          />
        </div>

        <h3
          className="feat-title font-bold mb-3 transition-colors duration-500"
          style={{ fontSize: 15, color: '#1A1A1A' }}
        >
          {title}
        </h3>
        <p
          className="feat-desc text-sm leading-relaxed transition-colors duration-500"
          style={{ color: '#6B7280' }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}