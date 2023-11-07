/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    // 'node_modules/preline/dist/*.js'
  ],
  // plugins: [
  //   require('preline/plugin'),
  // ],
  theme: {
    extend: {},
  },

}
