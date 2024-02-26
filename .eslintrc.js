module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'prettier/prettier': 0,
    'no-console': 'off',
  },
}
