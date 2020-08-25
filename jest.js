module.exports = {
  plugins: [
    'jest',
  ],
  overrides: [{
    files: ['**/*.test.ts'],
    extends: 'plugin:jest/recommended',
  }]
}