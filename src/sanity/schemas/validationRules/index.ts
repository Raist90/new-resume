import type { ReferenceRule, SlugRule } from 'sanity'

export const referenceValidation = (Rule: ReferenceRule) =>
  Rule.custom((value, context) => {
    const { parent } = context

    if (
      parent &&
      typeof parent === 'object' &&
      'linkType' in parent &&
      typeof parent.linkType === 'string' &&
      parent.linkType === 'internal' &&
      !value
    ) {
      return 'Internal link must be set if link type is internal'
    }

    return true
  })

export const linkValidation = (Rule: SlugRule) =>
  Rule.custom((value, context) => {
    const { parent } = context

    if (
      parent &&
      typeof parent === 'object' &&
      'linkType' in parent &&
      typeof parent.linkType === 'string' &&
      parent.linkType === 'external' &&
      !value
    ) {
      return 'External link must be set if link type is external'
    }

    return true
  })
