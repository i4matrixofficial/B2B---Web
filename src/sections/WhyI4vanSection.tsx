import { motion } from 'framer-motion';
import { ShieldCheck, Users, Cloud, Lock, Zap, BarChart3, CreditCard, Settings } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { useInViewCounter } from '@/hooks/useInViewCounter';

const stats = [
  { target: 500, suffix: '+', label: 'Vehicles managed daily', decimals: 0 },
  { target: 150, suffix: '+', label: 'Companies trust i4van', decimals: 0 },
  { target: 99.9, suffix: '%', label: 'Platform uptime guaranteed', decimals: 1 },
  { target: 4.8, suffix: '/5', label: 'Average app store rating', decimals: 1 },
];

const capabilitiesLeft = [
  { icon: ShieldCheck, text: 'Bank-grade data encryption' },
  { icon: Users, text: 'Role-based access control' },
  { icon: Cloud, text: 'Cloud-based, no local servers needed' },
  { icon: Lock, text: 'GDPR & data protection compliant' },
];

const capabilitiesRight = [
  { icon: Zap, text: 'Real-time GPS & instant updates' },
  { icon: BarChart3, text: 'Advanced analytics & reporting' },
  { icon: CreditCard, text: 'Flexible payment options' },
  { icon: Settings, text: 'Multi-company & multi-tenant' },
];

function StatCard({ target, suffix, label, decimals }: typeof stats[0]) {
  const { ref, value } = useInViewCounter(target, 2000, decimals);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-dark-surface border border-dark-border rounded-2xl p-8"
    >
      <div className="flex items-start">
        <span className="text-display-l text-brand-orange font-extrabold">
          {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}
        </span>
        <span className="text-heading-m text-brand-orange font-bold mt-2 ml-0.5">{suffix}</span>
      </div>
      <p className="text-label-l text-[#A0A0A0] mt-2">{label}</p>
    </motion.div>
  );
}

function CapabilityList({ items, title }: { items: typeof capabilitiesLeft; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h3 className="text-heading-m text-white mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.text} className="flex items-center gap-3">
            <item.icon className="w-5 h-5 text-brand-orange flex-shrink-0" />
            <span className="text-body-m text-[#A0A0A0]">{item.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function WhyI4vanSection() {
  return (
    <section id="why-i4van" className="relative bg-dark py-20 md:py-[120px] overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-content mx-auto px-5 md:px-10">
        <SectionHeader
          label="Why i4van"
          heading={
            <>
              Built for the way{' '}
              <span className="text-brand-orange">modern</span>
              <br />
              companies move
            </>
          }
          description="We combine enterprise-grade infrastructure with an intuitive experience — so you can focus on your business, not your transport logistics."
          align="left"
          light
        />

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <CapabilityList items={capabilitiesLeft} title="Enterprise Security" />
          <CapabilityList items={capabilitiesRight} title="Operational Excellence" />
        </div>
      </div>
    </section>
  );
}
