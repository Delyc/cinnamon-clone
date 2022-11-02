/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "black-primary":"#222222",
        "gray-primary":"#666666",
        "gray-secondary":"#525252",
        "light-gray":"#CFCFCF",
        "white-text":"#F6F6F6",
        "black-bg": "#1C1C1C",
        "blue-light":"#5135FF",
        "position-white": "#F9F9F9"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}