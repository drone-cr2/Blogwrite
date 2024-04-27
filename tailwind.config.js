/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        "moss-green": "#606c38ff",
        "dark-green": "#283618ff",
        "cornsilk": "#fefae0ff",
        "earth-yellow": "#dda15eff",
        "tiger-yellow": "#bc6c25ff",
      },
      textColor :{
        "moss-green": "#606c38ff",
        "dark-green": "#283618ff",
        "cornsilk": "#fefae0ff",
        "earth-yellow": "#dda15eff",
        "tiger-yellow": "#bc6c25ff",
      }
    },
  },
  plugins: [],
}

