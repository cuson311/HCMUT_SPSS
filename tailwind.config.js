const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "white-fill": "url('/src/assets/white-fill.png')",
        "blue-fill": "url('/src/assets/blue-fill.png')",
      },
      colors: {
        'cyan-400': 'rgb(34 211 238)',
      },
      animation: {
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      keyframes: {
        ping: {
          '75%, 100%': {  transform: 'scale(2)', opacity: '0' }
        }
      },
    },
  },
  plugins: [],
});