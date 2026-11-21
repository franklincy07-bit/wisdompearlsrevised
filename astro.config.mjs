// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// SITE_URL is the public address of the site (scheme and host only, e.g.
// https://franklincy07-bit.github.io), used for the sitemap and canonical
// links. BASE_PATH is the folder the site is served from, e.g.
// /wisdompearlsrevised for the GitHub Pages address, or / once it has its own
// domain. The deploy workflow sets both; locally they default to the dev
// server at /. Changing address later is a configuration change only.
export default defineConfig({
  site: process.env.SITE_URL || "http://localhost:4321",
  base: process.env.BASE_PATH || "/",
  trailingSlash: "ignore",
  integrations: [mdx(), sitemap()],
});
