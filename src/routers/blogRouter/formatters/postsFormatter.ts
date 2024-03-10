import { postSchema, type Frontmatter, type Post } from '@/types'
import { notFound } from 'next/navigation'

const createSlugByTitle = (title: string) => {
  return title.toLowerCase().replace(/\s/g, '-')
}

export const postsFormatter = (frontmatter: Frontmatter): Post => {
  const { title, date, cover, tags, excerpt } = frontmatter
  const post = {
    title,
    date,
    cover: {
      alt: title,
      src: cover,
    },
    tags: [...tags.split(', ')],
    excerpt,
    slug: createSlugByTitle(title),
  }

  const result = postSchema.safeParse(post)

  if (!result.success) {
    if (process.env.NODE_ENV === 'development') {
      throw new Error(`Failed to parse response: ${result.error}`)
    }
    return notFound()
  }

  return result.data
}
