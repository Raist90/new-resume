import type { Post } from '@/types'
import Link from 'next/link'
import { Media, TagList } from '..'

type PostCardProps = {
  post: Post
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <article key={post.title}>
      <Link href={`/posts/${post.slug}`}>
        <div className='aspect-[16/9] relative my-4'>
          <Media image={post.cover} />
        </div>
      </Link>

      <h2 className='text-2xl'>{post.title}</h2>
      <span className='text-sm block mb-1'>Published on {post.date}</span>
      <p>{post.excerpt}</p>

      <TagList tags={post.tags} />
    </article>
  )
}
