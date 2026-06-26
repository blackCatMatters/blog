import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import { PageLayout } from '../components/PageLayout';
import { mdxComponents, ProseContent } from '../components/mdx-components';
import { getImage } from 'gatsby-plugin-image';
import { CustomHead } from '../components/CustomHead';
import { TagList } from '../components/TagList';

const BlogPostTemplate: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  children,
}) => {
  const post = data.mdx;
  const featuredImage = post?.frontmatter?.featuredImage
    ? getImage(post.frontmatter.featuredImage.childImageSharp)
    : null;

  return (
    <PageLayout
      image={featuredImage}
      title={post?.frontmatter?.title ?? undefined}
      heroSize="large"
    >
      <ProseContent>
        <header className="not-prose mb-10 border-b border-stone-200 pb-8 dark:border-stone-800">
          <TagList tags={post?.frontmatter?.tags} className="mb-4" />
          <p className="text-sm text-stone-500 dark:text-stone-400">
            By {post?.frontmatter?.author} · {post?.frontmatter?.date} ·{' '}
            {post?.frontmatter?.time} min read
          </p>
          {post?.frontmatter?.description && (
            <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
              {post.frontmatter.description}
            </p>
          )}
        </header>
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </ProseContent>
    </PageLayout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      excerpt(pruneLength: 160)
      frontmatter {
        title
        description
        time
        author
        date(formatString: "MMMM DD, YYYY")
        rawDate: date
        slug
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        tags
      }
    }
  }
`;

export const Head: HeadFC<Queries.BlogPostQuery> = ({ data }) => {
  const post = data.mdx;
  const frontmatter = post?.frontmatter;
  const siteUrl = 'https://blog.blackcatmatters.com';
  const slug = frontmatter?.slug;
  const canonicalUrl = slug ? `${siteUrl}/article/${slug}` : siteUrl;
  const imagePath = frontmatter?.featuredImage?.publicURL;
  const imageUrl = imagePath ? `${siteUrl}${imagePath}` : undefined;
  const publishedTime = frontmatter?.rawDate
    ? new Date(frontmatter.rawDate).toISOString()
    : undefined;

  return (
    <CustomHead
      title={`${frontmatter?.title || 'Article'} | BlackCatMatters`}
      description={frontmatter?.description || post?.excerpt || ''}
      image={imageUrl}
      article
      author={frontmatter?.author || undefined}
      publishedTime={publishedTime}
      tags={frontmatter?.tags}
      canonicalUrl={canonicalUrl}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: frontmatter?.title,
        description: frontmatter?.description || post?.excerpt,
        datePublished: publishedTime,
        author: {
          '@type': 'Person',
          name: frontmatter?.author || 'Aude Falco',
        },
        image: imageUrl,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
        keywords: frontmatter?.tags?.filter(Boolean).join(', '),
      }}
    />
  );
};
