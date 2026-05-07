# I4van.lk Official Website

A modern, responsive marketing website for I4van.lk, a smart staff transport platform built with Next.js App Router, TypeScript, and Tailwind CSS.

## Overview

I4van.lk is a real-world staff transport platform that serves three primary audiences:
- Drivers: Earn with structured trips and clear schedules
- Employees: Book seats and track rides in real time
- Companies: Manage staff transport with full visibility and control

This website provides comprehensive marketing content and information about the platform for all three user groups.

## Technology Stack

- Framework: Next.js 16.2.4 with App Router
- Language: TypeScript
- Styling: Tailwind CSS with custom theme configuration
- Icons: lucide-react
- Fonts: Google Fonts (Manrope for body, Space Grotesk for display)
- Build Tool: Turbopack for optimized production builds
- Image Optimization: next/image with remote pattern support

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          Root layout with metadata and fonts
│   ├── page.tsx            Homepage with all sections and content
│   ├── globals.css         Global Tailwind directives and utilities
│   └── favicon.ico         Browser tab icon
├── components/
│   ├── hero.tsx            Hero section with logistics image
│   ├── site-header.tsx     Sticky header with logo, nav, and mobile menu
│   ├── footer.tsx          Footer with links and contact info
│   ├── reveal.tsx          IntersectionObserver-based reveal animation
│   ├── section-heading.tsx Reusable section heading component
│   ├── feature-grid.tsx    Grid renderer for feature cards
│   └── app-download.tsx    App download section with store buttons
public/
├── images/
│   ├── i4van_logo.png      Main logo used in header and footer
│   ├── logistic.png        Background image for hero and KPI sections
│   ├── favicon.ico.png     Favicon image
└── [other assets]
tsconfig.json               TypeScript configuration
next.config.mjs             Next.js configuration with remotePatterns
tailwind.config.ts          Tailwind theme extensions and utilities
postcss.config.mjs          PostCSS with Tailwind and Autoprefixer
.eslintrc.json             ESLint configuration extending next/core-web-vitals
package.json               Project dependencies and scripts
```

## Key Features

### Responsive Design
- Mobile-first approach with responsive breakpoints
- Mobile hamburger menu for navigation on small screens
- Adaptive two-column layouts that collapse to single column on mobile

### Active Section Highlighting
- IntersectionObserver detects visible sections during scroll
- Navigation links highlight in orange when their section comes into view
- Works consistently across both desktop and mobile navigation

### Smooth Reveal Animations
- Fade-in animations triggered as users scroll
- Configurable delay for staggered reveal effects
- Implemented via IntersectionObserver for optimal performance

### Consistent Feature Cards
- Equal height across all sections using flexbox layout
- Responsive grid layouts (2-3 columns depending on screen size)
- Standardized structure: icon, title, and description

### Page Sections

1. Hero Section - Primary call-to-action with logistics background image
2. Audiences Overview - Three target user groups overview
3. Drivers Benefits - Five key benefits specific to drivers
4. Employees Benefits - Five key benefits specific to employees
5. Companies Benefits - Five key benefits for company administrators
6. How It Works - Five-step platform process flow
7. App Download - Download section with app store buttons
8. Core Features - Five main platform features
9. Trust & Safety - Five trust-building security features
10. Testimonials - Sample feedback from all three user groups
11. Today's Transport Network - Live visibility section with KPI metrics
12. Get Started CTA - Call-to-action section with gradient background
13. Footer - Navigation links, contact information, and social media

## Color Scheme & Typography

### Colors
- Primary Gradient: Linear gradient from warm to vibrant orange
- Accent Orange: #ff6a3d (used for highlights, buttons, and active navigation)
- Text Color: Charcoal/dark gray (#082532) for readability
- Backgrounds: White, slate-50, and slate-100 for section contrast
- Dark Footer: slate-950 background color

### Fonts
- Display Font: Space Grotesk (modern, tech-forward appearance)
- Body Font: Manrope (clean, readable, professional)
- Letter Spacing: Custom tracking for visual hierarchy

## Installation & Setup

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser. Changes reload automatically.

### Production Build
```bash
npm run build
```
Creates optimized production build with TypeScript checking and static page generation.

### Start Production Server
```bash
npm start
```
Runs the optimized production build locally.

### Code Quality Checks
```bash
npm run lint
```
Runs ESLint to check code quality and consistency.

## Configuration Details

### Next.js Configuration (next.config.mjs)
- Configured for ESM module format
- Remote image domain: images.unsplash.com (for external images)
- Optimized for static and dynamic content

### TypeScript Configuration (tsconfig.json)
- Strict mode enabled for type safety
- Path alias: @/* maps to ./src/*
- Includes DOM and Next.js type definitions

### Tailwind Configuration (tailwind.config.ts)
Extended theme includes:
- Custom brand colors and gradients
- Additional border radius values
- Animation definitions for reveal effects
- Glass morphism utility classes
- Custom grid background pattern

### PostCSS Configuration (postcss.config.mjs)
- Tailwind CSS processing
- Autoprefixer for vendor prefixes

## Navigation & Anchor Links

Page navigation uses anchor links for smooth scrolling:
- #hero - Hero section
- #drivers - Drivers benefits section
- #employees - Employees benefits section
- #companies - Companies benefits section
- #app - App download section
- #trust - Trust and safety section
- #contact - Footer and contact section

Clicking the header logo scrolls to the hero section. Navigation links highlight in orange when their corresponding section is in view.

## Images & Assets

### Current Images
- i4van_logo.png - Brand logo (header and footer)
- logistic.png - Background for hero and KPI sections
- favicon.ico.png - Browser tab icon

### Image Optimization
- All images use next/image component
- Explicit width and height properties prevent layout shift
- Priority flag set for above-the-fold images (LCP optimization)
- Lazy loading enabled for below-the-fold images

### Adding New Images
1. Place image file in public/images/
2. Import and use next/image component
3. Specify width, height, and alt text
4. Use priority={true} for critical images above the fold

## Performance Optimization

### Image Loading Strategy
- Header logo: priority and eager loading for LCP
- Feature images: lazy loaded by default
- Object-cover class ensures proper aspect ratio

### Code Splitting
- Modular component architecture
- Automatic code splitting by Next.js
- Tree-shakeable dependencies

### SEO Best Practices
- Semantic HTML elements (section, article, nav, footer)
- Proper heading hierarchy (h1, h2, h3)
- Descriptive alt text on all images
- Metadata configured in root layout

## Customization Guide

### Update Content
Edit src/app/page.tsx to modify:
- Section headings and descriptions
- Feature and benefit lists
- Testimonial quotes and attribution
- Call-to-action text

### Change Brand Colors
Modify tailwind.config.ts:
- Brand gradient colors
- Accent (ember) color: #ff6a3d
- Text and background colors

### Update Navigation
Edit src/components/site-header.tsx:
- navItems array for link labels and hrefs
- Mobile menu behavior
- Logo link destination

### Create New Sections
1. Create component in src/components/ (optional)
2. Add content data to src/app/page.tsx
3. Add section element with id attribute for anchor linking
4. Wrap interactive content with Reveal component

### Replace Logo
Replace public/images/i4van_logo.png with your new logo file. The image dimensions should be optimized for the header size.

## Browser Support

Supports modern browsers with ES2020+ JavaScript support:
- Chrome and Edge (latest versions)
- Firefox (latest version)
- Safari (latest version)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Static Export
The site exports as fully static HTML:
```bash
npm run build
```
Output available in .next/out/ with all pages pre-rendered.

### Deployment Platforms
Recommended platforms for static hosting:
- Vercel (native Next.js support)
- Netlify (supports static export)
- GitHub Pages (with static build)
- Any static file hosting service (AWS S3, Cloudflare Pages, etc.)

## Maintenance

### Regular Maintenance Tasks
- Keep npm dependencies updated: npm update
- Review TypeScript types for accuracy
- Monitor Next.js release notes
- Test responsive design across devices
- Verify all anchor links work correctly
- Check image loading performance

### Performance Monitoring
- Monitor Core Web Vitals (LCP, FID, CLS)
- Check image loading times and optimization
- Test mobile navigation and scrolling
- Validate form submissions and interactions

## Documentation & Resources

- Next.js Official Documentation: https://nextjs.org/docs
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- TypeScript Documentation: https://www.typescriptlang.org/docs
- Lucide React Icons: https://lucide.dev

## Contact Information

For questions or support:
- Email: hello@i4van.lk
- Phone: +94 70 123 4567
- Location: Colombo, Sri Lanka

## License

Proprietary - I4van.lk Official Website. All rights reserved.
