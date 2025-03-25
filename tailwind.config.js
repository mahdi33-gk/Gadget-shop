/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(149, 56, 226)", // Custom Blue
        textCl: "rgba(9, 8, 15, 0.6)", // Custom Orange
        mainBg: "rgb(30, 30, 30)", // Custom Teal
        mainBorder: "rgba(9, 8, 15, 0.1)", // Custom Teal
        anotherBg: "rgba(9, 8, 15, 0.05)", // Custom Teal
      },
      fontFamily:{
        sora: ['Sora']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

