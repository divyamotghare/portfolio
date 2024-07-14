/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ff4d6d",
      secondary: "#a4133c",
      white: "#ffffff",
      pinkshade1: "#c9184a",
      lightpink:'#ff8fa3'
    },
    extend: {
      // backgroundImage: {
      //   custom: "url('/radiant-gradient.png')",
      // },
      backgroundColor: {
        "primary-bg": "#fdf0d5",
        "secondary-bg": "#780000",
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"],
      },
    },
    plugins: [],
  },
};
