/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          default: "#151515",
          900: "#121212",
        },
        yellow: {
          100: "#fffbe9",
          200: "#fffbf5",
          300: "#ffee32",
          500: "#fdca00",
        },
        orange: {
          500: "#f38900",
        },
        gray: {
          800: "#484848",
          900: "#242038",
        },
      },
      fontFamily: {
        arimo: ["Arimo", "sans-serif"],
      },
      boxShadow: {},
      opacity: {
        0: "0",
        100: "100",
      },
      scale: {},
      animationIterationCount: {},
      animation: {},
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
