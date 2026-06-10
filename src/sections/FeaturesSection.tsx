import { motion } from 'framer-motion';
import { MapPin, Armchair, KeyRound, Route, Bell, BarChart3, Receipt, Layers } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';

const features = [
  {
    icon: MapPin,
    title: 'Live GPS Tracking',
    description: 'Watch every vehicle in real-time. Know exactly where your fleet is, at any moment.',
  },
  {
    icon: Armchair,
    title: 'Smart Seat Booking',
    description: 'Staff reserve seats in advance. No overbooking, no confusion, no empty seats.',
  },
  {
    icon: KeyRound,
    title: 'Attendance PIN',
    description: 'Drivers verify attendance with secure PINs. Automatic records, zero paperwork.',
  },
  {
    icon: Route,
    title: 'Route Optimization',
    description: 'Routes that adapt to traffic, saving time and fuel on every trip.',
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    description: 'Instant alerts for delays, arrivals, and important updates to staff and drivers.',
  },
  {
    icon: BarChart3,
    title: 'Fleet Analytics',
    description: 'Detailed reports on usage, costs, attendance, and performance — exportable anytime.',
  },
  {
    icon: Receipt,
    title: 'Smart Billing',
    description: 'Automated billing based on actual trips and attendance. Transparent and accurate.',
  },
  {
    icon: Layers,
    title: 'Multi-Company Support',
    description: 'Manage multiple companies from a single dashboard. Perfect for large groups.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function FeaturesSection() {
  return (
    <section
      className="py-20 md:py-[120px] relative overflow-hidden"
      style={{ background: '#ffffff' }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-content mx-auto px-5 md:px-10 relative">

        {/* Section header — left aligned */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#f97316' }}
          >
            Platform Features
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold leading-tight mb-5"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: '#1A1A1A' }}
          >
            Everything you need to run{' '}
            <span style={{ color: '#f97316' }}>smarter</span> transport
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            From booking to billing, every feature is designed to save time, reduce costs, and give you complete visibility.
          </motion.p>
        </div>

        {/* Feature grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature, i) => (
            <motion.div key={feature.title} variants={item} className="feat-card">
              <FeatureCard {...feature} index={i} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: '#FFF7ED', border: '1px solid rgba(249,115,22,0.2)' }}
        >
          {[
            { value: '99.9%', label: 'System Uptime' },
            { value: '10K+', label: 'Employees Served' },
            { value: '500+', label: 'Routes Managed' },
            { value: '3', label: 'Apps. One Platform.' },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:flex-1">
              <div className="font-bold mb-1" style={{ fontSize: 32, color: '#f97316' }}>
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-widest" style={{ color: '#9A7B5A' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}