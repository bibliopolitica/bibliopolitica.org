/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./site/**/*.{html,liquid,md,js}'],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        serif: ["Alegreya", "serif"],
      }
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#1a237e",
          secondary: "#007706",
          accent: "#1e88e5",
          neutral: "#f0f0f0"
        },
      }, 
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#1a237e",
          secondary: "#007706",
          accent: "#1e88e5"
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ]
}

