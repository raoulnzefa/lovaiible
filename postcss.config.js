module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer')
  ],
}
