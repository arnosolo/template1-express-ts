module.exports = {
  env: {
    node: true,
    es2020: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      'tsconfig.json'
      // 'test/tsconfig.json'
    ]
  },
  ignorePatterns: [
    'jest.config.cjs'
  ],
  rules: {
    quotes: ['error', 'single'],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off'
  }
}
