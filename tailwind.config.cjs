/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      opacity: {
        47: '0.47',
      },
      colors: {
        light: {
          // 'gray-white': '#FFFFFF',
          // 'gray-1': '#F8F8F8',

        },
        dark: {
          'gray-white': '#89CB36',

        },
      },

    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.font-gerbera-st': {
          fontFamily: 'Gerbera',
          fontSize: '24px',
          lineHeight: '28px',
        },
      };
      addUtilities(newUtilities);
    }
  ],
};

{
  /* <div class="bg-light-gray-white text-light-gray-7-text dark:bg-dark-gray-white dark:text-dark-gray-7-text">
  <!-- Ваш контент -->
</div> */
}
