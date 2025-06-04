/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/HomeContent.js",
    "./src/pages/Layout.js",
    "./src/components/footer.js",
    "./src/components/header.js",
    "./src/components/OurPerks.js",
    "./app.css",
    "./src/components/OurServices.js"
  ],
  theme: {
    extend: {
      height: {
        'screen-6': '6vh',
        'screen-8': '8vh',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
  ],
};
