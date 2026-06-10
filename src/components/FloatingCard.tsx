import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  floatOffset?: number;
}

export function FloatingCard({ children, className, delay = 0, floatOffset = 0 }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [floatOffset - 8, floatOffset + 8] }}
      transition={{
        opacity: { duration: 0.6, delay, ease: 'easeOut' },
        y: { duration: 4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay },
      }}
      style={{ willChange: 'transform' }}
      className={cn(
        'absolute bg-white/95 backdrop-blur-xl rounded-xl p-4 shadow-float border border-white/30 z-20',
        className
      )}
    >
      {children}
    </motion.div>
  );
}