import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['tensha', 'programming', 'fukugyo', 'ai']),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
    affiliate: z.boolean().default(true),
  }),
});

export const collections = { blog };
