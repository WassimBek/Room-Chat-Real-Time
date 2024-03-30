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
      }
    },
  },
  plugins: [],
}

