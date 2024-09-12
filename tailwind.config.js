/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist//*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#B80A0C',
        secondary: '#ed0000',
      }
    },
  },
  plugins: [],
}