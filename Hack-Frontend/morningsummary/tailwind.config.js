/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 40s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-250px*9))",
          },
        },
      },
    },
  },
  plugins: [],
};
