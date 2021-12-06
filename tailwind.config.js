module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainbg: "#0d192b",
        cardbg: "#14253d",
        linebg: "#2f415b",
        softblue: "#8bacda",
        mycyan: "#00fff7"
      },
    },

    fontFamily: {
      outfit: ["Outfit"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
