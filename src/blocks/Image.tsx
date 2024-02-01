import { Media } from '@/components'
import { BlockImage } from '@/types'

export const Image = ({ image }: BlockImage) => {
  return (
    <section>
      <div className='aspect-[16/9] relative'>
        <Media image={image} />
      </div>
    </section>
  )
}
