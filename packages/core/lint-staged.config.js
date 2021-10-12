module.exports = {
  "*.json": ["prettier --write"],
  "*.md": ["prettier --write"],
  "*.yml": ["prettier --write"],
  "*.js": ["eslint --fix", "prettier --write"],
  "*.{ts,tsx}": ["stylelint --fix", "eslint --fix", "prettier --write"],
};
