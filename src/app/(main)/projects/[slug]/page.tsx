import { blockRenderer } from '@/helpers/blockRenderer'
import * as blockComponents from '@/blocks'
import { randomUUID } from 'crypto'
import { getCMSContent } from '@/helpers/getCMSContent'

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const { title, blocks } = await getCMSContent('projectPage', { slug })
  const titleId = randomUUID()

  return (
    <section aria-labelledby={titleId} className='lg:w-1/2 mx-auto'>
      <header id={titleId}>
        <h2 className='text-2xl'>{title}</h2>
      </header>

      {blockRenderer(blocks, blockComponents)}
    </section>
  )
}

export default ProjectPage
