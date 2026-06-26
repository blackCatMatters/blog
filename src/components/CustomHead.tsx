import { useLocation } from '@reach/router';
import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { JsonLd } from './JsonLd';

interface CustomHeadProps {
  description?: string;
  lang?: string;
  title?: string;
  image?: string;
  article?: boolean;
  canonicalUrl?: string;
  nonCanonical?: boolean;
  author?: string;
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: readonly (string | null)[] | null;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const toAbsoluteUrl = (siteUrl: string, path?: string | null) => {
  if (!path) {
    return undefined;
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
};

export const CustomHead: React.FC<React.PropsWithChildren<CustomHeadProps>> = ({
  description: propDescription,
  lang: propLang,
  title: propTitle,
  image,
  article,
  canonicalUrl: propCanonicalPath,
  nonCanonical = false,
  author: propAuthor,
  noindex = false,
  publishedTime,
  modifiedTime,
  tags,
  jsonLd,
  children,
}) => {
  const {
    title: siteTitle,
    description: siteDescription,
    image: siteImage,
    siteUrl,
    author: siteAuthor,
  } = useSiteMetadata();

  const { pathname } = useLocation();
  const canonicalUrl = propCanonicalPath || `${siteUrl}${pathname}`;
  const pageTitle = propTitle || siteTitle || 'BlackCatMatters';
  const description = propDescription || siteDescription || '';
  const lang = propLang || 'en_US';
  const author = propAuthor || siteAuthor || '';
  const ogImage = toAbsoluteUrl(siteUrl || '', image || siteImage || undefined);
  const visibleTags = tags?.filter(Boolean) as string[] | undefined;

  return (
    <>
      <title>{pageTitle}</title>
      {!nonCanonical && <link rel="canonical" href={canonicalUrl} />}
      <meta name="description" content={description} />
      {author && <meta name="author" content={author} />}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteTitle || 'BlackCatMatters'} />
      <meta property="og:locale" content={lang} />
      {ogImage && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta name="twitter:image" content={ogImage} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}
      {!ogImage && <meta name="twitter:card" content="summary" />}
      {author && <meta name="twitter:creator" content={author} />}
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {article &&
        author &&
        visibleTags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      {article && author && <meta property="article:author" content={author} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {jsonLd && <JsonLd data={jsonLd} />}
      {children}
    </>
  );
};
