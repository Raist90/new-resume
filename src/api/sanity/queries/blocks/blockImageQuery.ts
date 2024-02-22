export const blockImageQuery = `
  'blockKey': _key,
  'image': {
    alt,
    'src': image.asset->url
  }
`
