/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'], // Custom font setup
      },
      colors: {
        'custom-dark': '#141414', // Background color for header and footer
        'custom-light': '#f4f4f4', // Footer background color
        'custom-link': '#666', // Default link color
        'link-hover': '#000', // Link hover color
        'custom-white': '#ffffff', // Text color
        'custom-pink': '#FF3399', // Hover color and search input color
      },
    },
  },
  plugins: [],
};