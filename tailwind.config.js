/** @type {import('tailwindcss').Config} */
module.exports = {
  cmode: "jit",
  content: [
    "./src/**/*.jsx",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0073C7',
        'black': '#161616',
        'label-form': '#16192C',
        'label': '#737373',
        'hint': '#C6C6C6',
        'F8F8F8': '#F8F8F8',
      }
    },
  },
  plugins: [],
}
