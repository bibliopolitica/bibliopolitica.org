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
          "base-content": "#230616",
          "accent": "#007A50",
          "secondary": "#a6673e",
          "neutral": "#E7DBC5",
          "neutral-content": "#230616"
        },
      }, 
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#1a237e",
          "secondary": "#007706",
          "accent": "#007A50",
          "neutral": "#F9F6F1",
          "primary-content": "#340921"
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ]
}

