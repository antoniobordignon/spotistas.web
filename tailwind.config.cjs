/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        gotham: ['gotham']
      }
    },
  },
  plugins: [],
}
