# Notes for Claude

This is a **public** repository for the Wisdom Pearls website (Astro, to be
published with GitHub Pages).

- **Public repository.** Never commit secrets, keys, tokens, personal contact
  details, drafts, unpublished work or private notes. Drafts stay outside
  this repository.
- **Approval first.** Never merge a pull request, deploy, change GitHub Pages
  settings, repository visibility or domains without the owner's explicit
  approval. Work on a branch and open a pull request for review.
- **Publishing lock.** Every job in `.github/workflows/deploy.yml` keeps
  `if: vars.WISDOM_PEARLS_PUBLISH == 'true'`. Never remove it, and never
  create or change the `WISDOM_PEARLS_PUBLISH` variable.
- **Search indexing stays off.** Keep `public/robots.txt` disallowing
  everything and the `noindex` tag in `src/layouts/Base.astro` until the
  owner approves launch (tests check both).
- **Links.** Build every internal link with `link()` from `src/lib/paths.ts`
  (e.g. `link("/pearls/")`), never a bare `"/pearls/"`, so the site works
  under a base path such as `/wisdompearlsrevised`.
- Run `pnpm check` before proposing changes.
- Explain things to the owner in plain, non-technical language.
