/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./src/partials/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        main: '#3A3A3A',
        brandOrange: '#D55C27',
        brandBrown: '#520D02'
      },
    },
  },
  plugins: [],
}