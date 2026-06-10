import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface PrimaryButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  large?: boolean;
  href?: string;
}

export function PrimaryButton({ children, icon, onClick, className, large = false, href }: PrimaryButtonProps) {
  const baseClass = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-label-l text-white',
    'bg-gradient-to-br from-brand-orange to-brand-orange-light',
    'transition-all duration-250',
    'hover:shadow-button hover:scale-[1.02]',
    'active:scale-[0.98]',
    large ? 'px-10 py-[18px]' : 'px-8 py-4',
    className
  );

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
