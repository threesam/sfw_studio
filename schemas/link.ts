export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      options: {
        list: [
          {title: 'facebook', value: 'facebook'},
          {title: 'tiktok', value: 'tiktok'},
          {title: 'instagram', value: 'instagram'},
          {title: 'linkedin', value: 'linkedin'},
          {title: 'website', value: 'website'},
          {title: 'imdb', value: 'imdb'},
          {title: 'youtube', value: 'youtube'},
          {title: 'backstage', value: 'backstage'},
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'href',
      title: 'Href',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
