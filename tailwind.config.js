/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0D2237', // Dark Blue
        secondary: '#9333EA', // Purple
        accent: '#F59E0B', // Orange
        danger: '#DC2626', // Red
        success: '#16A34A', // Green
        background: '#F3F4F6', // Light Gray
        textPrimary: '#111827', // Dark Gray (for text)
        textSecondary: '#6B7280', // Medium Gray (for text)
      },
    },
  },
  plugins: [],
}
