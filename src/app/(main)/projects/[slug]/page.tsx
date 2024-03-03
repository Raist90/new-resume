import { blockRenderer } from '@/helpers/blockRenderer'
import * as blockComponents from '@/blocks'
import { randomUUID } from 'crypto'
import { getCMSContent } from '@/helpers/getCMSContent'
import { HeadingWithImage } from '@/components'

export const generateStaticParams = async () => {
  const projectPages = await getCMSContent('projectPageList')
  return projectPages.map((page) => ({
    slug: page.slug,
  }))
}

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const { title, cover, excerpt, blocks } = await getCMSContent('projectPage', {
    slug,
  })
  const titleId = randomUUID()

  return (
    <section aria-labelledby={titleId} className='lg:w-1/2 mx-auto'>
      <HeadingWithImage
        id={titleId}
        title={title}
        excerpt={excerpt}
        image={cover}
      />

      {blockRenderer(blocks, blockComponents)}
    </section>
  )
}

export default ProjectPage
