export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e35ddd10d7d3b30db4a2cb3',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-f7gpn4cj',
                  apiId: 'e037eb82-c6ce-4be7-b824-b447af4a6df4'
                },
                {
                  buildHookId: '5e35ddd2eda9b1e709a2f0de',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ocmyjz6w',
                  apiId: 'fbf0ba35-2553-4b19-ae7f-89cb842cc724'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paolodina/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ocmyjz6w.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
