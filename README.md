# intolerable-style-guide [![npm version](https://badge.fury.io/js/intolerable-style-guide.svg)](https://www.npmjs.com/package/intolerable-style-guide)

*If your linter isn't constantly yelling at you, it isn't strict enough.*

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Installation

You can install **`eslint-config-intolerable-style-guide`** using npm via
```
npm install -D eslint-config-intolerable-style-guide eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-array-func eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-security eslint-plugin-sonarjs eslint-plugin-unicorn
```

You will also need to install appropriate versions of **`eslint`** and friends. Just look out for the peerDependency warnings you get as you install this package.

## Configuration

TODO

It is also recommended to manually add a linting script to your `package.json`, which should look like this:

```
"scripts": {
  ...
  "lint": "eslint ."
}
```

This will allow you to run:
```
npm run lint
```

## Querks

None. It is perfect.