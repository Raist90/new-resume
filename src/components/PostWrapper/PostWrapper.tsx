import { Media, TagList } from '..'

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
  return (
    <section className='border w-11/12 md:w-10/12 lg:w-1/2 mx-auto p-4 grid gap-4'>
      <div>
        <h2 className='text-3xl'>{title}</h2>
        <p>{excerpt}</p>
        <span className='text-sm block mb-1'>Published on {date}</span>

        <TagList tags={tags} />

        <div className='aspect-[16/9] relative my-2'>
          <Media image={cover} />
        </div>
      </div>

      <div>{children}</div>
    </section>
  )
}
