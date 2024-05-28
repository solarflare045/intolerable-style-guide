import { Linter } from 'eslint';

const config: Linter.FlatConfig = {
  rules: {
    'curly': ['error', 'all'],
    'eqeqeq': ['error', 'smart'],
  },
};

export default config;
