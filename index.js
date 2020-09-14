const {
  rules: baseStyleRules,
} = require('eslint-config-airbnb-base/rules/style');
const versionSatisfies = require('semver/functions/satisfies');

function getTypescriptVersion() {
  try {
    const typescript = require('typescript');
    return typescript.version
  } catch (_e) {}
  return null;
}
module.exports = {
  plugins: [
    '@typescript-eslint',
    'array-func',
    'promise',
    'eslint-comments',
    'unicorn',
    'sonarjs',
    'security',
    'you-dont-need-lodash-underscore',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json', // this is only really for local testing. the extending projects will override this
  },
  extends: [
    'airbnb-typescript/base', //start with airbnb, which has thought through a bunch of minutiae
    'plugin:@typescript-eslint/recommended', // add some of the basic typescript rules
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // add some cooler typescipt rules
    'plugin:you-dont-need-lodash-underscore/compatible-warn', // if there is an exact one-to-one native function available over lodash, then warn
    'plugin:array-func/all', // ensure the correct use of the Array functions
    'plugin:promise/recommended', // use promises as well as possible
    'plugin:eslint-comments/recommended', // these are meta rules about eslint configing itself. don't be silly, basically
    'plugin:unicorn/recommended', // unicorn have added many rules about improving the readability of code related to the fun stuff es6+ gives us
    'plugin:sonarjs/recommended', // security audit rules that might help us see very damaging bugs
    'plugin:security/recommended', // more security audit rules
    'prettier', //last so it wins over every other plugin. disables formatting issues that prettier will handle itself
    'prettier/@typescript-eslint',
    'prettier/unicorn',
  ],
  rules: {
    'prettier/prettier': [ // have prettier yell at you through eslint
      'error',
      { // we could load the defaults from the file, but whatever
        printWidth: 120, // 80 is ridiculous, even for prettier's vibe line length system
        trailingComma: 'all', // typescipt is great at trailing commas
        singleQuote: true,  // this is arbitrary and we already arbitraried it one way
        endOfLine: 'auto', // git takes care of this for us, never had line ending issues
      },
    ],
    'no-prototype-builtins': 'off', // typescript saves the day here (unless there are security concerns)
    'import/prefer-default-export': 'off', // this blows, and is probably bad
    '@typescript-eslint/explicit-function-return-type': [
      // makes sure we are returning the expected type from a function. small functions are ok
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      // just adding the types
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    'no-console': 'off', // what's wrong with console? even in a browser, logging to console is probably fine
    'spaced-comment': 'off', // this adds readability, i guess? but I don't see it as essential
    'no-restricted-syntax': baseStyleRules['no-restricted-syntax'].filter(
      (value) => value.selector !== 'ForOfStatement',
    ), // airbnb has banned for..of, even though for..of rules. This just removes that.
    'class-methods-use-this': 'off', // i can see why airbnb wants this, but the performance difference between static and instance methods is not worth it
    'promise/prefer-await-to-then': 'error', // why aren't you using await? typescipt transpile means it is always available
    'promise/prefer-await-to-callbacks': 'warn', // callbacks can be painful to convert to promises to convert to await, but you should try
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ], // don't really care about the assertion style, is is more about enforcing that object literal
    'sonarjs/cognitive-complexity': ['warn', 25], // this might indicate bad code, but we can trust the dev to know if it is an error or not
    eqeqeq: ['error', 'smart'], // some things only == null and not === null
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
      },
    ], // magic numbers are bad, but also it doesn't matter
    '@typescript-eslint/naming-convention': 'error', //airbnb allow PascalCase in some situations that are mostly type aware. so change back the default
    '@typescript-eslint/no-empty-function': [
      'warn',
      {
        allow: [
          'decoratedFunctions',
          'private-constructors',
          'protected-constructors',
        ],
      },
    ], // did you forget to write your function?
    'import/no-deprecated': 'warn', // dont use old code
    'no-await-in-loop': 'warn', // sometimes you want to do some network calls synchronously.
    'no-undefined': 'warn', // we chose null as the bottom value, but sometimes ya just gotta use undefined
    'unicorn/no-null': 'off', // null is our chosen bottom value
    'no-underscore-dangle': ['warn', { // these are a fun way to indicate private members
      allowAfterThis: true,
    }],
    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowExpressions: true,
    }],
    'no-void': ['error', {
      allowAsStatement: true,
    }],
    'global-require': 'off', // handled by import stuff and no-var-require
    '@typescript-eslint/no-unsafe-member-access': 'warn', // All these no-unsafe rules are great, but 'any' creeps in in just too many palces
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
  },
};
const typescriptVersion = getTypescriptVersion();
if (typescriptVersion && versionSatisfies(typescriptVersion, "<3.8")) {
  module.exports.rules['import/no-cycle'] = 'off'; // if it is an old version of ts, we can't import only types. So disable this for those situations.
}