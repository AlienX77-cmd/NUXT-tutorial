// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "ร้านค้าเด็กชายก้อง",
      meta: [{ name: "description", content: "รายละเอียดเว็ปไซต์" }],
    },
  },
});
