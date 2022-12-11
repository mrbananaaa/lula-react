/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        our: {
          dark: "#111111",
          gray: "#D3D3D3"
        },
      },
      fontFamily: {
        poppins: "Poppins"
      }
    },
  },
  plugins: [],
}
