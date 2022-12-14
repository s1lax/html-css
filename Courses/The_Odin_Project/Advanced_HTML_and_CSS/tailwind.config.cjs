/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
    '.src/components/**/*.{html,jsx,js}',
    './index.html',

  ],
  theme: {
    extend: {
      backgroundImage: {
        'cat': "url('cat.png')"
      }
    },
  },
  plugins: [],
}
