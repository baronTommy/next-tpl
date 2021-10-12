/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier", // 最後に書く
  ],
  overrides: [
    {
      files: [
        ".eslintrc.js",
        "babel.config.js",
        "jest.config.js",
        "lint-staged.config.js",
      ],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
