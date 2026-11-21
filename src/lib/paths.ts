// Internal links for this site.
//
// The site can be served from a sub-folder (for example
// https://franklincy07-bit.github.io/wisdompearlsrevised/) or from the root
// of its own domain. BASE_PATH (read in astro.config.mjs) sets that folder,
// and Astro exposes it here as import.meta.env.BASE_URL.
//
// Always build internal links with link("/about/") rather than writing
// "/about/" directly, so they keep working wherever the site is hosted.

const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

/** Turn a site path such as "/writing/" into a link that includes the base path. */
export function link(path: string): string {
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${clean}`;
}
