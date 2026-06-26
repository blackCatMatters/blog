import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { DarkModeToggle } from './DarkModeToggle';

const navLinkClass = (isActive: boolean) =>
  [
    'rounded-md px-3 py-2 text-sm font-medium transition',
    isActive
      ? 'bg-teal-50 text-teal-800 dark:bg-teal-950/50 dark:text-teal-200'
      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50',
  ].join(' ');

export const PageHeader: React.FC = () => {
  const { title, navigation } = useSiteMetadata();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur dark:border-stone-800 dark:bg-stone-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {title && (
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <StaticImage
              src="../images/icon.png"
              alt="BlackCatMatters logo"
              layout="fixed"
              height={36}
              width={36}
              className="rounded-lg"
            />
            <span className="truncate font-serif text-lg font-semibold text-stone-900 dark:text-stone-50 sm:text-xl">
              {title}
            </span>
          </Link>
        )}

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 md:flex">
            {navigation?.map(
              (nav) =>
                nav?.path && (
                  <Link
                    key={nav.path}
                    to={nav.path}
                    className={navLinkClass(pathname === nav.path)}
                  >
                    {nav.name}
                  </Link>
                ),
            )}
          </nav>

          <DarkModeToggle />

          <button
            type="button"
            className="rounded-md p-2 text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-stone-200 px-4 py-3 dark:border-stone-800 md:hidden">
          <ul className="flex flex-col gap-1">
            {navigation?.map(
              (nav) =>
                nav?.path && (
                  <li key={nav.path}>
                    <Link
                      to={nav.path}
                      className={navLinkClass(pathname === nav.path)}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {nav.name}
                    </Link>
                  </li>
                ),
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};
