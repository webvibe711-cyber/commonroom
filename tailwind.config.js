/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#20352c',
        forest: '#28644d',
        leaf: '#e1eee3',
        paper: '#f5f6f0',
        lime: '#c9e78b',
        coral: '#ed765f',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}