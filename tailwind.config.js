/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  safelist: [
    'translate-y-0',
    '-translate-y-full',
  ],
  theme: {
    extend: {
      fontSize: {
        'hero': ['8.5vw', {
          lineHeight: '1',
        }]
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#F5E6FF',
          200: '#E9CCFF',
          300: '#DA99FF',
          400: '#CC66FF',
          500: '#CC00FF',
          600: '#9900CC',
          700: '#730099',
          800: '#4D0066',
          900: '#330033',
        }
      },
    },
  },
  plugins: [],
};
