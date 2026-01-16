import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { dashboardTool, projectUsersWidget, projectInfoWidget } from '@sanity/dashboard'
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list'
import { schemaTypes } from './schemas'

export default defineConfig({
    name: 'default',
    title: 'Rumah Papan Klang',

    projectId: 'vm3p10fe',
    dataset: 'production',

    plugins: [
        structureTool(),
        visionTool(),
        media(),
        dashboardTool({
            widgets: [
                documentListWidget({
                    title: '最近編輯 (Recent Edits)',
                    order: '_updatedAt desc',
                    limit: 10,
                    types: ['about', 'village', 'story', 'contact'] // customize based on your schema types
                }),
                projectInfoWidget(),
                projectUsersWidget()
            ]
        })
    ],

    schema: {
        types: schemaTypes,
    },
})
