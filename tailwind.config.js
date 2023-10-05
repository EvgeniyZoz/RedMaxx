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
        'primary':'#161616',
        'primary2':'#242240',
        'secondary':'#D00000',
        'accent':'#FFD166', //orange
        'accent2':'#F5F2E8', //sand
        'accent3':'#D9D9D9',
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