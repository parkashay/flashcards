/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#303443',
        'secondary': '#2E4346',
        'text': 'white',
        'accent': '#585048',
        'highlight': '#CA8A04',
        'danger' : '#B91C1C'
      }
    },
  },
  plugins: [],
}