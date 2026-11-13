module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14110E",
        espresso: "#221A14",
        bone: "#F5F0E6",
        sand: "#E8DFCF",
        brass: { DEFAULT: "#7C5E33", light: "#C9A671" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      letterSpacing: { luxe: "0.22em" },
    },
  },
  plugins: [],
};
