# i4van.lk — Marketing Website

Marketing and landing website for **i4van**, a B2B staff transportation platform by [i4Matrix](https://i4matrix.com). Built to convert three distinct audiences — companies, staff, and drivers — into app downloads and demo requests.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.9 | Type safety |
| Vite | 7 | Build tool & dev server |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 12 | Animations |
| Lucide React | 0.562 | Icons |
| Radix UI | various | Accessible UI primitives |
| shadcn/ui | — | Component library (via Radix) |

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm

```bash
# 1. Clone the repo
git clone https://github.com/your-org/i4van-website.git
cd i4van-website

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Scripts

```bash
npm run dev        # Start development server (Vite HMR)
npm run build      # Type-check + production build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

---

## Project Structure

```
app/
├── public/                  # Static assets (favicon, images)
├── src/
│   ├── sections/            # Full-page sections (assembled in App.tsx)
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── EcosystemSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── WhyI4vanSection.tsx
│   │   ├── AppDownloadSection.tsx
│   │   ├── CTASection.tsx
│   │   └── FooterSection.tsx
│   │
│   ├── components/          # Reusable UI components
│   │   ├── PhoneScreens.tsx     # App mockup screens (Staff / Driver / Company)
│   │   ├── PhoneMockup.tsx      # Phone frame wrapper with float animation
│   │   ├── FloatingCard.tsx     # Floating stat cards on hero
│   │   ├── EcosystemCard.tsx    # Dispatcher → CompanyCard / StaffCard / DriverCard
│   │   ├── CompanyCard.tsx      # Company audience card
│   │   ├── StaffCard.tsx        # Staff audience card
│   │   ├── DriverCard.tsx       # Driver audience card
│   │   ├── FeatureCard.tsx      # Platform feature card (orange hover fill)
│   │   ├── SectionHeader.tsx    # Shared section label + heading + description
│   │   ├── PrimaryButton.tsx    # Solid orange CTA button
│   │   ├── SecondaryButton.tsx  # Outlined CTA button
│   │   ├── GhostButton.tsx      # Text + arrow link button
│   │   ├── AppStoreButton.tsx   # Apple / Google Play badges
│   │   └── ui/                  # shadcn/ui primitives (auto-generated)
│   │
│   ├── hooks/               # Custom React hooks
│   ├── lib/
│   │   └── utils.ts         # cn() helper (clsx + tailwind-merge)
│   ├── App.tsx              # Root component — assembles all sections
│   ├── main.tsx             # React entry point
│   └── index.css            # Global styles + Tailwind directives
│
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Page Sections

Sections are assembled top-to-bottom in `App.tsx`:

| Section | File | Description |
|---|---|---|
| Navbar | `Navbar.tsx` | Sticky nav — transparent → white on scroll |
| Hero | `HeroSection.tsx` | Headline + rotating 3-phone carousel + floating stat cards |
| Trust | `TrustSection.tsx` | Company logos / social proof bar |
| Ecosystem | `EcosystemSection.tsx` | 3-audience layout: Company (dark full-width) + Staff + Driver |
| Features | `FeaturesSection.tsx` | 8-feature grid with orange slide-up hover + stats bar |
| How It Works | `HowItWorksSection.tsx` | 4-step numbered process |
| Why i4van | `WhyI4vanSection.tsx` | Value proposition / differentiators |
| App Download | `AppDownloadSection.tsx` | App store CTAs with phone previews |
| CTA | `CTASection.tsx` | Final conversion banner |
| Footer | `FooterSection.tsx` | Links, contact, store badges |

---

## Key Components

### `HeroSection.tsx`
- Three phone screens (`DriverAppScreen`, `StaffAppScreen`, `CompanyDashboardScreen`) rotate every 3 seconds with a 3D carousel effect
- Three `FloatingCard` components (`Live · 12 vehicles`, `94% on time`, `Route 7`) are anchored inside a single `320×580` relative container so they stay locked to the phones on scroll
- Parallax handled by a single `phonesY` `useTransform` on the outer wrapper

### `PhoneScreens.tsx`
Contains six screen components:
- `StaffAppScreen` — map tracking, PIN display, seat card, bottom nav
- `DriverAppScreen` — dark navigation map, speed badge, passenger list
- `CompanyDashboardScreen` — fleet stats, live map, route progress list
- `StaffAppDownloadScreen` / `DriverAppDownloadScreen` — aliases used in the App Download section

### `EcosystemCard.tsx`
Dispatches to three separate card files based on `variant` prop:
```tsx
<EcosystemCard variant="company" ... />  // → CompanyCard.tsx
<EcosystemCard variant="staff"   ... />  // → StaffCard.tsx
<EcosystemCard variant="driver"  ... />  // → DriverCard.tsx
```
Split into separate files to avoid JSX parser issues with Babel/Vite.

### `FeatureCard.tsx`
Uses a CSS class `.feat-card` with injected `<style>` for the slide-up orange fill hover effect. The `.feat-fill` div animates from `translateY(100%)` to `translateY(0%)` on hover.

---

## Brand

| Token | Value |
|---|---|
| Primary orange | `#f97316` |
| Dark orange | `#ea580c` |
| Charcoal | `#1A1A1A` |
| Light orange bg | `#FFF7ED` |
| Muted text | `#6B7280` |
| Section dark bg | `#111111` |

Fonts are set via Tailwind config — check `tailwind.config.js` for `fontFamily` tokens (`brand-orange`, `text-brand-orange`, etc.).

---

## Deployment

The site builds to a static `dist/` folder — deploy anywhere that serves static files.

**Vercel (recommended):**
```bash
npm install -g vercel
vercel
# Then set custom domain i4van.lk in the Vercel dashboard
```

**Manual build:**
```bash
npm run build
# Upload contents of dist/ to your hosting provider
```

**DNS setup for i4van.lk:**
Add the following records at your domain registrar:
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

---

## Before Going Live

- [ ] Replace placeholder App Store / Play Store links (`href="#"`) with real URLs
- [ ] Replace placeholder phone mockups with actual app screenshots when available
- [ ] Add real company logo SVG to `public/`
- [ ] Update contact email and phone in `FooterSection.tsx`
- [ ] Add Google Analytics or preferred analytics (defer loading)
- [ ] Run `npm run build` and test `npm run preview` — check all sections
- [ ] Test on Chrome, Safari, Firefox, and mobile (iOS + Android)
- [ ] Verify all Framer Motion animations work on low-end devices (reduce motion media query)

---

## Known Notes

- `EcosystemCard` and its sub-cards use inline `style` props instead of Tailwind classes for colors in some places — this is intentional to avoid Babel/Vite JSX parser issues with complex class strings containing `/` characters (e.g. `bg-orange-500/20`)
- `FeatureCard` injects a `<style>` block for the hover fill animation because CSS transitions on pseudo-elements can't be done purely with Tailwind utilities

---

## License

Private — © 2026 i4Matrix (Pvt) Ltd. All rights reserved.