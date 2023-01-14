export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'hostname',
      type: 'string',
      title: 'Hostname'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Site Image',
      description: 'main branding'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe this site for search engines and social media.'
    },
    {
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [{
        type: 'mainImage'
      }]
    }
    // {
    //   name: 'author',
    //   type: 'reference',
    //   description: 'Publish an author and set a reference to them here.',
    //   title: 'Author',
    //   to: [{ type: 'author' }]
    // }
  ]
}
