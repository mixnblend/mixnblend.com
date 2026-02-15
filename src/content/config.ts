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
    releaseDate: z.date(),
    artwork: z.string(),
    streamingLinks: z
      .object({
        spotify: z.string().url().optional(),
        apple: z.string().url().optional(),
        bandcamp: z.string().url().optional(),
        youtube: z.string().url().optional(),
      })
      .optional(),
    embeds: z
      .object({
        spotify: z.string().optional(),
        bandcamp: z.string().optional(),
      })
      .optional(),
    trackList: z
      .array(
        z.object({
          title: z.string(),
          duration: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = {
  news: newsCollection,
  releases: releasesCollection,
};
