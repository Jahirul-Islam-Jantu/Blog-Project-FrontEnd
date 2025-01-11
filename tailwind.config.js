// import daisyui from "daisyui";
//
//
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     daisyui,
//
//   ],
//   daisyui: {
//     themes: ['light'], // Use only the light theme
//   },
// }

const withMT = require("@material-tailwind/react/utils/withMT");
const daisyui = require("daisyui")

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,

  ],
  daisyui: {
    themes: ['light'], // Use only the light theme
  },
});

