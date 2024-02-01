import { CaseSensitive } from 'lucide-react'
import { defineField, defineType } from 'sanity'

const fields = [
  defineField({
    name: 'text',
    title: 'Text',
    type: 'array',
    of: [{ type: 'block' }],
  }),
]

export const blockText = defineType({
  name: 'blockText',
  title: 'Block Text',
  type: 'object',
  icon: CaseSensitive,
  fields,
})
