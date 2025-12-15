/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: '#FFD1DC',
        pastelBlue: '#AEEFFF',
        pastelYellow: '#FFF6A3',
        pastelGreen: '#C8FFD4',
        pastelPurple: '#E1CFFF',
      },
      animation: {
        bounce: 'bounce 1s infinite',
        wiggle: 'wiggle 1s infinite',
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};
