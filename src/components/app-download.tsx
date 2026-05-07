import { Apple, CheckCircle2, Download, Play } from 'lucide-react';
import { Reveal } from '@/components/reveal';

function StoreButton({ icon, label, sublabel }: { icon: React.ReactNode; label: string; sublabel: string }) {
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left shadow-soft transition hover:-translate-y-0.5 hover:border-[#ffd0c2]"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white">{icon}</span>
      <span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">{sublabel}</span>
        <span className="block text-sm font-semibold text-ink">{label}</span>
      </span>
    </a>
  );
}

function PhoneMockup({
  title,
  eyebrow,
  accent,
  bullets
}: {
  title: string;
  eyebrow: string;
  accent: string;
  bullets: string[];
}) {
  return (
    <div className="relative mx-auto w-full max-w-[290px] rounded-[2.2rem] border border-slate-200 bg-slate-950 p-3 shadow-soft">
      <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,#0f3140_0%,#102f37_100%)] p-4 text-white">
        <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-white/20" />
        <div className="rounded-[1.4rem] bg-white/8 p-4 ring-1 ring-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">{eyebrow}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/72">{accent}</p>

          <div className="mt-5 space-y-3">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-center gap-3 rounded-2xl bg-white/10 px-3 py-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <span className="text-sm text-white/92">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-white/72">
          {['Route', 'Seat', 'Trip'].map((item) => (
            <div key={item} className="rounded-2xl bg-white/8 px-2 py-3">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AppDownloadSection() {
  return (
    <section id="app" className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,125,137,0.28),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,106,61,0.18),transparent_30%)]" />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ember">Mobile Apps</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Get the I4van.lk App</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              One app experience for drivers and passengers, built for everyday staff transport.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
          <Reveal className="flex justify-center">
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/75">
                For Drivers
              </div>
              <PhoneMockup
                title="Driver App"
                eyebrow="For Drivers"
                accent="Stay organized with assigned trips, easy schedules, and clear journey details."
                bullets={['Earn with structured trips', 'View schedules clearly', 'Track trip history']}
              />
            </div>
          </Reveal>

          <Reveal className="flex flex-col items-center gap-4 lg:pt-16" delay={140}>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ember text-white shadow-glow">
              <Download className="h-7 w-7" />
            </div>
            <div className="max-w-xs text-center text-sm leading-7 text-white/68">
              Download the app that keeps staff transport simple for everyone involved.
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <StoreButton icon={<Apple className="h-5 w-5" />} label="App Store" sublabel="Download on" />
              <StoreButton icon={<Play className="h-5 w-5" />} label="Google Play" sublabel="Get it on" />
            </div>
          </Reveal>

          <Reveal className="flex justify-center" delay={220}>
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/75">
                For Employees
              </div>
              <PhoneMockup
                title="Passenger App"
                eyebrow="For Employees"
                accent="Book your seat, follow the vehicle, and know exactly when your ride will arrive."
                bullets={['Reserve seats in advance', 'Track vehicles live', 'See exact arrival times']}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
