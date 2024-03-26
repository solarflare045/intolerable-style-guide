const versionSatisfies = require('semver/functions/satisfies');

const importRules = require('./rules/import');
const typescriptEslintRules = require('./rules/typescript-eslint');

function getTypescriptVersion() {
  try {
    const typescript = require('typescript');
    return typescript.version;
  } catch (_e) {}
  return null;
}
module.exports = {
  plugins: [
    '@typescript-eslint',
    'import',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json', // this is only really for local testing. the extending projects will override this
  },
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended', // add some of the basic typescript rules
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // add some cooler typescipt rules
    'plugin:prettier/recommended', //last so it wins over every other plugin. disables formatting issues that prettier will handle itself
  ],
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

    ...typescriptEslintRules,
    ...importRules,
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
const typescriptVersion = getTypescriptVersion();
if (typescriptVersion && versionSatisfies(typescriptVersion, '<3.8')) {
  module.exports.rules['import/no-cycle'] = 'off'; // if it is an old version of ts, we can't import only types. So disable this for those situations.
}
