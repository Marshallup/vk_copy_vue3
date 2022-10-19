/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'grey-300': '#222222',
        'grey-400': '#292929',
        'grey-500': '#141414',
        'grey-700': '#424242',
        'grey-100': '#e1e3e6',
        'grey-600': '#939393',
        'text-regular-dark': '#ffffff',
      },
      spacing: {
        'header-height': '48px',
      },
      fontSize: {
        sm: ['0.813rem', '1.125rem'],
      },
    },
  },
  plugins: [],
}
