/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

