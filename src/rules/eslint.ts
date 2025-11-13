import { defineConfig } from 'eslint/config';

export default defineConfig({
  rules: {
    curly: ['error', 'all'],
    eqeqeq: ['error', 'smart'],
    'no-warning-comments': 'warn',
  },
});
