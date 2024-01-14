import { defineField, defineType } from 'sanity'
import { companyFields } from '../partials/companyFields'

const fields = [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'companies',
    title: 'Companies',
    type: 'array',
    of: companyFields,
  }),
]

export const workExperience = defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields,
})
