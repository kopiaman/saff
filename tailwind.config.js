/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5520cb",
        secondary: "#5ce1e6",
      },
    },
    plugins: [],
  },
};
