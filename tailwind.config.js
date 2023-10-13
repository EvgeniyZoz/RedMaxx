module.exports = {
  content: [
    './_includes/*.*',
    './css/styles.css',
    './*.*',
  ],
  darkNode: 'class', 
  theme: {
    extend: {
      maxWidth: {
        'faq':'980px',
      },
      fontSize:{
        'inherit':['16px', '1.5'],
        '2.5xl':'28px',
        '3.5xl':'32px',
        '4.5xl':'42px'
      },
      boxShadow:{
        'img': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      borderWidth:{
        '3':'3px'
      },
      borderRadius:{
        '2.5xl':'20px'
      },
      height:{
        '22':'86px'
      },
      maxWidth:{
        '3.5xl':'840px',
        'sm_2':'404px'
      },
      padding:{
        '4.5':'18px'
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