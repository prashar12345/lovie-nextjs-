module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coolBlack: "#363638",
        textColor: "#5C5C5C",
        borderColor: "#363638",
        lightGray: "#F8FAFC",
        lightBlue: "#31B5F7",
        coolOrange: "#E84414",
        coolDarkGreen: "#337357",
        coolDarkerGreen: "#337357",
      },
      fontFamily: {
        sans: ["Inter"],
        cool: ["Bodoni Moda"],
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 960px) { ... }

      lg: "992px",
      xl: "1200px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
