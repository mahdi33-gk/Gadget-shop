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
        secondary: "#F59E0B", // Custom Orange
        accent: "#14B8A6", // Custom Teal
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

