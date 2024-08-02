/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        background:"#00296b",
        primary:"#ffd500",
      }
    },
  },
  plugins: [],
}

