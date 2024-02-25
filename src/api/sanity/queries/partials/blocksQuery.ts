import { capitalize } from '@/helpers/capitalize'
import * as allBlockQueries from '../blocks'

export const blocksQuery = Object.entries(allBlockQueries)
  .map(([blockQueryKey, blockQuery]) => {
    const blockType = blockQueryKey.replace('Query', '')
    const blockName = blockType.replace('block', '')

    return `
      _type == '${blockType}' => {
        'name': '${capitalize(blockName)}',
        'data': {${blockQuery}}
      }
`
  })
  .join(',')
