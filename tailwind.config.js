/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neu-sans': ['NeuSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}