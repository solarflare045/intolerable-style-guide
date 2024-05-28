import versionSatisfies from 'semver/functions/satisfies';

function getTypescriptVersion(): string | null {
  try {
    const typescript = require('typescript');
    return typescript.version;
  } catch (_e) {}
  return null;
}

const ourTsVer = getTypescriptVersion();
export function tsiif<TTrue = unknown, TFalse = unknown>(semver: string, isTrue: TTrue, isFalse: TFalse): TTrue | TFalse {
  return (ourTsVer && versionSatisfies(ourTsVer, semver)) ? isTrue : isFalse;
}
