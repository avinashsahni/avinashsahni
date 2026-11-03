/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: {
          DEFAULT: '#111111',
          hover: '#161616',
          active: '#1C1C1C',
          muted: '#141414',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.16)',
          strong: 'rgba(255, 255, 255, 0.24)',
        },
        accent: {
          DEFAULT: '#FF6B35',
          hover: '#FF8252',
          light: '#FFA27B',
          glow: 'rgba(255, 107, 53, 0.15)',
          muted: 'rgba(255, 107, 53, 0.08)',
        },
        text: {
          primary: '#EDEDED',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-accent': '0 0 24px -4px rgba(255, 107, 53, 0.25)',
        'glow-subtle': '0 0 40px -10px rgba(255, 107, 53, 0.12)',
        'card': '0 0 0 1px rgba(255, 255, 255, 0.06), 0 4px 12px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 0 0 1px rgba(255, 107, 53, 0.3), 0 8px 24px -4px rgba(0, 0, 0, 0.6), 0 0 20px -2px rgba(255, 107, 53, 0.15)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

