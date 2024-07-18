/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      thisFont: ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        "font-light": "#040316",
        "back-light": "#ffffff",
        "primary-light": "#2A3D65",
        "secondary-light": "#9F9DD0",
        "accent-light": "#d08362",
        "font-dark": "#ffffff",
        "back-dark": "#0e0d1c",
        "primary-dark": "#2a3d65",
        "secondary-dark": "#9d502f",
        "accent-dark": "#9d502f",
      },
      screens: {
        xxs: { min: "200px", max: "500px" },
      },
    },
    plugins: [], // Add the missing plugins property here
  },
});
