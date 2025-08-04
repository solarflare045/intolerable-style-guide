import js from '@eslint/js';
import prettierPluginConfig from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

import eslintRules from './rules/eslint';
import importRules from './rules/import';
import sonarjsRules from './rules/sonar';
import typescriptEslintRules from './rules/typescript-eslint';
import unicornRules from './rules/unicorn';

export const ISG = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  prettierPluginConfig,

  ...eslintRules,
  ...importRules,
  ...typescriptEslintRules,
  ...unicornRules,
  ...sonarjsRules,

  {
    rules: {
      'prettier/prettier': [
        // have prettier yell at you through eslint
        'error',
        {
          // we could load the defaults from the file, but whatever
          printWidth: 120, // 80 is ridiculous, even for prettier's vibe line length system
          trailingComma: 'all', // typescipt is great at trailing commas
          singleQuote: true, // this is arbitrary and we already arbitraried it one way
          endOfLine: 'auto', // git takes care of this for us, never had line ending issues
          arrowParens: 'always', // this is the default now, but just making sure
        },
      ],
    },
  },

  // JAVASCRIPT FILE OVERRIDES
  {
    files: ['**/*.js'], // js files are ususally there because we aren't compiling them, so let a bunch of crazy stuff through
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
    },
  },

  // TYPESCRIPT TEST FILE OVERRIDES
  {
    files: ['**/*.test.*', '**/*.spec.*', '**/*.e2e-spec.*', '**/*.cy.*'],
    rules: {
      '@typescript-eslint/init-declarations': 'off', // in tests it is handy to have a variable initialized later in a beforeEach block.
      '@typescript-eslint/no-magic-numbers': 'off', // magic number are fun and good in tests
      // tests are full of any casts and whatnot
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      'sonarjs/no-duplicate-string': 'off',
    },
  },
);

export default ISG;
