import { motion } from 'framer-motion';
import { CompanyCard } from './CompanyCard';
import { StaffCard } from './StaffCard';
import { DriverCard } from './DriverCard';
import type { LucideIcon } from 'lucide-react';

interface EcosystemCardProps {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref?: string;
  variant: 'company' | 'staff' | 'driver';
}

export function EcosystemCard(props: EcosystemCardProps) {
  const { variant, ctaHref = '#', ...rest } = props;
  const cardProps = { ...rest, ctaHref };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="h-full"
    >
      {variant === 'company' && <CompanyCard {...cardProps} />}
      {variant === 'staff' && <StaffCard {...cardProps} />}
      {variant === 'driver' && <DriverCard {...cardProps} />}
    </motion.div>
  );
}