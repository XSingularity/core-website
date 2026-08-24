/** @type {import('tailwindcss').Config} */
// Tokens for the «Un solo punto» world (2026-08-24). Every color here is a
// role, not a hue name, so a theme swap never touches a component.
// Contrast on `paper` (#F5F3EE), WCAG 2.1: ink 15.1:1 · navy 10.8:1 ·
// amber 5.6:1 · green 5.1:1 · red 6.0:1. Text never goes below 5:1 — the
// owner reads this on an Android in the sun (PRODUCT.md).
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: { lg: '1024px', xl: '1200px' },
    },
    extend: {
      colors: {
        paper: { DEFAULT: '#F5F3EE', deep: '#ECE8E0' },
        ink: '#14202A',
        navy: { DEFAULT: '#0B3D4A', soft: '#2A5A67' },
        amber: { DEFAULT: '#96500B', hover: '#7A400A', tint: '#F6E3C9' },
        green: { DEFAULT: '#0B7663', tint: '#D2EDE6' },
        red: { DEFAULT: '#B42318', tint: '#F8D9D5' },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderWidth: { 3: '3px' },
      boxShadow: {
        // Offset + blur: a real cast shadow, never a halo.
        firm: '0 6px 18px -6px rgba(11, 61, 74, 0.28)',
        key: '0 10px 24px -10px rgba(150, 80, 11, 0.55)',
      },
      keyframes: {
        draw: { from: { strokeDashoffset: '1' }, to: { strokeDashoffset: '0' } },
        settle: {
          '0%': { transform: 'scale(0.92)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulse2: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        draw: 'draw 1.4s cubic-bezier(0.19, 1, 0.22, 1) both',
        settle: 'settle 0.9s cubic-bezier(0.19, 1, 0.22, 1) both',
        pulse2: 'pulse2 3.2s ease-in-out infinite',
      },
      transitionTimingFunction: { 'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)' },
    },
  },
  plugins: [],
}
