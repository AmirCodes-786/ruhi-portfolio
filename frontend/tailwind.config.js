/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyberpunk: {
          dark: '#0a0e27',
          darker: '#050812',
          light: '#f0f4ff',
          neon: {
            pink: '#ff006e',
            cyan: '#00f5ff',
            purple: '#9d4edd',
            green: '#39ff14',
            blue: '#0099ff'
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.4)',
        'neon-cyan': '0 0 20px rgba(0, 245, 255, 0.4)',
        'neon-purple': '0 0 20px rgba(157, 78, 221, 0.4)',
        'glow-lg': '0 0 40px rgba(0, 245, 255, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1', textShadow: '0 0 10px rgba(0, 245, 255, 0.5)' },
          '50%': { opacity: '0.8', textShadow: '0 0 20px rgba(0, 245, 255, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
