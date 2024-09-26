import { graphql, HeadFC, Link, PageProps } from 'gatsby';
import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { CustomHead } from '../components/CustomHead';

const BlogPage: React.FC<PageProps<Queries.BlogPageQuery>> = ({ data }) => {
  const image = data.headerImage
    ? getImage(data.headerImage.childImageSharp)
    : null;

    return (
      <PageLayout image={image} title="Aude In Tech">
        <h1 className="mb-8 text-center text-4xl font-bold sm:text-5xl">
          Latest Articles
        </h1>
        <ul className="mx-auto max-w-4xl p-4 sm:p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {data.allMdx.edges.map(({ node }) => (
            <li key={node.id} className="h-auto">
              <Link
                to={`/blog/${node.frontmatter?.slug}`}
                className="block overflow-hidden rounded-lg border border-gray-400"
              >
                <div className="w-full h-30">
                  {node.frontmatter?.featuredImage && (
                    <GatsbyImage
                      image={getImage(node.frontmatter.featuredImage.childImageSharp)!}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h2 className="mb-4 text-xl font-bold">
                    {node.frontmatter?.title}
                  </h2>
                  <span className="mb-4 block text-sm font-thin">
                    By {node.frontmatter?.author} on {node.frontmatter?.date} -{' '}
                    {node.frontmatter?.time} min read
                  </span>
                  <span className="block text-lg">{node.excerpt}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </PageLayout>
    );
    
};

export default BlogPage;

export const query = graphql`
  query BlogPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          frontmatter {
            title
            time
            author
            date(formatString: "MMMM DD, YYYY")
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            tags
          }
        }
      }
    }
    headerImage: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <>
    <title>Blog Page</title>
    <CustomHead
      title="Home | My Gatsby Blog"
      description="This is the home page to my blog. You should write a better description."
    />
  </>
);
