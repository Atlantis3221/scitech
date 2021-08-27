module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    placeholderColor: theme => theme('colors'),
    extend: {
      colors: {
        error: "#E52C2C",
        "input-hover": "#4F4F4F",
        "scitech-red": "#FA3E3E",
        "ui-gray": "#ABAAAA"
      },
      maxHeight: {
        30: "7.5rem"
      },
      fontFamily: { 
        raleway: ["Raleway", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
      ringOpacity: ['hover', 'active']
    },
  },
  plugins: [],
}
