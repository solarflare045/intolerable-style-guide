import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import-x';

export default defineConfig({
  plugins: {
    import: importPlugin,
  },
  rules: {
    'import/export': 'error',
    'import/first': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
          caseInsensitive: false,
        },
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-deprecated': 'warn',
    'import/no-mutable-exports': 'error',
    'import/no-self-import': 'error',
  },
});
