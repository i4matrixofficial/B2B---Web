import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#why-i4van' },
  { label: 'Mobile Apps', href: '#app-download' },
  { label: 'API Access', href: '#' },
];

const companyLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Press Kit', href: '#' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function FooterSection() {
  return (
    <footer id="footer" className="bg-dark border-t border-dark-border">
      <div className="max-w-content mx-auto px-5 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-1">
              <span className="text-xl font-bold">
                <span className="text-brand-orange">i4</span>
                <span className="text-white">van</span>
                <span className="text-white/60 text-sm ml-0.5">.lk</span>
              </span>
            </a>
            <p className="text-body-s text-[#A0A0A0] mt-4 max-w-[240px]">
              Modern staff transport management for forward-thinking companies.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-[#A0A0A0] hover:text-brand-orange transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product column */}
          <div>
            <h4 className="text-label-l text-white font-semibold mb-5">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body-s text-[#A0A0A0] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-label-l text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body-s text-[#A0A0A0] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-label-l text-white font-semibold mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@i4van.lk"
                  className="text-body-s text-brand-orange hover:text-brand-orange-light transition-colors"
                >
                  hello@i4van.lk
                </a>
              </li>
              <li>
                <span className="text-body-s text-[#A0A0A0]">+94 11 234 5678</span>
              </li>
              <li>
                <span className="text-body-s text-[#A0A0A0] leading-relaxed">
                  42, Galle Road,
                  <br />
                  Colombo 03, Sri Lanka
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-dark-border mt-12 pt-6">
          <p className="text-label-s text-text-tertiary">
            &copy; 2025 i4van.lk. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-label-s text-text-tertiary hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-label-s text-text-tertiary hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
