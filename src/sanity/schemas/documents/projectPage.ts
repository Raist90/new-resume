import { defineField, defineType } from 'sanity'
import * as blocks from '../blocks'
import { Presentation } from 'lucide-react'

const allBlocks = Object.values(blocks)

const fields = [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: 'title',
    },
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'blocks',
    title: 'Blocks',
    type: 'array',
    of: allBlocks,
  }),
]

export const projectPage = defineType({
  name: 'projectPage',
  title: 'Project Page',
  type: 'document',
  icon: Presentation,
  fields,
})
