import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { TagList } from './TagList';

export interface ArticleCardProps {
  slug: string;
  title: string;
  author?: string | null;
  date?: string | null;
  time?: number | null;
  excerpt?: string | null;
  description?: string | null;
  tags?: readonly (string | null)[] | null;
  featuredImage?: {
    childImageSharp?: { gatsbyImageData: IGatsbyImageData } | null;
  } | null;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  slug,
  title,
  author,
  date,
  time,
  excerpt,
  description,
  tags,
  featuredImage,
}) => {
  const image = featuredImage?.childImageSharp
    ? getImage(featuredImage.childImageSharp)
    : null;
  const summary = description || excerpt;

  return (
    <Link
      to={`/article/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md dark:border-stone-800 dark:bg-stone-900 dark:hover:border-teal-800"
    >
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <GatsbyImage
            image={image}
            alt={title}
            className="h-full w-full transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <TagList tags={tags} />
        <h2 className="font-serif text-xl font-semibold leading-snug text-stone-900 dark:text-stone-50">
          {title}
        </h2>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          {author && <span>{author}</span>}
          {date && (
            <span>
              {author ? ' · ' : ''}
              {date}
            </span>
          )}
          {time && <span> · {time} min read</span>}
        </p>
        {summary && (
          <p className="line-clamp-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
            {summary}
          </p>
        )}
      </div>
    </Link>
  );
};
