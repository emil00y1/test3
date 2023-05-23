import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  scripts: [
    { src: "https://cdn.jsdelivr.net/npm/alpinejs@3.12.1/dist/alpine.js" },
  ],
});
