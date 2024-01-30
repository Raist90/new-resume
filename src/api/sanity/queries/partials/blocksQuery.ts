import * as allBlockQueries from '../blocks'

/** @todo Maybe move this elsewhere */
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

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
