/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html", "assets/**/*.js"],
  darkMode: "class",
  theme: {
    colors: {
    },

    },
    extend: {
      fontFamily: {
        sans: ["Inter", defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

