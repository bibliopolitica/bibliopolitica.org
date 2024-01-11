/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./site/**/*.{html,liquid,md,js}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Alegreya", "serif"],
      }
    },
  },
  daisyui: {
    themes: ["light", "dark", "lemonade", "coffee", "retro"],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ]
}

