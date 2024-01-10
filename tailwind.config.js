/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./site/**/*.{html,njk,md,js}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ]
}

