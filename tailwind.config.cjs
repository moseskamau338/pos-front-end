/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'highlight-light':colors.sky[100],
        'highlight':colors.sky[600],
        //emphasis
        'brand-green':'#40ba58',
        'light-green':'#E5F8ED',
        'success':'#55C770',
        //dark mode
        'brand-dark-box': '#1F2C42',
        'brand-dark': '#1A2132'
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography'),
      require('tailwind-scrollbar-hide')
  ],
}
