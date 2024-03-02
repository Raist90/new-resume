import type { BlockText } from '@/types'
import { PortableText } from '@portabletext/react'

export const Text = ({ text, ...rest }: Omit<BlockText, 'blockKey'>) => {
  return (
    <div className='my-4' {...rest}>
      <PortableText value={text} />
    </div>
  )
}
