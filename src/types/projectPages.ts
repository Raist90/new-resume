import z from 'zod'
import { blockImageSchema, blockTextImageSchema, blockTextSchema } from '.'

export const projectPageSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  cover: z.object({
    alt: z.string(),
    src: z.string(),
  }),
  blocks: z.array(
    z.union([
      z.object({
        name: z.literal('Text'),
        data: blockTextSchema,
      }),
      z.object({
        name: z.literal('Image'),
        data: blockImageSchema,
      }),
      z.object({
        name: z.literal('TextImage'),
        data: blockTextImageSchema,
      }),
    ]),
  ),
})

// We omit the blocks field because we don't need it in the list view
export const projectPageListSchema = z.array(
  z.object({
    ...projectPageSchema.omit({ blocks: true }).shape,
    slug: z.string(),
    type: z.literal('projectPage'),
  }),
)

export const projectPageSlugListSchema = z.array(
  z.object({
    slug: z.string(),
  }),
)

export type ProjectCard = z.infer<typeof projectPageListSchema>[number]
