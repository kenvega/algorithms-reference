module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-use-before-define": "off",
    "max-len": ["error", { "code": 100, "ignoreComments": true }],
    "arrow-parens": ["error", "as-needed"],
    "no-plusplus": "off",
    "quotes": ["error", "double", { "avoidEscape": true }],
    "no-console": "off",
    "semi": ["error", "never"],
    "no-trailing-spaces": "off",
    "operator-linebreak": "off"
  },
};
