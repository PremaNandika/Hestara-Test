const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#777777',
        purple: '#b84ed9',
      },
    },
  },
  plugins: [],
}
