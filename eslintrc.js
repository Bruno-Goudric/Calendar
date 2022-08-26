module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    semi: [2, 'always'],
    camelcase: 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'space-before-function-paren': 'off',
    'react/prop-types': 0,
    'react/display-name': 0,
    '@typescript-eslint/no-unused-vars': 'off',
    'no-extra-boolean-cast': 'off',
    'import/no-duplicates': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'dot-notation': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    }
  }
};
