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

        // Weightless drift for the decorative cubes — transform-only (GPU),
        // long staggered cycles so they never sync into a visible "bounce".
        'float-1': 'float1 12s ease-in-out infinite',
        'float-2': 'float2 13.5s ease-in-out infinite',
        'float-3': 'float3 11s ease-in-out infinite',
        'float-4': 'float4 14s ease-in-out infinite',
        'float-5': 'float5 12.5s ease-in-out infinite',
        // Light travelling down the mobile workflow timeline.
        'beam': 'beam 3.4s ease-in-out infinite',

        'fade-up': 'fadeUp 0.7s ease-out both',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        // Each cube keeps its resting tilt and drifts on a unique path.
        float1: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(44deg)' },
          '50%': { transform: 'translate3d(6px, -22px, 0) rotate(50deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(178deg)' },
          '50%': { transform: 'translate3d(-8px, -16px, 0) rotate(184deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(43deg)' },
          '50%': { transform: 'translate3d(5px, -15px, 0) rotate(36deg)' },
        },
        float4: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(-4deg)' },
          '50%': { transform: 'translate3d(-6px, -20px, 0) rotate(6deg)' },
        },
        float5: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(45deg)' },
          '50%': { transform: 'translate3d(7px, -18px, 0) rotate(52deg)' },
        },
        beam: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '12%, 88%': { opacity: '1' },
          '100%': { transform: 'translateY(260%)', opacity: '0' },
        },
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
      sans: ['var(--font-outfit)', 'Outfit', 'system-ui', 'sans-serif'],
      display: ['var(--font-space-grotesk)', 'var(--font-outfit)', 'system-ui', 'sans-serif'],
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
