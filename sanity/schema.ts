import { type SchemaTypeDefinition } from 'sanity'
import * as allDocuments from './schemas/documents'

const allSchemas = Object.values(allDocuments)

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...allSchemas],
}
