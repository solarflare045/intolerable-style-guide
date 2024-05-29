import tseslint from 'typescript-eslint';

export default tseslint.config({
  rules: {
    'curly': ['error', 'all'],
    'eqeqeq': ['error', 'smart'],
  },
});
