/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1200px",
      },  
      fontFamily: {
        pop: ['Poppins', "sans-serif"]
      },
      colors: {
        aboutcard1:"#C96408",
        aboutcard2:"#7937BB",
        aboutcard3:"#3775ED",
        aboutcardcard:"#1A1919",
        massageColor:"#1A1919",
        footerColor:"#3775ED",
        bannerSpanC:"#3775ED",
        afterColor:"#282828",
      },
      backgroundImage: {
        contact: "url('../image/contact.png')",
        
      },
      animation: {
        animte1: 'fan .2s infinite linear ',
        // animte2: "fan2 1s infinite linear ",
         // animte3: 'fan3 10s infinite linear ',
      },
      keyframes: {
        fan: {
          from:{
            transform: 'rotate(0deg)'
          },
          to:{
            transform: 'rotate(180deg)'
            
          }
      
        }
        }
    
      }
  },
  plugins: [require("limbcss")],
}

