import type { Post } from '@/types'

const createSlugByTitle = (title: string) => {
  return title.toLowerCase().replace(/\s/g, '-')
}

/** @todo Type this better */
export const postsFormatter = (frontmatter: any): Post => {
  return {
    title: frontmatter.title,
    date: frontmatter.date,
    cover: {
      alt: frontmatter.title,
      src: frontmatter.cover,
    },
    tags: [...frontmatter.tags.split(', ')],
    excerpt: frontmatter.excerpt,
    slug: createSlugByTitle(frontmatter.title),
  }
}
