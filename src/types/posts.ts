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
