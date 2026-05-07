import Image from 'next/image';
import { ArrowRight, BusFront, ShieldCheck, Star } from 'lucide-react';
import { Reveal } from '@/components/reveal';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-brand-gradient text-white">
      <div className="absolute inset-0 bg-hero-grid bg-[length:32px_32px] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_35%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <Reveal className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90">
            <span className="h-2 w-2 rounded-full bg-ember" />
            Smart transport for drivers, employees, and companies
          </div>

          <h1 className="mt-7 max-w-3xl font-display text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Smart Staff Transport for Modern Companies
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Reliable, safe, and trackable transport for employees and drivers.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#drivers"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-4 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#ff5c2a]"
            >
              Join as Driver
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#app"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Use the App
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Request a Demo
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-white/85">
            {[
              'Verified transport partners',
              'Live trip visibility',
              'Safe employee journeys'
            ].map((item) => (
              <div key={item} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative z-10" delay={160}>
          <div className="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/25">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/logistic.png"
                alt="Logistics and transport scene"
                width={1200}
                height={900}
                className="h-[520px] w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,37,50,0.12),rgba(8,37,50,0.62))]" />

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-ink shadow-soft">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                Trusted daily operations
              </div>

              <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'On-time trips', value: '97%' },
                  { label: 'Safety score', value: '4.9/5' },
                  { label: 'Support response', value: '< 5 min' }
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/15 bg-slate-950/45 p-4 text-white backdrop-blur">
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-[1.25rem] bg-white px-5 py-4 text-ink shadow-soft">
              <div>
                <p className="text-sm font-semibold text-slate-500">Today’s transport network</p>
                <p className="mt-1 font-display text-xl font-semibold">Live visibility across every trip</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                <BusFront className="h-6 w-6" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
