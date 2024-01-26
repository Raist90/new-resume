import type { Frontmatter, Post } from '@/types'

const createSlugByTitle = (title: string) => {
  return title.toLowerCase().replace(/\s/g, '-')
}

export const postsFormatter = (frontmatter: Frontmatter): Post => {
  const { title, date, cover, tags, excerpt } = frontmatter
  return {
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
}
