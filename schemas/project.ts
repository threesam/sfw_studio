export default {
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
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
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
      name: 'contributors',
      type: 'array',
      of: [{
        name: 'contributor',
        type: 'reference',
        title: 'Contributor',
        to: [{ type: 'contributor' }]
      }]
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author, media, title } = selection
      return Object.assign({}, selection, {
        title,
        subtitle: author && `by ${author}`,
        media
      })
    },
  },
}
