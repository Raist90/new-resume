import { Media } from '../Media'
import { PortableText } from '@portabletext/react'
import type { HomepageProps } from '@/types'
import { expertiseLabels } from '@/constants'

type ProfileProps = Pick<HomepageProps, 'profile'>

export const Profile = ({ profile }: ProfileProps) => {
  const { name, motto, picture, role, bio } = profile
  return (
    <section>
      <article className='grid md:grid-cols-12 gap-9'>
        <div className='md:col-span-4 relative aspect-[4/5]'>
          <Media image={picture} options={`rounded-lg`} />
        </div>

        <div className='md:col-span-8 grid gap-3 md:sticky md:place-self-start md:top-12'>
          <div>
            <h2 className='text-3xl'>{name}</h2>
            <h3 className='text-2xl'>{role}</h3>
            <p>{motto}</p>
            <PortableText value={bio} />
          </div>

          <div>
            <h4 className='text-2xl'>Expertise</h4>
            <div>
              <ul className='flex flex-wrap gap-3'>
                {expertiseLabels.map((label) => (
                  <li className='border p-2' key={label}>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
