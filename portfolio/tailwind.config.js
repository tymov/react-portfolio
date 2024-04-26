/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vulcan: {
          50: "#f0f3ff",
          100: "#dfe5ff",
          200: "#b8c9ff",
          300: "#7a9eff",
          400: "#346dfc",
          500: "#0949ee",
          600: "#0031cc",
          700: "#0026a5",
          800: "#042488",
          900: "#0a2170",
          925: "#020617",
          950: "#020617",
        },
      },
    },
  },
  plugins: [],
};
