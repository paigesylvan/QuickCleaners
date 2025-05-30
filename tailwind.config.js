/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/HomeContent.js",
    "./src/pages/Layout.js",
    "./src/components/footer.js",
    "./src/components/header.js",
    "./src/components/section-2.js",
    "./src/components/section-3.js",
    "./app.css"
  ],
  theme: {
    extend: {
      height: {
        'screen-6': '6vh', // 20% of the viewport height
        'screen-8': '8vh',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
  },
  plugins: [],
  variants: {},
}
}
}