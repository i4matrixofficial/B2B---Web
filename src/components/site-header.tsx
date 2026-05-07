"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Drivers', href: '#drivers' },
  { label: 'Employees', href: '#employees' },
  { label: 'Companies', href: '#companies' },
  { label: 'App', href: '#app' },
  { label: 'Trust', href: '#trust' }
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="flex items-center gap-3">
          <Image
            src="/images/i4van_logo.png"
            alt="I4van.lk logo"
            width={200}
            height={50}
            className="h-14 w-auto"
            loading="eager"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  isActive ? 'text-ember font-semibold' : 'text-slate-600'
                } hover:text-ink`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center justify-center rounded-full bg-ember px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#ff5c2a] sm:inline-flex"
          >
            Request Demo
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-ink shadow-soft transition hover:border-slate-300 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`border-t border-slate-200 bg-white/95 px-4 py-4 shadow-soft backdrop-blur-xl transition-all duration-300 lg:hidden ${menuOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 overflow-hidden opacity-0'}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:px-2">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-slate-100 hover:text-ink ${
                  isActive ? 'text-ember font-semibold' : 'text-slate-700'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-ember px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-[#ff5c2a]"
          >
            Request Demo
          </a>
        </div>
      </div>
    </header>
  );
}
