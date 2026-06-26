import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import { CustomHead } from '../components/CustomHead';
import { PageLayout } from '../components/PageLayout';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <PageLayout heroSize="none">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-300">
          404
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-stone-900 dark:text-stone-50">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
          Sorry, we couldn&apos;t find the page you were looking for.
        </p>
        {process.env.NODE_ENV === 'development' && (
          <p className="mt-4 text-sm text-stone-500">
            Try creating a page in{' '}
            <code className="rounded bg-stone-100 px-1.5 py-0.5 dark:bg-stone-800">
              src/pages/
            </code>
            .
          </p>
        )}
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
        >
          Back to home
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
  <CustomHead
    title="Page not found | BlackCatMatters"
    description="The page you requested could not be found."
    noindex
  />
);
