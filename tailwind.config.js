/** @type {import('tailwindcss').Config} */
const colors = {
  'white-alpha8': 'rgba(255, 255, 255, 0.08)',
}

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '15px',
      screens: {
        '2xl': '1106px',
      },
    },
    extend: {
      colors: {
        'grey-300': '#222222',
        'grey-400': '#292929',
        'grey-500': '#141414',
        'grey-700': '#424242',
        'grey-100': '#e1e3e6',
        'grey-600': '#939393',
        'sky-300': '#71aaeb',
        'white-alpha8': colors['white-alpha8'],
        'bg-hover-dark': colors['white-alpha8'],
        'text-regular-dark': '#ffffff',
      },
      spacing: {
        'header-height': '48px',
      },
      fontSize: {
        'sm-m': ['0.813rem', '1.125rem'],
      },
    },
  },
  plugins: [],
}
