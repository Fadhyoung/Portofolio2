/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0D2237',
        midBlue: '#2E77AE',
        amber: '#FF8E2B',
      },
    },
  },
  plugins: [],
}
