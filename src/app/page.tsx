import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BellRing,
  BriefcaseBusiness,
  BusFront,
  Building2,
  CalendarCheck2,
  CarFront,
  Clock3,
  Fingerprint,
  Headphones,
  MapPinned,
  MonitorDot,
  Route,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Star,
  TicketCheck,
  Users,
  WalletCards,
  Waypoints
} from 'lucide-react';
import Image from 'next/image';
import { AppDownloadSection } from '@/components/app-download';
import { FeatureGrid } from '@/components/feature-grid';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { SiteHeader } from '@/components/site-header';

const audiences = [
  {
    title: 'Drivers',
    description: 'Earn with structured trips and clear schedules',
    icon: <CarFront className="h-5 w-5" />
  },
  {
    title: 'Employees',
    description: 'Book your seat and track your ride in real time',
    icon: <Users className="h-5 w-5" />
  },
  {
    title: 'Companies',
    description: 'Manage staff transport with full visibility and control',
    icon: <BriefcaseBusiness className="h-5 w-5" />
  }
];

const driverBenefits = [
  {
    title: 'Stable and predictable trips',
    description: 'Enjoy consistent routes that make daily work easier to plan.',
    icon: <Waypoints className="h-5 w-5" />
  },
  {
    title: 'Clear routes and schedules',
    description: 'Know where to go and when to move without last-minute confusion.',
    icon: <MapPinned className="h-5 w-5" />
  },
  {
    title: 'Easy-to-use mobile app',
    description: 'Access trip details and updates from a simple, practical interface.',
    icon: <Smartphone className="h-5 w-5" />
  },
  {
    title: 'Trip tracking and history',
    description: 'See your completed runs and keep every trip organized.',
    icon: <Route className="h-5 w-5" />
  },
  {
    title: 'Support and safety features',
    description: 'Get help when needed with a platform designed around reliability.',
    icon: <Headphones className="h-5 w-5" />
  }
];

const employeeBenefits = [
  {
    title: 'Reserve seats in advance',
    description: 'Plan your commute with a seat that is confirmed before the vehicle arrives.',
    icon: <TicketCheck className="h-5 w-5" />
  },
  {
    title: 'Track vehicle in real time',
    description: 'Follow your ride live so you know exactly when to leave home or work.',
    icon: <MonitorDot className="h-5 w-5" />
  },
  {
    title: 'Know exact arrival time',
    description: 'Reduce waiting time with clear status updates and timely notifications.',
    icon: <Clock3 className="h-5 w-5" />
  },
  {
    title: 'Safe and verified transport',
    description: 'Ride with confidence in a setup designed for everyday staff travel.',
    icon: <ShieldCheck className="h-5 w-5" />
  },
  {
    title: 'Simple mobile experience',
    description: 'Book, check, and travel with a straightforward app flow.',
    icon: <Smartphone className="h-5 w-5" />
  }
];

const companyBenefits = [
  {
    title: 'Monitor all transport operations in one place',
    description: 'See all daily movement clearly and keep transport organized across locations.',
    icon: <Building2 className="h-5 w-5" />
  },
  {
    title: 'Improve employee punctuality',
    description: 'Support timely arrivals with transport that is easier to plan and follow.',
    icon: <CalendarCheck2 className="h-5 w-5" />
  },
  {
    title: 'Reduce transport costs',
    description: 'Use a more structured system to avoid waste and improve efficiency.',
    icon: <WalletCards className="h-5 w-5" />
  },
  {
    title: 'Real-time visibility of vehicles',
    description: 'Stay informed about movement and vehicle status throughout the day.',
    icon: <Activity className="h-5 w-5" />
  },
  {
    title: 'Secure and reliable system',
    description: 'Rely on a platform built for trust, consistency, and everyday operations.',
    icon: <Fingerprint className="h-5 w-5" />
  }
];

const steps = [
  {
    title: 'Company sets up transport',
    description: 'The transport plan is organized around the workforce and route needs.',
    icon: <Building2 className="h-5 w-5" />
  },
  {
    title: 'Drivers receive assigned trips',
    description: 'Drivers get trip details and schedules in a clear, predictable format.',
    icon: <BusFront className="h-5 w-5" />
  },
  {
    title: 'Employees book their seats',
    description: 'Passengers reserve their seats ahead of time with ease.',
    icon: <Users className="h-5 w-5" />
  },
  {
    title: 'Vehicles run with live tracking',
    description: 'Trip progress is visible so everyone can stay informed.',
    icon: <MapPinned className="h-5 w-5" />
  },
  {
    title: 'System records trips and attendance',
    description: 'Daily journeys are documented for reliable transport oversight.',
    icon: <BadgeCheck className="h-5 w-5" />
  }
];

const coreFeatures = [
  {
    title: 'Real-time tracking',
    description: 'See journeys as they happen and reduce uncertainty for everyone involved.',
    icon: <MonitorDot className="h-5 w-5" />
  },
  {
    title: 'Smart seat booking',
    description: 'Keep trips organized with predictable seat reservation for employees.',
    icon: <TicketCheck className="h-5 w-5" />
  },
  {
    title: 'Automated attendance',
    description: 'Make daily travel records easier to follow and use.',
    icon: <BadgeCheck className="h-5 w-5" />
  },
  {
    title: 'Notifications and alerts',
    description: 'Send updates that keep trips smooth, punctual, and well coordinated.',
    icon: <BellRing className="h-5 w-5" />
  },
  {
    title: 'Flexible company-based system',
    description: 'Adapt the transport experience around each company’s needs.',
    icon: <Building2 className="h-5 w-5" />
  }
];

const trustItems = [
  {
    title: 'Verified drivers',
    description: 'Ride with confidence using trusted transport partners.',
    icon: <ShieldCheck className="h-5 w-5" />
  },
  {
    title: 'Secure login system',
    description: 'Protect access with a secure sign-in experience for every user.',
    icon: <Fingerprint className="h-5 w-5" />
  },
  {
    title: 'Real-time monitoring',
    description: 'Stay aware of live movement and trip status throughout the day.',
    icon: <MonitorDot className="h-5 w-5" />
  },
  {
    title: 'Emergency support',
    description: 'Provide help quickly when a journey needs attention.',
    icon: <Headphones className="h-5 w-5" />
  },
  {
    title: 'Data protection',
    description: 'Keep user information handled with care and responsibility.',
    icon: <ShieldAlert className="h-5 w-5" />
  }
];

const testimonials = [
  {
    quote: 'The platform makes my daily trips predictable, and I always know what to expect.',
    name: 'Sunil Perera',
    role: 'Driver',
    initials: 'SP'
  },
  {
    quote: 'Booking a seat and checking the live route saves me time every morning.',
    name: 'Nadeesha Silva',
    role: 'Employee',
    initials: 'NS'
  },
  {
    quote: 'We finally have a clearer way to manage staff transport across the company.',
    name: 'Ayesha Fernando',
    role: 'Operations Lead',
    initials: 'AF'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />

      <section className="section-grid border-b border-slate-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Who it’s for"
              title="Built for the three groups that keep transport moving"
              description="I4van.lk creates a simple experience for the people who drive, the people who ride, and the companies that need dependable staff transport."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-soft transition hover:-translate-y-1 hover:bg-white h-full flex flex-col">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                    {item.icon}
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="drivers" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Drivers"
              title="Why drivers choose I4van.lk"
              description="A better rhythm for daily trips, with more clarity, less confusion, and a smoother way to work."
            />
          </Reveal>
          <div className="mt-12">
            <FeatureGrid items={driverBenefits} columnsClassName="grid gap-5 md:grid-cols-2 xl:grid-cols-3" />
          </div>
        </div>
      </section>

      <section id="employees" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Employees"
              title="Why employees love I4van.lk"
              description="The commute feels easier when seat booking, arrival updates, and vehicle visibility are all straightforward."
            />
          </Reveal>
          <div className="mt-12">
            <FeatureGrid items={employeeBenefits} columnsClassName="grid gap-5 md:grid-cols-2 xl:grid-cols-3" />
          </div>
        </div>
      </section>

      <section id="companies" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Companies"
              title="Why companies trust I4van.lk"
              description="Make staff transport easier to oversee with a system centered on visibility, control, and reliability."
            />
          </Reveal>
          <div className="mt-12">
            <FeatureGrid items={companyBenefits} columnsClassName="grid gap-5 md:grid-cols-2 xl:grid-cols-3" />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="A simple flow from setup to daily transport"
              description="Five clear steps keep the experience practical for companies, drivers, and employees."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-soft h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                      {step.icon}
                    </div>
                    <span className="font-display text-2xl font-semibold text-slate-200">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Today's transport network"
              title="Live visibility across every trip"
              description="Live positions, reliability metrics, and fast support — all in one view."
            />
          </Reveal>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="relative w-full h-96 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                <Image
                  src="/images/logistic.png"
                  alt="Live transport operations with vehicles, routes, and real-time monitoring"
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>
            </Reveal>

            <Reveal>
              <div className="relative rounded-2xl p-8 lg:p-12" style={{ backgroundImage: 'url(/images/logistic.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 rounded-2xl bg-white/85"></div>
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-semibold text-ink">Live visibility, trusted daily operations</h3>
                  <p className="mt-4 text-sm text-slate-600">Monitor every trip with confidence — get the metrics that matter at a glance.</p>

                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ember/10 text-ember font-semibold">97%</span>
                      <div>
                        <p className="text-sm font-semibold text-ink">On-time trips</p>
                        <p className="text-sm text-slate-500">Consistently high punctuality across routes</p>
                      </div>
                    </li>

                    <li className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ember/10 text-ember font-semibold">4.9</span>
                      <div>
                        <p className="text-sm font-semibold text-ink">Safety score</p>
                        <p className="text-sm text-slate-500">High-rated drivers and verified fleets</p>
                      </div>
                    </li>

                    <li className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ember/10 text-ember font-semibold">&lt;5m</span>
                      <div>
                        <p className="text-sm font-semibold text-ink">Support response</p>
                        <p className="text-sm text-slate-500">Fast assistance when it matters most</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <AppDownloadSection />

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Features"
              title="Useful features that improve the whole trip"
              description="Everything here is designed to make staff transport feel organized, dependable, and easier to use."
            />
          </Reveal>
          <div className="mt-12">
            <FeatureGrid items={coreFeatures} columnsClassName="grid gap-5 md:grid-cols-2 xl:grid-cols-3" />
          </div>
        </div>
      </section>

      <section id="trust" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Trust & Safety"
              title="Designed around trust from the start"
              description="A strong transport experience depends on confidence, visibility, and support when it matters."
            />
          </Reveal>
          <div className="mt-12">
            <FeatureGrid items={trustItems} columnsClassName="grid gap-5 md:grid-cols-2 xl:grid-cols-3" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What people could say after using I4van.lk"
              description="Sample feedback from the three groups the platform is designed to serve."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 100}>
                <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft h-full flex flex-col">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <p className="mt-5 flex-1 text-base leading-8 text-slate-700">"{item.quote}"</p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient font-semibold text-white">
                      {item.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{item.name}</p>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-gradient px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-[2rem] border border-white/15 bg-white/8 p-8 shadow-2xl shadow-black/20 sm:p-12">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ember">Get Started</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                  Ready to simplify your staff transport?
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/76">
                  Bring structure, trust, and visibility to every commute with a platform built for real teams.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#drivers"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-4 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#ff5c2a]"
                >
                  Join as Driver
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Request Demo
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
