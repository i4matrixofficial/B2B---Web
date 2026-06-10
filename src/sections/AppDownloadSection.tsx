import { motion } from 'framer-motion';
import { Download, Clock, Users } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SecondaryButton } from '@/components/SecondaryButton';
import { AppStoreButton } from '@/components/AppStoreButton';
import { PhoneMockup } from '@/components/PhoneMockup';
import { FloatingCard } from '@/components/FloatingCard';
import { StaffAppDownloadScreen, DriverAppDownloadScreen } from '@/components/PhoneScreens';

export function AppDownloadSection() {
  return (
    <section id="app-download" className="relative bg-dark py-20 md:py-[120px] overflow-hidden">
      {/* Orange glow behind phones */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(255, 107, 0, 0.3) 0%, transparent 60%)' }} />
      </motion.div>

      <div className="relative z-10 max-w-content mx-auto px-5 md:px-10">
        <SectionHeader
          label="Download The Apps"
          heading={
            <>
              Take i4van with you
              <br />
              <span className="text-brand-orange">everywhere</span>
            </>
          }
          description="Available on iOS and Android. Your entire transport operation, in your pocket."
          light
        />

        {/* Phone mockups */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-16">
          {/* Staff App Phone */}
          <div className="relative">
            <PhoneMockup
              delay={0.2}
              floatAnimation={{ y: [-10, 10], duration: 6 }}
            >
              <StaffAppDownloadScreen />
            </PhoneMockup>

            {/* Floating notification card */}
            <FloatingCard
              className="-top-4 -right-4 md:-right-8"
              delay={0.5}
              floatOffset={0}
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-orange" />
                <span className="text-label-l font-semibold text-text-primary">Ride Alert</span>
              </div>
              <p className="text-body-s text-text-secondary mt-1">Your pickup is in 10 min</p>
            </FloatingCard>
          </div>

          {/* Driver App Phone */}
          <div className="relative">
            <PhoneMockup
              delay={0.4}
              floatAnimation={{ y: [-8, 8], rotate: [-1, 1], duration: 8 }}
            >
              <DriverAppDownloadScreen />
            </PhoneMockup>

            {/* Floating attendance card */}
            <FloatingCard
              className="-bottom-4 -left-4 md:-left-8"
              delay={0.6}
              floatOffset={3}
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-orange" />
                <span className="text-label-l font-semibold text-text-primary">8 Passengers</span>
              </div>
              <p className="text-body-s text-text-secondary mt-1">Onboard · Route 7</p>
            </FloatingCard>
          </div>
        </div>

        {/* Download buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mt-12"
        >
          <PrimaryButton icon={<Download className="w-[18px] h-[18px]" />} href="#">
            Download Staff App
          </PrimaryButton>
          <SecondaryButton light icon={<Download className="w-[18px] h-[18px]" />} href="#">
            Download Driver App
          </SecondaryButton>
        </motion.div>

        {/* App store badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex items-center justify-center gap-3 mt-5"
        >
          <AppStoreButton variant="apple" />
          <AppStoreButton variant="google" />
        </motion.div>

        {/* Availability note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-body-s text-text-tertiary text-center mt-4"
        >
          Available on iPhone, iPad, and Android devices
        </motion.p>
      </div>
    </section>
  );
}
