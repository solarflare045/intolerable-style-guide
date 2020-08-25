module.exports = {
  plugins: ['jest'],
  overrides: [
    {
      files: ['**/*.test.ts'],
      extends: 'plugin:jest/recommended', //assuming a normal jest test file, implement the jest rules
    },
  ],
};
