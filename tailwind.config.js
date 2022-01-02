module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "system-ui"],
      serif: ["apple-system", "Gerorgia"],
      body: ["Open Sans"],
    },
    extend: {
      colors: {
        black: {
          100: "#1F2125",
          200: "#292B30",
          300: "#32353B",
        },
        astra: {
          100: "#575FFE",
          200: "#3F49FE",
        },
        money: {
          100: "#10b981",
        },
        red: {},
        white: {
          100: "#F0F0F0",
          200: "#FFFFFF",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
