/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        redDevil: "#800020",
        oldGold: "#D0993B",
        alabaster: "#FAFAFA",
        pigeonPost: "#BACCDF",
        wildSand: "#F4F4F4",
        gray: "#7F7F7F",
        selago: "#F3F7FD",
      },
     
    },
  },
  plugins: [],
};
