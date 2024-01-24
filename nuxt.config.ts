// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Anotações",
    },
  },
  modules: [
    ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
    "@pinia-plugin-persistedstate/nuxt",
  ],
  build: {
    transpile: ["pinia-plugin-persistedstate", "@fortawesome/vue-fontawesome"],
  },
  imports: {
    dirs: ["store"],
  },
  alias: {
    css: "/<rootDir>/assets/css",
    image: "/<rootDir>/assets/images",
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "@/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
});
