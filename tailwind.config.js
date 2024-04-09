module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  // in tailwindcss 3.3 this plugin is apart of the framework and is a simple css class.
  //plugins: [require("@tailwindcss/line-clamp")],
};
