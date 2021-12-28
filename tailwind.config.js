module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.tsx",
    "./app/**/*.tsx",
    "./app/**/*.jsx",
    "./app/**/*.js",
    "./app/**/*.ts",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [require("@tailwindcss/typography")],
};
