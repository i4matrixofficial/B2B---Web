import { motion, useScroll, useTransform } from 'framer-motion';
import { Download } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { AppStoreButton } from '@/components/AppStoreButton';
import { PhoneMockup } from '@/components/PhoneMockup';
import { FloatingCard } from '@/components/FloatingCard';
import { StaffAppScreen, DriverAppScreen, CompanyDashboardScreen } from '@/components/PhoneScreens';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const blobY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const phonesY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const Screens = [DriverAppScreen, StaffAppScreen, CompanyDashboardScreen] as const;
  const [active, setActive] = useState<number>(1);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % Screens.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-dark"
      style={{
        background: 'linear-gradient(135deg, #111111 0%, #1A1A1A 40%, #242424 70%, rgba(255, 107, 0, 0.08) 100%)',
      }}
    >
      {/* Background blobs */}
      <motion.div
        style={{ y: blobY }}
        className="absolute top-[20%] right-[5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(255, 107, 0, 0.08) 0%, transparent 70%)' }} />
      </motion.div>

      <motion.div
        style={{ y: blobY }}
        className="absolute bottom-[10%] left-[0%] w-[500px] h-[500px] rounded-full pointer-events-none"
        animate={{ scale: [1.05, 0.95, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(255, 133, 51, 0.06) 0%, transparent 70%)' }} />
      </motion.div>

      <motion.div
        style={{ y: blobY }}
        className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full pointer-events-none"
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(255, 107, 0, 0.25) 0%, transparent 70%)' }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-5 md:px-10 pt-[140px] pb-20 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 w-full">

          {/* Left column - Text */}
          <div className="flex-1 lg:max-w-[55%] text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="inline-block uppercase text-label-m text-brand-orange tracking-[0.08em] mb-4"
            >
              Staff Transport Solution
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
              className="text-display-xl text-white max-w-[600px] mx-auto lg:mx-0"
            >
              Modern{' '}
              <span className="text-brand-orange">Staff</span>
              <br />
              Transport Management
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              className="text-body-l text-[#A0A0A0] max-w-[480px] mt-6 mx-auto lg:mx-0"
            >
              One platform connecting your staff, drivers, and operations team. Real-time tracking, smart attendance, and seamless route management — all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10"
            >
              <PrimaryButton icon={<Download className="w-[18px] h-[18px]" />} href="#app-download">
                Download Staff App
              </PrimaryButton>
              <SecondaryButton light icon={<Download className="w-[18px] h-[18px]" />} href="#app-download">
                Download Driver App
              </SecondaryButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-3 mt-6"
            >
              <AppStoreButton variant="apple" />
              <AppStoreButton variant="google" />
            </motion.div>
          </div>

          {/* Right column - Phone mockups + Floating cards */}
          <motion.div
            style={{ y: phonesY }}
            className="relative flex-1 lg:max-w-[45%] flex items-center justify-center"
          >
            {/*
              Single 320×580 relative box.
              The phone carousel is centered inside it.
              The floating cards use absolute positioning relative to THIS box.
              Everything moves together on scroll via the parent phonesY.
            */}
            <div className="relative" style={{ width: 320, height: 580 }}>

              {/* Phone carousel */}
              <div style={{ perspective: 1200, width: 320, height: 580 }}>
                {Screens.map((Screen, i) => {
                  const rel = (i - active + Screens.length) % Screens.length;
                  const pos = rel === 0 ? 'center' : rel === 1 ? 'right' : 'left';

                  const variant = {
                    center: { x: 0,    scale: 1,    rotateY: 0,   filter: 'none',                           zIndex: 30 },
                    right:  { x: 110,  scale: 0.82, rotateY: -12, filter: 'brightness(0.6) saturate(0.8)',  zIndex: 10 },
                    left:   { x: -110, scale: 0.82, rotateY: 12,  filter: 'brightness(0.6) saturate(0.8)',  zIndex: 20 },
                  } as const;

                  return (
                    <motion.div
                      key={i}
                      initial={false}
                      animate={{
                        x: variant[pos].x,
                        scale: variant[pos].scale,
                        rotateY: variant[pos].rotateY,
                        zIndex: variant[pos].zIndex,
                      }}
                      transition={{ duration: 0.7, ease: 'easeInOut' }}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        marginLeft: '-140px', // half of phone width (280px)
                        marginTop: '-285px',  // half of phone height (570px)
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <PhoneMockup floatAnimation={{ y: [-8, 8], duration: 6 }} delay={0}>
                        <div style={{ width: '100%', height: '100%', filter: variant[pos].filter }}>
                          <Screen />
                        </div>
                      </PhoneMockup>
                    </motion.div>
                  );
                })}
              </div>

              {/* Floating card — top right of the phone box */}
              <FloatingCard
                className="-top-6 -right-28"
                delay={1.0}
                floatOffset={0}
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 bg-brand-orange rounded-full" />
                    <div className="absolute inset-0 w-2.5 h-2.5 bg-brand-orange rounded-full animate-ping opacity-40" />
                  </div>
                  <span className="text-label-l font-semibold text-text-primary">Live</span>
                </div>
                <p className="text-body-s text-text-secondary mt-1">12 vehicles active</p>
              </FloatingCard>

              {/* Floating card — left middle of the phone box */}
              <FloatingCard
                className="bottom-24 -left-32"
                delay={1.15}
                floatOffset={3}
              >
                <p className="text-label-s text-text-tertiary uppercase">Today&apos;s Attendance</p>
                <p className="text-3xl font-bold text-brand-orange mt-1">94%</p>
                <p className="text-body-s text-text-secondary">on time</p>
              </FloatingCard>

              {/* Floating card — bottom right of the phone box */}
              <FloatingCard
                className="-bottom-6 -right-20"
                delay={1.3}
                floatOffset={-2}
              >
                <p className="text-label-l font-semibold text-text-primary">Route 7</p>
                <div className="w-32 h-1.5 bg-[#E5E5E5] rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-brand-orange rounded-full" style={{ width: '80%' }} />
                </div>
                <p className="text-body-s text-text-secondary mt-1">8 stops completed</p>
              </FloatingCard>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}