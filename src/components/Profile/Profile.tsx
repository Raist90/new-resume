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
      className='grid border border-gray-600 py-8 px-4 relative gap-8'
    >
      <div className='flex flex-col lg:flex-row gap-4 lg:items-center'>
        <div className='w-fit relative aspect-square h-[200px]'>
          <Media image={picture} options={'rounded-full'} />
        </div>

        <hgroup>
          <h2 id={profileTitle} className='text-3xl mb-0'>
            {name}
          </h2>

          <h3 className='uppercase mb-0'>{role}</h3>

          <p className='text-xs'>{motto}</p>

          <PortableText value={bio} />
        </hgroup>
      </div>

      <div
        style={{
          background:
            'radial-gradient(ellipse, rgba(255, 255, 255, .2) 10%, transparent',
        }}
        className='absolute inset-0 z-[-2]'
      />

      <div aria-labelledby={expertiseTitle} className='text-xs'>
        <header id={expertiseTitle}>
          <h4 className='text-2xl'>Expertise</h4>
        </header>
        <div>
          <ul className='flex flex-wrap gap-3'>
            {expertiseLabels.map((label) => (
              <li
                className='border border-gray-600 p-2 bg-lightBGPrimary dark:bg-darkBGPrimary'
                key={label}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
