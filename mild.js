const base = require('./index');

module.exports = {
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json', // this is only really for local testing. the extending projects will override this
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // add some of the basic typescript rules
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // add some cooler typescipt rules
    'plugin:prettier/recommended', //last so it wins over every other plugin. disables formatting issues that prettier will handle itself
  ],
  rules: {
    'prettier/prettier': base.rules['prettier/prettier'],
    // 'import/no-deprecated': base.rules['import/no-deprecated'], // dont use old code

    '@typescript-eslint/explicit-function-return-type': base.rules['@typescript-eslint/explicit-function-return-type'],
    '@typescript-eslint/no-empty-function': base.rules['@typescript-eslint/no-empty-function'],
    '@typescript-eslint/no-magic-numbers': base.rules['@typescript-eslint/no-magic-numbers'],
    '@typescript-eslint/no-unused-vars': base.rules['@typescript-eslint/no-unused-vars'],
    '@typescript-eslint/no-use-before-define': base.rules['@typescript-eslint/no-use-before-define'],
    '@typescript-eslint/require-await': base.rules['@typescript-eslint/require-await'],
  },
  overrides: [
    {
      files: '**/*.js', // js files are ususally there because we aren't compiling them, so let a bunch of crazy stuff through
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
    {
      files: ['**/*.test.*', '**/*.spec.*', '**/*.cy.*'],
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off', // magic number are fun and good in tests
        // tests are full of any casts and whatnot
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
  ],
};
