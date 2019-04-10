module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    semi: ['error', 'always']
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: false
    },
    parser: '@typescript-eslint/parser'
  }
};
