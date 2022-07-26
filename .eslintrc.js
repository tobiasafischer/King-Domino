module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
   },
   plugins: ['@typescript-eslint'],
   rules: {
      'consistent-return': 'off',
      'semi-style': 'off',
      'no-nested-ternary': 'off',
      'import/prefer-default-export': 'off',
      'spaced-comment': ['warn'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'function-paren-newline': 'off',
      'operator-linebreak': 'off',
      'implicit-arrow-linebreak': 'off',
      'no-trailing-spaces': 'off',
      indent: ['off'],
      'no-tabs': 0,
      'no-unneeded-ternary': 'off',
      'no-confusing-arrow': 'off',
      'no-bitwise': 0,
      'no-param-reassign': 0,
      'arrow-body-style': ['warn', 'as-needed'],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'linebreak-style': 0,
      'no-underscore-dangle': 'off',
      'object-curly-newline': 'off',
      'dot-notation': 'off',
      'no-console': 'warn',
      semi: 'off',
   },
}
