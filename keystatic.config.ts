import { config, collection, fields, singleton } from '@keystatic/core';

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'entities/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
  singletons: {
    members: singleton({
      label: 'Members Page',
      path: 'entities/members-page',
      schema: {
        title: fields.text({ label: 'Page Title' }),
        members: fields.array(
          fields.object({
            firstName: fields.text({ label: 'Prénom', validation: { isRequired: true } }),
            lastName: fields.text({ label: 'Nom', validation: { isRequired: true } }),
            profilePicture: fields.image({ 
              label: 'Photo de profil',
              directory: 'public/images/members',
              publicPath: '/images/members',
            }),
          }),
          {
            label: 'Members',
            itemLabel: props => `${props.fields.firstName.value} ${props.fields.lastName.value}`,
          }
        ),
      },
    }),
  },
});
