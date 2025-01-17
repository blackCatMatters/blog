import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders site title', () => {
    render(<Header siteTitle="Test Blog" />);
    expect(screen.getByText('Test Blog')).toBeInTheDocument();
  });
});
