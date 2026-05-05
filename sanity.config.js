import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Spendit Campaign',
  projectId: 'skiqfugm',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173',
        preview: '/',
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
