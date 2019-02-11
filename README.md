# intolerable-style-guide [![npm version](https://badge.fury.io/js/intolerable-style-guide.svg)](https://www.npmjs.com/package/intolerable-style-guide)

*If your linter isn't constantly yelling at you, it isn't strict enough.*

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Installation

You can install **`intolerable-style-guide`** using npm via
```
npm install -D intolerable-style-guide
```

You will also need to install appropriate versions of **`tslint`** and friends. Just look out for the peerDependency warnings you get as you install this package.

## Configuration

Once you have installed this package, you will need to setup your `tslint.json` in the root of your project. Just copy in:

```
{
  "extends": "intolerable-style-guide"
}
```

It is also recommended to manually add a linting script to your `package.json`, which should look like this:

```
"scripts": {
  ...
  "lint": "tslint -p . -c tslint.json"
}
```

This will allow you to run:
```
npm run lint
```

## Querks

Some of the rules require type-checking, which is disabled when Visual Studio Code runs its linting tool (due to performance reasons.) Because of this, rules like `await-promise` won't work until you call the linter from the console.