import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { PageLayout } from '../components/PageLayout';
import { CustomHead } from '../components/CustomHead';

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const image = data.headerImage
    ? getImage(data.headerImage.childImageSharp)
    : null;
    
  return (
    <PageLayout image={image} title="My Gatsby Blog">
      <div className="container mx-auto px-4 lg:px-0">
        <h1 className="my-8 text-4xl font-bold lg:text-5xl">My Gatsby Blog</h1>
        <span className="text-lg">This is my Gatsby Blog home page!</span>
      </div>
    </PageLayout>
  );
};

export default IndexPage;

// This query will be run during the GatsbyJS build process when creating our
// pages. The data will be passed to our page component as a `data` property.
export const pageQuery = graphql`
  query IndexPage {
    headerImage: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <><title>Home Page</title><CustomHead
    title="Home | My Gatsby Blog"
    description="This is the home page to my blog. You should write a better description." /></>
);
