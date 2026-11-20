// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// SITE_URL is the public address of this site, used for the sitemap and
// canonical links. The Cloudflare deploy workflow sets it; locally it defaults
// to the dev server. Changing domains later is a configuration change only.
export default defineConfig({
  site: process.env.SITE_URL ?? "http://localhost:4321",
  trailingSlash: "ignore",
  integrations: [mdx(), sitemap()],
});
