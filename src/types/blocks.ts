import z from 'zod'

export const blockTextSchema = z.object({
  className: z.string().optional(),
  text: z.array(
    z.object({
      _key: z.string(),
      _type: z.string(),
      children: z.array(
        z.object({
          _key: z.string(),
          _type: z.string(),
          marks: z.array(z.string()),
          text: z.string(),
        }),
      ),
      markDefs: z.array(z.unknown()),
      style: z.string(),
    }),
  ),
})

export const blockImageSchema = z.object({
  image: z.object({
    src: z.string().url(),
    alt: z.string(),
  }),
})

export const blockTextImageSchema = z.object({
  ...blockImageSchema.shape,
  ...blockTextSchema.shape,
  imagePosition: z.enum(['left', 'right']),
})

export type BlockImage = z.infer<typeof blockImageSchema>
export type BlockText = z.infer<typeof blockTextSchema>
export type BlockTextImage = z.infer<typeof blockTextImageSchema>
