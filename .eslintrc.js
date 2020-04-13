module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-var': 'error',
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    'getter-return': 'warn',
    'no-extra-semi': 'warn',
    'no-empty': 'warn',
    'no-template-curly-in-string': 'warn',
    'array-callback-return': 'error',
    'dot-notation': 'error',
    'no-throw-literal': 'error',
    'prefer-regex-literals': 'error',
    'no-warning-comments': 'warn',
    'require-await': 'warn',
    'object-shorthand': 'warn',
    'no-unneeded-ternary': 'warn',
    eqeqeq: ['error', 'smart'],
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
      },
    ],
  },
};
