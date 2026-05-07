import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#082532',
        tealink: '#0b5d66',
        ocean: '#0d7f8c',
        ember: '#ff6a3d',
        mist: '#f4f7f8'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(7, 37, 50, 0.12)',
        glow: '0 18px 50px rgba(255, 106, 61, 0.22)'
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'brand-gradient': 'linear-gradient(135deg, #07313f 0%, #0b5d66 52%, #0e7d89 100%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' }
        }
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shine: 'shine 2.4s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
