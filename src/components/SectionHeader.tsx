import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  heading: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpHeading = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function SectionHeader({ label, heading, description, align = 'center', light = false }: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';
  const mxAuto = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`${textAlign} mb-16`}>
      <motion.span
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="inline-block uppercase text-label-m text-brand-orange tracking-[0.08em] mb-4"
      >
        {label}
      </motion.span>
      <motion.h2
        variants={fadeUpHeading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className={`text-heading-xl ${light ? 'text-white' : 'text-text-primary'}`}
      >
        {heading}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className={`text-body-l mt-4 ${light ? 'text-[#A0A0A0]' : 'text-text-secondary'} max-w-[640px] ${mxAuto}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
