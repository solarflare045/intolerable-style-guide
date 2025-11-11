import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  plugins: {
    unicorn,
  },
  rules: {
    'unicorn/better-regex': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': [
      'error',
      {
        allowWarningComments: true,
      },
    ],
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-accessor-recursion': 'error',
    'unicorn/no-array-reverse': 'error',
    'unicorn/no-array-sort': 'error',
    'unicorn/no-await-expression-member': 'off', // * Revisit this
    'unicorn/no-await-in-promise-methods': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-immediate-mutation': 'error',
    'unicorn/no-instanceof-builtins': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-negation-in-equality-check': 'error',
    'unicorn/no-thenable': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/no-unnecessary-array-splice-count': 'error',
    'unicorn/no-useless-error-capture-stack-trace': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-switch-case': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': ['error', { onlyIfContainsSeparator: true }],
    'unicorn/prefer-class-fields': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/require-module-specifiers': 'error',
  },
});
