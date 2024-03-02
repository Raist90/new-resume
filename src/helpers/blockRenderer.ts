import type { Block } from '@/types'
import { type ComponentType, createElement } from 'react'

/** @todo Try to fix this type. You can use a union on `props`. Log components in terminal to see the data shape */
type Modules = {
  [key in Block['name']]: ComponentType<any>
}

export const blockRenderer = (blocks: Block[], modules: Modules) => {
  const filteredBlocks = blocks.filter((block) => Boolean(block.name))

  const components = filteredBlocks.map((block) => {
    /** We try to match blocks data coming from the `cms` with block components and then we create elements and pass data to it as prop */
    const singleModule = modules[block.name]

    if (!singleModule) {
      throw new Error(`Block ${block.name} is not defined in modules`)
    }

    /** We don't want to pass `blockKey` to the DOM */
    const {
      data: { blockKey, ...data },
    } = block

    return createElement(singleModule, {
      key: block.data.blockKey,
      ...data,
    })
  })

  return components
}
