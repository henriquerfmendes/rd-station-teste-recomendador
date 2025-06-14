/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        rdblue: '#035d72',
        rdblueLight: '#12a7b6',
        rdgray: '#F5F6FA',
        rdgrayMedium: '#E5E7EB',
        rdtext: '#22223B',
      },
      fontFamily: {
        sans: [
          'Nunito Sans',
          'Open Sans',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
