import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  plugins: {
    unicorn,
  },
  rules: {
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': [
      'error',
      {
        allowWarningComments: false,
      },
    ],
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-console-spaces': 'error',
  },
});
