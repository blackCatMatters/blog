import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { DarkModeToggle } from './DarkModeToggle';

interface PageLayoutProps {
  image?: IGatsbyImageData | null;
  title?: string;
}

export const PageLayout: React.FC<React.PropsWithChildren<PageLayoutProps>> = ({
  children,
  image,
  title,
}) => {
  const heroImage = image ? getImage(image) : null;

  return (
    <main className="min-h-screen bg-white font-sans font-light text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <PageHeader>
        <DarkModeToggle />
      </PageHeader>
      {heroImage && (
        <div className="relative mb-12 h-48">
          <GatsbyImage
            image={heroImage}
            alt={title || ''}
            className="absolute inset-0 h-full w-full"
            objectFit="cover"
            loading="eager"
          />
          {title && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-20 mx-auto max-w-5xl">
                <h1 className="text-4xl font-bold text-white sm:text-5xl">
                  {title}
                </h1>
              </div>
            </div>
          )}
          <div className="absolute inset-0 z-10 bg-gray-900 opacity-30" />
        </div>
      )}
      <div className="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
      <PageFooter />
    </main>
  );
};
