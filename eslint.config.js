// eslint.config.js
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    ignores: ['node_modules/', 'public/', '.cache/'],
    languageOptions: {
      globals: {
        __PATH_PREFIX__: true,
      },
    },
    rules: {
      ...prettierConfig.rules,
    },
  },
];
