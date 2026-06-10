import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AppStoreButtonProps {
  variant: 'apple' | 'google';
  dark?: boolean;
  className?: string;
}

export function AppStoreButton({ variant, dark = true, className }: AppStoreButtonProps) {
  const isApple = variant === 'apple';

  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center gap-2.5 rounded-xl px-5 py-3 transition-shadow duration-200',
        dark ? 'bg-[#111111] text-white' : 'bg-white text-[#111111] border border-[#E5E5E5]',
        'hover:shadow-app-store',
        className
      )}
    >
      {isApple ? (
        <Apple className="w-5 h-5" />
      ) : (
        <Play className="w-5 h-5 fill-current" />
      )}
      <div className="flex flex-col">
        <span className="text-label-s text-current/60 leading-tight">
          {isApple ? 'Download on the' : 'Get it on'}
        </span>
        <span className="text-label-l font-semibold leading-tight">
          {isApple ? 'App Store' : 'Google Play'}
        </span>
      </div>
    </motion.a>
  );
}
