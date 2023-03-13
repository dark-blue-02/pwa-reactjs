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
        'blue': '#1089FF',
        'dark-blue': '#0073C7',
        'blue-grey': '#28353B',
        'red': '#FF1010',
        'dark-red': '#C70000',
        'icon-normal': '#A2A2A2',
        'yellow': '#E5C30B',
        'light-yellow': '#FFF6C5',
        'brown': '#615207',
        'item-bg': '#F8F8F8',
        'link': '#0075FF',
        'F3F3F3': '#F3F3F3',
        '9F9F9F': '#9F9F9F',
        'E0E0E0': '#E0E0E0',
        'E0F2FF': '#E0F2FF',
        '23374D': '#23374D',
      }
    },
  },
  plugins: [],
}
