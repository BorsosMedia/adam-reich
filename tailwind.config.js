/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#00AEEF",
        pink: "#DD4398",
        black: "#181818",
      },
      spacing: {
        xl: "calc((0.8rem + 1.5625vw)*6)",
        full: "calc(0.8rem + 1.5625vw)",
        half: "calc((0.8rem + 1.5625vw)/2)",
      },
      fontSize: {
        h1: "4em",
        h2: "3em",
        h3: "2em",
        h4: "1.8em",
        h5: "1.5em",
        h6: "1.25em",
      },
      fontFamily: {
        Organetto: "Organetto",
        Mortend: "Mortend",
        Oswald: "Oswald",
        Articulat: "Articulat",
        Poppins: "Poppins",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
