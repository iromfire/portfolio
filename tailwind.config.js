/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("prettier-plugin-tailwindcss")],
};
