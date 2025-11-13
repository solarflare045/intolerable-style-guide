import { defineConfig } from 'eslint/config';
import { ISG } from 'eslint-config-intolerable-style-guide';

// This file is used for internal testing only.
export default defineConfig([
  {
    ignores: ['eslint.config.mjs'],
  },

  ISG,

  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
]);
