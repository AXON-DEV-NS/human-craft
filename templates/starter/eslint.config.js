export default [
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    rules: {
      'no-eval': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always']
    }
  }
];
