export type Frontmatter = {
  title: string
  date: string
  cover: string
  tags: string
  excerpt: string
}

export type Post = {
  title: string
  date: string
  cover: {
    src: string
    alt: string
  }
  tags: string[]
  excerpt: string
  slug: string
}
