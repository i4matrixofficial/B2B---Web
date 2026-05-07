import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Twitter, Linkedin, Facebook } from 'lucide-react';

const footerLinks = [
  { label: 'Drivers', href: '#drivers' },
  { label: 'Employees', href: '#employees' },
  { label: 'Companies', href: '#companies' },
  { label: 'App', href: '#app' },
  { label: 'Contact', href: '#contact' }
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="flex items-center gap-0">
            <Image
              src="/images/i4van_logo.png"
              alt="I4van.lk logo"
              width={200}
              height={50}
              className="h-16 w-auto"
            />
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/68">
            A modern transport platform built to make staff travel more reliable, visible, and easy to manage.
          </p>

          <div className="mt-6 flex gap-3 text-white/70">
            {[Twitter, Linkedin, Facebook].map((Icon, index) => (
              <a
                key={index}
                href="#contact"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 transition hover:bg-white/12"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ember">Quick Links</p>
          <div className="mt-5 grid gap-3 text-sm text-white/72">
            {footerLinks.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ember">Contact</p>
          <div className="mt-5 space-y-4 text-sm text-white/72">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/45" />
              Colombo, Sri Lanka
            </p>
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/45" />
              +94 70 123 4567
            </p>
            <p className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/45" />
              hello@i4van.lk
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
