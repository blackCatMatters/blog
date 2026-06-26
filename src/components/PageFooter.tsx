import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export const PageFooter: React.FC = () => {
  const { title, navigation, author } = useSiteMetadata();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="space-y-3">
          {title && (
            <div className="flex items-center gap-3">
              <StaticImage
                src="../images/icon.png"
                alt="BlackCatMatters logo"
                layout="fixed"
                height={28}
                width={28}
                className="rounded-md"
              />
              <span className="font-serif text-lg font-semibold text-stone-900 dark:text-stone-50">
                {title}
              </span>
            </div>
          )}
          <p className="max-w-sm text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            Personal writing on tech, freelancing, and building software — by{' '}
            {author || 'Aude Falco'}.
          </p>
          <p className="text-xs text-stone-500 dark:text-stone-500">
            © {year} {title}. All rights reserved.
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-stone-500">
            Explore
          </p>
          <ul className="flex flex-col gap-2">
            {navigation?.map(
              (nav) =>
                nav?.path && (
                  <li key={nav.path}>
                    <Link
                      to={nav.path}
                      className="text-sm text-stone-700 hover:text-teal-700 dark:text-stone-300 dark:hover:text-teal-300"
                    >
                      {nav.name}
                    </Link>
                  </li>
                ),
            )}
            <li>
              <a
                href="/rss.xml"
                className="text-sm text-stone-700 hover:text-teal-700 dark:text-stone-300 dark:hover:text-teal-300"
              >
                RSS feed
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
