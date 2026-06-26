import { graphql, type HeadFC, type PageProps, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { CustomHead } from '../components/CustomHead';
import { PageLayout } from '../components/PageLayout';

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const headerImage = data.headerImage
    ? getImage(data.headerImage.childImageSharp)
    : null;
  const posts = data.allMdx.edges;

  return (
    <PageLayout image={headerImage} heroSize="large">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-300">
          A blog by a woman in tech
        </p>
        <h1 className="font-serif text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl">
          Writing about code, careers, and building things that matter.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
          I&apos;m Aude — a web developer sharing lessons from freelancing,
          technical interviews, productivity setups, and life in tech. Practical
          notes from the field, not corporate fluff.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/article"
            className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
          >
            Read all articles
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-stone-400 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-900"
          >
            About me
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 dark:text-stone-50">
              Latest writing
            </h2>
            <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
              Recent posts on development, freelancing, and tech life.
            </p>
          </div>
          <Link
            to="/article"
            className="hidden text-sm font-medium text-teal-700 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300 sm:inline"
          >
            View all →
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ node }) => (
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
      </section>
    </PageLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    headerImage: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 90
          width: 1920
          layout: CONSTRAINED
          placeholder: BLURRED
        )
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 3) {
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
                  width: 800
                  quality: 90
                  aspectRatio: 1.6
                )
              }
            }
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <CustomHead
    title="BlackCatMatters | A blog by a woman in tech"
    description="Stories from a woman in tech — web development, freelancing, career growth, and building software with clarity."
    jsonLd={{
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'BlackCatMatters',
      url: 'https://blog.blackcatmatters.com',
      description:
        'Stories from a woman in tech — web development, freelancing, career growth, and building software with clarity.',
      author: {
        '@type': 'Person',
        name: 'Aude Falco',
      },
    }}
  />
);
