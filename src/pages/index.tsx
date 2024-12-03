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
    <PageLayout image={image} title="Solution engineering by BCM">
      <div className="container mx-auto px-4 lg:px-0 text-center">
      <h1 className="my-6 text-3xl font-bold lg:text-4xl">
        Crafting Tailored Enterprise Software Solutions
      </h1>
      <p className="mt-4 text-base leading-6 lg:text-lg lg:leading-7">
        At <strong>BlackCatMatters (BCM)</strong>, we design and build websites and enterprise 
        software tailored to your business needs. Our services cover both the  <strong>frontend</strong>, 
        creating sleek and responsive user interfaces, and the <strong>backend</strong>, ensuring performance, scalability, 
        and secure data handling.
      </p>
      <p className="mt-3 text-base leading-6 lg:text-lg lg:leading-7">
        Whether you are looking for an e-commerce platform, a SaaS solution, or a data-driven application, 
        we offer optimized solutions by selecting the right technology stack, balancing performance, security, 
        and cost efficiency.
      </p>
      <p className="mt-3 text-base leading-6 lg:text-lg lg:leading-7">
        We prioritize security and data protection while ensuring that your business tools are scalable 
        and future-ready. Our team takes pride in delivering solutions that not only meet but exceed your expectations.
      </p>
      <p className="mt-6 text-base leading-6 lg:text-lg">
        <a
          href="mailto:contact@blackcatmatters.com"
          className="font-semibold text-blue-600 hover:underline"
        >
          Contact us today
        </a>{' '}
        to discuss your project and learn how we can help bring it to life.
      </p>
      <p className="mt-3 text-base leading-6 lg:text-lg">
        Based in France, our team works with clients worldwide, offering remote services that adapt to your needs.
      </p>
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
  <>
    <title>Home Page</title>
    <CustomHead
      title="Home | My Gatsby Blog"
      description="This is the home page to my blog. You should write a better description."
    />
  </>
);
