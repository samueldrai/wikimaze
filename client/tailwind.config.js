module.exports = {
  important: true,
  purge: ["./src/**/*.{jsx,scss}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/forms")],
}
