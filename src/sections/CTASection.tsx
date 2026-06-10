import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { GhostButton } from '@/components/GhostButton';

export function CTASection() {
  return (
    <section id="cta" className="relative bg-dark py-24 md:py-[140px] overflow-hidden">
      {/* Radial orange glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        animate={{
          opacity: [0.12, 0.18, 0.12],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(255, 107, 0, 0.3) 0%, transparent 50%)' }} />
      </motion.div>

      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-[800px] mx-auto px-5 md:px-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-block uppercase text-label-m text-brand-orange tracking-[0.08em] mb-4"
        >
          Get Started
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="text-display-l text-white"
        >
          <span className="text-brand-orange">Transform</span> your staff
          <br />
          transportation today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-body-l text-[#A0A0A0] max-w-[560px] mx-auto mt-6"
        >
          Join 150+ companies already using i4van to streamline their staff transport. Set up takes less than a week, and our team is here to help.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <PrimaryButton large icon={<Mail className="w-[18px] h-[18px]" />} href="#footer">
            Contact Sales
          </PrimaryButton>
          <SecondaryButton light icon={<Download className="w-[18px] h-[18px]" />} href="#app-download">
            Download Apps
          </SecondaryButton>
          <div className="hidden md:block">
            <GhostButton href="#">Schedule Demo</GhostButton>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-label-l text-text-tertiary mt-6 flex items-center justify-center gap-2"
        >
          Free consultation
          <span className="w-1 h-1 rounded-full bg-text-tertiary" />
          No commitment
          <span className="w-1 h-1 rounded-full bg-text-tertiary" />
          Setup in 7 days
        </motion.p>
      </div>
    </section>
  );
}
