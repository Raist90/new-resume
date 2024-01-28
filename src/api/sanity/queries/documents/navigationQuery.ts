const linkQuery = `
  'id': _key,
  label,
  'url': select(
    linkType == 'internal' => '/' + internalLink->slug.current,
    '/' + externalLink
  )
`

export const navigationQuery = `
*[ _type == 'navigation' ][0] {
  primary[] {
    ${linkQuery}
  }
}
`
