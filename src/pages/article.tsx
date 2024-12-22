import { graphql, HeadFC, Link, PageProps } from 'gatsby';
import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { CustomHead } from '../components/CustomHead';

const BlogPage: React.FC<PageProps<Queries.BlogPageQuery>> = ({ data }) => {
  const headerImage = data.headerImage
    ? getImage(data.headerImage.childImageSharp)
    : null;

  return (
    <PageLayout image={headerImage} title="">
      <h1 className="my-6 text-center text-3xl font-bold lg:text-4xl">
        Latest articles
      </h1>
      <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-9 p-4 sm:grid-cols-2 sm:p-0 lg:grid-cols-2">
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.id} className="h-full">
            <Link
              to={`/article/${node.frontmatter?.slug}`}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-400"
            >
              <div className="h-48 w-full">
                {node.frontmatter?.featuredImage && (
                  <GatsbyImage
                    image={
                      getImage(node.frontmatter.featuredImage.childImageSharp)!
                    }
                    alt=""
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="mb-4 line-clamp-2 text-xl font-bold">
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
        gatsbyImageData(quality: 90, width: 200, layout: CONSTRAINED)
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
