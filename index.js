module.exports = {
  plugins: [
    "@typescript-eslint",
    "array-func",
    "promise",
    "eslint-comments",
    "unicorn",
    "sonarjs",
    "security",
  ],
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:array-func/all",
    "plugin:promise/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended",
    "prettier", //last so it wins over every other plugin
    "prettier/@typescript-eslint",
    "prettier/unicorn",
  ],
  rules: {
    "no-prototype-builtins": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    "no-console": "off",
    "spaced-comment": "off",
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'class-methods-use-this': "warn",
    "promise/prefer-await-to-then": "error",
    "promise/prefer-await-to-callbacks": "warn",
  }
}