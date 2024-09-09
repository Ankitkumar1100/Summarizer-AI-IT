/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Include all your content files
  darkMode: "class", // Enable dark mode with the 'class' strategy
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {}, // If you want to extend any variants, add here
  },
  plugins: [], // You can add Tailwind plugins here if needed
};
