/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        custom: "url('/radiant-gradient.png')",
      },
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"],
      },
    },
    plugins: [],
  },
};
