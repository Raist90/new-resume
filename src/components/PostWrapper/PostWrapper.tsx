import { HeadingWithImage } from '..'
import { useId } from 'react'

type PostWrapperProps = {
  children: React.ReactNode
  title: string
  date: string
  /** @todo Create a `BaseImage` type and move it into `src/types` */
  cover: {
    alt: string
    src: string
  }
  tags: string[]
  excerpt: string
}

export const PostWrapper = ({
  children,
  title,
  date,
  cover,
  tags,
  excerpt,
}: PostWrapperProps) => {
  const titleId = useId()
  return (
    <section
      aria-labelledby={titleId}
      className='w-full md:w-10/12 lg:w-1/2 mx-auto grid gap-4'
    >
      <HeadingWithImage
        id={titleId}
        title={title}
        excerpt={excerpt}
        image={cover}
        date={date}
        tags={tags}
      />

      <div>{children}</div>
    </section>
  )
}
