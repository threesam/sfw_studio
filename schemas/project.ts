import {defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
    },
    {
      name: 'posters',
      type: 'array',
      title: 'Posters',
      of: [{type: 'image'}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Abstract',
      type: 'blockContent',
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        {
          type: 'link',
          name: 'link',
        },
      ],
    },
    {
      name: 'cast',
      type: 'array',
      of: [
        {
          name: 'contributor',
          type: 'object',
          fields: [
            {
              name: 'castname',
              title: 'Cast Name',
              type: 'string',
            },
            {
              name: 'person',
              type: 'reference',
              title: 'Person',
              to: [{type: 'person'}],
            },
            {
              name: 'release',
              type: 'image',
              title: 'Release Form',
            },
          ],

          preview: {
            select: {
              castName: 'castname',
              personName: 'person.name',
              media: 'person.mainImage',
            },
            prepare(selection) {
              const {castName, personName, media} = selection

              return Object.assign({}, selection, {
                title: castName,
                subtitle: personName,
                media,
              })
            },
          },
        },
      ],
    },
    {
      name: 'crew',
      type: 'array',
      of: [
        {
          name: 'contributor',
          type: 'object',
          fields: [
            {
              name: 'role',
              type: 'reference',
              title: 'Role',
              to: [{type: 'role'}],
            },
            {
              name: 'person',
              type: 'reference',
              title: 'Person',
              to: [{type: 'person'}],
            },
          ],

          preview: {
            select: {
              role: 'role.title',
              personName: 'person.name',
              media: 'person.mainImage',
            },
            prepare(selection) {
              const {role, personName, media} = selection

              return Object.assign({}, selection, {
                title: role,
                subtitle: personName,
                media,
              })
            },
          },
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {media, title} = selection

      return Object.assign({}, selection, {
        title,
        media,
      })
    },
  },
})
