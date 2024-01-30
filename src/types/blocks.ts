import type { TypedObject } from 'sanity'

export type TextBlock = {
  name: 'Text'
  data: {
    text: TypedObject
  }
}

export type Block = TextBlock
