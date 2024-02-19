import { Media } from '@/components'
import { BlockImage } from '@/types'

export const Image = ({ image, ratio }: BlockImage & { ratio?: string }) => {
  /** @description This prop is coming from the `TextImage` block and not from the CMS */
  const aspectRatio = ratio ? `aspect-[${ratio}]` : `aspect-[16/9]`

  return (
    <div className={`${aspectRatio} relative`}>
      <Media image={image} />
    </div>
  )
}
