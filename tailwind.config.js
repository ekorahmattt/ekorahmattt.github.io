/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.{html, js}"],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary : '#383838',
        second: '#1e1e1e',
        profile1: '#E4C000',
        profile2: '#00C2FF',
        profile3: '#F60C61',
      },
      screens:{
        '2xl' : '1320px'
      },
      animation:{
        fade: 'fadeIn 1s ease-in-out',
      },
      keyframes:theme =>({
        fadeIn:{
          '0%':{opacity:0, transform:'translateY(50px)'},
          '100%':{opacity:100, transform:'translateY(0px)'},
        }
      }),
    },
  },
  plugins: [],
}

