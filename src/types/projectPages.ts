import z from 'zod'
import { blockImageSchema, blockTextSchema } from '.'

export const projectPageSchema = z.object({
  title: z.string(),
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
    ]),
  ),
})
