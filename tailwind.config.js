/** @type {import('tailwindcss').Config} */
module.exports = {
  // "./src/**/*.{html,js}", "./public/**/*.{html,js}", 
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bars': '#34495e', //dark blue
        'bg': 'f5f5f5', //off-white
        'menubg': '#475a70',
      },
      'backgroundColor': 'f5f5f5',
    },
  },
  plugins: [],
}

