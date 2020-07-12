module.exports = {
  extends: ['stylelint-config-framelunch', 'stylelint-config-recess-order', 'stylelint-config-prettier'],
  ignoreFiles: ['.tmp/**/*', 'build/**/*', '_template/**/*', 'assets/**/*', 'src/assets/**/*', 'src/components/**/lib/**/*'],
  rules: {
    "order/properties-order": null,
    "selector-max-specificity": null,
    "no-descending-specificity": null,
  }
};
