import { graphql, HeadFC, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { CustomHead } from '../components/CustomHead';
import { PageLayout } from '../components/PageLayout';

const AboutPage: React.FC<PageProps<Queries.AboutPageQuery>> = ({ data }) => {
  const profileImage = data.profileImage
    ? getImage(data.profileImage.childImageSharp)
    : null;

  const headerImage = data.headerImage
    ? getImage(data.headerImage.childImageSharp)
    : null;

  return (
    <PageLayout image={headerImage} title="About" heroSize="default">
      <div className="mx-auto max-w-3xl">
        <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-300">
          Hi, I&apos;m Aude — a web developer, freelancer, and the person behind
          BlackCatMatters. I write about the parts of tech work that textbooks
          skip: changing careers, preparing for interviews, choosing tools, and
          building a sustainable practice as a woman in tech.
        </p>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start">
          {profileImage && (
            <div className="mx-auto w-48 shrink-0 overflow-hidden rounded-2xl border border-stone-200 shadow-sm dark:border-stone-800 sm:mx-0">
              <GatsbyImage
                image={profileImage}
                alt="Portrait of Aude Falco"
                className="w-full"
              />
            </div>
          )}
          <div className="space-y-4 text-base leading-relaxed text-stone-700 dark:text-stone-300">
            <p>
              I&apos;ve spent years building web applications across frontend
              and backend, working with teams and clients, and learning what it
              takes to grow as an engineer without burning out.
            </p>
            <p>
              This blog is where I share those lessons openly — the wins, the
              pivots, and the practical details that helped me move forward.
            </p>
            <p>
              When I&apos;m not writing, I&apos;m usually building software,
              refining my workflow, or exploring better ways to work remotely
              from France with clients around the world.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutPage {
    profileImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 400
          quality: 90
          placeholder: BLURRED
        )
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
    title="About | BlackCatMatters"
    description="Meet Aude Falco — web developer, freelancer, and author of BlackCatMatters, writing about tech careers and software craft."
    jsonLd={{
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Aude Falco',
      url: 'https://blog.blackcatmatters.com/about',
      jobTitle: 'Web Developer',
    }}
  />
);
