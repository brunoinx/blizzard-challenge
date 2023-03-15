/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button': '#00AEFF'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        diablo: 'url(/assets/banner-hero/games/diablo-bg.png)',
        hearthstone: 'url(/assets/banner-hero/games/hearthstone-bg.png)',
        wow: 'url(/assets/banner-hero/games/wow-bg.png)',
      },
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1440px',
        'xl': '1920px'
      }
    },
  },
  plugins: [],
}
