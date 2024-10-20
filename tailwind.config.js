module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["vazir"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
