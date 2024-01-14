import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './env'
import { schema } from './schema'
import { defaultDocumentNode } from './helpers'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      defaultDocumentNode,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
