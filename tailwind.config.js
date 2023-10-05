module.exports = {
  content: [
    './_includes/*.*',
    './css/styles.css',
    './*.*',
  ],
  darkNode: 'class', 
  theme: {
    extend: {
      fontFamily: { 
        
      },
      fontSize:{ 
        
      },
      colors:{ 
        
      },
      inset:{
        '9999':'9999px'
      },
      screens: {
        'xxs':'480px',
        'xs': '768px',
        'sm': '992px',
        'md': '1320px'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ]
}