/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      screens: {
        'sm': '360px',
         // => @media (min-width: 640px) { ... }
         
        'md': '640px',
        // => @media (min-width: 640px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 50s linear infinite",
        marquee: "marquee 40s linear infinite",

        'bounce-slow1': 'bounce 8.2s linear infinite',
        'bounce-slow2': 'bounce 8.4s linear infinite',
        'bounce-slow3': 'bounce 8.6s linear infinite',
        'bounce-slow4': 'bounce 8.8s linear infinite',
        'bounce-slow5': 'bounce 9s linear infinite',

        'fade-up': 'fadeUp 0.7s ease-out both',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%, 100%': { transform: 'scale(1.7)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
      sans: ['Outfit', 'system-ui', 'sans-serif'],
      display: ['"Space Grotesk"', 'Outfit', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
      
   
    },
  },
  plugins: [],
  darkMode: "class",
  mode: 'jit',
}
