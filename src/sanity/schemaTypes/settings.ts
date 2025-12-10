import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'bunnyLibraryId',
            title: 'Default Bunny.net Library ID',
            type: 'string',
            description: 'The default Library ID for Bunny.net videos. This will be used if a video does not have a specific Library ID.',
        }),
    ],
})
