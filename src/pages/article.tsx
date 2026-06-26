import { graphql, HeadFC, PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { CustomHead } from '../components/CustomHead';
import { PageLayout } from '../components/PageLayout';

const BlogPage: React.FC<PageProps<Queries.BlogPageQuery>> = ({ data }) => {
  const headerImage = data.headerImage
    ? getImage(data.headerImage.childImageSharp)
    : null;

  return (
    <PageLayout image={headerImage} title="Articles" heroSize="default">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-300">
          Archive
        </p>
        <p className="mt-3 text-lg text-stone-600 dark:text-stone-300">
          Essays on development, freelancing, interviews, and the tools I use to
          stay productive.
        </p>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.id}>
            <ArticleCard
              slug={node.frontmatter?.slug || ''}
              title={node.frontmatter?.title || ''}
              author={node.frontmatter?.author}
              date={node.frontmatter?.date}
              time={node.frontmatter?.time}
              description={node.frontmatter?.description}
              excerpt={node.excerpt}
              tags={node.frontmatter?.tags}
              featuredImage={node.frontmatter?.featuredImage}
            />
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
            description
            time
            author
            date(formatString: "MMMM DD, YYYY")
            slug
            tags
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 1000
                  quality: 90
                  aspectRatio: 1.6
                )
              }
            }
          }
        }
      }
    }
    headerImage: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 90, width: 1920, layout: CONSTRAINED)
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <CustomHead
    title="Articles | BlackCatMatters"
    description="Browse all articles on web development, freelancing, career growth, and tech life."
  />
);
