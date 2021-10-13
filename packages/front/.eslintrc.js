/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    // "next/core-web-vitals", // TODO 8.0対応街  --  "quality:lint": "next lint",
    "prettier", // 最後に書く
  ],
  overrides: [
    {
      files: [
        ".eslintrc.js",
        "babel.config.js",
        "jest.config.js",
        "lint-staged.config.js",
        "next.config.js",
      ],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
