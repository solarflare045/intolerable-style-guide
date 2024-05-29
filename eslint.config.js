const { ISG } = require('./dist');

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
