import z from 'zod'

export const postSchema = z.object({
  title: z.string(),
  date: z.string(),
  cover: z.object({
    alt: z.string(),
    src: z.string(),
  }),
  tags: z.array(z.string()),
  excerpt: z.string(),
  slug: z.string(),
  type: z.string(),
})

export const frontmatterSchema = z.object({
  title: z.string(),
  date: z.string(),
  cover: z.string(),
  tags: z.string(),
  excerpt: z.string(),
})

export type Post = z.infer<typeof postSchema>
export type Frontmatter = z.infer<typeof frontmatterSchema>
