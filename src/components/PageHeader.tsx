import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { DarkModeToggle } from './DarkModeToggle';

export const PageHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { title, navigation } = useSiteMetadata();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm dark:bg-gray-900 dark:shadow-gray-800">
      <div className="absolute left-1/2 right-auto top-12 -translate-x-1/2 sm:left-auto sm:right-4 sm:top-4 sm:translate-x-0">
        <DarkModeToggle />
      </div>
      <div className="container mx-auto flex max-w-5xl items-center justify-between py-6">
        {title && (
          <Link
            to="/"
            className="flex items-center gap-2 px-4 sm:w-auto sm:pb-0 lg:px-0"
          >
            <StaticImage
              src="../images/icon.png"
              alt={title}
              layout="fixed"
              height={35}
              width={35}
            />
            <span className="whitespace-nowrap text-xl font-bold uppercase">
              {title}
            </span>
          </Link>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            {navigation?.map(
              (nav) =>
                nav?.path && (
                  <li key={nav.path}>
                    <Link
                      to={nav.path}
                      className="hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                    >
                      {nav.name}
                    </Link>
                  </li>
                ),
            )}
          </ul>
        </nav>

        {/* Mobile Burger Menu */}
        <button
          className="block focus:outline-none md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <span className="text-2xl font-bold">x</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        {children}
      </div>

      {isMenuOpen && (
        <nav className="bg-white shadow-lg dark:bg-gray-900 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navigation?.map(
              (nav) =>
                nav?.path && (
                  <li key={nav.path}>
                    <Link
                      to={nav.path}
                      className="hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                      onClick={toggleMenu}
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
