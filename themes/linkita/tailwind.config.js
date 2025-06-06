/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  safelist: ["horizontal-scroll"],
  plugins: [require("@tailwindcss/typography")],
};
