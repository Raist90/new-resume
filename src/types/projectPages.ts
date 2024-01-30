import z from 'zod'

const blockTextSchema = z.object({
  name: z.literal('Text').optional(),
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

export type BlockText = z.infer<typeof blockTextSchema>

export const projectPageSchema = z.object({
  title: z.string(),
  blocks: z.array(
    z.object({
      name: z.literal('Text'),
      data: blockTextSchema,
    }),
  ),
})
