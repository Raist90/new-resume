import z from 'zod'

export const navigationSchema = z.object({
  primary: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      url: z.string(),
    }),
  ),
})

export type Navigation = z.infer<typeof navigationSchema>
