import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'video',
    title: 'Video',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'bunnyVideoId',
            title: 'Bunny.net Video ID',
            type: 'string',
            description: 'The ID of the video in Bunny.net (e.g., "efd61be6-5b9b-4108-af09-591be75f8371")',
        }),
        defineField({
            name: 'bunnyLibraryId',
            title: 'Bunny.net Library ID',
            type: 'string',
            description: 'The Library ID in Bunny.net (e.g., "468791")',
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'string',
            description: 'e.g. "2:06"',
        }),
        defineField({
            name: 'credits',
            title: 'Credits',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'role', type: 'string', title: 'Role' },
                        { name: 'name', type: 'string', title: 'Name' },
                    ],
                },
            ],
        }),
    ],
})
