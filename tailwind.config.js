const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      'cyan':colors.cyan,
      'teal':colors.teal,
      'emerald':colors.emerald,
      'red':colors.rose,
      'white':colors.white,
      'black':colors.black,
      'green':colors.green,
      'orange':colors.orange,
      'gray':colors.gray,
      'blue':colors.blue,
      'fuchsia':colors.fuchsia,
      
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
