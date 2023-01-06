export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Image',
      type: 'mainImage',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent'
    },
    {
      name: 'link',
      title: 'Link',
      description: 'Only one link please',
      type: 'url'
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        {
          type: 'link',
          name: 'link'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { name, media } = selection
      return Object.assign({}, selection, {
        subtitle: name,
        media
      })
    },
  },
}
