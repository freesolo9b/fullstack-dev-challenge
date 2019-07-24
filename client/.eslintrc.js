module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends:  ['airbnb',
    "plugin:flowtype/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'flowtype'
  ],
  rules: {
    'linebreak-style':0,
    'react/jsx-filename-extension':0,
    'no-tabs':0,
    'no-mixed-spaces-and-tabs':0,
    'prefer-destructuring':0,
    'no-plusplus':0
  },
};
