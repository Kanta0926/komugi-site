// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: "static",
  },
  vite: {
    plugins: [require("vite-svg-loader")()],
  },
  css: ["@/assets/css/main.css", "@/assets/css/animations.css"],
  app: {
    baseURL: "/komugi-site/",

    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
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
