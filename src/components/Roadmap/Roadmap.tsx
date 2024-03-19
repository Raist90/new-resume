import type { HomepageProps } from '@/types'
import { PortableText } from '@portabletext/react'
import { useId } from 'react'

type RoadmapProps = Pick<HomepageProps, 'workExperience'>

export const Roadmap = ({ workExperience }: RoadmapProps) => {
  const { title, companies } = workExperience
  const titleId = useId()
  return (
    <section aria-labelledby={titleId} className='grid px-4'>
      <div className='flex flex-col'>
        <header id={titleId}>
          <h2 className='text-3xl'>{title}</h2>
        </header>
        <div className='grid gap-6'>
          {companies.map(
            ({ id, name, role, from, to, description, isCurrent }) => (
              <article aria-labelledby={id} key={id}>
                <h3 id={id} className='text-2xl'>
                  {name}
                </h3>
                <p className='uppercase mb-1'>{role}</p>
                {isCurrent ? (
                  <p className='text-xs'>{from} - Current</p>
                ) : (
                  <p className='text-xs'>
                    {from} - {to}
                  </p>
                )}
                <PortableText value={description} />
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
