import { defineNuxtConfig, NuxtConfig } from "nuxt3";

// dev and prod
const config: NuxtConfig = {
  plugins: ["@/plugins/primevue.ts"],
  modules: [],
  css: [
    "primevue/resources/themes/vela-purple/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
};

// prod only
if (process.env.NOW_REGION) {
  config.nitro = {
    preset: "vercel",
  };
  config.build = {
    transpile: ["primevue"],
  };
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig(config);
