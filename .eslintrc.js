module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
  },
  rules: {
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
  },
  overrides: [{
    files: '*.spec.js',
    env: {
      jasmine: true,
    },
  }],
};
