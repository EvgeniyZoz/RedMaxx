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
        '3.5xl':'32px',
        '4.5xl':'42px'
      },
      borderRadius:{
        '2.5xl':'20px'
      },
      colors:{ 
        'primary':'#161616',
        'primary2':'#242240',
        'primary3':'#2D2844',
        'primary4':'#91909F',
        'primary5':'#686769',
        'secondary':'#D00000',
        'accent':'#FFD166', //orange
        'accent2':'#F5F2E8', //sand
        'accent3':'#E7E7E7', //grey
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