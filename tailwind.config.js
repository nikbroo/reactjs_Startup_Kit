/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      // sans: ["Inter", "sans-serif"],
      // sans: ["Lato", "sans-serif"],
    },
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
        text: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#002D4E",
        secondary: "#1B54FE",
      },
    },
  },
  plugins: [],
};
