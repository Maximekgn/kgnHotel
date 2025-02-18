/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbed',
          100: '#fbf6d1',
          200: '#f7eba5',
          300: '#f2d970',
          400: '#ecc344',
          500: '#e4a826',
          600: '#d1841d',
          700: '#ad611b',
          800: '#8c4b1d',
          900: '#723d1b',
          950: '#421f0d',
        },
      },
    },
  },
  plugins: [],
};