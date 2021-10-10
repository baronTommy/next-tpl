/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    "jest/globals": true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "@cybozu/eslint-config/presets/react-typescript-prettier",
    "next/core-web-vitals",
    "prettier", // 最後に書く
  ],
};
