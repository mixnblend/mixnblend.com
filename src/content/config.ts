import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    excerpt: z.string(),
    image: z.string().optional(),
  }),
});

const releasesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['album', 'single', 'ep']),
    year: z.number(),
    releaseDate: z.date(),
    label: z.string().optional(),
    artwork: z.string(),
    streamingLinks: z
      .object({
        spotify: z.string().url().optional(),
        apple: z.string().url().optional(),
        bandcamp: z.string().url().optional(),
        soundcloud: z.string().url().optional(),
        youtube: z.string().url().optional(),
      })
      .optional(),
    embeds: z
      .object({
        spotify: z.string().optional(),
        bandcamp: z.string().optional(),
        soundcloud: z.string().optional(),
      })
      .optional(),
    trackList: z
      .array(
        z.object({
          title: z.string(),
          duration: z.string(),
          features: z.string().optional(),
        })
      )
      .optional(),
    credits: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
  releases: releasesCollection,
};
