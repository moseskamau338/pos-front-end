/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'brand-dark-box': '#1F2C42',
        'brand-dark': '#1A2132'
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('tailwind-scrollbar-hide')
  ],
}
