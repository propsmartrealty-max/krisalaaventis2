/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        gold: { 400: '#D4AF37', 500: '#C59B27', 600: '#AA820A' },
        dark: '#0B0F19'
      },
      fontFamily: { sans: ['Outfit', 'sans-serif'] }
    }
  },
  plugins: [],
}
