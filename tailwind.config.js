/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-new': 'inset 0 0.5px 6px 0 rgb(0 0 0 / 0.05)',
      },
      keyframes: {
        slotMachine: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-50%)' },
          '40%': { transform: 'translateY(50%)' },
          
        },
        
      },
      animation: {'slot': 'slotMachine 1s'},
      
    },
  },
  plugins: [],
}

