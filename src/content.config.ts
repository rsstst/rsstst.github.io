import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "zod";

const projects = defineCollection({
  loader: glob({ base: "src/content/projects", pattern: "*.mdx" }),
  schema: ({ image }) =>z.object({
    title: z.string(),
    description: z.string(),
    img: image(),
    date: z.date(),
  }),
});

export const collections = {
  projects,
};
