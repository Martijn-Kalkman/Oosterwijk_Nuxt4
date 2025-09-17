import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/icon", "nuxt-swiper", "@nuxt/image"],

  // Performance optimizations
  nitro: {
    compressPublicAssets: true,
  },

  // Image optimization
  image: {
    quality: 85,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  // SEO and meta
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Oosterwijk Onderhoud - Professionele Schilderdiensten',
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Oosterwijk Onderhoud' },
        { name: 'theme-color', content: '#007CB0' },
      ],
      link: [
        { rel: 'canonical', href: 'https://oosterwijkonderhoud.nl' },
        { rel: 'icon', type: 'image/webp', href: '/favicon.ico' },
      ],
    },
  },

  // Performance
  experimental: {
    payloadExtraction: false,
  },
});