import { Linter } from 'eslint';
import unicorn from 'eslint-plugin-unicorn';

const config: Linter.FlatConfig = {
  plugins: {
    unicorn,
  },
  rules: {
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': ['error', {
      allowWarningComments: false,
    }],
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-console-spaces': 'error',
  }
}

export default config;
