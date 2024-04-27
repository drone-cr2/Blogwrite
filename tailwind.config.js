/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        "cornsilk": "#fefae0ff",
        "earth-yellow": "#dda15eff",
        "tiger-yellow": "#bc6c25ff",
      },
      textColor :{
        "cornsilk": "#fefae0ff",
        "earth-yellow": "#dda15eff",
        "tiger-yellow": "#bc6c25ff",
      }
    },
  },
  plugins: [],
}

