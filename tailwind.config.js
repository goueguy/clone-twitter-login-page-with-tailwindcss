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
      'purple':colors.purple
    },
    screens: {
      'xs': {'min': '200px', 'max': '480px'},
      'xsm': {'min': '481px', 'max': '540px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
