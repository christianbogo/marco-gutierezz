import { defineConfig, DocumentActionComponent, DocumentActionsContext } from 'sanity'
import { structureTool, StructureBuilder } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

// Defines the structure of the Studio, filtering out the singleton 'settings' from the main list but keeping it accessible.
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['settings'])

export default defineConfig({
    name: 'default',
    title: 'Marco Gutierezz',

    projectId: 'le5xjokv',
    dataset: 'production',

    basePath: '/studio',

    plugins: [
        structureTool({
            structure: (S: StructureBuilder) =>
                S.list()
                    .title('Content')
                    .items([
                        // Singleton items
                        S.listItem()
                            .title('Settings')
                            .id('settings')
                            .child(
                                S.document()
                                    .schemaType('settings')
                                    .documentId('settings')
                            ),
                        // Regular document types
                        S.divider(),
                        ...S.documentTypeListItems().filter(
                            (listItem: any) => !singletonTypes.has(listItem.getId() as string)
                        ),
                    ]),
        }),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
        templates: (templates) =>
            templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
    },

    document: {
        // For singleton types, filter out actions that are not allowed.
        actions: (input: DocumentActionComponent[], context: DocumentActionsContext) =>
            singletonTypes.has(context.schemaType)
                ? input.filter(({ action }) => action && singletonActions.has(action))
                : input,
    },
})
