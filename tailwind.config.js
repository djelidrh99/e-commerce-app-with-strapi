/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'open':['Open Sans','sans-serif']
    },
    screens:{
      'xs': '440px',
      'xmd': '600px',
      'md':'750px',
      'lmd': '900px',
      "lg":"1200px"
    },
    extend: {},
  },
  plugins: [],
}

