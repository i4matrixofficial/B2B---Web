import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PhoneMockupProps {
  children: React.ReactNode;
  scale?: number;
  className?: string;
  floatAnimation?: {
    y?: number[];
    rotate?: number[];
    x?: number[];
    duration?: number;
  };
  delay?: number;
}

export function PhoneMockup({ children, scale = 1, className, floatAnimation, delay = 0 }: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
      className={cn('relative', className)}
      style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
    >
      {/* Float wrapper */}
      <motion.div
        animate={
          floatAnimation
            ? {
                y: floatAnimation.y || [-10, 10],
                rotate: floatAnimation.rotate || [0, 0],
                x: floatAnimation.x || [0, 0],
              }
            : undefined
        }
        transition={
          floatAnimation
            ? {
                duration: floatAnimation.duration || 6,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }
            : undefined
        }
      >
        {/* Phone frame */}
        <div
          className="relative bg-[#1A1A1A] rounded-[36px] p-[10px] shadow-phone"
          style={{ width: 280, height: 570 }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-7 bg-[#1A1A1A] rounded-b-[14px] z-10" />
          {/* Screen */}
            <div
              className="w-full h-full bg-white rounded-[30px] overflow-hidden relative"
              style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
            >
              {children}
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function SmallPhoneMockup({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn('relative bg-[#1A1A1A] rounded-[28px] p-[8px] shadow-phone', className)}
      style={{ width: 220, height: 448 }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-6 bg-[#1A1A1A] rounded-b-[12px] z-10" />
      <div className="w-full h-full bg-white rounded-[24px] overflow-hidden relative">
        {children}
      </div>
    </div>
  );
}
