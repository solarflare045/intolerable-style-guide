import { defineConfig } from 'eslint/config';
import * as importPlugin from 'eslint-plugin-import';

import { tsiif } from '../helpers/iif';

export default defineConfig({
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- No types available.
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
    'import/no-cycle': tsiif('<3.8', 'off', 'error'),
    'import/no-deprecated': 'warn',
    'import/no-mutable-exports': 'error',
    'import/no-self-import': 'error',
  },
});
