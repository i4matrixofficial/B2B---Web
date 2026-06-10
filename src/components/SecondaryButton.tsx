import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SecondaryButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  light?: boolean;
  href?: string;
}

export function SecondaryButton({ children, icon, onClick, className, light = false, href }: SecondaryButtonProps) {
  const baseClass = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-label-l',
    'border-[1.5px] bg-transparent',
    'transition-all duration-250',
    'active:scale-[0.98]',
    light
      ? 'border-white/20 text-white hover:bg-white/5 hover:border-white/40'
      : 'border-[#E5E5E5] text-text-primary hover:bg-[#F5F5F5] hover:border-[#D0D0D0]',
    'px-8 py-4',
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
