import React from 'react';

interface TagListProps {
  tags?: readonly (string | null)[] | null;
  className?: string;
}

export const TagList: React.FC<TagListProps> = ({ tags, className = '' }) => {
  const visibleTags = tags?.filter(Boolean) as string[] | undefined;

  if (!visibleTags?.length) {
    return null;
  }

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {visibleTags.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-950/60 dark:text-teal-200"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};
