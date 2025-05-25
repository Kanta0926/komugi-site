// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: "static", // ← これが重要！静的生成に切り替える
  },
  vite: {
    plugins: [require("vite-svg-loader")()],
  },
  css: ["@/assets/css/main.css"],
  app: {
    baseURL: "/komugi-site/",

    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Gothic+A1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Klee+One&family=Noto+Serif+JP:wght@200..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Gothic+A1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Klee+One&family=Noto+Serif+JP:wght@200..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Gothic+A1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Klee+One&family=Noto+Serif+JP:wght@200..900&display=swap",
        },
      ],
    },
  },
});
