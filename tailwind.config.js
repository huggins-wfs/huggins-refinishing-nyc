module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bone: "#F4F1EA",
        linen: "#E9E3D7",
        oak: { light: "#C9A97E", DEFAULT: "#9C7A52", dark: "#5E4630" },
        char: "#1F1C18",
        stone: "#6E6A62",
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: { label: "0.18em" },
    },
  },
  plugins: [],
};
