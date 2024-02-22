import z from 'zod'

const blockKey = z.string()

export const blockTextSchema = z.object({
  blockKey,
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
  blockKey,
  image: z.object({
    src: z.string().url(),
    alt: z.string(),
  }),
})

export const blockTextImageSchema = z.object({
  blockKey,
  ...blockImageSchema.omit({ blockKey: true }).shape,
  ...blockTextSchema.omit({ blockKey: true }).shape,
  imagePosition: z.enum(['left', 'right']),
})

export type BlockImage = z.infer<typeof blockImageSchema>
export type BlockText = z.infer<typeof blockTextSchema>
export type BlockTextImage = z.infer<typeof blockTextImageSchema>

/** This is used to type `blockRenderer` function */
export type Block = {
  name: 'Text' | 'Image' | 'TextImage'
  data: BlockText | BlockImage | BlockTextImage
}
