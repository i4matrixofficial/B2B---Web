/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // i4van custom colors
        brand: {
          orange: "#FF6B00",
          "orange-light": "#FF8533",
          "orange-glow": "rgba(255, 107, 0, 0.15)",
        },
        dark: {
          DEFAULT: "#111111",
          surface: "#1A1A1A",
          elevated: "#242424",
          border: "#2A2A2A",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#666666",
          tertiary: "#999999",
        },
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-l': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-xl': ['48px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-l': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-m': ['28px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
        'body-l': ['18px', { lineHeight: '1.65', fontWeight: '400' }],
        'body-m': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-s': ['14px', { lineHeight: '1.55', fontWeight: '400' }],
        'label-l': ['14px', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '600' }],
        'label-m': ['12px', { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '600' }],
        'label-s': ['11px', { lineHeight: '1.3', letterSpacing: '0.05em', fontWeight: '500' }],
      },
      maxWidth: {
        'content': '1280px',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        '2xl': '16px',
        '3xl': '20px',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'card': '0 12px 40px rgba(0,0,0,0.08)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.08)',
        'button': '0 8px 24px rgba(255, 107, 0, 0.35)',
        'phone': '0 25px 60px rgba(0,0,0,0.25)',
        'float': '0 8px 32px rgba(0,0,0,0.12)',
        'app-store': '0 4px 12px rgba(0,0,0,0.15)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.3)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
