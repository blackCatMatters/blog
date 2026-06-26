import React from 'react';

const linkClassName =
  'font-medium text-teal-700 underline decoration-teal-700/30 underline-offset-2 transition hover:decoration-teal-700 dark:text-teal-400 dark:decoration-teal-400/30 dark:hover:decoration-teal-400';

export const mdxComponents = {
  a: (props: React.ComponentProps<'a'>) => (
    <a {...props} className={linkClassName} />
  ),
};

export const ProseContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <article className="prose prose-lg prose-stone mx-auto max-w-3xl dark:prose-invert prose-headings:font-serif prose-headings:font-semibold prose-headings:tracking-tight prose-a:no-underline prose-pre:bg-stone-900 prose-pre:text-stone-100">
    {children}
  </article>
);
