import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Avinash Sahni'),
    category: z.string(),
    tags: z.array(z.string()),
    isDraft: z.boolean().default(false),
    canonicalUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};

