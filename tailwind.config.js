module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        error: "#E52C2C",
        "input-hover": "#4F4F4F"
      },
      fontFamily: { 
        raleway: ["Raleway", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
    },
  },
  plugins: [],
}
