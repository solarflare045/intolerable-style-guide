const a = Math.random() ? 'WARBLE' : 'BLARG';
const b = Math.random() ? 'WARBLE' : 'BLARG';

const c = a === 'WARBLE';

if (c) {
  if (c) {
    console.log('WARBLE');
  } else {
    console.log('BLARG');
  }
}
