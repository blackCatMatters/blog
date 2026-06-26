import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';

interface PageLayoutProps {
  image?: IGatsbyImageData | null;
  title?: string;
  heroSize?: 'default' | 'large' | 'none';
}

export const PageLayout: React.FC<React.PropsWithChildren<PageLayoutProps>> = ({
  children,
  image,
  title,
  heroSize = 'default',
}) => {
  const heroImage = image ? getImage(image) : null;
  const showHero = heroSize !== 'none' && heroImage;

  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader />
      {showHero && (
        <div
          className={[
            'relative w-full overflow-hidden',
            heroSize === 'large' ? 'h-64 sm:h-80' : 'h-44 sm:h-56',
          ].join(' ')}
        >
          <GatsbyImage
            image={heroImage}
            alt={title || 'Page hero image'}
            className="h-full w-full"
            objectFit="cover"
            loading="eager"
          />
          {title && (
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent">
              <div className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
                <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  {title}
                </h1>
              </div>
            </div>
          )}
        </div>
      )}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        {children}
      </main>
      <PageFooter />
    </div>
  );
};
