import { isUniqueAcrossAllDocuments } from '@/sanity/helpers'
import { FileText } from 'lucide-react'
import { defineField, defineType } from 'sanity'

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
      isUnique: isUniqueAcrossAllDocuments,
    },
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'profile',
    title: 'Profile',
    type: 'reference',
    to: [{ type: 'profile' }],
  }),
  defineField({
    name: 'workExperience',
    title: 'Work Experience',
    type: 'reference',
    to: [{ type: 'workExperience' }],
  }),
]

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: FileText,
  fields,
})
