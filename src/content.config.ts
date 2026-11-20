import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Content lives in /content/wisdom-pearls at the repository root so it can be
// edited without touching application code. See content/README.md.
const CONTENT = "../../content/wisdom-pearls";

const pearls = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: `${CONTENT}/pearls` }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    source: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: `${CONTENT}/articles` }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pearls, articles };
