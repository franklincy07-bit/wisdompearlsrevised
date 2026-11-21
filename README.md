# Wisdom Pearls

Short reflections ("pearls") and longer essays. Built with
[Astro](https://astro.build), to be published with GitHub Pages.

> **Not launched.** This is a placeholder site. Publishing is locked and
> search engines are asked to stay away (`public/robots.txt` and a
> `noindex` tag on every page).

## Where things are

| Path                | What it is                                |
| ------------------- | ----------------------------------------- |
| `content/`          | All website text: pearls and articles     |
| `content/README.md` | How to add and edit content               |
| `src/`              | The site's pages, layout and styles       |
| `src/lib/paths.ts`  | `link()`: builds every internal link      |
| `tests/`            | Checks that keep the site private for now |

## Working on the site

You need Node.js 22 and pnpm.

```bash
pnpm install
pnpm dev      # local preview at http://localhost:4321
pnpm check    # formatting, tests, type checks and a full build
```

## Publishing (locked)

- **Pull requests** run the checks in `.github/workflows/ci.yml`. Nothing is
  published from a pull request.
- **`.github/workflows/deploy.yml`** publishes to GitHub Pages, but every job
  in it runs only when the repository variable `WISDOM_PEARLS_PUBLISH` is
  `true`. That variable does not exist, so nothing is published. Only the
  owner creates it, when Wisdom Pearls is ready to launch.
- The site can live in a sub-folder (`BASE_PATH`, e.g. `/wisdompearlsrevised`)
  or at the root of its own domain (`BASE_PATH=/`). `SITE_URL` is the
  address's scheme and host.
