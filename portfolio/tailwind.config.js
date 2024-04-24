/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberpunk: {
          50: "#f8e6e6",
          100: "#e6bfbf",
          200: "#d39999",
          300: "#c06666",
          400: "#ad3333",
          500: "#990000",
          600: "#800000",
          700: "#660000",
          800: "#4c0000",
          900: "#330000",
          950: "#151316",
        },
        violet: {
          50: "#faf6fe",
          100: "#f4eafd",
          200: "#ead9fb",
          300: "#dabbf7",
          400: "#c390f0",
          500: "#ac65e7",
          600: "#9745d8",
          700: "#7c31b5",
          800: "#6e2e9b",
          900: "#5a277c",
          950: "#3c105b",
        },
      },
    },
  },
  plugins: [],
}

