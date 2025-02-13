import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  // pathPrefix: '/blog',
  siteMetadata: {
    title: `A Blog by a woman in tech`,
    siteUrl: `https://blog.blackcatmatters.com`,
    author: 'AF',
    description:
      'Follow my journey as a woman in tech and insights on web development, design, and more.',
    image: 'default.jpg',
    navigation: [
      {
        name: 'About',
        path: '/about',
      },
      {
        name: 'Article',
        path: '/article',
      },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `./src/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-images',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'article',
        path: './src/content',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://blog.blackcatmatters.com',
        sitemap: 'https://blog.blackcatmatters.com/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: [`/`, `/blog/*`],
      },
    },
  ],
};

export default config;
