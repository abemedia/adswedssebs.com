module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/no-danger': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/order': [
      'error',
      { alphabetize: { order: 'asc', caseInsensitive: true }, 'newlines-between': 'never' },
    ],
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: false },
    ],
  },
}
