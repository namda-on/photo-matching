module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Do Hyeon", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
