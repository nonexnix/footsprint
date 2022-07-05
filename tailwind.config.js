/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      landscape: "480px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      wide: "1536px",
    },
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#F3F4F7",
          dark: "#333333",
        },
        accent: "#E22837",
        fade: "#464646",
      },
    },
  },
  plugins: [],
};
