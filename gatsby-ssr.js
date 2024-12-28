export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="dark-mode-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function getInitialColorMode() {
              const savedTheme = window.localStorage.getItem('theme');
              if (savedTheme) {
                return savedTheme;
              }
              return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
            }
            const colorMode = getInitialColorMode();
            document.documentElement.classList.toggle(
              'dark',
              colorMode === 'dark'
            );
          })();
        `,
      }}
    />,
  ]);
};
