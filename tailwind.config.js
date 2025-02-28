/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{jsx,tsx}",
    "./src/components/**/*.{jsx,tsx}",
    "./src/app/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-khand)",
        alt: "var(--font-anton)",
      },
      colors: {
        "color-one": "#8F998A",
        "color-two": "#4D4D4D",
        "color-tree": "#8C8C8C",
        "color-four": "#1E1E1E",
        "color-five": "#2E2E2E",
        "color-six": "#D9D9D9",
        "color-seven": "#000000",
        "color-eight": "#FFFFFF",
      },
      padding: {
        wrapper: "9%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
