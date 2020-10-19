# intolerable-style-guide [![npm version](https://badge.fury.io/js/intolerable-style-guide.svg)](https://www.npmjs.com/package/intolerable-style-guide)

*If your linter isn't constantly yelling at you, it isn't strict enough.*

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Installation

You can install **`eslint-config-intolerable-style-guide`** using npm via
```
npm install -D eslint-config-intolerable-style-guide eslint
```
The config will install all the plugins and whatnot, but this relies on eslint's plugin system finding them in the top of the node_modules kinda by chance. They _should_ be peer dependancies, but I reckon it'll be fine like this. Worst case scenario: you just install the plugins needed yourself.

## Configuration

If you look in the `example-project` folder, it will have the files you need.
They are all optional except for `.eslintrc.yml`. At a minimum, that will need to be:
```yml
extends:
  - intolerable-style-guide
parserOptions:
  project: ./tsconfig.json
root: true
```
The `.eslintignore` file is a gitignore style file to tell the linter what folders not to look at.
The `.prettierrc` and `.prettierignore` files will tell your IDE how to do formatting if you use the prettier plugin for it. If you just want eslint to fix those, you can leave it out.

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