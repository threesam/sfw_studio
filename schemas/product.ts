import {defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'handle',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      type: 'url',
      name: 'thumbnailUrl',
    },
    {
      name: 'isActive',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'vendor',
      type: 'string',
      options: {
        list: ['printful'],
      },
    },
    {
      name: 'variants',
      type: 'array',
      of: [
        {
          name: 'variant',
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'price',
              type: 'number',
            },
            {
              name: 'thumbnailUrl',
              type: 'url',
            },
            {
              name: 'image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'sku',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare(selection) {
      return {
        ...selection,
      }
    },
  },
})
