import { type SchemaTypeDefinition } from 'sanity'
import * as allBlocks from './schemas/blocks'
import * as allDocuments from './schemas/documents'
import * as allObjects from './schemas/objects'

const allSchemas = [
  ...Object.values(allBlocks),
  ...Object.values(allDocuments),
  ...Object.values(allObjects),
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...allSchemas],
}
