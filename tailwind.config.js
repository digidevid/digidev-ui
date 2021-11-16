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
        primary: "#0a7dfa",
        main: "#fdfdfd",
      },
      backgroundImage: {
        mentorBg: "url('~/static/bg-mentor.jpg')",
      },
      fontSize: {
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        26: "26px",
        32: "32px",
        40: "40px",
        52: "52px",
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          // "@screen tn": {
          //   maxWidth: "400px",
          //   paddingLeft: "0.5rem",
          //   paddingRight: "0.5rem",
          // },
          "@screen sm": {
            width: "600px",
            // maxWidth: "640px",
            // paddingLeft: "1rem",
            // paddingRight: "1rem",
          },
          "@screen md": {
            width: "700px",
            // maxWidth: "768px",
            // paddingLeft: "2rem",
            // paddingRight: "2rem",
          },
          "@screen lg": {
            width: "900px",
            // maxWidth: "1024px",
            // paddingLeft: "2rem",
            // paddingRight: "2rem",
          },
          "@screen xl": {
            width: "1120px",
            // maxWidth: "1440px",
            // paddingLeft: "10rem",
            // paddingRight: "10rem",
          },
        },
        // ".bg-primary": {
        //   backgroundColor: "#86d0c1",
        // },
      });
    },
  ],
};
