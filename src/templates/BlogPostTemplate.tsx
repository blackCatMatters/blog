import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import { PageLayout } from '../components/PageLayout';
import { components, MainContent } from '../components/mdx-components';
import { getImage } from 'gatsby-plugin-image';
import { CustomHead } from '../components/CustomHead';

const BlogPostTemplate: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  children, // ← This is the post content
}) => {
  const featuredImage = data.mdx?.frontmatter?.featuredImage
    ? getImage(data.mdx.frontmatter.featuredImage.childImageSharp)
    : null;

  return (
    <PageLayout
      image={featuredImage}
      title={data.mdx?.frontmatter?.title ?? undefined}
    >
      <MainContent>
        <h1 className="mb-8 text-4xl font-bold sm:text-5xl">
          {data.mdx?.frontmatter?.title}
        </h1>
        <div className="mb-8">
          <span className="text-sm font-thin">
            By {data.mdx?.frontmatter?.author} on {data.mdx?.frontmatter?.date} - {data.mdx?.frontmatter?.time} min read
          </span>
        </div>
        <MDXProvider components={components}>{children}</MDXProvider>
      </MainContent>
    </PageLayout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      excerpt(pruneLength: 159)
      frontmatter {
        title
        time
        author
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export const Head: HeadFC<Queries.BlogPostQuery, unknown> = ({ data }) => {
  const imageUrl =
    data.mdx?.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData
      .images.fallback?.src;

  return (
    <CustomHead
      title={data.mdx?.frontmatter?.title || ''}
      description={data.mdx?.excerpt || ''}
      image={imageUrl}
      article
    />
  );
};
