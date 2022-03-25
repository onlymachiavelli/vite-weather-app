module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transBlack: "#000000a8",
      },
      fontFamily: {},
      backgroundImage: {
        gen: "url('./src/assets/gen.jpg')",
      },
    },
  },
  plugins: [],
}
