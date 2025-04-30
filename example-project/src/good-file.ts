import { join } from 'path';

function goodFunction(): void {
  console.log('This is a good function');
}

function CapitalLetterFunction(): void {
  console.log('This is sadly required because there are a few times you need to do this.');
  console.log('Code review will need to be the method of making sure lower case letters are used for function names.');
}

console.log(join('a', 'b'));
goodFunction();
CapitalLetterFunction();

export class Blarg {
  smallFunc(): void {
    console.log('This is a small function');
  }
}
