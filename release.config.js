module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        // https://github.com/arvinxx/gitmoji-commit-workflow
        parserOpts: {
          headerPattern:
            /^(?::\w*:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55])\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))\s?(?<ticket>#\d*)?$/,
          headerCorrespondence: ["type", "scope", "subject", "ticket"],
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        },
        releaseRules: [
          {
            breaking: true,
            release: "major",
          },
          { type: "feat", release: "minor" },
          {
            release: "patch",
          },
        ],
      },
    ],
  ],
};
