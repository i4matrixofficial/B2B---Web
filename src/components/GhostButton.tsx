import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface GhostButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

export function GhostButton({ children, onClick, href }: GhostButtonProps) {
  const className =
    'inline-flex items-center gap-2 text-label-l font-semibold text-brand-orange hover:text-brand-orange-light transition-colors duration-200 group';

  const content = (
    <>
      {children}
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    </>
  );

  if (href) {
    return (
      <motion.a href={href} className={className} whileHover={{ x: 4 }}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={className} whileHover={{ x: 4 }}>
      {content}
    </motion.button>
  );
}
