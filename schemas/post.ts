export default {
  name: 'post',
  title: 'Post',
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
      name: 'contributor',
      title: 'Contributor',
      type: 'reference',
      to: {type: 'contributor'},
    },
    {
      name: 'image',
      title: 'Feature Image',
      type: 'image',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author, media, title} = selection
      return Object.assign({}, selection, {
        title,
        subtitle: author && `by ${author}`,
        media,
      })
    },
  },
}
