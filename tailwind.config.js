// prettier-ignore
module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#0a7dfa'
      },
      backgroundImage: {
        mentorBg: "url('~/static/bg-mentor.jpg')",
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '26': '26px',
        '32': '32px',
        '40': '40px',
        '52': '52px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
