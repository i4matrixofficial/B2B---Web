import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Solutions', href: '#ecosystem' },
  { label: 'Pricing', href: '#why-i4van' },
  { label: 'Contact', href: '#footer' },
];

export function Navbar() {
  const scrolled = useScrolled(50);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-[1000] transition-all duration-300',
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-[#E5E5E5] shadow-[0_1px_3px_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-content mx-auto px-5 md:px-10 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <span className={cn(
              'text-xl font-bold tracking-tight transition-colors duration-300',
              scrolled ? 'text-text-primary' : 'text-white'
            )}>
              <span className="text-brand-orange">i4</span>
              <span className={scrolled ? 'text-text-primary' : 'text-white'}>van</span>
              <span className={cn('text-sm font-medium ml-0.5', scrolled ? 'text-text-secondary' : 'text-white/60')}>.lk</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  'text-body-m font-medium transition-colors duration-200 hover:text-brand-orange',
                  scrolled ? 'text-text-primary' : 'text-white'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className={cn(
                'hidden md:block text-body-m font-medium transition-colors duration-200',
                scrolled ? 'text-text-secondary hover:text-text-primary' : 'text-white/70 hover:text-white'
              )}
            >
              Login
            </a>
            <a
              href="#cta"
              className={cn(
                'hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg text-label-l font-semibold transition-all duration-250',
                'bg-brand-orange text-white hover:bg-brand-orange-light hover:shadow-button hover:scale-[1.02] active:scale-[0.98]'
              )}
            >
              Get Started
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                'md:hidden p-2 transition-colors',
                scrolled ? 'text-text-primary' : 'text-white'
              )}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[1100] bg-white"
          >
            <div className="flex items-center justify-between px-5 h-[72px] border-b border-[#E5E5E5]">
              <span className="text-xl font-bold">
                <span className="text-brand-orange">i4</span>
                <span className="text-text-primary">van</span>
                <span className="text-text-secondary text-sm ml-0.5">.lk</span>
              </span>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-text-primary">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-[calc(100vh-72px)] gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-heading-m text-text-primary hover:text-brand-orange transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center px-8 py-4 rounded-xl bg-brand-orange text-white font-semibold text-label-l"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
