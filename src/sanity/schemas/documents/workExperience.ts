import { defineField, defineType } from 'sanity'
import { companyFields } from '../partials/companyFields'
import { Briefcase } from 'lucide-react'

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
  icon: Briefcase,
  fields,
})
