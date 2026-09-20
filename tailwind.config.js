/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg, #08090A)',
        'background-deep': 'var(--color-bg-deep, #010102)',
        'background-secondary': 'var(--color-bg-secondary, #0F1011)',
        surface: 'var(--color-surface, #141516)',
        'surface-hover': 'var(--color-surface-hover, #1A1B1D)',
        'surface-high': 'var(--color-surface-high, #1E1F21)',
        'surface-border': 'var(--color-surface-border, rgba(255, 255, 255, 0.09))',
        'surface-border-subtle': 'rgba(255, 255, 255, 0.05)',
        'text-primary': 'var(--color-text-primary, #F7F8F8)',
        'text-secondary': 'var(--color-text-secondary, #D0D6E0)',
        'text-muted': 'var(--color-text-muted, #8A8F98)',
        accent: {
          DEFAULT: 'var(--color-accent, #5E6AD2)',
          hover: 'var(--color-accent-hover, #7170FF)',
          light: 'var(--color-accent-light, #8285F8)',
          subtle: 'var(--color-accent-subtle, rgba(94, 106, 210, 0.15))',
          border: 'var(--color-accent-border, rgba(113, 112, 255, 0.35))',
        },
        violetAccent: {
          DEFAULT: '#7170FF',
          subtle: 'rgba(113, 112, 255, 0.15)',
          border: 'rgba(113, 112, 255, 0.35)',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
