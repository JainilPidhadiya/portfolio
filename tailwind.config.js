/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Palette
        background: {
          DEFAULT: 'var(--color-bg-primary)',
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
        },
        card: {
          DEFAULT: 'var(--color-card)',
          hover: 'var(--color-card-hover)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          subtle: 'var(--color-border-subtle)',
          hover: 'var(--color-border-hover)',
          light: 'var(--color-border)',
          dark: 'var(--color-border)',
        },
        // Accents
        cyan: {
          DEFAULT: 'var(--color-cyan)',
          glow: 'var(--color-cyan-glow)',
        },
        blue: {
          DEFAULT: 'var(--color-blue)',
          glow: 'var(--color-blue-glow)',
        },
        violet: {
          DEFAULT: 'var(--color-violet)',
          glow: 'var(--color-violet-glow)',
        },
        green: {
          DEFAULT: 'var(--color-green)',
          glow: 'var(--color-green-glow)',
        },
        // Backwards compatibility aliases
        paper: 'var(--color-paper)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        dark: 'var(--color-dark)',
        accent: 'var(--color-accent)',
        btn: {
          text: 'var(--color-btn-text)',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        'glow-cyan': 'var(--glow-cyan-sm)',
        'glow-blue': 'var(--glow-blue-sm)',
        'card': 'var(--glow-card)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
