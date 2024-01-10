/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./site/**/*.{html,njk,md,js}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "lemonade", "coffee", "retro"],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ]
}

