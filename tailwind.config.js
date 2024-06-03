/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px"
      },
      colors: {
        primaryColor: "#010a5e",
        primaryColorLight: "#010d78",
        secondaryColor: "#FFCC00",
        whiteColor: "#fff",
        paragraphColor: "#c0c0c0",
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: "#000",
        darkColorLight: "#171717",
      },
      keyframes: {
        move: {
          '50%': {transform: 'translateY(-1rem)'}
        },
      },
      animation: {
        'moveY': 'move 2s linear infinite'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem"
      }
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      dmsans: ["Dm Sans", "sans-serif"],
      nunito: ["Nunito", "sans-serif"]
    }
  },
  plugins: []
};