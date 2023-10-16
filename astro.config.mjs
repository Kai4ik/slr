import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sexlivesreport.ca",
  integrations: [tailwind(), react(), sitemap()],
  image: {
    domains: ["https://res.cloudinary.com"],
  },
});
