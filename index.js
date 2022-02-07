const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');
const { rules: baseVariableRules } = require('eslint-config-airbnb-base/rules/variables');
const { rules: baseAirbnbTypescriptRules } = require('eslint-config-airbnb-typescript/lib/shared');
const versionSatisfies = require('semver/functions/satisfies');

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
    'promise',
    'eslint-comments',
    'unicorn',
    'sonarjs',
    'security-node',
    'you-dont-need-lodash-underscore',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json', // this is only really for local testing. the extending projects will override this
  },
  extends: [
    'airbnb-base', // start with airbnb, which has thought through a bunch of minutiae
    'airbnb-typescript/base', //add some typescript variations to the airbnb base style
    'plugin:@typescript-eslint/recommended', // add some of the basic typescript rules
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // add some cooler typescipt rules
    'plugin:you-dont-need-lodash-underscore/compatible-warn', // if there is an exact one-to-one native function available over lodash, then warn
    'plugin:promise/recommended', // use promises as well as possible
    'plugin:eslint-comments/recommended', // these are meta rules about eslint configing itself. don't be silly, basically
    'plugin:sonarjs/recommended', // security audit rules that might help us see very damaging bugs
    'plugin:security-node/recommended', // more security audit rules
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
        ignore: [-1, 0, 1, 2, 10, 100, 1000],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
      },
    ], // magic numbers are bad, but also it doesn't matter
    '@typescript-eslint/naming-convention': 'error', //airbnb allow PascalCase in some situations that are mostly type aware. so change back the default
    '@typescript-eslint/no-empty-function': [
      'warn',
      {
        allow: ['decoratedFunctions', 'private-constructors', 'protected-constructors'],
      },
    ], // did you forget to write your function?
    'import/no-deprecated': 'warn', // dont use old code
    'no-await-in-loop': 'warn', // sometimes you want to do some network calls synchronously.
    'no-undefined': 'warn', // we chose null as the bottom value, but sometimes ya just gotta use undefined
    'unicorn/no-null': 'off', // null is our chosen bottom value
    'no-underscore-dangle': [
      'warn',
      {
        // these are a fun way to indicate private members
        allowAfterThis: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    'global-require': 'off', // handled by import stuff and no-var-require
    '@typescript-eslint/no-unsafe-member-access': 'warn', // All these no-unsafe rules are great, but 'any' creeps in in just too many palces
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    'unicorn/filename-case': [
      // We use kebab for normal stuff, and Pascal for classes
      'error',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    'no-param-reassign': ['error', { props: false }], // totes legit to modify the props of an input
    'import/no-extraneous-dependencies': baseAirbnbTypescriptRules['import/no-extraneous-dependencies'].map((rule) => {
      if (Array.isArray(rule.devDependencies)) {
        rule.devDependencies.push('e2e/**'); // angular uses this folder pattern for end to end tests
      }
      return rule;
    }),
    '@typescript-eslint/no-unused-vars': [
      // we are adding args prefixed with _ to pass. This is how typescript works, so we follow that convention
      'warn', // baseVariableRules['no-unused-vars'][0], // accidentally set this to warn even though airbnb says error. keeping it anyways
      { argsIgnorePattern: '^_', ...baseVariableRules['no-unused-vars'][1] },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkFilenames: false, // file names for config files sets this off more than it is worth it. Checking class names match file names probably close enough for this
        extendDefaultReplacements: false, // abbrevs are bad when they are ambiguous, but building a list of common ambiguous abbrevs is literally impossible. So lets shorten it to just the real terrible one.
        replacements: {
          e: {
            error: true,
            event: true,
          },
          res: {
            result: true,
            response: true,
          },
          req: {
            request: true, // only to match the res -> response abbrev
          },
        },
      },
    ],
    'unicorn/consistent-function-scoping': [
      // Not just an efficiency thing, also helps with readability.
      'error',
      {
        checkArrowFunctions: false, // But lets disable checking arrow functions just to be a little lenient
      },
    ],
    'unicorn/error-message': 'error', // Ensure error messages aren't trash
    'unicorn/expiring-todo-comments': 'error', // Fun and cool and also entirely optional. todos without conditions are just ignored
    'unicorn/explicit-length-check': 'error', // Treating length as a boolean is a cool hack, but it is a hack
    'unicorn/new-for-builtins': 'error', // Just enforces good practice
    'unicorn/no-array-for-each': 'error', // For..of rules! array callback forEach is a poor man's map anyway
    'unicorn/no-array-method-this-argument': 'error', // Encourages using arrow functions in very specific scenarios
    'unicorn/no-array-push-push': 'warn', // It's technically correct, but is also a micro optimisation, so lets just make it a warning
    'unicorn/no-array-reduce': [
      // Just a micro optimisation, so we will just warn
      'warn',
      {
        allowSimpleOperations: true, // allows summing collections
      },
    ],
    'unicorn/no-console-spaces': 'warn', // This isn't a bug, just probably incorrect, so we just warn
    'unicorn/no-for-loop': 'error', // For..of rules!
    'unicorn/no-instanceof-array': 'error', // Be consistent about type checking
    'unicorn/no-lonely-if': 'error', // Builds on airbnb rules we have already accepted
    'unicorn/no-new-array': 'error', // Since we prefer spread, we should avoid new arrays
    'unicorn/no-new-buffer': 'error', // Gives a fix for if someone uses deprecated code
    'unicorn/no-object-as-default-parameter': 'error', // Will maybe help prevent bugs
    'unicorn/no-this-assignment': 'warn', // Assigning `this` is cool and normal, but the rule reasoning tracks. So we only warn
    'unicorn/no-unreadable-array-destructuring': 'error', // Just stops you from being silly
    'unicorn/no-useless-length-check': 'warn', // Micro optimisation
    'unicorn/no-useless-spread': 'error', // Prevents you being silly
    'unicorn/prefer-array-find': 'error', // Prevents you being silly
    'unicorn/prefer-array-flat': 'error', // Prevents you being silly
    'unicorn/prefer-array-flat-map': 'error', // Prevents you being silly
    'unicorn/prefer-array-index-of': 'error', // indexOf is more consistent
    'unicorn/prefer-array-some': 'error', // Prevents you being silly
    'unicorn/prefer-date-now': 'warn', // This is a micro optimisation that does not really effect anything
    'unicorn/prefer-default-parameters': 'warn', // Encourages you to use cool new ES6 feature
    'unicorn/prefer-includes': 'error', // Prevents you being silly
    'unicorn/prefer-math-trunc': 'error', // Bitwise operations are pretty rare, but we should not be using them to do unrelated math
    'unicorn/prefer-negative-index': 'warn', // Just a micro optimisation
    'unicorn/prefer-object-from-entries': 'error', // Use more modern technique to build object in ES6
    'unicorn/prefer-object-has-own': 'error', // Use more modern technique for this operation
    'unicorn/prefer-optional-catch-binding': 'warn', // Just a micro optimisation
    'unicorn/prefer-prototype-methods': 'error', // For when using prototype methods, dont be making random instances.
    'unicorn/prefer-regexp-test': 'error', // Makes you use regex in a more sensible way
    'unicorn/prefer-set-has': 'warn', // This is a good optimisation, but the rule has some weird things that makes me worried about making it an error
    'unicorn/prefer-spread': 'error', // Spread rules and we all love spread
    'unicorn/prefer-string-replace-all': 'error', // A good optimisation that stops you making unneeded regexs
    'unicorn/prefer-string-slice': 'warn', // Makes sense as a rule, but is not vital enough to error
    'unicorn/prefer-string-starts-ends-with': 'error', // A good optimisation that stops you making unneeded regexs
    'unicorn/prefer-ternary': ['error', 'only-single-line'], // Compresses things down to more readable ternary (only if both are single lines)
    'unicorn/require-number-to-fixed-digits-argument': 'error', // Is more explicit than assuming the default
    'unicorn/throw-new-error': 'error', // Is a sensible convention that should be followed
    '@typescript-eslint/require-await': 'off', // Sometimes a function needs a promise to fit an interface. Or sometimes you want to throw instead of reject. No one really makes a function async without meaning to. especially combined with the forced return type declaration
    'promise/prefer-await-to-callbacks': 'off', // Too many false positives
    'security-node/detect-crlf': 'off', // Would be more annoying than helpful.
    'unicorn/no-useless-fallback-in-spread': 'error', // Prevents the dev doing something unnecessary
    'unicorn/template-indent': 'warn', // Makes sure your inline string code can be neater if possible
    'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }], // Good practice, but if you are using then it makes sense to allow it.
    'unicorn/prefer-code-point': 'error', // Use the more consistent functions
    'unicorn/no-await-expression-member': 'warn', // Encourages writing more readable code
    'unicorn/no-useless-promise-resolve-reject': 'error', // Dont make functions more complicated for no reason
    'unicorn/no-thenable': 'warn', // This can only maybe cause problems, but we should warn the dev they are being weird
    'unicorn/prefer-json-parse-buffer': 'warn', // It's an optimisation, but a sensible one if the file is quite large
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
      files: ['**/*.test.*', '**/*.spec.*'],
      rules: {
        'sonarjs/no-duplicate-string': 'off', // we duplicate strings in tests all the time and they shouldn't be the same instance in tests for isolation
        'sonarjs/no-identical-functions': 'off', // tests are often bad bad on purpose
        '@typescript-eslint/no-magic-numbers': 'off', // magic number are fun and good in tests
        // tests are full of any casts and whatnot
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
  ],
};
const typescriptVersion = getTypescriptVersion();
if (typescriptVersion && versionSatisfies(typescriptVersion, '<3.8')) {
  module.exports.rules['import/no-cycle'] = 'off'; // if it is an old version of ts, we can't import only types. So disable this for those situations.
}
