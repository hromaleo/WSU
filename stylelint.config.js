module.exports = {
  plugins: [
    'stylelint-scss',
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    'no-empty-source': null,
    'function-no-unknown': null,
    'keyframes-name-pattern': null,
    'selector-class-pattern': null,
    'scss/at-mixin-pattern': null,
  },
}
