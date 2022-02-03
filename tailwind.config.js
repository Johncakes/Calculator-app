module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      screens: {
        'short' : {'raw': '(max-height: 800px)'}
        
      }
    },
  },
  plugins: [],
}