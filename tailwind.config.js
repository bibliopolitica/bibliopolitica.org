/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./site/**/*.{html,njk,md,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}