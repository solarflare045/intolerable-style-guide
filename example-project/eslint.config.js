const { ISG } = require('eslint-config-intolerable-style-guide');

// This file is used for internal testing only.
module.exports = [
  ...ISG,

  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];
