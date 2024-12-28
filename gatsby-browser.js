export const onClientEntry = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
};

// Optionally, wrap your root element to provide theme context
export const wrapRootElement = ({ element }) => {
  return element;
};
