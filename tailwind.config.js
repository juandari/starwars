module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      backgroundImage: theme => ({
        'starwars': "url('/src/assets/home.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
