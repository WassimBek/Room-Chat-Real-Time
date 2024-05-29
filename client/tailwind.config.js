/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-green' : '#69FAB4' ,
        'primary-blue' : '#12182B' ,
        'primary-yellow' : '#FFC700' ,
        'primary-grey' : '#E7ECFF' ,
      },
      gridTemplateColumns : {
        'aside-bar-checked' : "65% 5% 30%" ,
        'aside-bar' : "95% 5% 0%" ,
        'aside-franction' : "1fr 1fr"
      }
    },
  },
  plugins: [],
}

