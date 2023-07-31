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
      name: 'isActive',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'description',
      type: 'text',
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
              type: 'string',
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
    {
      name: 'vendor',
      type: 'string',
      options: {
        list: ['printful'],
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      variants: 'variants',
    },
    prepare({title, variants}) {
      return {
        title,
        media: variants[0].image,
      }
    },
  },
})
