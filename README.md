# intolerable-style-guide [![npm version](https://badge.fury.io/js/eslint-config-intolerable-style-guide.svg)](https://www.npmjs.com/package/eslint-config-intolerable-style-guide)

*If your linter isn't constantly yelling at you, it isn't strict enough.*

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Installation

You can install **`eslint-config-intolerable-style-guide`** using npm via
```
npm install -D eslint-config-intolerable-style-guide eslint@8
```
The config will install all the plugins and whatnot, but this relies on eslint's plugin system finding them in the top of the node_modules kinda by chance. They _should_ be peer dependancies, but I reckon it'll be fine like this. Worst case scenario: you just install the plugins needed yourself.

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

## How to maintain

### Files
The main ruleset is maintained in the [`index.js`](index.js) file. Most rules are commented with their justification for existence, and why decisions have been made.
There is also a [`jest.js`](jest.js) for including in projects that have jest.
And last there is the [`prettier.json`](prettier.json) file that includes the prettier config. These are the big 3 files that are used when importing this config. If you add any, be sure to put them in the `package.json` `files` setting, as this repo is published with a whitelist and you new file will not be included in the publish without it.
This repository does not get transpiled at all, so ensure the code you write is compatible with the versions of node you want to run on.

### Commits
This repository follows the [Conventional Commits](https://conventionalcommits.org) pattern for commit messages.

### Release
When it comes time for a release you should be able to find a pull request on the github repo that is offering to bump the version and update the changelog. This will also tag the github repo.
If you don't want to use this bot (or it broke or something), then you can fall back to running the `npm run release` command and it will do the same thing for you.

### Publishing
To publish to NPM you just need to push a tag to github and it will automatically run the [workflow](.github/workflows/publish.yml) to do this. You could also just publish locally.
