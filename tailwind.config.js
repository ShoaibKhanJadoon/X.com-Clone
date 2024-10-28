/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["*.html"],
  theme: {
    extend: {
      maxWidth: {
        '95%':'95%',
        'custom': '1264px', // Add a custom max-width
        'custom-sm':'690px',
        'custom-lg': '1004px',
        'custom-full': '1280px',
        
      },
      width: {
        '98':'98%',
        'sm-width':'43rem',
        'lg-width':'62.6rem',
        'xl-width':'80rem',
        'bottom':'95vw',
        'custom-sm':'95%',
        'custom-left':'275px',
        '69': '69rem',
        '38':'38rem'
        
      },
      minHeight: {
        'custom': '563px'
      },
      screens: {
        // Max-width breakpoints
        'max-500':{'max':'500px'},
        'min-500':{'min':'500px'},
        'max-1003':{'max':'1003px'},
        'max-sm': { 'max': '639px' },  // Anything below 640px
        'max-md': { 'max': '767px' },  // Anything below 768px
        'max-lg': { 'max': '1023px' }, // Anything below 1024px
        'max-xl': { 'max': '1279px' }, // Anything below 1280px
        'max-2xl': { 'max': '1535px' },// Anything below 1536px
      },
      inset: {
        '88': '91vh',  // Custom top utility using calc
        '75':'81vh',
        '91':'calc(-100vh + 103%)',
        '2.5-percent': '2.5%',
      },
      lineHeight: {
        '0': '0rem',
      },
      padding: {
        
        'lg-pl':'4.7rem',
        'xl-pl': '17.1rem',
      },
    },
  },
  plugins: [],
}

