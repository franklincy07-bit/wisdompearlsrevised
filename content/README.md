# Content: how to add and edit

All website text lives in this `content` folder. You never need to touch
application code to publish something. Every file is a plain text file
written in **Markdown**, a simple way of formatting text.

> **This repository is public.** Everything committed here, including files
> marked `draft: true` and the full history of every change, can be read by
> anyone. **Keep drafts, unpublished ideas and private notes outside this
> repository** (for example in a private document) and add a piece here only
> when it is ready to be published. `draft: true` hides a file from the
> website, not from the repository.

## Folder map

| Folder        | What goes here                       | Appears on the site |
| ------------- | ------------------------------------ | ------------------- |
| `pearls/`     | Short reflections ("pearls")         | Wisdom Pearls       |
| `articles/`   | Longer essays                        | Wisdom Pearls       |
| `_templates/` | Templates to copy (never published)  | Nowhere             |

## Adding something new (in the GitHub website)

1. Open the matching template in `_templates/` and copy its contents.
2. Go to the destination folder, click **Add file → Create new file**.
3. Name the file using the date and a short title, in lower case with
   hyphens, ending in `.md`. For example: `2026-11-20-patience-is-a-seed.md`.
4. Paste the template, fill in the details between the `---` lines, and write
   your text underneath.
5. Choose **Create a new branch** and open a pull request. The automatic
   checks run on the pull request. Wisdom Pearls is not published yet: the
   site goes live only when the owner unlocks publishing.

## The part between the `---` lines

This block, called *front matter*, gives the website facts about the entry.

```
---
title: Patience is a seed          # shown as the heading
date: 2026-11-20                   # year-month-day
tags: [patience, growth]           # optional topics, in square brackets
draft: true                        # true = hidden, false = published
---
```

- Keep the `---` lines exactly as they are.
- If something is wrong (a missing title, a mistyped date), the automatic
  check on GitHub will fail and say which file and which field to fix.
  Nothing broken is ever published.
- `draft: true` hides an entry from the website, but it is still public in
  this repository. Finish drafts elsewhere before adding them here.

## Formatting cheatsheet

| Write this               | To get                  |
| ------------------------ | ----------------------- |
| `**bold**`               | **bold**                |
| `*italic*`               | *italic*                |
| `## A heading`           | a section heading       |
| `> A quotation`          | an indented quotation   |
| `- item`                 | a bullet point          |
| `[text](https://…)`      | a link                  |

Files ending `.mdx` can also include interactive components. Use plain `.md`
unless a developer has set something up for you.
