const versionSatisfies = require('semver/functions/satisfies');

function getTypescriptVersion() {
  try {
    const typescript = require('typescript');
    return typescript.version;
  } catch (_e) {}
  return null;
}

const ourTsVer = getTypescriptVersion();
function tsiif(semver, isTrue, isFalse) {
  return (ourTsVer && versionSatisfies(semver)) ? isTrue : isFalse;
}

module.exports.tsiif = tsiif;
