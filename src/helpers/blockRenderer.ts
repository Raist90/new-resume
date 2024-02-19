import { BlockImage, BlockText, BlockTextImage } from '@/types'
import { type ComponentType, createElement } from 'react'

/** @todo Make sure to properly type this when you add `types/blocks` */
type Block = {
  name: 'Text' | 'Image' | 'TextImage'
  data: BlockText | BlockImage | BlockTextImage
}

/** @todo Make sure to properly type this when you add `types/blocks` */
type Modules = {
  Text: ComponentType<any>
  Image: ComponentType<any>
  TextImage: ComponentType<any>
}

export const blockRenderer = (blocks: Block[], modules: Modules) => {
  if (!blocks) return

  const filteredBlocks = blocks.filter((block) => Boolean(block.name))

  const components = filteredBlocks.map((block, index) => {
    /** @description We try to match blocks data coming from the `cms` with block components and then we create elements and pass data to it as prop */
    const singleModule = modules[block.name]

    if (!singleModule) return

    return createElement(singleModule, {
      key: index,
      ...block.data,
    })
  })

  return components
}
