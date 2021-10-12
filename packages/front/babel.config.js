/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  presets: ["next/babel"],
  env: {
    production: {
      plugins: ["babel-plugin-jsx-remove-data-test-id"],
    },
  },
};
