import tseslint from 'typescript-eslint';
import * as sonarjs from 'eslint-plugin-sonarjs';

export default tseslint.config({
  plugins: {
    sonarjs,
  },
  rules: {
    'sonarjs/cognitive-complexity': ['warn', 15],
    'sonarjs/no-all-duplicated-branches': 'error',
    'sonarjs/no-collapsible-if': 'error',
    'sonarjs/no-duplicate-string': ['warn', { threshold: 3 }],
    'sonarjs/no-duplicated-branches': 'error',
    'sonarjs/no-empty-collection': 'error',
    'sonarjs/no-gratuitous-expressions': 'error',
    'sonarjs/no-identical-expressions': 'error',
    'sonarjs/no-nested-template-literals': 'error',
    'sonarjs/no-one-iteration-loop': 'error',
    'sonarjs/no-redundant-boolean': 'error',
    'sonarjs/no-same-line-conditional': 'error',
    'sonarjs/prefer-immediate-return': 'error',
    'sonarjs/prefer-object-literal': 'error',
    'sonarjs/prefer-single-boolean-return': 'error',
    'sonarjs/prefer-while': 'error',
  }
});
