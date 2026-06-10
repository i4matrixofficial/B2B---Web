import { motion } from 'framer-motion';
import { Building2, Smartphone, Calendar, Zap } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Company Onboarding',
    description: 'We set up your company profile, add your routes, vehicles, and staff. Our team guides you through every step.',
    icon: Building2,
  },
  {
    number: '02',
    title: 'Staff & Drivers Install Apps',
    description: 'Your team downloads the i4van Staff App and Driver App from the App Store or Google Play. Quick setup with company invite codes.',
    icon: Smartphone,
  },
  {
    number: '03',
    title: 'Routes & Schedules Assigned',
    description: 'Administrators assign routes, set pickup times, and allocate vehicles. The system automatically optimizes everything.',
    icon: Calendar,
  },
  {
    number: '04',
    title: 'Smart Management Begins',
    description: 'Staff book seats, drivers navigate routes, managers track everything in real-time. Your transport operation, simplified.',
    icon: Zap,
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.2,
      }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Number circle */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.34, 1.56, 0.64, 1],
          delay: index * 0.2 + 0.1,
        }}
        className="w-20 h-20 rounded-full border-2 border-brand-orange bg-white flex items-center justify-center relative z-10"
      >
        <span className="text-display-l text-brand-orange font-extrabold">{step.number}</span>
      </motion.div>

      {/* Icon */}
      <div className="mt-6">
        <step.icon className="w-8 h-8 text-brand-orange mx-auto" />
      </div>

      {/* Title */}
      <h3 className="text-heading-m text-text-primary mt-4">{step.title}</h3>

      {/* Description */}
      <p className="text-body-m text-text-secondary mt-3 max-w-[260px]">{step.description}</p>
    </motion.div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="bg-white py-20 md:py-[120px]">
      <div className="max-w-content mx-auto px-5 md:px-10">
        <SectionHeader
          label="How It Works"
          heading={
            <>
              From signup to smooth
              <br />
              operations in <span className="text-brand-orange">4 steps</span>
            </>
          }
          description="Getting started with i4van is simple. We'll have you up and running in less than a week."
        />

        {/* Steps with connecting line */}
        <div className="relative mt-16">
          {/* Horizontal connecting line - desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[1px] bg-[#E5E5E5] origin-left"
          />

          {/* Vertical connecting line - mobile */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="lg:hidden absolute left-10 top-10 bottom-10 w-[1px] bg-[#E5E5E5] origin-top"
          />

          {/* Steps grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
