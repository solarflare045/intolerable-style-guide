# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.1.1](https://github.com/solarflare045/intolerable-style-guide/compare/v2.1.0...v2.1.1) (2020-10-19)

## [2.1.0](https://github.com/solarflare045/intolerable-style-guide/compare/v2.0.0...v2.1.0) (2020-10-19)


### Features

* add some default overrides for tests and js files ([f23b9a4](https://github.com/solarflare045/intolerable-style-guide/commit/f23b9a4b88d14fcbbcf9a9df82e232b18ed53cbb))
* allow expressions to have implicit types ([9dc8004](https://github.com/solarflare045/intolerable-style-guide/commit/9dc8004402cb26058e377ca0512a8179a2001c11))
* allow magic numbers in tests ([3e06536](https://github.com/solarflare045/intolerable-style-guide/commit/3e0653652ae71c745821442139e4b68812b19698))
* allow modifiying argument properties ([9fc0935](https://github.com/solarflare045/intolerable-style-guide/commit/9fc0935f6a730cf0e423ee7cce2eea8190e10a51))
* allow more filename types ([961a26e](https://github.com/solarflare045/intolerable-style-guide/commit/961a26eb866399b7ca048161e63ea3b821488d43))
* allow nulls and undefined are warnings ([2462dbf](https://github.com/solarflare045/intolerable-style-guide/commit/2462dbf067cd4d01e6720912fd19028ff62f1786))
* allow underscore in memeber names ([0748b03](https://github.com/solarflare045/intolerable-style-guide/commit/0748b03e2cb24bf4d9e651c3f272e08de281af8b))
* allow void as a statement for discarding promises ([a708db4](https://github.com/solarflare045/intolerable-style-guide/commit/a708db479fb20587a17cd8feb40c9200a96cd6bc))
* disable class-methods-use-this rule entirely ([5e78c82](https://github.com/solarflare045/intolerable-style-guide/commit/5e78c82764d4508ecb5af95ee1abe62dac74e7bb))
* disable global require rule as it is redundant ([0aea2c7](https://github.com/solarflare045/intolerable-style-guide/commit/0aea2c7b96d4d4f7670b975d271c8dfda9756339))
* increase the line length ([c7a0209](https://github.com/solarflare045/intolerable-style-guide/commit/c7a0209aef12885dd8dfc84003531c80d31210e7))
* let more magic numbers through the rules ([5aba65c](https://github.com/solarflare045/intolerable-style-guide/commit/5aba65c28d62398f0f41d8588204838cd7bb50a5))
* science to test if plugin dependancies flow okish ([b5b98a0](https://github.com/solarflare045/intolerable-style-guide/commit/b5b98a03f7dfc5069ed44a95ecaaa35f7a41c3e6))
* set the no-unsafe any rules to warns only ([3eb6122](https://github.com/solarflare045/intolerable-style-guide/commit/3eb61226adc086a8bf0facd00d08f3b7412b6e3d))
* stop erroring on cycle dependancies if typescript demands it ([0284d24](https://github.com/solarflare045/intolerable-style-guide/commit/0284d2443e15a8988570e4217d8bb523402efbfc))


### Bug Fixes

* add spec files to the default test list ([a8bfa57](https://github.com/solarflare045/intolerable-style-guide/commit/a8bfa57cf3e7fe1be9ac0f7960c3ffd5f05b047b))
* disable array.from rule as ...spread is better ([7004a93](https://github.com/solarflare045/intolerable-style-guide/commit/7004a937195e0edd2acace6ccb1e10b4d646252f))
* disable some rules to account for angular ([718ea3c](https://github.com/solarflare045/intolerable-style-guide/commit/718ea3cb54b3ded8aa3d154f73a2ea9b5f5419ca))
* ignore more things in the npm package ([44fc941](https://github.com/solarflare045/intolerable-style-guide/commit/44fc9419d74cd13be7ea6dcd1cf2ba156eea1dd1))
* use exact semver version to fix npm bug ([4b6f0af](https://github.com/solarflare045/intolerable-style-guide/commit/4b6f0afa6b85cb2a959e87d53e5a9cc6840b2df6))

<a name="2.0.0"></a>
# [2.0.0](https://github.com/solarflare045/intolerable-style-guide/compare/v1.3.0...v2.0.0) (2020-08-25)


### Bug Fixes

* remove node config that was broken and uneeded ([2540186](https://github.com/solarflare045/intolerable-style-guide/commit/2540186))


### Features

* add support for warning about lodash being unneeded ([1a4171a](https://github.com/solarflare045/intolerable-style-guide/commit/1a4171a))
* allow awaits in loops ([a48aa77](https://github.com/solarflare045/intolerable-style-guide/commit/a48aa77))
* have prettier run through eslint ([63ffc30](https://github.com/solarflare045/intolerable-style-guide/commit/63ffc30))


* feat!: introduce new eslint config to replace the tslint one ([0e90aa4](https://github.com/solarflare045/intolerable-style-guide/commit/0e90aa4))


### BREAKING CHANGES

* everything is different now



<a name="1.3.0"></a>
# [1.3.0](https://github.com/solarflare045/intolerable-style-guide/compare/v1.2.3...v1.3.0) (2019-10-18)


### Features

* support later versions of typescript ([f9d50ac](https://github.com/solarflare045/intolerable-style-guide/commit/f9d50ac))



<a name="1.2.3"></a>
## [1.2.3](https://github.com/solarflare045/intolerable-style-guide/compare/v1.2.2...v1.2.3) (2019-02-19)


### Bug Fixes

* **rules:** added RequestPromise as a Promise type ([f4fd794](https://github.com/solarflare045/intolerable-style-guide/commit/f4fd794))
* **rules:** removed import blacklist ([0953c74](https://github.com/solarflare045/intolerable-style-guide/commit/0953c74))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/solarflare045/intolerable-style-guide/compare/v1.2.1...v1.2.2) (2019-02-11)



<a name="1.2.1"></a>
## [1.2.1](https://github.com/solarflare045/intolerable-style-guide/compare/v1.2.0...v1.2.1) (2018-05-21)


### Bug Fixes

* added PromiseLike as a Promise type ([6208e4f](https://github.com/solarflare045/intolerable-style-guide/commit/6208e4f))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/solarflare045/intolerable-style-guide/compare/v1.1.0...v1.2.0) (2018-04-27)


### Features

* bumped up tslint version requirement ([be4fdf9](https://github.com/solarflare045/intolerable-style-guide/commit/be4fdf9))
* **rules:** added completed-docs as a warning ([2323b0d](https://github.com/solarflare045/intolerable-style-guide/commit/2323b0d))
* no-magic-numbers is now a warning ([544eb4a](https://github.com/solarflare045/intolerable-style-guide/commit/544eb4a))
* **rules:** added cyclomatic-complexity as a warning ([52318a1](https://github.com/solarflare045/intolerable-style-guide/commit/52318a1))
* **rules:** added deprecation as a warning ([1d5a29c](https://github.com/solarflare045/intolerable-style-guide/commit/1d5a29c))
* **rules:** added newline-per-chained-call ([b9fa1ae](https://github.com/solarflare045/intolerable-style-guide/commit/b9fa1ae))
* **rules:** added no-any as a warning ([cebf66c](https://github.com/solarflare045/intolerable-style-guide/commit/cebf66c))
* **rules:** added no-object-literal-type-assertion ([a973f98](https://github.com/solarflare045/intolerable-style-guide/commit/a973f98))
* **rules:** added no-var-requires ([6e41f06](https://github.com/solarflare045/intolerable-style-guide/commit/6e41f06))



<a name="1.1.0"></a>
# 1.1.0 (2018-04-15)


### Bug Fixes

* ensure peerDependencies reflects ruleset ([0444e45](https://github.com/solarflare045/intolerable-style-guide/commit/0444e45))


### Features

* **rules:** added await-promise ([c57ece2](https://github.com/solarflare045/intolerable-style-guide/commit/c57ece2))
* **rules:** added ban-comma-operator ([57a80eb](https://github.com/solarflare045/intolerable-style-guide/commit/57a80eb))
* **rules:** added no-implicit-dependencies ([d7c84eb](https://github.com/solarflare045/intolerable-style-guide/commit/d7c84eb))
* **rules:** imported the sensible airbnb standards ([9f95bf6](https://github.com/solarflare045/intolerable-style-guide/commit/9f95bf6))
