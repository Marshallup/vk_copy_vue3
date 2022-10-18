/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'regular-dark': '#222222',
        'regular-dark-1': '#292929',
        'text-regular-dark': '#ffffff',
      },
      spacing: {
        'header-height': '48px',
      },
    },
  },
  plugins: [],
}
