export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'hostname',
      type: 'string',
      title: 'Hostname',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Site Image',
      description: 'main branding',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe this site for search engines and social media.',
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
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'body',
      title: 'About',
      type: 'blockContent',
    },
  ],
}
