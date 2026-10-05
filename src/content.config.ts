import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reports = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    region: z.string(),
    route: z.string(),
    duration: z.string(),
    distanceKm: z.number(),
    elevationGainM: z.number(),
    difficulty: z.string(),
    format: z.string().optional(),
    season: z.array(z.string()),
    tags: z.array(z.string()),
    cover: z.string(),
    routeImage: z.string(),
    mapEmbed: z.string().url(),
    draftSections: z.array(z.string()).optional(),
  }),
});

export const collections = { reports };
