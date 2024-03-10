import { readFileSync } from 'fs'
import path from 'path'

export const generateMDXSource = (postsPath: string, slug: string): string => {
  return readFileSync(path.join(postsPath, slug, slug + '.mdx'), 'utf8')
}
