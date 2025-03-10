/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a",
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wipeRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        wipeLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        wipeDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        pop:{
          '0%':{transform:'scale(0)'},
          '50%':{transform:'scale(1.1)'},
          '100%':{transform:'scale(1)'}
        }
      },
      animation: {
        fade: 'fade 1s ease-in-out',
        wipeRight: 'wipeRight 1s ease-in-out',
        wipeLeft: 'wipeLeft 1s ease-in-out',
        wipeDown: 'wipeDown 1s ease-in-out',
        pop:'pop 1s ease-in-out'
      },
    },
  },
  plugins: [],
};
