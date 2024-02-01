import z from 'zod'

export const blockTextSchema = z.object({
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

export type BlockImage = z.infer<typeof blockImageSchema>
export type BlockText = z.infer<typeof blockTextSchema>
