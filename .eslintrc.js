module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'plugin:mocha/recommended',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ['mocha'],
  rules: {
    'linebreak-style':0,
    'react/jsx-filename-extension':0,
    'no-tabs':0,
    'no-mixed-spaces-and-tabs':0,
    'prefer-destructuring':0,
    'no-plusplus':0,
    'mocha/no-mocha-arrows':0
  },
};
