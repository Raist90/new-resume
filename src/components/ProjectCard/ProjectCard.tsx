import type { ProjectCard as ProjectCardType } from '@/types'
import Link from 'next/link'
import { Media } from '..'
import { useId } from 'react'
import { getLinkAriaLabel } from '@/helpers/accessibility'

type ProjectCardProps = {
  project: ProjectCardType
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const postTitle = useId()
  /** @todo Maybe we can move this in `@/constants` */
  const slugPrefix = '/projects'
  return (
    <article aria-labelledby={postTitle} key={project.title}>
      <Link
        aria-label={getLinkAriaLabel(project.title)}
        href={`${slugPrefix}/${project.slug}`}
      >
        <div className='aspect-[16/9] relative my-4'>
          <Media image={project.cover} />
        </div>
      </Link>

      <Link href={`${slugPrefix}/${project.slug}`}>
        <h2 id={postTitle} className='text-2xl'>
          {project.title}
        </h2>
      </Link>
      <p>{project.excerpt}</p>
    </article>
  )
}
