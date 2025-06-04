/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/HomeContent.js",
    "./src/pages/Layout.js",
    "./src/components/footer.js",
    "./src/components/header.js",
    "./src/components/section-3.js",
    "./app.css",
    "./src/components/MobileScrollFlipList.js"
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
