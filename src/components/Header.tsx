import React from 'react';

interface HeaderProps {
  siteTitle: string;
}

export const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header>
    <h1>{siteTitle}</h1>
  </header>
);

export default Header;
