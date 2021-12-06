export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Digidev - Belajar Eksklusif Software Engineering",
    htmlAttrs: {
      lang: "id",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Digidev merupakan platform digital penyedia mentor berpengalaman untuk pembelajaran Modern Web Development secara privat dan ekslusif.",
      },
      { name: "format-detection", content: "telephone=no" },
      { hid: "image", property: "og:image", content: "/images/favicon.ico" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "digidev, digidev.id, digidev id, belajar, les, privat, kursus, course, software engineer, programming, les programming, belajar programming, belajar web, belajar software",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Poppins:wght@200;300;400;500;600;700;800;900&family=Rubik+Beastly&display=swap",
      },
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/58afe831c7.js",
        crossorigin: "anonymous",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~/assets/styles/styles.scss", lang: "scss" }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
