import { defineConfig } from 'eslint/config';
import unicorn from 'eslint-plugin-unicorn';

export default defineConfig({
  plugins: {
    unicorn,
  },
  rules: {
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': [
      'error',
      {
        allowWarningComments: true,
      },
    ],
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-console-spaces': 'error',
  },
});
