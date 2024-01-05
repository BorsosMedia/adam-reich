const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
      screens: {
        br: "600px",
      },
      backgroundImage: {
        contest: "url('../../public/contest-bg.png')",
        contestMobile: "url('../../public/contest-mobile-bg.png')",
        popup: "url('../../public/popup.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar"), nextui()],
};
