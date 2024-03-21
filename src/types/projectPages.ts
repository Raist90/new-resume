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

export const projectPageSlugListSchema = z.array(
  z.object({
    slug: z.string(),
  }),
)
