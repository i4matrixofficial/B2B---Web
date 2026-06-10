import { motion } from 'framer-motion';
import { ShieldCheck, Cloud, Activity, Building2, TrendingUp, Lock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const trustBadges: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: 'Bank-Grade Security' },
  { icon: Cloud, label: 'Cloud Infrastructure' },
  { icon: Activity, label: 'Real-Time Architecture' },
  { icon: Building2, label: 'Enterprise Ready' },
  { icon: TrendingUp, label: '99.9% Uptime SLA' },
  { icon: Lock, label: 'GDPR Compliant' },
];

const securityPills = ['SOC 2 Type II', 'ISO 27001', 'GDPR Ready', '256-bit SSL'];

export function TrustSection() {
  return (
    <section className="bg-white py-20 md:py-[120px] border-t border-[#E5E5E5]">
      <div className="max-w-content mx-auto px-5 md:px-10">
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-16">
          {trustBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <badge.icon className="w-6 h-6 text-brand-orange" />
              <span className="text-body-s text-text-secondary">{badge.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#F5F5F5] rounded-3xl p-8 md:p-12 max-w-[720px] mx-auto mb-16"
        >
          {/* Quote mark */}
          <span className="absolute top-6 left-8 md:top-8 md:left-12 text-display-xl text-brand-orange/30 font-extrabold select-none">
            &ldquo;
          </span>

          <blockquote className="relative z-10 text-heading-m text-text-primary font-medium leading-relaxed mt-4">
            i4van transformed how we manage staff transport. What used to take 3 people and a spreadsheet now happens automatically. Our staff love the app, and we&apos;ve cut transport costs by 30%.
          </blockquote>

          <div className="flex items-center gap-4 mt-8">
            <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-body-m">SK</span>
            </div>
            <div>
              <p className="text-body-m font-bold text-text-primary">Samantha Karunaratne</p>
              <p className="text-body-s text-text-secondary">Head of Operations, Colombo Logistics</p>
            </div>
          </div>
        </motion.div>

        {/* Security pills */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {securityPills.map((pill, i) => (
            <motion.span
              key={pill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="bg-[#F5F5F5] rounded-full px-4 py-2 text-body-s font-semibold text-text-primary"
            >
              {pill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
