const a = {};
async function test(): Promise<never> {
  throw new Error('wow');
}
