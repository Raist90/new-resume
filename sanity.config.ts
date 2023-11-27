import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import { defaultDocumentNode } from './sanity/helpers'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({
      defaultDocumentNode,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
