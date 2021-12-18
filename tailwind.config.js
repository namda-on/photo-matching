module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Do Hyeon", "sans-serif"],
    },
    maxWidth: {
      card: "128px",
      layout: "22rem",
      100: "100%",
    },
    extend: {
      animation: {
        shake: "shake 1s ease-in-out infinite",
      },
      keyframes: {
        shake: {
          "4%": { transform: "translate(0px, 1px) rotate(0.5deg)" },
          "8%": { transform: "translate(0px, 1px) rotate(0.5deg)" },
          "12% ": { transform: "translate(1px, 1px) rotate(0.5deg)" },
          "16% ": { transform: "translate(0px, 0px) rotate(0.5deg)" },
          "20%": { transform: "translate(1px, 0px) rotate(0.5deg)" },
          "24%": { transform: "translate(1px, 1px) rotate(0.5deg)" },
          "28%": { transform: "translate(0px, 0px) rotate(0)" },
          "0%, 100%": { transform: "translate(0, 0) rotate(0)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
