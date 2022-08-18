module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint', 'mocha'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    // 0 = "off", 1 = "warn", 2 = "error"
    camelcase: 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/explicit-member-accessibility': 0,
    'no-unused-expressions': 0,
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-useless-constructor': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    /* Mocha Test Rules */
    'mocha/no-exclusive-tests': 'error',
    /* TODO: We should fix the errors and re-enable these rules */
    '@typescript-eslint/no-empty-function': 0,
    'node/no-deprecated-api': 0,
    'no-prototype-builtins': 0,
    'no-async-promise-executor': 0,
    // "max-len": ["warn", {"code": 80, "ignoreUrls": true}],
    'no-console': 1
  }
}
