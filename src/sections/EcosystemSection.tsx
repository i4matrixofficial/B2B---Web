import { motion } from 'framer-motion';
import { User, Navigation, Building2 } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { EcosystemCard } from '@/components/EcosystemCard';

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="bg-white py-20 md:py-[120px]">
      <div className="max-w-content mx-auto px-5 md:px-10">
        <SectionHeader
          label="The Ecosystem"
          heading={
            <>
              One Platform. Three{' '}
              <span className="text-brand-orange">Experiences.</span>
            </>
          }
          description="Purpose-built apps for every member of your transport operation — from the staff member booking a seat to the manager overseeing the entire fleet."
        />

        <div className="mt-16 flex flex-col gap-5">

          {/* Company — full width dark hero card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0 }}
          >
            <EcosystemCard
              variant="company"
              icon={Building2}
              label="For Companies"
              title="Company Platform"
              description="Oversee your entire transport operation from a powerful dashboard. Manage routes, monitor fleets, handle billing, and ensure compliance — all in one place."
              features={[
                'Real-time fleet monitoring',
                'Route & schedule management',
                'Automated billing & reports',
                'Multi-company support',
                'Role-based access control',
              ]}
              ctaText="Explore Platform"
              ctaHref="#cta"
            />
          </motion.div>

          {/* Staff + Driver — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            >
              <EcosystemCard
                variant="staff"
                icon={User}
                label="For Staff"
                title="Staff App"
                description="Book your daily commute, track your ride in real-time, and mark attendance with a simple PIN — all from your phone."
                features={[
                  'Live GPS vehicle tracking',
                  'One-tap seat reservation',
                  'Attendance PIN verification',
                  'Push notifications',
                  'Trip history & receipts',
                ]}
                ctaText="Get the Staff App"
                ctaHref="#app-download"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            >
              <EcosystemCard
                variant="driver"
                icon={Navigation}
                label="For Drivers"
                title="Driver App"
                description="Receive optimized routes, manage passenger check-ins, share your live location, and report delays — everything for smooth operations."
                features={[
                  'Turn-by-turn navigation',
                  'Live GPS sharing',
                  'Passenger attendance',
                  'Incident reporting',
                  'Trip management',
                ]}
                ctaText="Get the Driver App"
                ctaHref="#app-download"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}