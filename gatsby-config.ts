import type { GatsbyConfig } from 'gatsby';

const siteUrl = 'https://blog.blackcatmatters.com';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'BlackCatMatters',
    siteUrl,
    author: 'Aude Falco',
    description:
      'Stories from a woman in tech — web development, freelancing, career growth, and building software with clarity.',
    image: '/icons/icon-512x512.png',
    navigation: [
      { name: 'About', path: '/about' },
      { name: 'Articles', path: '/article' },
    ],
  },
  graphqlTypegen: {
    generateOnBuild: true,
    typesOutputPath: './src/gatsby-types.d.ts',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'BlackCatMatters Blog',
        short_name: 'BCM Blog',
        start_url: '/',
        background_color: '#fafaf9',
        theme_color: '#0d9488',
        display: 'minimal-ui',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './src/content',
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                author
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allMdx },
            }: {
              query: {
                site: {
                  siteMetadata: {
                    siteUrl: string;
                  };
                };
                allMdx: {
                  edges: Array<{
                    node: {
                      excerpt: string;
                      frontmatter: {
                        title: string;
                        description?: string;
                        slug: string;
                        date: string;
                      };
                    };
                  }>;
                };
              };
            }) =>
              allMdx.edges.map(({ node }) => ({
                title: node.frontmatter.title,
                description: node.frontmatter.description || node.excerpt,
                date: node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}/article/${node.frontmatter.slug}`,
                guid: `${site.siteMetadata.siteUrl}/article/${node.frontmatter.slug}`,
              })),
            query: `
              {
                allMdx(sort: { frontmatter: { date: DESC } }, limit: 100) {
                  edges {
                    node {
                      excerpt(pruneLength: 280)
                      frontmatter {
                        title
                        description
                        slug
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'BlackCatMatters Blog',
          },
        ],
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/', '/about', '/article'],
      },
    },
  ],
};

export default config;
