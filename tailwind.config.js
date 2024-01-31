/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins","sans-serif","sans-serif","serif"],
        big:["Big Shoulders Display"]
      }
    },
  },
  plugins: [],
}

