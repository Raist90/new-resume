import { Media } from '..'
import { PortableText } from '@portabletext/react'
import type { HomepageProps } from '@/types'
import { expertiseLabels } from '@/constants'
import { useId } from 'react'
/** @todo Fix this ugly import */
import bg from '../../../public/body-bg.png'

type ProfileProps = Pick<HomepageProps, 'profile'>

export const Profile = ({ profile }: ProfileProps) => {
  const { name, motto, picture, role, bio } = profile
  const profileTitle = useId()
  const expertiseTitle = useId()
  return (
    <section
      style={{ background: `url('${bg.src}') repeat` }}
      aria-labelledby={profileTitle}
      className='grid border border-gray-200 dark:border-gray-600 p-4 relative gap-8'
    >
      <div className='grid lg:grid-cols-2 gap-4 text-balance'>
        <hgroup>
          <h2 id={profileTitle} className='text-3xl'>
            {name}
          </h2>
          <h3 className='text-2xl'>{role}</h3>
          <p className='text-xs'>{motto}</p>
        </hgroup>

        <div className='relative aspect-square h-[200px]'>
          <Media image={picture} options={'rounded-full'} />
        </div>
      </div>

      <div
        style={{
          background:
            'radial-gradient(ellipse, rgba(255, 255, 255, .2) 10%, transparent',
        }}
        className='absolute inset-0 z-[-2]'
      />

      <div>
        <PortableText value={bio} />
      </div>

      <section aria-labelledby={expertiseTitle} className='text-sm'>
        <header id={expertiseTitle}>
          <h4 className='text-2xl'>Expertise</h4>
        </header>
        <div>
          <ul className='flex flex-wrap gap-3'>
            {expertiseLabels.map((label) => (
              <li
                className='border border-lightAccent dark:border-darkAccent p-2'
                key={label}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  )
}
