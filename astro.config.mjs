// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// SITE_URL and SITE_BASE are set by the GitHub Pages workflow
// (see scripts/build-pages.mjs). Locally they default to the dev server root,
// so nothing in the code depends on the repository name or a domain.
export default defineConfig({
  site: process.env.SITE_URL ?? "http://localhost:4321",
  base: process.env.SITE_BASE ?? "/",
  trailingSlash: "ignore",
  integrations: [mdx(), sitemap()],
});
