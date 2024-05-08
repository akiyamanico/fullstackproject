/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        automali: ['"Automali"', "sans-serif"],
        callingstone: ['"Callingstone"', "sans-serif"],
        louis: ['"Louis George Cafe"', "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

