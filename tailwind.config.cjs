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
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      opacity: {
        47: "0.47",
      },
      colors: {
        "custom-dark": "rgb(21, 26, 38)",
        "yellow-bright": "#F2F60F",
        "electric-violet": "#3657CB",
        "smoke-white": "rgba(255, 255, 255, 0.6)",
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
  ],
};

{
  /* <div class="bg-light-gray-white text-light-gray-7-text dark:bg-dark-gray-white dark:text-dark-gray-7-text">
  <!-- Ваш контент -->
</div> */
}
