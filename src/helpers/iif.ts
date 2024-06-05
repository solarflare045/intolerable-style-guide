import { satisfies as versionSatisfies } from 'semver';

function getTypescriptVersion(): string | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
    const typescript = require('typescript');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return typescript.version;
  } catch (_e) {
    // Eat this delicious error. Om nom.
  }
  return null;
}

const ourTsVer = getTypescriptVersion();
export function tsiif<TTrue = unknown, TFalse = unknown>(
  semver: string,
  isTrue: TTrue,
  isFalse: TFalse,
): TFalse | TTrue {
  return ourTsVer != null && versionSatisfies(ourTsVer, semver) ? isTrue : isFalse;
}
