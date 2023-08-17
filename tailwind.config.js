/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#334155',
        dark: '#020617',
      },
      animation: {
        'bounce-3d': 'bounce-fly 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        'bounce-fly' : {
          'from' : {transform: 'translateY(1rem)'},
          'to' : {transform: 'translateY(-1rem)'},
        },
      },
      fontFamily: {
        'space-grotesk': ["'Fira Code', monospace"],
      },
      screens: {
        '2xl' : '1320',
      },
    },
  },
  plugins: [],
}

