/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require('@tailwindcss/forms')
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#FFFDFA",
        primary: "#FF0000",
      },
    },
  },
};
