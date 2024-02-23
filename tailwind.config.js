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
          "base-100": "#F3EDE2", // alabaster
          "base-content": "#230616", // dark purple
          "accent": "#006642", // dartmouth green "#007A50", // dark spring green
          "secondary": "#a6673e", // brown sugar
          "neutral": "#E7DBC5", // pearl
          "neutral-content": "#230616" // dark purple
        },
      }, 
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-100": "#11030B", // licorice
          "base-content": "#E7DBC5", // pearl
          "accent": "#61A88F", // zomp
          "secondary": "#a6673e", // brown sugar
          "neutral": "#33272e", // raisin black
          "neutral-content": "#F3EDE2", // alabaster
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ]
}

