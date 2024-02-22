const linkQuery = `
  'id': _key,
  label,
  'url': select(
    linkType == 'internal' => '/' + internalLink->slug.current,
    externalLink.current
  )
`

export const navigationQuery = `
*[ _type == 'navigation' ][0] {
  primary[] {
    ${linkQuery}
  }
}
`
