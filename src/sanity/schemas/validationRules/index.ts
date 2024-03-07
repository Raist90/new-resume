import { isObject, isString } from '@/helpers/predicates'
import type {
  ReferenceRule,
  Reference,
  ValidationContext,
  SlugRule,
} from 'sanity'

export function generateLinkValidation(
  Rule: ReferenceRule,
  linkType: 'internal',
): ReferenceRule
export function generateLinkValidation(
  Rule: SlugRule,
  linkType: 'external',
): SlugRule
export function generateLinkValidation(
  Rule: ReferenceRule,
  linkType: 'internal' | 'external',
) {
  return Rule.custom(
    (value: Reference | undefined, context: ValidationContext) => {
      const { parent } = context
      const isInvalid =
        isObject(parent) &&
        'linkType' in parent &&
        isString(parent.linkType) &&
        parent.linkType === linkType &&
        !value

      if (isInvalid) {
        return `${linkType} link must be set if link type is ${linkType}`
      }

      return true
    },
  )
}
