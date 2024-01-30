import type { BlockText } from '@/types'
import { PortableText } from '@portabletext/react'

export const Text = ({ text }: BlockText) => {
  return (
    <section>
      <PortableText value={text} />
    </section>
  )
}
