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
        'chat-grid' : "25% 75%" ,
      },
      gridTemplateRows : {
        'chat-devider' : "10% 65% 25%"
      }
    },
  },
  plugins: [],
}

