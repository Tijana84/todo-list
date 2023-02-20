/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#69665C",
        white: "#FFFFFF",
        grey: "#B2AFA1",
        yellow: "#FFF9De",
        blue: "#D1E5F7",
        green: "#DAF2D6",
        red: "#FFCECE",
        violet: "#D2CEFF",
      },
    },
  },
  plugins: [],
}
