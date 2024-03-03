import { defineField, defineType } from 'sanity'
import * as blocks from '../blocks'
import { Presentation } from 'lucide-react'

const allBlocks = Object.values(blocks).map((block) => {
  return {
    type: block.name,
  }
})

const fieldsets = [
  { name: 'settings', title: 'Settings' },
  { name: 'media', title: 'Media' },
]

const groups = [
  { name: 'settings', title: 'Settings', default: true },
  { name: 'media', title: 'Media' },
  { name: 'blocks', title: 'Blocks' },
]

const fields = [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
    validation: (Rule) => Rule.required(),
    fieldset: 'settings',
    group: 'settings',
  }),
  defineField({
    name: 'excerpt',
    title: 'Excerpt',
    type: 'text',
    validation: (Rule) => Rule.required(),
    fieldset: 'settings',
    group: 'settings',
  }),
  defineField({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: 'title',
    },
    validation: (Rule) => Rule.required(),
    fieldset: 'settings',
    group: 'settings',
  }),
  defineField({
    name: 'cover',
    title: 'Cover',
    type: 'image',
    validation: (Rule) => Rule.required(),
    fieldset: 'media',
    group: 'media',
  }),
  defineField({
    name: 'alt',
    title: 'Alt Tag',
    type: 'string',
    validation: (Rule) => Rule.required(),
    fieldset: 'media',
    group: 'media',
  }),
  defineField({
    name: 'blocks',
    title: 'Blocks',
    type: 'array',
    of: allBlocks,
    group: 'blocks',
  }),
]

export const projectPage = defineType({
  name: 'projectPage',
  title: 'Project Page',
  type: 'document',
  icon: Presentation,
  fields,
  fieldsets,
  groups,
})
