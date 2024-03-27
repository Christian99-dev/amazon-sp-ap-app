/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F9F9F9",
        lightblue:"#EFF0F6"
      },
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
  },
  plugins: [],
};
