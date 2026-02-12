import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://astralseal.com/",
  integrations: [tailwind(), icon(), sitemap()],

  devToolbar: {
    enabled: false
  },



  adapter: cloudflare()
});