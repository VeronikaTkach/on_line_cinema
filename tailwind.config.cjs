/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "425px",
      // => @media (min-width: 425px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1000px",

      // => @media (min-width: 1000px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        qanelas: ["Qanelas"],
      },
      colors: {
        yellows: {
          butter: "#FFF065",
          lime: "#F2F60F",
        },
        darks: {
          primary: "#151A26",
          charcoal: "#404961",
          midnight: "#3C4767",
          blue: "#3B486B",
          "dark-slate": "#353B50",
          steel: "#323A55",
          gunmetal: "#2B354E",
          shadow: "#26376D",
          eclipse: "#252838",
          onyx: "#222733",
          "midnight-blue": "#222733",
          obsidian: "#1E2538",
          ink: "#1C243D",
          deep: "#1B2133",
          "shadow-blue": "#191E2E",
          cosmic: "#161B29",
          "outer-space": "#100F14",
          pure: "#000000",
        },
        grays: {
          "light-silver": "#E8E9EB",
          pale: "#E3E6F0",
          soft: "#DEDEDE",
          light: "#CBCBCB",
          cloud: "#C4C4C4",
          stone: "#A7A3A3",
          silver: "#A6A6A6",
          mist: "#A5A8AF",
          dusty: "#989898",
          slate: "#838488",
          "muted-blue": "#7782A5",
          ash: "#6D7792",
          charcoal: "#657199",
          storm: "#505772",
          iron: "#4F5B7C",
          midnight: "#495473",
          input: "#1E2538",
        },
        blues: {
          cobalt: "#3657CB",
          deep: "#1D3AA0",
          sky: "#1DA1F2",
          steel: "#26376D",
          facebook: "#3B5998",
          royal: "#4D6091",
          slate: "#54689E",
        },
        reds: {
          bright: "#FF0000",
          fire: "#F13030",
          crimson: "#E04141",
          scarlet: "#DA3434",
          cherry: "#D82C2C",
          blood: "#D53030",
          soft: "#FF9E9E",
          flame: "#D43030",
          brick: "#CB3F36",
          "burnt-orange": "#CB6C36",
          rust: "#CB3636",
          burgundy: "#642C36",
        },
        greens: {
          lime: "#28FF04",
          forest: "#2E6125",
          moss: "#326339",
          neon: "#34EA16",
          bright: "#3BD722",
          spring: "#4BCB36",
          emerald: "#57D043",
          chartreuse: "#78CB36",
          olive: "#89CB36",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".font-gerbera-st": {
          fontFamily: "Gerbera",
          fontSize: "24px",
          lineHeight: "28px",
        },
        ".clamp-container": {
          width: "clamp(360px, 85vw, 1428px)",
        },
      };
      addUtilities(newUtilities);

      const responsiveUtilities = {
        "@media (min-width: 1000px)": {
          ".clamp-container": {
            width: "clamp(360px, 75vw, 1428px)",
          },
        },
      };
      addUtilities(responsiveUtilities, ["responsive"]);
    },
    require("tailwind-scrollbar"),
  ],
};

{
  /* <div class="bg-light-gray-white text-light-gray-7-text dark:bg-dark-gray-white dark:text-dark-gray-7-text">
  <!-- Ваш контент -->
</div> */
}
