# intolerable-style-guide [![npm version](https://badge.fury.io/js/eslint-config-intolerable-style-guide.svg)](https://www.npmjs.com/package/eslint-config-intolerable-style-guide)

*If your linter isn't constantly yelling at you, it isn't strict enough.*

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Installation

You can install **`eslint-config-intolerable-style-guide`** using npm via
```
npm install -D eslint-config-intolerable-style-guide eslint@9
```

## Configuration

You can configure ESLint to use the Intolerable Style Guide by adding the following `eslint.config.js` to your project:
```javascript
const { ISG } = require('eslint-config-intolerable-style-guide');

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
```

It is also recommended to manually add a linting script to your `package.json`, which should look like this:

```json
"scripts": {
  ...
  "lint": "eslint ."
}
```

This will allow you to run:
```bash
npm run lint
```

You could also consider running [lint-staged](https://github.com/okonet/lint-staged) to add some githooks to check the code before commit.
```json
"lint-staged": {
  "*.ts": "eslint"
}
```

## Querks

None. It is perfect.
