import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'client',
            title: 'Client',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'featured',
            title: 'Featured on Homepage',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'thumbnails',
            title: 'Gallery Images',
            type: 'array',
            options: {
                layout: 'grid',
            },
            of: [{ type: 'image', options: { hotspot: true } }],
        }),
        defineField({
            name: 'videos',
            title: 'Videos',
            type: 'array',
            of: [{ type: 'video' }],
        }),
    ],
})
