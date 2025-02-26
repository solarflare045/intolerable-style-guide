import { ISG } from 'eslint-config-intolerable-style-guide';

// This file is used for internal testing only.
export default [
  {
    ignores: ['eslint.config.mjs'],
  },

  ...ISG,

  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];
